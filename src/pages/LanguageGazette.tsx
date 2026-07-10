import { ArrowRight, BookOpen, FileText, Search } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/PageLayout";
import LanguageGazetteMagazineLayout from "@/components/language-gazette/LanguageGazetteMagazineLayout";
import { gazetteKeywordCatalog, latestGazetteIssue } from "@/data/languageGazetteIssues";
import { absoluteUrl, breadcrumbSchema } from "@/lib/schemaHelpers";

const issue = latestGazetteIssue;

const monthly2026Articles = [
  {
    month: "January 2026",
    title: "How to Enter the Indian Market as a Foreign Company",
    href: "/insights/how-to-enter-indian-market",
  },
  {
    month: "February 2026",
    title: "How to Choose a Translation Partner in India",
    href: "/insights/how-to-choose-translation-partner-india",
  },
  {
    month: "March 2026",
    title: "What Is Simultaneous Interpretation?",
    href: "/insights/what-is-simultaneous-interpretation",
  },
  ...gazetteKeywordCatalog.slice(0, 3).map((item, index) => ({
    month: ["April 2026", "May 2026", "June 2026"][index],
    title: item.title,
    href: item.href,
  })),
];

const pdfBackCatalogue = [
  {
    year: "2025",
    title: "April 2025 Web Edition",
    href: issue.path,
    note: "Current issue is available as a readable digital edition. Add the PDF file to public/ to enable direct PDF flipbook download.",
  },
  {
    year: "2024",
    title: "2024 PDF Archive",
    href: "",
    note: "PDF files are not present in public/ yet. This slot is ready for the old-site flipbook PDF once uploaded.",
  },
];

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
        articles={[]}
        heroSubtitle="UVAN's publication on language, culture, markets, and the invisible work of cross-border business."
      />

      <section id="latest-issue" className="gazette-paper-section border-t border-[hsl(var(--brand-navy-950)/0.06)] px-6 py-14 md:py-16">
        <div className="container mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <div>
            <motion.div initial={hidden} whileInView={show} viewport={{ once: true }} transition={transition(0)}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-700))]">
                <BookOpen className="h-3.5 w-3.5" aria-hidden />
                2026
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold text-[hsl(var(--brand-navy-950))] sm:text-4xl">
                2026 Articles
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-on-light-secondary">
                Monthly web articles, each with its own readable page and direct link.
              </p>
            </motion.div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {monthly2026Articles.map((article, index) => (
                <motion.div
                  key={`${article.month}-${article.title}`}
                  initial={hidden}
                  whileInView={show}
                  viewport={{ once: true }}
                  transition={transition(index * 0.05)}
                >
                  <Link
                    to={article.href}
                    className="group flex h-full flex-col rounded-2xl border border-[hsl(var(--border-light))] bg-white p-5 transition hover:-translate-y-1 hover:border-[hsl(var(--brand-purple-500)/0.35)] hover:shadow-[0_18px_42px_rgba(26,22,51,0.08)]"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-gold-600))]">
                      {article.month}
                    </p>
                    <h3 className="mt-3 font-serif text-xl font-bold leading-snug text-[hsl(var(--brand-navy-950))] group-hover:text-[hsl(var(--brand-purple-700))]">
                      {article.title}
                    </h3>
                    <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-[hsl(var(--brand-purple-700))]">
                      Read article
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.aside
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0.08)}
            className="sticky top-28 rounded-[1.75rem] border border-[hsl(var(--border-light))] bg-white p-6 shadow-[0_18px_44px_rgba(26,22,51,0.08)]"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-700))]">
              About the Author
            </span>
            <h3 className="mt-3 font-serif text-2xl font-bold text-[hsl(var(--brand-navy-950))]">UVAN Editorial Desk</h3>
            <p className="mt-3 text-sm leading-relaxed text-on-light-secondary">
              The 2026 Gazette articles are curated by UVAN&apos;s market entry and language services team, drawing from
              live corridor work across India, Asia, Latin America and Africa.
            </p>
          </motion.aside>
        </div>
      </section>

      <section className="theme-section-soft px-6 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            {pdfBackCatalogue.map((item, index) => (
              <motion.article
                key={item.year}
                initial={hidden}
                whileInView={show}
                viewport={{ once: true }}
                transition={transition(index * 0.08)}
                className="group relative overflow-hidden rounded-[2rem] border border-[hsl(var(--border-light))] bg-white p-6 shadow-[0_18px_44px_rgba(26,22,51,0.08)]"
              >
                <div className="absolute inset-y-6 left-6 w-1 rounded-full bg-[hsl(var(--brand-gold-500))]" />
                <div className="ml-5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-purple-700)/0.08)] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-700))]">
                    <FileText className="h-3.5 w-3.5" aria-hidden />
                    {item.year}
                  </span>
                  <h2 className="mt-5 font-serif text-3xl font-bold text-[hsl(var(--brand-navy-950))]">{item.year}</h2>
                  <div className="mt-5 rounded-2xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] p-5 shadow-[inset_12px_0_22px_rgba(26,22,51,0.06)] transition group-hover:-rotate-1 group-hover:shadow-[inset_18px_0_26px_rgba(26,22,51,0.08)]">
                    <h3 className="font-serif text-xl font-bold text-[hsl(var(--brand-navy-950))]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-on-light-secondary">{item.note}</p>
                    {item.href ? (
                      <Link
                        to={item.href}
                        className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-[hsl(var(--brand-navy-950))] px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
                      >
                        Open edition
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </Link>
                    ) : (
                      <span className="mt-5 inline-flex min-h-11 items-center rounded-full border border-[hsl(var(--border-light-strong))] px-5 py-2.5 text-sm font-semibold text-on-light-muted">
                        PDF upload pending
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="theme-section-light px-6 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial={hidden} whileInView={show} viewport={{ once: true }} transition={transition(0)} className="mb-10 max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-700))]">
              <Search className="h-3.5 w-3.5" aria-hidden />
              Keyword-Mapped Articles
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-[hsl(var(--brand-navy-950))] sm:text-4xl">
              Market entry &amp; language-for-business topics
            </h2>
          </motion.div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {gazetteKeywordCatalog.map((item, index) => (
              <motion.li key={item.title} initial={hidden} whileInView={show} viewport={{ once: true }} transition={transition(0.06 + index * 0.05)}>
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
