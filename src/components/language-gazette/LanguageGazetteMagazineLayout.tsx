import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight, BookOpen } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import type { GazetteArticle, GazetteIssue } from "@/data/languageGazetteIssues";
import { gazette2026Articles, gazetteArticlePath } from "@/data/languageGazetteIssues";
import { latestTlgPdfIssue, tlgPdfReaderPath } from "@/data/tlgPdfCatalog";
import GazetteCoverImage from "@/components/language-gazette/GazetteCoverImage";

type LanguageGazetteMagazineLayoutProps = {
  issue?: GazetteIssue;
  showHero?: boolean;
  heroTitle?: string;
  heroSubtitle?: string;
  children?: ReactNode;
  articles?: GazetteArticle[];
  articleGridTitle?: string;
  articleGridSubtitle?: ReactNode;
};

const formatIssueDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", { month: "long", year: "numeric" });

const ArticleCard = ({
  article,
  featured = false,
  index,
}: {
  article: GazetteArticle;
  featured?: boolean;
  index?: number;
}) => (
  <Link
    to={gazetteArticlePath(article.slug)}
    className={`group block overflow-hidden rounded-3xl border border-[hsl(var(--border-light))] bg-white transition hover:-translate-y-1 hover:shadow-[0_24px_60px_-28px_hsl(var(--brand-navy-950)/0.35)] ${
      featured ? "card-shine lg:min-h-full" : "card-shine"
    }`}
  >
    <article className={featured ? "flex h-full flex-col" : undefined}>
      <div className={`relative overflow-hidden ${featured ? "lg:flex-1" : ""}`}>
        <GazetteCoverImage
          src={article.image}
          alt={article.title}
          className={`w-full object-cover transition duration-500 group-hover:scale-[1.03] ${
            featured ? "aspect-[16/10] lg:aspect-[16/11]" : "aspect-[16/10]"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--brand-navy-950)/0.55)] via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
        <span className="absolute left-4 top-4 rounded-full border border-[hsl(var(--border-light))] bg-white px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))]">
          {article.category}
        </span>
        {typeof index === "number" ? (
          <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/15 text-xs font-bold text-white backdrop-blur-sm">
            {String(index + 1).padStart(2, "0")}
          </span>
        ) : null}
      </div>
      <div className={`border-t border-[hsl(var(--brand-navy-950)/0.06)] ${featured ? "p-7 lg:p-8" : "p-6"}`}>
        <p className="text-xs font-medium text-on-light-muted">{article.readTime}</p>
        <h3
          className={`mt-2 font-serif font-bold leading-snug text-[hsl(var(--brand-navy-950))] transition group-hover:text-[hsl(var(--brand-purple-700))] ${
            featured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
          }`}
        >
          {article.title}
        </h3>
        <p className="mt-2 text-sm font-medium text-on-light-muted">By {article.author}</p>
        <p className={`mt-3 leading-relaxed text-on-light-secondary ${featured ? "line-clamp-4 text-base" : "line-clamp-3 text-sm"}`}>
          {article.excerpt}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--brand-purple-700))]">
          Read article
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </span>
      </div>
    </article>
  </Link>
);

export const GazetteMasthead = ({ issueLabel }: { issueLabel?: string }) => (
  <header className="gazette-masthead text-center">
    <p className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-[hsl(var(--brand-gold-600))]">UVAN presents</p>
    <h2 className="mt-2 font-serif text-3xl font-extrabold tracking-tight text-[hsl(var(--brand-navy-950))] md:text-4xl">The Language Gazette</h2>
    <div className="gazette-rule mx-auto mt-4 max-w-xs" />
    {issueLabel ? (
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-700))]">{issueLabel}</p>
    ) : null}
  </header>
);

const LanguageGazetteMagazineLayout = ({
  issue,
  showHero = false,
  heroTitle,
  heroSubtitle,
  children,
  articles,
  articleGridTitle,
  articleGridSubtitle,
}: LanguageGazetteMagazineLayoutProps) => {
  const reduceMotion = useReducedMotion();
  const displayArticles = articles ?? issue?.articles ?? [];
  const readableArticleCount =
    displayArticles.length > 0 ? displayArticles.length : gazette2026Articles.length;
  const issuePath = issue ? issue.path.replace(/\/$/, "") : "/language-gazette/apr-25";
  const [featuredArticle, ...restArticles] = displayArticles;

  const hidden = reduceMotion ? false : { opacity: 0, y: 24 };
  const show = { opacity: 1, y: 0 };
  const transition = (delay = 0) => ({ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const });

  return (
    <div className="gazette-paper">
      {showHero && issue ? (
        <section className="relative isolate overflow-hidden px-5 pb-12 pt-8 sm:px-6 lg:pb-20 lg:pt-14">
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
            className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent"
            aria-hidden
          />

          <div className="container relative z-10 mx-auto max-w-6xl">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(260px,0.95fr)] lg:gap-14 xl:gap-16">
              <motion.div initial={hidden} animate={show} transition={transition(0)}>
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))] shadow-sm sm:mb-5 sm:px-4 sm:py-1.5 sm:text-[11px] sm:tracking-[0.22em]">
                  <BookOpen className="h-3 w-3 text-[hsl(var(--brand-gold-600))] sm:h-3.5 sm:w-3.5" aria-hidden />
                  Quarterly Publication
                </span>
                <h1 className="max-w-2xl font-serif text-[1.85rem] font-bold leading-[1.06] text-on-light sm:text-4xl lg:text-5xl xl:text-[3.25rem] xl:leading-[1.04]">
                  {heroTitle ?? (
                    <>
                      The Language{" "}
                      <span className="italic text-[hsl(var(--brand-purple-700))]">Gazette</span>
                    </>
                  )}
                </h1>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-on-light-secondary sm:mt-5 sm:text-base lg:text-lg">
                  {heroSubtitle ??
                    "UVAN's quarterly publication exploring language, cultural intelligence, and international business - available as web articles and full PDF editions."}
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
                  <a
                    href="#latest-issue"
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-[hsl(var(--brand-navy-950))] shadow-[0_16px_36px_hsl(var(--brand-gold-500)/0.22)] transition hover:-translate-y-0.5 hover:brightness-105 sm:w-auto sm:px-6"
                  >
                    Browse All Articles
                    <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                  </a>
                  <Link
                    to={tlgPdfReaderPath(latestTlgPdfIssue.slug)}
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-[hsl(var(--border-light-strong))] bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-on-light transition hover:bg-[hsl(var(--surface-light-100))] sm:w-auto sm:px-6"
                  >
                    Read Latest PDF
                    <BookOpen className="h-4 w-4 shrink-0" aria-hidden />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={hidden}
                animate={show}
                transition={transition(0.1)}
                className="relative mx-auto w-full max-w-[min(100%,380px)] lg:mx-0 lg:max-w-none lg:justify-self-end"
              >
                <div className="gazette-cover-shadow relative z-10 overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] shadow-[0_24px_60px_rgba(26,22,51,0.12)]">
                  <GazetteCoverImage
                    src={issue.coverImage}
                    alt={`${issue.label} cover`}
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                <motion.div
                  initial={hidden}
                  animate={show}
                  transition={transition(0.18)}
                  className="absolute -bottom-2 left-0 right-0 z-20 mx-auto max-w-[240px] overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-white/95 p-3 shadow-[0_18px_44px_rgba(26,22,51,0.12)] backdrop-blur-sm sm:-left-4 sm:max-w-[260px] lg:-bottom-4 lg:-left-6"
                >
                  <div className="flex gap-3">
                    <img
                      src={issue.coverImage}
                      alt=""
                      aria-hidden
                      className="h-16 w-14 shrink-0 rounded-lg object-cover"
                    />
                    <div className="min-w-0">
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))]">
                        Latest issue
                      </p>
                      <p className="mt-1 line-clamp-2 text-xs font-semibold leading-snug text-on-light">{issue.label}</p>
                      <p className="mt-0.5 text-[11px] text-on-light-muted">
                        {readableArticleCount} readable articles
                      </p>
                      <Link
                        to={tlgPdfReaderPath(latestTlgPdfIssue.slug)}
                        className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-bold text-[hsl(var(--brand-gold-600))] hover:underline"
                      >
                        Open PDF edition
                        <ArrowUpRight className="h-3 w-3" aria-hidden />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      ) : null}

      {children}

      {displayArticles.length > 0 ? (
        <section id={showHero ? "latest-issue" : undefined} className="relative overflow-hidden bg-white px-6 py-16 md:py-20">
          <div className="container relative z-10 mx-auto max-w-6xl">
            <motion.div
              initial={hidden}
              whileInView={show}
              viewport={{ once: true }}
              transition={transition(0)}
              className="mb-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end"
            >
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-700))]">
                  <BookOpen className="h-3.5 w-3.5" aria-hidden />
                  Latest Issue
                </span>
                {articleGridTitle ? (
                  <h2 className="mt-4 font-serif text-3xl font-extrabold text-[hsl(var(--brand-navy-950))] md:text-4xl lg:text-5xl">
                    {articleGridTitle}
                  </h2>
                ) : null}
                {articleGridSubtitle ? (
                  <p className="mt-4 text-base leading-relaxed text-on-light-secondary">{articleGridSubtitle}</p>
                ) : null}
                {issue ? (
                  <p className="mt-3 text-sm font-medium text-on-light-muted">
                    Published {formatIssueDate(issue.published)} · {displayArticles.length} readable articles
                  </p>
                ) : null}
              </div>
              {issue ? (
                <Link
                  to={issuePath}
                  className="inline-flex items-center gap-2 self-start rounded-full border border-[hsl(var(--border-light))] bg-white px-5 py-2.5 text-sm font-semibold text-[hsl(var(--brand-purple-700))] shadow-sm transition hover:-translate-y-0.5 hover:border-[hsl(var(--brand-purple-700)/0.25)] lg:self-auto"
                >
                  View full issue
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : null}
            </motion.div>

            {featuredArticle ? (
              <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
                <motion.div
                  initial={hidden}
                  whileInView={show}
                  viewport={{ once: true }}
                  transition={transition(0.08)}
                  className="lg:col-span-7"
                >
                  <ArticleCard article={featuredArticle} featured index={0} />
                </motion.div>
                <div className="grid gap-8 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
                  {restArticles.map((article, index) => (
                    <motion.div
                      key={article.slug}
                      initial={hidden}
                      whileInView={show}
                      viewport={{ once: true }}
                      transition={transition(0.12 + index * 0.08)}
                    >
                      <ArticleCard article={article} index={index + 1} />
                    </motion.div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {displayArticles.map((article, index) => (
                  <motion.div
                    key={article.slug}
                    initial={hidden}
                    whileInView={show}
                    viewport={{ once: true }}
                    transition={transition(0.08 + index * 0.06)}
                  >
                    <ArticleCard article={article} index={index} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      ) : null}
    </div>
  );
};

export { ArticleCard, formatIssueDate };
export default LanguageGazetteMagazineLayout;
