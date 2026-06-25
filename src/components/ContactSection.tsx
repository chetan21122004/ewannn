import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MessageCircle, Languages } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const defaultRegions = ["India", "Southeast Asia", "East Asia", "Latin America", "Africa"];

const defaultContactPillars = [
  "Market Entry & Operations",
  "Language & Localization",
  "Boardroom Interpretation",
  "Cross-Border Compliance",
];

const ContactSection = () => {
  const { t } = useTranslation();
  const regions = t("home.contact.regions", { returnObjects: true, defaultValue: defaultRegions }) as string[];
  const contactPillars = t("home.contact.pillars", {
    returnObjects: true,
    defaultValue: defaultContactPillars,
  }) as string[];
  return (
    <section id="contact" className="relative overflow-hidden border-y border-[hsl(var(--border-light)/0.85)] py-10 lg:py-16 theme-section-soft">
      <div className="glow-orb glow-orb-purple pointer-events-none h-[460px] w-[460px] -top-36 -left-28 opacity-[0.11]" />
      <div className="glow-orb glow-orb-gold pointer-events-none h-[380px] w-[380px] -bottom-32 right-[-12%] opacity-[0.09]" />
      <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.18]" />

      {/* Decorative background support visual */}
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

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
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
                className="font-serif text-4xl font-bold leading-[1.06] text-on-light sm:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                {t("home.contact.titlePrefix")}{" "}
                <span className="text-[hsl(var(--brand-purple-700))] italic">
                  {t("home.contact.titleHighlight")}
                </span>
              </motion.h2>

              <motion.p
                className="max-w-2xl text-base leading-relaxed text-on-light-secondary sm:text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                {t("home.contact.subtitle")}
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap gap-2.5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {regions.map((region) => (
                <span
                  key={region}
                  className="rounded-full border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-card)/0.92)] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))]"
                >
                  {region}
                </span>
              ))}
            </motion.div>

            <motion.div
              className="grid gap-3 sm:grid-cols-2"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {contactPillars.map((pillar) => (
                <div
                  key={pillar}
                  className="rounded-xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-card)/0.94)] px-4 py-3 text-sm font-medium text-on-light-secondary shadow-[0_8px_24px_hsl(var(--brand-navy-950)/0.05)]"
                >
                  {pillar}
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="theme-card-light relative overflow-hidden rounded-3xl p-6 sm:p-7"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <img
              src="/doodles/Sent Message-pana.svg"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-8 -right-10 h-44 w-44 opacity-[0.1] sm:h-52 sm:w-52"
            />
            <h3 className="relative mb-2 font-serif text-2xl font-bold text-on-light">{t("home.contact.cardTitle")}</h3>
            <p className="mb-6 text-sm text-on-light-secondary sm:text-base">
              {t("home.contact.cardSubtitle")}
            </p>

            <div className="space-y-3">
              <motion.a
                href="mailto:info@ewan.co.in?subject=Market%20Entry%20Conversation"
                whileHover={{ scale: 1.02, boxShadow: "0 0 24px hsl(var(--brand-purple-700) / 0.22)" }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex w-full items-center justify-between gap-3 rounded-xl border border-[hsl(var(--brand-purple-500)/0.3)] bg-gradient-to-r from-[hsl(var(--brand-purple-700))] to-[hsl(var(--brand-purple-500))] px-5 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white"
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
                className="inline-flex w-full items-center justify-between gap-3 rounded-xl border-2 border-[hsl(var(--border-light-strong))] bg-[hsl(var(--surface-light-card))] px-5 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-on-light transition-colors hover:bg-[hsl(var(--surface-light-200)/0.65)]"
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
                  className="inline-flex w-full items-center justify-between gap-3 rounded-xl border border-[hsl(var(--brand-purple-500)/0.4)] bg-[hsl(var(--brand-purple-700)/0.08)] px-5 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-[hsl(var(--brand-purple-700))] transition-colors hover:bg-[hsl(var(--brand-purple-700)/0.12)]"
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
