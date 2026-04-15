import { Settings, Briefcase, Car, Wind, Factory, Pill, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

const sectors = [
  { icon: Pill, name: "Pharma & Life Sci", pos: "top-left" },
  { icon: Factory, name: "Manufacturing", pos: "top-right" },
  { icon: Car, name: "Automotive", pos: "mid-left" },
  { icon: Briefcase, name: "Financial Services", pos: "mid-right" },
  { icon: ShoppingBag, name: "Luxury Goods", pos: "bottom-left" },
  { icon: Wind, name: "Green Energy", pos: "bottom-right" },
];

const SectorsSection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(40 30% 97%) 0%, hsl(40 25% 96%) 100%)" }}>
      {/* Grid bg */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(hsl(var(--navy)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--navy)) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      {/* Decorative arcs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full border-[16px] border-gold/10 pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full border-[12px] border-purple-300/8 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-48 h-48 rounded-full border-[10px] border-purple-300/6 pointer-events-none translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground text-center mb-20 tracking-wide uppercase"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Sectors We Empower
        </motion.h2>

        {/* Orbital layout */}
        <div className="relative max-w-3xl mx-auto">
          {/* Center circle */}
          <motion.div
            className="mx-auto w-32 h-32 rounded-full bg-white/80 backdrop-blur-sm border border-foreground/5 flex flex-col items-center justify-center shadow-premium-lg z-10 relative"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <Settings className="w-8 h-8 text-foreground/60 mb-1" />
            <span className="text-sm font-serif font-bold text-foreground">Technology</span>
          </motion.div>

          {/* Orbital rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-64 h-64 rounded-full border border-foreground/5" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[28rem] h-[28rem] rounded-full border border-gold/10" />
          </div>

          {/* Sector nodes */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16">
            {sectors.map((sector, i) => (
              <motion.div
                key={sector.name}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.6 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm border border-foreground/5 flex items-center justify-center mb-3 shadow-premium"
                  whileHover={{ scale: 1.15, boxShadow: "0 12px 30px rgba(0,0,0,0.08)" }}
                >
                  <sector.icon className="w-7 h-7 text-foreground/50" />
                </motion.div>
                <span className="text-sm font-serif font-bold text-foreground">{sector.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
