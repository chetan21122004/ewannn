import { useScrollReveal, useCountUp } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";
import { Clock, Languages, Users, Briefcase, MapPin } from "lucide-react";

const stats = [
  { value: 60000, suffix: "+", label: "Interpretation Hours", icon: Clock },
  { value: 125, suffix: "+", label: "Languages", icon: Languages },
  { value: 250, suffix: "+", label: "Clients", icon: Users },
  { value: 10, suffix: "+", label: "Sectors", icon: Briefcase },
  { display: "5 years / 2 countries", label: "Track Record", icon: MapPin },
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

  return (
    <section className="py-16 lg:py-20 relative overflow-hidden theme-section-soft stitch-line stitch-line-bottom">
      <div className="absolute inset-0 theme-grid-overlay-light opacity-20 pointer-events-none" />
      <div className="glow-orb glow-orb-purple w-[360px] h-[360px] -top-40 left-1/4 opacity-8" />
      <div className="glow-orb glow-orb-gold w-[320px] h-[320px] -bottom-24 right-1/4 opacity-8" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.p
          className="text-center text-xs uppercase tracking-[0.3em] text-[hsl(var(--brand-purple-700)/0.9)] mb-10 font-semibold"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Trusted Track Record
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} isVisible={isVisible} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

function StatItem({ stat, isVisible, index }: { stat: typeof stats[0]; isVisible: boolean; index: number }) {
  const count = useCountUp(stat.value ?? 0, 2000, isVisible);
  const Icon = stat.icon;

  return (
    <motion.div
      className="text-center relative group rounded-2xl px-3 py-5 theme-card-light"
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
        className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[hsl(var(--text-on-light))] mb-2"
        animate={isVisible ? { scale: [1, 1.08, 1] } : {}}
        transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
      >
        {stat.display ?? `${count.toLocaleString()}${stat.suffix ?? ""}`}
      </motion.div>
      <p className="text-[hsl(var(--text-on-light-muted))] text-xs sm:text-sm font-medium tracking-wide uppercase">{stat.label}</p>
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
