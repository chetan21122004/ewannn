import { Car, Pill, Factory, DollarSign, ShoppingCart, Settings } from "lucide-react";
import { motion } from "framer-motion";

const clients = [
  { name: "AUDI", sector: "AUTOMOTIVE SECTOR", row: 0, col: 0 },
  { name: "Pfizer", sector: "PHARMA & LIFE SCI", row: 0, col: 1 },
  { name: "NOMURA", sector: "FINANCIAL SERVICES SECTOR", row: 0, col: 2 },
];

const sectors = [
  { icon: Car, name: "Automotive", label: "AUTOMOTIVE SECTOR" },
  { icon: Pill, name: "Pharma & Life Sci", label: "PHARMA & LIFE SCI" },
  { icon: Factory, name: "Manufacturing", label: "MANUFACTURING SECTOR" },
  { icon: DollarSign, name: "Financial Services", label: "FINANCIAL SERVICES" },
  { icon: ShoppingCart, name: "E-Commerce", label: "E-COMMERCE SECTOR" },
  { icon: Settings, name: "Technology", label: "TECHNOLOGY SECTOR" },
];

const ClientNetworkSection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(240 20% 96%) 0%, hsl(240 15% 95%) 50%, hsl(40 20% 96%) 100%)" }}>
      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--navy)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--navy)) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      {/* Gold wave lines */}
      <svg className="absolute bottom-0 left-0 right-0 w-full h-32 pointer-events-none opacity-10" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,60 Q360,120 720,60 T1440,60" fill="none" stroke="hsl(40 85% 58%)" strokeWidth="2" />
        <path d="M0,80 Q360,20 720,80 T1440,80" fill="none" stroke="hsl(40 85% 58%)" strokeWidth="1.5" />
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        {/* Top: Client logos */}
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
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <span className="text-[10px] tracking-[0.15em] text-muted-foreground/50 uppercase block mb-2">{client.sector}</span>
              <span className="text-2xl lg:text-3xl font-serif font-bold text-foreground">{client.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom: Sector icons grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.name}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm border border-foreground/5 flex items-center justify-center mb-3 shadow-premium"
                whileHover={{ scale: 1.1, boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}
              >
                <sector.icon className="w-7 h-7 text-foreground/60" />
              </motion.div>
              <span className="text-[10px] tracking-[0.12em] text-muted-foreground/50 uppercase mb-1">{sector.label}</span>
              <span className="text-sm font-serif font-bold text-foreground">{sector.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientNetworkSection;
