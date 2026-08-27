import { Navigate, useParams } from "react-router-dom";
import LanguageGazetteArticleShell from "@/components/language-gazette/LanguageGazetteArticleShell";
import { renderGazette2026Body } from "@/components/language-gazette/renderGazette2026Body";
import { gazette2026BySlug, gazette2026Catalog } from "@/data/gazette2026Catalog";
import { gazetteArticleCanonical } from "@/data/languageGazetteIssues";
import NotFound from "@/pages/NotFound";

const LanguageGazetteArticleRoute = () => {
  const { slug = "" } = useParams();
  const article = gazette2026BySlug[slug];

  if (!article) {
    return <NotFound />;
  }

  if (article.hasStaticPage) {
    return <Navigate to={gazetteArticleCanonical(slug)} replace />;
  }

  const relatedArticleSlugs = gazette2026Catalog
    .filter((entry) => entry.month === article.month && entry.slug !== article.slug)
    .slice(0, 2)
    .map((entry) => entry.slug);

  return (
    <LanguageGazetteArticleShell
      slug={article.slug}
      title={article.title}
      description={article.excerpt}
      canonicalPath={gazetteArticleCanonical(article.slug)}
      category={article.category}
      author={article.author}
      datePublished={article.datePublished}
      readTime={article.readTime}
      image={article.image}
      issueLabel={article.month}
      relatedArticleSlugs={relatedArticleSlugs}
      fullBleedBody={article.contentMode === "images"}
    >
      {renderGazette2026Body(article)}
    </LanguageGazetteArticleShell>
  );
};

export default LanguageGazetteArticleRoute;
