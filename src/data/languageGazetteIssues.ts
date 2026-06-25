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

/** Fallback cover when issue-specific art is not yet in public/ */
export const gazetteCoverFallback = "/stitch/language-gazette/hero-cover-fallback.svg";
