import "@/lib/pdfWorker";
import { useEffect, useRef, useState } from "react";
import { Document, Page } from "react-pdf";
import { FileText } from "lucide-react";
import { cn } from "@/lib/utils";

type TlgPdfCoverThumbnailProps = {
  pdfUrl: string;
  title: string;
  className?: string;
};

const TlgPdfCoverThumbnail = ({ pdfUrl, title, className }: TlgPdfCoverThumbnailProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const [failed, setFailed] = useState(false);

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

  return (
    <div
      ref={containerRef}
      className={cn("relative h-full w-full overflow-hidden bg-white", className)}
      aria-hidden
    >
      {failed ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[hsl(var(--surface-light-100))] px-3 text-center">
          <FileText className="h-8 w-8 text-on-light-muted" aria-hidden />
          <span className="text-[10px] font-medium text-on-light-muted">Cover preview unavailable</span>
        </div>
      ) : isVisible && containerWidth > 0 ? (
        <Document
          file={pdfUrl}
          onLoadError={() => setFailed(true)}
          loading={<div className="absolute inset-0 animate-pulse bg-[hsl(var(--surface-light-100))]" />}
          className="absolute inset-0 h-full w-full"
        >
          <Page
            pageNumber={1}
            width={containerWidth}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            onRenderError={() => setFailed(true)}
            loading={<div className="absolute inset-0 animate-pulse bg-[hsl(var(--surface-light-100))]" />}
            className="!absolute !inset-0 !m-0 !h-full !w-full !min-h-0 !min-w-0 !bg-transparent [&_.react-pdf__Page__canvas]:!absolute [&_.react-pdf__Page__canvas]:!inset-0 [&_.react-pdf__Page__canvas]:!h-full [&_.react-pdf__Page__canvas]:!w-full [&_.react-pdf__Page__canvas]:object-cover [&_.react-pdf__Page__canvas]:object-top"
          />
        </Document>
      ) : (
        <div className="absolute inset-0 animate-pulse bg-[hsl(var(--surface-light-100))]" />
      )}
      <span className="sr-only">{title} cover</span>
    </div>
  );
};

export default TlgPdfCoverThumbnail;
