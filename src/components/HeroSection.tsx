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
    <section
      id="home"
      className="relative flex min-h-0 items-start overflow-hidden theme-section-soft lg:min-h-screen lg:items-center"
    >
      <div className="glow-orb glow-orb-purple -left-20 -top-24 h-[280px] w-[280px] opacity-[0.08] lg:-left-28 lg:-top-36 lg:h-[460px] lg:w-[460px] lg:opacity-[0.11]" />
      <div className="glow-orb glow-orb-gold -bottom-20 right-[-18%] h-[240px] w-[240px] opacity-[0.07] lg:-bottom-32 lg:right-[-12%] lg:h-[380px] lg:w-[380px] lg:opacity-[0.09]" />

      <FloatingParticle delay={0} x="10%" y="20%" size={4} color={heroParticleColors[0]} />
      <FloatingParticle delay={1} x="80%" y="30%" size={3} color={heroParticleColors[1]} />
      <FloatingParticle delay={2} x="60%" y="70%" size={5} color={heroParticleColors[2]} />
      <div className="pointer-events-none absolute inset-0 opacity-[0.14] theme-grid-overlay-light lg:opacity-[0.18]" />

      <motion.div
        className="pointer-events-none absolute right-[25%] top-0 hidden h-[500px] w-[500px] lg:block"
        initial={{ opacity: 0, rotate: -20 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <div
          className="h-full w-full rounded-full border-[40px] border-[hsl(var(--brand-purple-700)/0.12)]"
          style={{ clipPath: "inset(0 50% 50% 0)" }}
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 grain-overlay" />

      <div className="container relative z-10 mx-auto px-5 pb-10 pt-16 sm:px-6 lg:pb-16 lg:pt-28">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            {/* Pre-headline - mobile: scroll pills; desktop: dot-separated list */}
            <motion.div variants={fadeUpItem} className="mb-4 lg:mb-6">
              <div className="flex items-center gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden">
                <Globe className="h-4 w-4 shrink-0 text-[hsl(var(--brand-purple-700))]" aria-hidden />
                {regions.map((r) => (
                  <span
                    key={r}
                    className="shrink-0 rounded-full border border-[hsl(var(--border-light))] bg-white/85 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[hsl(var(--brand-purple-700))] shadow-sm"
                  >
                    {r}
                  </span>
                ))}
              </div>
              <div className="hidden flex-wrap items-center gap-2 lg:flex">
                <Globe className="h-4 w-4 text-[hsl(var(--brand-purple-700))]" aria-hidden />
                {regions.map((r, i) => (
                  <span
                    key={r}
                    className="text-xs font-medium uppercase tracking-wider text-[hsl(var(--brand-purple-700))] sm:text-sm"
                  >
                    {r}
                    {i < regions.length - 1 && (
                      <span className="mx-1 text-[hsl(var(--brand-purple-700)/0.35)]">.</span>
                    )}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              variants={fadeUpItem}
              className="mb-4 text-[2rem] font-serif font-bold leading-[1.08] text-balance sm:text-5xl sm:leading-[1.05] sm:mb-6 lg:text-6xl xl:text-7xl"
            >
              <span className="block text-on-light">{t("home.hero.headingLine1")}</span>
              <span className="block italic text-[hsl(var(--brand-purple-700))]">{t("home.hero.headingLine2")}</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.div variants={fadeUpItem} className="mb-6 lg:mb-8">
              <p className="max-w-xl text-[0.9375rem] leading-[1.65] text-on-light-muted text-pretty sm:text-lg sm:leading-relaxed">
                {t("home.hero.subheadlinePrefix")}{" "}
                <span className="font-medium text-on-light">{t("home.hero.subheadlineForeign")}</span>{" "}
                {t("home.hero.subheadlineAnd")}{" "}
                <span className="font-medium text-on-light">{t("home.hero.subheadlineIndian")}</span>{" "}
                {t("home.hero.subheadlineSuffix")}{" "}
                <span className="font-semibold text-[hsl(var(--brand-purple-700))]">
                  {t("home.hero.subheadlineLanguages")}
                </span>{" "}
                {t("home.hero.subheadlineEnd")}
              </p>
            </motion.div>

            {/* CTAs - mobile: full-width stack */}
            <motion.div
              variants={fadeUpItem}
              className="flex flex-col gap-3 max-lg:w-full lg:flex-row lg:flex-wrap lg:items-center lg:gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="w-full lg:w-auto">
                <Link
                  to="/market-entry"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-[hsl(var(--brand-navy-950))] shadow-[0_8px_24px_-10px_hsl(var(--brand-gold-500)/0.65)] transition-all duration-300 hover:brightness-105 lg:w-auto lg:px-7 lg:py-4"
                >
                  <Sparkles className="h-4 w-4" aria-hidden />
                  {t("home.hero.ctaMarketEntry")}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="w-full lg:w-auto">
                <Link
                  to="/language-localization"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border-2 border-[hsl(var(--border-light-strong))] bg-transparent px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-on-light transition-all duration-300 hover:border-[hsl(var(--brand-purple-500)/0.45)] hover:bg-[hsl(var(--surface-light-200)/0.65)] lg:w-auto lg:px-7 lg:py-4"
                >
                  {t("home.hero.ctaLanguageQuote")}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </motion.div>
              <Link
                to="/ask-soham"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 py-1 text-sm font-medium uppercase tracking-wider text-[hsl(var(--brand-purple-700))] transition-transform group hover:translate-x-0.5 lg:w-auto lg:justify-start lg:py-0"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                {t("home.hero.ctaAskSoham")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right column */}
          <motion.div variants={fadeRightItem} initial="hidden" animate="visible" className="relative max-lg:mt-2">
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-[hsl(var(--surface-light-200)/0.9)] blur-2xl lg:-inset-4" />

              <motion.div
                className="absolute -right-6 -top-6 hidden h-[80%] w-[80%] rounded-full border-[30px] border-[hsl(var(--brand-purple-700)/0.1)] lg:block"
                style={{ clipPath: "inset(0 0 40% 40%)" }}
                animate={{ rotate: [0, 3, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />

              <div className="relative overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] shadow-premium-lg lg:rounded-3xl">
                <img
                  src="/hero-bg-new.png"
                  alt="UVAN cross-border market expansion"
                  className="h-52 w-full object-cover sm:h-64 lg:h-[500px]"
                  width={800}
                  height={500}
                />
              </div>

              {/* Mobile: inline stat cards instead of overlapping floats */}
              <div className="mt-3 grid grid-cols-2 gap-2.5 lg:hidden">
                <div className="theme-card-light rounded-xl border border-[hsl(var(--border-light))] p-3.5">
                  <p className="text-[9px] font-medium uppercase tracking-wider text-on-light-muted">
                    {t("home.hero.floatingCard2Label")}
                  </p>
                  <p className="mt-0.5 font-serif text-xl font-bold text-[hsl(var(--brand-purple-700))]">
                    {t("home.hero.floatingCard2Value")}
                  </p>
                </div>
                <div className="theme-card-light rounded-xl border border-[hsl(var(--border-light))] p-3.5">
                  <p className="text-[9px] font-medium uppercase tracking-wider text-on-light-muted">
                    {t("home.hero.floatingCard1Badge")}
                  </p>
                  <p className="mt-0.5 font-serif text-sm font-bold leading-snug text-on-light">
                    {t("home.hero.floatingCard1Title")}
                  </p>
                </div>
              </div>

              <motion.div
                className="theme-card-light absolute -bottom-6 -left-6 hidden max-w-[280px] rounded-2xl p-5 sm:left-4 lg:block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <p className="mb-1 text-xs font-medium uppercase tracking-wider text-on-light-muted">
                  {t("home.hero.floatingCard1Badge")}
                </p>
                <h3 className="mb-2 font-serif text-xl font-bold text-on-light">{t("home.hero.floatingCard1Title")}</h3>
                <div className="mt-2 flex gap-1">
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
                className="theme-card-light absolute -top-4 right-4 hidden rounded-xl p-4 sm:-top-6 sm:right-8 lg:block"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                whileHover={{ y: -3 }}
              >
                <p className="mb-1 text-[10px] uppercase tracking-wider text-on-light-muted">
                  {t("home.hero.floatingCard2Label")}
                </p>
                <p className="font-serif text-2xl font-bold text-[hsl(var(--brand-purple-700))]">
                  {t("home.hero.floatingCard2Value")}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[hsl(var(--surface-light-100))] to-transparent lg:h-32" />
    </section>
  );
};

export default HeroSection;
