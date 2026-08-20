import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const AUTO_MS = 4000;
const GAP = 20;

const testimonials = [
  {
    quote: "We highly appreciate Soham's efforts as our point of contact, delivering quality service throughout the project. We look forward to continuing our collaboration for Chinese and Japanese interactions.",
    company: "Tata Autocomp Systems Ltd",
    domain: "tataautocomp.com",
    initials: "TA",
    accent: "gold" as const,
  },
  {
    quote: "I commend Soham for the quality of work and dedication throughout the project. I highly recommend your services and wish you all the best in your future endeavors.",
    company: "Antolin (Grupo Antolin)",
    domain: "antolin.com",
    initials: "GA",
    accent: "purple" as const,
  },
  {
    quote: "We appreciate Mr. Soham Kakade and the team for their excellent support in market research, interpretation, and translation, particularly in Chinese and South Asian languages.",
    company: "MarketsandMarkets Research",
    domain: "marketsandmarkets.com",
    initials: "MM",
    accent: "navy" as const,
  },
  {
    quote: "We applaud Mr. Soham Kakade's devotion, Chinese language proficiency, and hard work. We look forward to your organisation working as a Communication Partner in our future initiatives.",
    company: "Seasonz International",
    domain: "seasonz.in",
    initials: "SI",
    accent: "gold" as const,
  },
  {
    quote: "We appreciate your professionalism in completing our Chinese language interpretation and translation projects on time, and your invaluable support in selecting Mandarin and Cantonese candidates.",
    company: "Sakon",
    domain: "sakon.com",
    initials: "SK",
    accent: "purple" as const,
  },
  {
    quote: "Ewan Business Solutions demonstrated excellent project management, meeting deadlines and ensuring accurate translations with great attention to detail. We highly recommend their language localization expertise.",
    company: "Integral Technical Group, LLC",
    domain: "integraltechnicalgroup.com",
    initials: "IT",
    accent: "navy" as const,
  },
  {
    quote: "I am really grateful to see Ewan's efforts and professionalism in helping businesses like mine take their films and media content beyond boundaries. Congratulations on your hard work and devotion.",
    company: "Indian Magic Eye",
    domain: "indianmagiceye.com",
    initials: "IM",
    accent: "gold" as const,
  },
  {
    quote: "I greatly appreciate the quality you delivered and your efforts as our point of contact. We confidently recommend your services to others for Chinese and Japanese interactions.",
    company: "Tomsa Destil India Pvt Ltd",
    domain: "tomsadestil.com",
    initials: "TD",
    accent: "purple" as const,
  },
  {
    quote: "We commend your professional and efficient completion of our Chinese language interpretation project. We look forward to continuing our partnership for all future Chinese interactions.",
    company: "Mittal Happy Cows Dairy Farms",
    domain: "",
    initials: "MH",
    accent: "navy" as const,
  },
  {
    quote: "Soham Kakade demonstrated punctuality, positivity, and strong performance on the ESG Research Project as Consultant-Mandarin. We wish him the best in his future endeavors.",
    company: "SG Analytics Pvt. Ltd",
    domain: "sganalytics.com",
    initials: "SG",
    accent: "gold" as const,
  },
  {
    quote: "We sincerely thank you for motivating our students during the 'Career Opportunities in Foreign Language' webinar. Your guidance was highly appreciated and we look forward to a long-term association.",
    company: "JSPM's JSIMR",
    domain: "jspmjsimr.edu.in",
    initials: "JS",
    accent: "purple" as const,
  },
  {
    quote: "I appreciate Ewan Business Solutions for completing the project on time with professionalism and dedication. Congratulations on your hard work, and I wish you continued success.",
    company: "Deshpande Toys PVT LTD",
    domain: "",
    initials: "DT",
    accent: "navy" as const,
  },
];

const accentBar: Record<string, string> = {
  gold: "bg-[hsl(var(--brand-gold-500))]",
  purple: "bg-[hsl(var(--brand-purple-600))]",
  navy: "bg-[hsl(var(--brand-navy-800))]",
};
const accentQuote: Record<string, string> = {
  gold: "text-[hsl(var(--brand-gold-400)/0.18)]",
  purple: "text-[hsl(var(--brand-purple-500)/0.13)]",
  navy: "text-[hsl(var(--brand-navy-900)/0.08)]",
};
const accentInitials: Record<string, string> = {
  gold: "bg-[hsl(var(--brand-gold-500)/0.12)] text-[hsl(var(--brand-gold-700))]",
  purple: "bg-[hsl(var(--brand-purple-700)/0.10)] text-[hsl(var(--brand-purple-700))]",
  navy: "bg-[hsl(var(--brand-navy-900)/0.08)] text-[hsl(var(--brand-navy-800))]",
};

/* tries Clearbit → Google Favicon → initials badge */
function CompanyLogo({
  domain, initials, company, accent,
}: {
  domain: string; initials: string; company: string; accent: string;
}) {
  const sources = domain
    ? [
        `https://logo.clearbit.com/${domain}`,
        `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
      ]
    : [];
  const [srcIdx, setSrcIdx] = useState(0);

  if (!domain || srcIdx >= sources.length) {
    return (
      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[11px] font-extrabold ${accentInitials[accent]}`}>
        {initials}
      </span>
    );
  }

  return (
    <img
      src={sources[srcIdx]}
      alt={company}
      onError={() => setSrcIdx((i) => i + 1)}
      className="h-8 w-auto max-w-[100px] object-contain opacity-80"
    />
  );
}

