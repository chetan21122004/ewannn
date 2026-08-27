import { useState } from "react";
import { ZoomIn } from "lucide-react";
import GazetteCoverImage, { encodePublicAssetPath } from "@/components/language-gazette/GazetteCoverImage";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type GazetteComicImageStackProps = {
  images: string[];
  label: string;
  className?: string;
};

const GazetteComicImageStack = ({ images, label, className }: GazetteComicImageStackProps) => {
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <div className={cn("leading-none", className)}>
        <p className="border-b border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] py-2 text-center text-xs font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-gold-600))]">
          {label}
        </p>
        <div className="leading-none">
          {images.map((src, index) => {
            const alt = `${label} - episode ${index + 1}`;

            return (
              <figure key={src} className="m-0 border-0 p-0">
                <button
                  type="button"
                  onClick={() => setActiveImage({ src, alt })}
                  className="group relative block w-full cursor-zoom-in border-0 bg-transparent p-0 text-left leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[hsl(var(--brand-purple-500))]"
                  aria-label={`Open ${alt} in full size`}
                >
                  <GazetteCoverImage src={src} alt={alt} className="block w-full max-w-full align-top" />
                  <span className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-[hsl(var(--brand-navy-950)/0.72)] px-3 py-1.5 text-[11px] font-semibold text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    <ZoomIn className="h-3.5 w-3.5" aria-hidden />
                    View full size
                  </span>
                </button>
              </figure>
            );
          })}
        </div>
      </div>

      <Dialog open={activeImage !== null} onOpenChange={(open) => !open && setActiveImage(null)}>
        <DialogContent className="flex max-h-[min(96vh,980px)] max-w-[min(96vw,920px)] flex-col gap-0 overflow-hidden rounded-2xl border-[hsl(var(--border-light))] bg-[hsl(var(--brand-navy-950))] p-0 sm:rounded-3xl">
          <DialogTitle className="sr-only">{activeImage?.alt ?? "Comic panel"}</DialogTitle>
          <DialogDescription className="sr-only">Full-size comic panel preview</DialogDescription>
          <div className="max-h-[min(96vh,980px)] overflow-auto bg-[hsl(var(--brand-navy-950))] p-3 sm:p-4">
            {activeImage ? (
              <img
                src={encodePublicAssetPath(activeImage.src)}
                alt={activeImage.alt}
                className="mx-auto block h-auto max-h-[min(92vh,940px)] w-full max-w-full object-contain"
              />
            ) : null}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GazetteComicImageStack;
