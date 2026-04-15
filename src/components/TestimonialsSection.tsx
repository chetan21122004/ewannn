import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(40 25% 96%) 0%, hsl(240 15% 96%) 50%, hsl(40 25% 96%) 100%)" }}>
      {/* Grid bg */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(hsl(var(--navy)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--navy)) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      {/* Decorative arcs */}
      <div className="absolute top-10 left-10 w-64 h-64 rounded-full border-[18px] border-gold/15 pointer-events-none" />
      <div className="absolute -bottom-20 -right-10 w-56 h-56 rounded-full border-[14px] border-purple-300/10 pointer-events-none" />
      <div className="absolute top-20 left-40 hidden lg:block pointer-events-none">
        <div className="w-20 h-24 border-2 border-foreground/5 rounded" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative p-10 lg:p-16 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/60 shadow-premium-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Gold quote mark */}
            <motion.div
              className="absolute top-8 right-10 lg:right-16"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring" }}
            >
              <Quote className="w-16 h-16 text-gold fill-gold/20" />
            </motion.div>

            <blockquote className="text-2xl lg:text-3xl font-serif font-bold text-foreground leading-relaxed mb-8 max-w-3xl">
              "EWAN doesn't just offer services; they offer peace of mind. Their cultural intelligence saved us months of rework during our Tokyo launch."
            </blockquote>

            <div className="flex items-center gap-2">
              <div>
                <p className="font-sans font-bold text-foreground tracking-wide uppercase text-sm">Marcus Thorne</p>
                <p className="text-muted-foreground text-sm">
                  Head of Operations, Global Logistics Inc. <span className="text-muted-foreground/40 ml-2">[ CLIENT FEEDBACK ]</span>
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
