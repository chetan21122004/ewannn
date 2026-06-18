import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { GazetteArticle, GazetteIssue } from "@/data/languageGazetteIssues";
import { gazetteArticlePath } from "@/data/languageGazetteIssues";
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

const ArticleCard = ({ article }: { article: GazetteArticle }) => (
  <Link
    to={gazetteArticlePath(article.slug)}
    className="gazette-article-card group block overflow-hidden rounded-[1.25rem] border border-[hsl(var(--brand-navy-950)/0.08)] bg-white transition hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-24px_rgba(15,23,42,0.35)]"
  >
    <article>
      <div className="relative overflow-hidden">
        <GazetteCoverImage
          src={article.image}
          alt={article.title}
          className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-[hsl(var(--brand-navy-950))] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-gold-500))]">
          {article.category}
        </span>
      </div>
      <div className="border-t border-[hsl(var(--brand-navy-950)/0.06)] p-6">
        <p className="text-xs text-on-light-muted">{article.readTime}</p>
        <h3 className="mt-2 font-serif text-xl font-bold leading-snug text-[hsl(var(--brand-navy-950))] group-hover:text-[hsl(var(--brand-purple-700))] md:text-2xl">
          {article.title}
        </h3>
        <p className="mt-2 text-sm font-medium text-on-light-muted">By {article.author}</p>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-on-light-secondary">{article.excerpt}</p>
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
    <p className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-[hsl(var(--brand-gold-600))]">Ewan Business Solutions presents</p>
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
  const displayArticles = articles ?? issue?.articles ?? [];
  const issuePath = issue ? issue.path.replace(/\/$/, "") : "/language-gazette/apr-25";

  return (
    <div className="gazette-paper">
      {showHero && issue ? (
        <section className="relative overflow-hidden bg-[hsl(var(--brand-navy-950))] px-6 pb-16 pt-12 text-white md:pb-20 md:pt-16">
          <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 2px, white 2px, white 3px)" }} />
          <div className="container relative mx-auto max-w-6xl">
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-7">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-[hsl(var(--brand-gold-500))]">Quarterly Publication</p>
                <h1 className="mt-4 font-serif text-4xl font-extrabold leading-[1.05] md:text-6xl lg:text-7xl">
                  {heroTitle ?? (
                    <>
                      The Language
                      <br />
                      <span className="italic text-[hsl(var(--brand-gold-500))]">Gazette</span>
                    </>
                  )}
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
                  {heroSubtitle ??
                    "EWAN's quarterly publication exploring language, cultural intelligence, and the human stories behind global business."}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#latest-issue"
                    className="inline-flex items-center gap-2 rounded-xl bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-bold text-[hsl(var(--brand-navy-950))]"
                  >
                    Browse articles
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link
                    to={issuePath}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                  >
                    {issue.label} — table of contents
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="gazette-cover-shadow relative mx-auto max-w-sm overflow-hidden rounded-[1.5rem] border border-white/15 lg:max-w-none">
                  <GazetteCoverImage
                    src={issue.coverImage}
                    alt={`${issue.label} cover`}
                    className="aspect-[4/5] w-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[hsl(var(--brand-navy-950))] to-transparent px-6 pb-6 pt-16">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[hsl(var(--brand-gold-500))]">Latest issue</p>
                    <p className="mt-1 font-serif text-2xl font-bold">{issue.label}</p>
                    <p className="mt-1 text-sm text-white/70">{displayArticles.length} articles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {children}

      {displayArticles.length > 0 ? (
        <section id={showHero ? "latest-issue" : undefined} className="gazette-paper-section px-6 py-16 md:py-20">
          <div className="container mx-auto max-w-6xl">
            {(articleGridTitle || articleGridSubtitle) && (
              <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
                <div>
                  {articleGridTitle ? (
                    <h2 className="font-serif text-3xl font-extrabold text-[hsl(var(--brand-navy-950))] md:text-4xl">{articleGridTitle}</h2>
                  ) : null}
                  {articleGridSubtitle ? <p className="mt-3 max-w-2xl text-on-light-secondary">{articleGridSubtitle}</p> : null}
                </div>
                {issue ? (
                  <Link
                    to={issuePath}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--brand-purple-700))] hover:underline"
                  >
                    View full issue
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : null}
              </div>
            )}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">{displayArticles.map((article) => <ArticleCard key={article.slug} article={article} />)}</div>
          </div>
        </section>
      ) : null}
    </div>
  );
};

export { ArticleCard, formatIssueDate };
export default LanguageGazetteMagazineLayout;
