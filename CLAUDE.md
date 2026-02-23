# Claude Memory - Anonymize.Education

## Project Overview

**Domain**: anonymize.education
**Purpose**: Marketing website for education-focused data anonymization platform
**Backend**: cloak.business (serves the PII detection/anonymization API)
**Status**: Live in production (v1.2.1, deployed 2026-02-23)

### Architecture
```
cloak.business (Backend API)
    |
    +-- anonymize.education (Education Marketing Frontend) <-- THIS PROJECT
    +-- cleanshare.eu (Blog site - separate)
    +-- [other frontends]
```

**Goal**: Position anonymize.education as THE worldwide education privacy solution

---

## CRITICAL: Education Compatibility Gaps

Based on research (`../cleanshare.eu/cloak_business_research_report.md`):

| Gap | Severity | Current State | Required State |
|-----|----------|---------------|----------------|
| FERPA compliance | CRITICAL | Not documented | Full documentation + DPA |
| COPPA compliance | CRITICAL | Excluded (under-13) | Support or clear guidance |
| Privacy policy under-13 | CRITICAL | "Not for users under 13" | Revise for K-12 use |
| LMS integrations | HIGH | None | Canvas, Blackboard, Google Classroom |
| SSO/SAML | HIGH | Not documented | SAML, OIDC, Clever, ClassLink |
| Education pricing | HIGH | Token-based only | Institutional licensing |
| SDPC DPA | HIGH | Unknown | Standard DPA alignment |
| VPAT/Accessibility | MEDIUM | Not documented | WCAG 2.1 AA, Section 508 |

---

## PLAN A: Frontend Adaptations (This Project)

### Phase 1: Compliance Messaging (IMMEDIATE - P0)

**1.1 Create Compliance Section**

New pages to create:
```
/compliance/
├── index.html          # Compliance hub
├── ferpa.html          # US education records
├── coppa.html          # US children's privacy
├── gdpr-education.html # EU schools
└── global.html         # Worldwide privacy laws
```

**FERPA Page Content:**
- Explain FERPA applies to schools, not vendors
- Position as "FERPA-supportive" (NOT "FERPA-compliant")
- Document how service helps schools:
  - Data minimization via anonymization
  - Secure handling (ISO 27001, German servers)
  - No data retention (processed in memory)
- Provide DPA template download
- School official exception guidance

**COPPA Page Content:**
- Explain school consent mechanism per FTC guidance
- Document service for "school-authorized educational purposes"
- Clarify under-13 data handling when used BY schools
- Link to FTC COPPA guidance

**1.2 Update Trust Badges (index.html)**

Current badges (line 315-339):
- GDPR Compliant
- ISO 27001 Certified
- German Servers
- AES-256 Encryption

Add regional badges:
- "FERPA Supportive" (US)
- "COPPA School Consent Ready" (US K-12)
- "UK GDPR Ready" (UK)
- "Student Data Privacy Aligned" (generic)

**1.3 Create Regional Landing Pages**

```
/regions/
├── us-k12.html      # US K-12 schools (FERPA + COPPA focus)
├── us-higher-ed.html # US universities (FERPA focus)
├── eu.html          # European schools (GDPR focus)
├── uk.html          # UK schools (UK GDPR focus)
├── apac.html        # Asia-Pacific
└── latam.html       # Latin America (LGPD focus)
```

Each page addresses:
- Local privacy laws and requirements
- Local entity types detected (national IDs)
- Local language support
- Localized case studies (when available)

---

### Phase 2: Education Features (SHORT-TERM - P1)

**2.1 Update Use Cases Page**

Add education-specific scenarios:
- FOIA/Public Records Requests (government schools)
- IEP/504 Plan Anonymization (special education)
- Research IRB Compliance (universities)
- Parent Communication Templates
- Student Assessment Data Sharing
- Transcript Sharing with External Parties
- AI Tool Integration (protecting data from LLMs)
- PowerSchool/SIS Data Export Anonymization

**2.2 Create Integrations Page**

```
/integrations/
└── index.html
```

