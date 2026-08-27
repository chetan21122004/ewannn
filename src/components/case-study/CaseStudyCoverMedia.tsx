import CaseStudyPdfThumbnail from "@/components/case-study/CaseStudyPdfThumbnail";
import { type CaseStudyEntry } from "@/data/caseStudyCatalog";
import { cn } from "@/lib/utils";

type CaseStudyCoverMediaProps = {
  study: CaseStudyEntry;
  title: string;
  onOpen?: () => void;
  className?: string;
  fullWidth?: boolean;
  paginated?: boolean;
};

export const caseStudyHasPdf = (study: CaseStudyEntry) => Boolean(study.pdfUrl);

const CaseStudyCoverMedia = ({
  study,
  title,
  onOpen,
  className,
  fullWidth = false,
  paginated = false,
}: CaseStudyCoverMediaProps) => {
  if (study.coverImageUrl && !paginated) {
    const shellClass = cn(
      "relative overflow-hidden bg-[hsl(var(--surface-light-50))]",
      fullWidth ? "w-full" : "w-full max-w-[240px] rounded-xl border border-[hsl(var(--border-light))] shadow-sm",
      className,
    );
    const image = (
      <img
        src={study.coverImageUrl}
        alt={title}
        loading="lazy"
        className="aspect-video h-full w-full object-cover"
      />
    );

    if (onOpen) {
      return (
        <button type="button" onClick={onOpen} className={cn(shellClass, "text-left")} aria-label={`View ${title}`}>
          {image}
        </button>
      );
    }

    return <div className={shellClass}>{image}</div>;
  }

  if (study.pdfUrl) {
    return (
      <CaseStudyPdfThumbnail
        pdfUrl={study.pdfUrl}
        title={title}
        onOpen={onOpen}
        className={className}
        fullWidth={fullWidth}
        paginated={paginated}
      />
    );
  }

  if (!study.coverImageUrl) {
    return null;
  }

  const shellClass = cn(
    "relative overflow-hidden bg-[hsl(var(--surface-light-50))]",
    fullWidth ? "w-full" : "w-full max-w-[240px] rounded-xl border border-[hsl(var(--border-light))] shadow-sm",
    className,
  );

  const image = (
    <img
      src={study.coverImageUrl}
      alt={title}
      loading="lazy"
      className="aspect-video h-full w-full object-cover"
    />
  );

  if (onOpen) {
    return (
      <button type="button" onClick={onOpen} className={cn(shellClass, "text-left")} aria-label={`View ${title}`}>
        {image}
      </button>
    );
  }

  return <div className={shellClass}>{image}</div>;
};

export default CaseStudyCoverMedia;
