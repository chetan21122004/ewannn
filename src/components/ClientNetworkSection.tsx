import { Car, Pill, Factory, DollarSign, ShoppingCart, Settings } from "lucide-react";
import { motion } from "framer-motion";

const clients = [
  { name: "AUDI", sector: "AUTOMOTIVE SECTOR" },
  { name: "Pfizer", sector: "PHARMA & LIFE SCI" },
  { name: "NOMURA", sector: "FINANCIAL SERVICES" },
];

const sectors = [
  { icon: Car, name: "Automotive", label: "AUTOMOTIVE" },
  { icon: Pill, name: "Pharma & Life Sci", label: "PHARMA" },
  { icon: Factory, name: "Manufacturing", label: "MANUFACTURING" },
  { icon: DollarSign, name: "Financial Services", label: "FINANCIAL" },
  { icon: ShoppingCart, name: "E-Commerce", label: "E-COMMERCE" },
  { icon: Settings, name: "Technology", label: "TECHNOLOGY" },
];

const ClientNetworkSection = () => {
  return (
    <section className="py-10 lg:py-32 relative overflow-hidden theme-section-light">
      {/* Animated wave lines */}
      <svg className="absolute top-0 left-0 right-0 w-full h-32 pointer-events-none" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <motion.path
          d="M0,60 Q360,120 720,60 T1440,60"
          fill="none"
          stroke="hsl(var(--brand-purple-700) / 0.14)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        />
        <motion.path
          d="M0,80 Q360,20 720,80 T1440,80"
          fill="none"
          stroke="hsl(var(--brand-cyan-500) / 0.1)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.3 }}
        />
      </svg>

      <div className="glow-orb glow-orb-purple w-[350px] h-[350px] top-1/2 -right-40 opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Client logos with animated reveal */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-12 lg:gap-20 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              className="text-center group cursor-default"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, type: "spring" }}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <span className="text-[10px] tracking-[0.15em] text-on-light-muted uppercase block mb-2">{client.sector}</span>
              <span className="text-2xl lg:text-3xl font-serif font-bold text-on-light group-hover:text-primary transition-colors duration-500">{client.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider with animated line */}
        <motion.div
          className="w-full h-px mb-16 mx-auto max-w-2xl"
          style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.35), hsl(var(--gold-light) / 0.3), hsl(var(--gold-dark) / 0.3), transparent)" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        {/* Sector icons grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.name}
              className="flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <motion.div
                className="w-16 h-16 rounded-full glass-card border border-primary/10 flex items-center justify-center mb-3 relative"
                whileHover={{ scale: 1.15, boxShadow: "0 0 20px hsl(var(--brand-purple-700) / 0.22)" }}
              >
                <sector.icon className="w-7 h-7 text-on-light-secondary group-hover:text-primary transition-colors duration-500" />
                {/* Animated ring on hover */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-primary/0 group-hover:border-primary/30"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <span className="text-[10px] tracking-[0.12em] text-on-light-muted uppercase mb-1">{sector.label}</span>
              <span className="text-sm font-serif font-bold text-on-light">{sector.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientNetworkSection;