export type GazetteArticle = {
  slug: string;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  author: string;
  image: string;
  datePublished: string;
};

export type GazetteIssue = {
  slug: string;
  label: string;
  shortLabel: string;
  path: string;
  coverImage: string;
  published: string;
  description: string;
  articles: GazetteArticle[];
};

const apr25ArticlesList: GazetteArticle[] = [
  {
    slug: "when-sadness-gave-me-joy",
    category: "Poetry",
    readTime: "3 min read",
    title: "When sadness gave me joy",
    excerpt:
      "Shiv Kumar Batalvi's soft, sad melody drifts in from the attic - and frees the tears that melt the black ice around the heart.",
    author: "Armaan",
    image: "/stitch/language-gazette/article-cultural-iq.jpg",
    datePublished: "2025-04-01",
  },
  {
    slug: "mother-tongue-greatest-comfort",
    category: "Culture",
    readTime: "6 min read",
    title: "The Language of the Heart: Why Our Mother Tongue is Our Greatest Comfort",
    excerpt:
      "Gujarati is not just a collection of words - it is a sanctuary where I feel most like myself.",
    author: "UVAN Contributor",
    image: "/stitch/language-gazette/article-market-entry.jpg",
    datePublished: "2025-04-01",
  },
  {
    slug: "be-brave-you-women",
    category: "Essay",
    readTime: "8 min read",
    title: "Be Brave, You Women",
    excerpt:
      "By Meera Kathija - on strength, silence, and the invisible cages women navigate every day.",
    author: "Meera Kathija",
    image: "/stitch/language-gazette/article-operations.jpg",
    datePublished: "2025-04-01",
  },
];

export const latestGazetteIssue: GazetteIssue = {
  slug: "apr-25",
  label: "April 2025",
  shortLabel: "Apr 2025",
  path: "/language-gazette/apr-25/",
  coverImage: "/stitch/language-gazette/hero-cover.jpg",
  published: "2025-04-01",
  description:
    "Poetry, personal essays, and reflections on mother tongue, identity, and courage - published as fully readable web articles.",
  articles: apr25ArticlesList,
};

export const apr25Articles = latestGazetteIssue.articles;

// TODO: per-article PDF/export download

export const gazetteIssuePath = (slug: string) => `/language-gazette/${slug}` as const;
export const gazetteIssueCanonical = (slug: string) => `/language-gazette/${slug}/` as const;
export const gazetteArticlePath = (slug: string) => `/language-gazette/${slug}` as const;
export const gazetteArticleCanonical = (slug: string) => `/language-gazette/${slug}/` as const;

/** Step 2 / Step 4 — keyword-mapped articles published as web pages (insights + gazette). */
export const gazetteKeywordCatalog = [
  {
    title: "Why Japanese companies struggle entering India — and what to do differently",
    targetKeyword: "Japanese company India market entry",
    href: "/insights/how-to-enter-indian-market",
    source: "Insights",
  },
  {
    title: "Simultaneous interpretation vs consecutive — which does your event need?",
    targetKeyword: "simultaneous interpretation India",
    href: "/insights/what-is-simultaneous-interpretation",
    source: "Insights",
  },
  {
    title: "India-Vietnam trade corridor: what businesses need to know in 2026",
    targetKeyword: "India Vietnam trade expansion",
    href: "/insights/how-to-enter-indian-market",
    source: "Insights",
  },
  {
    title: "Is a career in Asian languages worth it in India? An honest guide",
    targetKeyword: "Mandarin career opportunities India",
    href: "/insights",
    source: "Insights",
  },
  {
    title: "How to choose a translation partner — what most buyers get wrong",
    targetKeyword: "translation partner India",
    href: "/insights/how-to-choose-translation-partner-india",
    source: "Insights",
  },
  {
    title: "The Language of the Heart: Why Our Mother Tongue is Our Greatest Comfort",
    targetKeyword: "mother tongue language India business",
    href: "/language-gazette/mother-tongue-greatest-comfort",
    source: "The Language Gazette",
  },
] as const;

export type GazetteWebArticle = {
  month: string;
  title: string;
  href: string;
  category: string;
  excerpt: string;
  image: string;
  readTime: string;
};

/** Monthly 2026 web articles for the Language Gazette landing slider. */
export const gazette2026Articles: GazetteWebArticle[] = [
  {
    month: "January 2026",
    title: "How to Enter the Indian Market as a Foreign Company",
    href: "/insights/how-to-enter-indian-market",
    category: "Market Entry",
    excerpt: "Structured India market entry — readiness, roadmap, execution, and ongoing on-ground support.",
    image: "/stitch/insights/article-asian-market.jpg",
    readTime: "8 min read",
  },
  {
    month: "February 2026",
    title: "How to Choose a Translation Partner in India",
    href: "/insights/how-to-choose-translation-partner-india",
    category: "Language",
    excerpt: "Five practical steps for buyers evaluating translation, localization, and interpretation partners.",
    image: "/stitch/insights/article-strategy.jpg",
    readTime: "7 min read",
  },
  {
    month: "March 2026",
    title: "What Is Simultaneous Interpretation?",
    href: "/insights/what-is-simultaneous-interpretation",
    category: "Language",
    excerpt: "When live interpretation matters, how it works, and what to specify before high-stakes meetings.",
    image: "/stitch/insights/article-interpretation.jpg",
    readTime: "6 min read",
  },
  {
    month: "April 2026",
    title: "Why Japanese companies struggle entering India — and what to do differently",
    href: "/insights/how-to-enter-indian-market",
    category: "Market Entry",
    excerpt: "Common gaps in distributor integrity, regulatory sequencing, and on-ground coordination.",
    image: "/stitch/insights/gazette-market-insight.jpg",
    readTime: "9 min read",
  },
  {
    month: "May 2026",
    title: "Simultaneous interpretation vs consecutive — which does your event need?",
    href: "/insights/what-is-simultaneous-interpretation",
    category: "Language",
    excerpt: "A technical breakdown of interpretation modes for board meetings, conferences, and factory visits.",
    image: "/stitch/insights/article-interpretation-type.jpg",
    readTime: "5 min read",
  },
  {
    month: "June 2026",
    title: "India-Vietnam trade corridor: what businesses need to know in 2026",
    href: "/insights/how-to-enter-indian-market",
    category: "Trade",
    excerpt: "Logistics, language, and operational intelligence for the India–Southeast Asia expansion corridor.",
    image: "/stitch/insights/insight-asset-01.jpg",
    readTime: "7 min read",
  },
];

export const GAZETTE_LANDING_KEYWORDS =
  "language gazette India, language industry publication, cross-border business insights India";

/** Fallback cover when issue-specific art is not yet in public/ */
export const gazetteCoverFallback = "/stitch/language-gazette/hero-cover-fallback.svg";
