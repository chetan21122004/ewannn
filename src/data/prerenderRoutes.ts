import { caseStudyCatalog } from "./caseStudyCatalog";
import { gazette2026Catalog } from "./gazette2026Catalog";
import { SEO_STATIC_PAGES } from "./seoPages";

const INSIGHT_ARTICLE_PATHS = [
  "/insights/how-to-enter-indian-market",
  "/insights/how-to-choose-translation-partner-india",
  "/insights/what-is-simultaneous-interpretation",
  "/insights/ewan-to-uvan-rebrand",
  "/insights/career-in-asian-languages-india",
];

const GAZETTE_STATIC_PATHS = [
  "/language-gazette/apr-25",
  "/language-gazette/when-sadness-gave-me-joy",
  "/language-gazette/mother-tongue-greatest-comfort",
  "/language-gazette/be-brave-you-women",
];

/** All public HTML routes to prerender for crawlers and View Page Source. */
export const PRERENDER_ROUTES: string[] = Array.from(
  new Set([
    ...SEO_STATIC_PAGES.map((page) => page.path),
    ...INSIGHT_ARTICLE_PATHS,
    ...GAZETTE_STATIC_PATHS,
    ...caseStudyCatalog.map((study) => `/case-study/${study.id}`),
    ...gazette2026Catalog
      .filter((article) => !article.hasStaticPage)
      .map((article) => `/language-gazette/${article.slug}`),
  ]),
);
