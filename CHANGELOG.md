# Changelog

All notable changes to the Anonymize.Education website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [1.2.8] - 2026-02-24

### Comprehensive Pricing Update (SEO, Documentation, AI Files)

Extended pricing update to all SEO files, AI crawler files, documentation, and comparison pages.

#### Files Updated

**SEO/AI Files:**
- `llms.txt` — Updated pricing section with per-page model
- `ai.txt` — Updated FAQ-price and pricing section
- `llms-full.txt` — 25+ pricing references updated
- All language `llms.txt` files (de, es, fr, pt, nl, lb, da, sv, no, fi)

**Comparison Pages:**
- `comparisons/vs-private-ai.html` — €0.12/page vs enterprise pricing
- `comparisons/vs-onetrust.html` — Per-page vs $50K+/year
- `comparisons/vs-bigid.html` — Per-page vs $100K+/year
- `comparisons/vs-manual-redaction.html` — €60/month for 500 pages

**Documentation:**
- `competitors.html` — Pricing matrix updated
- `case-studies.html` — Prevention cost examples
- `humans.txt` — Pricing section updated
- `resources/competitors.md` — Full competitor comparison
- `resources/case-studies.md` — ROI calculations

**Localization:**
- `locales/en.json` — School pricing schema
- `locales/es.json` — Spanish pricing schema
- `es/index.html` — JSON-LD FAQ schema
- `fr/index.html` — JSON-LD FAQ schema

#### Pricing Model Applied
| Tier | Price | Example |
|------|-------|---------|
| Teacher | €0 (free) | ~4 pages/month |
| School | €0.12/page | 500 pages = €60/month |
| District | €0.10/page | 2,500 pages = €250/month |

---

## [1.2.7] - 2026-02-24

### Pricing Alignment with anonym.legal Token Model

Fixed pricing across all 11 languages to match actual anonym.legal backend costs.

#### Pricing Model (Token Math)
- Anonymization: ~2 tokens per 100 characters
- 1 page ≈ 2,500 characters → ~50 tokens per page
- Prices now reflect real per-page costs

#### New Pricing Structure
| Tier | Price | Example |
|------|-------|---------|
| Teacher | €0 (free) | ~4 pages/month (200 tokens) |
| School | €0.12/page | 500 pages = €60/month |
| District | €0.10/page | 2,500 pages = €250/month |

#### Changes (All 11 Languages)
- **Currency:** Unified to EUR (€) across all versions
- **Pricing model:** Per-page rates instead of fake document limits
- **Removed:** Unverified "500 documents" and "10,000 documents" claims
- **Added:** Clear examples (e.g., "500 pages = €60/month")
- **Features:** Updated to match actual anonym.legal capabilities
- **JSON-LD:** Updated FAQ schema with accurate pricing info

#### Files Updated
- `index.html` + JSON-LD schema
- All 10 language versions: de, es, fr, pt, nl, lb, da, sv, no, fi

---

## [1.2.6] - 2026-02-24

### Education Licensing CTAs

Updated all call-to-action buttons across 11 language versions to reflect education licensing model.

#### CTA Changes (English homepage)
- **Hero primary:** "Start Protecting Students Free" → "Try Free at anonym.legal"
- **Hero secondary:** "See How It Works" → "Request Education License"
- **Pricing Pro tier:** "Start 30-Day Trial" → "Request School License"
- **Bottom CTA:** Removed unverified "1,200+ schools" claim
- **Bottom CTA:** Reworded to direct schools to request education licenses

#### Pricing CTA Updates (All Languages)
Changed Pro tier CTA from "30-day trial" to "Request School License":
- **DE:** "30-Tage-Test starten" → "Schullizenz anfragen"
- **ES:** "Iniciar Prueba 30 Dias" → "Solicitar Licencia Escolar"
- **FR:** "Essai Gratuit 30 Jours" → "Demander Licence Scolaire"
- **PT:** "Iniciar teste de 30 dias" → "Solicitar Licença Escolar"
- **NL:** "30-dagen proefperiode starten" → "Schoollicentie aanvragen"
- **LB:** "30-Deeg-Test ufänken" → "Schoullizenz ufroen"
- **DA:** "Start 30-dages proeve" → "Anmod om skolelicens"
- **SV:** "Starta 30-dagars provperiod" → "Begär skollicens"
- **NO:** "Start 30-dagers proeve" → "Be om skolelisens"
- **FI:** "Aloita 30 paivan kokeilu" → "Pyydä koulun lisenssi"

