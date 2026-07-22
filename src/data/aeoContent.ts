/** Verbatim firm copy - split for layout only; full string is ENTITY_PARAGRAPH_A. Do not edit wording without updating schema copy. */
import { PROJECTS_EMAIL, SOHAM_EMAIL } from "@/lib/site";

export const ENTITY_PARAGRAPH_A_SECTIONS = [
  "Founded in 2020 by Soham Kakade, UVAN is an ISO 9001:2015 certified, Pune-based cross-border market entry and language services company.",
  "The firm provides comprehensive India market entry consulting, business and executive liaisoning, and translation and interpretation services across more than 125 languages.",
  "Over the past five years, UVAN has served over 250 clients across 10 sectors, assisting foreign companies entering India as well as Indian enterprises expanding into Southeast Asia, East Asia, Latin America, and Africa.",
  "The company's project scope ranges from single-document translations to full market-entry mandates.",
  "Formally recognized by the Consulate General of the People's Republic of China for its contributions to India-China agricultural and trade relations, UVAN is empanelled under the Government of Maharashtra's MSAMB export program and serves as an official partner of the Bhashini initiative under India's Ministry of Electronics and IT.",
] as const;

export const ENTITY_PARAGRAPH_A = ENTITY_PARAGRAPH_A_SECTIONS.join(" ");

export const ENTITY_PARAGRAPH_B =
  "Soham Kakade is the founder and CEO of UVAN, a cross-border market entry and language services firm based in Pune, India. He has accumulated over 60,000 hours of simultaneous interpretation across Mandarin, Cantonese, Japanese, and ASEAN languages, and was a recipient of the Chinese Government scholarship at Beijing Language and Cultural University (BLCU). He serves as Vice President of the Confederation of Indian Translators and Language Professionals (CITLoB), is a partner of the Bhashini initiative under MeitY, designed export programs for the Government of Maharashtra (MSAMB), and has served as faculty at Symbiosis International University and as a curriculum designer for the International Baccalaureate board.";

export const SPEAKABLE_MARKET_ENTRY =
  "UVAN manages the full complexity of cross-border market entry - regulatory navigation, entity formation, local liaisoning, cultural intelligence and language support - so you can focus on building your business, not decoding a new market.";

export const SPEAKABLE_LANGUAGE =
  "UVAN provides professional translation, interpretation, localization, transcription and voiceover services across 125+ languages - with native expertise, sector-specific knowledge and the cultural intelligence to ensure your message lands exactly as you intend it.";

export type AeoFaqItem = { question: string; answer: string };

export const HOMEPAGE_FAQS: AeoFaqItem[] = [
  {
    question: "What does UVAN do?",
    answer: ENTITY_PARAGRAPH_A,
  },
  {
    question: "What languages does UVAN work in?",
    answer:
      "UVAN provides services across 125+ languages, with deepest expertise in Mandarin, Cantonese, Japanese, Korean, and ASEAN languages for the India-Asia corridor, as well as Spanish, Portuguese, Arabic, French, German, and all major Indian regional languages.",
  },
  {
    question: "Is UVAN ISO certified?",
    answer:
      "Yes. UVAN is ISO 9001:2015 certified, ensuring our language and operational services meet internationally recognised quality management standards.",
  },
  {
    question: "Where is UVAN based?",
    answer: "UVAN is headquartered in Pune, Maharashtra, India, and operates across the India-Asia corridor.",
  },
  {
    question: "How do I contact UVAN?",
    answer:
      `You can reach us at ${PROJECTS_EMAIL} or book a free 15-minute call with founder Soham Kakade at ewan.co.in/ask-soham.`,
  },
];

