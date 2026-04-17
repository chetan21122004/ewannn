import { motion } from "framer-motion";

const clients = [
  "Tata Autocomp",
  "Bajaj",
  "Markets & Markets",
  "Groupo Antolin",
  "Seasonz International",
  "Tattava CX",
  "Bhashini",
  "Consulate of China",
];

const ClientLogosSection = () => {
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden section-navy-deep">
      <div className="container mx-auto px-6 relative z-10">
        <motion.p
          className="text-center text-xs uppercase tracking-[0.3em] text-primary/70 mb-10 font-medium"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Trusted by Industry Leaders
        </motion.p>

        <div className="relative overflow-hidden">
          <div className="flex gap-12 animate-marquee">
            {[...clients, ...clients].map((client, i) => (
              <motion.div
                key={`${client}-${i}`}
                className="shrink-0 px-8 py-5 rounded-xl glass-card flex items-center justify-center min-w-[200px]"
                whileHover={{ scale: 1.05, borderColor: "hsl(40 85% 58% / 0.4)" }}
              >
                <span className="text-base lg:text-lg font-serif font-semibold text-foreground/70 hover:text-primary transition-colors whitespace-nowrap">
                  {client}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
};

export default ClientLogosSection;
