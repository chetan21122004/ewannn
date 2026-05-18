import { motion } from "framer-motion";
import { ArrowRight, AlertCircle, Lightbulb, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import factoryImg from "@/assets/case-study-factory.jpg";
import { useTranslation } from "react-i18next";

const defaultSteps = [
  {
    label: "The mandate",
    text: "A leading Japanese manufacturer needed a trusted partner to navigate India's regulatory environment, establish local operations and bridge the language gap between Japanese leadership and Indian stakeholders.",
    iconColor: "text-[hsl(var(--brand-gold-500))]",
    ringColor: "border-[hsl(var(--brand-gold-500)/0.26)]",
    labelColor: "text-[hsl(var(--brand-gold-500)/0.9)]",
  },
  {
    label: "Delivery",
    text: "Ewan delivered the complete mandate - from initial market assessment and entity formation through to on-ground liaisoning and operational setup.",
    iconColor: "text-[hsl(var(--brand-purple-500))]",
    ringColor: "border-[hsl(var(--brand-purple-500)/0.28)]",
    labelColor: "text-[hsl(var(--brand-purple-500)/0.92)]",
  },
  {
    label: "Outcome",
    text: "A full market entry mandate delivered. Japanese leadership. Indian operations. One partner throughout.",
    iconColor: "text-[hsl(var(--brand-cyan-500))]",
    ringColor: "border-[hsl(var(--brand-cyan-500)/0.24)]",
    labelColor: "text-[hsl(var(--brand-cyan-500)/0.9)]",
  },
];

const CaseStudySection = () => {
  const { t } = useTranslation();
  const steps = t("home.caseStudy.steps", { returnObjects: true, defaultValue: defaultSteps }) as Array<{
    label: string;
    text: string;
    iconColor: string;
    ringColor: string;
    labelColor: string;
  }>;
  const stepIcons = [AlertCircle, Lightbulb, Trophy] as const;
  return (
    <section
      id="media"
      className="relative overflow-hidden border-y border-[hsl(var(--border-light)/0.85)] py-10 lg:py-32 theme-section-soft"
    >
      <span id="case-study" className="sr-only">{t("home.caseStudy.srLabel")}</span>
      <div className="glow-orb glow-orb-purple w-[460px] h-[460px] -top-36 -left-28 opacity-[0.11]" />
      <div className="glow-orb glow-orb-gold w-[380px] h-[380px] -bottom-32 right-[-12%] opacity-[0.09]" />
      <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.18]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="mb-5 inline-block rounded-full border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-card)/0.94)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[hsl(var(--brand-purple-700))] shadow-[0_10px_36px_hsl(var(--brand-navy-950)/0.07)]">
            {t("home.caseStudy.badge")}
          </span>
          <h2 className="mb-4 font-serif text-3xl font-bold text-on-light sm:text-4xl lg:text-5xl">
            {t("home.caseStudy.titlePrefix")}{" "}
            <span className="bg-gradient-to-r from-[hsl(var(--brand-purple-800))] via-[hsl(var(--brand-purple-700))] to-[hsl(var(--brand-cyan-500))] bg-clip-text font-serif italic text-transparent">
              {t("home.caseStudy.titleHighlight")}
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -inset-4 rounded-3xl bg-[hsl(var(--surface-light-200)/0.9)] blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-[hsl(var(--border-light))] shadow-premium-lg">
              <img src={factoryImg} alt={t("home.caseStudy.imageAlt")} className="h-[400px] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--surface-light-card)/0.85)] via-transparent to-transparent" />
            </div>
          </motion.div>

          <div className="space-y-6">
            {steps.map((step, i) => {
              const Icon = stepIcons[i] ?? AlertCircle;
              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.7 }}
                  whileHover={{ x: 4 }}
                  className="theme-card-light flex gap-5 rounded-2xl p-6"
                >
                  <motion.div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border bg-[hsl(var(--surface-light-card))] ${step.ringColor}`}
                    whileHover={{ rotate: 8, scale: 1.1 }}
                  >
                    <Icon className={`h-5 w-5 ${step.iconColor}`} />
                  </motion.div>
                  <div>
                    <p className={`mb-1 text-xs font-semibold uppercase tracking-wider ${step.labelColor}`}>{step.label}</p>
                    <p className="leading-relaxed text-on-light-secondary">{step.text}</p>
                  </div>
                </motion.div>
              );
            })}

            <motion.div whileHover={{ scale: 1.04, x: 4 }} className="inline-block">
              <Link
                to="/media#case-study"
                className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--brand-purple-500)/0.35)] bg-gradient-to-r from-[hsl(var(--brand-purple-700))] to-[hsl(var(--brand-purple-500))] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white card-shine shadow-[0_14px_36px_hsl(var(--brand-navy-950)/0.14)]"
              >
                {t("home.caseStudy.cta")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
