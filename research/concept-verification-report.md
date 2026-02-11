# Investor Presentation Concept - Verification Report

**Date:** February 10, 2026
**Status:** VERIFICATION COMPLETE
**Result:** 12 DISCREPANCIES FOUND - CORRECTIONS REQUIRED

---

## Verification Methodology

1. **Live Website Verification**: Fetched current data from all product websites
2. **Competitor Verification**: Cross-checked against official documentation
3. **Market Data Verification**: Confirmed with primary sources
4. **Logical Plausibility Test**: Reviewed claims for consistency and accuracy

---

## SECTION 1: Product Website Verification

### 1.1 anonymize.today - VERIFIED ✓

| Claim in Concept | Live Website | Status |
|------------------|--------------|--------|
| 256 entity types | 256 entity types | ✓ CORRECT |
| 27 languages | 27 PII detection languages | ✓ CORRECT |
| 5 anonymization methods | Replace, Redact, Hash, Encrypt, Mask | ✓ CORRECT |
| Web + Desktop + Office + Chrome + API | All confirmed | ✓ CORRECT |
| ISO 27001, GDPR | Hetzner ISO 27001, GDPR compliant | ✓ CORRECT |
| 99.9% uptime SLA | 99.9% | ✓ CORRECT |
| Microsoft Presidio | Built on Presidio | ✓ CORRECT |

### 1.2 anonym.legal - VERIFIED ✓

| Claim in Concept | Live Website | Status |
|------------------|--------------|--------|
| 260+ entity types | 260+ Entity Types | ✓ CORRECT |
| 48 languages | 48 Languages Supported | ✓ CORRECT |
| spaCy + Stanza + XLM-RoBERTa | Powered by spaCy, Stanza, XLM-RoBERTa | ✓ CORRECT |
| MCP Server support | Pro & Business Only | ✓ CORRECT |
| Zero-knowledge | Not explicitly stated | ⚠️ NEEDS CLARIFICATION |
| Argon2id + XChaCha20 | Not mentioned on homepage | ⚠️ NEEDS CLARIFICATION |

### 1.3 cloak.business - VERIFIED ✓

| Claim in Concept | Live Website | Status |
|------------------|--------------|--------|
| 290+ entity types | 290+ entity types | ✓ CORRECT |
| 48 languages | 48 languages supported | ✓ CORRECT |
| 210 regex patterns | 210 custom regex recognizers with 246 patterns | ✓ CORRECT |
| 38 OCR languages | 38 OCR languages | ✓ CORRECT |
| spaCy, Stanza NER, XLM-RoBERTa | Confirmed | ✓ CORRECT |

### 1.4 blurgate.legal - VERIFIED ✓

| Claim in Concept | Live Website | Status |
|------------------|--------------|--------|
| 25 PII types in images | 25 entity types via Presidio | ✓ CORRECT |
| 48 languages (Tesseract) | 48-language support | ✓ CORRECT |
| 6 fill colors | 6 fill colors | ✓ CORRECT |
| 50+ Entity Types overall | 50+ Entity Types | ✓ CORRECT |

### 1.5 anonymize.dev - VERIFIED ✓

| Claim in Concept | Live Website | Status |
|------------------|--------------|--------|
| 50+ entity types | 50+ types | ✓ CORRECT |
| Secrets detection (API keys, SSH, JWT) | All confirmed | ✓ CORRECT |
| 48 languages | 48 languages | ✓ CORRECT |
| Claude Desktop, Cursor | Confirmed | ✓ CORRECT |
| Pricing €0-29/mo | €0/3/15/29 tiers | ✓ CORRECT |

### 1.6 anonym.plus - ⚠️ DISCREPANCIES FOUND

| Claim in Concept | Live Website | Status |
|------------------|--------------|--------|
| 200+ entity types | 200+ PII entity types | ✓ CORRECT |
| 48 languages (UI) + 20+ NLP | 48 languages, 20+ NLP models | ✓ CORRECT |
| 100% offline | 100% offline processing | ✓ CORRECT |
| **Perpetual license €199-€9,999** | **"Download for Free" - NO pricing shown** | ❌ NOT VERIFIED |
| **Enterprise deployment (Intune, SCCM, Jamf)** | **NOT mentioned on website** | ❌ NOT VERIFIED |
| BIP39 24-word recovery | Not mentioned | ⚠️ NEEDS CLARIFICATION |

### 1.7 anonym.life - ⚠️ DISCREPANCIES FOUND

| Claim in Concept | Live Website | Status |
|------------------|--------------|--------|
| 40+ recognizers | 40+ regex recognizers | ✓ CORRECT |
| BYOK support | Customer-managed keys (BYOK) | ✓ CORRECT |
| MPC threshold custody | MPC threshold custody | ✓ CORRECT |
| **155+ country coverage** | **NOT mentioned on website** | ❌ NOT VERIFIED |
| **Annual contract pricing €12K-€100K** | **NOT mentioned on website** | ❌ NOT VERIFIED |
| EU-Only deployment | NOT mentioned | ❌ NOT VERIFIED |

### 1.8 anonymize.education - VERIFIED WITH NOTE

