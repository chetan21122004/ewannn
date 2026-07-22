import { useState } from "react";
import { motion } from "framer-motion";
import { ZoomIn } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

export type ConsulateLetter = {
  src: string;
  alt: string;
  label: string;
};

type ConsulateLetterGalleryProps = {
  letters: ConsulateLetter[];
  viewLabel?: string;
  className?: string;
};

const ConsulateLetterGallery = ({
  letters,
  viewLabel = "View full letter",
  className = "grid grid-cols-2 gap-2 p-3 sm:gap-4 sm:p-6 lg:col-span-7 lg:p-8",
}: ConsulateLetterGalleryProps) => {
  const [activeLetter, setActiveLetter] = useState<ConsulateLetter | null>(null);

  return (
    <>
      <div className={className}>
        {letters.map((letter, index) => (
          <motion.figure
            key={letter.src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="overflow-hidden rounded-xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] sm:rounded-2xl"
          >
            <button
              type="button"
              onClick={() => setActiveLetter(letter)}
              className="group relative block w-full cursor-zoom-in text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-purple-700))] focus-visible:ring-offset-2"
              aria-label={`${viewLabel} - ${letter.label}`}
            >
              <div className="p-1.5 sm:p-4">
                <img
                  src={letter.src}
                  alt={letter.alt}
                  loading="lazy"
                  className="w-full rounded-lg border border-[hsl(var(--border-light-strong))] object-cover transition duration-300 group-hover:brightness-[0.97] sm:rounded-xl"
                />
                <span className="pointer-events-none absolute inset-1.5 flex items-center justify-center rounded-lg bg-[hsl(var(--brand-navy-950)/0.45)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 sm:inset-4 sm:rounded-xl">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[hsl(var(--brand-navy-950))] sm:px-3 sm:py-1.5 sm:text-[10px] sm:tracking-[0.14em]">
                    <ZoomIn className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden />
                    {viewLabel}
                  </span>
                </span>
              </div>
            </button>
            <figcaption className="border-t border-[hsl(var(--border-light))] px-2 py-1.5 text-center text-[8px] font-bold uppercase leading-tight tracking-[0.12em] text-on-light-muted sm:px-4 sm:py-3 sm:text-[10px] sm:tracking-[0.14em]">
              {letter.label}
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <Dialog open={activeLetter !== null} onOpenChange={(open) => !open && setActiveLetter(null)}>
        <DialogContent className="max-h-[92vh] max-w-4xl overflow-y-auto border-[hsl(var(--border-light))] bg-white p-3 sm:p-5">
          {activeLetter ? (
            <>
              <DialogTitle className="font-serif text-lg font-bold text-[hsl(var(--brand-navy-950))] sm:text-xl">
                {activeLetter.label}
              </DialogTitle>
              <DialogDescription className="sr-only">{activeLetter.alt}</DialogDescription>
              <img
                src={activeLetter.src}
                alt={activeLetter.alt}
                className="mt-2 w-full rounded-xl border border-[hsl(var(--border-light))] object-contain"
              />
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ConsulateLetterGallery;
