import { motion } from "framer-motion";

const logos = ["AUDI", "PFIZER", "NOMURA", "TOYOTA", "MITSUBISHI", "RAKUTEN", "HITACHI", "PANASONIC"];

const ClientNetworkSection = () => {
  return (
    <section className="py-20 relative section-off border-y border-border overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-[11px] tracking-[0.25em] uppercase text-foreground/50 font-semibold">
            Trusted by global enterprises across four continents
          </div>
        </motion.div>

        {/* Logo marquee */}
        <div className="relative overflow-hidden" style={{
          maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
        }}>
          <div className="flex gap-16 lg:gap-24 animate-marquee whitespace-nowrap">
            {[...logos, ...logos].map((name, i) => (
              <span
                key={i}
                className="text-xl lg:text-2xl font-serif font-bold text-foreground/30 hover:text-foreground transition-colors duration-500 tracking-[0.18em] cursor-default"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientNetworkSection;
