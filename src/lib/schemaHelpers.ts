import type { AeoFaqItem } from "@/data/aeoContent";
import {
  COMPANY_ALTERNATE_NAME,
  COMPANY_DESCRIPTION,
  COMPANY_EMAIL,
  COMPANY_LEGAL_NAME,
  COMPANY_PHONE,
  COMPANY_SCHEMA_STREET_ADDRESS,
  ORGANIZATION_SAME_AS,
  SITE_LOGO,
  SITE_URL,
  SOHAM_LINKEDIN,
  SUKHADA_LINKEDIN,
} from "@/lib/site";

export type JsonLdObject = Record<string, unknown>;

/** Core Organization node referenced from other schema (AEO + NAP). */
export const organizationNode: JsonLdObject = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "UVAN",
  legalName: COMPANY_LEGAL_NAME,
  alternateName: COMPANY_ALTERNATE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}${SITE_LOGO}`,
  foundingDate: "2020",
  description: COMPANY_DESCRIPTION,
  email: COMPANY_EMAIL,
  telephone: COMPANY_PHONE,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411004",
    addressCountry: "IN",
    streetAddress: COMPANY_SCHEMA_STREET_ADDRESS,
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "ISO 9001:2015 Certification",
  },
  sameAs: [...ORGANIZATION_SAME_AS],
};

export function absoluteUrl(canonicalPath: string): string {
  const path = canonicalPath === "/" ? "/" : canonicalPath.endsWith("/") ? canonicalPath : `${canonicalPath}/`;
  if (path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function webSiteWithSearchAction(): JsonLdObject {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "UVAN",
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/insights/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function faqPageSchema(pageUrl: string, items: AeoFaqItem[]): JsonLdObject {
  return {
    "@type": "FAQPage",
    url: pageUrl,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  pageUrl: string,
  crumbs: { name: string; path: string }[],
): JsonLdObject {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

/** Service anchored to canonical path */
export function serviceSchema(opts: {
  name: string;
  description: string;
  canonicalPath: string;
  serviceType?: string;
  areaServed?: string[];
}): JsonLdObject {
  const pageUrl = absoluteUrl(opts.canonicalPath.replace(/^\//, "") ? opts.canonicalPath : `/${opts.canonicalPath}`);
  return {
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: pageUrl,
    provider: { "@id": `${SITE_URL}/#organization` },
    ...(opts.serviceType ? { serviceType: opts.serviceType } : {}),
    ...(opts.areaServed ? { areaServed: opts.areaServed } : {}),
  };
}

export function speakableWebPage(canonicalUrl: string, cssSelector: string[]): JsonLdObject {
  return {
    "@type": "WebPage",
    url: canonicalUrl,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector,
    },
  };
}

export function personSoham(): JsonLdObject {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/#person-soham-kakade`,
    name: "Soham Kakade",
    jobTitle: "Founder & CEO",
    description:
      "Soham Kakade is the founder and CEO of UVAN (formerly Ewan Business Solutions). He has over 60,000 hours of simultaneous interpretation experience across Mandarin, Cantonese, Japanese, and ASEAN languages, was a Chinese Government scholarship recipient at Beijing Language and Culture University, and serves as Vice President of CITLoB.",
    worksFor: { "@id": `${SITE_URL}/#organization` },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Beijing Language and Culture University",
    },
    memberOf: {
      "@type": "Organization",
      name: "Confederation of Indian Translators and Language Professionals",
      alternateName: "CITLoB",
    },
    sameAs: [SOHAM_LINKEDIN],
  };
}

export function personSukhada(): JsonLdObject {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/#person-sukhada-kakade-bhalerao`,
    name: "CMA Sukhada Kakade Bhalerao",
    jobTitle: "Co-Founder & Director",
    description:
      "CMA Sukhada Kakade Bhalerao is co-founder and director of UVAN, with over 15 years of experience in finance, auditing, RBI/FEMA compliance, and entity setup. She also co-founded Bhashik Skill Development.",
    worksFor: { "@id": `${SITE_URL}/#organization` },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Certified Management Accountant",
    },
    sameAs: [SUKHADA_LINKEDIN, "https://bhashikskill.co.in"],
  };
}

export function personSchema(name: string): JsonLdObject {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/#person-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`,
    name,
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  canonicalPath: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
}): JsonLdObject {
  const url = absoluteUrl(opts.canonicalPath);
  const author = opts.authorName
    ? { "@id": `${SITE_URL}/#person-${opts.authorName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}` }
    : { "@id": `${SITE_URL}/#person-soham-kakade` };
  return {
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    url,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function howToSchema(opts: { name: string; description: string; steps: string[] }): JsonLdObject {
  return {
    "@type": "HowTo",
    name: opts.name,
    description: opts.description,
    step: opts.steps.map((text, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      text,
    })),
  };
}

export function webPageWithLeadAction(pageUrl: string): JsonLdObject {
  return {
    "@type": "WebPage",
    url: pageUrl,
    potentialAction: [
      {
        "@type": "LeadAction",
        name: "Download the 2026 Global Market Entry Audit",
        target: pageUrl,
      },
    ],
  };
}

export function collectionPageSchema(name: string, description: string, url: string): JsonLdObject {
  return {
    "@type": "CollectionPage",
    name,
    description,
    url,
  };
}

export function itemListFromTitles(titles: string[], pageUrl: string): JsonLdObject {
  return {
    "@type": "ItemList",
    itemListElement: titles.map((name, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      url: pageUrl,
    })),
  };
}