Content:
- **Available Now:** Office Add-in, MCP Server, REST API
- **Roadmap:**
  - LMS: Canvas, Blackboard, Google Classroom, Moodle
  - IdP: Clever, ClassLink, Azure AD, Google Workspace
  - SIS: PowerSchool, Infinite Campus format awareness

**2.3 Update Pricing Page**

Add to pricing.html:
```html
<!-- Education Pricing Section -->
<section class="education-pricing">
  <h2>Education & Nonprofit Pricing</h2>
  <ul>
    <li>Institutional licensing available</li>
    <li>Volume discounts for school districts</li>
    <li>Academic research programs</li>
    <li>Free tier for individual educators</li>
  </ul>
  <a href="contact.html?topic=pricing">Contact for Education Pricing</a>
</section>
```

Add pricing calculator widget (future):
- Input: Number of students, documents/month
- Output: Estimated annual cost

---

### Phase 3: Documentation & Resources (MEDIUM-TERM - P2)

**3.1 Resource Center**

```
/resources/
├── index.html
├── downloads/
│   ├── dpa-template.pdf
│   ├── ferpa-checklist.pdf
│   ├── gdpr-dpia-template.pdf
│   └── security-questionnaire.pdf
└── guides/
    ├── it-admin-guide.html
    └── teacher-quickstart.html
```

**3.2 Technical Documentation**

```
/docs/
├── security-architecture.html
├── data-handling.html
├── subprocessors.html
├── incident-response.html
└── retention-policy.html
```

**3.3 Case Studies**

```
/case-studies/
└── index.html (template for future case studies)
```

---

### Phase 4: Internationalization (LONG-TERM - P3)

Create language versions:
```
/de/  # German
/es/  # Spanish
/fr/  # French
/pt/  # Portuguese
/ar/  # Arabic (RTL)
```

Each with:
- Translated content
- hreflang tags
- Local compliance emphasis

---

## PLAN B: Backend Requirements (cloak.business)

### Critical Backend Changes Needed

**B.1 Privacy Policy Fix (CRITICAL - P0)**

Current blocker: "Services not intended for users under 13"

Required:
```
Option A: Remove restriction
Option B: Add exception for school use:
  "When used by schools as school officials for
   school-authorized educational purposes, the
   service may process data of students of any age"
Option C: Separate education terms of service
```

**B.2 COPPA School Consent Flow (CRITICAL - P0)**

Backend needs:
- Organization-level accounts (school/district)
- School verification mechanism
- Consent logging for audit
- Under-13 data handling confirmation

**B.3 DPA Infrastructure (HIGH - P1)**

Backend needs:
- DPA acceptance workflow at signup
- DPA version tracking
- Organization metadata (school type, district, region)
- SDPC DPA template compatibility

**B.4 Education Entity Detection (HIGH - P1)**

Add entity types:
- Student ID patterns (various formats)
- Grade levels / Class designations
- School names as organizations
- IEP/504 plan markers
- Academic year references

**B.5 SSO/SAML Integration (HIGH - P1)**

Backend needs:
- SAML 2.0 IdP support
- OIDC provider support
- Clever SSO integration
- ClassLink integration
- SCIM provisioning

**B.6 LMS API Integrations (MEDIUM - P2)**

Backend needs:
- Canvas LTI integration
- Blackboard LTI integration
- Google Classroom API
- Moodle plugin framework

**B.7 Education Pricing Tier (MEDIUM - P2)**

Backend needs:
- Institutional account type
- Per-seat or per-student pricing
- District/organization hierarchy
- Volume discount automation
- Academic verification (.edu domain)

**B.8 Compliance API (MEDIUM - P2)**

Backend needs:
- Audit log export
- Processing history for compliance
- DSAR automation support
- Breach notification workflow

---

## Implementation Priority Matrix

