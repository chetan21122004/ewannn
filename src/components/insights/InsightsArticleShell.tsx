import type { ReactNode } from "react";
import { ArrowRight, BookOpen, ChevronRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { ArticleServiceLinks } from "@/components/language-gazette/GazetteArticleBlocks";
import { absoluteUrl, articleSchema, breadcrumbSchema, personSoham } from "@/lib/schemaHelpers";

type RelatedInsight = {
  title: string;
  href: string;
  category: string;
  excerpt: string;
};

type InsightsArticleShellProps = {
  title: string;
  description: string;
  canonicalPath: string;
  category: string;
  breadcrumbLabel: string;
  author?: string;
  authorRole?: string;
  datePublished: string;
  readTime: string;
  heroImage?: string;
  heroImageAlt?: string;
  additionalJsonLd?: object[];
  children: ReactNode;
  afterArticle?: ReactNode;
  relatedArticles?: RelatedInsight[];
};

const InsightsArticleShell = ({
  title,
  description,
  canonicalPath,
  category,
  breadcrumbLabel,
  author = "Soham Kakade",
  authorRole = "Founder & CEO, UVAN",
  datePublished,
  readTime,
  heroImage,
  heroImageAlt,
  additionalJsonLd = [],
  children,
  afterArticle,
  relatedArticles = [],
}: InsightsArticleShellProps) => {
  const pageUrl = absoluteUrl(canonicalPath);
  const formattedDate = new Date(datePublished).toLocaleDateString("en-IN", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const authorInitial = author.charAt(0).toUpperCase();
  const aboutHref = author === "Soham Kakade" ? "/about-us#the-founders" : "/about-us/";

  const jsonLd = [
    personSoham(),
    breadcrumbSchema(pageUrl, [
      { name: "Home", path: "/" },
      { name: "Insights", path: "/insights/" },
      { name: breadcrumbLabel, path: canonicalPath },
    ]),
    articleSchema({
      headline: title,
      description,
      canonicalPath,
      datePublished,
      dateModified: datePublished,
      authorName: author,
    }),
    ...additionalJsonLd,
  ];

  return (
    <PageLayout
      title={`${title} | UVAN`}
      description={description}
      canonicalPath={canonicalPath}
      jsonLd={jsonLd}
      mainClassName="bg-white"
    >
      <header className="relative overflow-hidden bg-white">
        <div className="container relative z-10 mx-auto px-4 pb-10 pt-6 sm:px-6 sm:pb-14 sm:pt-8 md:pb-16 md:pt-10">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1 text-xs text-on-light-muted sm:mb-10 sm:gap-1.5 sm:text-sm">
            <Link to="/" className="transition hover:text-[hsl(var(--brand-purple-700))]">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" />
            <Link to="/insights" className="transition hover:text-[hsl(var(--brand-purple-700))]">
              Insights
            </Link>
            <ChevronRight className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" />
            <span className="line-clamp-1 text-on-light">{breadcrumbLabel}</span>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-[hsl(var(--border-light))] bg-white px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))] sm:px-4 sm:py-1.5 sm:text-[10px] sm:tracking-[0.2em]">
              {category}
            </span>

            <h1 className="mt-4 font-serif text-[1.75rem] font-extrabold leading-[1.12] text-on-light sm:mt-6 sm:text-4xl sm:leading-[1.08] md:text-5xl lg:text-[3.5rem]">
              {title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-on-light-secondary sm:mt-6 sm:max-w-2xl sm:text-lg md:text-xl">
              {description}
            </p>

            <div className="mt-6 flex flex-col gap-4 border-t border-[hsl(var(--border-light))] pt-6 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5 sm:pt-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--brand-purple-700))] font-serif text-base font-bold text-white sm:h-11 sm:w-11 sm:text-lg">
                  {authorInitial}
                </span>
                <div className="min-w-0">
                  <Link to={aboutHref} className="text-sm font-semibold text-on-light hover:text-[hsl(var(--brand-purple-700))]">
                    {author}
                  </Link>
                  <p className="text-xs text-on-light-muted">{authorRole}</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-5">
                <time dateTime={datePublished} className="flex items-center gap-1.5 text-xs text-on-light-muted sm:text-sm">
                  <BookOpen className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
                  {formattedDate}
                </time>
                <span className="flex items-center gap-1.5 text-xs text-on-light-muted sm:text-sm">
                  <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
                  {readTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {heroImage ? (
        <div className="border-y border-[hsl(var(--border-light))] bg-white">
          <div className="container mx-auto max-w-5xl px-4 py-5 sm:px-6 sm:py-8 md:py-10">
            <div className="overflow-hidden rounded-xl border border-[hsl(var(--border-light))] shadow-[0_20px_50px_-24px_rgba(26,22,51,0.25)] sm:rounded-[1.25rem]">
              <img
                src={heroImage}
                alt={heroImageAlt ?? title}
                className="aspect-[4/3] w-full object-cover sm:aspect-[21/9]"
                loading="eager"
              />
            </div>
          </div>
        </div>
      ) : null}

      <article className="bg-white px-4 py-10 sm:px-6 sm:py-14 md:py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="gazette-article-page rounded-xl border border-[hsl(var(--brand-navy-950)/0.08)] bg-white px-5 py-8 shadow-[0_12px_48px_-20px_rgba(15,23,42,0.18)] sm:rounded-[1.25rem] sm:px-8 sm:py-10 md:px-12 md:py-14">
            <div className="gazette-article-body max-sm:[&_.gazette-lead:first-child]:first-letter:float-none max-sm:[&_.gazette-lead:first-child]:first-letter:mr-0 max-sm:[&_.gazette-lead:first-child]:first-letter:text-4xl sm:[&_.gazette-lead:first-child]:first-letter:float-left sm:[&_.gazette-lead:first-child]:first-letter:mr-3 sm:[&_.gazette-lead:first-child]:first-letter:mt-1 sm:[&_.gazette-lead:first-child]:first-letter:font-serif sm:[&_.gazette-lead:first-child]:first-letter:text-6xl sm:[&_.gazette-lead:first-child]:first-letter:font-bold sm:[&_.gazette-lead:first-child]:first-letter:text-[hsl(var(--brand-gold-600))] sm:[&_.gazette-lead:first-child]:first-letter:leading-none">
              {children}
            </div>
            <ArticleServiceLinks />
          </div>

          <aside className="mt-8 flex flex-col gap-4 rounded-xl border border-[hsl(var(--border-light))] bg-white p-5 shadow-sm sm:mt-10 sm:flex-row sm:gap-5 sm:rounded-2xl sm:p-6 md:p-8">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--brand-purple-700))] font-serif text-lg font-bold text-white sm:h-14 sm:w-14 sm:text-xl">
              {authorInitial}
            </span>
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-gold-600))]">About the author</p>
              <Link
                to={aboutHref}
                className="mt-2 block font-serif text-lg font-bold text-[hsl(var(--brand-navy-950))] hover:text-[hsl(var(--brand-purple-700))] sm:text-xl"
              >
                {author}
              </Link>
              <p className="mt-2 text-sm leading-relaxed text-on-light-secondary">
                {author} leads UVAN&apos;s market entry and language mandates across India and Asia - helping foreign companies
                navigate regulatory, operational, and cultural complexity with one accountable partner on the ground.
              </p>
            </div>
          </aside>
        </div>
      </article>

      {afterArticle}

      {relatedArticles.length > 0 ? (
        <section className="border-t border-[hsl(var(--border-light))] bg-white px-4 py-12 sm:px-6 sm:py-10 md:py-14">
          <div className="container mx-auto max-w-5xl">
            <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-gold-600))]">Continue reading</p>
                <h2 className="mt-2 font-serif text-2xl font-bold text-[hsl(var(--brand-navy-950))] sm:text-3xl">More insights</h2>
              </div>
              <Link to="/insights" className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--brand-purple-700))]">
                View all insights
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              {relatedArticles.map((related) => (
                <Link
                  key={related.href}
                  to={related.href}
                  className="group flex flex-col rounded-xl border border-[hsl(var(--border-light))] bg-white p-5 transition hover:-translate-y-0.5 hover:border-[hsl(var(--brand-purple-500)/0.35)] hover:shadow-[0_14px_36px_rgba(26,22,51,0.08)] sm:rounded-2xl sm:p-6"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-gold-600))]">
                    {related.category}
                  </p>
                  <h3 className="mt-2 font-serif text-lg font-bold leading-snug text-[hsl(var(--brand-navy-950))] group-hover:text-[hsl(var(--brand-purple-700))] sm:text-xl">
                    {related.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-on-light-secondary sm:mt-3">{related.excerpt}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold text-[hsl(var(--brand-purple-700))] sm:pt-5">
                    Read article
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </PageLayout>
  );
};

export default InsightsArticleShell;
