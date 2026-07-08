import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, MessageCircle, Languages } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { fadeOnly, slideLeft, slideRight } from "@/lib/animationVariants";

const defaultRegions = ["India", "Southeast Asia", "East Asia", "Latin America", "Africa"];

const defaultContactPillars = [
  "Market Entry & Operations",
  "Language & Localization",
  "Boardroom Interpretation",
  "Cross-Border Compliance",
];

const ContactSection = () => {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion() ?? false;
  const sectionRef = useRef<HTMLElement>(null);
  const regions = t("home.contact.regions", { returnObjects: true, defaultValue: defaultRegions }) as string[];
  const contactPillars = t("home.contact.pillars", {
    returnObjects: true,
    defaultValue: defaultContactPillars,
  }) as string[];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const gradientPosition = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion ? ["50% 50%", "50% 50%", "50% 50%"] : ["0% 50%", "50% 50%", "100% 50%"],
  );

  const copyVariant = reduceMotion ? fadeOnly : slideLeft;
  const cardVariant = reduceMotion ? fadeOnly : slideRight;

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden border-y border-[hsl(var(--border-light)/0.85)] py-6 theme-section-soft lg:py-10"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, hsl(var(--brand-purple-700) / 0.14), transparent 42%), radial-gradient(circle at 80% 70%, hsl(var(--brand-gold-500) / 0.12), transparent 38%)",
          backgroundSize: "200% 200%",
          backgroundPosition: gradientPosition,
        }}
      />
      <div className="glow-orb glow-orb-purple pointer-events-none -left-20 -top-24 h-[280px] w-[280px] opacity-[0.08] lg:-left-28 lg:-top-36 lg:h-[460px] lg:w-[460px] lg:opacity-[0.11]" />
      <div className="glow-orb glow-orb-gold pointer-events-none -bottom-20 right-[-18%] h-[240px] w-[240px] opacity-[0.07] lg:-bottom-32 lg:right-[-12%] lg:h-[380px] lg:w-[380px] lg:opacity-[0.09]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] theme-grid-overlay-light lg:opacity-[0.18]" />

      <motion.img
        src="/doodles/Call center-amico.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-12 top-1/4 hidden h-52 w-52 opacity-[0.09] lg:block"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 0.09, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      <div className="container relative z-10 mx-auto px-5 sm:px-6">
        <div className="mx-auto grid max-w-6xl items-start gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <motion.div
            className="space-y-5 lg:space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={copyVariant}
          >
            <div className="space-y-3 lg:space-y-4">
              <motion.span
                className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-card)/0.94)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-[hsl(var(--brand-purple-700))] shadow-[0_10px_36px_hsl(var(--brand-navy-950)/0.07)]"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Sparkles className="h-3.5 w-3.5 shrink-0 text-[hsl(var(--brand-gold-600))]" aria-hidden />
                {t("home.contact.badge")}
              </motion.span>

              <motion.h2
                className="font-serif text-[1.75rem] font-bold leading-[1.08] text-on-light sm:text-5xl lg:text-6xl lg:leading-[1.06]"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                {t("home.contact.titlePrefix")}{" "}
                <span className="italic text-[hsl(var(--brand-purple-700))]">
                  {t("home.contact.titleHighlight")}
                </span>
              </motion.h2>
            </div>

            <motion.div
              className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] lg:flex-wrap lg:gap-2.5 lg:overflow-visible [&::-webkit-scrollbar]:hidden"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {regions.map((region) => (
                <span
                  key={region}
                  className="shrink-0 rounded-full border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-card)/0.92)] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-[hsl(var(--brand-purple-700))] sm:text-xs sm:tracking-[0.16em]"
                >
                  {region}
                </span>
              ))}
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-2 sm:gap-3"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {contactPillars.map((pillar) => (
                <div
                  key={pillar}
                  className="rounded-xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-card)/0.94)] px-3 py-2.5 text-xs font-medium leading-snug text-on-light-secondary shadow-[0_8px_24px_hsl(var(--brand-navy-950)/0.05)] sm:px-4 sm:py-3 sm:text-sm"
                >
                  {pillar}
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="theme-card-light relative overflow-hidden rounded-2xl p-5 sm:rounded-3xl sm:p-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariant}
            whileHover={reduceMotion ? undefined : { scale: 1.02 }}
          >
            <img
              src="/doodles/Sent Message-pana.svg"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-6 -right-8 h-32 w-32 opacity-[0.08] sm:-bottom-8 sm:-right-10 sm:h-52 sm:w-52 sm:opacity-[0.1]"
            />
            <h3 className="relative mb-2 font-serif text-xl font-bold text-on-light sm:text-2xl">{t("home.contact.cardTitle")}</h3>
            <p className="mb-5 text-sm text-on-light-secondary sm:mb-6 sm:text-base">
              {t("home.contact.cardSubtitle")}
            </p>

            <div className="space-y-2.5 sm:space-y-3">
              <motion.a
                href="mailto:info@ewan.co.in?subject=Market%20Entry%20Conversation"
                whileHover={{ scale: 1.02, boxShadow: "0 0 24px hsl(var(--brand-purple-700) / 0.22)" }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex w-full min-h-12 items-center justify-between gap-3 rounded-xl border border-[hsl(var(--brand-purple-500)/0.3)] bg-gradient-to-r from-[hsl(var(--brand-purple-700))] to-[hsl(var(--brand-purple-500))] px-4 py-3.5 text-xs font-semibold uppercase tracking-[0.08em] text-white sm:px-5 sm:py-4 sm:text-sm"
              >
                <span className="inline-flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  {t("home.contact.marketEntryCta")}
                </span>
                <ArrowRight className="h-4 w-4" />
              </motion.a>

              <motion.a
                href="mailto:info@ewan.co.in?subject=Language%20Services%20Quote"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex w-full min-h-12 items-center justify-between gap-3 rounded-xl border-2 border-[hsl(var(--border-light-strong))] bg-[hsl(var(--surface-light-card))] px-4 py-3.5 text-xs font-semibold uppercase tracking-[0.08em] text-on-light transition-colors hover:bg-[hsl(var(--surface-light-200)/0.65)] sm:px-5 sm:py-4 sm:text-sm"
              >
                <span className="inline-flex items-center gap-2">
                  <Languages className="h-4 w-4" />
                  {t("home.contact.languageQuoteCta")}
                </span>
                <ArrowRight className="h-4 w-4" />
              </motion.a>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/ask-soham"
                  className="inline-flex w-full min-h-12 items-center justify-between gap-3 rounded-xl border border-[hsl(var(--brand-purple-500)/0.4)] bg-[hsl(var(--brand-purple-700)/0.08)] px-4 py-3.5 text-xs font-semibold uppercase tracking-[0.08em] text-[hsl(var(--brand-purple-700))] transition-colors hover:bg-[hsl(var(--brand-purple-700)/0.12)] sm:px-5 sm:py-4 sm:text-sm"
                >
                  <span className="inline-flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    {t("home.contact.askSohamCta")}
                  </span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>

            <motion.div
              className="mt-6 border-t border-[hsl(var(--border-light))] pt-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
            >
              <p className="text-[11px] uppercase tracking-[0.24em] text-on-light-muted">
                {t("home.contact.regionsFooter")}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