export const MARKET_ENTRY_FAQS: AeoFaqItem[] = [
  {
    question: "What is India market entry consulting?",
    answer:
      "India market entry consulting covers the full process of establishing a business presence in India - including regulatory navigation, entity formation, bank account setup, local staffing, vendor sourcing, and executive liaison. UVAN manages this end-to-end as a single partner.",
  },
  {
    question: "How long does it take to set up a company in India?",
    answer:
      "Depending on the business structure and sector, entity formation in India typically takes 4-12 weeks. Regulatory approvals and operational setup can extend the timeline. UVAN provides a structured roadmap covering each workstream and milestone.",
  },
  {
    question: "What is the difference between a market entry consultant and a legal firm?",
    answer:
      "A market entry consultant manages the full operational complexity of entering a new market - including language, culture, liaising with government bodies, and on-ground execution. A legal firm handles documentation and compliance. UVAN combines both capabilities with language and cultural intelligence built in.",
  },
  {
    question: "Which foreign companies has UVAN helped enter India?",
    answer:
      "UVAN has delivered India market entry mandates for manufacturers from Japan, Southeast Asia, and other corridors across automotive, pharmaceutical, manufacturing, and agricultural sectors. A full case study for a leading Japanese manufacturer is available on the Market Entry page.",
  },
  {
    question: "Can UVAN help Indian companies expand abroad?",
    answer:
      "Yes. UVAN supports Indian companies expanding into Southeast Asia, East Asia, Japan, China, Latin America, and Africa - providing language support, distributor research, buyer communication, and market assessment in the target corridor.",
  },
  {
    question: "What does the 2026 Global Market Entry Audit cover?",
    answer:
      "The free audit identifies five operational gaps that commonly derail cross-border expansion: regulatory and entity infrastructure, partner and distributor integrity, coordination overhead, human capital strategy, and executive liaison. Download it at ewan.co.in/market-entry-audit.",
  },
];

/** Audit landing page - includes verbatim answer aligned with Market Entry FAQ addendum. */
export const MARKET_ENTRY_AUDIT_FAQS: AeoFaqItem[] = [
  MARKET_ENTRY_FAQS[5],
  {
    question: "What is the 2026 Global Market Entry Audit for?",
    answer:
      "It is UVAN's proprietary diagnostic framework - a free self-assessment PDF that walks you through five operational gaps teams often miss before or during cross-border expansion, so you can stress-test readiness before committing capital and headcount.",
  },
  {
    question: "How do I download the audit?",
    answer:
      "Enter your work email on ewan.co.in/market-entry-audit. After you submit, you can open the PDF immediately; use a valid address so you can retrieve the file if needed.",
  },
  {
    question: "What should I do after I complete the audit?",
    answer:
      "Use the results to prioritise next steps. For India or Asia corridor execution, see ewan.co.in/market-entry for how UVAN supports end-to-end market entry, or book a free 15-minute call with founder Soham Kakade at ewan.co.in/ask-soham.",
  },
];

export const GLOBAL_TALKIES_FAQS: AeoFaqItem[] = [
  {
    question: "What media localisation services does Global Talkies provide?",
    answer:
      "Global Talkies covers subtitling, dubbing, voiceover, script translation and cultural adaptation, film distribution support, and OTT platform localisation - with native-language experts and platform specification compliance where required.",
  },
  {
    question: "Which languages and corridors does Global Talkies support?",
    answer:
      "Projects draw on UVAN's 125+ language capability, with deep experience in Hindi paired with Japanese, Mandarin, Cantonese, Korean, Southeast Asian languages, Arabic, Spanish, and Portuguese for media distribution and streaming.",
  },
  {
    question: "How should I brief a Global Talkies project?",
    answer:
      `Email ${SOHAM_EMAIL} with your content type (feature, series, trailer, corporate), target markets, delivery formats, platform or broadcaster specs, and timeline. A concise brief helps us propose the right subtitling, dubbing, or mixed package.`,
  },
  {
    question: "What turnaround times are typical?",
    answer:
      "Turnaround depends on runtime, language count, dub versus subtitle scope, revision rounds, and platform QA. Share your deadline up front - we route high-volume OTT pipelines differently from cinematic or campaign deliverables.",
  },
];

