import { ArrowRight, Sparkles, MessageCircle, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const defaultRegions = ["India", "Southeast Asia", "East Asia", "Latin America", "Africa"];

const heroParticleColors = [
  "hsl(var(--brand-purple-500) / 0.28)",
  "hsl(var(--brand-purple-700) / 0.22)",
  "hsl(var(--brand-cyan-500) / 0.2)",
  "hsl(var(--surface-glass) / 0.22)",
  "hsl(var(--brand-purple-500) / 0.24)",
];

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
  const { t } = useTranslation();
  const regions = t("home.hero.regions", { returnObjects: true, defaultValue: defaultRegions }) as string[];
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
      <div className="glow-orb glow-orb-gold w-[380px] h-[380px] -top-40 -right-40 opacity-12" />
      <div className="glow-orb glow-orb-purple w-[320px] h-[320px] bottom-20 -left-20 opacity-12" />

      <FloatingParticle delay={0} x="10%" y="20%" size={4} color={heroParticleColors[0]} />
      <FloatingParticle delay={1} x="80%" y="30%" size={3} color={heroParticleColors[1]} />
      <FloatingParticle delay={2} x="60%" y="70%" size={5} color={heroParticleColors[2]} />
      <FloatingParticle delay={0.5} x="30%" y="80%" size={3} color={heroParticleColors[3]} />
      <FloatingParticle delay={1.5} x="90%" y="60%" size={4} color={heroParticleColors[4]} />

      <div className="absolute inset-0 pointer-events-none opacity-[0.03] theme-grid-overlay" />

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
              <Globe className="w-4 h-4 text-[hsl(var(--brand-purple-500))]" />
              {regions.map((r, i) => (
                <span key={r} className="text-xs sm:text-sm text-[hsl(var(--brand-purple-500)/0.85)] font-medium tracking-wider uppercase">
                  {r}
                  {i < regions.length - 1 && <span className="mx-1 text-[hsl(var(--brand-purple-500)/0.45)]">.</span>}
                </span>
              ))}
            </motion.div>

            {/* Main headline */}
            <motion.h1 variants={fadeUpItem} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-[1.05] mb-6">
              <span className="text-foreground block">{t("home.hero.headingLine1")}</span>
              <span className="bg-gradient-to-r from-[hsl(var(--brand-purple-500))] via-[hsl(var(--surface-glass))] to-[hsl(var(--brand-cyan-500))] bg-clip-text text-transparent block italic">
                {t("home.hero.headingLine2")}
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.div variants={fadeUpItem} className="mb-8">
              <div className="border-l-[3px] border-primary/40 pl-5 space-y-2">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                  {t("home.hero.subheadlinePrefix")}{" "}
                  <span className="text-foreground font-medium">{t("home.hero.subheadlineForeign")}</span>{" "}
                  {t("home.hero.subheadlineAnd")}{" "}
                  <span className="text-foreground font-medium">{t("home.hero.subheadlineIndian")}</span> —{" "}
                  {t("home.hero.subheadlineSuffix")}{" "}
                  <span className="text-primary font-semibold">{t("home.hero.subheadlineLanguages")}</span>{" "}
                  {t("home.hero.subheadlineEnd")}
                </p>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUpItem} className="flex flex-wrap items-center gap-4">
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px hsl(var(--brand-purple-500) / 0.26)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-[hsl(var(--brand-purple-700))] to-[hsl(var(--brand-purple-500))] text-white font-semibold text-sm tracking-wider uppercase transition-all duration-300 card-shine border border-[hsl(var(--brand-purple-500)/0.35)]"
              >
                <Sparkles className="w-4 h-4" />
                {t("home.hero.ctaMarketEntry")}
              </motion.a>
              <motion.a
                href="#language"
                whileHover={{ scale: 1.05, borderColor: "hsl(var(--brand-purple-500) / 0.6)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full border-2 border-[hsl(var(--surface-glass)/0.24)] text-foreground font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-[hsl(var(--surface-glass)/0.06)]"
              >
                {t("home.hero.ctaLanguageQuote")}
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 text-[hsl(var(--brand-purple-500))] font-medium text-sm tracking-wider uppercase group"
              >
                <MessageCircle className="w-4 h-4" />
                {t("home.hero.ctaAskSoham")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right column */}
          <motion.div variants={fadeRightItem} initial="hidden" animate="visible" className="relative">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-[hsl(var(--brand-purple-500)/0.12)] blur-2xl" />

              <motion.div
                className="absolute -top-8 -right-8 w-[80%] h-[80%] rounded-full border-[30px] border-primary/10"
                style={{ clipPath: "inset(0 0 40% 40%)" }}
                animate={{ rotate: [0, 3, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />

              <div className="relative rounded-3xl overflow-hidden shadow-gold-lg border border-[hsl(var(--surface-glass)/0.14)]">
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
                className="absolute -bottom-6 -left-6 sm:left-4 glass-card-purple rounded-2xl p-5 shadow-gold-md max-w-[280px]"
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
                <p className="text-2xl font-serif font-bold text-[hsl(var(--brand-purple-500))]">125+</p>
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
