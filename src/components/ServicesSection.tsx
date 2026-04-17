import { motion } from "framer-motion";
import { Building2, Languages, ArrowRight, CheckCircle2, Globe2 } from "lucide-react";

const blocks = [
  {
    id: "market-entry",
    icon: Building2,
    label: "Market Entry & Operations",
    title: "Land. Setup. Scale.",
    desc: "Full-stack market entry into India and outbound expansion for Indian companies — handled end to end.",
    features: ["Entity setup & incorporation", "Regulatory & compliance", "Liaison & government affairs", "On-ground execution"],
    accent: "gold",
  },
  {
    id: "language",
    icon: Languages,
    label: "Language & Localization",
    title: "Speak Every Market.",
    desc: "Certified linguists and native experts across 125+ languages — translation, interpretation, and full localization.",
    features: ["Translation & document services", "Live & remote interpretation", "Voiceover & multimedia localization", "Certified + native expertise"],
    accent: "purple",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-10 lg:py-32 relative overflow-hidden section-navy">
      <div className="glow-orb glow-orb-gold w-[400px] h-[400px] top-10 -left-40" />
      <div className="glow-orb glow-orb-purple w-[400px] h-[400px] bottom-10 -right-40" />
      <div className="absolute inset-0 dots-pattern opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card-gold text-primary text-xs font-medium tracking-wider uppercase mb-5">
            <Globe2 className="w-3.5 h-3.5" /> What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-5">
            Two Capabilities. <span className="gradient-text italic">One Partner.</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Most competitors do one. Ewan does both — combining language excellence with on-the-ground market entry execution.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {blocks.map((block, i) => {
            const Icon = block.icon;
            const isGold = block.accent === "gold";
            return (
              <motion.div
                key={block.id}
                id={block.id === "language" ? "language" : undefined}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className={`group relative p-8 lg:p-10 rounded-3xl ${isGold ? "glass-card-gold" : "glass-card-purple"} card-shine overflow-hidden`}
              >
                <div className={`absolute -top-20 -right-20 w-60 h-60 rounded-full border-[20px] ${isGold ? "border-primary/10" : "border-accent/10"}`} />

                <motion.div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${isGold ? "gold-gradient" : "purple-gradient"} shadow-gold-md`}
                  whileHover={{ rotate: 8, scale: 1.08 }}
                >
                  <Icon className="w-7 h-7 text-background" />
                </motion.div>

                <p className={`text-xs uppercase tracking-[0.2em] font-medium mb-3 ${isGold ? "text-primary/80" : "text-accent/90"}`}>
                  {block.label}
                </p>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-4">{block.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{block.desc}</p>

                <ul className="space-y-3 mb-8">
                  {block.features.map((f, fi) => (
                    <motion.li
                      key={f}
                      className="flex items-start gap-3 text-sm text-foreground/80"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + fi * 0.08 + 0.3 }}
                    >
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${isGold ? "text-primary" : "text-accent"}`} />
                      <span>{f}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.a
                  href="#contact"
                  whileHover={{ x: 5 }}
                  className={`inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase ${isGold ? "text-primary" : "text-accent"} group/link`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </motion.a>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="inline-block text-sm sm:text-base text-foreground/70 italic font-serif">
            <span className="text-primary not-italic font-semibold">→</span> Competitors do one. <span className="gradient-text font-semibold not-italic">Ewan does both.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
