# About & Imprint Page Adaptation Plan
## Anonymize.Education - Based on anonym.legal Founder Statement

**Single Source of Truth**: https://anonym.legal/about/founder-statement
**Date**: 2026-03-04
**Status**: Planning Phase

---

## Executive Summary

Adapt anonymize.education's about and imprint pages to align with the founder statement from anonym.legal while maintaining education-specific focus. The founder statement remains the authoritative source, with education-specific context added.

---

## Core Principles from Founder Statement

### 1. Central Conviction
> "Privacy rights must be practically exercisable by everyone — not only by organizations with compliance departments"

**Education Context**: Schools and individual teachers should have the same privacy tools as Fortune 500 companies, without requiring legal departments or compliance teams.

### 2. Technical Architecture Over Contracts
> "Technical architecture—not contractual guarantees—provides meaningful protection"

**Education Context**: Zero-knowledge means even we cannot access student data, providing protection beyond promises in privacy policies.

### 3. Eight Architectural Commitments
1. **Zero-Knowledge Authentication** — Teachers control their data, not us
2. **Local-First Processing** — Desktop app works offline
3. **User-Held Encryption Keys** — 24-word recovery phrase
4. **Offline Capability** — No internet required for core features
5. **No Vendor Lock-In** — Export data anytime
6. **EU Jurisdiction Only** — German Hetzner servers, GDPR compliant
7. **Air-Gap Compatibility** — Sensitive school data stays on-premise
8. **Reversible Anonymization** — Teachers can de-anonymize when needed

---

## Implementation Plan

### Phase 1: Create About Page (New File)

**File**: `/about.html`
**URL**: https://anonymize.education/about.html

#### Content Structure

**Hero Section**:
```
About Anonymize.Education
Student Data Privacy Without Compromise

Built on the conviction that schools deserve enterprise-grade privacy tools
without enterprise-grade complexity.
```

**Section 1: Why We Exist**
- Problem: US law reaches any data held by US companies globally (Cloud Act)
- Problem: Schools required to use AI tools, but student data at risk
- Solution: Zero-knowledge architecture makes student data technically inaccessible
- Education-specific: FERPA, COPPA, GDPR compliance through architecture

**Section 2: Our Approach**
- Adapted from founder statement's "Eight Commitments"
- Education-specific examples for each commitment:
  - Zero-Knowledge: "We can't see student names even if subpoenaed"
  - Local-First: "Works on school networks with restricted internet"
  - Offline: "Process IEP documents on air-gapped systems"
  - Reversible: "Teachers control when to de-anonymize"

**Section 3: Who We Are**
- **Founder**: George Curta (28 years experience, ISO 27001, penetration testing)
- **Operator**: Zenya Renewables B.V. (Amsterdam, Netherlands)
- **Builder**: curta.solutions (26 countries, founded 1998)
- **Link to Full Statement**: https://anonym.legal/about/founder-statement

**Section 4: Education-Specific Commitment**
- 48 languages for multilingual schools
- Character-based pricing (not per-student, no seat licenses)
- Free tier for individual teachers
- ISO 27001 certified infrastructure
- German servers (EU jurisdiction)

**Section 5: Part of Larger Ecosystem**
Brief mention of the five interconnected products:
1. **anonymize.education** — Education-focused (this site)
2. **anonym.legal** — Cloud-first accessibility
3. **anonymize.solutions** — Enterprise umbrella
4. **cloak.business** — Air-gapped for sensitive data
5. **anonym.plus** — Desktop-first perpetual licensing

Link to founder statement for complete ecosystem explanation.

#### SEO Meta Tags
```html
<title>About Anonymize.Education | Our Mission & Founder Statement</title>
<meta name="description" content="Student privacy through architecture, not promises. Founded by George Curta (28 years security). Zero-knowledge. ISO 27001. Free tier available.">
<link rel="canonical" href="https://anonymize.education/about.html">
<meta property="og:title" content="About Anonymize.Education | Our Mission & Founder Statement">
<meta property="og:description" content="Student privacy through architecture, not promises. Founded by George Curta (28 years security). Zero-knowledge. ISO 27001. Free tier available.">
<meta property="og:url" content="https://anonymize.education/about.html">
<meta property="og:image" content="https://anonymize.education/images/og-image.png">
```

#### Breadcrumb
```html
Home > About
```

#### JSON-LD Schema
```json
{
  "@type": "AboutPage",
  "name": "About Anonymize.Education",
  "description": "Mission, founder statement, and technical approach",
  "founder": {
    "@type": "Person",
    "name": "George Curta",
    "url": "https://www.linkedin.com/in/george-curta-2867b7b8/",
    "sameAs": "https://anonym.legal/about/founder-statement"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Zenya Renewables B.V.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Amsterdam",
      "addressCountry": "NL"
    }
  }
}
```

