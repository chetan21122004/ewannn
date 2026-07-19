import {
  gazette2026AprilArticles,
  gazette2026Catalog,
  type Gazette2026Article,
} from "@/data/gazette2026Catalog";

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

/** Step 2 / Step 4 - keyword-mapped articles published as web pages (insights + gazette). */
export type GazetteKeywordArticle = {
  title: string;
  targetKeyword: string;
  href: string;
  source: string;
  category: string;
  excerpt: string;
  image: string;
  readTime: string;
};

export const gazetteKeywordCatalog: GazetteKeywordArticle[] = [
  {
    title: "Why Japanese companies struggle entering India - and what to do differently",
    targetKeyword: "Japanese company India market entry",
    href: "/insights/how-to-enter-indian-market",
    source: "Insights",
    category: "Market Entry",
    excerpt: "Distributor integrity, regulatory sequencing, and coordination gaps that stall Japan-India expansion.",
    image: "/stitch/insights/gazette-market-insight.jpg",
    readTime: "9 min read",
  },
  {
    title: "Simultaneous interpretation vs consecutive - which does your event need?",
    targetKeyword: "simultaneous interpretation India",
    href: "/insights/what-is-simultaneous-interpretation",
    source: "Insights",
    category: "Language",
    excerpt: "Compare interpretation modes for board meetings, conferences, factory visits, and investor roadshows.",
    image: "/stitch/insights/article-interpretation-type.jpg",
    readTime: "5 min read",
  },
  {
    title: "India-Vietnam trade corridor: what businesses need to know in 2026",
    targetKeyword: "India Vietnam trade expansion",
    href: "/insights/how-to-enter-indian-market",
    source: "Insights",
    category: "Trade",
    excerpt: "Logistics infrastructure, language layers, and operational intelligence for the India-ASEAN corridor.",
    image: "/stitch/insights/insight-asset-01.jpg",
    readTime: "7 min read",
  },
  {
    title: "Is a career in Asian languages worth it in India? An honest guide",
    targetKeyword: "Mandarin career opportunities India",
    href: "/insights",
    source: "Insights",
    category: "Career",
    excerpt: "Beyond translation desks - building a strategic language consultancy career in cross-border business.",
    image: "/stitch/insights/article-career-guide.jpg",
    readTime: "8 min read",
  },
  {
    title: "How to choose a translation partner - what most buyers get wrong",
    targetKeyword: "translation partner India",
    href: "/insights/how-to-choose-translation-partner-india",
    source: "Insights",
    category: "Language",
    excerpt: "Scope, quality governance, sector terminology, and SLAs - before you outsource critical content.",
    image: "/stitch/insights/article-strategy.jpg",
    readTime: "7 min read",
  },
  {
    title: "The Language of the Heart: Why Our Mother Tongue is Our Greatest Comfort",
    targetKeyword: "mother tongue language India business",
    href: "/language-gazette/mother-tongue-greatest-comfort",
    source: "The Language Gazette",
    category: "Culture",
    excerpt: "Why mother-tongue depth unlocks trust in business, healthcare, and cross-border work.",
    image: "/stitch/language-gazette/article-cultural-iq.jpg",
    readTime: "6 min read",
  },
];

export type GazetteWebArticle = {
  month: string;
  title: string;
  href: string;
  category: string;
  excerpt: string;
  image: string;
  readTime: string;
};

const toGazetteArticle = (article: Gazette2026Article): GazetteArticle => ({
  slug: article.slug,
  category: article.category,
  readTime: article.readTime,
  title: article.title,
  excerpt: article.excerpt,
  author: article.author,
  image: article.image,
  datePublished: article.datePublished,
});

/** Hero + issue index for the current Language Gazette edition. */
export const april2026Issue: GazetteIssue = {
  slug: "apr-26",
  label: "April 2026",
  shortLabel: "Apr 2026",
  path: "/language-gazette/",
  coverImage: "/stitch/language-gazette/hero-cover.jpg",
  published: "2026-04-15",
  description:
    "Poetry, essays, and bilingual reflections from UVAN contributors - published as fully readable web articles from January through April 2026.",
  articles: gazette2026AprilArticles.map(toGazetteArticle),
};

/** 2026 web articles - each card links to its own page (no duplicate hrefs). */
export const gazette2026Articles: GazetteWebArticle[] = gazette2026Catalog.map((article) => ({
  month: article.month,
  title: article.title,
  href: gazetteArticlePath(article.slug),
  category: article.category,
  excerpt: article.excerpt,
  image: article.image,
  readTime: article.readTime,
}));

export const gazetteMonthHash = (month: string) => month.toLowerCase().replace(/\s+/g, "-");

export const resolveGazetteMonthFromHash = (hash: string, months: string[]) => {
  const key = hash.replace(/^#/, "").toLowerCase();
  if (!key) return null;
  return months.find((month) => gazetteMonthHash(month) === key) ?? null;
};

export const GAZETTE_LANDING_KEYWORDS =
  "language gazette India, language industry publication, cross-border business insights India";

/** Fallback cover when issue-specific art is not yet in public/ */
export const gazetteCoverFallback = "/stitch/language-gazette/hero-cover-fallback.svg";
