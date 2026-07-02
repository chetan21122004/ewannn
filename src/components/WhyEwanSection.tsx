import { useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Layers, Award, Landmark } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

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
    desc: "Formally recognised by the Consulate General of the People's Republic of China. Export program designers for the Government of Maharashtra (MSAMB). Faculty at Symbiosis. IB Board curriculum designers. Our institutional credentials are not decorative - they are evidence of the depth of trust we have built across borders.",
  },
];

const accentStyles = [
  {
    number: "text-[hsl(var(--brand-purple-700)/0.28)]",
    iconWrap: "bg-[linear-gradient(135deg,hsl(var(--brand-purple-700))_0%,hsl(var(--brand-purple-500))_100%)]",
    iconColor: "text-white",
    overlay: "from-[hsl(var(--brand-purple-700)/0.96)] via-[hsl(var(--brand-navy-950)/0.94)] to-[hsl(var(--brand-navy-950)/0.98)]",
    ring: "ring-[hsl(var(--brand-purple-500)/0.45)]",
  },
  {
    number: "text-[hsl(var(--brand-cyan-500)/0.28)]",
    iconWrap: "bg-[linear-gradient(135deg,hsl(var(--brand-purple-700))_0%,hsl(var(--brand-cyan-500))_100%)]",
    iconColor: "text-white",
    overlay: "from-[hsl(var(--brand-cyan-500)/0.22)] via-[hsl(var(--brand-navy-950)/0.95)] to-[hsl(var(--brand-navy-950)/0.98)]",
    ring: "ring-[hsl(var(--brand-cyan-500)/0.4)]",
  },
  {
    number: "text-[hsl(var(--brand-gold-600)/0.3)]",
    iconWrap: "bg-[linear-gradient(135deg,hsl(var(--brand-purple-700))_0%,hsl(var(--brand-gold-600))_100%)]",
    iconColor: "text-white",
    overlay: "from-[hsl(var(--brand-gold-600)/0.2)] via-[hsl(var(--brand-navy-950)/0.95)] to-[hsl(var(--brand-navy-950)/0.98)]",
    ring: "ring-[hsl(var(--brand-gold-500)/0.45)]",
  },
] as const;

const WhyEwanSection = () => {
  const { t } = useTranslation();
  const [pinnedIndex, setPinnedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const differentiators = t("home.whyEwan.differentiators", {
    returnObjects: true,
    defaultValue: defaultDifferentiators,
  }) as Array<{ title: string; desc: string }>;
  const differentiatorIcons = [Layers, Award, Landmark] as const;

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
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-[0.1] mix-blend-multiply lg:opacity-15"
        style={{ backgroundImage: "url('/bg-blobs/abstract-purple-fluid-wave-background-free-vector.jpg')" }}
      />
      <div className="glow-orb glow-orb-purple -right-8 top-10 h-[240px] w-[240px] opacity-8 lg:right-10 lg:h-[360px] lg:w-[360px]" />
      <div className="glow-orb glow-orb-gold -bottom-12 left-4 h-[200px] w-[200px] opacity-8 lg:-bottom-16 lg:left-10 lg:h-[300px] lg:w-[300px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] theme-grid-overlay-light lg:opacity-[0.18]" />

      <div className="container relative z-10 mx-auto px-5 sm:px-6">
        <div className="mb-8 grid items-center gap-6 lg:mb-10 lg:grid-cols-[minmax(0,1fr)_minmax(220px,300px)] lg:gap-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.12 }}
          >
            <motion.img
              src="/doodles/Advantages-bro.svg"
              alt="UVAN differentiators illustration"
              className="h-44 w-full object-contain sm:h-48 lg:h-52"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.figure>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {differentiators.map((d, i) => {
            const Icon = differentiatorIcons[i] ?? Layers;
            const accent = accentStyles[i % accentStyles.length];
            const isActive = activeIndex === i;
            const isPinned = pinnedIndex === i;

            return (
              <motion.article
                key={d.title}
                role="button"
                tabIndex={0}
                aria-expanded={isActive}
                aria-label={`${d.title}. ${isActive ? "Hide details" : "Show details"}`}
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => togglePin(i)}
                onKeyDown={(event) => handleCardKeyDown(event, i)}
                className={cn(
                  "relative min-h-[148px] cursor-pointer overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] theme-card-light card-shine transition-[box-shadow,transform,border-color] duration-300 sm:min-h-[160px] sm:rounded-3xl",
                  isActive
                    ? cn("z-10 scale-[1.02] shadow-[0_20px_48px_hsl(var(--brand-navy-950)/0.16)] ring-2 ring-offset-2 ring-offset-[hsl(var(--surface-light-100))]", accent.ring)
                    : activeIndex !== null && "opacity-70 saturate-[0.92]",
                )}
              >
                {/* Base layer — title only */}
                <div className="relative flex h-full min-h-[inherit] flex-col p-5 sm:p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <span className={`font-serif text-3xl font-bold sm:text-4xl ${accent.number}`}>0{i + 1}</span>
                    <div
                      className={`ml-auto flex h-10 w-10 items-center justify-center rounded-xl shadow-gold-sm sm:h-11 sm:w-11 ${accent.iconWrap}`}
                    >
                      <Icon className={`h-4 w-4 sm:h-5 sm:w-5 ${accent.iconColor}`} />
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-bold leading-snug text-on-light sm:text-xl">{d.title}</h3>

                  <p
                    className={cn(
                      "mt-auto pt-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-[hsl(var(--brand-purple-700)/0.65)] transition-opacity duration-200",
                      isActive && "opacity-0",
                    )}
                  >
                    {isPinned ? "Tap to close" : "Hover or tap to read"}
                  </p>
                </div>

                {/* Detail overlay — only on active card */}
                <AnimatePresence>
                  {isActive ? (
                    <motion.div
                      key="overlay"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className={cn(
                        "absolute inset-0 z-20 flex flex-col bg-gradient-to-br p-5 text-white sm:p-6",
                        accent.overlay,
                      )}
                    >
                      <div
                        className="pointer-events-none absolute inset-0 opacity-30"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 85% 0%, hsl(var(--brand-gold-500) / 0.35), transparent 42%)",
                        }}
                        aria-hidden
                      />

                      <div className="relative z-10 flex h-full flex-col">
                        <div className="mb-3 flex items-start justify-between gap-3">
                          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[hsl(var(--brand-gold-500))]">
                            0{i + 1}
                          </span>
                          <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${accent.iconWrap}`}>
                            <Icon className={`h-4 w-4 ${accent.iconColor}`} aria-hidden />
                          </div>
                        </div>

                        <h3 className="font-serif text-lg font-bold leading-snug text-white sm:text-xl">{d.title}</h3>

                        <p className="mt-3 flex-1 overflow-y-auto text-sm leading-relaxed text-white/82 [scrollbar-width:thin]">
                          {d.desc}
                        </p>

                        <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45">
                          {isPinned ? "Tap again to close" : "Tap to keep open"}
                        </p>
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
