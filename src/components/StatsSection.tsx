import { useScrollReveal, useCountUp } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";
import StitchScrollSection from "./StitchScrollSection";

const stats = [
  { value: 50, suffix: "+", label: "Languages Supported" },
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 6, suffix: "+", label: "Years of Excellence" },
];

const StatsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5" />
      <StitchScrollSection>
        <div className="container mx-auto px-6" ref={ref}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <StatItem key={stat.label} stat={stat} isVisible={isVisible} index={i} />
            ))}
          </div>
        </div>
      </StitchScrollSection>
    </section>
  );
};

function StatItem({ stat, isVisible, index }: { stat: typeof stats[0]; isVisible: boolean; index: number }) {
  const count = useCountUp(stat.value, 2000, isVisible);

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 40, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold gradient-text mb-2"
        animate={isVisible ? { scale: [1, 1.08, 1] } : {}}
        transition={{ delay: index * 0.15 + 0.5, duration: 0.5 }}
      >
        {count}{stat.suffix}
      </motion.div>
      <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase">{stat.label}</p>
    </motion.div>
  );
}

export default StatsSection;
