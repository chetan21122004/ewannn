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
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Loader2,
  Maximize2,
  Minimize2,
} from "lucide-react";
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
  const viewerRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<FlipBookRef>(null);
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageWidth, setPageWidth] = useState(420);
  const [isMobile, setIsMobile] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [isRendering, setIsRendering] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

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
  }, [isFullscreen]);

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

  const toggleFullscreen = useCallback(async () => {
    const node = viewerRef.current;
    if (!node) return;

    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await node.requestFullscreen();
      }
    } catch (error) {
      console.error("Fullscreen toggle failed:", error);
    }
  }, []);

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === viewerRef.current);
    };

    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  const pageNumbers = useMemo(
    () => Array.from({ length: numPages }, (_, index) => index + 1),
    [numPages],
  );

  const controlButtonClass =
    "inline-flex min-h-10 w-full items-center justify-center gap-1.5 rounded-xl border border-[hsl(var(--border-light-strong))] bg-white px-2 py-2 text-xs font-semibold text-on-light transition hover:bg-[hsl(var(--surface-light-100))] disabled:cursor-not-allowed disabled:opacity-45 sm:min-h-11 sm:rounded-full sm:px-3 sm:text-sm";

  return (
    <div className={cn("mx-auto w-full max-w-5xl overflow-hidden", className)}>
      <div
        ref={viewerRef}
        className={cn(
          "tlg-pdf-viewer flex overflow-hidden rounded-xl border border-[hsl(var(--border-light))] bg-[linear-gradient(165deg,hsl(var(--surface-light-100))_0%,hsl(var(--surface-light-50))_48%,hsl(var(--brand-purple-700)/0.06)_100%)] shadow-[0_24px_60px_rgba(26,22,51,0.12)] sm:rounded-[1.5rem]",
          isFullscreen && "h-screen w-screen rounded-none border-0 shadow-none",
        )}
      >
        <div
          ref={containerRef}
          className={cn(
            "relative flex min-h-[min(62vh,640px)] min-w-0 flex-1 items-center justify-center overflow-hidden p-2 sm:min-h-[min(78vh,820px)] sm:p-4 md:p-6",
            isFullscreen && "min-h-0 h-full",
          )}
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

        <aside
          className="flex w-[4.75rem] shrink-0 flex-col justify-center gap-2 border-l border-[hsl(var(--border-light))] bg-white/85 p-2 backdrop-blur-sm sm:w-[9.5rem] sm:gap-2.5 sm:p-3"
          aria-label="PDF viewer controls"
        >
          <p className="px-0.5 text-center text-[10px] font-medium leading-tight text-on-light-secondary sm:text-xs">
            {numPages > 0 ? (
              <>
                Page {Math.min(currentPage + 1, numPages)} of {numPages}
              </>
            ) : (
              "Loading…"
            )}
          </p>

          <button
            type="button"
            onClick={flipPrev}
            disabled={currentPage <= 0 || isRendering}
            className={controlButtonClass}
            aria-label="Previous page"
          >
            <ChevronLeft className="h-4 w-4 shrink-0" aria-hidden />
            <span className="hidden sm:inline">Prev</span>
          </button>

          <button
            type="button"
            onClick={flipNext}
            disabled={currentPage >= numPages - 1 || isRendering}
            className={controlButtonClass}
            aria-label="Next page"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="h-4 w-4 shrink-0" aria-hidden />
          </button>

          <a
            href={pdfUrl}
            download
            className="inline-flex min-h-10 w-full items-center justify-center gap-1.5 rounded-xl bg-[hsl(var(--brand-navy-950))] px-2 py-2 text-xs font-semibold text-white transition hover:brightness-110 sm:min-h-11 sm:rounded-full sm:px-3 sm:text-sm"
            aria-label="Download PDF"
          >
            <Download className="h-4 w-4 shrink-0" aria-hidden />
            <span className="hidden sm:inline">Download</span>
          </a>

          <button
            type="button"
            onClick={toggleFullscreen}
            className={controlButtonClass}
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            {isFullscreen ? (
              <Minimize2 className="h-4 w-4 shrink-0" aria-hidden />
            ) : (
              <Maximize2 className="h-4 w-4 shrink-0" aria-hidden />
            )}
            <span className="hidden sm:inline">{isFullscreen ? "Exit" : "Fullscreen"}</span>
          </button>
        </aside>
      </div>

      <p className="mt-3 px-1 text-center text-xs leading-relaxed text-on-light-muted">
        {isMobile
          ? "Use the side controls or swipe to turn pages."
          : "Drag page corners, use the side controls, or open fullscreen to read the issue."}
      </p>
    </div>
  );
};

export default PdfFlipbookViewer;
