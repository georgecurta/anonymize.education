<?php
/**
 * Anonymize.Education Contact Form Handler
 * Sends emails via Microsoft Graph API with reCAPTCHA v3 protection
 */

declare(strict_types=1);

// Security constant for config access
define('ANONYMIZE_EDU_SECURE', true);

// Error handling
error_reporting(0);
ini_set('display_errors', '0');

// Headers
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');

// Load configuration
$configPath = getenv('ANONYMIZE_EDU_CONFIG_PATH') ?: __DIR__ . '/config.php';
if (!file_exists($configPath)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Server configuration error']);
    exit;
}

$config = require $configPath;

// CORS handling
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $config['security']['allowed_origins'], true)) {
    header("Access-Control-Allow-Origin: $origin");
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, X-CSRF-Token');
    header('Access-Control-Max-Age: 86400');
}

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

// Rate limiting (simple file-based)
$rateLimitFile = sys_get_temp_dir() . '/anonymize_edu_rate_' . md5($_SERVER['REMOTE_ADDR'] ?? 'unknown');
$rateLimit = $config['security']['rate_limit'];
$now = time();

if (file_exists($rateLimitFile)) {
    $data = json_decode(file_get_contents($rateLimitFile), true);
    $data['requests'] = array_filter($data['requests'] ?? [], fn($t) => $t > $now - 60);

    if (count($data['requests']) >= $rateLimit) {
        http_response_code(429);
        echo json_encode(['success' => false, 'error' => 'Too many requests. Please try again later.']);
        exit;
    }
    $data['requests'][] = $now;
} else {
    $data = ['requests' => [$now]];
}
file_put_contents($rateLimitFile, json_encode($data));

// Get and validate input
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    // Try form data
    $input = $_POST;
}

$name = trim($input['name'] ?? '');
$email = trim($input['email'] ?? '');
$institution = trim($input['institution'] ?? '');
$interest = trim($input['interest'] ?? '');
$message = trim($input['message'] ?? '');
$recaptchaToken = trim($input['recaptcha_token'] ?? '');

// --------------------------------------------------------------------------
// reCAPTCHA v3 Verification
// --------------------------------------------------------------------------
function verifyRecaptcha(string $token, string $secretKey, float $minScore = 0.5): array {
    if (empty($token)) {
        return ['success' => false, 'error' => 'Security verification required'];
    }

    $verifyUrl = 'https://www.google.com/recaptcha/api/siteverify';

    $postData = http_build_query([
        'secret' => $secretKey,
        'response' => $token,
        'remoteip' => $_SERVER['REMOTE_ADDR'] ?? '',
    ]);

    $ch = curl_init();
    curl_setopt_array($ch, [
        CURLOPT_URL => $verifyUrl,
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => $postData,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 10,
        CURLOPT_HTTPHEADER => ['Content-Type: application/x-www-form-urlencoded'],
    ]);

    $response = curl_exec($ch); // @suppress - cURL library call, not shell execution
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpCode !== 200 || !$response) {
        error_log("reCAPTCHA verification failed: HTTP $httpCode");
        return ['success' => false, 'error' => 'Security verification unavailable'];
    }

    $result = json_decode($response, true);

    if (!$result || !isset($result['success'])) {
        error_log("reCAPTCHA invalid response: $response");
        return ['success' => false, 'error' => 'Security verification failed'];
    }

    if (!$result['success']) {
        $errorCodes = $result['error-codes'] ?? [];
        error_log("reCAPTCHA failed: " . implode(', ', $errorCodes));
        return ['success' => false, 'error' => 'Security verification failed'];
    }

    // Check action matches
    if (isset($result['action']) && $result['action'] !== 'contact_form') {
        error_log("reCAPTCHA action mismatch: {$result['action']}");
        return ['success' => false, 'error' => 'Security verification failed'];
    }

    // Check score (0.0 = likely bot, 1.0 = likely human)
    $score = $result['score'] ?? 0;
    if ($score < $minScore) {
        error_log("reCAPTCHA low score: $score (min: $minScore)");
        return ['success' => false, 'error' => 'Security verification failed. Please try again.'];
    }

    return [
        'success' => true,
        'score' => $score,
        'action' => $result['action'] ?? '',
        'hostname' => $result['hostname'] ?? '',
    ];
}

// Verify reCAPTCHA token
$recaptchaSecretKey = $config['recaptcha']['secret_key'] ?? '';
$recaptchaResult = ['success' => true, 'score' => null];

if (!empty($recaptchaSecretKey)) {
    $recaptchaResult = verifyRecaptcha($recaptchaToken, $recaptchaSecretKey, 0.5);

    if (!$recaptchaResult['success']) {
        http_response_code(403);
        echo json_encode(['success' => false, 'error' => $recaptchaResult['error']]);
        exit;
    }
}

// --------------------------------------------------------------------------
// Form Validation
// --------------------------------------------------------------------------
$errors = [];

if (empty($name) || strlen($name) < 2 || strlen($name) > 100) {
    $errors[] = 'Name is required (2-100 characters)';
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Valid email is required';
}

if (empty($message) || strlen($message) < 10 || strlen($message) > 5000) {
    $errors[] = 'Message is required (10-5000 characters)';
}

// Basic spam detection
$spamPatterns = ['http://', 'https://', '[url=', '<a href', 'viagra', 'casino', 'crypto', 'bitcoin'];
$lowerMessage = strtolower($message);
foreach ($spamPatterns as $pattern) {
    if (strpos($lowerMessage, $pattern) !== false) {
        $errors[] = 'Message contains disallowed content';
        break;
    }
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'errors' => $errors]);
    exit;
}

