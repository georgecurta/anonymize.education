# Claude Memory - Anonymize.Education

## Project Overview

**Domain**: anonymize.education
**Purpose**: Marketing website for education-focused data anonymization platform
**Parent Platform**: anonym.legal
**Status**: Live in production (v1.0.1, deployed 2026-02-07)

## Key Information

### Content Guidelines
- ALL content must be verified against anonym.legal source material
- NO assumptions or invented features
- Previously removed unverified claim: "no account needed for basic use" (source only confirmed "Free Download" and "offline capability")

### Verified Product Features
- 50+ entity types detected
- 48 languages supported
- 5 anonymization methods: Replace, Redact, Hash (SHA-256), Encrypt (AES-256-GCM), Mask
- ISO 27001:2022 certified
- 99.9% uptime SLA
- German Hetzner servers
- Zero-knowledge authentication with Argon2id
- 24-word BIP39 recovery phrase

### Pricing (verified from source)
- Free: 0/month, 200 tokens
- Basic: 3/month, 1,000 tokens
- Pro: 15/month, 4,000 tokens
- Business: 29/month, 10,000 tokens

### Products
- Desktop App: Windows only (FREE), macOS/Linux coming soon
- Office Add-in: Word, Excel, PowerPoint integration
- OpenOffice Add-in: LibreOffice/OpenOffice integration
- MCP Server: AI tool integration (Pro+ tiers), works with Claude Desktop, Cursor IDE

## Design System

**Theme**: "Protective Clarity"

**Colors**:
- Guardian Teal: #0d9488 (primary)
- Deep Knowledge: #134e4a (headers, dark)
- Nurture Green: #5eead4 (highlights)
- Safe Cream: #f0fdfa (backgrounds)
- Warm Amber: #f59e0b (accents)
- Slate Wisdom: #475569 (body text)

**Typography**:
- Headers: Work Sans Bold
- Body: Work Sans Regular
- Code/Labels: IBM Plex Mono

**Visual Motifs**:
- Concentric circles (layers of protection)
- Soft rounded rectangles (safe containers)
- Dot patterns (data points being organized)
- Data flow visualization

## Deployment

### Remotes
- **origin**: https://github.com/georgecurta/anonymize.education.git
- **production**: ssh://mac46-190@macxpress.net:6535/home/mac46-190/repos/anonymize.education.git

### Deploy Command
```bash
cd C:\Dev\MacXpress\anonymize.education
git push origin main
GIT_SSH_COMMAND='ssh -i ~/.ssh/macxpress26 -o IdentitiesOnly=yes' git push production main
```

### Server
- Web root: /var/www/anonymize.education
- SSL: Let's Encrypt (auto-renewal)
- Nginx with HTTPS, HTTP/2, HSTS, security headers

## File Structure

```
anonymize.education/
├── *.html              # 8 pages (index, features, products, use-cases, pricing, contact, datenschutz, impressum)
├── css/                # style.css, animations.css
├── js/                 # main.js
├── images/             # Deployed assets (logo, icons, favicons, hero)
├── tests/              # Playwright test suites
│   ├── mobile-test.js      # Mobile browser compatibility tests
│   └── accessibility-test.js # Accessibility compliance tests
├── brand/              # NOT deployed (source assets, marketing materials, generators)
├── CHANGELOG.md
├── DEPLOYMENT.md
├── MARKETING-CONCEPT.md
└── CLAUDE.md           # This file
```

## Testing

### Test Suites
Run from project directory with Node.js and Playwright installed:

```bash
# Mobile compatibility (6 device profiles)
node tests/mobile-test.js

# Accessibility compliance
node tests/accessibility-test.js
```

### Device Profiles Tested
- iPhone 12 (390x664)
- iPhone SE (320x568)
- Pixel 5 (393x727)
- Galaxy S9+ (320x658)
- iPad Mini (768x1024)
- iPad Pro 11 (834x1194)

### Accessibility Features
- Skip navigation link on all pages
- ARIA landmarks (role="navigation", role="contentinfo")
- Proper heading hierarchy (h1→h2→h3)
- Screen-reader-only content (.sr-only class)
- Minimum touch target size (44x44px)
- Reduced motion support (@media prefers-reduced-motion)

## Important Notes

1. Legal pages (datenschutz.html, impressum.html) intentionally reference anonym.legal for complete details
2. brand/ directory excluded from production deployment (contains source files and generators)
3. Always verify new features/claims against anonym.legal before adding
4. The site targets educational institutions globally with focus on GDPR compliance
5. All pages have skip-link, proper ARIA landmarks, and correct heading hierarchy
6. Run accessibility tests after any HTML structure changes to verify compliance

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.1 | 2026-02-07 | Accessibility fixes, mobile compatibility, test suites |
| 1.0.0 | 2026-02-07 | Initial release with all 8 pages, brand assets, marketing materials |