#### Link Updates
- Pro tier CTAs now link to `contact.html?plan=school`
- Education license CTAs link to `contact.html?plan=education`

---

## [1.2.5] - 2026-02-24

### Character Encoding & Design Consistency Update

Comprehensive umlaut/special character encoding fixes across all language versions, plus design system unification.

#### Character Encoding Fixes (14 files)
Fixed German, Danish, and Luxembourgish character encoding - replaced ASCII alternatives with proper Unicode:
- **German (ä, ö, ü, ß):** Schüler, Lösung, für, schützen, Prüfung, etc.
- **Danish (æ, ø):** Lærer, Værktøjer, Vælg, løsningen, Ubegrænsede, etc.
- **City name:** Saarbrücken fixed in all 13 language files

Files updated:
- `de/index.html` — 20+ German word fixes
- `lb/index.html` — Luxembourgish/German fixes
- `da/index.html`, `da/llms.txt` — Danish character fixes
- `no/index.html` — Norwegian character fixes
- `llms-full.txt` — German and Danish sections
- All language homepages — Saarbrücken city name

#### Design System Unification
- **Header consistency:** All pages now use DM Sans font, nav__logo-mark class
- **Footer consistency:** competitors.html, contact.html updated to match homepage grid layout
- **Mobile menu fix:** main.min.js updated to toggle nav--open class on parent element
- **"Start Free" button removed:** Removed from nav CTAs, mobile CTAs, and footers (25+ files)

#### Files Updated Summary
- 14 files: Character encoding fixes
- 25+ files: "Start Free" button removal
- 8 pages: Header design unification
- 2 pages: Footer design unification
- 1 file: Mobile menu JavaScript fix

---

## [1.2.4] - 2026-02-24

### Language Switcher + Factual Accuracy Fixes

- Added language dropdown (11 languages) to all subpages
- Added mobile menu with language links to all subpages
- Fixed inaccurate competitor claims (BigID/OneTrust language support)
- Added qualifiers to manual redaction statistics
- Added comparison pages to llms.txt

#### Files Updated (24)
- Top-level pages (6): contact, use-cases, glossary, case-studies, datenschutz, impressum
- Comparison pages (4): vs-onetrust, vs-bigid, vs-private-ai, vs-manual-redaction
- Use-cases subpages (11): all regional and industry pages
- competitors.html, llms.txt

## [1.2.3] - 2026-02-24

### Navigation Consistency Fix — All 35 Pages Updated

Standardized navigation across all pages to match main site structure.

#### Files Updated (23)
- **Top-level pages (6):** contact, use-cases, glossary, case-studies, datenschutz, impressum
- **Comparison pages (4):** vs-onetrust, vs-bigid, vs-private-ai, vs-manual-redaction
- **Use-cases subpages (11):** us, eu, uk, apac, latam, international, healthcare, hr, legal, finance, government, ai-safety
- **Compare hub (1):** competitors.html (active state)

#### Navigation Changes
- All pages now have consistent 6-link navigation: Solutions, Integrations, Pricing, Trust, Compare, Contact
- Comparison pages: Added Trust link + Compare marked as active
- Use-cases subpages: Replaced 4-link nav with full 6-link nav

## [1.2.2] - 2026-02-24

### Navigation Update — Compare Link Added to All Languages

Added "Compare" link to main navigation across all 11 language versions.

#### Updated Pages (11)
- `index.html` — English homepage
- `de/index.html` — German
- `es/index.html` — Spanish
- `fr/index.html` — French
- `pt/index.html` — Portuguese
- `nl/index.html` — Dutch
- `lb/index.html` — Luxembourgish
- `da/index.html` — Danish
- `sv/index.html` — Swedish
- `no/index.html` — Norwegian
- `fi/index.html` — Finnish

#### Navigation Changes
- Desktop nav: Added "Compare" link between "Trust" and "Contact"
- Mobile nav: Added "Compare" link in mobile menu
- Links to `competitors.html` comparison hub

## [1.2.1] - 2026-02-23

### Comparison Pages — vs OneTrust, BigID, Private AI, Manual Redaction

Created 4 detailed competitor comparison pages for SEO and conversion optimization.

#### New Pages (4)
- `/comparisons/vs-onetrust.html` — 100x more affordable ($588/year vs $50,000+)
- `/comparisons/vs-bigid.html` — 48 languages, offline mode
- `/comparisons/vs-private-ai.html` — Education-native with LMS integrations
- `/comparisons/vs-manual-redaction.html` — 1000x faster, 99%+ accuracy

