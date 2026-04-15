import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import caseStudyImg from "@/assets/case-study-factory.jpg";

const CaseStudySection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(40 20% 96%) 0%, hsl(40 30% 97%) 100%)" }}>
      {/* Grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--navy)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--navy)) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      {/* Decorative circle */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full border border-dashed border-muted-foreground/10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image stack */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Background card layer */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl bg-white/30 backdrop-blur-sm border border-white/50" />
            <div className="absolute -top-2 -left-2 w-full h-full rounded-2xl bg-white/50 backdrop-blur-sm border border-white/60" />

            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden shadow-premium-lg">
              <img
                src={caseStudyImg}
                alt="Japanese Heavy Industries manufacturing facility"
                className="w-full h-80 lg:h-96 object-cover"
                loading="lazy"
                width={768}
                height={512}
              />
            </div>

            {/* Floating stats card */}
            <motion.div
              className="absolute -bottom-6 -right-4 lg:right-8 p-4 rounded-xl bg-white/80 backdrop-blur-md border border-white/70 shadow-premium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="flex gap-4 text-xs text-muted-foreground">
                <div>
                  <div className="w-24 h-2 rounded-full bg-foreground/10 mb-1" />
                  <div className="w-16 h-2 rounded-full bg-foreground/5" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background text-xs font-medium">
                <Plus className="w-3.5 h-3.5" />
                SUCCESS STORY
              </span>
              <span className="px-4 py-2 rounded-full bg-gold/10 text-foreground text-xs font-medium border border-gold/15">
                GLOBAL INVENTORY | EMERGING MARKETS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
              Scale-up: Japanese Heavy Industries
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Ewan helped a top-tier Japanese manufacturer expand into the EMEA region, streamlining operations across 5 countries in 6 months, overcoming complex localization challenges for industrial documentation.
            </p>

            {/* Stats */}
            <div className="flex gap-12 mb-8">
              <div>
                <div className="text-4xl font-serif font-bold text-foreground">40%</div>
                <div className="text-xs tracking-[0.15em] text-muted-foreground/60 uppercase mt-1">Time Reduction</div>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold text-foreground">€12M</div>
                <div className="text-xs tracking-[0.15em] text-muted-foreground/60 uppercase mt-1">Annual Revenue</div>
              </div>
            </div>

            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/80 border border-foreground/10 text-foreground font-semibold text-sm hover:bg-white hover:border-foreground/20 transition-all shadow-premium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Read Case Study
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
