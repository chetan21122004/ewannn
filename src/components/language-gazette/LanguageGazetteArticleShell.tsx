import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight, BookOpen, Calendar, Clock, ChevronRight, Tag } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { ArticleServiceLinks } from "@/components/language-gazette/GazetteArticleBlocks";
import GazetteCoverImage from "@/components/language-gazette/GazetteCoverImage";
import GazetteHeroAside from "@/components/language-gazette/GazetteHeroAside";
import type { GazetteArticle } from "@/data/languageGazetteIssues";
import { latestGazetteIssue, gazetteArticlePath } from "@/data/languageGazetteIssues";
import { gazette2026BySlug } from "@/data/gazette2026Catalog";
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
  relatedArticleSlugs?: string[];
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

const authorRole = (author: string) =>
  author === "Soham Kakade" ? "Founder & CEO, UVAN" : "Contributing Writer";

const authorBio = (author: string) =>
  author === "Soham Kakade"
    ? "Leads UVAN's market entry and language mandates across India and Asia - helping foreign companies navigate regulatory, operational, and cultural complexity."
    : "A contributor to The Language Gazette - UVAN's quarterly publication on language, cultural intelligence, and cross-border business.";

const articleBodyClassName =
  "gazette-article-body relative z-10 max-sm:[&_.gazette-lead:first-child]:first-letter:float-none max-sm:[&_.gazette-lead:first-child]:first-letter:mr-0 max-sm:[&_.gazette-lead:first-child]:first-letter:text-4xl sm:[&_.gazette-lead:first-child]:first-letter:float-left sm:[&_.gazette-lead:first-child]:first-letter:mr-3 sm:[&_.gazette-lead:first-child]:first-letter:mt-1 sm:[&_.gazette-lead:first-child]:first-letter:font-serif sm:[&_.gazette-lead:first-child]:first-letter:text-6xl sm:[&_.gazette-lead:first-child]:first-letter:font-bold sm:[&_.gazette-lead:first-child]:first-letter:text-[hsl(var(--brand-gold-600))] sm:[&_.gazette-lead:first-child]:first-letter:leading-none";

const readingPanelClassName =
  "rounded-2xl border border-[hsl(var(--border-light))] bg-white shadow-[0_16px_48px_-24px_rgba(26,22,51,0.16)] ring-1 ring-black/[0.03]";

type ArticleMetaProps = {
  author: string;
  authorInitial: string;
  aboutHref?: string;
  formattedDate: string;
  datePublished: string;
  readTime: string;
  category: string;
  issueLabel: string;
  compact?: boolean;
};

const ArticleMetaList = ({
  formattedDate,
  datePublished,
  readTime,
  category,
  issueLabel,
}: Pick<ArticleMetaProps, "formattedDate" | "datePublished" | "readTime" | "category" | "issueLabel">) => (
  <dl className="space-y-3">
    <div>
      <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-on-light-muted">Published</dt>
      <dd className="mt-1 flex items-center gap-1.5 text-sm font-medium text-on-light">
        <Calendar className="h-3.5 w-3.5 text-[hsl(var(--brand-gold-600))]" aria-hidden />
        <time dateTime={datePublished}>{formattedDate}</time>
      </dd>
    </div>
    <div>
      <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-on-light-muted">Read time</dt>
      <dd className="mt-1 flex items-center gap-1.5 text-sm font-medium text-on-light">
        <Clock className="h-3.5 w-3.5 text-[hsl(var(--brand-gold-600))]" aria-hidden />
        {readTime}
      </dd>
    </div>
    <div>
      <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-on-light-muted">Category</dt>
      <dd className="mt-1 flex items-center gap-1.5 text-sm font-medium text-on-light">
        <Tag className="h-3.5 w-3.5 text-[hsl(var(--brand-gold-600))]" aria-hidden />
        {category}
      </dd>
    </div>
    <div>
      <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-on-light-muted">Issue</dt>
      <dd className="mt-1 flex items-center gap-1.5 text-sm font-medium text-on-light">
        <BookOpen className="h-3.5 w-3.5 text-[hsl(var(--brand-gold-600))]" aria-hidden />
        {issueLabel}
      </dd>
    </div>
  </dl>
);

