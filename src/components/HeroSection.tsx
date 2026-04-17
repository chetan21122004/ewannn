import { ArrowRight, Sparkles, MessageCircle, Globe } from "lucide-react";
import { motion } from "framer-motion";

const regions = ["India", "Southeast Asia", "East Asia", "Latin America", "Africa"];

const FloatingParticle = ({ delay, x, y, size, color }: { delay: number; x: string; y: string; size: number; color: string }) => (
  <motion.div
    className="particle"
    style={{ left: x, top: y, width: size, height: size, background: color }}
    animate={{
      y: [0, -30, 0],
      opacity: [0, 0.8, 0],
      scale: [0.5, 1, 0.5],
    }}
    transition={{ duration: 4, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

const HeroSection = () => {
  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };

  const fadeUpItem = {
    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
    visible: {
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const fadeRightItem = {
    hidden: { opacity: 0, x: 60, filter: "blur(10px)" },
    visible: {
      opacity: 1, x: 0, filter: "blur(0px)",
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const, delay: 0.4 },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden hero-gradient">
      <div className="glow-orb glow-orb-gold w-[400px] h-[400px] -top-40 -right-40" />
      <div className="glow-orb glow-orb-purple w-[300px] h-[300px] bottom-20 -left-20" />

      <FloatingParticle delay={0} x="10%" y="20%" size={4} color="hsl(40 85% 58% / 0.4)" />
      <FloatingParticle delay={1} x="80%" y="30%" size={3} color="hsl(260 50% 55% / 0.4)" />
      <FloatingParticle delay={2} x="60%" y="70%" size={5} color="hsl(40 85% 58% / 0.3)" />
      <FloatingParticle delay={0.5} x="30%" y="80%" size={3} color="hsl(260 50% 55% / 0.3)" />
      <FloatingParticle delay={1.5} x="90%" y="60%" size={4} color="hsl(40 85% 58% / 0.35)" />

      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(rgba(208,170,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(208,170,55,0.3) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <motion.div
        className="absolute top-0 right-[25%] w-[500px] h-[500px] pointer-events-none"
        initial={{ opacity: 0, rotate: -20 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <div className="w-full h-full rounded-full border-[40px] border-primary/10" style={{ clipPath: "inset(0 50% 50% 0)" }} />
      </motion.div>

      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            {/* Pre-headline */}
            <motion.div variants={fadeUpItem} className="mb-6 flex flex-wrap items-center gap-2">
              <Globe className="w-4 h-4 text-primary" />
              {regions.map((r, i) => (
                <span key={r} className="text-xs sm:text-sm text-primary/80 font-medium tracking-wider uppercase">
                  {r}{i < regions.length - 1 && <span className="mx-2 text-primary/30">•</span>}
                </span>
              ))}
            </motion.div>

            {/* Main headline */}
            <motion.h1 variants={fadeUpItem} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-[1.05] mb-6">
              <span className="text-foreground block">Your Cross-Border</span>
              <span className="gradient-text block italic">Market Partner</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.div variants={fadeUpItem} className="mb-8">
              <div className="border-l-[3px] border-primary/40 pl-5 space-y-2">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                  We help <span className="text-foreground font-medium">foreign companies enter India</span> and{" "}
                  <span className="text-foreground font-medium">Indian companies expand globally</span> — backed by{" "}
                  <span className="text-primary font-semibold">125+ languages</span> and on-ground operations expertise.
                </p>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUpItem} className="flex flex-wrap items-center gap-4">
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(208,170,55,0.4)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full gold-gradient text-background font-semibold text-sm tracking-wider uppercase transition-all duration-300 card-shine shadow-gold-md"
              >
                <Sparkles className="w-4 h-4" />
                Explore Market Entry
              </motion.a>
              <motion.a
                href="#language"
                whileHover={{ scale: 1.05, borderColor: "rgba(208,170,55,0.6)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full border-2 border-primary/30 text-foreground font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-primary/5"
              >
                Get a Language Quote
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 text-primary font-medium text-sm tracking-wider uppercase group"
              >
                <MessageCircle className="w-4 h-4" />
                Ask Soham
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right column */}
          <motion.div variants={fadeRightItem} initial="hidden" animate="visible" className="relative">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-accent/10 blur-2xl" />

              <motion.div
                className="absolute -top-8 -right-8 w-[80%] h-[80%] rounded-full border-[30px] border-primary/10"
                style={{ clipPath: "inset(0 0 40% 40%)" }}
                animate={{ rotate: [0, 3, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />

              <div className="relative rounded-3xl overflow-hidden shadow-gold-lg border border-primary/10">
                <img
                  src="/hero-bg-new.png"
                  alt="EWAN cross-border market expansion"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                  width={800}
                  height={500}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>

              <motion.div
                className="absolute -bottom-6 -left-6 sm:left-4 glass-card-gold rounded-2xl p-5 shadow-gold-md max-w-[280px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1 font-medium">On-Ground Experience</p>
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                  60,000+ Hours Delivered
                </h3>
                <div className="flex gap-1 mt-2">
                  {[1,2,3,4,5].map((i) => (
                    <motion.div
                      key={i}
                      className="h-1 flex-1 rounded-full bg-primary"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1.4 + i * 0.1 }}
                    />
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-4 right-4 sm:-top-6 sm:right-8 glass-card-purple rounded-xl p-4 shadow-gold-sm"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                whileHover={{ y: -3 }}
              >
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Languages</p>
                <p className="text-2xl font-serif font-bold gradient-text">125+</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs text-foreground/30 tracking-widest uppercase font-medium">Scroll</span>
        <div className="w-5 h-9 rounded-full border-2 border-foreground/15 flex justify-center pt-2">
          <motion.div
            className="w-1 h-2 rounded-full bg-primary"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
