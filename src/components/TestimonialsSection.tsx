import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { blurReveal, fadeOnly } from "@/lib/animationVariants";

const AUTO_ADVANCE_MS = 5000;

const defaultTestimonials = [
  {
    quote: "UVAN bridged language and operations seamlessly. They were our hands, ears, and voice in India.",
    author: "Operations Director",
    company: "Japanese Manufacturing Client",
  },
  {
    quote: "Reliable, precise, and deeply professional. UVAN understood both our business and the local context.",
    author: "Procurement Lead",
    company: "Tata Autocomp",
  },
  {
    quote: "UVAN's interpretation team made our cross-border meetings effortless. Strategic value beyond translation.",
    author: "Senior Executive",
    company: "Groupo Antolin",
  },
  {
    quote: "Speed, accuracy, and cultural depth. UVAN delivered exactly what we needed for global market research.",
    author: "Research Director",
    company: "Markets & Markets",
  },
  {
    quote: "From negotiations to documentation, UVAN handled every detail with care and precision.",
    author: "Founder",
    company: "Seasonz International",
  },
];

const TestimonialsSection = () => {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion() ?? false;
  const testimonials = t("home.testimonials.items", {
    returnObjects: true,
    defaultValue: defaultTestimonials,
  }) as Array<{ quote: string; author: string; company: string }>;
  const [index, setIndex] = useState(0);
  const currentTestimonial = testimonials[index];
  const quoteVariant = reduceMotion ? fadeOnly : blurReveal;

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (reduceMotion || testimonials.length <= 1) return;
    const timer = window.setInterval(next, AUTO_ADVANCE_MS);
    return () => window.clearInterval(timer);
  }, [index, next, reduceMotion, testimonials.length]);

  return (
    <section id="testimonials" className="relative scroll-mt-28 overflow-hidden py-5 theme-section-soft sm:py-6 lg:py-8">
      <div className="glow-orb glow-orb-purple pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 opacity-8" />
      <div className="glow-orb glow-orb-gold pointer-events-none absolute -top-12 right-10 h-[260px] w-[260px] opacity-8" />
      <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-14" />

      <div className="container relative z-10 mx-auto px-5 sm:px-6">
        <motion.div
          className="mb-6 text-center sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-2xl font-bold text-on-light sm:text-3xl lg:text-4xl">
            {t("home.testimonials.titlePrefix")}
            {t("home.testimonials.titleHighlight") ? (
              <>
                {" "}
                <span className="italic text-[hsl(var(--brand-purple-700))]">
                  {t("home.testimonials.titleHighlight")}
                </span>
              </>
            ) : null}
          </h2>
        </motion.div>

        <div className="mx-auto flex max-w-5xl flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-5 lg:gap-6">
          <div className="relative min-w-0 flex-1 rounded-2xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-card)/0.92)] px-5 py-7 shadow-[0_12px_40px_-16px_rgba(26,22,51,0.12)] sm:rounded-3xl sm:px-8 sm:py-8 lg:px-10 lg:py-9">
            <Quote className="mx-auto mb-4 h-12 w-12 text-[hsl(var(--brand-purple-700)/0.22)]" aria-hidden />

            {!reduceMotion ? (
              <div className="mb-4 h-1 overflow-hidden rounded-full bg-[hsl(var(--brand-purple-700)/0.12)]">
                <motion.div
                  key={index}
                  className="h-full origin-left rounded-full bg-[hsl(var(--brand-purple-700))]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: AUTO_ADVANCE_MS / 1000, ease: "linear" }}
                />
              </div>
            ) : null}

            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial="hidden"
                animate="visible"
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -20, filter: "blur(8px)" }}
                variants={quoteVariant}
                className="text-center"
              >
                <p className="mb-5 font-serif text-xl font-medium italic leading-relaxed text-[hsl(var(--text-on-light))] sm:mb-6 sm:text-2xl lg:text-3xl">
                  &ldquo;{currentTestimonial.quote}&rdquo;
                </p>
                <footer>
                  <p className="text-base font-semibold text-[hsl(var(--brand-purple-700))]">{currentTestimonial.author}</p>
                  <p className="text-sm tracking-wide text-[hsl(var(--text-on-light-muted))]">{currentTestimonial.company}</p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div
            className="flex shrink-0 items-center justify-center gap-5 sm:flex-col sm:gap-3"
            aria-label={t("home.testimonials.titlePrefix", { defaultValue: "Testimonials" })}
          >
            <motion.button
              type="button"
              onClick={prev}
              whileHover={{ scale: 1.1, x: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[hsl(var(--border-light))] bg-white text-[hsl(var(--brand-purple-700))] shadow-sm transition-all hover:bg-[hsl(var(--brand-purple-700))] hover:text-white"
              aria-label={t("home.testimonials.prev")}
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </motion.button>

            <div className="flex gap-2 sm:flex-col sm:gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`rounded-full transition-all duration-500 sm:h-2 ${
                    i === index
                      ? "h-2 w-8 bg-[hsl(var(--brand-purple-700))] sm:w-2 sm:h-8"
                      : "h-2 w-2 bg-[hsl(var(--brand-purple-700)/0.3)]"
                  }`}
                  aria-label={`${t("home.testimonials.goTo")} ${i + 1}`}
                />
              ))}
            </div>

            <motion.button
              type="button"
              onClick={next}
              whileHover={{ scale: 1.1, x: 3 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[hsl(var(--border-light))] bg-white text-[hsl(var(--brand-purple-700))] shadow-sm transition-all hover:bg-[hsl(var(--brand-purple-700))] hover:text-white"
              aria-label={t("home.testimonials.next")}
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
