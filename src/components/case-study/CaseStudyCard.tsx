import { Link } from "react-router-dom";
import { ArrowRight, Download, FileText } from "lucide-react";
import CaseStudyCoverMedia, { caseStudyHasPdf } from "@/components/case-study/CaseStudyCoverMedia";
import { getCaseStudyFullHeadline, type CaseStudyEntry } from "@/data/caseStudyCatalog";
import { cn } from "@/lib/utils";

type CaseStudyCardProps = {
  study: CaseStudyEntry;
  featured?: boolean;
  onOpenPdf: (study: CaseStudyEntry) => void;
  className?: string;
};

const CaseStudyCard = ({ study, featured = false, onOpenPdf, className }: CaseStudyCardProps) => {
  const deliveredFact = study.quickFacts.find((row) => row.label === "Delivered");
  const fullHeadline = getCaseStudyFullHeadline(study);
  const hasPdf = caseStudyHasPdf(study);

  return (
    <article
      className={cn(
        "theme-card-light card-shine group flex h-full flex-col overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-white shadow-[0_8px_28px_-12px_rgba(26,22,51,0.1)] transition duration-300 hover:-translate-y-1 hover:border-[hsl(var(--brand-purple-500)/0.3)] hover:shadow-[0_20px_48px_-16px_rgba(26,22,51,0.16)] sm:rounded-3xl",
        featured && "ring-1 ring-[hsl(var(--brand-purple-500)/0.18)]",
        className,
      )}
    >
      <Link to={`/case-study/${study.id}`} className="block flex-1">
        <div className="relative overflow-hidden bg-[hsl(var(--surface-light-50))]">
          <CaseStudyCoverMedia
            study={study}
            title={fullHeadline}
            fullWidth
            className="transition duration-500 group-hover:scale-[1.02] [&>div]:origin-center"
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between gap-1.5 bg-gradient-to-b from-[hsl(var(--brand-navy-950)/0.55)] to-transparent p-3 sm:p-4">
            <div className="flex min-w-0 flex-wrap gap-1.5">
              {featured ? (
                <span className="rounded-full bg-[hsl(var(--brand-gold-500))] px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.1em] text-[hsl(var(--brand-navy-950))] sm:px-3 sm:py-1 sm:text-[10px]">
                  Featured
                </span>
              ) : null}
              <span className="rounded-full border border-white/25 bg-white/15 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.1em] text-white backdrop-blur-sm sm:px-3 sm:py-1 sm:text-[10px]">
                {study.corridor}
              </span>
            </div>
            {hasPdf ? (
              <span className="shrink-0 rounded-full bg-white/90 px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.12em] text-[hsl(var(--brand-purple-700))] shadow-sm sm:text-[9px]">
                PDF
              </span>
            ) : null}
          </div>
        </div>

        <div className="flex flex-1 flex-col p-4 sm:p-5">
          {study.subjectLine ? (
            <p className="line-clamp-2 text-[9px] font-bold uppercase tracking-[0.12em] text-[hsl(var(--brand-gold-600))] sm:text-[10px]">
              {study.subjectLine}
            </p>
          ) : null}

          <h2
            className={cn(
              "font-serif text-base font-bold leading-snug text-on-light transition-colors group-hover:text-[hsl(var(--brand-purple-700))] sm:text-lg",
              study.subjectLine && "mt-2",
            )}
          >
            {study.headline}
            {study.headlineSub ? (
              <>
                <br />
                <span className="text-[hsl(var(--brand-purple-700))]">{study.headlineSub}</span>
              </>
            ) : null}
          </h2>

          <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-on-light-secondary">{study.summary}</p>

          {deliveredFact ? (
            <div className="mt-3 rounded-xl border border-[hsl(var(--brand-purple-700)/0.14)] bg-[hsl(var(--brand-purple-700)/0.05)] px-3.5 py-3 sm:px-4 sm:py-3.5">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[hsl(var(--brand-purple-700))]">
                Delivered
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-on-light sm:text-sm">{deliveredFact.value}</p>
            </div>
          ) : null}

          <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[hsl(var(--brand-purple-700))]">
            Read case study
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </span>
        </div>
      </Link>

      {hasPdf ? (
        <div className="flex flex-col gap-2 border-t border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50)/0.5)] px-4 py-3 sm:px-5 sm:py-4">
          <button
            type="button"
            onClick={() => onOpenPdf(study)}
            className="inline-flex min-h-9 w-full items-center justify-center gap-1.5 rounded-full bg-[hsl(var(--brand-gold-500))] px-4 py-2 text-xs font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
          >
            <FileText className="h-3.5 w-3.5" aria-hidden />
            View PDF
          </button>
          <a
            href={study.pdfUrl}
            download={study.pdfFileName}
            className="inline-flex min-h-9 w-full items-center justify-center gap-1.5 rounded-full border border-[hsl(var(--border-light-strong))] bg-white px-4 py-2 text-xs font-semibold text-on-light transition hover:bg-[hsl(var(--surface-light-100))]"
          >
            <Download className="h-3.5 w-3.5" aria-hidden />
            Download
          </a>
        </div>
      ) : null}
    </article>
  );
};

export default CaseStudyCard;
