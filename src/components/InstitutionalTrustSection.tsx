import { motion } from "framer-motion";
import { Landmark, Users, Map } from "lucide-react";
import { useScrollReveal, useCountUp } from "@/hooks/useScrollReveal";

const impacts = [
  { value: 1200, suffix: "+", label: "Farmers Impacted", icon: Users },
  { value: 800, suffix: "", label: "Hectares Covered", icon: Map },
];

const InstitutionalTrustSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 lg:py-28 relative overflow-hidden section-navy-deep">
      <div className="glow-orb glow-orb-gold w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />
      <div className="absolute inset-0 dots-pattern opacity-15 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl gold-gradient mb-6 shadow-gold-md"
          >
            <Landmark className="w-9 h-9 text-background" />
          </motion.div>

          <motion.span
            className="block text-xs uppercase tracking-[0.3em] text-primary/80 font-semibold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Institutional Recognition
          </motion.span>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Recognised by the <span className="gradient-text italic">Consulate General of China</span>
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A formal acknowledgment of our cross-border impact — bridging Chinese institutions and Indian agricultural communities through language, operations, and on-ground execution.
          </motion.p>

          <div className="grid grid-cols-2 gap-6 max-w-xl mx-auto">
            {impacts.map((s, i) => {
              const Icon = s.icon;
              return <ImpactStat key={s.label} stat={s} index={i} isVisible={isVisible} Icon={Icon} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

function ImpactStat({ stat, index, isVisible, Icon }: any) {
  const count = useCountUp(stat.value, 2000, isVisible);
  return (
    <motion.div
      className="p-6 rounded-2xl glass-card-gold text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      whileHover={{ y: -5, scale: 1.03 }}
    >
      <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
      <div className="text-3xl sm:text-4xl font-serif font-bold gradient-text mb-1">
        {count.toLocaleString()}{stat.suffix}
      </div>
      <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">{stat.label}</p>
    </motion.div>
  );
}

export default InstitutionalTrustSection;
