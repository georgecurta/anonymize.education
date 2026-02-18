# Privacy & Compliance Glossary for Education

A comprehensive guide to privacy terminology for schools, districts, and educational institutions.

---

## Compliance Frameworks

### FERPA (Family Educational Rights and Privacy Act)
US federal law protecting student education records. Applies to all schools receiving federal funding. Key provisions:
- Parents have right to access student records
- Schools need consent to release records (with exceptions)
- Students gain rights at age 18 or when entering higher education

**How Anonymize.Education helps:** Pre-built FERPA workflows, audit trails, and school official designation under legitimate educational interest exception.

### COPPA (Children's Online Privacy Protection Act)
US federal law protecting children under 13. Requires:
- Verifiable parental consent before collecting PII
- Clear privacy policies
- Data minimization
- No conditioning participation on data collection

**How Anonymize.Education helps:** School consent workflows built-in. No third-party data sharing. COPPA-compliant by design.

### GDPR (General Data Protection Regulation)
EU regulation (2016/679) with extraterritorial reach. Maximum penalty: EUR 20M or 4% global revenue. Key principles:
- Lawfulness, fairness, transparency
- Purpose limitation
- Data minimization
- Accuracy
- Storage limitation
- Integrity and confidentiality

**How Anonymize.Education helps:** German servers (EU data residency), ISO 27001 certified, complete audit trails.

### SDPC (Student Data Privacy Consortium)
Organization providing standardized Data Privacy Agreements (DPAs) for K-12 schools. Pre-signed National DPA available for participating vendors.

**How Anonymize.Education helps:** Pre-signed National DPA available. State-specific DPA participation.

---

## Privacy Techniques

### Anonymization
Irreversible transformation of data to prevent identification. Once anonymized, data is no longer considered personal data under GDPR.

**Example:** "John Smith, Grade 5" → "[REDACTED], Grade 5"

### Pseudonymization
Reversible transformation where identifying data is replaced with artificial identifiers. Original data can be recovered with a key.

**Example:** "John Smith" → "Student_A7B9" (with mapping table stored securely)

### Tokenization
Replacing sensitive data with non-sensitive tokens that map to original values. Similar to pseudonymization but typically used for structured data like credit cards.

**Example:** "4532-1234-5678-9012" → "TOK_8F3A2B1C"

### Redaction
Complete removal of sensitive information from documents, typically replaced with black bars or "[REDACTED]" markers.

**Example:** Visible black bars over names in PDF documents.

### Masking
Partial hiding of data while preserving some characters for reference or validation.

**Example:** "john.smith@school.edu" → "j***.s****@s*****.edu"

### Hashing
One-way cryptographic transformation that creates a fixed-length fingerprint. Cannot be reversed.

**Example:** "John Smith" → "a7b9c3d8e5f2..." (SHA-256)

### Encryption (Reversible)
Transformation using cryptographic keys that can be reversed by authorized parties. **UNIQUE to Anonymize.Education** among education privacy tools.

**Example:** "John Smith" → "ENC[x7f8g9h...]" (can be decrypted when needed)

---

## Technical Terms

### Zero-Knowledge Architecture
System design where the service provider mathematically cannot access user data. Data is encrypted before reaching servers; only users hold decryption keys.

**Why it matters:** Even if servers are breached, attackers get only encrypted data.

### End-to-End Encryption (E2EE)
Encryption where only communicating users can read messages. Data is encrypted on sender's device, decrypted on recipient's device.

### AES-256-GCM
Advanced Encryption Standard with 256-bit keys in Galois/Counter Mode. NIST-approved, considered unbreakable with current technology.

### Argon2id
Password hashing algorithm designed to be resistant to both GPU attacks and side-channel attacks. Winner of the Password Hashing Competition.

### Client-Side Encryption
Data encrypted on user's device before transmission. Server never sees unencrypted data.

### Deterministic Detection
PII detection using fixed rules (regex patterns) that produce consistent, reproducible results. Contrast with probabilistic AI detection.

**Why it matters:** Deterministic methods are auditable and produce identical results each run. Probabilistic AI methods may vary.

### Hybrid Detection
Combining multiple detection methods:
1. **Regex patterns** - Deterministic rules for structured data (SSN, credit cards)
2. **NLP models** - spaCy/Stanza for named entity recognition
3. **Transformer models** - XLM-RoBERTa for multilingual context

**Advantage:** More accurate than any single method alone.

---

## Data Types (PII Categories)

### Direct Identifiers
Information that directly identifies an individual:
- Full name
- Email address
- Phone number
- Social Security Number
- Student ID number

### Indirect Identifiers (Quasi-identifiers)
Information that can identify when combined:
- Date of birth
- ZIP code
- Gender
- Grade level
- Class designation

### Sensitive Personal Data
Special categories requiring extra protection:
- Health information (IEP/504 status)
- Biometric data
- Religious beliefs
- Racial/ethnic origin

### Education Records (under FERPA)
Records directly related to a student maintained by school:
- Grades and transcripts
- Class schedules
- Attendance records
- Disciplinary records
- IEP/504 plans
- Financial aid records

---

## Integration Terms

### LMS (Learning Management System)
Platform for managing educational content and student interactions. Examples: Canvas, Blackboard, Schoology, Google Classroom.

### SIS (Student Information System)
Database system for managing student records. Examples: PowerSchool, Infinite Campus.

### SSO (Single Sign-On)
Authentication method allowing one login for multiple applications. Common in K-12: Clever, ClassLink.

### SCIM (System for Cross-domain Identity Management)
Standard protocol for automating user provisioning across cloud services.

### LTI (Learning Tools Interoperability)
Standard for integrating external tools with learning management systems. Current version: LTI 1.3.

### MCP (Model Context Protocol)
Protocol for integrating tools with AI assistants like Claude. Enables anonymization before data reaches AI models.

---

## Compliance Documents

### DPA (Data Processing Agreement)
Contract between data controller (school) and data processor (vendor) required by GDPR Article 28 and many US state laws.

### DPIA (Data Protection Impact Assessment)
Formal assessment required for high-risk processing under GDPR Article 35.

### HECVAT (Higher Education Community Vendor Assessment Toolkit)
Standardized security assessment questionnaire for higher education vendors.

### SIG (Standardized Information Gathering)
Security questionnaire format commonly used in enterprise vendor assessments.

### FOIA (Freedom of Information Act)
US federal law requiring disclosure of government records. Many state equivalents apply to public schools.

---

## Security Certifications

### SOC 2 Type II
Service Organization Control report assessing security controls over time (typically 6-12 months). Type II demonstrates ongoing compliance vs. point-in-time Type I.

### ISO 27001
International standard for information security management systems (ISMS). Requires annual surveillance audits, full recertification every 3 years.

### WCAG 2.1 AA
Web Content Accessibility Guidelines level AA. Required for Section 508 compliance in US government and often required for education tools.

### Section 508
US law requiring federal agencies to make technology accessible to people with disabilities. Often extended to K-12 by state policies.

---

## Entity Types Detected

Anonymize.Education detects 320+ entity types including:

**Personal:** Names, emails, phone numbers, dates of birth, ages, genders
**Government IDs:** SSN (US), NIN (UK), Tax IDs (70+ countries), passport numbers, driver's licenses
**Education:** Student IDs, grade levels, class designations, IEP markers, teacher IDs
**Financial:** Credit cards, bank accounts, IBAN numbers
**Healthcare:** Medical record numbers, health plan IDs, diagnosis codes
**Technical:** IP addresses, MAC addresses, device IDs, API keys
**Location:** Physical addresses, GPS coordinates, ZIP codes

---

*Last updated: February 2026*
