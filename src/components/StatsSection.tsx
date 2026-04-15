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
    <section className="py-20 relative overflow-hidden stitch-line stitch-line-bottom">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(135deg, hsl(40 25% 96%) 0%, hsl(38 30% 93%) 50%, hsl(40 25% 96%) 100%)",
            "linear-gradient(135deg, hsl(38 30% 93%) 0%, hsl(40 25% 96%) 50%, hsl(38 30% 93%) 100%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Decorative dots */}
      <div className="absolute inset-0 dots-pattern opacity-30 pointer-events-none" />

      <StitchScrollSection>
        <div className="container mx-auto px-6 relative z-10" ref={ref}>
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
      className="text-center relative"
      initial={{ opacity: 0, y: 40, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Stitch vertical divider between stats */}
      {index > 0 && (
        <div
          className="absolute left-0 top-[15%] bottom-[15%] w-[2px] hidden lg:block"
          style={{
            background:
              "repeating-linear-gradient(180deg, hsl(40 85% 58% / 0.2) 0px, hsl(40 85% 58% / 0.2) 5px, transparent 5px, transparent 10px)",
          }}
        />
      )}

      <motion.div
        className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold gradient-text mb-2"
        animate={isVisible ? { scale: [1, 1.08, 1] } : {}}
        transition={{ delay: index * 0.15 + 0.5, duration: 0.5 }}
      >
        {count}{stat.suffix}
      </motion.div>
      <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase">{stat.label}</p>

      {/* Decorative underline */}
      <motion.div
        className="mx-auto mt-3 h-[2px] rounded-full gold-gradient"
        initial={{ width: 0 }}
        whileInView={{ width: 40 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15 + 0.8, duration: 0.6 }}
      />
    </motion.div>
  );
}

export default StatsSection;
