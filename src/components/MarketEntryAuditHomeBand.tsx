import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, FileCheck2 } from "lucide-react";
import { Link } from "react-router-dom";

/** Secondary homepage placement — Free Resource: Download the 2026 Market Entry Audit */
const MarketEntryAuditHomeBand = () => {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section
      aria-label="Free resource — 2026 Global Market Entry Audit"
      className="theme-section-soft relative overflow-hidden border-y border-[hsl(var(--border-light)/0.85)] px-5 py-6 sm:px-6 md:py-8"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.1] theme-grid-overlay-light" aria-hidden />
      <div className="container relative z-10 mx-auto max-w-6xl">
        <motion.div
          className="flex flex-col gap-5 rounded-[1.25rem] border border-[hsl(var(--border-light))] bg-white/[0.88] p-5 shadow-[0_16px_40px_rgba(26,22,51,0.06)] backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:rounded-[1.75rem] sm:p-7 md:p-8"
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-start gap-4">
            <motion.span
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[hsl(var(--brand-gold-500)/0.15)] text-[hsl(var(--brand-gold-600))]"
              initial={reduceMotion ? { opacity: 0 } : { scale: 0 }}
              whileInView={reduceMotion ? { opacity: 1 } : { scale: [0, 1.25, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.15, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <FileCheck2 className="h-5 w-5" aria-hidden />
            </motion.span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-700))]">
                Free Resource
              </p>
              <h2 className="mt-1 font-serif text-xl font-bold leading-snug text-[hsl(var(--brand-navy-950))] sm:text-2xl">
                Download the 2026 Market Entry Audit
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-on-light-secondary">
                A free 3-page diagnostic — five operational gaps that commonly derail international expansion, with
                self-assessment checklists for each.
              </p>
            </div>
          </div>
          <Link
            to="/market-entry-audit"
            className="shimmer-gold-cta inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105 sm:w-auto"
          >
            Download the Free Audit
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketEntryAuditHomeBand;