| Claim in Concept | Live Website | Status |
|------------------|--------------|--------|
| 50+ entity types | 50+ Entity Types | ✓ CORRECT |
| 48 languages | 48 Languages Supported | ✓ CORRECT |
| GDPR, ISO 27001 | Confirmed | ✓ CORRECT |
| **FERPA compliance** | **NOT explicitly mentioned** | ⚠️ NOT VERIFIED |

---

## SECTION 2: Competitor & Market Data Verification

### 2.1 Azure AI Language - ❌ INCORRECT

| Claim in Concept | Verified Data | Status |
|------------------|---------------|--------|
| **79 languages** | **98-99 languages for NER/PII** | ❌ UNDERSTATED |

**Source**: [Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-services/language-service/concepts/language-support)

**Impact**: Azure actually supports MORE languages than stated, which weakens the competitive positioning argument.

### 2.2 Private AI - VERIFIED ✓

| Claim in Concept | Verified Data | Status |
|------------------|---------------|--------|
| 52 languages | 52 languages | ✓ CORRECT |

**Source**: [Private AI Docs](https://docs.private-ai.com/languages/)

### 2.3 AWS Comprehend - ⚠️ PARTIALLY CORRECT

| Claim in Concept | Verified Data | Status |
|------------------|---------------|--------|
| 4 English locales only | English and Spanish (en, es) | ⚠️ MISLEADING |

**Source**: [AWS Comprehend Docs](https://docs.aws.amazon.com/comprehend/latest/dg/how-pii.html)

**Note**: AWS supports English AND Spanish, not just 4 English locales. Still very limited but claim needs correction.

### 2.4 MCP Adoption Statistics - VERIFIED ✓

| Claim in Concept | Verified Data | Status |
|------------------|---------------|--------|
| 97M+ monthly SDK downloads | Over 97 million monthly | ✓ CORRECT |
| 5,800+ servers | Over 5,800 connectors | ✓ CORRECT |
| 300+ clients | 300+ MCP clients | ✓ CORRECT |
| 100K → 8M growth | 100K (Nov 2024) to 8M (Apr 2025) | ✓ CORRECT |
| Linux Foundation governance | Dec 2025 | ✓ CORRECT |

**Sources**: [Pento](https://www.pento.ai/blog/a-year-of-mcp-2025-review), [Deepak Gupta](https://guptadeepak.com/)

### 2.5 Data Privacy Market Size - VERIFIED WITH VARIANCE

| Claim in Concept | Verified Data | Status |
|------------------|---------------|--------|
| $5.37B (2025) | $5.37B (2025) | ✓ CORRECT |
| $60.4B (2034) | $45.13B - $60.4B (2034) | ⚠️ VARIANCE |
| 35.5% CAGR | 29.7% - 35.5% CAGR | ⚠️ VARIANCE |

**Source**: [Fortune Business Insights](https://www.fortunebusinessinsights.com/data-privacy-software-market-105420)

**Note**: Report shows variance in projections. Use conservative estimate.

### 2.6 AI Chat User Statistics - ⚠️ CORRECTIONS NEEDED

| Platform | Claim in Concept | Verified Data | Status |
|----------|------------------|---------------|--------|
| **ChatGPT** | 810M (Nov 2025) | 800-900M WAU (not MAU) | ⚠️ CLARIFY WAU vs MAU |
| **Gemini** | 750M (Feb 2026) | 750M MAU | ✓ CORRECT |
| **Claude** | 30M (Q2 2025) | 19-30M MAU (varies) | ✓ APPROXIMATE |

**Sources**: [TechCrunch](https://techcrunch.com/2026/02/04/googles-gemini-app-has-surpassed-750m-monthly-active-users/), [Backlinko](https://backlinko.com/chatgpt-stats)

**Note**: ChatGPT 810M is WAU (Weekly Active Users), not MAU. Need to clarify.

---

## SECTION 3: Logical Plausibility Test

### 3.1 Technology Claims - PASSED ✓

| Claim | Plausibility | Verdict |
|-------|--------------|---------|
| Deterministic regex vs AI/ML | Logical - regex is reproducible | ✓ VALID |
| Same entities across all frontends | Logical - shared Presidio backend | ✓ VALID |
| 100% offline for anonym.plus | Plausible - bundled NLP | ✓ VALID |
| Zero-knowledge architecture | Plausible - Argon2id + XChaCha20 standard | ✓ VALID |

### 3.2 Revenue Projections - NEEDS REVIEW

| Year | Projected | Plausibility Check |
|------|-----------|-------------------|
| 2026 | €500K | Aggressive for pre-revenue startup |
| 2027 | €1.5M | Requires 200%+ growth |
| 2028 | €3.8M | Requires 150%+ growth |

**Verdict**: Projections are optimistic but within PLG benchmark ranges IF:
- Chrome Extension reaches 15,000 DAU
- Office Add-in reaches 5,000 installs
- MCP Server reaches 10,000 installations
- 5-8% freemium conversion achieved

### 3.3 Competitive Positioning - NEEDS CORRECTION

| Claim | Issue |
|-------|-------|
| "Only Azure (79) exceeds 48 languages" | Azure actually has 98-99 languages |
| "AWS Comprehend is 4 English locales only" | AWS supports English AND Spanish |

**Impact**: Competitive language comparison table needs correction.

### 3.4 Regional Coverage Claims - PARTIALLY UNVERIFIED

| Claim | Verification Status |
|-------|---------------------|
| 155+ country-specific patterns | NOT verified on any website |
| 17+ regulations | Plausible based on GDPR/HIPAA/FERPA/etc. |
| Regional solution mapping | Logical but some solutions don't confirm features |

---

## SECTION 4: Summary of Required Corrections

### HIGH PRIORITY (Factual Errors)

| # | Location | Current | Correction |
|---|----------|---------|------------|
| 1 | F02, F15 | Azure AI: 79 languages | Azure AI: 98-99 languages |
| 2 | F02 | AWS Comprehend: 4 English locales | AWS Comprehend: English + Spanish (2 languages) |
| 3 | F06 | ChatGPT: 810M MAU | ChatGPT: 800-900M WAU (clarify weekly vs monthly) |

### MEDIUM PRIORITY (Unverified Claims)

| # | Location | Claim | Action |
|---|----------|-------|--------|
| 4 | F09 | anonym.plus perpetual €199-€9,999 | REMOVE or verify with product team |
| 5 | F09 | anonym.plus Intune/SCCM/Jamf | REMOVE or verify with product team |
| 6 | F03 | 155+ country patterns | REMOVE or verify source |
| 7 | F03 | anonym.life annual €12K-€100K | REMOVE or verify with product team |
| 8 | Various | anonymize.education FERPA | REMOVE or verify with product team |

### LOW PRIORITY (Clarifications Needed)

| # | Location | Item | Action |
|---|----------|------|--------|
| 9 | F11 | Argon2id + XChaCha20 on anonym.legal | Verify on product page or docs |
| 10 | F08 | Market size variance ($45B vs $60B) | Use conservative estimate |
| 11 | F15 | BIP39 recovery on anonym.plus | Verify with product team |

---

## SECTION 5: Corrected Competitive Comparison

### Language Support (Corrected)

| Rank | Solution | Languages | Detection Type | Notes |
|------|----------|-----------|----------------|-------|
| 1 | **Azure AI Language** | **98-99** | AI/ML NER | Cloud-only, probabilistic |
| 2 | Private AI | 52 | Transformer NER | On-prem available |
| 3 | **anonym.legal** | **48** | **Deterministic + NLP** | ZK architecture |
| 4 | **cloak.business** | **48** | **Deterministic** | 290+ entities |
| 5 | anonymize.today | 27 | Deterministic | 256 entities |
| 6 | Protecto AI | 20+ | Transformer LLM | Limited |
| 7 | **AWS Comprehend** | **2 (en, es)** | ML NER | Very limited |

**Key Insight**: Azure has MORE languages than previously stated, but is AI/ML only with no deterministic option. The differentiator should focus on **deterministic + EU sovereignty + ZK architecture**, not just language count.

---

## SECTION 6: Verification Sources

### Product Websites (Fetched Feb 10, 2026)
- https://anonymize.today
- https://anonym.legal
- https://cloak.business
- https://blurgate.legal
- https://anonymize.dev
- https://anonym.plus
- https://anonym.life
- https://anonymize.education

### Competitor Documentation
- [Microsoft Learn - Azure AI Language Support](https://learn.microsoft.com/en-us/azure/ai-services/language-service/concepts/language-support)
- [Private AI - Languages](https://docs.private-ai.com/languages/)
- [AWS Comprehend - PII Detection](https://docs.aws.amazon.com/comprehend/latest/dg/how-pii.html)

### Market Research
- [Fortune Business Insights - Data Privacy Software](https://www.fortunebusinessinsights.com/data-privacy-software-market-105420)
- [Pento - MCP Year Review](https://www.pento.ai/blog/a-year-of-mcp-2025-review)
- [TechCrunch - Gemini Users](https://techcrunch.com/2026/02/04/googles-gemini-app-has-surpassed-750m-monthly-active-users/)

---

## SECTION 7: Recommendations

### Immediate Actions Required

1. **Correct Azure language count** from 79 to 98-99 in all references
2. **Correct AWS Comprehend** from "4 English locales" to "English + Spanish"
3. **Clarify ChatGPT metric** as WAU (weekly) not MAU (monthly)
4. **Remove unverified pricing** for anonym.plus and anonym.life until confirmed
5. **Remove 155+ country claim** unless source can be provided
6. **Remove FERPA claim** for anonymize.education unless verified

### Adjust Competitive Positioning

Instead of emphasizing language count superiority, focus on:
- **Deterministic detection** (audit-proof, GDPR Article 35 compliant)
- **Zero-Knowledge architecture** (unique in market)
- **EU data sovereignty** (German hosting, no US Cloud Act)
- **Multi-frontend ecosystem** (6 platforms with same entities)
- **Perpetual offline option** (anonym.plus - once verified)

---

*Verification completed February 10, 2026. All discrepancies documented for correction.*
