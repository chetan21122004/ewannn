import { Globe, Target } from "lucide-react";
import { motion } from "framer-motion";
import teamMale from "@/assets/team-male.jpg";
import teamFemale from "@/assets/team-female.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(40 30% 97%) 0%, hsl(40 25% 95%) 100%)" }}>
      {/* Grid bg */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--navy)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--navy)) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      {/* Corner bracket decorations */}
      <div className="absolute top-10 left-10 w-16 h-16 border-t-2 border-l-2 border-gold/20 pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-16 h-16 border-b-2 border-r-2 border-gold/20 pointer-events-none" />

      {/* Wave decoration */}
      <svg className="absolute bottom-0 left-0 right-0 w-full h-20 pointer-events-none opacity-10" viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path d="M0,40 Q360,80 720,40 T1440,40" fill="none" stroke="hsl(40 85% 58%)" strokeWidth="1.5" />
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Team photos */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Color blocks behind photos */}
            <div className="absolute top-4 left-1/4 w-48 h-64 bg-purple-400/15 rounded-lg -rotate-6" />
            <div className="absolute top-0 right-1/4 w-48 h-64 bg-gold/20 rounded-lg rotate-3" />

            {/* Male photo */}
            <motion.div
              className="relative z-10 w-44 h-56 lg:w-52 lg:h-64 rounded-xl overflow-hidden shadow-premium-lg border-2 border-white/80 -rotate-3"
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img src={teamMale} alt="Co-founder" className="w-full h-full object-cover" loading="lazy" width={512} height={640} />
            </motion.div>

            {/* Female photo */}
            <motion.div
              className="relative z-20 w-44 h-56 lg:w-52 lg:h-64 rounded-xl overflow-hidden shadow-premium-lg border-2 border-white/80 rotate-3 -ml-8 mt-8"
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img src={teamFemale} alt="Co-founder" className="w-full h-full object-cover" loading="lazy" width={512} height={640} />
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Leadership & Vision
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Founded by industry forerunners and deep experts in cross-border trade and linguistics, EWAN was built on the principle that global success is local at its core.
            </p>

            {/* Feature items */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <motion.div
                  className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 border border-gold/20"
                  whileHover={{ scale: 1.1 }}
                >
                  <Target className="w-5 h-5 text-gold" />
                </motion.div>
                <div>
                  <h4 className="font-serif font-bold text-foreground mb-1">Strategic Oriented</h4>
                  <p className="text-muted-foreground text-sm">
                    Direct access to seasoned partners for high-level market entry strategies.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <motion.div
                  className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 border border-gold/20"
                  whileHover={{ scale: 1.1 }}
                >
                  <Globe className="w-5 h-5 text-gold" />
                </motion.div>
                <div>
                  <h4 className="font-serif font-bold text-foreground mb-1">Global Network</h4>
                  <p className="text-muted-foreground text-sm">
                    A curated network of 836+ specialist linguists across every continent.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
