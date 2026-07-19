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

  /** Height relative to width. Default A4 portrait (~1.414). Use 9/16 for 16:9 slide decks. */

  pageAspectRatio?: number;

};



const fitSlideDimensions = (availWidth: number, availHeight: number, aspectHeightOverWidth: number) => {

  const safeWidth = Math.max(availWidth, 1);

  const safeHeight = Math.max(availHeight, 1);



  let width = safeWidth;

  let height = width * aspectHeightOverWidth;



  if (height > safeHeight) {

    height = safeHeight;

    width = height / aspectHeightOverWidth;

  }



  return {

    width: Math.floor(Math.max(width, 200)),

    height: Math.floor(Math.max(height, 112)),

  };

};



const PdfFlipbookViewer = ({

  pdfUrl,

  title,

  className,

  pageAspectRatio = 1.414,

}: PdfFlipbookViewerProps) => {

  const containerRef = useRef<HTMLDivElement>(null);

  const viewerRef = useRef<HTMLDivElement>(null);

  const bookRef = useRef<FlipBookRef>(null);

  const [numPages, setNumPages] = useState(0);

  const [currentPage, setCurrentPage] = useState(0);

  const [pageWidth, setPageWidth] = useState(420);

  const [pageHeight, setPageHeight] = useState(236);

  const [isMobile, setIsMobile] = useState(false);

  const [loadError, setLoadError] = useState<string | null>(null);

  const [isRendering, setIsRendering] = useState(true);

  const [isFullscreen, setIsFullscreen] = useState(false);



  const isSlideFormat = pageAspectRatio < 1;



  useEffect(() => {

    const node = containerRef.current;

    if (!node) return;



    const updateSize = () => {

      const width = node.clientWidth;

      const height = node.clientHeight;

      const mobile = width < 640;

      setIsMobile(mobile);



      if (isSlideFormat) {

        const padX = mobile ? 12 : 24;

        const padY = mobile ? 12 : 24;

        const fitted = fitSlideDimensions(width - padX, height - padY, pageAspectRatio);

        setPageWidth(fitted.width);

        setPageHeight(fitted.height);

        return;

      }



      const next = mobile

        ? Math.min(Math.max(Math.floor(width - 16), 200), 360)

        : Math.min(Math.max(Math.floor(width / 2) - 8, 260), 520);

      setPageWidth(next);

      setPageHeight(Math.round(next * pageAspectRatio));

    };



    updateSize();

    const observer = new ResizeObserver(updateSize);

    observer.observe(node);

    return () => observer.disconnect();

  }, [isFullscreen, isSlideFormat, pageAspectRatio]);



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



  const flipPrev = () => {

    if (isSlideFormat) {

      setCurrentPage((page) => Math.max(page - 1, 0));

      return;

    }

    bookRef.current?.pageFlip().flipPrev();

  };



  const flipNext = () => {

    if (isSlideFormat) {

      setCurrentPage((page) => Math.min(page + 1, Math.max(numPages - 1, 0)));

      return;

    }

    bookRef.current?.pageFlip().flipNext();

  };



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



  const shouldRenderPage = useCallback(

    (pageNumber: number) => Math.abs(pageNumber - 1 - currentPage) <= 2,

    [currentPage],

  );



  const controlButtonClass =

    "inline-flex min-h-10 w-full items-center justify-center gap-1.5 rounded-xl border border-[hsl(var(--border-light-strong))] bg-white px-2 py-2 text-xs font-semibold text-on-light transition hover:bg-[hsl(var(--surface-light-100))] disabled:cursor-not-allowed disabled:opacity-45 sm:min-h-11 sm:rounded-full sm:px-3 sm:text-sm";



  const viewerShellClass = cn(

    "tlg-pdf-viewer flex overflow-hidden rounded-xl border border-[hsl(var(--border-light))] bg-[linear-gradient(165deg,hsl(var(--surface-light-100))_0%,hsl(var(--surface-light-50))_48%,hsl(var(--brand-purple-700)/0.06)_100%)] shadow-[0_24px_60px_rgba(26,22,51,0.12)] sm:rounded-[1.5rem]",

    isSlideFormat && "min-h-[min(52vh,420px)] sm:min-h-[min(58vh,480px)]",

    isFullscreen && "h-screen w-screen rounded-none border-0 shadow-none",

  );



  const stageClass = cn(

    "relative flex min-w-0 flex-1 items-center justify-center overflow-hidden p-2 sm:p-4 md:p-5",

    isSlideFormat ? "min-h-[min(48vh,380px)] sm:min-h-[min(54vh,440px)]" : "min-h-[min(62vh,640px)] sm:min-h-[min(78vh,820px)]",

    isFullscreen && "min-h-0 h-full",

  );



  return (

    <div className={cn("mx-auto flex h-full w-full max-w-5xl flex-col overflow-hidden", className)}>

      <div ref={viewerRef} className={cn(viewerShellClass, isSlideFormat && "flex-1")}>

        <div ref={containerRef} className={stageClass}>

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

              className="flex w-full items-center justify-center"

            >

              {numPages > 0 && isSlideFormat ? (

                <div

                  className="relative overflow-hidden rounded-lg border border-[hsl(var(--border-light))] bg-white shadow-[0_12px_40px_rgba(26,22,51,0.14)]"

                  style={{ width: pageWidth, height: pageHeight }}

                >

                  <Page

                    key={currentPage}

                    pageNumber={currentPage + 1}

                    width={pageWidth}

                    renderTextLayer={false}

                    renderAnnotationLayer={false}

                    loading={

                      <div className="flex h-full items-center justify-center bg-[hsl(var(--surface-light-50))]">

                        <Loader2 className="h-6 w-6 animate-spin text-[hsl(var(--brand-purple-700)/0.6)]" />

                      </div>

                    }

                    className="!m-0 [&_.react-pdf__Page__canvas]:mx-auto [&_.react-pdf__Page__canvas]:max-h-full [&_.react-pdf__Page__canvas]:w-full [&_.react-pdf__Page__canvas]:object-contain"

                  />

                </div>

              ) : null}



              {numPages > 0 && !isSlideFormat ? (

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

                  flippingTime={isMobile ? 420 : 520}

                  useMouseEvents

                  showPageCorners={!isMobile}

                  className="tlg-flipbook mx-auto max-w-full"

                  onFlip={handleFlip}

                >

                  {pageNumbers.map((pageNumber) => (

                    <FlipPage key={pageNumber}>

                      {shouldRenderPage(pageNumber) ? (

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

                      ) : (

                        <div className="h-full min-h-[320px] w-full bg-[hsl(var(--surface-light-50))]" aria-hidden />

                      )}

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



      <p className="mt-3 shrink-0 px-1 text-center text-xs leading-relaxed text-on-light-muted">

        {isSlideFormat

          ? isMobile

            ? "Use the side controls to move through slides."

            : "Use the side controls or fullscreen to read the slide deck."

          : isMobile

            ? "Use the side controls or swipe to turn pages."

            : "Drag page corners, use the side controls, or open fullscreen to read the issue."}

      </p>

    </div>

  );

};



export default PdfFlipbookViewer;

