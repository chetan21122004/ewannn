import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import CaseStudyCard from "@/components/case-study/CaseStudyCard";
import CaseStudyPdfDialog from "@/components/case-study/CaseStudyPdfDialog";
import { caseStudyCatalog, type CaseStudyEntry } from "@/data/caseStudyCatalog";

const CaseStudyPageContent = () => {
  const reduceMotion = useReducedMotion() ?? false;
  const [dialogStudy, setDialogStudy] = useState<CaseStudyEntry | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const openPdf = (study: CaseStudyEntry) => {
    setDialogStudy(study);
    setDialogOpen(true);
  };

  const handleDialogOpenChange = (open: boolean) => {
    setDialogOpen(open);
    if (!open) setDialogStudy(null);
  };

  return (
    <>
      <section className="relative overflow-hidden theme-section-soft section-pad-hero px-5 sm:px-6">
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.12]" />
        <div className="container relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.35 : 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))] sm:px-4 sm:py-1.5 sm:text-[11px]">
              <Sparkles className="h-3.5 w-3.5 text-[hsl(var(--brand-gold-600))]" aria-hidden />
              Case Studies
            </span>
            <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-on-light sm:text-4xl lg:text-5xl">
              Stories From the Corridor
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-on-light-secondary sm:text-base">
              Real mandates across market entry, investor outreach, and partner search — each with a full write-up
              and optional 16:9 slide-deck PDF.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden section-pad theme-section-light px-5 sm:px-6">
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.06]" />
        <div className="container relative z-10 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-6 xl:gap-8">
            {caseStudyCatalog.map((study) => (
              <CaseStudyCard key={study.id} study={study} featured={study.featured} onOpenPdf={openPdf} />
            ))}
          </div>
        </div>
      </section>

      <CaseStudyPdfDialog study={dialogStudy} open={dialogOpen} onOpenChange={handleDialogOpenChange} />
    </>
  );
};

export default CaseStudyPageContent;