const TestimonialsSection = () => {
  const reduceMotion = useReducedMotion() ?? false;
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [visible, setVisible] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);

  /* measure container to get exact card width */
  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.offsetWidth;
      const vis = w < 640 ? 1 : w < 1024 ? 2 : 3;
      setVisible(vis);
      setCardWidth((w - (vis - 1) * GAP) / vis);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const maxIndex = testimonials.length - visible;

  const next = useCallback(() => {
    setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  }, [maxIndex]);

  /* clamp if window resizes */
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  /* auto-advance */
  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(next, AUTO_MS);
    return () => window.clearInterval(id);
  }, [next, reduceMotion]);

  const xOffset = cardWidth ? -(index * (cardWidth + GAP)) : 0;

  return (
    <section
      id="testimonials"
      className="relative scroll-mt-28 overflow-hidden py-12 theme-section-soft sm:py-14 lg:py-16"
    >
      <div className="glow-orb glow-orb-purple pointer-events-none absolute left-1/4 top-1/2 h-[380px] w-[380px] -translate-y-1/2 opacity-[0.07]" />
      <div className="glow-orb glow-orb-gold pointer-events-none absolute right-10 top-0 h-[240px] w-[240px] opacity-[0.07]" />
      <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.12]" />

      <div className="container relative z-10 mx-auto px-5 sm:px-6">

        {/* header row */}
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.26em] text-[hsl(var(--brand-purple-700))]">
              Testimonials
            </p>
            <h2 className="font-serif text-2xl font-extrabold leading-tight text-[hsl(var(--brand-navy-950))] sm:text-3xl lg:text-4xl">
              What our{" "}
              <span className="italic text-[hsl(var(--brand-gold-600))]">clients say</span>
            </h2>
          </motion.div>

          {/* prev / next */}
          <div className="flex items-center gap-2">
            <button
              type="button" onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[hsl(var(--border-light))] bg-white text-[hsl(var(--brand-purple-700))] shadow-sm transition hover:bg-[hsl(var(--brand-purple-700))] hover:text-white"
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button" onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[hsl(var(--border-light))] bg-white text-[hsl(var(--brand-purple-700))] shadow-sm transition hover:bg-[hsl(var(--brand-purple-700))] hover:text-white"
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* track */}
        <div ref={containerRef} className="overflow-hidden">
          <motion.div
            className="flex"
            style={{ gap: GAP }}
            animate={{ x: xOffset }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { type: "spring", stiffness: 280, damping: 32, mass: 0.9 }
            }
          >
            {testimonials.map((item, i) => (
              <div
                key={i}
                style={{ width: cardWidth || "33.333%", flexShrink: 0 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-white shadow-[0_2px_16px_hsl(var(--brand-navy-950)/0.06)] transition duration-300 hover:shadow-[0_8px_32px_hsl(var(--brand-navy-950)/0.11)]"
              >
                {/* top accent bar */}
                <div className={`h-1 w-full ${accentBar[item.accent]}`} />

                <div className="flex flex-1 flex-col p-6">
                  {/* stars */}
                  <div className="mb-4 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className="h-3.5 w-3.5 fill-[hsl(var(--brand-gold-500))] text-[hsl(var(--brand-gold-500))]"
                        aria-hidden
                      />
                    ))}
                  </div>

                  {/* decorative quote mark */}
                  <span
                    className={`pointer-events-none absolute -top-2 right-4 select-none font-serif text-[7rem] leading-none ${accentQuote[item.accent]}`}
                    aria-hidden
                  >
                    &ldquo;
                  </span>

                  {/* quote */}
                  <p className="relative z-10 flex-1 text-sm leading-[1.75] text-on-light-secondary">
                    {item.quote}
                  </p>

                  {/* footer */}
                  <div className="mt-5 flex items-center gap-3 border-t border-[hsl(var(--border-light))] pt-4">
                    <CompanyLogo
                      domain={item.domain}
                      initials={item.initials}
                      company={item.company}
                      accent={item.accent}
                    />
                    <p className="text-[13px] font-semibold leading-snug text-[hsl(var(--brand-navy-950))]">
                      {item.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* dot indicators */}
        <div className="mt-6 flex items-center justify-center gap-1.5">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`rounded-full transition-all duration-400 ${
                i === index
                  ? "h-2 w-7 bg-[hsl(var(--brand-purple-700))]"
                  : "h-2 w-2 bg-[hsl(var(--brand-purple-700)/0.22)]"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* auto-advance progress bar */}
        {!reduceMotion && (
          <div className="mx-auto mt-4 h-0.5 max-w-xs overflow-hidden rounded-full bg-[hsl(var(--brand-purple-700)/0.08)]">
            <motion.div
              key={index}
              className="h-full origin-left rounded-full bg-[hsl(var(--brand-purple-700)/0.35)]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: AUTO_MS / 1000, ease: "linear" }}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
