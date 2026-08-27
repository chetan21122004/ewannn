export type CaseStudyQuote = {
  text: string;
  attribution: string;
};

export type QuickFactRow = {
  label: string;
  value: string;
};

export type CaseStudyResultGroup = {
  title: string;
  items: string[];
};

export type CaseStudyGroup = "services" | "mandates";

export type CaseStudyEntry = {
  id: string;
  title: string;
  headline: string;
  headlineSub?: string;
  subjectLine?: string;
  summary: string;
  corridor: string;
  sector?: string;
  caseStudyGroup?: CaseStudyGroup;
  featured?: boolean;
  quickFacts: QuickFactRow[];
  quickFactsTagline?: string;
  situation: string;
  challenge: string;
  deliveredIntro?: string;
  delivered: string[];
  results: string[];
  resultGroups?: CaseStudyResultGroup[];
  quote?: CaseStudyQuote;
  tags?: string[];
  pdfUrl?: string;
  pdfFileName?: string;
  coverImageUrl?: string;
};

export const caseStudyCatalog: CaseStudyEntry[] = [
  {
    id: "translation-services",
    title: "Translation Services Case Study",
    subjectLine: "Language Services | Translation",
    headline: "Your Language Bridge Between the Orient and the World.",
    headlineSub: "20,000+ Files. 10 Lakh+ Words. Trusted by Governments and MNCs.",
    corridor: "Global",
    sector: "Translation",
    caseStudyGroup: "services",
    summary:
      "Human expertise in translation will never be replaced by machines. UVAN has translated 20,000 files containing approximately 10 lakh words as oriental language experts - official documents, manuals, legal, creative, videos, and company literature.",
    quickFacts: [
      { label: "Scope", value: "Official, legal, creative, technical, and multimedia translation" },
      { label: "Volume", value: "20,000+ files · ~10 lakh words delivered" },
      { label: "Clients", value: "Chinese & Indian governments, MNCs, and private firms" },
      { label: "Delivered", value: "Confidential, secure, year-round translation across sectors" },
    ],
    situation:
      "Even as technology advances, human intervention in translation remains essential - thinking ability outperforms machine-driven output. UVAN serves as a master of translation services, building trust through precision, confidentiality, and domain-aware delivery.",
    challenge:
      "Clients need translations that preserve meaning, tone, and legal accuracy across official documents, manuals, creative content, and multimedia - without compromising security or timelines. Government and enterprise mandates demand trustworthy handling end to end.",
    delivered: [
      "Delivered translation across official documents, manuals, legal files, creative content, videos, and company literature.",
      "Maintained strict confidentiality and purpose-driven workflows so outcomes match client intent.",
      "Supported government officials and enterprise teams with secure, trustworthy project handling.",
      "Worked year-round across sectors with Chinese and Indian government bodies, MNCs, and private firms.",
    ],
    results: [
      "20,000+ files translated with approximately 10 lakh words delivered as oriental language experts.",
      "Trusted by government authorities and multinational clients for timely, secure delivery.",
      "Established UVAN as a dependable language bridge between the Orient and global markets.",
    ],
    tags: ["Translation", "Oriental Languages", "Legal", "Government", "MNC"],
    pdfUrl: "/casestd/TRANSLATION_Case-Studies.pdf",
    pdfFileName: "TRANSLATION_Case-Studies.pdf",
    coverImageUrl: "/caseStudy/translation-global-languages.png",
  },
  {
    id: "localization-services",
    title: "Localization Services Case Study",
    subjectLine: "Language Services | Localization",
    headline: "Subtitles, Voiceovers, and Dubbing.",
    headlineSub: "All Under One Roof - With Experience and Trust.",
    corridor: "Global",
    sector: "Localization",
    caseStudyGroup: "services",
    summary:
      "Localization unlocks global opportunity by adapting content to local cultures, references, values, and languages. UVAN offers dubbing, subtitling, and voice-over while preserving tone, objective, and essence.",
    quickFacts: [
      { label: "Services", value: "Dubbing · subtitling · voice-over" },
      { label: "Languages", value: "Chinese · French · Japanese · Russian · Spanish + more" },
      { label: "Approach", value: "Custom localization per project - not one-size-fits-all" },
      { label: "Delivered", value: "Cost-effective media localization with desired impact" },
    ],
    situation:
      "Businesses operating on a global platform must learn local cultures, references, values, and languages. Localization is the key to unlocking limitless international opportunity - but each market requires a tailored approach.",
    challenge:
      "Generic localization models fail when tone, cultural nuance, and media format must all be preserved. Clients need dubbing, subtitling, and voice-over delivered with consistency, speed, and local authenticity.",
    delivered: [
      "Offered dubbing, subtitling, and voice-over under one coordinated localization team.",
      "Customized localization workflows per project based on exact consumer and market requirements.",
      "Maintained tone, objective, and essence of each project throughout localization.",
      "Delivered cost-effective services across Chinese, French, Japanese, Russian, Spanish, and more.",
    ],
    results: [
      "Clients gained a single trusted partner for multimedia localization across languages.",
      "Localized content retained cultural relevance while expanding global reach.",
      "Round-the-clock delivery capability supported time-sensitive media and enterprise programs.",
    ],
    tags: ["Localization", "Dubbing", "Subtitling", "Voice-over", "Media"],
    pdfUrl: "/casestd/LOCALIZATION_Case-Studies.pdf",
    pdfFileName: "LOCALIZATION_Case-Studies.pdf",
    coverImageUrl: "/caseStudy/localization-global-media.png",
  },
  {
    id: "interpretation-services",
    title: "Interpretation Services Case Study",
    subjectLine: "Language Services | Interpretation",
    headline: "A Thousand Words in a Foreign Language.",
    headlineSub: "Without Losing Context - Online or On-Site.",
    corridor: "Global",
    sector: "Interpretation",
    caseStudyGroup: "services",
    summary:
      "Interpretation is distinct from translation - it demands real-time tact, advanced oriental language knowledge, and context preservation. UVAN supports simultaneous and consecutive communication for governments, MNCs, and industrial mandates.",
    quickFacts: [
      { label: "Modes", value: "Simultaneous & consecutive · online and offline" },
      { label: "Specialization", value: "Machine installation, commissioning, and high-stakes meetings" },
      { label: "Clients", value: "MNCs · Ministry of Commerce · Chinese Consulate" },
      { label: "Delivered", value: "Trusted interpretation across diverse industries and borders" },
    ],
    situation:
      "Although interpretation appears similar to translation, the two require different mastery. Explaining the meaning of a thousand words in a foreign language without changing context takes practice, domain knowledge, and cultural tact.",
    challenge:
      "Government authorities and multinational clients need interpretation that works in boardrooms, installations, and diplomatic settings - with zero loss of technical or commercial meaning between oriental languages and global markets.",
    delivered: [
      "Provided simultaneous and consecutive interpretation online and on-site.",
      "Supported machine installation and commissioning with specialist language coverage.",
      "Served MNCs, Ministry of Commerce teams, and the Chinese Consulate with trusted delivery.",
      "Crossed industry borders to assist clients across truly diverse domains.",
    ],
    results: [
      "Government and enterprise clients gained a reliable interpretation bridge for high-stakes communication.",
      "Technical and commercial discussions proceeded without context loss across languages.",
      "UVAN reinforced its position as an oriental-language interpretation partner for global markets.",
    ],
    tags: ["Interpretation", "Simultaneous", "Consecutive", "Government", "MNC"],
    pdfUrl: "/casestd/INTERPRETATION_Case-Studies.pdf",
    pdfFileName: "INTERPRETATION_Case-Studies.pdf",
    coverImageUrl: "/caseStudy/interpretation-flags-headphones.png",
  },
  {
    id: "transcription-services",
    title: "Transcription Services Case Study",
    subjectLine: "Language Services | Transcription",
    headline: "Audio and Video, Captured in Writing.",
    headlineSub: "Error-Free Documentation Within Deadline.",
    corridor: "Global",
    sector: "Transcription",
    caseStudyGroup: "services",
    summary:
      "Transcription converts audio and visual content into accurate written format. UVAN's oriental language experts transcribe videos, podcasts, and audio files with command over language nuance and deadline discipline.",
    quickFacts: [
      { label: "Formats", value: "Video · podcast · audio transcription" },
      { label: "Strength", value: "Oriental language command for error-free documentation" },
      { label: "Delivery", value: "Written output within agreed timelines" },
      { label: "Use cases", value: "Organizations that rely on readable, flexible records" },
    ],
    situation:
      "Transcription remains essential even as video and audio technologies dominate - many organizations still depend on written records for review, compliance, and flexible anytime, anywhere reading.",
    challenge:
      "Effective transcription requires mastery of the source language and subject matter. Without expert linguists, audio and video content produces errors, omissions, and delays that undermine downstream use.",
    delivered: [
      "Transcribed videos, podcasts, and audio into polished written documents.",
      "Applied oriental language expertise to preserve meaning and terminology accurately.",
      "Delivered within client deadlines across varied content types and sectors.",
      "Supported teams that prefer peaceful reading and archival flexibility over raw media alone.",
    ],
    results: [
      "Clients received error-free transcription outputs aligned to source audio and video.",
      "Documentation was delivered on time for compliance, publishing, and internal review.",
      "UVAN became a dependable transcription partner for multilingual media workflows.",
    ],
    tags: ["Transcription", "Audio", "Video", "Podcast", "Documentation"],
    pdfUrl: "/casestd/TRANSCRIPTION_Case-Studies.pdf",
    pdfFileName: "TRANSCRIPTION_Case-Studies.pdf",
    coverImageUrl: "/caseStudy/transcription-remote.png",
  },
  {
    id: "market-research-services",
    title: "Market Research & On-Call Data Validation Case Study",
    subjectLine: "Market Research | Data Validation",
    headline: "Launch in Asia With Verified Target Lists.",
    headlineSub: "Research Plus Native Call Validation.",
    corridor: "Asia",
    sector: "Market Research",
    caseStudyGroup: "services",
    summary:
      "Launching products in Asia is easier when market research and data validation are handled precisely. UVAN builds target company lists and validates them through native callers who verify data directly with companies.",
    quickFacts: [
      { label: "Scope", value: "Primary market research & on-call data validation" },
      { label: "Method", value: "Native callers verify company lists directly" },
      { label: "Output", value: "Precise export target lists for the Orient" },
      { label: "Delivered", value: "Authentic data sorted alongside research intelligence" },
    ],
    situation:
      "Exporting to Asia requires more than a static company list - clients need research that reflects real market structure and data that holds up under verification before sales teams invest time and travel.",
    challenge:
      "Unverified lists waste outreach budgets. Research alone is not enough without a validation layer that confirms contacts, profiles, and target fit through direct engagement with companies in-market.",
    delivered: [
      "Built precise target company lists aligned to each client's product and corridor.",
      "Validated data through high-end native call validation - speaking directly with companies.",
      "Matched research to company profile and export objectives at every step.",
      "Combined list building and authentication in one coordinated research workflow.",
    ],
    results: [
      "Clients received verified target lists ready for export outreach in Asian markets.",
      "Native validation reduced wasted contact cycles and improved list confidence.",
      "Research and validation together accelerated go-to-market decisions in the Orient.",
    ],
    tags: ["Market Research", "Data Validation", "Asia", "Export", "Target Lists"],
    pdfUrl: "/casestd/PRIMARY-MARKET-RESEARCH_Case-Studies.pdf",
    pdfFileName: "PRIMARY-MARKET-RESEARCH_Case-Studies.pdf",
    coverImageUrl: "/caseStudy/market-research-data.png",
  },
  {
    id: "liaisoning-facilitation-services",
    title: "Liaisoning & Facilitation Case Study",
    subjectLine: "Cross-Border Operations | Liaisoning",
    headline: "One Window for Every Service.",
    headlineSub: "Transparent Communication at the Highest Level.",
    corridor: "India ↔ Asia",
    sector: "Liaisoning & Facilitation",
    caseStudyGroup: "services",
    summary:
      "Business associations fail when culture, work ethic, and communication break down. UVAN builds a bridge between Asian and Indian markets - acting as a single point of contact from assessment through execution.",
    quickFacts: [
      { label: "Role", value: "Single point of contact across business development stages" },
      { label: "Sectors", value: "Chemical · aerospace · manufacturing and more" },
      { label: "Track record", value: "Manufacturing mandates & Chinese Consulate solar project (2018)" },
      { label: "Delivered", value: "Transparent, high-proficiency counterpart communication" },
    ],
    situation:
      "Communication is essential in every professional relationship. Many cross-border businesses fail due to cultural misunderstanding, communication breakdown, and information loss between counterparts who lack a trusted bridge.",
    challenge:
      "Foreign and Indian stakeholders need one accountable partner who can coordinate market assessment, analysis, collaboration, and on-ground execution - breaking work-culture barriers without fragmenting accountability.",
    delivered: [
      "Acted as a single point of contact for manufacturing clients across development and execution.",
      "Enabled the Chinese Consulate in India with a solar power project in May 2018.",
      "Provided transparent communication with counterparts at the highest level of proficiency.",
      "Supported market assessment, analysis, and collaboration across chemical, aerospace, and industrial sectors.",
    ],
    results: [
      "Clients gained one window for liaisoning, facilitation, and coordinated market execution.",
      "Work-culture barriers were reduced through sustained on-ground representation.",
      "Cross-border programs moved forward with clearer communication and fewer information gaps.",
    ],
    tags: ["Liaisoning", "Facilitation", "India", "Asia", "Manufacturing"],
    coverImageUrl: "/caseStudy/liaisoning-facilitation.png",
  },
  {
    id: "procurement-import-export-services",
    title: "Import, Procurement & Export Case Study",
    subjectLine: "Trade Operations | Procurement",
    headline: "Turnkey Supply Chain. Transparent Deals.",
    headlineSub: "No Commission Trail - Direct From Source to Delivery.",
    corridor: "Global",
    sector: "Import · Procurement · Export",
    caseStudyGroup: "services",
    summary:
      "UVAN bridges business worldwide through import, procurement, and export services - from identifying supply chain sources to final delivery, with language communication and documentation handled end to end.",
    quickFacts: [
      { label: "Import", value: "Turnkey supply chain for goods, machines, and knowledge transfer" },
      { label: "Model", value: "No commission - direct manufacturer and provider engagement" },
      { label: "Export", value: "Buyer search · pricing · documentation · shipping · language support" },
      { label: "Sectors", value: "Agricultural commodities to heavy metal machinery" },
    ],
    situation:
      "Businesses expanding across borders need procurement partners who eliminate language barriers, commission opacity, and fragmented logistics - whether importing critical goods or exporting into foreign markets.",
    challenge:
      "Import and export mandates span source identification, negotiation, documentation, shipping, and in-market buyer validation - each step vulnerable to miscommunication, hidden commissions, and supply chain delays.",
    delivered: [
      "Delivered turnkey import solutions from manufacturer identification through final delivery.",
      "Worked directly with manufacturers and service providers with no commission-based model.",
      "Handled export mandates from buyer search and pricing consultation to documentation and shipping.",
      "Integrated market research, on-call validation, and language communication into export workflows.",
    ],
    results: [
      "Clients gained transparent, clean procurement and export operations across the Orient.",
      "Language barriers were removed at every step from sourcing to delivery.",
      "Businesses across agriculture and heavy industry expanded export and import programs with confidence.",
    ],
    tags: ["Procurement", "Import", "Export", "Supply Chain", "Trade"],
    coverImageUrl: "/caseStudy/procurement-import-export.png",
  },
  {
    id: "voiceover-dubbing-services",
    title: "Voiceover & Dubbing Services Case Study",
    subjectLine: "Media Services | Voiceover",
    headline: "The Voice You Hear - The Message They Remember.",
    headlineSub: "Clarity, Emotion, and Accessibility Built In.",
    corridor: "Global",
    sector: "Voiceover & Dubbing",
    caseStudyGroup: "services",
    summary:
      "Voiceover is professional narration that guides viewers through presentations, videos, commercials, and audiobooks. UVAN helps businesses connect with audiences through clarity, emotional tone, and production flexibility.",
    quickFacts: [
      { label: "Formats", value: "Commercial · corporate video · e-learning · audiobook" },
      { label: "Benefits", value: "Clarity · emotional connection · accessibility" },
      { label: "Production", value: "Flexible integration across media formats" },
      { label: "Delivered", value: "Skilled voice talent matched to project vision" },
    ],
    situation:
      "Voiceover enhances media by delivering scripted narration that audiences hear but do not see - shaping how messages land in presentations, marketing films, training content, and accessible media.",
    challenge:
      "Clients need the right voice, script delivery, and production fit to make content clear, emotionally resonant, and accessible - including for audiences with visual impairments or audio-first preferences.",
    delivered: [
      "Delivered well-crafted scripts through skilled voiceover artists for clarity and focus.",
      "Matched voice tone to evoke emotion, build trust, and leave a lasting impression.",
      "Made content accessible to wider audiences including audio-first and accessibility needs.",
      "Integrated voiceover flexibly across commercial, corporate, and educational media formats.",
    ],
    results: [
      "Clients connected more effectively with target audiences through professional narration.",
      "Media projects gained accessibility and production versatility from unified voiceover support.",
      "UVAN helped teams find the right voice talent to bring each creative vision to life.",
    ],
    tags: ["Voiceover", "Dubbing", "Media", "Accessibility", "Narration"],
    pdfUrl: "/casestd/Ewan-Business-solutions-Voiceover-Dubbing-Proposal.pdf",
    pdfFileName: "Ewan-Business-solutions-Voiceover-Dubbing-Proposal.pdf",
    coverImageUrl: "/caseStudy/voiceover-studio.png",
  },
  {
    id: "impetus-interview-support",
    title: "Impetus - Multilingual Interview Support Case Study",
    subjectLine: "HR Services | Impetus",
    headline: "Empowering Multilingual Workforce Solutions.",
    headlineSub: "Clearer Interviews. Better Hiring Decisions.",
    corridor: "Global",
    sector: "Impetus · HR Language Support",
    caseStudyGroup: "services",
    summary:
      "Impetus elevates the interview process with expert language support - improving candidate communication, ensuring smooth interviews, and assessing language proficiency for better hiring outcomes.",
    quickFacts: [
      { label: "Service", value: "Interview language support & proficiency assessment" },
      { label: "Goal", value: "Overcome language barriers in hiring" },
      { label: "Outcome", value: "Inclusive interviews with clearer candidate evaluation" },
      { label: "Delivered", value: "Insight into prospective employees' language skills" },
    ],
    situation:
      "Hiring the best talent requires clear communication throughout the interview process. When candidates and interviewers do not share language fluency, evaluation quality suffers and strong prospects can be missed.",
    challenge:
      "Companies need structured language support during interviews - not ad hoc translation - to foster inclusivity, reduce miscommunication, and produce reliable insight into candidates' language proficiency.",
    delivered: [
      "Provided expert language support to improve communication with candidates.",
      "Ensured smoother interview experiences across multilingual hiring workflows.",
      "Assessed language proficiency as part of structured candidate evaluation.",
      "Helped teams overcome barriers and hire with greater confidence and inclusivity.",
    ],
    results: [
      "Interview processes became more inclusive and communication-clear for multilingual candidates.",
      "HR teams gained actionable insight into language skills before hiring decisions.",
      "Clients improved hiring quality by removing language friction from the interview stage.",
    ],
    tags: ["Impetus", "HR", "Interviews", "Language Assessment", "Workforce"],
    pdfUrl: "/casestd/Impetus-Final-Proposal.pdf",
    pdfFileName: "Impetus-Final-Proposal.pdf",
    coverImageUrl: "/caseStudy/impetus-workforce.png",
  },
  {
    id: "showa-japan",
    title: "SHOWA Gloves Japan - India Market Entry Case Study",
    subjectLine: "Distributor Appointment, Sales Enablement & OEM Sourcing | Japan → India",
    headline: "Projected Three Years to Build an India Channel.",
    headlineSub: "Delivered in Eighteen Months.",
    corridor: "Japan → India",
    sector: "Manufacturing & Industrial Safety",
    caseStudyGroup: "mandates",
    featured: true,
    summary:
      "The client's initial brief was specific: find and appoint a distributor in India capable of selling and supporting their industrial safety-wear range. They had no India presence, no local contacts, and a management team operating entirely from Japan.",
    quickFacts: [
      { label: "Client", value: "Japan-based industrial safety glove manufacturer" },
      { label: "Corridor", value: "Japan → India" },
      { label: "Scope", value: "Distributor appointment, sales enablement & OEM sourcing" },
      { label: "Delivered", value: "Full India channel build in 18 months vs 3-year projection" },
    ],
    situation:
      "The client's initial brief was specific: find and appoint a distributor in India capable of selling and supporting their industrial safety-wear range. They had no India presence, no local contacts, and a management team operating entirely from Japan. Every commercial decision, shortlisting, first contact, and capability screening needed to happen on the ground before they committed to direct engagement. Following the distributor appointment, the client extended the engagement, tasking Ewan with identifying OEM manufacturers across India who could produce gloves under their brand.",
    challenge:
      "India's safety-wear distribution network is geographically dispersed and difficult to assess from outside the country. Appointing a distributor was only the beginning - without embedding product knowledge and sales approach into the distributor's team, the appointment would sit idle. The OEM phase added a separate layer: evaluating manufacturing capability required in-person factory visits across multiple industrial clusters, not a process that could be run from Tokyo.",
    delivered: [
      "Researched and shortlisted distributor candidates across Pune and Mumbai with existing reach into India's industrial safety segment, then managed first-contact outreach and capability screening on the client's behalf before they entered direct conversations.",
      "Facilitated the formal appointment of one distributor in Mumbai to carry and support the client's full product range in the Indian market.",
      "Developed a product positioning and sales guide for the Mumbai distributor - mapping the client's glove range to specific industrial applications and customer segments, and coaching their sales team on pitch approach and client targeting.",
      "Coordinated eight India visits, managing transportation, scheduling, and ground logistics, and facilitated 16 direct meetings between the client's delegates and the distributor's end customers.",
      "Evaluated five OEM glove manufacturers across three Indian states once the scope was extended, built a qualified shortlist, and coordinated the client's factory evaluation tour so every site visit was against a vetted target.",
      "Deployed a dedicated in-house Japanese interpreter with high-context, domain-specific capability across all India-facing work - distributor sales training conducted entirely in Japanese, end-customer meetings, factory visits, and ongoing weekly operational calls - so the client's team could train, evaluate, and close without commercial or technical detail being lost between languages.",
    ],
    results: [
      "One distributor formally appointed in Mumbai - active and operational since 2022.",
      "Five OEM manufacturers evaluated across three Indian states - the client's team conducted a direct factory-level assessment at each site.",
      "Sixteen end-customer meetings facilitated across eight India visits - the client's sales methodology was embedded into their Mumbai distributor's team.",
      "Distributor appointment, OEM evaluation, and sales enablement delivered in 18 months - against the client's internal projection of three years.",
    ],
    quote: {
      text: "We expected this result at the end of three years. Ewan made it happen in one and a half. Their on-ground presence made it possible.",
      attribution: "Japan-based Industrial Safety Glove Manufacturer",
    },
    tags: ["Industrial Safety", "Manufacturing", "Japan → India", "Distributor Appointment", "OEM Sourcing", "Market Entry"],
    pdfUrl: "/caseStudy/SHOWA%20Case%20Study.pdf",
    pdfFileName: "SHOWA Case Study.pdf",
    coverImageUrl: "/page-assets/Building-Strong-International-Ties-Header-img-V2.jpg",
  },
  {
    id: "airattix",
    title: "Airattix - Japan Investor Outreach Case Study",
    headline: "Mandated to Book Two Investor Meetings in Japan.",
    headlineSub: "Delivered Six - Three Now in Active Discussion.",
    corridor: "India → Japan",
    sector: "Smart Storage & PropTech",
    caseStudyGroup: "mandates",
    summary:
      "A pioneering smart storage platform came to Ewan with no Japan network and a specific brief: connect with two strategic investors from the storage sector. Ewan engaged six senior players, all major names within Japan's storage industry, and three are now in active dialogue.",
    quickFacts: [
      {
        label: "Client",
        value:
          "Marketplace-Driven Smart Storage Solutions Provider. Smart storage and space optimization systems for residential and commercial clients.",
      },
      {
        label: "Corridor & Scope",
        value:
          "India → Japan. Investor outreach & facilitation - identifying and connecting with strategic investors from within Japan's storage industry.",
      },
      {
        label: "Delivered",
        value:
          "Six investor meetings delivered against a mandate of two. Three are now in active investment discussions. 100% of introductions from Japan's storage sector - major industry players, no generalist contacts.",
      },
    ],
    situation:
      "The client is an innovative Indian company building smart storage and space optimization systems for residential and commercial clients. With a highly differentiated product and clear international ambitions, the company identified Japan as a high-priority market for strategic investment. They had no existing investor network in Japan and needed a trusted partner to run the full outreach process on their behalf.",
    challenge:
      "Japan's investment community does not engage with cold outreach. Deep relationship credibility, nuanced localized communication, and sharp sectoral fluency are prerequisites before any productive dialogue begins. The mandate was specific: identify and connect the client with well-aligned investors from within Japan's storage industry - not generalist funds, but senior decision-makers at organizations whose mandates genuinely aligned with smart storage and space optimization.",
    delivered: [
      "Researched the Japanese storage investment landscape using native Japanese business intelligence sources and sector-specific networks.",
      "Identified and screened investor profiles within Japan's storage industry, filtering for precise strategic alignment and stage fit with the client.",
      "Conducted all direct outreach in Japanese, introducing the client's compelling proposition to senior stakeholders at major storage organizations.",
      "Coordinated and scheduled focused pitch meetings between the client's leadership and interested parties.",
      "Managed follow-up communication and meeting facilitation through the full engagement cycle.",
    ],
    results: [
      "Six high-level investor meetings delivered - against a mandate of two.",
      "Three of the six engagements converted into active investment discussions, with talks currently underway.",
      "100% of the introductions came from within Japan's storage sector - major industry players, with no generalist contacts.",
    ],
    quote: {
      text: "We came in expecting two conversations. Ewan got us six, and three are still active.",
      attribution: "Marketplace-Driven Smart Storage Solutions Provider, India",
    },
    tags: [
      "Smart Storage",
      "Space Optimization",
      "Investor Outreach",
      "Cross-Border Fundraising",
      "Japan Market",
      "India → Japan",
      "Business Facilitation",
    ],
    pdfUrl: "/caseStudy/Airattix%20Case%20study.pdf",
    pdfFileName: "Airattix Case study.pdf",
  },
  {
    id: "satellite",
    title: "Satellite - US Market Entry into Singapore Case Study",
    headline: "Singapore Has No Distributor Channel.",
    headlineSub: "We Found That Out Before Our Client's First Visit.",
    corridor: "US → Singapore + Malaysia",
    sector: "Portable Sanitation | Industrial Equipment",
    caseStudyGroup: "mandates",
    summary:
      "A US manufacturer entering Singapore needed one local partner. The route they assumed existed, didn't. Ewan found the real one, and delivered four qualified partners, a clear competitive picture, and a logistics setup before the client landed.",
    quickFacts: [
      { label: "Client", value: "Global sanitation equipment manufacturer" },
      { label: "Corridor", value: "US → Singapore + Malaysia" },
      { label: "Asked For", value: "One qualified local partner" },
      { label: "Delivered", value: "Four partners across four market roles" },
      { label: "Work", value: "Partner search, market research, competitor analysis, logistics" },
    ],
    quickFactsTagline: "From one partner request to four qualified matches across four market roles.",
    situation:
      "A global-scale US portable sanitation manufacturer needed to enter Singapore. They assumed a traditional distributor channel existed and planned to find one local partner to handle sales, service, and logistics.",
    challenge:
      "Singapore has no distributor channel for this category. The market structure the client assumed simply doesn't exist. Without this intelligence, the client would have arrived with no viable path to market and no qualified partners to meet.",
    deliveredIntro:
      "A structured, intelligence-led approach, from first contact to a fully coordinated two-day Singapore visit with four qualified partners ready to meet the client.",
    delivered: [
      "Contacted 23 companies across Singapore and the region.",
      "Two in-depth consultations with veterans with 26 and 20+ years' experience.",
      "Shifted from distributor search to a local sales representative model.",
      "Mapped Chinese brands' gaps: no local support, no spare parts and two-week delivery.",
      "Found a Malaysia logistics partner offering 1–2 day delivery with credit terms.",
      "Recommended premium Trailer Toilets - no strong Chinese competitor in this segment.",
      "Identified four qualified partners across four distinct market roles.",
      "All four partners met the client during a seamless two-day Singapore visit.",
    ],
    results: [],
    resultGroups: [
      {
        title: "01 - Partners & Visit",
        items: [
          "Four qualified partners were found; the original ask was one. The client met all four during a seamless two-day Singapore visit.",
          "An exclusive sales representative was identified with 26 years in the market and zero competing brands.",
        ],
      },
      {
        title: "02 - Market Position",
        items: [
          "The client is on track to become the first Western brand with spare parts stocked locally in Singapore.",
          "A strategic Malaysia logistics partner was engaged, offering 1–2 day delivery and credit terms - unmatched by Chinese competitors.",
        ],
      },
      {
        title: "03 - Strategic Insight",
        items: [
          "A granular competitive picture was delivered.",
          "Singapore and Malaysia were reframed as one unified market.",
          "The first container shipment is targeting July 2026.",
        ],
      },
    ],
    quote: {
      text: "We went into Singapore assuming a distributor network existed. Ewan told us it didn't, and delivered four qualified alternatives before we landed. The market intelligence changed how we're thinking about the entire region.",
      attribution: "Asia Pacific Head, Regional Expansion Team",
    },
    tags: [
      "Portable Sanitation",
      "Industrial Equipment",
      "Singapore",
      "Malaysia",
      "Market Entry",
      "Distribution",
      "US → ASEAN",
    ],
    pdfUrl: "/caseStudy/Satellite%20Case%20study.pdf",
    pdfFileName: "Satellite Case study.pdf",
  },
  {
    id: "corneal-blindness-china",
    title: "Corneal Blindness in China - Market Research Case Study",
    subjectLine: "Healthcare Data Points | China Market Research",
    headline: "No Central Statistics. Data Scattered Across China.",
    headlineSub: "UVAN Delivered Precise Corneal Blindness Data On Time.",
    corridor: "China",
    sector: "Healthcare & Market Research",
    caseStudyGroup: "mandates",
    summary:
      "Conducting market research on corneal blindness data points in China required meticulous collection across fragmented sources. UVAN avoided duplication, unified the findings, and delivered precise metrics within the timeline for informed decision-making.",
    quickFacts: [
      { label: "Client", value: "Healthcare / ophthalmology market research mandate" },
      { label: "Corridor", value: "China" },
      { label: "Scope", value: "Corneal blindness prevalence & related data point research" },
      {
        label: "Delivered",
        value: "Precise, deduplicated data in uniform format within the agreed timeline",
      },
    ],
    situation:
      "Corneal blindness affects populations worldwide, and the client needed specific data points on its prevalence in China - including total patient numbers and prevalence as a percentage of the population. These metrics were essential for the client's next phase of market planning in the ophthalmology corridor.",
    challenge:
      "There is no single official statistics source that provides exact figures for every requested data point. Available information is scattered across websites, reports, and regional sources, making it difficult to navigate without duplicating or contradicting findings.",
    delivered: [
      "Assembled a dedicated research team with clear ownership of each data point.",
      "Implemented deduplication checks so overlapping sources did not inflate or repeat findings.",
      "Collected intelligence through calls in China and verified website and published sources.",
      "Merged all findings into a collective file with uniform formatting and alignment.",
      "Translated graphs and images attached to each data point for consistent client review.",
    ],
    results: [
      "The client received precise information on every requested corneal blindness data point.",
      "Deliverables were formatted consistently and delivered within the agreed timeline.",
      "The research cleared the path for the client's next goal in their corneal blindness market program.",
    ],
    tags: [
      "Market Research",
      "Healthcare",
      "Ophthalmology",
      "China",
      "Data Collection",
      "Translation",
    ],
    coverImageUrl: "/caseStudy/corneal-blindness-china-market-research.png",
  },
  {
    id: "translation-of-memorandum-of-agreement-to-the-lease-of-land-and-buildings",
    title: "Memorandum of Agreement - Lease of Land & Buildings Translation Case Study",
    subjectLine: "Legal Translation | Real Estate & Chinese Law",
    headline: "A Critical Lease Agreement. No Room for Translation Error.",
    headlineSub: "UVAN Delivered Domain-Expert Legal Translation On Time.",
    corridor: "China",
    sector: "Legal & Real Estate Translation",
    caseStudyGroup: "mandates",
    summary:
      "Translating a Memorandum of Agreement for the lease of land and buildings demanded domain expertise in Chinese law and real estate terminology. UVAN assigned a specialist translator, cross-checked with a second expert, and delivered an accurate document within a tight timeline.",
    quickFacts: [
      { label: "Client", value: "Real estate / legal translation mandate" },
      { label: "Corridor", value: "China" },
      { label: "Scope", value: "MOA translation for lease of land and buildings" },
      {
        label: "Delivered",
        value: "Accurate, law-oriented translation within the agreed timeline",
      },
    ],
    situation:
      "The client required translation of a Memorandum of Agreement governing the lease of land and buildings - a powerful, high-stakes document where precision in legal and property terminology directly affects commercial outcomes and compliance.",
    challenge:
      "The Memorandum of Agreement requires delicate handling in translation. Only translators who understand the document's structure and nuances can execute it effectively. The core challenge was finding a domain expert with strong command of Chinese law and its specialized terms - not a generalist linguist.",
    delivered: [
      "Assigned a domain-specific translator experienced in real estate and legal agreement work.",
      "Maintained tight project controls to deliver the translated document on time and in the required format.",
      "Cross-checked the final document with a second domain expert to eliminate accuracy gaps in this critical file.",
      "Applied law-oriented terminology and localization appropriate to the target document and jurisdiction.",
    ],
    results: [
      "The client received the translated Memorandum of Agreement on time with accurate legal terminology throughout.",
      "Localization and use of exact law-oriented terms in the target document were appreciated by the client.",
      "Timeline adherence allowed the client to proceed with their next step without delay.",
    ],
    tags: [
      "Legal Translation",
      "Real Estate",
      "Memorandum of Agreement",
      "China",
      "Chinese Law",
      "Certified Translation",
    ],
    coverImageUrl: "/caseStudy/memorandum-lease-agreement-translation.png",
  },
];