| Item | Frontend | Backend | Priority | Effort |
|------|----------|---------|----------|--------|
| Privacy policy fix | Content | Legal | P0 | Low |
| FERPA documentation | New pages | None | P0 | Medium |
| COPPA school consent | Content | Flow | P0 | High |
| Regional compliance pages | New pages | None | P1 | Medium |
| DPA template | Download | Workflow | P1 | Medium |
| Education pricing section | Update | New tier | P1 | Medium |
| Trust badges update | HTML/CSS | None | P1 | Low |
| Integrations page | New page | None | P1 | Low |
| SSO documentation | Placeholder | Dev | P2 | High |
| Resource center | New section | None | P2 | Medium |
| Accessibility VPAT | Testing | None | P2 | Medium |
| LMS integration pages | Placeholder | Dev | P2 | High |
| Case studies | Content | None | P3 | Low |
| Internationalization | New dirs | i18n API | P3 | High |

---

## Messaging Guidelines

### DO Say:
- "Supports FERPA compliance"
- "COPPA school consent ready"
- "Helps schools meet privacy obligations"
- "Student data protection"
- "Education privacy solution"

### DON'T Say:
- "FERPA certified" (no such thing)
- "COPPA compliant" (unless fully implemented)
- "Guaranteed compliance" (schools are responsible)
- "Replaces legal counsel"

### Positioning Statement:
```
Anonymize.Education helps schools and universities protect student
personal information with simple, powerful data anonymization tools.
Supporting compliance with GDPR, FERPA, and global privacy laws,
our solution works in 48 languages and requires no technical expertise.
```

---

## Quick Reference: Worldwide Privacy Laws

| Region | Law | Key Requirement | Age Threshold |
|--------|-----|-----------------|---------------|
| EU | GDPR | Consent, DPO, DPIA | 16 (varies) |
| US | FERPA | School records protection | N/A |
| US | COPPA | Parental consent | 13 |
| UK | UK GDPR | Similar to EU | 13 |
| Brazil | LGPD | Consent, DPO | 18 |
| China | PIPL | Consent, localization | 14 |
| Singapore | PDPA | Consent, accuracy | N/A |
| Australia | Privacy Act | APPs | N/A |

---

## Verified Product Features

- 50+ entity types detected (update to 320+ per cloak.business)
- 48 languages supported
- 5 anonymization methods: Replace, Redact, Hash (SHA-256), Encrypt (AES-256-GCM), Mask
- ISO 27001:2022 certified
- 99.9% uptime SLA
- German Hetzner servers
- Zero-knowledge authentication with Argon2id
- 24-word BIP39 recovery phrase

### Pricing (verified)
- Free: 0/month, 200 tokens
- Basic: 3/month, 1,000 tokens
- Pro: 15/month, 4,000 tokens
- Business: 29/month, 10,000 tokens

### Products
- Desktop App: Windows only (FREE), macOS/Linux coming soon
- Office Add-in: Word, Excel, PowerPoint
- OpenOffice Add-in: LibreOffice/OpenOffice
- MCP Server: AI tool integration (Pro+ tiers)

---

## Design System

**Theme**: "Protective Clarity"

**Colors**:
- Guardian Teal: #0d9488 (primary)
- Deep Knowledge: #134e4a (headers)
- Nurture Green: #5eead4 (highlights)
- Safe Cream: #f0fdfa (backgrounds)
- Warm Amber: #f59e0b (accents)
- Slate Wisdom: #475569 (body text)

**Typography**:
- Headers: Work Sans Bold
- Body: Work Sans Regular
- Code: IBM Plex Mono

---

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
- Nginx with HTTPS, HTTP/2, HSTS

---

## File Structure

```
anonymize.education/
├── *.html              # Core pages
├── api/                # Backend API (contact form)
├── css/                # Styles
├── js/                 # Scripts
├── images/             # Assets
├── tests/              # Playwright tests
├── brand/              # Source assets (not deployed)
├── NEW: compliance/    # Compliance documentation
├── NEW: regions/       # Regional landing pages
├── NEW: integrations/  # Integration showcase
├── NEW: resources/     # Downloads & guides
├── NEW: docs/          # Technical documentation
├── NEW: case-studies/  # Success stories
├── MARKETING-CONCEPT.md
├── CHANGELOG.md
├── DEPLOYMENT.md
└── CLAUDE.md           # This file
```

---

## Testing

