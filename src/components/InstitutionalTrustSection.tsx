import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ZoomIn } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { blurReveal, fadeOnly } from "@/lib/animationVariants";

type ConsulateLetter = {
  src: string;
  alt: string;
  label: string;
};

const defaultConsulateLetters: ConsulateLetter[] = [
  {
    src: "/Ewan-Consulate-experience-letter-page-001-min.jpg",
    alt: "Chinese Consulate appreciation letter page 1",
    label: "Page 1 · Chinese Original",
  },
  {
    src: "/Ewan-Consulate-experience-letter-page-002-min.jpg",
    alt: "Chinese Consulate appreciation letter page 2",
    label: "Page 2 · English Translation",
  },
];

const InstitutionalTrustSection = () => {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion() ?? false;
  const [activeLetter, setActiveLetter] = useState<ConsulateLetter | null>(null);

  const consulateLetters = t("home.institutionalTrust.letters", {
    returnObjects: true,
    defaultValue: defaultConsulateLetters,
  }) as ConsulateLetter[];

  const headerVariant = reduceMotion ? fadeOnly : blurReveal;

  return (
    <section className="relative overflow-hidden px-6 py-5 theme-section-soft lg:py-10">
      <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.08]" />

      <div className="container relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="theme-card-light card-shine overflow-hidden rounded-3xl border border-[hsl(var(--border-light))]"
        >
          <div className="grid lg:grid-cols-12">
            <div className="border-b border-[hsl(var(--border-light))] p-8 lg:col-span-5 lg:border-b-0 lg:border-r lg:p-10">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-[hsl(var(--border-light))] bg-white p-3 shadow-sm">
                <img
                  src="/page-assets/cn-flag.png"
                  alt="Flag of the People's Republic of China"
                  loading="lazy"
                  className="max-h-12 w-full object-contain"
                />
              </div>

              <span className="inline-flex rounded-full bg-[hsl(var(--brand-gold-500)/0.14)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-gold-600))]">
                {t("home.institutionalTrust.featuredBadge", { defaultValue: "Government Recognition" })}
              </span>

              <motion.h2
                className="mt-4 font-serif text-2xl font-bold leading-snug text-[hsl(var(--brand-navy-950))] sm:text-3xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={headerVariant}
              >
                {t("home.institutionalTrust.titleHighlight")}
              </motion.h2>

              <motion.p
                className="mt-4 text-sm leading-relaxed text-on-light-secondary sm:text-base"
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 }}
              >
                {t("home.institutionalTrust.subtitle")}
              </motion.p>
            </div>

            <div className="grid gap-4 p-6 sm:grid-cols-2 lg:col-span-7 lg:p-8">
              {consulateLetters.map((letter, index) => (
                <motion.figure
                  key={letter.src}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))]"
                >
                  <button
                    type="button"
                    onClick={() => setActiveLetter(letter)}
                    className="group relative block w-full cursor-zoom-in text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-purple-700))] focus-visible:ring-offset-2"
                    aria-label={`${t("home.institutionalTrust.viewLetter", { defaultValue: "View full letter" })} - ${letter.label}`}
                  >
                    <div className="p-3 sm:p-4">
                      <img
                        src={letter.src}
                        alt={letter.alt}
                        loading="lazy"
                        className="w-full rounded-xl border border-[hsl(var(--border-light-strong))] object-cover transition duration-300 group-hover:brightness-[0.97]"
                      />
                      <span className="pointer-events-none absolute inset-3 flex items-center justify-center rounded-xl bg-[hsl(var(--brand-navy-950)/0.45)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:inset-4">
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--brand-navy-950))]">
                          <ZoomIn className="h-3.5 w-3.5" aria-hidden />
                          {t("home.institutionalTrust.viewLetter", { defaultValue: "View full letter" })}
                        </span>
                      </span>
                    </div>
                  </button>
                  <figcaption className="border-t border-[hsl(var(--border-light))] px-4 py-3 text-center text-[10px] font-bold uppercase tracking-[0.14em] text-on-light-muted">
                    {letter.label}
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </motion.div>
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
    </section>
  );
};

export default InstitutionalTrustSection;