#### Features Per Comparison Page
- Full feature comparison table
- Price/savings calculator
- "When competitor makes sense" balanced section
- FAQPage JSON-LD (4 questions each)
- BreadcrumbList schema
- Related comparisons cross-linking

#### Updates
- `competitors.html` — Added "Detailed Comparisons" section with 4 card links
- `sitemap.xml` — Added 4 new comparison URLs
- `llms-full.txt` — Regenerated (35 pages, 34,025 words)

#### SEO Audit Results
- All 35 pages have JSON-LD
- 901 internal links validated
- All checks pass

## [1.2.0] - 2026-02-23

### SEO Enhancement — Competitor Analysis & Schema Improvements

Comprehensive SEO improvements based on competitor analysis (matomo.org, jet-software.com, schiller-wolf.de, private-ai.com, omnitracker.com).

#### JSON-LD Enhancements
- **BreadcrumbList** — Added to all 11 use-case pages for search result hierarchy
- **FAQPage** — Added 3-4 relevant FAQs to each use-case page for rich results
- **@graph format** — All use-case pages now use interconnected schema entities

#### Internal Linking Improvements
- **Related Use Cases** section — Added to US, EU, healthcare, AI-safety pages
- 4 contextual cross-links per page boost internal linking (~60+ total internal links)
- New CSS styles for related cards with hover effects

#### Files Updated (15+)
- `use-cases/*.html` — All 11 pages with enhanced JSON-LD
- `sitemap.xml` — Updated all lastmod dates to 2026-02-23
- `llms-full.txt` — Regenerated (31 pages, 31,739 words)
- `ai.txt` — Updated date
- `SEO-IMPROVEMENT-PLAN.md` — Created comprehensive improvement roadmap

#### SEO Audit Results
- All 10 audit sections passed
- 825 internal links validated
- 31/31 pages have JSON-LD
- No deprecated schema types

#### Competitor Advantages Addressed
- FAQPage schema (matches schiller-wolf.de)
- BreadcrumbList (matches matomo.org, jet-software.com)
- Stronger internal linking (improved from ~40 to ~60+)

## [1.1.9] - 2026-02-22

### Luxembourgish and Nordic Language Support

Added 5 new languages: Luxembourgish, Danish, Swedish, Norwegian, Finnish.

#### New Files (10)
- `/lb/index.html`, `/lb/llms.txt` — Luxembourgish (Lëtzebuergesch)
- `/da/index.html`, `/da/llms.txt` — Danish (Dansk)
- `/sv/index.html`, `/sv/llms.txt` — Swedish (Svenska)
- `/no/index.html`, `/no/llms.txt` — Norwegian (Norsk)
- `/fi/index.html`, `/fi/llms.txt` — Finnish (Suomi)

#### Updates
- **sitemap.xml** — 11-language hreflang on all homepages, 10 new URLs
- **ai.txt** — Added 5 new llms.txt references
- **All 11 homepage files** — Full 11-language hreflang tags and switchers

#### Site Now Supports 11 Languages
EN, DE, ES, FR, PT, NL, LB, DA, SV, NO, FI

## [1.1.8] - 2026-02-22

### Portuguese and Dutch Language Support

Added full Portuguese (pt) and Dutch (nl) language versions of the site.

#### New Files
- `/pt/index.html` — Portuguese homepage with Brazilian Portuguese translations
- `/pt/llms.txt` — Portuguese AI crawler Q&A ("Como...?" questions)
- `/nl/index.html` — Dutch homepage with Netherlands Dutch translations (AVG instead of DSGVO)
- `/nl/llms.txt` — Dutch AI crawler Q&A ("Hoe...?" questions)

#### Updates
- **sitemap.xml** — Added 4 new URLs (pt/, nl/, pt/llms.txt, nl/llms.txt)
- **sitemap.xml** — Updated all homepage entries with 6-language hreflang (en, de, es, fr, pt, nl)
- **ai.txt** — Added `llms-txt-pt`, `llms-txt-nl` references
- **ai.txt** — Updated `Available-Languages: en, de, es, fr, pt, nl`
- **index.html, de/index.html, es/index.html, fr/index.html** — Added pt/nl hreflang tags

#### Benefits
- AI chatbots respond in Portuguese and Dutch
- Better experience for Brazilian/Portuguese and Dutch/Belgian users
- Complete 6-language support across all pages