export const serviceCaseStudies = caseStudyCatalog.filter((study) => study.caseStudyGroup === "services");

export const mandateCaseStudies = caseStudyCatalog.filter((study) => study.caseStudyGroup !== "services");

export const getCaseStudyById = (id: string) => caseStudyCatalog.find((study) => study.id === id);

export const getAdjacentCaseStudies = (id: string) => {
  const index = caseStudyCatalog.findIndex((study) => study.id === id);
  if (index === -1) return { prev: null, next: null };

  const prev = caseStudyCatalog[(index - 1 + caseStudyCatalog.length) % caseStudyCatalog.length];
  const next = caseStudyCatalog[(index + 1) % caseStudyCatalog.length];

  return { prev, next };
};

export const featuredCaseStudy = caseStudyCatalog.find((entry) => entry.featured) ?? caseStudyCatalog[0];

/** PowerPoint slide aspect ratio (16:9) - height / width */
export const CASE_STUDY_PDF_ASPECT = 9 / 16;

/** Card/listing excerpt - uses the official summary line from each deck */
export const getCaseStudyExcerpt = (study: CaseStudyEntry) =>
  study.quickFactsTagline ?? study.summary;

/** Full headline for display */
export const getCaseStudyFullHeadline = (study: CaseStudyEntry) =>
  study.headlineSub ? `${study.headline} ${study.headlineSub}` : study.headline;
