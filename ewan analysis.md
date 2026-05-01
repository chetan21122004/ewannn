# ewan.co.in — Full Site Analysis
**Source:** README.md (Master Copy & Developer Handoff) + Local Codebase (`App.tsx`, `Navbar.tsx`, `Footer.tsx`)

---

## 📋 All Pages Defined in README.md

| # | Page Name | README URL | Status in Local Code |
|---|-----------|------------|----------------------|
| 01 | **Homepage** | `ewan.co.in/` | ✅ Built (`/`) |
| 02 | **Ask Soham Booking** | `ewan.co.in/ask-soham/` | ✅ Built (`/ask-soham`) |
| 03 | **Market Entry** | `ewan.co.in/market-entry/` | ✅ Built (`/market-entry`) |
| 04 | **Market Entry Audit** *(lead magnet)* | `ewan.co.in/market-entry-audit/` | ✅ Built (`/market-entry-audit`) |
| 05 | **Liaisoning & Facilitation** | `ewan.co.in/liaisoning-facilitation/` | ✅ Built (`/liaisoning-facilitation`) |
| 06 | **Market Research** | `ewan.co.in/market-research/` | ✅ Built (`/market-research`) |
| 07 | **Import, Procurement & Export** | `ewan.co.in/import-procurement-export/` | ✅ Built (`/import-procurement-export`) |
| 08 | **Language & Localization** | `ewan.co.in/language-localization/` | ✅ Built (`/language-localization`) |
| 09 | **Global Talkies** | `ewan.co.in/global-talkies/` | ✅ Built (`/global-talkies`) |
| 10 | **Industries** | `ewan.co.in/industries/` | ✅ Built (`/industries`) |
| 11 | **About Us** | `ewan.co.in/about-us/` | ✅ Built (`/about-us`) |
| 12 | **Join Us** | `ewan.co.in/join-us/` | ✅ Built (`/join-us`) |
| 13 | **Media Hub** | `ewan.co.in/media/` | ✅ Built (`/media`) |
| 14 | **Language Gazette** | `ewan.co.in/language-gazette/` | ✅ Built (`/language-gazette`) |
| 15 | **Contact Us** | `ewan.co.in/contact/` | ✅ Built (`/contact`) |
| — | **404 / Not Found** | — | ✅ Built (`/*`) |

> **All 15 pages** from the README are implemented as routes in `App.tsx`.

---

## ❌ Pages in README — NOT Yet in Local Code

| Page | README URL | Gap Note |
|------|------------|----------|
| **Arogya Yatri** | `ewan.co.in/arogya-yatri/` *(implied)* | Navbar links to `/market-entry` — no dedicated page |
| **Case Studies** | No standalone URL defined | Navbar links to `/market-entry` — no dedicated page |
| **Testimonials** | No standalone URL defined | Navbar links to `/` — no dedicated page |
| **Blog & Insights** | Referenced as `/insights` in Navbar | Route `/insights` is NOT registered in `App.tsx` — will 404 |
| **The Language Gazette (individual articles)** | `ewan.co.in/language-gazette/[slug]` | Only the index page exists; no article detail routes |
| **Arogya Yatri** | Referenced in nav + footer | No page exists |

---

## 🔗 All URLs in the Codebase

### Internal Routes (`App.tsx`)

| Route | Page Component |
|-------|---------------|
| `/` | `Index.tsx` (Homepage) |
| `/ask-soham` | `AskSoham.tsx` |
| `/market-entry` | `MarketEntry.tsx` |
| `/market-entry-audit` | `MarketEntryAudit.tsx` |
| `/liaisoning-facilitation` | `LiaisoningFacilitation.tsx` |
| `/market-research` | `MarketResearch.tsx` |
| `/import-procurement-export` | `ImportProcurementExport.tsx` |
| `/language-localization` | `LanguageLocalization.tsx` |
| `/global-talkies` | `GlobalTalkies.tsx` |
| `/industries` | `Industries.tsx` |
| `/about-us` | `AboutUs.tsx` |
| `/join-us` | `JoinUs.tsx` |
| `/media` | `Media.tsx` |
| `/language-gazette` | `LanguageGazette.tsx` |
| `/contact` | `Contact.tsx` |
| `/*` | `NotFound.tsx` |

---

### Navbar Dropdown Links (`Navbar.tsx`)

#### Market Entry Dropdown
| Label | Link |
|-------|------|
| India Entry for Foreign Companies | `/market-entry` |
| Indian Companies Going Abroad | `/market-entry` |
| Liaisoning & Facilitation | `/liaisoning-facilitation` |
| Market Research | `/market-research` |
| Import, Procurement & Export | `/import-procurement-export` |
| Arogya Yatri | `/market-entry` *(no dedicated page — should be `/arogya-yatri`)* |
| Cultural & Language Know-How ↗ | `https://bhashikskill.co.in` *(external)* |

#### Language & Localization Dropdown
| Label | Link |
|-------|------|
| Translation | `/language-localization` |
| Interpretation | `/language-localization` |
| Localization | `/language-localization` |
| Transcription | `/language-localization` |
| Voiceover | `/language-localization` |
| Proofreading | `/language-localization` |
| Global Talkies | `/global-talkies` |
| Learn a Language With Us ↗ | `https://bhashikskill.co.in` *(external)* |

