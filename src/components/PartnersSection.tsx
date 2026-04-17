import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

const partners = [
  { name: "Bhashini", desc: "Govt of India language platform — empanelled translation & interpretation partner." },
  { name: "Tattava CX", desc: "Strategic CX & engagement partner for cross-border customer programs." },
];

const PartnersSection = () => {
  return (
    <section className="py-20 lg:py-24 relative overflow-hidden section-navy">
      <div className="absolute inset-0 dots-pattern opacity-15 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card-gold text-primary text-xs font-medium tracking-wider uppercase mb-4">
            <Handshake className="w-3.5 h-3.5" /> Partners
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Built With <span className="gradient-text italic">Trusted Partners</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-8 rounded-2xl glass-card-gold border border-primary/15 card-shine"
            >
              <h3 className="text-2xl font-serif font-bold gradient-text mb-3">{p.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