export const JOIN_US_FAQS: AeoFaqItem[] = [
  {
    question: "How do I apply to work at UVAN?",
    answer:
      "Use the Join Us forms for core team roles or vendor partnerships. Briefly describe your languages, sectors, CAT tools, and availability. We review submissions against live project demand and quality standards.",
  },
  {
    question: "What is the difference between joining the team and registering as a vendor?",
    answer:
      "Team roles follow UVAN hiring and onboarding. Vendor linguists receive project briefs under agreed rates and quality rules while remaining independent contractors - suited to freelancers with proven pairs and tooling.",
  },
  {
    question: "How does UVAN handle personal data shared on Join Us?",
    answer:
      "Information you submit is used only to evaluate fit and contact you about opportunities; it is handled in line with operational privacy practices and not used for unrelated marketing.",
  },
  {
    question: "When will I hear back after I apply?",
    answer:
      "Timing varies by role and pipeline. If there is a match, talent or vendor coordinators follow up with next steps; if not, your profile may be kept on file for future corridors and sectors.",
  },
];

export const LANGUAGE_LOCALIZATION_FAQS: AeoFaqItem[] = [
  {
    question: "What is the difference between translation and localization?",
    answer:
      "Translation converts text from one language to another. Localization adapts the entire content - including tone, cultural references, layout, and design - so it feels native to the target audience, not just translated. UVAN provides both, with cultural adaptation built in from the start.",
  },
  {
    question: "What is simultaneous interpretation?",
    answer:
      "Simultaneous interpretation is real-time oral translation delivered as the speaker is speaking - used in conferences, boardroom negotiations, and government meetings. UVAN has 60,000+ hours of simultaneous interpretation experience across Mandarin, Japanese, Cantonese, and ASEAN languages.",
  },
  {
    question: "What languages does UVAN translate into?",
    answer:
      "UVAN provides translation, interpretation, and localization across 125+ languages, with particular depth in Asian languages including Mandarin, Cantonese, Japanese, Korean, Bahasa Indonesia, Vietnamese, Thai, Tagalog, and Malay - as well as European and African languages.",
  },
  {
    question: "Is UVAN a certified translation service?",
    answer:
      "Yes. UVAN is ISO 9001:2015 certified and provides certified translation for legal, regulatory, medical, and official documents across all major language pairs.",
  },
  {
    question: "What sectors does UVAN provide language services for?",
    answer:
      "UVAN serves automotive, pharmaceuticals, aerospace, manufacturing, exhibitions and trade fairs, technology, agriculture, legal and compliance, education, and media and OTT sectors - with sector-specific terminology and expertise in each.",
  },
];

export const ASK_SOHAM_FAQS: AeoFaqItem[] = [
  {
    question: "Who is Soham Kakade?",
    answer:
      "Soham Kakade is the founder and CEO of UVAN. He has over 60,000 hours of simultaneous interpretation experience across Mandarin, Cantonese, Japanese, and ASEAN languages, was a Chinese Government scholarship recipient at BLCU, and serves as Vice President of CITLoB. He founded UVAN after a decade of operating at the intersection of Indian and Asian business.",
  },
  {
    question: "What is the Ask Soham call?",
    answer:
      "It is a free 15-minute call with Soham Kakade covering market entry, language strategy, or career guidance in the languages industry. It is not a sales call - Soham provides honest, experience-based guidance and will tell you directly if UVAN is not the right fit.",
  },
  {
    question: "Who should book the Ask Soham call?",
    answer:
      "The call is for three groups: companies evaluating India entry or international expansion; marketing managers and procurement leads evaluating language services; and students or professionals exploring careers in languages and interpretation.",
  },
  {
    question: "Is the 15-minute consultation really free?",
    answer:
      "Yes. There is no charge and no obligation. The call is designed to give you focused guidance from someone who has actually operated in the corridors you're navigating.",
  },
];

