import "@/lib/pdfWorker";
import { useEffect, useRef, useState } from "react";
import { Document, Page } from "react-pdf";
import { ChevronLeft, ChevronRight, Expand, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

type CaseStudyPdfThumbnailProps = {
  pdfUrl: string;
  title: string;
  onOpen?: () => void;
  className?: string;
  /** Fill parent width — for card headers */
  fullWidth?: boolean;
  /** Show prev/next controls to flip through PDF pages */
  paginated?: boolean;
};

const CaseStudyPdfThumbnail = ({
  pdfUrl,
  title,
  onOpen,
  className,
  fullWidth = false,
  paginated = false,
}: CaseStudyPdfThumbnailProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const [failed, setFailed] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(0);

  useEffect(() => {
    setPageNumber(1);
    setNumPages(0);
    setFailed(false);
  }, [pdfUrl]);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          intersectionObserver.disconnect();
        }
      },
      { rootMargin: "120px" },
    );

    const resizeObserver = new ResizeObserver(([entry]) => {
      setContainerWidth(Math.max(1, Math.floor(entry.contentRect.width)));
    });

    intersectionObserver.observe(node);
    resizeObserver.observe(node);

    return () => {
      intersectionObserver.disconnect();
      resizeObserver.disconnect();
    };
  }, []);

  const goToPrevPage = () => setPageNumber((page) => Math.max(page - 1, 1));
  const goToNextPage = () => setPageNumber((page) => Math.min(page + 1, numPages));

  const navButtonClass =
    "absolute top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-white/95 text-[hsl(var(--brand-purple-700))] shadow-[0_8px_24px_rgba(26,22,51,0.18)] backdrop-blur-sm transition hover:scale-105 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-purple-700))] disabled:cursor-not-allowed disabled:opacity-40 sm:h-11 sm:w-11";

  const inner = (
    <>
      {failed ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[hsl(var(--surface-light-100))] px-3 text-center">
          <FileText className="h-7 w-7 text-on-light-muted" aria-hidden />
          <span className="text-[10px] font-medium text-on-light-muted">Preview unavailable</span>
        </div>
      ) : isVisible && containerWidth > 0 ? (
        <Document
          file={pdfUrl}
          onLoadSuccess={({ numPages: total }) => setNumPages(total)}
          onLoadError={() => setFailed(true)}
          loading={<div className="absolute inset-0 animate-pulse bg-[hsl(var(--surface-light-100))]" />}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Page
            key={`${pdfUrl}-${pageNumber}`}
            pageNumber={pageNumber}
            width={containerWidth}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            onRenderError={() => setFailed(true)}
            loading={<div className="absolute inset-0 animate-pulse bg-[hsl(var(--surface-light-100))]" />}
            className="!m-0 !bg-transparent [&_.react-pdf__Page__canvas]:mx-auto [&_.react-pdf__Page__canvas]:max-h-full [&_.react-pdf__Page__canvas]:w-full [&_.react-pdf__Page__canvas]:object-contain"
          />
        </Document>
      ) : (
        <div className="absolute inset-0 animate-pulse bg-[hsl(var(--surface-light-100))]" />
      )}

      {paginated && numPages > 0 ? (
        <>
          <button
            type="button"
            onClick={goToPrevPage}
            disabled={pageNumber <= 1}
            className={cn(navButtonClass, "left-3 sm:left-4")}
            aria-label="Previous PDF page"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>
          <button
            type="button"
            onClick={goToNextPage}
            disabled={pageNumber >= numPages}
            className={cn(navButtonClass, "right-3 sm:right-4")}
            aria-label="Next PDF page"
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>
          <span className="pointer-events-none absolute bottom-3 left-1/2 z-20 -translate-x-1/2 rounded-full bg-[hsl(var(--brand-navy-950)/0.72)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm sm:bottom-4">
            Page {pageNumber} of {numPages}
          </span>
        </>
      ) : null}

      {onOpen ? (
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[hsl(var(--brand-navy-950)/0.0)] opacity-0 transition group-hover:bg-[hsl(var(--brand-navy-950)/0.35)] group-hover:opacity-100">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[hsl(var(--brand-purple-700))] shadow-sm">
            <Expand className="h-3 w-3" aria-hidden />
            View PDF
          </span>
        </span>
      ) : null}
      <span className="sr-only">
        {title} slide preview{paginated && numPages > 0 ? `, page ${pageNumber} of ${numPages}` : ""}
      </span>
    </>
  );

  const shellClass = cn(
    "group relative overflow-hidden bg-white",
    fullWidth
      ? "w-full rounded-none border-0 shadow-none"
      : "w-full max-w-[240px] rounded-xl border border-[hsl(var(--border-light))] shadow-sm",
    className,
  );

  const aspectClass = "relative aspect-video w-full overflow-hidden bg-[hsl(var(--surface-light-50))]";

  if (onOpen) {
    return (
      <button
        type="button"
        onClick={onOpen}
        className={cn(
          shellClass,
          "text-left transition hover:border-[hsl(var(--brand-purple-700)/0.25)] hover:shadow-md",
        )}
        aria-label={`View ${title} PDF`}
      >
        <div ref={containerRef} className={aspectClass}>
          {inner}
        </div>
      </button>
    );
  }

  return (
    <div className={shellClass}>
      <div ref={containerRef} className={aspectClass}>
        {inner}
      </div>
    </div>
  );
};

export default CaseStudyPdfThumbnail;