---

### Phase 2: Update Imprint (Existing File)

**File**: `/impressum.html`
**URL**: https://anonymize.education/impressum.html

#### Changes Required

**Current Content**: Legal notice with company details
**Enhancement Needed**: Add link to founder statement

**Section to Add** (after company contact information):

```html
<section class="founder-statement">
  <h2>Founder Statement</h2>
  <p>
    Anonymize.Education is part of a larger ecosystem built on the conviction
    that privacy rights must be practically exercisable by everyone — not only
    by organizations with compliance departments.
  </p>
  <p>
    Read the complete founder statement, architectural principles, and company
    philosophy:
  </p>
  <p>
    <a href="https://anonym.legal/about/founder-statement" class="statement-link">
      Founder Statement on anonym.legal
    </a>
  </p>
  <p class="legal-note">
    The founder statement serves as the authoritative source for our technical
    approach, privacy commitments, and ecosystem architecture.
  </p>
</section>
```

**Styling** (add to existing styles):
```css
.founder-statement {
  background: var(--color-trust-light);
  border-left: 4px solid var(--color-trust);
  padding: 2rem;
  margin: 2rem 0;
  border-radius: 8px;
}

.statement-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--color-trust);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.15s;
}

.statement-link:hover {
  background: var(--color-trust-dark);
  transform: translateY(-1px);
}

.legal-note {
  font-size: 0.875rem;
  color: var(--color-slate-600);
  margin-top: 1rem;
}
```

---

### Phase 3: Update Navigation

**Files to Modify**: All pages with navigation
**Change**: Add "About" link to main navigation

**Current Navigation** (example from homepage):
```html
<nav class="nav__links">
  <a href="#solutions">Solutions</a>
  <a href="#integrations">Integrations</a>
  <a href="#pricing">Pricing</a>
  <a href="#trust">Trust</a>
  <a href="competitors.html">Compare</a>
  <a href="contact.html">Contact</a>
</nav>
```

**Updated Navigation**:
```html
<nav class="nav__links">
  <a href="#solutions">Solutions</a>
  <a href="about.html">About</a>
  <a href="#pricing">Pricing</a>
  <a href="competitors.html">Compare</a>
  <a href="contact.html">Contact</a>
</nav>
```

**Files Requiring Update** (35 total):
- 12 homepage language versions
- 23 content pages

---

### Phase 4: Update Footer Links

**Files to Modify**: All pages with footer
**Change**: Add "About" and ensure "Founder Statement" external link

**Current Footer** (example):
```html
<div class="footer__column">
  <h3>Company</h3>
  <a href="contact.html">Contact</a>
  <a href="impressum.html">Impressum</a>
  <a href="datenschutz.html">Privacy</a>
</div>
```

**Updated Footer**:
```html
<div class="footer__column">
  <h3>Company</h3>
  <a href="about.html">About</a>
  <a href="https://anonym.legal/about/founder-statement" target="_blank" rel="noopener">
    Founder Statement <span aria-hidden="true">↗</span>
  </a>
  <a href="contact.html">Contact</a>
  <a href="impressum.html">Impressum</a>
  <a href="datenschutz.html">Privacy</a>
</div>
```

---

### Phase 5: Update Sitemap & AI Crawler Files

**sitemap.xml**: Add about.html entry
```xml
<url>
  <loc>https://anonymize.education/about.html</loc>
  <lastmod>2026-03-04</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

**llms.txt**: Add about page reference
```
## About

