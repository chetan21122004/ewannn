import { Car, Pill, Factory, DollarSign, ShoppingBag, Wind, Settings, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const sectors = [
  { icon: Pill, name: "Pharma & Life Sciences" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Car, name: "Automotive" },
  { icon: DollarSign, name: "Financial Services" },
  { icon: ShoppingBag, name: "Luxury Goods" },
  { icon: Wind, name: "Green Energy" },
  { icon: Settings, name: "Technology" },
  { icon: Briefcase, name: "Professional Services" },
];

const SectorsSection = () => {
  return (
    <section id="sectors" className="py-24 lg:py-32 relative section-off">
      <div className="container mx-auto">
        <motion.div
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="eyebrow mb-5">Industries</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground leading-tight mb-5">
            Sectors we <span className="italic gradient-text">empower.</span>
          </h2>
          <p className="text-body text-lg leading-relaxed">
            Deep, vertical-specific expertise across the industries that move the global economy.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-border border border-border rounded-sm overflow-hidden">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.name}
              className="group bg-background p-8 lg:p-10 hover:bg-foreground transition-colors duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
            >
              <sector.icon className="w-7 h-7 text-foreground group-hover:text-gold transition-colors duration-500 mb-6" />
              <h4 className="text-base lg:text-lg font-serif font-semibold text-foreground group-hover:text-background transition-colors duration-500 leading-tight">
                {sector.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
