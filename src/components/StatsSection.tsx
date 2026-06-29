import { useScrollReveal, useCountUp } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";
import { Clock, Languages, Users, Briefcase, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const statIcons = [Clock, Languages, Users, Briefcase, MapPin] as const;
const defaultStats = [
  { value: 60000, suffix: "+", label: "Hours of Interpretation" },
  { value: 125, suffix: "+", label: "Languages" },
  { value: 250, suffix: "+", label: "Clients Served" },
  { value: 10, suffix: "+", label: "Sectors" },
  { display: "5 Years · 2 Countries", label: "of Operation" },
];

const statAccent = [
  "text-[hsl(var(--brand-purple-700))]",
  "text-[hsl(var(--brand-cyan-500))]",
  "text-[hsl(var(--brand-purple-500))]",
  "text-[hsl(var(--brand-purple-700))]",
  "text-[hsl(var(--brand-gold-600))]",
];

const StatsSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useTranslation();
  const statsRaw = t("home.stats.items", { returnObjects: true, defaultValue: defaultStats }) as Array<{
    value?: number;
    suffix?: string | number;
    display?: string | number;
    label?: string;
  }>;
  const stats = (Array.isArray(statsRaw) ? statsRaw : defaultStats).map((stat, index) => {
    const fallback = defaultStats[index] ?? defaultStats[0];
    return {
      value: typeof stat?.value === "number" ? stat.value : fallback.value,
      suffix: typeof stat?.suffix === "string" || typeof stat?.suffix === "number" ? String(stat.suffix) : fallback.suffix ?? "",
      display:
        typeof stat?.display === "string" || typeof stat?.display === "number"
          ? String(stat.display)
          : fallback.display,
      label: typeof stat?.label === "string" ? stat.label : fallback.label,
    };
  });

  return (
    <section className="relative overflow-hidden border-y border-[hsl(var(--border-light)/0.85)] py-8 theme-section-soft stitch-line stitch-line-bottom lg:py-16">
      <div className="absolute inset-0 theme-grid-overlay-light opacity-20 pointer-events-none" />
      <div className="glow-orb glow-orb-purple w-[360px] h-[360px] -top-40 left-1/4 opacity-8" />
      <div className="glow-orb glow-orb-gold w-[320px] h-[320px] -bottom-24 right-1/4 opacity-8" />

      <div className="container relative z-10 mx-auto px-5 sm:px-6" ref={ref}>
        <motion.p
          className="mb-6 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-700)/0.9)] sm:mb-8 sm:text-xs sm:tracking-[0.3em] lg:mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t("home.stats.badge")}
        </motion.p>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-4">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} isVisible={isVisible} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

function StatItem({
  stat,
  isVisible,
  index,
}: {
  stat: { value?: number; suffix?: string; display?: string; label: string };
  isVisible: boolean;
  index: number;
}) {
  const count = useCountUp(stat.value ?? 0, 2000, isVisible);
  const Icon = statIcons[index] ?? Clock;
  const displayValue = typeof stat.display === "string" || typeof stat.display === "number" ? String(stat.display) : undefined;
  const suffix = typeof stat.suffix === "string" || typeof stat.suffix === "number" ? String(stat.suffix) : "";

  return (
    <motion.div
      className="group relative rounded-xl px-2 py-4 text-center theme-card-light sm:rounded-2xl sm:px-3 sm:py-5"
      initial={{ opacity: 0, y: 40, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
    >
      <motion.div
        className="w-12 h-12 mx-auto mb-3 rounded-xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-card)/0.95)] flex items-center justify-center"
        whileHover={{ scale: 1.15, rotate: 8 }}
      >
        <Icon className={`w-5 h-5 ${statAccent[index % statAccent.length]}`} />
      </motion.div>
      <motion.div
        className="mb-1.5 font-serif text-2xl font-bold text-[hsl(var(--text-on-light))] sm:mb-2 sm:text-4xl lg:text-5xl"
        animate={isVisible ? { scale: [1, 1.08, 1] } : {}}
        transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
      >
        {displayValue ?? `${count.toLocaleString()}${suffix}`}
      </motion.div>
      <p className="text-[9px] font-medium uppercase leading-snug tracking-[0.08em] text-[hsl(var(--text-on-light-muted))] sm:text-xs sm:tracking-wide">{stat.label}</p>
      <motion.div
        className="mx-auto mt-3 h-[2px] rounded-full bg-gradient-to-r from-[hsl(var(--brand-purple-700))] to-[hsl(var(--brand-purple-500))]"
        initial={{ width: 0 }}
        whileInView={{ width: 40 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.8, duration: 0.6 }}
      />
    </motion.div>
  );
}

export default StatsSection;
