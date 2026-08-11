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

export type CaseStudyEntry = {
  id: string;
  title: string;
  headline: string;
  headlineSub?: string;
  subjectLine?: string;
  summary: string;
  corridor: string;
  sector?: string;
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
  pdfUrl: string;
  pdfFileName: string;
  coverImageUrl?: string;
};

export const caseStudyCatalog: CaseStudyEntry[] = [
  {
    id: "showa-japan",
    title: "SHOWA Gloves Japan - India Market Entry Case Study",
    subjectLine: "Distributor Appointment, Sales Enablement & OEM Sourcing | Japan → India",
    headline: "Projected Three Years to Build an India Channel.",
    headlineSub: "Delivered in Eighteen Months.",
    corridor: "Japan → India",
    sector: "Manufacturing & Industrial Safety",
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
];

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
