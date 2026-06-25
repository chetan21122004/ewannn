import { ArrowRight, Sparkles, MessageCircle, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const defaultRegions = ["India", "Southeast Asia", "East Asia", "Latin America", "Africa"];

const heroParticleColors = [
  "hsl(var(--brand-purple-700) / 0.2)",
  "hsl(var(--brand-purple-500) / 0.18)",
  "hsl(var(--brand-cyan-500) / 0.14)",
  "hsl(var(--brand-navy-950) / 0.08)",
  "hsl(var(--brand-purple-700) / 0.16)",
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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden theme-section-soft">
      <div className="glow-orb glow-orb-purple w-[460px] h-[460px] -top-36 -left-28 opacity-[0.11]" />
      <div className="glow-orb glow-orb-gold w-[380px] h-[380px] -bottom-32 right-[-12%] opacity-[0.09]" />

      <FloatingParticle delay={0} x="10%" y="20%" size={4} color={heroParticleColors[0]} />
      <FloatingParticle delay={1} x="80%" y="30%" size={3} color={heroParticleColors[1]} />
      <FloatingParticle delay={2} x="60%" y="70%" size={5} color={heroParticleColors[2]} />
      <FloatingParticle delay={0.5} x="30%" y="80%" size={3} color={heroParticleColors[3]} />
      <FloatingParticle delay={1.5} x="90%" y="60%" size={4} color={heroParticleColors[4]} />

      <div className="absolute inset-0 pointer-events-none opacity-[0.18] theme-grid-overlay-light" />

      <motion.div
        className="absolute top-0 right-[25%] w-[500px] h-[500px] pointer-events-none"
        initial={{ opacity: 0, rotate: -20 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <div
          className="w-full h-full rounded-full border-[40px] border-[hsl(var(--brand-purple-700)/0.12)]"
          style={{ clipPath: "inset(0 50% 50% 0)" }}
        />
      </motion.div>

      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 pt-20 pb-16 lg:pt-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            {/* Pre-headline */}
            <motion.div variants={fadeUpItem} className="mb-6 flex flex-wrap items-center gap-2">
              <Globe className="w-4 h-4 text-[hsl(var(--brand-purple-700))]" />
              {regions.map((r, i) => (
                <span key={r} className="text-xs sm:text-sm text-[hsl(var(--brand-purple-700))] font-medium tracking-wider uppercase">
                  {r}
                  {i < regions.length - 1 && <span className="mx-1 text-[hsl(var(--brand-purple-700)/0.35)]">.</span>}
                </span>
              ))}
            </motion.div>

            {/* Main headline */}
            <motion.h1 variants={fadeUpItem} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-[1.05] mb-6 text-balance">
              <span className="text-on-light block">{t("home.hero.headingLine1")}</span>
              <span className="text-[hsl(var(--brand-purple-700))] block italic">
                {t("home.hero.headingLine2")}
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.div variants={fadeUpItem} className="mb-8">
              <p className="text-base sm:text-lg text-on-light-muted leading-relaxed max-w-xl text-pretty">
                {t("home.hero.subheadlinePrefix")}{" "}
                <span className="text-on-light font-medium">{t("home.hero.subheadlineForeign")}</span>{" "}
                {t("home.hero.subheadlineAnd")}{" "}
                <span className="text-on-light font-medium">{t("home.hero.subheadlineIndian")}</span>{" "}
                {t("home.hero.subheadlineSuffix")}{" "}
                <span className="text-[hsl(var(--brand-purple-700))] font-semibold">{t("home.hero.subheadlineLanguages")}</span>{" "}
                {t("home.hero.subheadlineEnd")}
              </p>
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
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full border-2 border-[hsl(var(--border-light-strong))] text-on-light font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-[hsl(var(--surface-light-200)/0.65)]"
              >
                {t("home.hero.ctaLanguageQuote")}
              </motion.a>
              <Link
                to="/ask-soham"
                className="inline-flex items-center gap-2 text-[hsl(var(--brand-purple-700))] font-medium text-sm tracking-wider uppercase group transition-transform hover:translate-x-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                {t("home.hero.ctaAskSoham")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right column */}
          <motion.div variants={fadeRightItem} initial="hidden" animate="visible" className="relative">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-[hsl(var(--surface-light-200)/0.9)] blur-2xl" />

              <motion.div
                className="absolute -top-8 -right-8 w-[80%] h-[80%] rounded-full border-[30px] border-[hsl(var(--brand-purple-700)/0.1)]"
                style={{ clipPath: "inset(0 0 40% 40%)" }}
                animate={{ rotate: [0, 3, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />

              <div className="relative rounded-3xl overflow-hidden shadow-premium-lg border border-[hsl(var(--border-light))]">
                <img
                  src="/hero-bg-new.png"
                  alt="UVAN cross-border market expansion"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                  width={800}
                  height={500}
                />
              </div>

              <motion.div
                className="absolute -bottom-6 -left-6 sm:left-4 theme-card-light rounded-2xl p-5 max-w-[280px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <p className="text-xs text-on-light-muted uppercase tracking-wider mb-1 font-medium">
                  {t("home.hero.floatingCard1Badge")}
                </p>
                <h3 className="text-xl font-serif font-bold text-on-light mb-2">{t("home.hero.floatingCard1Title")}</h3>
                <div className="flex gap-1 mt-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      className="h-1 flex-1 rounded-full bg-[hsl(var(--brand-purple-700))]"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1.4 + i * 0.1 }}
                    />
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-4 right-4 sm:-top-6 sm:right-8 theme-card-light rounded-xl p-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                whileHover={{ y: -3 }}
              >
                <p className="text-[10px] uppercase tracking-wider text-on-light-muted mb-1">{t("home.hero.floatingCard2Label")}</p>
                <p className="text-2xl font-serif font-bold text-[hsl(var(--brand-purple-700))]">{t("home.hero.floatingCard2Value")}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[hsl(var(--surface-light-100))] to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
