import { useScrollReveal, useCountUp } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";
import { Clock, Languages, Users, Briefcase, MapPin } from "lucide-react";

const stats = [
  { value: 60000, suffix: "+", label: "Interpretation Hours", icon: Clock },
  { value: 125, suffix: "+", label: "Languages", icon: Languages },
  { value: 250, suffix: "+", label: "Clients Served", icon: Users },
  { value: 10, suffix: "+", label: "Sectors", icon: Briefcase },
  { value: 5, suffix: "y / 2", label: "Years / Countries", icon: MapPin },
];

const StatsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-16 lg:py-20 relative overflow-hidden section-navy stitch-line stitch-line-bottom">
      <div className="absolute inset-0 dots-pattern opacity-20 pointer-events-none" />
      <div className="glow-orb glow-orb-gold w-[400px] h-[400px] -top-40 left-1/4" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.p
          className="text-center text-xs uppercase tracking-[0.3em] text-primary/70 mb-10 font-medium"
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
  const count = useCountUp(stat.value, 2000, isVisible);
  const Icon = stat.icon;

  return (
    <motion.div
      className="text-center relative group"
      initial={{ opacity: 0, y: 40, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="w-12 h-12 mx-auto mb-3 rounded-xl glass-card-gold flex items-center justify-center"
        whileHover={{ scale: 1.15, rotate: 8 }}
      >
        <Icon className="w-5 h-5 text-primary" />
      </motion.div>
      <motion.div
        className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold gradient-text mb-2"
        animate={isVisible ? { scale: [1, 1.08, 1] } : {}}
        transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
      >
        {count.toLocaleString()}{stat.suffix}
      </motion.div>
      <p className="text-muted-foreground text-xs sm:text-sm font-medium tracking-wide uppercase">{stat.label}</p>
      <motion.div
        className="mx-auto mt-3 h-[2px] rounded-full gold-gradient"
        initial={{ width: 0 }}
        whileInView={{ width: 40 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.8, duration: 0.6 }}
      />
    </motion.div>
  );
}

export default StatsSection;
