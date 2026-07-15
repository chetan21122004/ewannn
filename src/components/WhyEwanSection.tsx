import { useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Layers, Award, Landmark, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { blurReveal, fadeOnly, scaleUp } from "@/lib/animationVariants";
import { useCountUp, useScrollReveal } from "@/hooks/useScrollReveal";

const defaultDifferentiators = [
  {
    title: "Language Meets Operations",
    desc: "We are the only partner in India who combines 125+ language capability with full-cycle market entry management. Language isn't a support function here - it is the core of how we operate.",
  },
  {
    title: "Corridors Not Classrooms",
    desc: "Our expertise comes from real boardroom interpretation - in Mandarin, Japanese, Cantonese, and ASEAN languages. We didn't study these corridors. We built careers inside them.",
  },
  {
    title: "Recognised by Governments and Institutions",
    desc: "Consulate General of China recognition\nMaharashtra export programs (MSAMB)\nSymbiosis faculty and IB curriculum design",
  },
];

const accentStyles = [
  {
    number: "text-[hsl(var(--brand-purple-700)/0.32)]",
    iconWrap: "bg-[linear-gradient(135deg,hsl(var(--brand-purple-700))_0%,hsl(var(--brand-purple-500))_100%)]",
    iconColor: "text-white",
    overlay: "bg-white",
    overlayAccent: "from-[hsl(var(--brand-purple-700)/0.06)] to-transparent",
    accentLine: "bg-[hsl(var(--brand-purple-500))]",
    ring: "ring-[hsl(var(--brand-purple-500)/0.35)]",
    bullet: "bg-[hsl(var(--brand-purple-600))]",
  },
  {
    number: "text-[hsl(var(--brand-cyan-500)/0.32)]",
    iconWrap: "bg-[linear-gradient(135deg,hsl(var(--brand-purple-700))_0%,hsl(var(--brand-cyan-500))_100%)]",
    iconColor: "text-white",
    overlay: "bg-white",
    overlayAccent: "from-[hsl(var(--brand-cyan-500)/0.06)] to-transparent",
    accentLine: "bg-[hsl(var(--brand-cyan-500))]",
    ring: "ring-[hsl(var(--brand-cyan-500)/0.35)]",
    bullet: "bg-[hsl(var(--brand-cyan-500))]",
  },
  {
    number: "text-[hsl(var(--brand-gold-600)/0.34)]",
    iconWrap: "bg-[linear-gradient(135deg,hsl(var(--brand-purple-700))_0%,hsl(var(--brand-gold-600))_100%)]",
    iconColor: "text-white",
    overlay: "bg-white",
    overlayAccent: "from-[hsl(var(--brand-gold-500)/0.08)] to-transparent",
    accentLine: "bg-[hsl(var(--brand-gold-500))]",
    ring: "ring-[hsl(var(--brand-gold-500)/0.35)]",
    bullet: "bg-[hsl(var(--brand-gold-600))]",
  },
] as const;

const renderCardDetail = (desc: string, bulletClass: string) => {
  const lines = desc.split("\n").map((line) => line.trim()).filter(Boolean);

  if (lines.length > 1) {
    return (
      <ul className="space-y-2">
        {lines.map((line) => (
          <li key={line} className="flex gap-2.5 text-[13px] leading-snug text-on-light-secondary sm:text-sm sm:leading-snug">
            <span className={cn("mt-[7px] h-1 w-1 shrink-0 rounded-full", bulletClass)} aria-hidden />
            <span>{line}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <p className="text-[13px] leading-[1.65] text-on-light-secondary sm:text-sm sm:leading-[1.7]">
      {desc}
    </p>
  );
};

const CardNumeral = ({
  value,
  isVisible,
  reduceMotion,
  className,
}: {
  value: number;
  isVisible: boolean;
  reduceMotion: boolean;
  className?: string;
}) => {
  const count = useCountUp(value, 900, isVisible && !reduceMotion);
  const display = reduceMotion || !isVisible ? value : count;

  return (
    <span className={className}>
      {String(display).padStart(2, "0")}
    </span>
  );
};

const WhyEwanSection = () => {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion() ?? false;
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal(0.12);
  const [pinnedIndex, setPinnedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const differentiators = t("home.whyEwan.differentiators", {
    returnObjects: true,
    defaultValue: defaultDifferentiators,
  }) as Array<{ title: string; desc: string }>;
  const differentiatorIcons = [Layers, Award, Landmark] as const;
  const headerVariant = reduceMotion ? fadeOnly : blurReveal;
  const cardVariant = reduceMotion ? fadeOnly : scaleUp;

  const activeIndex = hoveredIndex ?? pinnedIndex;

  const togglePin = (index: number) => {
    setPinnedIndex((current) => (current === index ? null : index));
  };

  const handleCardKeyDown = (event: KeyboardEvent<HTMLElement>, index: number) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      togglePin(index);
    }
    if (event.key === "Escape") {
      setPinnedIndex(null);
      setHoveredIndex(null);
    }
  };

  return (
    <section id="why-ewan" className="relative overflow-hidden py-5 theme-section-soft lg:py-10">
      <div className="glow-orb glow-orb-gold -bottom-12 left-4 h-[200px] w-[200px] opacity-8 lg:-bottom-16 lg:left-10 lg:h-[300px] lg:w-[300px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] theme-grid-overlay-light lg:opacity-[0.18]" />

      <div className="container relative z-10 mx-auto px-5 sm:px-6">
        <div className="mb-8 grid items-center gap-6 lg:mb-8 lg:grid-cols-[minmax(0,1fr)_minmax(220px,300px)] lg:gap-10">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headerVariant}
          >
            <span className="mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider theme-card-light text-[hsl(var(--brand-purple-700))] lg:mb-5">
              {t("home.whyEwan.badge")}
            </span>
            <h2 className="mb-4 font-serif text-[1.65rem] font-bold leading-tight text-on-light sm:text-4xl lg:mb-5 lg:text-5xl">
              {t("home.whyEwan.titlePrefix")}{" "}
              <span className="block italic text-[hsl(var(--brand-purple-700))] sm:inline">
                {t("home.whyEwan.titleHighlight")}
              </span>
            </h2>
            <p className="text-sm leading-relaxed text-on-light-muted sm:text-lg">
              {t("home.whyEwan.subtitle")}
            </p>
          </motion.div>

          <motion.figure
            className="mx-auto hidden w-full max-w-[280px] lg:block lg:max-w-none lg:justify-self-end"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.12 }}
          >
            <motion.img
              src="/doodles/Advantages-bro.svg"
              alt="UVAN differentiators illustration"
              className="h-44 w-full object-contain sm:h-48 lg:h-52"
              animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.figure>
        </div>

        <div ref={cardsRef} className="grid gap-4 md:grid-cols-3 md:gap-5">
          {differentiators.map((d, i) => {
            const Icon = differentiatorIcons[i] ?? Layers;
            const accent = accentStyles[i % accentStyles.length];
            const isActive = activeIndex === i;

            return (
              <motion.article
                key={d.title}
                role="button"
                tabIndex={0}
                aria-expanded={isActive}
                aria-label={`${d.title}. ${isActive ? "Hide details" : "Show details"}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariant}
                transition={{ delay: i * 0.12 }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => togglePin(i)}
                onKeyDown={(event) => handleCardKeyDown(event, i)}
                className={cn(
                  "group relative h-[200px] cursor-pointer overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-card))] shadow-[0_4px_20px_hsl(var(--brand-navy-950)/0.06)] transition-[box-shadow,border-color,opacity] duration-300 sm:h-[208px] sm:rounded-3xl",
                  isActive
                    ? cn(
                        "z-10 border-transparent shadow-[0_18px_44px_hsl(var(--brand-navy-950)/0.18)] ring-1 ring-inset",
                        accent.ring,
                      )
                    : "hover:border-[hsl(var(--border-light-strong))] hover:shadow-[0_10px_28px_hsl(var(--brand-navy-950)/0.1)]",
                  !isActive && activeIndex !== null && "opacity-80",
                )}
              >
                <div
                  className={cn(
                    "absolute inset-0 flex flex-col p-5 transition-opacity duration-250",
                    isActive ? "pointer-events-none opacity-0" : "opacity-100",
                  )}
                  aria-hidden={isActive}
                >
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <CardNumeral
                      value={i + 1}
                      isVisible={cardsVisible}
                      reduceMotion={reduceMotion}
                      className={`font-serif text-2xl font-bold leading-none sm:text-[1.75rem] ${accent.number}`}
                    />
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl shadow-[0_4px_12px_hsl(var(--brand-navy-950)/0.12)] sm:h-10 sm:w-10 ${accent.iconWrap}`}
                    >
                      <Icon className={`h-4 w-4 ${accent.iconColor}`} strokeWidth={1.75} />
                    </div>
                  </div>

                  <h3 className="line-clamp-2 flex-1 font-serif text-[1.05rem] font-bold leading-snug text-on-light sm:text-lg">
                    {d.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-1.5 border-t border-[hsl(var(--border-light))] pt-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[hsl(var(--brand-purple-700))] transition-transform duration-300 group-hover:gap-2">
                    <span>{t("home.whyEwan.knowMore", { defaultValue: "Know more" })}</span>
                    <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isActive ? (
                    <motion.div
                      key="detail"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                      className={cn("absolute inset-0 flex flex-col p-5", accent.overlay)}
                    >
                      <div
                        className={cn(
                          "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-90",
                          accent.overlayAccent,
                        )}
                        aria-hidden
                      />

                      <div className="relative z-10 mb-3 flex items-center justify-between gap-3">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-on-light-muted">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className={cn("h-px flex-1", accent.accentLine, "opacity-40")} aria-hidden />
                        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${accent.iconWrap}`}>
                          <Icon className={`h-3.5 w-3.5 ${accent.iconColor}`} strokeWidth={1.75} aria-hidden />
                        </div>
                      </div>

                      <div className="relative z-10 min-h-0 flex-1 overflow-hidden">
                        {renderCardDetail(d.desc, accent.bullet)}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyEwanSection;
