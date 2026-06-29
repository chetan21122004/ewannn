import type { ReactNode } from "react";
import { ArrowRight, BookOpen, Clock, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { ArticleServiceLinks } from "@/components/language-gazette/GazetteArticleBlocks";
import GazetteCoverImage from "@/components/language-gazette/GazetteCoverImage";
import { latestGazetteIssue, gazetteArticlePath } from "@/data/languageGazetteIssues";
import { absoluteUrl, articleSchema, breadcrumbSchema, personSoham, personSchema } from "@/lib/schemaHelpers";

type LanguageGazetteArticleShellProps = {
  slug: string;
  title: string;
  description: string;
  canonicalPath: string;
  category: string;
  author: string;
  datePublished: string;
  readTime: string;
  image: string;
  imageAlt?: string;
  issueLabel?: string;
  children: ReactNode;
};

const issue = latestGazetteIssue;
const issuePath = issue.path.replace(/\/$/, "");

const authorAboutHref = (author: string) => {
  if (author === "Soham Kakade") {
    return "/about-us#the-founders";
  }
  if (author === "UVAN Contributor") {
    return "/about-us/";
  }
  return undefined;
};

const LanguageGazetteArticleShell = ({
  slug,
  title,
  description,
  canonicalPath,
  category,
  author,
  datePublished,
  readTime,
  image,
  imageAlt,
  issueLabel = issue.shortLabel,
  children,
}: LanguageGazetteArticleShellProps) => {
  const pageUrl = absoluteUrl(canonicalPath);
  const formattedDate = new Date(datePublished).toLocaleDateString("en-IN", { month: "long", day: "numeric", year: "numeric" });
  const authorInitial = author.charAt(0).toUpperCase();
  const relatedArticles = issue.articles.filter((a) => a.slug !== slug);
  const featuredAlt =
    imageAlt ?? `${title} — The Language Gazette article on language and cross-border business`;
  const aboutHref = authorAboutHref(author);

  const jsonLd = [
    author === "Soham Kakade" ? personSoham() : personSchema(author),
    breadcrumbSchema(pageUrl, [
      { name: "Home", path: "/" },
      { name: "The Language Gazette", path: "/language-gazette/" },
      { name: issue.label, path: issue.path },
      { name: title, path: canonicalPath },
    ]),
    articleSchema({
      headline: title,
      description,
      canonicalPath,
      datePublished,
      dateModified: datePublished,
      authorName: author,
    }),
  ];

  const metaTitle = `${title} | The Language Gazette | UVAN`;

  return (
    <PageLayout title={metaTitle} description={description} canonicalPath={canonicalPath} jsonLd={jsonLd}>
      <header className="relative overflow-hidden bg-[hsl(var(--brand-navy-950))]">
        <div className="absolute inset-0">
          <GazetteCoverImage src={image} alt={featuredAlt} className="h-full w-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--brand-navy-950))] via-[hsl(var(--brand-navy-950)/0.85)] to-[hsl(var(--brand-navy-950)/0.6)]" />
        </div>

        <div className="container relative mx-auto px-6 pb-16 pt-8 md:pb-20 md:pt-10">
          <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-1.5 text-sm text-white/60">
            <Link to="/" className="transition hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 shrink-0" />
            <Link to="/language-gazette" className="transition hover:text-white">
              The Language Gazette
            </Link>
            <ChevronRight className="h-3.5 w-3.5 shrink-0" />
            <Link to={issuePath} className="transition hover:text-white">
              {issueLabel}
            </Link>
            <ChevronRight className="h-3.5 w-3.5 shrink-0" />
            <span className="text-white/90">{title}</span>
          </nav>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[hsl(var(--brand-gold-500))] px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-navy-950))]">
                {category}
              </span>
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/80">
                {issueLabel}
              </span>
            </div>

            <h1 className="mt-6 font-serif text-4xl font-extrabold leading-[1.08] text-white md:text-6xl lg:text-[4.25rem]">{title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">{description}</p>

            <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-white/15 pt-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[hsl(var(--brand-purple-700))] font-serif text-lg font-bold text-white">
                  {authorInitial}
                </span>
                <div>
                  {aboutHref ? (
                    <Link to={aboutHref} className="text-sm font-semibold text-white hover:text-[hsl(var(--brand-gold-500))]">
                      {author}
                    </Link>
                  ) : (
                    <p className="text-sm font-semibold text-white">{author}</p>
                  )}
                  <p className="text-xs text-white/55">
                    {author === "Soham Kakade" ? "Founder & CEO, UVAN" : "Contributing Writer"}
                  </p>
                </div>
              </div>
              <span className="hidden h-8 w-px bg-white/15 sm:block" />
              <time dateTime={datePublished} className="flex items-center gap-1.5 text-sm text-white/65">
                <BookOpen className="h-4 w-4" aria-hidden />
                {formattedDate}
              </time>
              <span className="flex items-center gap-1.5 text-sm text-white/65">
                <Clock className="h-4 w-4" aria-hidden />
                {readTime}
              </span>
            </div>
          </div>
        </div>
      </header>

      <article className="gazette-paper px-6 py-14 md:py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="gazette-article-page rounded-[1.25rem] border border-[hsl(var(--brand-navy-950)/0.08)] bg-white px-8 py-10 shadow-[0_12px_48px_-20px_rgba(15,23,42,0.18)] md:px-12 md:py-14">
            <div className="gazette-article-body [&_.gazette-lead:first-child]:first-letter:float-left [&_.gazette-lead:first-child]:first-letter:mr-3 [&_.gazette-lead:first-child]:first-letter:mt-1 [&_.gazette-lead:first-child]:first-letter:font-serif [&_.gazette-lead:first-child]:first-letter:text-6xl [&_.gazette-lead:first-child]:first-letter:font-bold [&_.gazette-lead:first-child]:first-letter:text-[hsl(var(--brand-gold-600))] [&_.gazette-lead:first-child]:first-letter:leading-none">
              {children}
            </div>
            <ArticleServiceLinks />
          </div>

          <aside className="mt-10 flex gap-5 rounded-2xl border border-[hsl(var(--brand-navy-950)/0.08)] bg-white p-6 shadow-sm md:p-8">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--brand-navy-950))] font-serif text-xl font-bold text-white">
              {authorInitial}
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-gold-600))]">About the author</p>
              {aboutHref ? (
                <Link
                  to={aboutHref}
                  className="mt-2 block font-serif text-xl font-bold text-[hsl(var(--brand-navy-950))] hover:text-[hsl(var(--brand-purple-700))]"
                >
                  {author}
                </Link>
              ) : (
                <p className="mt-2 font-serif text-xl font-bold text-[hsl(var(--brand-navy-950))]">{author}</p>
              )}
              <p className="mt-2 text-sm leading-relaxed text-on-light-secondary">
                A contributor to <strong>The Language Gazette</strong> — UVAN&apos;s quarterly publication exploring language,
                cultural intelligence, and international business.
              </p>
            </div>
          </aside>
        </div>
      </article>

      <section className="gazette-paper-section px-6 py-16 md:py-20">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-gold-600))]">Continue Reading</p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-[hsl(var(--brand-navy-950))]">More from {issueLabel}</h2>
            </div>
            <Link to={issuePath} className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--brand-purple-700))]">
              View full issue
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {relatedArticles.map((related) => (
              <Link
                key={related.slug}
                to={gazetteArticlePath(related.slug)}
                className="gazette-article-card group flex overflow-hidden rounded-2xl border border-[hsl(var(--brand-navy-950)/0.08)] bg-white transition hover:-translate-y-0.5"
              >
                <GazetteCoverImage
                  src={related.image}
                  alt={`${related.title} — The Language Gazette`}
                  className="hidden w-36 shrink-0 object-cover sm:block"
                />
                <div className="flex flex-1 flex-col justify-center p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-gold-600))]">{related.category}</p>
                  <h3 className="mt-2 font-serif text-lg font-bold leading-snug text-[hsl(var(--brand-navy-950))] group-hover:text-[hsl(var(--brand-purple-700))]">
                    {related.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-on-light-secondary">{related.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>

          <footer className="mt-12 rounded-2xl bg-[hsl(var(--brand-navy-950))] px-8 py-10 text-center md:px-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[hsl(var(--brand-gold-500))]">The Language Gazette</p>
            <p className="mt-3 font-serif text-2xl font-bold text-white">
              This article first appeared in The Language Gazette Issue {issue.label}.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to={issuePath}
                className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-bold text-[hsl(var(--brand-navy-950))]"
              >
                Download the full issue
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                to="/market-entry/"
                className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white/90"
              >
                Market Entry
              </Link>
              <Link
                to="/language-localization/"
                className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white/90"
              >
                Language &amp; Localization
              </Link>
              <Link
                to="/ask-soham/"
                className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white/90"
              >
                Ask Soham
              </Link>
            </div>
          </footer>
        </div>
      </section>
    </PageLayout>
  );
};

export default LanguageGazetteArticleShell;
