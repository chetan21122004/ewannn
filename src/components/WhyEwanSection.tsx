import { motion } from "framer-motion";
import { Layers, Award, Landmark } from "lucide-react";

const differentiators = [
  {
    icon: Layers,
    title: "Language + Operations Combined",
    desc: "We're the only partner doing both. No handoffs, no translation gaps — strategy, compliance, and language under one roof.",
  },
  {
    icon: Award,
    title: "Real Experience, Not Theory",
    desc: "60,000+ interpretation hours in actual boardrooms, factories, and government meetings. We've already been in the room.",
  },
  {
    icon: Landmark,
    title: "Government & Institutional Recognition",
    desc: "Recognised by the Consulate General of China. Empanelled with Bhashini (Govt of India). Trusted at the highest levels.",
  },
];

const WhyEwanSection = () => {
  return (
    <section id="why-ewan" className="py-24 lg:py-32 relative overflow-hidden section-navy">
      <div className="glow-orb glow-orb-gold w-[400px] h-[400px] top-20 right-10" />
      <div className="absolute inset-0 dots-pattern opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card-gold text-primary text-xs font-medium tracking-wider uppercase mb-5">
            Why Ewan
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-5">
            The Partner Who's <span className="gradient-text italic">Already Been in the Room</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {differentiators.map((d, i) => {
            const Icon = d.icon;
            return (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -10 }}
                className="group relative p-8 rounded-3xl glass-card border border-primary/10 card-shine overflow-hidden"
              >
                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full border-[15px] border-primary/5 group-hover:border-primary/15 transition-colors duration-500" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-5xl font-serif font-bold gradient-text opacity-30">0{i + 1}</span>
                    <motion.div
                      className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center shadow-gold-sm ml-auto"
                      whileHover={{ rotate: 12, scale: 1.1 }}
                    >
                      <Icon className="w-5 h-5 text-background" />
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-3">{d.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{d.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyEwanSection;
