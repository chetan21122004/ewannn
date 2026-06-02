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

export const aug25Articles: GazetteArticle[] = [
  {
    slug: "when-sadness-gave-me-joy",
    category: "Poetry",
    readTime: "3 min read",
    title: "When sadness gave me joy",
    excerpt:
      "Shiv Kumar Batalvi's soft, sad melody drifts in from the attic - and frees the tears that melt the black ice around the heart.",
    author: "Armaan",
    image: "/stitch/language-gazette/article-cultural-iq.jpg",
    datePublished: "2025-08-01",
  },
  {
    slug: "mother-tongue-greatest-comfort",
    category: "Culture",
    readTime: "6 min read",
    title: "The Language of the Heart: Why Our Mother Tongue is Our Greatest Comfort",
    excerpt:
      "Gujarati is not just a collection of words - it is a sanctuary where I feel most like myself.",
    author: "EWAN Contributor",
    image: "/stitch/language-gazette/article-market-entry.jpg",
    datePublished: "2025-08-01",
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
    datePublished: "2025-08-01",
  },
];

export const gazetteArticlePath = (slug: string) => `/language-gazette/${slug}` as const;
export const gazetteArticleCanonical = (slug: string) => `/language-gazette/${slug}/` as const;
