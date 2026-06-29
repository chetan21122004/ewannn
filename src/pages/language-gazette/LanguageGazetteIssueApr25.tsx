import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { GazetteMasthead, formatIssueDate } from "@/components/language-gazette/LanguageGazetteMagazineLayout";
import GazetteCoverImage from "@/components/language-gazette/GazetteCoverImage";
import { latestGazetteIssue, gazetteArticlePath } from "@/data/languageGazetteIssues";
import { absoluteUrl, breadcrumbSchema } from "@/lib/schemaHelpers";

const issue = latestGazetteIssue;
const CANONICAL = issue.path;
const TITLE = `The Language Gazette - ${issue.label} Issue`;
const DESCRIPTION = `Read the ${issue.label} issue of The Language Gazette: poetry, culture, and essays on language, identity, and women's strength.`;

const LanguageGazetteIssueApr25 = () => {
  const pageUrl = absoluteUrl(CANONICAL);
  const jsonLd = [
    breadcrumbSchema(pageUrl, [
      { name: "Home", path: "/" },
      { name: "The Language Gazette", path: "/language-gazette/" },
      { name: issue.label, path: CANONICAL },
    ]),
  ];

  const issueDate = formatIssueDate(issue.published);

  return (
    <PageLayout title={`${TITLE} | UVAN`} description={DESCRIPTION} canonicalPath={CANONICAL} jsonLd={jsonLd}>
      <section className="relative overflow-hidden bg-[hsl(var(--brand-navy-950))] px-6 py-14 text-white md:py-20">
        <div className="container mx-auto max-w-6xl">
          <nav className="mb-8 text-sm text-white/60">
            <Link to="/language-gazette" className="hover:text-white">
              The Language Gazette
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/90">{issue.label}</span>
          </nav>
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-[hsl(var(--brand-gold-500))]">Issue index</p>
              <h1 className="mt-4 font-serif text-4xl font-extrabold leading-tight md:text-6xl">{issue.label} Issue</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">{issue.description}</p>
              <p className="mt-4 text-sm text-white/60">
                Published {issueDate} · {issue.articles.length} articles · also available as a digital issue
              </p>
              <a
                href="#issue-articles"
                className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))]"
              >
                Read the full issue online
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
            <div className="lg:col-span-5">
              <div className="gazette-cover-shadow overflow-hidden rounded-[1.5rem] border border-white/15">
                <GazetteCoverImage src={issue.coverImage} alt={`${issue.label} cover`} className="aspect-[4/5] w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gazette-paper gazette-paper-section px-6 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <GazetteMasthead issueLabel={`Table of contents · ${issue.shortLabel}`} />
          <p className="mx-auto mt-6 max-w-2xl text-center text-on-light-secondary">
            Select an article below to read the full text on the web.
          </p>

          <ol id="issue-articles" className="mt-12 space-y-4 md:hidden">
            {issue.articles.map((article, index) => (
              <li key={article.slug}>
                <Link
                  to={gazetteArticlePath(article.slug)}
                  className="flex gap-4 rounded-2xl border border-[hsl(var(--brand-navy-950)/0.08)] bg-white p-5 transition hover:shadow-md"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--brand-navy-950))] font-serif text-lg font-bold text-[hsl(var(--brand-gold-500))]">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-gold-600))]">{article.category}</p>
                    <h2 className="mt-1 font-serif text-lg font-bold text-[hsl(var(--brand-navy-950))]">{article.title}</h2>
                    <p className="mt-1 text-sm text-on-light-muted">By {article.author}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ol>

          <div className="mt-12 hidden gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
            {issue.articles.map((article, index) => (
              <Link
                key={article.slug}
                to={gazetteArticlePath(article.slug)}
                className="gazette-article-card group block overflow-hidden rounded-[1.25rem] border border-[hsl(var(--brand-navy-950)/0.08)] bg-white transition hover:-translate-y-0.5"
              >
                <article>
                  <div className="relative">
                    <GazetteCoverImage src={article.image} alt={article.title} className="aspect-[16/10] w-full object-cover" />
                    <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[hsl(var(--brand-navy-950))] font-serif text-sm font-bold text-[hsl(var(--brand-gold-500))]">
                      {index + 1}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-gold-600))]">
                      {article.category} <span className="text-on-light-muted">· {article.readTime}</span>
                    </p>
                    <h2 className="mt-3 font-serif text-xl font-bold leading-tight text-[hsl(var(--brand-navy-950))]">{article.title}</h2>
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

          <p className="mt-14 text-center text-sm text-on-light-secondary">
            <Link to="/language-gazette" className="font-semibold text-[hsl(var(--brand-purple-700))] hover:underline">
              ← Back to The Language Gazette
            </Link>
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default LanguageGazetteIssueApr25;