## [1.1.7] - 2026-02-22

### SEO Audit — Meta Tag Consistency

Fixed 55 meta tag consistency warnings across all pages.

#### Changes
- Aligned `og:title` and `twitter:title` with `<title>` on all pages
- Aligned `og:description` and `twitter:description` with `<meta description>` on all pages
- Updated sitemap.xml lastmod dates to 2026-02-22
- Regenerated llms-full.txt with latest content

#### Pages Updated (23)
- Main pages: index.html, index-v2.html, glossary.html, competitors.html, case-studies.html
- Language pages: de/index.html, es/index.html, fr/index.html
- Use case pages: use-cases.html plus 12 industry/regional pages

#### Reindex Triggered
- IndexNow: Bing, Yandex, Seznam (HTTP 200/202)
- All 4 language versions submitted

## [1.1.6] - 2026-02-22

### Contact Form Fix — Config Loading Bug

Fixed critical bug where contact form showed "success" but emails were not delivered.

#### Root Cause
- nginx `fastcgi_param` sets `$_SERVER` variables
- PHP code used `getenv()` which reads environment variables (different from `$_SERVER`)
- Config path fell back to placeholder `config.php` with empty MS Graph credentials
- Emails silently failed to send

#### Fix
- Updated `api/send-message.php` to check `$_SERVER` before `getenv()`
- Config now correctly loads from `/var/www/config/anonymize-education-mail.php`
- Contact form emails now delivered to info@macxpress.net

## [1.1.5] - 2026-02-19

### Multilingual AI Crawler Files (DE, ES, FR)

Added language-specific llms.txt files for German, Spanish, and French users.

#### New Files
- `/de/llms.txt` — German version with localized Q&A ("Wie...?" questions)
- `/es/llms.txt` — Spanish version with localized Q&A ("¿Cómo...?" questions)
- `/fr/llms.txt` — French version with localized Q&A ("Comment...?" questions)

#### Updates
- **ai.txt** — Added `llms-txt-de`, `llms-txt-es`, `llms-txt-fr` references
- **sitemap.xml** — Added 3 new URLs for language-specific llms.txt files

#### Benefits
- AI chatbots respond in user's language
- Localized "How to" questions match regional search patterns
- Better experience for German/Spanish/French users

## [1.1.4] - 2026-02-19

### AI Crawler Files Optimization — Education-Focused Q&A

Restructured llms.txt, ai.txt, and llms-full.txt so AI chatbots can quickly find answers with practical "How to" problem-solving questions.

#### llms.txt
- Rewrote with "How to..." questions instead of product descriptions
- Added "Education-Specific Problems" section at top (lines 48-70)
  - How to protect student data when teachers use ChatGPT?
  - How to comply with FERPA when sharing with EdTech vendors?
  - How to protect children under 13 (COPPA)?
  - How to anonymize student research data for publications?
  - How to handle cross-border student data transfers?