```bash
# Mobile compatibility
node tests/mobile-test.js

# Accessibility compliance
node tests/accessibility-test.js

# Contact form validation
node tests/form-check.js

# Production health check
node tests/production-check.js
```

---

## Related Files

- `../cleanshare.eu/cloak_business_research_report.md` - Full market research
- `../cleanshare.eu/keyword_library.csv` - SEO keyword reference
- `./MARKETING-CONCEPT.md` - Original marketing concept
- `./brand/DESIGN-PHILOSOPHY.md` - Visual guidelines

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 2.0.0 | TBD | Education worldwide compatibility update |
| 1.2.1 | 2026-02-23 | Comparison pages (vs OneTrust, BigID, Private AI, Manual) |
| 1.2.0 | 2026-02-23 | SEO enhancement: FAQPage + BreadcrumbList + internal linking |
| 1.1.9 | 2026-02-22 | Luxembourgish + Nordic languages (LB, DA, SV, NO, FI) |
| 1.1.8 | 2026-02-22 | Portuguese and Dutch language support |
| 1.1.7 | 2026-02-22 | SEO audit: meta tag consistency (55 fixes) |
| 1.1.6 | 2026-02-22 | Contact form fix (config loading bug) |
| 1.1.5 | 2026-02-19 | Multilingual llms.txt (DE, ES, FR) |
| 1.1.4 | 2026-02-19 | AI crawler files with education-focused Q&A |
| 1.1.3 | 2026-02-16 | SEO audit fix, meta tag alignment |
| 1.1.2 | 2026-02-15 | Bing Webmaster Tools registration |
| 1.1.1 | 2026-02-15 | Security scanner compliance, 0 findings |
| 1.1.0 | 2026-02-15 | Deep SEO & security hardening (Tiers 1-6) |
| 1.0.3 | 2026-02-08 | SEO/accessibility, llms.txt, 100% Lighthouse |
| 1.0.2 | 2026-02-07 | Contact form with MS Graph + reCAPTCHA |
| 1.0.1 | 2026-02-07 | Accessibility fixes, mobile tests |
| 1.0.0 | 2026-02-07 | Initial release |

---

## AI Crawler Files Strategy (2026-02-19)

### Key Insight
AI chatbots scan llms.txt/ai.txt quickly - they don't read everything. The first 50-100 lines are critical.

### Current Structure

**llms.txt** (~200 lines) - English default
- "How To Solve Common Problems" section first
- "Education-Specific Problems" section (student data, FERPA, COPPA, research)
- Industry sections (Healthcare, Legal, Finance, Government, HR)
- All questions link to use-cases/*.html pages

**Multilingual llms.txt** (~180 lines each)
- `/de/llms.txt` — German ("Wie...?" questions)
- `/es/llms.txt` — Spanish ("¿Cómo...?" questions)
- `/fr/llms.txt` — French ("Comment...?" questions)

**ai.txt** (~165 lines)
- FAQ-* key-value pairs for instant machine parsing
- Education FAQs prioritized (FAQ-student-data, FAQ-teacher-ai, FAQ-ferpa)
- Language-specific llms.txt references (llms-txt-de, llms-txt-es, llms-txt-fr)

**llms-full.txt** (~5,500 lines)
- Q&A header in Part 1 (education-first)
- Full page content in Part 2 (English only)

### Multilingual Strategy

| Language | File | Question Format |
|----------|------|-----------------|
| English | /llms.txt | "How to...?" |
| German | /de/llms.txt | "Wie...?" |
| Spanish | /es/llms.txt | "¿Cómo...?" |
| French | /fr/llms.txt | "Comment...?" |
| Portuguese | /pt/llms.txt | "Como...?" |
| Dutch | /nl/llms.txt | "Hoe...?" |
| Luxembourgish | /lb/llms.txt | "Wéi...?" |
| Danish | /da/llms.txt | "Hvordan...?" |
| Swedish | /sv/llms.txt | "Hur...?" |
| Norwegian | /no/llms.txt | "Hvordan...?" |
| Finnish | /fi/llms.txt | "Miten...?" |

AI chatbots detect user's language and use appropriate file.

---

*Last Updated: 2026-02-23*
