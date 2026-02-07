<?php
/**
 * Anonymize.Education Contact Form Configuration
 *
 * This is a placeholder config. Production credentials are stored
 * securely at /var/www/config/anonymize-education-mail.php on the server.
 *
 * The ANONYMIZE_EDU_CONFIG_PATH environment variable points to the real config.
 */

if (!defined('ANONYMIZE_EDU_SECURE')) {
    http_response_code(403);
    exit('Access denied');
}

return [
    'ms_graph' => [
        'tenant_id' => getenv('MS_TENANT_ID') ?: '',
        'client_id' => getenv('MS_CLIENT_ID') ?: '',
        'client_secret' => getenv('MS_CLIENT_SECRET') ?: '',
        'sender' => getenv('MS_SENDER') ?: '',
        'receiver' => getenv('MS_RECEIVER') ?: '',
    ],
    'recaptcha' => [
        'site_key' => '6LcFEFosAAAAAH6zUMF5USUNKGGjr07y97nC5uDr',
        'secret_key' => getenv('RECAPTCHA_SECRET_KEY') ?: '',
    ],
    'security' => [
        'allowed_origins' => [
            'https://anonymize.education',
            'https://www.anonymize.education',
        ],
        'rate_limit' => 5,
    ],
];