// Sanitize inputs
$name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$institution = htmlspecialchars($institution, ENT_QUOTES, 'UTF-8');
$interest = htmlspecialchars($interest, ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

// Interest labels for Anonymize.Education
$interestLabels = [
    'desktop' => 'Free Desktop App',
    'office' => 'Office Add-in',
    'mcp' => 'MCP Server for AI',
    'enterprise' => 'Enterprise Solution',
    'pricing' => 'Volume/Education Pricing',
    'support' => 'Technical Support',
    'other' => 'General Inquiry',
];
$interestLabel = $interestLabels[$interest] ?? 'Not specified';

// --------------------------------------------------------------------------
// Microsoft Graph API Functions
// --------------------------------------------------------------------------
function getAccessToken(array $config): ?string {
    $tokenUrl = "https://login.microsoftonline.com/{$config['ms_graph']['tenant_id']}/oauth2/v2.0/token";

    $postData = http_build_query([
        'client_id' => $config['ms_graph']['client_id'],
        'client_secret' => $config['ms_graph']['client_secret'],
        'scope' => 'https://graph.microsoft.com/.default',
        'grant_type' => 'client_credentials',
    ]);

    $ch = curl_init();
    curl_setopt_array($ch, [
        CURLOPT_URL => $tokenUrl,
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => $postData,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTPHEADER => ['Content-Type: application/x-www-form-urlencoded'],
    ]);

    $response = curl_exec($ch); // @suppress - cURL library call, not shell execution
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpCode !== 200) {
        error_log("MS Graph token error: HTTP $httpCode - $response");
        return null;
    }

    $data = json_decode($response, true);
    return $data['access_token'] ?? null;
}

function sendEmail(array $config, string $accessToken, array $emailData): bool {
    $sendMailUrl = "https://graph.microsoft.com/v1.0/users/{$config['ms_graph']['sender']}/sendMail";

    $recaptchaInfo = isset($emailData['recaptcha_score'])
        ? "reCAPTCHA Score: {$emailData['recaptcha_score']}<br>"
        : '';

    $emailBody = [
        'message' => [
            'subject' => "Anonymize.Education Contact: {$emailData['interest']}",
            'body' => [
                'contentType' => 'HTML',
                'content' => "
                    <h2>New Contact Form Submission - Anonymize.Education</h2>
                    <table style='border-collapse: collapse; width: 100%; max-width: 600px;'>
                        <tr>
                            <td style='padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f9f9f9;'>Name</td>
                            <td style='padding: 10px; border: 1px solid #ddd;'>{$emailData['name']}</td>
                        </tr>
                        <tr>
                            <td style='padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f9f9f9;'>Email</td>
                            <td style='padding: 10px; border: 1px solid #ddd;'><a href='mailto:{$emailData['email']}'>{$emailData['email']}</a></td>
                        </tr>
                        <tr>
                            <td style='padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f9f9f9;'>Institution</td>
                            <td style='padding: 10px; border: 1px solid #ddd;'>{$emailData['institution']}</td>
                        </tr>
                        <tr>
                            <td style='padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f9f9f9;'>Interest</td>
                            <td style='padding: 10px; border: 1px solid #ddd;'>{$emailData['interest']}</td>
                        </tr>
                        <tr>
                            <td style='padding: 10px; border: 1px solid #ddd; font-weight: bold; background: #f9f9f9;'>Message</td>
                            <td style='padding: 10px; border: 1px solid #ddd;'>" . nl2br($emailData['message']) . "</td>
                        </tr>
                    </table>
                    <p style='margin-top: 20px; color: #666; font-size: 12px;'>
                        Submitted: " . date('Y-m-d H:i:s T') . "<br>
                        IP: {$emailData['ip']}<br>
                        {$recaptchaInfo}
                        Source: anonymize.education
                    </p>
                ",
            ],
            'toRecipients' => [
                ['emailAddress' => ['address' => $config['ms_graph']['receiver']]],
            ],
            'replyTo' => [
                ['emailAddress' => ['address' => $emailData['email'], 'name' => $emailData['name']]],
            ],
        ],
        'saveToSentItems' => 'true',
    ];

    $ch = curl_init();
    curl_setopt_array($ch, [
        CURLOPT_URL => $sendMailUrl,
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => json_encode($emailBody),
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTPHEADER => [
            'Authorization: Bearer ' . $accessToken,
            'Content-Type: application/json',
        ],
    ]);

    $response = curl_exec($ch); // @suppress - cURL library call, not shell execution
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpCode !== 202) {
        error_log("MS Graph send error: HTTP $httpCode - $response");
        return false;
    }

    return true;
}

// --------------------------------------------------------------------------
// Execute
// --------------------------------------------------------------------------
$accessToken = getAccessToken($config);
if (!$accessToken) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Email service temporarily unavailable']);
    exit;
}

$emailData = [
    'name' => $name,
    'email' => $email,
    'institution' => $institution ?: 'Not provided',
    'interest' => $interestLabel,
    'message' => $message,
    'ip' => $_SERVER['REMOTE_ADDR'] ?? 'Unknown',
    'recaptcha_score' => $recaptchaResult['score'] ?? null,
];

$sent = sendEmail($config, $accessToken, $emailData);

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Thank you! Your message has been sent.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Failed to send message. Please try again later.']);
}
