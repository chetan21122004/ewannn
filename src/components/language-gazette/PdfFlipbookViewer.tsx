import "@/lib/pdfWorker";
import {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page } from "react-pdf";
import { ChevronLeft, ChevronRight, Download, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type FlipBookRef = {
  pageFlip: () => {
    flipNext: (corner?: string) => void;
    flipPrev: (corner?: string) => void;
    getCurrentPageIndex: () => number;
    getPageCount: () => number;
  };
};

type FlipPageProps = {
  children: ReactNode;
};

const FlipPage = forwardRef<HTMLDivElement, FlipPageProps>(({ children }, ref) => (
  <div
    ref={ref}
    className="flex h-full w-full items-center justify-center overflow-hidden bg-[hsl(var(--surface-light-50))]"
  >
    {children}
  </div>
));
FlipPage.displayName = "FlipPage";

type PdfFlipbookViewerProps = {
  pdfUrl: string;
  title: string;
  className?: string;
};

const PdfFlipbookViewer = ({ pdfUrl, title, className }: PdfFlipbookViewerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<FlipBookRef>(null);
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageWidth, setPageWidth] = useState(420);
  const [isMobile, setIsMobile] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [isRendering, setIsRendering] = useState(true);

  const pageHeight = useMemo(() => Math.round(pageWidth * 1.414), [pageWidth]);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const updateSize = () => {
      const width = node.clientWidth;
      const mobile = width < 640;
      setIsMobile(mobile);
      const next = mobile
        ? Math.min(Math.max(Math.floor(width - 16), 200), 360)
        : Math.min(Math.max(Math.floor(width / 2) - 8, 260), 520);
      setPageWidth(next);
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const onDocumentLoad = useCallback(({ numPages: total }: { numPages: number }) => {
    setNumPages(total);
    setLoadError(null);
    setIsRendering(false);
  }, []);

  const onDocumentError = useCallback((error: Error) => {
    console.error("PDF flipbook load error:", error);
    setLoadError("Could not load this PDF. Try downloading the file instead.");
    setIsRendering(false);
  }, []);

  const flipPrev = () => bookRef.current?.pageFlip().flipPrev();
  const flipNext = () => bookRef.current?.pageFlip().flipNext();

  const handleFlip = useCallback((event: { data: number }) => {
    setCurrentPage(event.data);
  }, []);

  const pageNumbers = useMemo(
    () => Array.from({ length: numPages }, (_, index) => index + 1),
    [numPages],
  );

  return (
    <div className={cn("mx-auto w-full max-w-5xl overflow-hidden", className)}>
      <div className="mb-3 flex flex-col gap-3 sm:mb-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-center text-sm text-on-light-secondary sm:text-left">
          {numPages > 0 ? (
            <>
              Page {Math.min(currentPage + 1, numPages)} of {numPages}
            </>
          ) : (
            "Preparing flipbook…"
          )}
        </p>
        <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center sm:gap-2">
          <button
            type="button"
            onClick={flipPrev}
            disabled={currentPage <= 0 || isRendering}
            className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full border border-[hsl(var(--border-light-strong))] bg-white px-3 py-2 text-sm font-semibold text-on-light transition hover:bg-[hsl(var(--surface-light-100))] disabled:cursor-not-allowed disabled:opacity-45 sm:min-h-10 sm:px-4"
            aria-label="Previous page"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
            Prev
          </button>
          <button
            type="button"
            onClick={flipNext}
            disabled={currentPage >= numPages - 1 || isRendering}
            className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full border border-[hsl(var(--border-light-strong))] bg-white px-3 py-2 text-sm font-semibold text-on-light transition hover:bg-[hsl(var(--surface-light-100))] disabled:cursor-not-allowed disabled:opacity-45 sm:min-h-10 sm:px-4"
            aria-label="Next page"
          >
            Next
            <ChevronRight className="h-4 w-4" aria-hidden />
          </button>
          <a
            href={pdfUrl}
            download
            className="col-span-2 inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full bg-[hsl(var(--brand-navy-950))] px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110 sm:col-span-1 sm:min-h-10"
          >
            <Download className="h-4 w-4" aria-hidden />
            Download PDF
          </a>
        </div>
      </div>

      <div
        ref={containerRef}
        className="relative flex min-h-[min(62vh,640px)] items-center justify-center overflow-hidden rounded-xl border border-[hsl(var(--border-light))] bg-[linear-gradient(165deg,hsl(var(--surface-light-100))_0%,hsl(var(--surface-light-50))_48%,hsl(var(--brand-purple-700)/0.06)_100%)] p-2 shadow-[0_24px_60px_rgba(26,22,51,0.12)] sm:min-h-[min(78vh,820px)] sm:rounded-[1.5rem] sm:p-4 md:p-6"
      >
        {(isRendering || numPages === 0) && !loadError ? (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 rounded-[1.25rem] bg-white/80 backdrop-blur-sm">
            <Loader2 className="h-8 w-8 animate-spin text-[hsl(var(--brand-purple-700))]" aria-hidden />
            <p className="text-sm font-medium text-on-light-secondary">Loading {title}…</p>
          </div>
        ) : null}

        {loadError ? (
          <p className="px-6 text-center text-sm text-on-light-secondary">{loadError}</p>
        ) : (
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoad}
            onLoadError={onDocumentError}
            loading=""
            className="flex w-full justify-center"
          >
            {numPages > 0 ? (
              <HTMLFlipBook
                ref={bookRef}
                width={pageWidth}
                height={pageHeight}
                size="stretch"
                minWidth={isMobile ? 200 : 260}
                maxWidth={isMobile ? 360 : 520}
                minHeight={isMobile ? 280 : 368}
                maxHeight={isMobile ? 520 : 736}
                showCover
                mobileScrollSupport
                usePortrait
                drawShadow
                flippingTime={isMobile ? 550 : 700}
                useMouseEvents
                showPageCorners={!isMobile}
                className="tlg-flipbook mx-auto max-w-full"
                onFlip={handleFlip}
              >
                {pageNumbers.map((pageNumber) => (
                  <FlipPage key={pageNumber}>
                    <Page
                      pageNumber={pageNumber}
                      width={pageWidth}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                      loading={
                        <div className="flex h-full min-h-[320px] items-center justify-center">
                          <Loader2 className="h-6 w-6 animate-spin text-[hsl(var(--brand-purple-700)/0.6)]" />
                        </div>
                      }
                    />
                  </FlipPage>
                ))}
              </HTMLFlipBook>
            ) : null}
          </Document>
        )}
      </div>

      <p className="mt-3 px-1 text-center text-xs leading-relaxed text-on-light-muted">
        {isMobile ? "Tap Prev / Next or swipe to turn pages." : "Drag page corners or use Prev / Next to flip through the issue."}
      </p>
    </div>
  );
};

export default PdfFlipbookViewer;
