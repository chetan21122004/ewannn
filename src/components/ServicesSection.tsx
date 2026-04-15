import { Globe, Languages, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(40 30% 97%) 0%, hsl(240 20% 96%) 50%, hsl(40 20% 96%) 100%)" }}>
      {/* Grid pattern background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(hsl(var(--navy)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--navy)) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      {/* Decorative gold arc top-right */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border-[20px] border-gold/20 pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full border-[12px] border-muted-foreground/5 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-3">
            Our Core Expertise
          </h2>
          <div className="w-16 h-1 bg-gold rounded-full" />
        </motion.div>

        {/* Two Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Market Entry Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative p-8 lg:p-10 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/60 shadow-premium"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center">
                <Globe className="w-6 h-6 text-foreground" />
              </div>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 blur-sm" />
            </div>

            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Market Entry</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Strategic companion for complex regulatory landscapes. From flexible strategy to market entry in emerging and established markets.
            </p>

            <ul className="space-y-3 mb-8">
              {["Regulatory Compliance", "Partner Sourcing", "Cultural Journey"].map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-center gap-3 text-foreground"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>

            <a href="#contact" className="inline-flex items-center gap-2 text-foreground font-bold text-sm hover:text-gold transition-colors">
              Learn More <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Language & Localization Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative p-8 lg:p-10 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/60 shadow-premium"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center">
                <Languages className="w-6 h-6 text-foreground" />
              </div>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-300/20 to-purple-400/5 blur-sm" />
            </div>

            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Language & Localization</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Beyond translation: We localize your message to resonate with multi-lingual audiences who navigate global industry standards.
            </p>

            <ul className="space-y-3 mb-8">
              {["Technical Communication", "Creative Transcreation", "Intelligent L&D"].map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-center gap-3 text-foreground"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>

            <a href="#contact" className="inline-flex items-center gap-2 text-foreground font-bold text-sm hover:text-gold transition-colors">
              Get a Quote <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Client Logos */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-10 lg:gap-16 pt-8 border-t border-foreground/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {["AUDI", "PFIZER", "NOMURA", "TOYOTA", "MITSUBISHI", "RAKUTEN"].map((name) => (
            <span key={name} className="text-muted-foreground/40 font-sans text-sm tracking-[0.2em] font-medium hover:text-foreground/60 transition-colors">
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
