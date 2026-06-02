import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { aug25Articles, gazetteArticlePath } from "@/data/languageGazetteIssues";
import { absoluteUrl, breadcrumbSchema } from "@/lib/schemaHelpers";

const CANONICAL = "/language-gazette/aug-25/";
const TITLE = "The Language Gazette - August 2025 Issue";
const DESCRIPTION =
  "Read the August 2025 issue of The Language Gazette: poetry, culture, and essays on language, identity, and women's strength.";

const LanguageGazetteIssueAug25 = () => {
  const pageUrl = absoluteUrl(CANONICAL);
  const jsonLd = [
    breadcrumbSchema(pageUrl, [
      { name: "Home", path: "/" },
      { name: "The Language Gazette", path: "/language-gazette/" },
      { name: "August 2025", path: CANONICAL },
    ]),
  ];

  return (
    <PageLayout title={`${TITLE} | Ewan`} description={DESCRIPTION} canonicalPath={CANONICAL} jsonLd={jsonLd}>
      <section className="theme-section-light px-6 py-16 md:py-24">
        <div className="container mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-700))]">The Language Gazette</p>
          <h1 className="mt-4 font-serif text-4xl font-bold text-[hsl(var(--brand-navy-950))] md:text-5xl">August 2025 Issue</h1>
          <p className="mt-6 max-w-2xl text-lg text-on-light-secondary">
            Poetry, personal essays, and reflections on mother tongue, identity, and courage - published as fully readable web articles.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {aug25Articles.map((article) => (
              <Link
                key={article.slug}
                to={gazetteArticlePath(article.slug)}
                className="theme-card-light block overflow-hidden rounded-[1.5rem] transition hover:-translate-y-0.5"
              >
                <article>
                  <img src={article.image} alt={article.title} className="aspect-video w-full object-cover" />
                  <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-gold-600))]">
                      {article.category} <span className="text-on-light-muted">· {article.readTime}</span>
                    </p>
                    <h2 className="mt-3 text-xl font-bold leading-tight text-[hsl(var(--brand-navy-950))]">{article.title}</h2>
                    <p className="mt-2 text-sm text-on-light-muted">By {article.author}</p>
                    <p className="mt-3 text-sm text-on-light-secondary">{article.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--brand-purple-700))]">
                      Read article
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <p className="mt-12 text-sm text-on-light-secondary">
            <Link to="/language-gazette/" className="font-semibold text-[hsl(var(--brand-purple-700))] hover:underline">
              ← Back to The Language Gazette
            </Link>
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default LanguageGazetteIssueAug25;