- [About Anonymize.Education](https://anonymize.education/about.html)
- [Founder Statement](https://anonym.legal/about/founder-statement)
```

**llms-full.txt**: Add about page content section

---

## Content Guidelines

### Tone & Voice
- **Conviction-based**, not marketing-focused (match founder statement)
- **Evidence-driven** (cite 28 years experience, ISO 27001, etc.)
- **Technical architecture emphasis** over contractual promises
- **Education-specific** applications of general principles

### Key Phrases to Use
From founder statement, adapted for education:
- "Privacy rights must be practically exercisable by everyone" → "by every teacher, not just IT departments"
- "Technical architecture—not contractual guarantees" → "Zero-knowledge means we physically cannot access student data"
- "US law reaches any data held by US companies globally" → "Schools need technical protection, not just policy promises"

### What NOT to Do
- ❌ Don't copy verbatim (adapt to education context)
- ❌ Don't add marketing fluff (keep founder statement's directness)
- ❌ Don't make new commitments (defer to founder statement)
- ❌ Don't duplicate entire statement (link to it as source of truth)

---

## File Creation Checklist

### About Page (/about.html)
- [ ] Create HTML file with Protective Clarity design
- [ ] Hero section with mission statement
- [ ] Section 1: Why We Exist (education context)
- [ ] Section 2: Eight Commitments (adapted for schools)
- [ ] Section 3: Who We Are (founder, operator, builder)
- [ ] Section 4: Education-Specific Commitment
- [ ] Section 5: Ecosystem Overview (with link to founder statement)
- [ ] Prominent CTA: Link to https://anonym.legal/about/founder-statement
- [ ] Breadcrumb navigation (Home > About)
- [ ] Complete SEO meta tags
- [ ] JSON-LD AboutPage schema
- [ ] Mobile responsive
- [ ] WCAG 2.1 AA compliant

### Imprint Update (/impressum.html)
- [ ] Read existing file
- [ ] Add founder statement section after company details
- [ ] Add link to https://anonym.legal/about/founder-statement
- [ ] Add legal note about authoritative source
- [ ] Style founder statement section
- [ ] Test layout on mobile

### Navigation Updates (35 files)
- [ ] Homepage + 11 language versions
- [ ] 23 content pages
- [ ] Update <nav> to include "About" link
- [ ] Update footer to include "About" and "Founder Statement" external link
- [ ] Ensure proper spacing/order

### SEO Updates
- [ ] Add about.html to sitemap.xml
- [ ] Add about page to llms.txt
- [ ] Add about page content to llms-full.txt
- [ ] Update robots.txt if needed
- [ ] Test all internal links

---

## Timeline Estimate

**Phase 1 (About Page)**: 3-4 hours
- Content adaptation: 1.5 hours
- HTML/CSS implementation: 1 hour
- SEO/Schema: 0.5 hours
- Testing: 1 hour

**Phase 2 (Imprint Update)**: 30 minutes
- Content addition: 15 minutes
- Styling: 15 minutes

**Phase 3 (Navigation)**: 1.5 hours
- Update 35 nav sections: 1 hour
- Testing: 30 minutes

**Phase 4 (Footer)**: 1 hour
- Update 35 footer sections: 45 minutes
- Testing: 15 minutes

**Phase 5 (SEO Files)**: 30 minutes
- sitemap.xml: 5 minutes
- llms.txt: 10 minutes
- llms-full.txt: 15 minutes

**Total Estimated Time**: 6.5-7.5 hours

---

## Success Metrics

### Content Alignment
- [ ] All claims verifiable against founder statement
- [ ] Education-specific adaptations maintain core principles
- [ ] Link to founder statement prominent and functional
- [ ] No contradictions with anonym.legal content

### SEO Performance
- [ ] About page indexed within 48 hours
- [ ] Founder statement link passes link equity
- [ ] Breadcrumbs display in SERPs
- [ ] AboutPage schema validates (schema.org validator)

### User Experience
- [ ] About page loads in <2 seconds
- [ ] Mobile responsive (tested 320px-1920px)
- [ ] Accessible (WCAG 2.1 AA)
- [ ] Clear path from any page to founder statement

---

## Deployment Checklist

**Pre-Deployment**:
- [ ] Review content against founder statement
- [ ] Spell check all new content
- [ ] Test all internal links
- [ ] Test external link to anonym.legal
- [ ] Validate HTML
- [ ] Test on mobile devices
- [ ] Run accessibility audit

**Deployment**:
- [ ] Create about.html
- [ ] Update impressum.html
- [ ] Update navigation (35 files)
- [ ] Update footers (35 files)
- [ ] Update sitemap.xml
- [ ] Update llms.txt
- [ ] Update llms-full.txt
- [ ] Update CHANGELOG.md
- [ ] Git commit with detailed message
- [ ] Push to origin
- [ ] Push to production
- [ ] IndexNow notification (automatic)

**Post-Deployment**:
- [ ] Verify about page loads correctly
- [ ] Test founder statement link
- [ ] Check Google Search Console for crawl errors
- [ ] Validate schema with Google Rich Results Test
- [ ] Monitor Analytics for about page traffic

---

## Single Source of Truth Reminder

**ALL content on about.html and impressum.html regarding founder philosophy, technical architecture, and company commitments MUST be verifiable against:**

🔗 **https://anonym.legal/about/founder-statement**

If a claim cannot be found in the founder statement, either:
1. Don't make the claim, or
2. Clearly mark it as education-specific context

---

## Future Enhancements (Optional)

### Content Additions
- [ ] Founder video message (if available)
- [ ] Timeline graphic (1998-2026 journey)
- [ ] ISO 27001 certificate display
- [ ] Customer testimonials from schools
- [ ] Case study links

### Technical Enhancements
- [ ] FAQ schema for common questions about founder/company
- [ ] Team member profiles (if applicable)
- [ ] Press/media mentions
- [ ] Awards/certifications badges

---

**Document Version**: 1.0
**Last Updated**: 2026-03-04
**Next Review**: After implementation

**Key Principle**: Link to anonym.legal/about/founder-statement as authoritative source. Adapt, don't duplicate.
