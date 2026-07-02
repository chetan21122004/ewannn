import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, AlertCircle, Building2, CheckCircle2, Factory, Lightbulb, Route, Trophy } from "lucide-react";
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
    text: "UVAN delivered the complete mandate - from initial market assessment and entity formation through to on-ground liaisoning and operational setup.",
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
  const reduceMotion = useReducedMotion();
  const steps = t("home.caseStudy.steps", { returnObjects: true, defaultValue: defaultSteps }) as Array<{
    label: string;
    text: string;
    iconColor: string;
    ringColor: string;
    labelColor: string;
  }>;
  const stepIcons = [AlertCircle, Lightbulb, Trophy] as const;
  const ease = [0.22, 1, 0.36, 1] as const;
  const fadeUp = reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 };
  const show = reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 };
  const transition = (delay = 0) => ({ duration: reduceMotion ? 0.35 : 0.72, delay, ease });

  return (
    <section
      id="media"
      className="relative overflow-hidden border-y border-[hsl(var(--border-light)/0.85)] py-8 theme-section-soft lg:py-10"
    >
      <span id="case-study" className="sr-only">{t("home.caseStudy.srLabel")}</span>
      <div className="glow-orb glow-orb-purple -left-20 -top-24 h-[280px] w-[280px] opacity-[0.08] lg:-left-28 lg:-top-36 lg:h-[460px] lg:w-[460px] lg:opacity-[0.11]" />
      <div className="glow-orb glow-orb-gold -bottom-20 right-[-18%] h-[240px] w-[240px] opacity-[0.07] lg:-bottom-32 lg:right-[-12%] lg:h-[380px] lg:w-[380px] lg:opacity-[0.09]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] theme-grid-overlay-light lg:opacity-[0.18]" />

      <div className="container relative z-10 mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-8 xl:gap-12">
          <motion.div
            className="relative order-2 overflow-hidden rounded-[1.5rem] border border-[hsl(var(--brand-purple-700)/0.18)] bg-[hsl(var(--brand-navy-950))] p-3 text-white shadow-[0_24px_70px_hsl(var(--brand-navy-950)/0.18)] sm:rounded-[2rem] sm:p-5 lg:order-1"
            initial={fadeUp}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,hsl(var(--brand-purple-500)/0.28),transparent_28%),radial-gradient(circle_at_88%_20%,hsl(var(--brand-gold-500)/0.18),transparent_24%)]" />
            <div className="pointer-events-none absolute -bottom-24 -right-20 hidden h-72 w-72 rounded-full border border-white/10 lg:block" />

            <div className="relative z-10">
              <div className="overflow-hidden rounded-[1.1rem] border border-white/12 bg-white/8 shadow-[0_18px_50px_hsl(var(--brand-navy-950)/0.28)] sm:rounded-[1.4rem]">
                <img
                  src={factoryImg}
                  alt={t("home.caseStudy.imageAlt")}
                  className="h-44 w-full object-cover sm:h-80 lg:h-[410px]"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2 sm:mt-4 sm:gap-3">
                {[
                  { icon: Route, value: "Japan -> India", label: "Corridor" },
                  { icon: Building2, value: "Full mandate", label: "Scope" },
                  { icon: CheckCircle2, value: "One partner", label: "Outcome" },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-white/10 bg-white/8 p-2.5 backdrop-blur sm:rounded-2xl sm:p-4">
                    <item.icon className="mb-1.5 h-3.5 w-3.5 text-[hsl(var(--brand-gold-500))] sm:mb-3 sm:h-4 sm:w-4" aria-hidden />
                    <p className="text-[11px] font-bold leading-tight text-white sm:text-sm">{item.value}</p>
                    <p className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.12em] text-white/52 sm:mt-1 sm:text-[10px] sm:tracking-[0.18em]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="relative order-1 lg:order-2">
            <motion.div
              initial={fadeUp}
              whileInView={show}
              viewport={{ once: true }}
              transition={transition(0.08)}
              className="mb-5 lg:mb-7"
            >
              <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-[hsl(var(--brand-purple-700)/0.14)] bg-white/75 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-[hsl(var(--brand-purple-700))] shadow-sm backdrop-blur lg:mb-5">
                <Factory className="h-3.5 w-3.5 text-[hsl(var(--brand-gold-600))]" aria-hidden />
                {t("home.caseStudy.badge")}
              </div>
              <h2 className="max-w-3xl font-serif text-[1.65rem] font-bold leading-[1.08] tracking-tight text-on-light sm:text-4xl lg:text-5xl lg:leading-[1.04]">
                {t("home.caseStudy.titlePrefix")}{" "}
                <span className="font-serif italic text-[hsl(var(--brand-purple-700))]">
                  {t("home.caseStudy.titleHighlight")}
                </span>
              </h2>
            </motion.div>

            <div className="grid gap-2.5 sm:gap-3">
              {steps.map((step, i) => {
                const Icon = stepIcons[i] ?? AlertCircle;
                return (
                  <motion.div
                    key={step.label}
                    initial={fadeUp}
                    whileInView={show}
                    viewport={{ once: true }}
                    transition={transition(0.16 + i * 0.09)}
                    whileHover={reduceMotion ? undefined : { y: -3 }}
                    className="group relative overflow-hidden rounded-[1.25rem] border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-card)/0.9)] p-4 shadow-[0_14px_40px_hsl(var(--brand-navy-950)/0.06)] backdrop-blur-sm transition-colors duration-300 hover:border-[hsl(var(--brand-purple-500)/0.28)] sm:rounded-[1.5rem] sm:p-6"
                  >
                    <div className="pointer-events-none absolute inset-y-4 left-0 w-1 rounded-r-full bg-gradient-to-b from-[hsl(var(--brand-gold-500))] via-[hsl(var(--brand-purple-500))] to-[hsl(var(--brand-cyan-500))] opacity-45 transition-opacity duration-300 group-hover:opacity-100 sm:inset-y-5" />
                    <div className="flex gap-3 sm:gap-5">
                      <motion.div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-[hsl(var(--surface-light-card))] sm:h-11 sm:w-11 sm:rounded-2xl ${step.ringColor}`}
                        whileHover={reduceMotion ? undefined : { rotate: 6, scale: 1.06 }}
                      >
                        <Icon className={`h-4 w-4 sm:h-5 sm:w-5 ${step.iconColor}`} aria-hidden />
                      </motion.div>
                      <div>
                        <div className="mb-1.5 flex flex-wrap items-center gap-2 sm:mb-2">
                          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-on-light-muted">
                            0{i + 1}
                          </span>
                          <p className={`text-[11px] font-bold uppercase tracking-[0.14em] sm:text-xs sm:tracking-[0.16em] ${step.labelColor}`}>
                            {step.label}
                          </p>
                        </div>
                        <p className="text-sm leading-[1.65] text-on-light-secondary sm:text-base sm:leading-[1.72]">{step.text}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={fadeUp}
              whileInView={show}
              viewport={{ once: true }}
              transition={transition(0.42)}
              className="pt-4 lg:pt-5"
            >
              <Link
                to="/media#case-study"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-[hsl(var(--brand-purple-500)/0.35)] bg-gradient-to-r from-[hsl(var(--brand-purple-700))] to-[hsl(var(--brand-purple-500))] px-6 py-3 text-sm font-bold uppercase tracking-[0.1em] text-white shadow-[0_14px_36px_hsl(var(--brand-navy-950)/0.14)] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-gold-500))] focus-visible:ring-offset-2 lg:w-auto lg:justify-start"
              >
                {t("home.caseStudy.cta")}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
