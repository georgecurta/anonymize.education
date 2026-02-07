# Changelog

All notable changes to the Anonymize.Education website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

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
