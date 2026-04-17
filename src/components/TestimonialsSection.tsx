import { motion } from "framer-motion";

const TestimonialsSection = () => {
  return (
    <section className="py-24 lg:py-32 relative section-charcoal overflow-hidden">
      {/* Subtle gold accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, hsl(44 65% 52%), transparent 50%)",
        }}
      />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="text-6xl lg:text-7xl font-serif leading-none mb-8"
              style={{ color: "hsl(var(--gold))" }}
            >
              "
            </div>

            <blockquote className="text-2xl lg:text-4xl font-serif font-light text-on-dark leading-[1.4] mb-12 max-w-3xl">
              EWAN doesn't just offer services — they offer peace of mind.
              Their cultural intelligence saved us months of rework during our
              <span className="italic" style={{ color: "hsl(var(--gold))" }}> Tokyo launch.</span>
            </blockquote>

            <div className="flex items-center gap-4 pt-8 border-t border-white/10">
              <div className="w-px h-12 bg-gold" />
              <div>
                <p className="font-semibold text-on-dark text-sm tracking-wide">
                  Marcus Thorne
                </p>
                <p className="text-on-dark-muted text-sm">
                  Head of Operations · Global Logistics Inc.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
