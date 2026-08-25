import enCommon from "../locales/en/common";

export type SeoPageEntry = {
  path: string;
  title: string;
  description: string;
  keywords?: string;
};

type SeoKey =
  | "homepage"
  | "about"
  | "marketEntry"
  | "liaisoning"
  | "importExport"
  | "marketResearch"
  | "languageLocalization"
  | "globalTalkies"
  | "industries"
  | "caseStudy"
  | "contact"
  | "insights"
  | "languageGazette"
  | "newsletter"
  | "videos"
  | "joinUs"
  | "askSoham"
  | "marketEntryAudit";

const SEO_ROUTE_KEYS: { path: string; key: SeoKey }[] = [
  { path: "/", key: "homepage" },
  { path: "/about-us", key: "about" },
  { path: "/market-entry", key: "marketEntry" },
  { path: "/liaisoning-facilitation", key: "liaisoning" },
  { path: "/import-export", key: "importExport" },
  { path: "/market-research", key: "marketResearch" },
  { path: "/language-localization", key: "languageLocalization" },
  { path: "/global-talkies", key: "globalTalkies" },
  { path: "/industries", key: "industries" },
  { path: "/case-study", key: "caseStudy" },
  { path: "/contact", key: "contact" },
  { path: "/insights", key: "insights" },
  { path: "/language-gazette", key: "languageGazette" },
  { path: "/newsletter", key: "newsletter" },
  { path: "/videos", key: "videos" },
  { path: "/join-us", key: "joinUs" },
  { path: "/ask-soham", key: "askSoham" },
  { path: "/market-entry-audit", key: "marketEntryAudit" },
];

function toSeoPageEntry({ path, key }: { path: string; key: SeoKey }): SeoPageEntry {
  const meta = enCommon.seo[key];
  return {
    path,
    title: meta.title,
    description: meta.description,
    ...("keywords" in meta && meta.keywords ? { keywords: meta.keywords } : {}),
  };
}

/** Static SEO manifest for indexed marketing pages (English). Used at build time. */
export const SEO_STATIC_PAGES: SeoPageEntry[] = [
  ...SEO_ROUTE_KEYS.map(toSeoPageEntry),
  {
    path: "/privacy-policy",
    title: "Privacy Policy | UVAN",
    description:
      "Read UVAN's privacy policy to understand how we collect, use, and protect your personal data across our website and services.",
  },
];
