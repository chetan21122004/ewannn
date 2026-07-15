import { useState } from "react";
import { BookOpen, FileText } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/PageLayout";
import LanguageGazetteMagazineLayout from "@/components/language-gazette/LanguageGazetteMagazineLayout";
import GazetteYearArticlesSlider from "@/components/language-gazette/GazetteYearArticlesSlider";
import TlgPdfYearSlider from "@/components/language-gazette/TlgPdfYearSlider";
import GazetteContributeDialog, {
  GazetteContributeButton,
} from "@/components/language-gazette/GazetteContributeDialog";
import { april2026Issue, gazette2026Articles } from "@/data/languageGazetteIssues";
import { tlgPdfIssuesByYear } from "@/data/tlgPdfCatalog";
import { absoluteUrl, breadcrumbSchema } from "@/lib/schemaHelpers";

const GAZETTE_2026_MONTHS = ["April 2026", "March 2026", "February 2026", "January 2026"] as const;

const pdfArchive = tlgPdfIssuesByYear();

const LanguageGazette = () => {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const [contributeOpen, setContributeOpen] = useState(false);
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
      mainClassName="bg-white"
    >
      <LanguageGazetteMagazineLayout
        issue={april2026Issue}
        showHero
        articles={[]}
        heroSubtitle="UVAN's quarterly publication on language, culture, and cross-border business - 18 readable web articles from January-April 2026."
      />

      <section id="latest-issue" className="border-t border-[hsl(var(--brand-navy-950)/0.06)] bg-white px-6 py-14 md:py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <motion.div initial={hidden} whileInView={show} viewport={{ once: true }} transition={transition(0)}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-700))]">
                <BookOpen className="h-3.5 w-3.5" aria-hidden />
                2026
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold text-[hsl(var(--brand-navy-950))] sm:text-4xl">
                2026 Articles
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-on-light-secondary">
                {gazette2026Articles.length} web articles from January-April 2026 - each opens its own page.
              </p>
            </motion.div>

            <motion.div
              initial={hidden}
              whileInView={show}
              viewport={{ once: true }}
              transition={transition(0.04)}
              className="shrink-0"
            >
              <GazetteContributeButton onClick={() => setContributeOpen(true)} />
            </motion.div>
          </div>

          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0.06)}
            className="mt-8"
          >
            <GazetteYearArticlesSlider
              year="2026"
              months={[...GAZETTE_2026_MONTHS]}
              articles={gazette2026Articles}
            />
          </motion.div>

        </div>
      </section>

      <GazetteContributeDialog open={contributeOpen} onOpenChange={setContributeOpen} />

      <section id="pdf-archive" className="border-t border-[hsl(var(--border-light))] bg-white px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial={hidden} whileInView={show} viewport={{ once: true }} transition={transition(0)} className="mb-10 max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-700))]">
              <FileText className="h-3.5 w-3.5" aria-hidden />
              PDF Archive
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-[hsl(var(--brand-navy-950))] sm:text-4xl">
              All TLG editions
            </h2>
            <p className="mt-4 text-base leading-relaxed text-on-light-secondary">
              Every published PDF from 2024 and 2025 - open any issue online or download the file.
            </p>
          </motion.div>

          <div className="space-y-10 sm:space-y-12">
            {pdfArchive.map(({ year, issues }, yearIndex) => (
              <motion.div
                key={year}
                initial={hidden}
                whileInView={show}
                viewport={{ once: true }}
                transition={transition(yearIndex * 0.06)}
              >
                <div className="mb-4 flex items-end justify-between gap-3 sm:mb-5">
                  <h3 className="font-serif text-2xl font-bold text-[hsl(var(--brand-navy-950))]">{year}</h3>
                  <p className="text-xs text-on-light-muted sm:text-sm">{issues.length} editions</p>
                </div>
                <TlgPdfYearSlider year={year} issues={issues} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default LanguageGazette;