#### About Us Dropdown
| Label | Link |
|-------|------|
| About Ewan | `/about-us` |
| The Founders | `/about-us` |
| Oriental Flock | `/about-us` |
| Our Partners | `/about-us` |
| Join Us | `/join-us` |
| Case Studies | `/market-entry` *(no dedicated page)* |
| Testimonials | `/` *(homepage anchor, no dedicated page)* |

#### Media Dropdown
| Label | Link |
|-------|------|
| The Language Gazette | `/language-gazette` |
| Blog & Insights | `/insights` ⚠️ **BROKEN — route not registered** |
| Videos | `/media` |
| Press | `/media` |

#### Static Nav Links
| Label | Link |
|-------|------|
| Industries | `/industries` |
| Contact Us | `/contact` |

#### Sticky CTA (every page)
| Label | Link |
|-------|------|
| Ask Soham — 15 Min Free | `/ask-soham` |

---

### Footer Links (`Footer.tsx`)

#### Nav Columns (currently all `href="#"` — not wired up!)
| Column | Links |
|--------|-------|
| Services | Market Entry, Language & Localization, Industries, Case Studies |
| Company | About Us, Founders, Media, Join Us |
| Contact | Ask Soham — 15 Min Free, hello@ewan.com ⚠️ *(wrong email — should be `info@ewan.co.in`)*, +91 · India HQ |
| Explore | Arogya Yatri, Case Studies, Join Us, Privacy Policy |

> [!WARNING]
> All footer nav links use `href="#"` — they are NOT wired to actual routes. This is a pending task.

#### Social Links (Footer)
| Platform | URL |
|----------|-----|
| Facebook | `https://www.facebook.com/EwanBusinessSolutions?mibextid=ZbWKwL` |
| X (Twitter) | `https://x.com/ewanbusiness` |
| Instagram | `https://www.instagram.com/ewanbizsolution/` |
| LinkedIn | `https://www.linkedin.com/company/ewan-business-solutions/` |
| YouTube | `https://www.youtube.com/@EWAN-SSK` |

#### Certifications / Logos (Footer)
| Badge | Logo File |
|-------|-----------|
| ISO 9001:2015 Certified | `/allLogos/ISO-9001.png` |
| CITLoB Member | `/allLogos/CITLoB-logo-2023.jpg` |
| Bhashini Initiative Partner | `/allLogos/Bhashini-Logo.png` |

#### Ecosystem Link (Footer)
| Label | URL |
|-------|-----|
| Part of the Ewan Group — Bhashik Skill Development | `https://bhashikskill.co.in` |

---

## ⚠️ Bugs & Gaps Found

| Issue | Location | Fix Needed |
|-------|----------|------------|
| `/insights` route is missing | `Navbar.tsx` Media dropdown → "Blog & Insights" | Register route in `App.tsx` or change link to `/media` |
| Footer nav all links are `href="#"` | `Footer.tsx` all 4 columns | Wire to actual internal routes |
| Footer email is `hello@ewan.com` | `Footer.tsx` Contact column | Change to `info@ewan.co.in` per README |
| Footer copyright says "© 2024 COSIO" | `Footer.tsx` bottom bar | Should say "© 2026 Ewan Business Solutions" |
| "Arogya Yatri" has no dedicated page | Navbar + Footer | Either build `/arogya-yatri` or remove from nav |
| "Blog & Insights" has no route | `App.tsx` | Add route or merge into `/media` |
| Language selector (EN/中文/日本語) in Navbar | `Navbar.tsx` | Only toggles state — no actual i18n switching |

---

## 🗺️ Homepage Sections (matching README Section 02)

| README Section | Local Component |
|---------------|----------------|
| Hero + CTAs | `HeroSection.tsx` |
| Stats Bar (60K hrs, 125+ langs…) | `StatsSection.tsx` |
| Two Capabilities section | `ServicesSection.tsx` |
| Client Logo Strip | `ClientLogosSection.tsx` |
| Case Study — Showa Japan | `CaseStudySection.tsx` |
| Why Ewan — Differentiators | `WhyEwanSection.tsx` |
| Consulate Recognition | `InstitutionalTrustSection.tsx` |
| Partners & Collaborators | `PartnersSection.tsx` |
| Industries Grid | `SectorsSection.tsx` |
| Testimonials | `TestimonialsSection.tsx` |
| Founders Section | `FoundersSection.tsx` |
| Closing CTA Band | `ContactSection.tsx` (or `AboutSection.tsx`) |
| Footer | `Footer.tsx` |

---

## 📸 External URLs Referenced in README (not yet in codebase)

| Reference | URL |
|-----------|-----|
| Bhashik Skill Development | `https://bhashikskill.co.in` |
| Language Gazette PDF download | TBD — not implemented |
| Calendly embed (Ask Soham page) | TBD — not implemented |
| Market Entry Audit PDF | `Ewan_GlobalMarketEntry_Audit_2026.pdf` — not in `/public` |
| Soham's LinkedIn | Not yet linked in code |
| Sukhada's LinkedIn | Not yet linked in code |