const AuthorCard = ({
  author,
  authorInitial,
  aboutHref,
  compact = false,
}: Pick<ArticleMetaProps, "author" | "authorInitial" | "aboutHref" | "compact">) => (
  <div className={compact ? "flex items-start gap-3" : "text-center sm:text-left"}>
    <span
      className={`flex shrink-0 items-center justify-center rounded-full bg-[hsl(var(--brand-purple-700))] font-serif font-bold text-white ${
        compact ? "h-11 w-11 text-lg" : "mx-auto h-14 w-14 text-xl sm:mx-0"
      }`}
    >
      {authorInitial}
    </span>
    <div className={compact ? "min-w-0 flex-1" : "mt-4 sm:mt-0 sm:pl-0"}>
      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-gold-600))]">
        {compact ? "Written by" : "About the author"}
      </p>
      {aboutHref ? (
        <Link
          to={aboutHref}
          className={`mt-1 block font-serif font-bold text-[hsl(var(--brand-navy-950))] hover:text-[hsl(var(--brand-purple-700))] ${
            compact ? "text-base" : "text-lg"
          }`}
        >
          {author}
        </Link>
      ) : (
        <p className={`mt-1 font-serif font-bold text-[hsl(var(--brand-navy-950))] ${compact ? "text-base" : "text-lg"}`}>
          {author}
        </p>
      )}
      <p className="mt-0.5 text-xs font-medium text-on-light-muted">{authorRole(author)}</p>
      {!compact ? (
        <p className="mt-3 text-sm leading-relaxed text-on-light-secondary">{authorBio(author)}</p>
      ) : null}
    </div>
  </div>
);