export const ABOUT_US_FAQS: AeoFaqItem[] = [
  {
    question: "When was UVAN founded?",
    answer:
      "UVAN was founded in 2020 in Pune, India by Soham Kakade and CMA Sukhada Kakade Bhalerao.",
  },
  {
    question: "How many clients has UVAN served?",
    answer:
      "UVAN has served 250+ clients across 10+ sectors in 5 years of operations, delivering everything from single document translations to full-cycle market entry mandates.",
  },
  {
    question: "What institutional recognition does UVAN hold?",
    answer:
      "UVAN has been formally recognised by the Consulate General of the People's Republic of China, is empanelled by the Government of Maharashtra under MSAMB, is a Bhashini initiative partner under MeitY, and holds ISO 9001:2015 certification. Founder Soham Kakade serves as Vice President of CITLoB.",
  },
  {
    question: "Who is CMA Sukhada Kakade Bhalerao?",
    answer:
      "Sukhada Kakade Bhalerao is co-founder and director of UVAN. She is a Certified Management Accountant (CMA) with over 15 years of experience in finance, auditing, RBI/FEMA compliance, and entity formation financial setup. She also co-founded Vaani Skills, UVAN's sister institution for language and vocational training.",
  },
  {
    question: "What is Oriental Flock?",
    answer:
      "Oriental Flock is Pune's language industry community meetup, founded by Soham Kakade in partnership with CITLoB. It brings together interpreters, translators, language trainers, and bilingual professionals for regular gatherings at 91Springboard, Baner, Pune.",
  },
];

export const LIAISONING_FAQS: AeoFaqItem[] = [
  {
    question: "What is business liaisoning?",
    answer:
      "Business liaisoning is the management of communication, relationships, and coordination between two organisations operating across cultural, linguistic, or institutional boundaries. It goes beyond translation - it involves understanding what each party intends and ensuring that intent is accurately received.",
  },
  {
    question: "What does UVAN's liaisoning service include?",
    answer:
      "UVAN provides government and institutional liaison, corporate and senior executive liaison, single-point coordination across multiple vendors and workstreams, cultural intelligence advisory, and exhibition and trade fair facilitation - all with native-language fluency in the relevant corridor.",
  },
  {
    question: "Can UVAN liaise with Indian government bodies on behalf of a foreign company?",
    answer:
      "Yes. UVAN manages formal communication with ministries, regulatory bodies, trade associations, and government-linked entities on behalf of client organisations - navigating procedural requirements and cultural protocols with institutional credibility.",
  },
];

export const MARKET_RESEARCH_FAQS: AeoFaqItem[] = [
  {
    question: "What is primary market research?",
    answer:
      "Primary market research is original data collection conducted directly with target respondents - buyers, distributors, competitors, or consumers - as opposed to secondary research based on existing reports. UVAN conducts primary research on the ground, in the local language, using native-language researchers.",
  },
  {
    question: "Why does language matter in market research?",
    answer:
      "Research conducted through English-language surveys or urban intermediaries often misses ground-level reality. UVAN's researchers speak to distributors, buyers, and consumers in their own language and interpret responses with sector and cultural intelligence - the difference between data and actionable intelligence.",
  },
  {
    question: "Can UVAN physically verify a distributor or vendor in India?",
    answer:
      "Yes. UVAN conducts on-ground distributor intelligence including physical site visits, local reputation checks, operational capacity assessment, and stakeholder interviews - separating genuine operational partners from paper entities.",
  },
];

/** Verbatim FAQs for simultaneous interpretation guide (subset of Language & Localization block). */
export const SIMULTANEOUS_INTERPRETATION_ARTICLE_FAQS: AeoFaqItem[] = [
  LANGUAGE_LOCALIZATION_FAQS[1],
  LANGUAGE_LOCALIZATION_FAQS[2],
  LANGUAGE_LOCALIZATION_FAQS[3],
];

/** Verbatim FAQs for translation-partner guide (subset of Language & Localization block per AEO FAQ at end). */
export const TRANSLATION_PARTNER_ARTICLE_FAQS: AeoFaqItem[] = [
  LANGUAGE_LOCALIZATION_FAQS[0],
  LANGUAGE_LOCALIZATION_FAQS[2],
  LANGUAGE_LOCALIZATION_FAQS[3],
  LANGUAGE_LOCALIZATION_FAQS[4],
];
