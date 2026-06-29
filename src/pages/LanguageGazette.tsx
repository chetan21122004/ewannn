import { ArrowRight, BookOpen, Search } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/PageLayout";
import LanguageGazetteMagazineLayout from "@/components/language-gazette/LanguageGazetteMagazineLayout";
import { gazetteKeywordCatalog, latestGazetteIssue } from "@/data/languageGazetteIssues";
import { absoluteUrl, breadcrumbSchema } from "@/lib/schemaHelpers";

const issue = latestGazetteIssue;

const LanguageGazette = () => {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const hidden = reduceMotion ? false : { opacity: 0, y: 24 };
  const show = { opacity: 1, y: 0 };
  const transition = (delay = 0) => ({ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const });

  const jsonLd = [
    breadcrumbSchema(absoluteUrl("/language-gazette/"), [
      { name: "Home", path: "/" },
      { name: "The Language Gazette", path: "/language-gazette/" },
    ]),
  ];

  return (
    <PageLayout
      title={t("seo.languageGazette.title")}
      description={t("seo.languageGazette.description")}
      canonicalPath="/language-gazette/"
      keywords={t("seo.languageGazette.keywords")}
      jsonLd={jsonLd}
    >
      <LanguageGazetteMagazineLayout
        issue={issue}
        showHero
        articles={issue.articles}
        articleGridTitle={`${issue.label} Issue`}
        articleGridSubtitle={issue.description}
      />

      {/* Hybrid publish strategy */}
      <section className="gazette-paper-section border-t border-[hsl(var(--brand-navy-950)/0.06)] px-6 py-14 md:py-16">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-700))]">
              <BookOpen className="h-3.5 w-3.5" aria-hidden />
              Hybrid Publish Strategy
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-[hsl(var(--brand-navy-950))] sm:text-4xl">
              Every article, readable on the web
            </h2>
            <p className="mt-4 text-base leading-relaxed text-on-light-secondary">
              The Language Gazette continues as a quarterly publication. Each article is also published as a full HTML
              page with its own URL — so practitioners searching for market entry, interpretation, and cross-border
              language topics can find UVAN&apos;s expertise on Google, not only inside a PDF.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-on-light-muted">
              Read individual articles below, browse the latest issue, or visit the{" "}
              <Link to="/media" className="font-semibold text-[hsl(var(--brand-purple-700))] hover:underline">
                Media Hub
              </Link>{" "}
              for blog insights and press coverage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Keyword-mapped back catalogue (Steps 2 & 4) */}
      <section className="theme-section-soft px-6 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
            className="mb-10 max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-700))]">
              <Search className="h-3.5 w-3.5" aria-hidden />
              Keyword-Mapped Articles
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-[hsl(var(--brand-navy-950))] sm:text-4xl">
              Market entry &amp; language-for-business topics
            </h2>
            <p className="mt-3 text-base leading-relaxed text-on-light-secondary">
              Priority web articles mapped to the search queries practitioners use — published as readable HTML, not
              embedded PDFs.
            </p>
          </motion.div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {gazetteKeywordCatalog.map((item, index) => (
              <motion.li
                key={item.title}
                initial={hidden}
                whileInView={show}
                viewport={{ once: true }}
                transition={transition(0.06 + index * 0.05)}
              >
                <Link
                  to={item.href}
                  className="group flex h-full flex-col rounded-2xl border border-[hsl(var(--border-light))] bg-white p-5 transition hover:border-[hsl(var(--brand-purple-500)/0.3)] hover:shadow-sm"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-gold-600))]">
                    {item.source} · targets &ldquo;{item.targetKeyword}&rdquo;
                  </p>
                  <h3 className="mt-2 font-serif text-lg font-bold leading-snug text-[hsl(var(--brand-navy-950))] group-hover:text-[hsl(var(--brand-purple-700))]">
                    {item.title}
                  </h3>
                  <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold text-[hsl(var(--brand-purple-700))]">
                    Read article
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </PageLayout>
  );
};

export default LanguageGazette;
