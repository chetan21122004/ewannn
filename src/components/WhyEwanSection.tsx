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

const accentStyles = [
  {
    number: "text-[hsl(var(--brand-purple-700)/0.28)]",
    iconWrap: "bg-[linear-gradient(135deg,hsl(var(--brand-purple-700))_0%,hsl(var(--brand-purple-500))_100%)]",
    iconColor: "text-white",
    halo: "border-[hsl(var(--brand-purple-500)/0.16)] group-hover:border-[hsl(var(--brand-purple-500)/0.3)]",
  },
  {
    number: "text-[hsl(var(--brand-cyan-500)/0.28)]",
    iconWrap: "bg-[linear-gradient(135deg,hsl(var(--brand-purple-700))_0%,hsl(var(--brand-cyan-500))_100%)]",
    iconColor: "text-white",
    halo: "border-[hsl(var(--brand-cyan-500)/0.16)] group-hover:border-[hsl(var(--brand-cyan-500)/0.3)]",
  },
  {
    number: "text-[hsl(var(--brand-gold-600)/0.3)]",
    iconWrap: "bg-[linear-gradient(135deg,hsl(var(--brand-purple-700))_0%,hsl(var(--brand-gold-600))_100%)]",
    iconColor: "text-white",
    halo: "border-[hsl(var(--brand-gold-600)/0.16)] group-hover:border-[hsl(var(--brand-gold-600)/0.3)]",
  },
] as const;

const WhyEwanSection = () => {
  return (
    <section id="why-ewan" className="py-10 lg:py-32 relative overflow-hidden theme-section-soft">
      <div className="glow-orb glow-orb-purple w-[360px] h-[360px] top-20 right-10 opacity-8" />
      <div className="glow-orb glow-orb-gold w-[300px] h-[300px] -bottom-16 left-10 opacity-8" />
      <div className="absolute inset-0 theme-grid-overlay-light opacity-18 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full theme-card-light text-[hsl(var(--brand-purple-700))] text-xs font-semibold tracking-wider uppercase mb-5">
            Why Ewan
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-on-light mb-5">
            The Partner Who's{" "}
            <span className="bg-gradient-to-r from-[hsl(var(--brand-purple-700))] via-[hsl(var(--brand-purple-500))] to-[hsl(var(--brand-cyan-500))] bg-clip-text text-transparent italic">
              Already Been in the Room.
            </span>
          </h2>
          <p className="text-on-light-muted text-base sm:text-lg leading-relaxed">
            Most market entry consultants have never interpreted a boardroom negotiation. Most translation agencies have never set up a subsidiary. Ewan has done both — for 10 years, across every major sector, in the corridors that matter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {differentiators.map((d, i) => {
            const Icon = d.icon;
            const accent = accentStyles[i % accentStyles.length];
            return (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -10 }}
                className="group relative p-8 rounded-3xl theme-card-light card-shine overflow-hidden border border-[hsl(var(--border-light))]"
              >
                <div className={`absolute -top-16 -right-16 w-48 h-48 rounded-full border-[15px] transition-colors duration-500 ${accent.halo}`} />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <span className={`text-5xl font-serif font-bold ${accent.number}`}>0{i + 1}</span>
                    <motion.div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-gold-sm ml-auto ${accent.iconWrap}`}
                      whileHover={{ rotate: 12, scale: 1.1 }}
                    >
                      <Icon className={`w-5 h-5 ${accent.iconColor}`} />
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-on-light mb-3">{d.title}</h3>
                  <p className="text-on-light-muted text-sm leading-relaxed">{d.desc}</p>
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
