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

/** Single source of truth for Insights listing cards — must match each article detail page. */
export const INSIGHTS_ARTICLES_CATALOG: InsightsArticleCatalogEntry[] = [
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
