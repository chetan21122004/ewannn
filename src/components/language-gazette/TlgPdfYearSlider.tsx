import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AutoHorizontalSlider from "@/components/language-gazette/AutoHorizontalSlider";
import TlgPdfCoverThumbnail from "@/components/language-gazette/TlgPdfCoverThumbnail";
import { tlgPdfReaderPath, type TlgPdfIssue } from "@/data/tlgPdfCatalog";

type TlgPdfYearSliderProps = {
  year: number;
  issues: TlgPdfIssue[];
};

const TlgPdfYearSlider = ({ year, issues }: TlgPdfYearSliderProps) => {
  const slides = issues.map((pdfIssue) => (
    <Link
      key={pdfIssue.slug}
      to={tlgPdfReaderPath(pdfIssue.slug)}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-[hsl(var(--border-light))] bg-white transition hover:-translate-y-0.5 hover:border-[hsl(var(--brand-purple-500)/0.35)] hover:shadow-[0_14px_36px_rgba(26,22,51,0.08)] sm:rounded-2xl"
    >
      <div className="relative aspect-[3/4] overflow-hidden border-b border-[hsl(var(--border-light))]">
        <TlgPdfCoverThumbnail pdfUrl={pdfIssue.pdfUrl} title={pdfIssue.label} />
      </div>
      <div className="flex items-center justify-between gap-2 px-3 py-2.5 sm:gap-3 sm:px-4 sm:py-3.5">
        <span className="min-w-0">
          <span className="block truncate font-serif text-sm font-bold text-[hsl(var(--brand-navy-950))] group-hover:text-[hsl(var(--brand-purple-700))] sm:text-lg">
            {pdfIssue.label}
          </span>
          <span className="mt-0.5 block text-[10px] text-on-light-muted sm:text-xs">Interactive flipbook</span>
        </span>
        <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[hsl(var(--brand-purple-700))] transition group-hover:translate-x-0.5 sm:h-4 sm:w-4" aria-hidden />
      </div>
    </Link>
  ));

  return (
    <AutoHorizontalSlider
      ariaLabel={`${year} TLG PDF editions`}
      items={slides}
      autoplayMs={4800}
    />
  );
};

export default TlgPdfYearSlider;
