export type InsightsArticleCategory = "Market Entry" | "Language" | "Career" | "Insights";

export type InsightsArticleCatalogEntry = {
  slug: string;
  tag: string;
  category: InsightsArticleCategory;
  date: string;
  title: string;
  copy: string;
  image: string;
};

/** Single source of truth for Insights listing cards - must match each article detail page. */
export const INSIGHTS_ARTICLES_CATALOG: InsightsArticleCatalogEntry[] = [
  {
    slug: "market-entry-guide-india",
    tag: "Market Entry",
    category: "Market Entry",
    date: "Jan 15, 2026",
    title: "How to Expand Your Business into India: A Complete Market Entry Guide",
    copy: "A step-by-step guide to entity setup, compliance, localization, and on-ground execution for foreign companies entering India.",
    image: "/stitch/insights/article-asian-market.jpg",
  },
  {
    slug: "challenges-foreign-companies-india",
    tag: "Market Entry",
    category: "Market Entry",
    date: "Feb 01, 2026",
    title: "Top 10 Challenges Foreign Companies Face When Entering the Indian Market",
    copy: "The most common operational and cultural hurdles - and practical strategies to overcome each one.",
    image: "/stitch/insights/gazette-market-insight.jpg",
  },
  {
    slug: "india-entity-structure-liaison-branch-subsidiary",
    tag: "Market Entry",
    category: "Market Entry",
    date: "Feb 10, 2026",
    title: "Liaison Office vs Branch Office vs Subsidiary in India",
    copy: "Compare control, permitted activities, tax, and liability to choose the right India entity structure.",
    image: "/stitch/insights/insight-asset-05.jpg",
  },
  {
    slug: "best-countries-market-entry-2026",
    tag: "Market Entry",
    category: "Market Entry",
    date: "Mar 10, 2026",
    title: "Best Countries for Market Entry in 2026: A Comparative Guide",
    copy: "Compare India, UAE, Singapore, Southeast Asia, and the UK across market size, ease of entry, and localization needs.",
    image: "/stitch/insights/insight-asset-17.jpg",
  },
  {
    slug: "certified-translation-services-legal-requirements",
    tag: "Language",
    category: "Language",
    date: "Feb 18, 2026",
    title: "Certified Translation Services: When Do You Legally Need Them?",
    copy: "Learn when certified translations are legally required for business, immigration, and legal documents.",
    image: "/stitch/insights/article-strategy.jpg",
  },
  {
    slug: "localization-vs-translation-difference",
    tag: "Language",
    category: "Language",
    date: "Mar 01, 2026",
    title: "Localization vs. Translation: What's the Difference?",
    copy: "Translation makes content readable; localization makes it resonate. Know when you need each.",
    image: "/stitch/insights/article-interpretation.jpg",
  },
  {
    slug: "ewan-to-uvan-rebrand",
    tag: "Insights",
    category: "Insights",
    date: "Jul 25, 2026",
    title: "Ewan Business Solutions is Now Uvan International Liaisoning Private Limited",
    copy: "After five years of building alongside our clients, we announce a new chapter - same team and standards, with a name that reflects who we have become.",
    image: "/stitch/insights/article-uvan-rebrand.jpg",
  },
  {
    slug: "how-to-enter-indian-market",
    tag: "Market Entry",
    category: "Market Entry",
    date: "Sept 02, 2024",
    title: "How to Enter the Indian Market as a Foreign Company",
    copy: "A step-by-step guide to readiness, roadmap, execution, and on-ground support - without fragmenting regulatory, language, and commercial ownership.",
    image: "/stitch/insights/article-asian-market.jpg",
  },
  {
    slug: "what-is-simultaneous-interpretation",
    tag: "Language",
    category: "Language",
    date: "Aug 21, 2024",
    title: "What Is Simultaneous Interpretation?",
    copy: "When live interpretation matters, how simultaneous differs from consecutive mode, and what to specify before high-stakes meetings.",
    image: "/stitch/insights/article-interpretation.jpg",
  },
  {
    slug: "how-to-choose-translation-partner-india",
    tag: "Language",
    category: "Language",
    date: "Sept 02, 2024",
    title: "How to Choose a Translation Partner in India",
    copy: "Scope, quality governance, sector terminology, and SLAs - five practical steps before you outsource critical content.",
    image: "/stitch/insights/article-strategy.jpg",
  },
  {
    slug: "career-in-asian-languages-india",
    tag: "Career",
    category: "Career",
    date: "Sept 15, 2024",
    title: "Is a career in Asian languages worth it in India?",
    copy: "Beyond translation desks - how to build a strategic language consultancy career in cross-border business.",
    image: "/stitch/insights/article-career-guide.jpg",
  },
];

export function insightsArticlePath(slug: string): string {
  return `/insights/${slug}`;
}

export function findInsightsArticle(slug: string): InsightsArticleCatalogEntry | undefined {
  return INSIGHTS_ARTICLES_CATALOG.find((article) => article.slug === slug);
}