const GazetteArticleSidebar = ({
  author,
  authorInitial,
  aboutHref,
  formattedDate,
  datePublished,
  readTime,
  category,
  issueLabel,
  relatedArticles,
}: ArticleMetaProps & { relatedArticles: GazetteArticle[] }) => (
  <aside className="hidden lg:block" aria-label="Article details">
    <div className="sticky top-[5.25rem] z-20 max-h-[calc(100dvh-5.25rem-1.5rem)] space-y-4 overflow-y-auto overscroll-contain pr-1 [scrollbar-color:hsl(var(--brand-purple-500)/0.35)_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[hsl(var(--brand-purple-500)/0.35)] [&::-webkit-scrollbar-track]:bg-transparent">
      <div className={`overflow-hidden ${readingPanelClassName}`}>
        <div className="h-1 bg-gradient-to-r from-[hsl(var(--brand-gold-500))] to-[hsl(var(--brand-purple-700))]" />
        <div className="p-5">
          <AuthorCard author={author} authorInitial={authorInitial} aboutHref={aboutHref} />
        </div>
      </div>

      <div className={`p-5 ${readingPanelClassName}`}>
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))]">
          Article details
        </p>
        <div className="mt-4">
          <ArticleMetaList
            formattedDate={formattedDate}
            datePublished={datePublished}
            readTime={readTime}
            category={category}
            issueLabel={issueLabel}
          />
        </div>
      </div>

      <div className={`p-5 ${readingPanelClassName}`}>
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))]">
          The Language Gazette
        </p>
        <p className="mt-2 text-sm leading-relaxed text-on-light-secondary">
          UVAN&apos;s quarterly on language, culture, and cross-border business.
        </p>
        <Link
          to="/language-gazette/#latest-issue"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[hsl(var(--brand-purple-700))] hover:underline"
        >
          Browse all articles
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </Link>
      </div>

      {relatedArticles.length > 0 ? (
        <div className={`p-5 ${readingPanelClassName}`}>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))]">
            More from {issueLabel}
          </p>
          <ul className="mt-3 space-y-3">
            {relatedArticles.map((related) => (
              <li key={related.slug}>
                <Link
                  to={gazetteArticlePath(related.slug)}
                  className="group flex gap-3 rounded-xl p-1 transition hover:bg-[hsl(var(--surface-light-50))]"
                >
                  <GazetteCoverImage
                    src={related.image}
                    alt=""
                    aria-hidden
                    className="h-14 w-12 shrink-0 rounded-lg object-cover"
                  />
                  <div className="min-w-0 py-0.5">
                    <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--brand-gold-600))]">
                      {related.category}
                    </p>
                    <p className="mt-0.5 line-clamp-2 text-xs font-semibold leading-snug text-on-light group-hover:text-[hsl(var(--brand-purple-700))]">
                      {related.title}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  </aside>
);

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
  relatedArticleSlugs,
  children,
}: LanguageGazetteArticleShellProps) => {
  const pageUrl = absoluteUrl(canonicalPath);
  const formattedDate = new Date(datePublished).toLocaleDateString("en-IN", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const authorInitial = author.charAt(0).toUpperCase();
  const relatedArticles = (relatedArticleSlugs ?? issue.articles.filter((a) => a.slug !== slug).map((a) => a.slug))
    .slice(0, 2)
    .map((relatedSlug) => {
      const from2026 = gazette2026BySlug[relatedSlug];
      if (from2026) {
        return {
          slug: from2026.slug,
          category: from2026.category,
          title: from2026.title,
          excerpt: from2026.excerpt,
          image: from2026.image,
        };
      }
      const fromIssue = issue.articles.find((a) => a.slug === relatedSlug);
      return fromIssue;
    })
    .filter(Boolean) as GazetteArticle[];
  const featuredAlt = imageAlt ?? `${title} - The Language Gazette`;
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
  const reduceMotion = useReducedMotion();
  const hidden = reduceMotion ? false : { opacity: 0, y: 24 };
  const show = { opacity: 1, y: 0 };
  const transition = (delay = 0) => ({ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const });
  const titleColonIndex = title.indexOf(": ");
  const titleLead = titleColonIndex > 0 ? title.slice(0, titleColonIndex + 1) : null;
  const titleAccent = titleColonIndex > 0 ? title.slice(titleColonIndex + 2) : null;

  return (
    <PageLayout
      title={metaTitle}
      description={description}
      canonicalPath={canonicalPath}
      jsonLd={jsonLd}
      mainClassName="bg-[hsl(var(--surface-light-50))]"
    >
      <header className="relative isolate overflow-hidden section-pad-hero sm:px-6">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 52% 44% at 92% 8%, hsl(var(--brand-gold-500) / 0.13) 0%, transparent 50%), radial-gradient(ellipse 58% 48% at 8% 88%, hsl(var(--brand-purple-500) / 0.08) 0%, transparent 52%), radial-gradient(ellipse 40% 36% at 50% 100%, hsl(var(--brand-cyan-500) / 0.09) 0%, transparent 55%)",
          }}
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.12] lg:opacity-[0.16]" />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[hsl(var(--surface-light-50))] to-transparent"
          aria-hidden
        />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-1 text-xs text-on-light-muted sm:mb-10 sm:gap-1.5 sm:text-sm"
          >
            <Link to="/" className="transition hover:text-[hsl(var(--brand-purple-700))]">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" />
            <Link to="/language-gazette" className="transition hover:text-[hsl(var(--brand-purple-700))]">
              The Language Gazette
            </Link>
            <ChevronRight className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" />
            <Link to={issuePath} className="transition hover:text-[hsl(var(--brand-purple-700))]">
              {issueLabel}
            </Link>
            <ChevronRight className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" />
            <span className="line-clamp-1 text-on-light">{title}</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(260px,0.95fr)] lg:gap-14 xl:gap-16">
            <motion.div initial={hidden} animate={show} transition={transition(0)}>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))] shadow-sm sm:mb-5 sm:px-4 sm:py-1.5 sm:text-[11px] sm:tracking-[0.22em]">
                <BookOpen className="h-3 w-3 text-[hsl(var(--brand-gold-600))] sm:h-3.5 sm:w-3.5" aria-hidden />
                {category} · {issueLabel}
              </span>

              <h1 className="max-w-2xl font-serif text-[1.85rem] font-bold leading-[1.06] text-on-light sm:text-4xl lg:text-5xl xl:text-[3.25rem] xl:leading-[1.04]">
                {titleLead && titleAccent ? (
                  <>
                    {titleLead}{" "}
                    <span className="italic text-[hsl(var(--brand-purple-700))]">{titleAccent}</span>
                  </>
                ) : (
                  title
                )}
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-on-light-secondary sm:mt-5 sm:text-base lg:text-lg">
                {description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
                <div className="flex items-center gap-2.5 rounded-full border border-[hsl(var(--border-light))] bg-white/90 py-1.5 pl-1.5 pr-4 shadow-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--brand-purple-700))] font-serif text-sm font-bold text-white">
                    {authorInitial}
                  </span>
                  <div className="min-w-0">
                    {aboutHref ? (
                      <Link
                        to={aboutHref}
                        className="block text-sm font-semibold text-on-light hover:text-[hsl(var(--brand-purple-700))]"
                      >
                        {author}
                      </Link>
                    ) : (
                      <p className="text-sm font-semibold text-on-light">{author}</p>
                    )}
                    <p className="text-[11px] text-on-light-muted">{authorRole(author)}</p>
                  </div>
                </div>
                <time
                  dateTime={datePublished}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[hsl(var(--border-light))] bg-white/90 px-3 py-2 text-xs font-medium text-on-light-secondary shadow-sm"
                >
                  <Calendar className="h-3.5 w-3.5 text-[hsl(var(--brand-gold-600))]" aria-hidden />
                  {formattedDate}
                </time>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[hsl(var(--border-light))] bg-white/90 px-3 py-2 text-xs font-medium text-on-light-secondary shadow-sm">
                  <Clock className="h-3.5 w-3.5 text-[hsl(var(--brand-gold-600))]" aria-hidden />
                  {readTime}
                </span>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
                <Link
                  to="/language-gazette/#latest-issue"
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-[hsl(var(--brand-navy-950))] shadow-[0_16px_36px_hsl(var(--brand-gold-500)/0.22)] transition hover:-translate-y-0.5 hover:brightness-105 sm:w-auto sm:px-6"
                >
                  All articles
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                </Link>
                <Link
                  to={issuePath}
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[hsl(var(--border-light-strong))] bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-on-light transition hover:bg-[hsl(var(--surface-light-100))] sm:w-auto sm:px-6"
                >
                  {issueLabel} issue
                  <BookOpen className="h-4 w-4 shrink-0" aria-hidden />
                </Link>
              </div>
            </motion.div>

            <GazetteHeroAside
              reduceMotion={reduceMotion}
              hidden={hidden}
              show={show}
              transition={transition}
              eyebrow={category}
              title={author}
              meta={readTime}
              linkTo="/language-gazette/"
              linkLabel="The Language Gazette"
              thumb={
                <span className="flex h-16 w-14 shrink-0 items-center justify-center rounded-lg bg-[hsl(var(--brand-purple-700))] font-serif text-xl font-bold text-white">
                  {authorInitial}
                </span>
              }
              doodleAlt="Language and culture publication illustration"
            />
          </div>
        </div>
      </header>

      <article className="relative isolate px-4 py-8 sm:px-6 sm:py-10 md:py-14">
        <div
          className="pointer-events-none absolute left-1/2 top-0 z-0 h-full w-screen max-w-none -translate-x-1/2"
          aria-hidden
        >
          <div className="sticky top-14 h-[calc(100dvh-3.5rem)] lg:top-[4.25rem] lg:h-[calc(100dvh-4.25rem)]">
            <GazetteCoverImage
              src={image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_17.5rem] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_20rem] xl:gap-14">
            <div className="min-w-0">
              <div className={`mb-6 p-4 lg:hidden ${readingPanelClassName}`}>
                <AuthorCard author={author} authorInitial={authorInitial} aboutHref={aboutHref} compact />
                <div className="mt-4 grid grid-cols-2 gap-3 border-t border-[hsl(var(--border-light))] pt-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-on-light-muted">Published</p>
                    <p className="mt-1 text-sm font-medium text-on-light">{formattedDate}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-on-light-muted">Read time</p>
                    <p className="mt-1 text-sm font-medium text-on-light">{readTime}</p>
                  </div>
                </div>
              </div>

              <div className="gazette-article-page relative overflow-hidden rounded-[1.25rem] border border-[hsl(var(--border-light))] bg-white px-5 py-8 shadow-[0_20px_60px_-28px_rgba(26,22,51,0.18)] ring-1 ring-black/[0.03] sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-12">
                <div className={articleBodyClassName}>{children}</div>
                <ArticleServiceLinks />
              </div>

              <div className={`mt-6 p-5 lg:hidden ${readingPanelClassName}`}>
                <AuthorCard author={author} authorInitial={authorInitial} aboutHref={aboutHref} />
              </div>
            </div>

            <GazetteArticleSidebar
              author={author}
              authorInitial={authorInitial}
              aboutHref={aboutHref}
              formattedDate={formattedDate}
              datePublished={datePublished}
              readTime={readTime}
              category={category}
              issueLabel={issueLabel}
              relatedArticles={relatedArticles}
            />
          </div>
        </div>
      </article>

      <section className="relative z-10 border-t border-[hsl(var(--border-light))] bg-white px-4 py-12 sm:px-6 sm:py-10 md:py-14">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4 sm:mb-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-gold-600))]">Continue reading</p>
              <h2 className="mt-2 font-serif text-2xl font-bold text-[hsl(var(--brand-navy-950))] sm:text-3xl">More from {issueLabel}</h2>
            </div>
            <Link to={issuePath} className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--brand-purple-700))]">
              View full issue
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            {relatedArticles.map((related) => (
              <Link
                key={related.slug}
                to={gazetteArticlePath(related.slug)}
                className="group flex overflow-hidden rounded-xl border border-[hsl(var(--border-light))] bg-white transition hover:-translate-y-0.5 hover:border-[hsl(var(--brand-purple-500)/0.35)] hover:shadow-[0_14px_36px_rgba(26,22,51,0.08)] sm:rounded-2xl"
              >
                <GazetteCoverImage
                  src={related.image}
                  alt={`${related.title} - The Language Gazette`}
                  className="hidden w-32 shrink-0 object-cover sm:block lg:w-36"
                />
                <div className="flex flex-1 flex-col justify-center p-5 sm:p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-gold-600))]">{related.category}</p>
                  <h3 className="mt-2 font-serif text-lg font-bold leading-snug text-[hsl(var(--brand-navy-950))] group-hover:text-[hsl(var(--brand-purple-700))]">
                    {related.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-on-light-secondary">{related.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>

          <footer className="mt-10 rounded-xl border border-[hsl(var(--border-light))] bg-white px-6 py-8 text-center shadow-sm sm:mt-12 sm:rounded-2xl sm:px-8 sm:py-10 md:px-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-700))]">The Language Gazette</p>
            <p className="mt-3 font-serif text-xl font-bold text-on-light sm:text-2xl">
              This article first appeared in The Language Gazette Issue {issue.label}.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to={issuePath}
                className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-bold text-[hsl(var(--brand-navy-950))]"
              >
                View full issue
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                to="/market-entry/"
                className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-[hsl(var(--border-light-strong))] bg-white px-6 py-3 text-sm font-semibold text-on-light transition hover:bg-white"
              >
                Market Entry
              </Link>
              <Link
                to="/language-localization/"
                className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-[hsl(var(--border-light-strong))] bg-white px-6 py-3 text-sm font-semibold text-on-light transition hover:bg-white"
              >
                Language &amp; Localization
              </Link>
              <Link
                to="/ask-soham/"
                className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-[hsl(var(--border-light-strong))] bg-white px-6 py-3 text-sm font-semibold text-on-light transition hover:bg-white"
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