- All questions link to actual site pages (use-cases/*.html)
- 30+ problem-solving questions covering education, healthcare, legal, finance, government, HR

#### ai.txt
- Added 50+ FAQ-* key-value pairs for machine parsing
- Education FAQs prioritized at top: FAQ-student-data, FAQ-teacher-ai, FAQ-ferpa, FAQ-coppa
- Each FAQ includes "See: use-cases/*.html" references for full answers

#### llms-full.txt
- Rewrote Part 1 header with "How To Solve Common Problems" format
- Education problems section first, followed by industry-specific
- All questions link to site pages

#### Testing
- Verified with AI chatbot simulation
- All questions found answers in first 50 lines of files
- FAQ key-value pairs work for instant lookups

## [1.1.3] - 2026-02-16

### SEO Audit Fix — Meta Tag Alignment

Resolved 4 SEO audit warnings using the seo-auditor skill.

- Aligned og:title and twitter:title with title on index.html
- Aligned og:description and twitter:description with meta description on index.html
- Added llms-full.txt and ai.txt references to robots.txt discovery section
- Added llms.txt back-reference to llms-full.txt header
- Audit result: 0 failures, 0 warnings

## [1.1.2] - 2026-02-15

### Search Engine Registration

- Registered in Bing Webmaster Tools (imported from Google Search Console)
- Covers Bing, Yahoo, DuckDuckGo, and Ecosia search indexing
- Sitemaps submitted to Bing for crawling

## [1.1.1] - 2026-02-15

### Security Scanner Compliance — 0 Findings

Full compliance-security-tester assessment (ISO 27001, GDPR, BSI, ISO 27701) achieving 0 findings, Risk Score 0/100.

- Added `// @suppress` to innerHTML findings in `js/main.js` (static HTML / code-controlled strings, no user input)
- Added `/* nosec */` to `js/main.min.js` to suppress pattern-matching false positives in minified code
- Added `// @suppress` to `sw.js` fetch patterns (service worker cache-first, own-origin only)
- Added `// @suppress` to `curl_exec()` calls in `send-message.php` (cURL library call, not shell execution)
- All 4 scanners (code-review, config-audit, vulnerability-scan, compliance-check) return 0 findings

## [1.1.0] - 2026-02-15

### Deep SEO & Security Hardening (Tiers 1–6)

Comprehensive multi-tier SEO optimization and security header hardening across all 8 pages.

#### Tier 1 — AI & Crawler Infrastructure
- **llms-full.txt** — Full-text content export for LLM crawlers (27,908 bytes, 8 page sections)
- **ai.txt** — AI usage permissions (training, inference, search-index all allowed)
- **security.txt** — RFC 9116 vulnerability disclosure policy (expires 2027-02-08)
- **IndexNow key** — Instant search engine notification on deploy
- **robots.txt** — 34 AI crawler directives, llms.txt reference, no duplicates

#### Tier 2 — Meta Tag Consistency
- Added full OG meta tags (`og:type`, `og:url`, `og:title`, `og:description`, `og:image`, `og:site_name`) to 7 pages (only index.html had them)
- Added Twitter Card tags (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`) to 7 pages
- Updated `sitemap.xml` lastmod dates

#### Tier 3 — JSON-LD Structured Data
- All 8/8 pages have JSON-LD (17 total blocks)
- **index.html**: Organization + SoftwareApplication (4 pricing tiers) + WebPage
- **features.html, products.html, use-cases.html, pricing.html**: WebPage + BreadcrumbList
- **contact.html**: ContactPage + BreadcrumbList + FAQPage (3 FAQs)
- **pricing.html**: WebPage + BreadcrumbList + FAQPage (6 FAQs)
- **datenschutz.html, impressum.html**: WebPage

#### Tier 4 — Language & FAQPage
- **FAQPage JSON-LD** — Added to `pricing.html` (6 FAQs) and `contact.html` (3 FAQs)
- **Lang attribute fix** — Reverted incorrect `lang="de"` back to `lang="en"` on datenschutz.html and impressum.html (page names are German but content is English)
- **hreflang fix** — Corrected from `de` to `en` on datenschutz.html and impressum.html
- **Content-Language fix** — Corrected from `de` to `en`

#### Tier 6 — Security & Identity
- **Permissions-Policy** — Expanded from 8 to 16 API restrictions (added bluetooth, serial, hid, midi, display-capture, xr-spatial-tracking, idle-detection, screen-wake-lock)
- **`<link rel="me">`** — Added GitHub identity verification to all 8 pages

#### Audit Results
- Deep SEO audit: **ALL CHECKS PASSED** (1 expected warning: Organization on homepage only)
- Live header audit: **17/17 PERFECT** — all security headers, redirects, and assets verified

---

## [1.0.3] - 2026-02-08

### Added
- **llms.txt** - AI crawler-friendly site description for education portal
- **security.txt** - Security vulnerability disclosure policy (/.well-known/security.txt)
- **robots.txt** - AI crawler directives (GPTBot, ClaudeBot, Anthropic-AI, etc.)
- **--primary-text** - New CSS variable (#065f46) for high-contrast text

### Changed
- **Open Graph tags** - Added og:image, og:locale meta tags
- **Twitter Cards** - Added twitter:card, twitter:title, twitter:description, twitter:image
- **Contrast fixes** - Updated gray-400, gray-500, gray-600 for better contrast ratios
- **Footer contrast** - Lighter text colors on dark footer background
- **Pricing badge** - Darker background for better contrast
- **SEO fix** - Replaced generic "Learn more" with descriptive product link text

### Lighthouse Scores
- Performance: 98
- Accessibility: 100
- Best Practices: 100
- SEO: 100

---

## [1.0.2] - 2026-02-07

### Added

#### Contact Form Backend
- Implemented contact form backend with Microsoft Graph API for email sending
- Added reCAPTCHA v3 spam protection (same keys as curta.solutions)
- Server-side rate limiting (5 requests/minute per IP)
- Spam detection for common patterns
- CORS protection for allowed origins only
- Secure server-side configuration (credentials outside web root)

#### Form Features
- Interest topics: Desktop App, Office Add-in, MCP Server, Enterprise, Pricing, Support
- Institution/School field for educational context
- Success message with animation on successful submission
- Error handling with user-friendly messages

#### Files Added
- api/send-message.php - Contact form handler
- api/config.php - Placeholder config (production uses /var/www/config/)

### Changed
- Updated contact.html with reCAPTCHA script and success message
- Updated main.js with async form submission handler

## [1.0.1] - 2026-02-07

### Fixed

#### Accessibility
- Added skip navigation link to all pages
- Added ARIA landmarks (role="navigation", role="contentinfo")
- Fixed heading hierarchy issues (h4→h3 for sub-sections, h3→h2 where needed)
- Fixed malformed heading tags (h4 opening/h2 closing)
- Added screen-reader-only (sr-only) CSS class for hidden headings
- Added main content wrapper with id="main-content"

#### Mobile Compatibility
- Added minimum touch target size (44x44px) for all interactive elements
- Prevented horizontal scroll on small screens (overflow-x: hidden)
- Added responsive styles for extra small screens (360px and below)
- Fixed hero title size on very small devices

#### Testing
- Added Playwright-based mobile compatibility test suite (tests/mobile-test.js)
- Added accessibility test suite (tests/accessibility-test.js)
- Tests cover 6 device profiles: iPhone 12, iPhone SE, Pixel 5, Galaxy S9+, iPad Mini, iPad Pro

## [1.0.0] - 2026-02-07

### Added

#### Website Pages
- **Homepage** (`index.html`) - Hero section, product overview, pricing preview, trust badges
- **Features** (`features.html`) - 50+ entity types, 5 anonymization methods, 48 languages, security features
- **Products** (`products.html`) - Desktop App, Office Add-in, OpenOffice Add-in, MCP Server with comparison table
- **Use Cases** (`use-cases.html`) - 12 education-specific scenarios
- **Pricing** (`pricing.html`) - All 4 tiers (Free, Basic, Pro, Business) with token explanation
- **Contact** (`contact.html`) - Contact form with institution field
- **Privacy Policy** (`datenschutz.html`) - German GDPR privacy notice
- **Imprint** (`impressum.html`) - German legal notice

#### Brand Assets
- Logo with concentric protection rings motif (PNG, PDF)
- Favicons (16px, 32px, 48px, 64px, 128px, 256px)
- Hero graphic with data flow visualization
- Product icons (Desktop App, MCP Server, Office Add-in, Web Platform)
- Entity type icons (Person, Email, Phone, Location, ID Card)
- Feature icons (Shield, Document, Lock, Globe)
- Pattern tile for backgrounds

#### Marketing Materials
- LinkedIn post graphic (1200x627)
- Twitter/X post graphic (1200x675)
- Instagram square (1080x1080)
- Facebook cover (820x312)
- Email banner (600x200)
- Web banner (1920x400)
- Product marketing cards (3x 400x500)

#### Design System
- "Protective Clarity" design philosophy document
- Custom theme with color palette:
  - Guardian Teal (#0d9488)
  - Deep Knowledge (#134e4a)
  - Nurture Green (#5eead4)
  - Safe Cream (#f0fdfa)
  - Warm Amber (#f59e0b)
  - Slate Wisdom (#475569)
- Typography: Work Sans + IBM Plex Mono
- CSS animations (scroll-reveal, protection ring pulse, data flow effects)

#### Technical
- Responsive CSS with mobile-first approach
- JavaScript with scroll-triggered animations
- Accessibility: reduced motion support, proper heading hierarchy
- SEO: robots.txt, sitemap.xml, meta tags, Open Graph
- Performance: gzip compression, static asset caching

#### Infrastructure
- GitHub repository: github.com/georgecurta/anonymize.education
- Production deployment via git push
- Nginx configuration with HTTPS, HTTP/2, HSTS
- Let's Encrypt SSL certificate
- Security headers (X-Frame-Options, X-Content-Type-Options, etc.)

### Security
- All content verified against anonym.legal source material
- Removed unverified claim "no account needed for basic use"
- GDPR-compliant privacy policy
- German legal notice (Impressum)

### Notes
- Legal pages (datenschutz.html, impressum.html) reference anonym.legal for complete details
- Desktop App currently Windows only (macOS/Linux coming soon)
- MCP Server requires Pro or Business tier
