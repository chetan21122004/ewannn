import { motion } from "framer-motion";
import { ArrowRight, AlertCircle, Lightbulb, Trophy } from "lucide-react";
import factoryImg from "@/assets/case-study-factory.jpg";
import { useTranslation } from "react-i18next";

const defaultSteps = [
  {
    label: "Problem",
    text: "Japanese manufacturer faced regulatory complexity and a critical language gap entering India.",
    iconColor: "text-[hsl(var(--brand-gold-500))]",
    ringColor: "border-[hsl(var(--brand-gold-500)/0.26)]",
    labelColor: "text-[hsl(var(--brand-gold-500)/0.9)]",
  },
  {
    label: "Solution",
    text: "Ewan handled full market entry — entity setup, compliance, liaison, and on-the-ground language support.",
    iconColor: "text-[hsl(var(--brand-purple-500))]",
    ringColor: "border-[hsl(var(--brand-purple-500)/0.28)]",
    labelColor: "text-[hsl(var(--brand-purple-500)/0.92)]",
  },
  {
    label: "Outcome",
    text: "End-to-end execution. Operational launch within months, not years.",
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
    <section id="media" className="py-10 lg:py-32 relative overflow-hidden theme-section-dark">
      <span id="case-study" className="sr-only">{t("home.caseStudy.srLabel")}</span>
      <div className="glow-orb glow-orb-purple w-[500px] h-[500px] top-10 -right-40 opacity-12" />
      <div className="glow-orb glow-orb-gold w-[340px] h-[340px] -bottom-24 left-8 opacity-10" />
      <div className="absolute inset-0 theme-grid-overlay opacity-15 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card-purple text-[hsl(var(--brand-purple-500))] text-xs font-semibold tracking-wider uppercase mb-5">
            {t("home.caseStudy.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            {t("home.caseStudy.titlePrefix")}{" "}
            <span className="bg-gradient-to-r from-[hsl(var(--brand-purple-500))] via-white to-[hsl(var(--brand-cyan-500))] bg-clip-text text-transparent italic">
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
            <div className="absolute -inset-4 rounded-3xl bg-[hsl(var(--brand-purple-500)/0.12)] blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border border-[hsl(var(--surface-glass)/0.16)] shadow-gold-lg">
              <img src={factoryImg} alt={t("home.caseStudy.imageAlt")} className="w-full h-[400px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
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
                  className="flex gap-5 p-6 rounded-2xl glass-card border border-[hsl(var(--surface-glass)/0.1)]"
                >
                  <motion.div
                    className={`w-12 h-12 rounded-xl glass-card-purple flex items-center justify-center shrink-0 border ${step.ringColor}`}
                    whileHover={{ rotate: 8, scale: 1.1 }}
                  >
                    <Icon className={`w-5 h-5 ${step.iconColor}`} />
                  </motion.div>
                  <div>
                    <p className={`text-xs uppercase tracking-wider font-semibold mb-1 ${step.labelColor}`}>{step.label}</p>
                    <p className="text-foreground/80 leading-relaxed">{step.text}</p>
                  </div>
                </motion.div>
              );
            })}

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, x: 4 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[hsl(var(--brand-purple-700))] to-[hsl(var(--brand-purple-500))] text-white font-semibold text-sm tracking-wider uppercase card-shine shadow-gold-md border border-[hsl(var(--brand-purple-500)/0.35)]"
            >
              {t("home.caseStudy.cta")}
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
