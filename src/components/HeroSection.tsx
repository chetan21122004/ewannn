import { useRef } from "react";
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { blurReveal, fadeOnly, staggerContainer } from "@/lib/animationVariants";

const heroParticleColors = [
  "hsl(var(--brand-gold-500) / 0.2)",
  "hsl(var(--brand-cyan-500) / 0.18)",
  "hsl(var(--brand-cyan-500) / 0.14)",
  "hsl(var(--brand-navy-950) / 0.08)",
  "hsl(var(--brand-gold-500) / 0.16)",
  "hsl(var(--brand-gold-500) / 0.12)",
  "hsl(var(--brand-cyan-500) / 0.1)",
  "hsl(var(--brand-gold-500) / 0.15)",
];

const heroParticles = [
  { delay: 0, x: "10%", y: "20%", size: 4, color: heroParticleColors[0], xDrift: [-8, 8, -8] },
  { delay: 0.5, x: "80%", y: "30%", size: 3, color: heroParticleColors[1], xDrift: [6, -10, 6] },
  { delay: 1, x: "60%", y: "70%", size: 5, color: heroParticleColors[2], xDrift: [-12, 4, -12] },
  { delay: 1.5, x: "25%", y: "55%", size: 3, color: heroParticleColors[3], xDrift: [10, -6, 10] },
  { delay: 2, x: "72%", y: "15%", size: 4, color: heroParticleColors[4], xDrift: [-5, 12, -5] },
  { delay: 2.5, x: "40%", y: "80%", size: 3, color: heroParticleColors[5], xDrift: [8, -8, 8] },
  { delay: 3, x: "90%", y: "60%", size: 4, color: heroParticleColors[6], xDrift: [-14, 6, -14] },
  { delay: 3.5, x: "15%", y: "40%", size: 5, color: heroParticleColors[7], xDrift: [7, -11, 7] },
];

const FloatingParticle = ({
  delay,
  x,
  y,
  size,
  color,
  xDrift,
  reduceMotion,
}: {
  delay: number;
  x: string;
  y: string;
  size: number;
  color: string;
  xDrift: number[];
  reduceMotion: boolean;
}) => (
  <motion.div
    className="particle"
    style={{ left: x, top: y, width: size, height: size, background: color }}
    animate={
      reduceMotion
        ? { opacity: 0.4 }
        : {
            y: [0, -30, 0],
            x: xDrift,
            opacity: [0, 0.8, 0],
            scale: [0.5, 1, 0.5],
          }
    }
    transition={{ duration: 4, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

const WordSplitLine = ({
  text,
  className,
  reduceMotion,
  stagger = 0.07,
}: {
  text: string;
  className?: string;
  reduceMotion: boolean;
  stagger?: number;
}) => {
  const words = text.split(/\s+/).filter(Boolean);
  const wordVariant = reduceMotion ? fadeOnly : blurReveal;

  return (
    <motion.span
      className={className}
      variants={staggerContainer(stagger, 0)}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={wordVariant}
          className="inline-block"
          style={{ marginRight: i < words.length - 1 ? "0.28em" : undefined }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

const HeroSection = () => {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion() ?? false;
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const ctaOpacity = useTransform(scrollYProgress, [0, 0.35], reduceMotion ? [1, 1] : [1, 0]);
  const ctaY = useTransform(scrollYProgress, [0, 0.35], reduceMotion ? [0, 0] : [0, -24]);

  const containerVariants = staggerContainer(reduceMotion ? 0.05 : 0.07, reduceMotion ? 0 : 0.15);
  const itemVariant = reduceMotion ? fadeOnly : blurReveal;

  const fadeRightItem = reduceMotion
    ? fadeOnly
    : {
        hidden: { opacity: 0, x: 60, filter: "blur(10px)" },
        visible: {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const, delay: 0.4 },
        },
      };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-0 items-start overflow-hidden theme-section-soft lg:min-h-screen lg:items-center"
    >
      <div className="glow-orb glow-orb-gold -bottom-20 right-[-18%] h-[240px] w-[240px] opacity-[0.07] lg:-bottom-32 lg:right-[-12%] lg:h-[380px] lg:w-[380px] lg:opacity-[0.09]" />

      {heroParticles.map((particle, i) => (
        <FloatingParticle key={i} {...particle} reduceMotion={reduceMotion} />
      ))}
      <div className="pointer-events-none absolute inset-0 opacity-[0.14] theme-grid-overlay-light lg:opacity-[0.18]" />

      <motion.div
        className="pointer-events-none absolute right-[25%] top-0 hidden h-[500px] w-[500px] lg:block"
        initial={{ opacity: 0, rotate: -20 }}
        animate={{ opacity: 1, rotate: reduceMotion ? 0 : [0, 15, 0] }}
        transition={
          reduceMotion
            ? { duration: 1.5, delay: 0.5 }
            : { duration: 12, delay: 0.5, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <div
          className="h-full w-full rounded-full border-[40px] border-[hsl(var(--brand-purple-700)/0.12)]"
          style={{ clipPath: "inset(0 50% 50% 0)" }}
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 grain-overlay" />

      <div className="container relative z-10 mx-auto px-5 pb-8 pt-14 sm:px-6 lg:pb-12 lg:pt-24">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <h1 className="mb-4 text-[2rem] font-serif font-bold leading-[1.08] text-balance sm:text-5xl sm:leading-[1.05] sm:mb-6 lg:text-6xl xl:text-7xl">
              <span className="block text-on-light">
                <WordSplitLine text={t("home.hero.headingLine1")} reduceMotion={reduceMotion} />
              </span>
              <span className="block italic text-[hsl(var(--brand-purple-700))]">
                <WordSplitLine text={t("home.hero.headingLine2")} reduceMotion={reduceMotion} />
              </span>
            </h1>

            <motion.div variants={itemVariant} className="mb-6 lg:mb-8">
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

            <motion.div
              variants={itemVariant}
              style={{ opacity: ctaOpacity, y: ctaY }}
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

          <motion.div variants={fadeRightItem} initial="hidden" animate="visible" className="relative max-lg:mt-2">
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-[hsl(var(--surface-light-200)/0.9)] blur-2xl lg:-inset-4" />

              <motion.div
                className="absolute -right-6 -top-6 hidden h-[80%] w-[80%] rounded-full border-[30px] border-[hsl(var(--brand-purple-700)/0.1)] lg:block"
                style={{ clipPath: "inset(0 0 40% 40%)" }}
                animate={reduceMotion ? undefined : { rotate: [0, 15, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] shadow-premium-lg lg:rounded-3xl">
                <img
                  src="/hero-bg-new.png"
                  alt="Cross-border market expansion between India and Asia"
                  className="h-52 w-full object-cover sm:h-64 lg:h-[500px]"
                  width={800}
                  height={500}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[hsl(var(--surface-light-100))] to-transparent lg:h-32" />
    </section>
  );
};

export default HeroSection;
