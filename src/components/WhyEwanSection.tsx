import { motion } from "framer-motion";
import { Layers, Award, Landmark } from "lucide-react";

const differentiators = [
  {
    icon: Layers,
    title: "Language Meets Operations",
    desc: "We are the only partner in India who combines 125+ language capability with full-cycle market entry management. Language isn't a support function here — it is the core of how we operate.",
  },
  {
    icon: Award,
    title: "Corridors Not Classrooms",
    desc: "Our expertise comes from 60,000+ hours of real boardroom interpretation — in Mandarin, Japanese, Cantonese, and ASEAN languages. We didn't study these corridors. We built careers inside them.",
  },
  {
    icon: Landmark,
    title: "Recognised by Governments and Institutions",
    desc: "Formally recognised by the Consulate General of the People's Republic of China. Export program designers for the Government of Maharashtra (MSAMB). Faculty at Symbiosis. IB Board curriculum designers. Our institutional credentials are not decorative — they are evidence of the depth of trust we have built across borders.",
  },
];

const WhyEwanSection = () => {
  return (
    <section id="why-ewan" className="py-10 lg:py-32 relative overflow-hidden section-navy">
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
            The Partner Who's <span className="gradient-text italic">Already Been in the Room.</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Most market entry consultants have never interpreted a boardroom negotiation. Most translation agencies have never set up a subsidiary. Ewan has done both — for 10 years, across every major sector, in the corridors that matter.
          </p>
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
