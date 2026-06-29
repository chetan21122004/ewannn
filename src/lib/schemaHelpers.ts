import type { AeoFaqItem } from "@/data/aeoContent";
import { COMPANY_LINKEDIN, SITE_LOGO, SITE_URL, SOHAM_LINKEDIN } from "@/lib/site";

export type JsonLdObject = Record<string, unknown>;

/** Core Organization node referenced from other schema (AEO verbatim fields). */
export const organizationNode: JsonLdObject = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "UVAN",
  url: SITE_URL,
  logo: `${SITE_URL}${SITE_LOGO}`,
  foundingDate: "2020",
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
}): JsonLdObject {
  const pageUrl = absoluteUrl(opts.canonicalPath.replace(/^\//, "") ? opts.canonicalPath : `/${opts.canonicalPath}`);
  return {
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: pageUrl,
    provider: { "@id": `${SITE_URL}/#organization` },
    ...(opts.serviceType ? { serviceType: opts.serviceType } : {}),
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
    worksFor: { "@id": `${SITE_URL}/#organization` },
    sameAs: [SOHAM_LINKEDIN],
  };
}

export function personSukhada(): JsonLdObject {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/#person-sukhada-kakade-bhalerao`,
    name: "CMA Sukhada Kakade Bhalerao",
    jobTitle: "Co-Founder & Director",
    worksFor: { "@id": `${SITE_URL}/#organization` },
    sameAs: [COMPANY_LINKEDIN],
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
