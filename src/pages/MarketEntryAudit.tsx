import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  Building2,
  ClipboardCheck,
  FileText,
  Handshake,
  MessageCircle,
  Network,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/PageLayout";
import AeoFrequentlyAskedQuestions from "@/components/AeoFrequentlyAskedQuestions";
import { MARKET_ENTRY_AUDIT_FAQS } from "@/data/aeoContent";
import { absoluteUrl, faqPageSchema, webPageWithLeadAction } from "@/lib/schemaHelpers";
import { SOHAM_EMAIL } from "@/lib/site";
import { submitFormFields } from "@/lib/formSubmit";

const MARKET_ENTRY_AUDIT_KEYWORDS =
  "India market entry checklist free, international expansion audit, cross-border business readiness, India entry risk assessment, 2026 global market entry audit";

const AUDIT_PDF_URL = import.meta.env.VITE_MARKET_ENTRY_AUDIT_PDF_URL ?? "/Ewan_GlobalMarketEntry_Audit_2026.pdf";

const marketEntryAuditLd = [
  webPageWithLeadAction(absoluteUrl("/market-entry-audit/")),
  faqPageSchema(absoluteUrl("/market-entry-audit/"), MARKET_ENTRY_AUDIT_FAQS),
];

const defaultInsideItems = [
  {
    title: "Regulatory & Entity Infrastructure",
    copy: "Self-assessment checklist and what it costs companies that enter without the right entity and compliance footing.",
  },
  {
    title: "Partner Integrity Verification",
    copy: "Checklist cues and the cost of partners and distributors that were never verified on the ground.",
  },
  {
    title: "The Coordination Tax",
    copy: "Self-assessment for coordination overhead and what it costs when HQ and local execution stay misaligned.",
  },
  {
    title: "Human Capital Strategy",
    copy: "Readiness checks for staffing, visas, and local talent - and what slips when this gap is left open.",
  },
  {
    title: "Executive Liaison & Negotiation",
    copy: "Assessment prompts for high-stakes liaison and the cost of decisions made without on-ground authority.",
  },
];

const gapIcons = [Building2, ShieldCheck, Network, Users, Handshake];

const heroStats = [
  { value: "5", label: "Operational gaps" },
  { value: "3", label: "Page framework" },
  { value: "10+", label: "Years on-ground" },
];

const processSteps = [
  {
    step: "01",
    title: "Download the audit",
    copy: "Enter your work email and receive the 3-page diagnostic framework instantly.",
  },
  {
    step: "02",
    title: "Run the self-assessment",
    copy: "Work through each gap with checklist prompts designed for expansion leaders.",
  },
  {
    step: "03",
    title: "Interpret the results",
    copy: "Book a focused call with Soham to pressure-test findings against your corridor.",
  },
];

const MarketEntryAudit = () => {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const insideItems = t("marketEntryAudit.inside.items", {
    returnObjects: true,
    defaultValue: defaultInsideItems,
  }) as Array<{ title: string; copy: string }>;

  const hidden = reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 };
  const show = { opacity: 1, y: 0 };
  const transition = (delay = 0) => ({
    duration: reduceMotion ? 0.35 : 0.72,
    delay,
    ease: [0.22, 1, 0.36, 1] as const,
  });

  const handleDownload = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) {
      return;
    }
    setSubmitting(true);
    setSubmitError(false);
    const result = await submitFormFields(SOHAM_EMAIL, "2026 Market Entry Audit Download Request", {
      email: email.trim(),
    });
    if (result === "sent") {
      setSubmitted(true);
    } else {
      setSubmitError(true);
    }
    setSubmitting(false);
  };

  const downloadCard = submitError ? (
    <div className="rounded-2xl border border-red-200 bg-red-50 p-6 sm:p-7">
      <p className="text-sm leading-relaxed text-on-light">
        We couldn&apos;t process your request. Email{" "}
        <a href={`mailto:${SOHAM_EMAIL}`} className="font-semibold text-[hsl(var(--brand-purple-700))] hover:underline">
          {SOHAM_EMAIL}
        </a>{" "}
        for the audit PDF.
      </p>
      <button
        type="button"
        onClick={() => setSubmitError(false)}
        className="mt-4 text-sm font-semibold text-[hsl(var(--brand-purple-700))] hover:underline"
      >
        Try again
      </button>
    </div>
  ) : submitted ? (
    <div className="rounded-2xl border border-[hsl(var(--border-light))] bg-white p-6 shadow-[0_20px_60px_hsl(var(--brand-navy-950)/0.08)] sm:p-7">
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[hsl(var(--brand-purple-700)/0.08)]">
        <ClipboardCheck className="h-5 w-5 text-[hsl(var(--brand-purple-700))]" aria-hidden />
      </div>
      <h2 className="font-serif text-xl font-bold text-on-light sm:text-2xl">{t("marketEntryAudit.hero.confirmationTitle")}</h2>
      <p className="mt-2 text-sm leading-relaxed text-on-light-secondary">{t("marketEntryAudit.hero.confirmationCopy")}</p>
      <a
        href={AUDIT_PDF_URL}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] shadow-[0_12px_32px_hsl(var(--brand-gold-500)/0.28)] transition hover:brightness-105 sm:w-auto"
      >
        {t("marketEntryAudit.hero.downloadLink")}
        <ArrowRight className="h-4 w-4" aria-hidden />
      </a>
      <p className="mt-5 text-xs leading-relaxed text-on-light-muted">{t("marketEntryAudit.hero.readinessNote")}</p>
      <Link
        to="/ask-soham"
        className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--brand-purple-700))] hover:underline"
      >
        {t("marketEntryAudit.readiness.readinessCta")}
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </div>
  ) : (
    <form
      onSubmit={handleDownload}
      className="rounded-2xl border border-[hsl(var(--border-light))] bg-white p-6 shadow-[0_20px_60px_hsl(var(--brand-navy-950)/0.08)] sm:p-7"
    >
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[hsl(var(--brand-gold-500)/0.12)]">
        <FileText className="h-5 w-5 text-[hsl(var(--brand-gold-600))]" aria-hidden />
      </div>
      <p className="font-serif text-xl font-bold text-on-light sm:text-2xl">{t("marketEntryAudit.hero.formLabel")}</p>
      <p className="mt-2 text-sm leading-relaxed text-on-light-secondary">
        Free 3-page diagnostic · No commitment · Built from on-ground cross-border work
      </p>
      <div className="mt-5 space-y-3">
        <input
          className="min-h-11 w-full rounded-xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] px-4 py-3 text-sm text-on-light placeholder:text-on-light-muted focus:border-[hsl(var(--brand-purple-700)/0.5)] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-purple-700)/0.15)]"
          placeholder={t("marketEntryAudit.hero.emailPlaceholder")}
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-label={t("marketEntryAudit.hero.emailPlaceholder")}
        />
        <button
          type="submit"
          disabled={submitting}
          className="min-h-11 w-full rounded-xl bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] shadow-[0_12px_32px_hsl(var(--brand-gold-500)/0.28)] transition hover:brightness-105 disabled:opacity-60"
        >
          {submitting ? "Sending…" : t("marketEntryAudit.hero.downloadCta")}
        </button>
      </div>
    </form>
  );

  return (
    <PageLayout
      title={t("seo.marketEntryAudit.title")}
      description={t("seo.marketEntryAudit.description")}
      canonicalPath="/market-entry-audit/"
      keywords={MARKET_ENTRY_AUDIT_KEYWORDS}
      jsonLd={marketEntryAuditLd}
    >
      <section className="relative isolate overflow-hidden theme-section-soft section-pad-hero sm:px-6">
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.12]" />
        <div className="glow-orb glow-orb-gold pointer-events-none -right-20 top-1/4 h-[240px] w-[240px] opacity-[0.06] lg:h-[360px] lg:w-[360px] lg:opacity-[0.08]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <motion.div className="lg:col-span-7" initial={hidden} animate={show} transition={transition(0)}>
              <p className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[hsl(var(--brand-purple-700))] sm:mb-5 sm:px-4 sm:py-1.5 sm:text-xs sm:tracking-[0.2em]">
                <Sparkles className="h-3 w-3 text-[hsl(var(--brand-gold-600))]" aria-hidden />
                {t("marketEntryAudit.hero.badge")}
              </p>

              <h1 className="font-serif text-[1.85rem] font-bold leading-[1.08] text-on-light sm:text-4xl lg:text-5xl xl:text-[3.25rem] xl:leading-tight">
                The 5 Operational Gaps That{" "}
                <span className="text-[hsl(var(--brand-purple-700))]">Quietly Kill International Expansion.</span>
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-on-light-secondary sm:mt-6 sm:text-base lg:text-lg">
                {t("marketEntryAudit.hero.subtitle")}
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-on-light-muted sm:text-[0.9375rem]">
                {t("marketEntryAudit.hero.whatItIs")}
              </p>

              <div className="mt-6 grid grid-cols-3 gap-2 sm:mt-8 sm:gap-3">
                {heroStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={hidden}
                    animate={show}
                    transition={transition(0.08 + index * 0.06)}
                    className="rounded-xl border border-[hsl(var(--border-light))] bg-white/80 px-3 py-3 text-center shadow-[0_8px_24px_hsl(var(--brand-navy-950)/0.04)] backdrop-blur-sm sm:rounded-2xl sm:px-4 sm:py-4"
                  >
                    <p className="font-serif text-xl font-bold text-[hsl(var(--brand-navy-950))] sm:text-2xl">{stat.value}</p>
                    <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-on-light-muted sm:text-[10px]">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
                <motion.a
                  href="#inside"
                  whileHover={reduceMotion ? undefined : { scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-5 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] shadow-[0_16px_40px_hsl(var(--brand-gold-500)/0.28)] transition hover:brightness-105 sm:px-6"
                >
                  See what&apos;s inside
                  <ArrowDown className="h-4 w-4 shrink-0" aria-hidden />
                </motion.a>
                <Link
                  to="/ask-soham"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[hsl(var(--border-light-strong))] bg-white px-5 py-3 text-sm font-semibold text-on-light transition hover:bg-[hsl(var(--surface-light-100))] sm:px-6"
                >
                  {t("marketEntryAudit.readiness.askSohamCta")}
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="relative mx-auto w-full max-w-[440px] lg:col-span-5 lg:max-w-none"
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 32 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
              transition={transition(0.12)}
            >
              <div className="overflow-hidden rounded-[1.75rem] border border-[hsl(var(--border-light))] bg-white shadow-[0_20px_60px_hsl(var(--brand-navy-950)/0.08)] sm:rounded-[2rem]">
                <img
                  src="/stitch/language-gazette/article-market-entry.jpg"
                  alt="Market entry planning and cross-border expansion"
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
              <div className="mt-5 lg:mt-6">{downloadCard}</div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="inside" className="relative scroll-mt-28 overflow-hidden theme-section-light px-5 section-pad sm:px-6">
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.08]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
            className="max-w-3xl"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-700))]">
              Diagnostic framework
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-on-light sm:text-4xl">{t("marketEntryAudit.inside.title")}</h2>
            <p className="mt-4 text-base leading-relaxed text-on-light-secondary sm:text-[1.0625rem]">
              {t("marketEntryAudit.inside.intro")}
            </p>
          </motion.div>

          <div className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-2 lg:gap-5">
            {insideItems.map((item, index) => {
              const Icon = gapIcons[index] ?? ClipboardCheck;
              const isFeatured = index === 0;

              return (
                <motion.article
                  key={item.title}
                  initial={hidden}
                  whileInView={show}
                  viewport={{ once: true }}
                  transition={transition(0.04 + index * 0.05)}
                  className={`group relative overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-white p-6 shadow-[0_12px_40px_hsl(var(--brand-navy-950)/0.05)] transition hover:border-[hsl(var(--brand-purple-500)/0.22)] hover:shadow-[0_16px_48px_hsl(var(--brand-navy-950)/0.08)] sm:p-7 ${
                    isFeatured ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="pointer-events-none absolute -right-4 -top-4 font-serif text-7xl font-bold leading-none text-[hsl(var(--brand-navy-950)/0.04)] transition group-hover:text-[hsl(var(--brand-purple-700)/0.08)]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="relative">
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(var(--brand-purple-700)/0.08)]">
                      <Icon className="h-5 w-5 text-[hsl(var(--brand-purple-700))]" aria-hidden />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-on-light sm:text-xl">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-on-light-secondary">{item.copy}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden theme-section-soft px-5 section-pad sm:px-6">
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.1]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
            className="overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-white shadow-[0_20px_60px_hsl(var(--brand-navy-950)/0.06)] sm:rounded-[1.75rem] lg:grid lg:grid-cols-3 lg:items-stretch"
          >
            <div className="border-b border-[hsl(var(--border-light))] p-6 sm:p-8 lg:col-span-1 lg:border-b-0 lg:border-r lg:p-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-700))]">How to use it</p>
              <h2 className="mt-3 font-serif text-2xl font-bold text-on-light sm:text-3xl">
                From download to decision in three steps
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-on-light-secondary">
                The audit is designed to surface gaps before capital is committed - then connect findings to corridor-specific advice.
              </p>
            </div>

            <div className="grid divide-y divide-[hsl(var(--border-light))] lg:col-span-2 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={hidden}
                  whileInView={show}
                  viewport={{ once: true }}
                  transition={transition(0.06 + index * 0.06)}
                  className="flex gap-4 p-6 sm:p-8 lg:flex-col lg:gap-3"
                >
                  <span className="shrink-0 font-serif text-2xl font-bold text-[hsl(var(--brand-gold-600))]">{step.step}</span>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-on-light">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-on-light-secondary">{step.copy}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden theme-section-light px-5 section-pad-cta sm:px-6">
        <div className="glow-orb glow-orb-gold pointer-events-none -left-12 -bottom-12 h-[180px] w-[180px] opacity-[0.05] lg:-left-6 lg:-bottom-16 lg:h-[240px] lg:w-[240px] lg:opacity-[0.07]" />
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.08]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
            className="overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-white shadow-[0_20px_60px_hsl(var(--brand-navy-950)/0.07)] sm:rounded-[1.75rem] lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,380px)] lg:items-stretch"
          >
            <div className="relative overflow-hidden bg-[linear-gradient(135deg,hsl(var(--brand-navy-950))_0%,hsl(var(--brand-purple-800))_52%,hsl(var(--brand-purple-700))_100%)] cta-panel-navy text-white">
              <div className="pointer-events-none absolute inset-0 opacity-[0.14] theme-grid-overlay-light" aria-hidden />
              <motion.img
                src="/doodles/International trade-bro.svg"
                alt=""
                aria-hidden
                className="pointer-events-none absolute -right-6 -bottom-8 hidden h-40 w-40 opacity-[0.11] sm:block lg:h-44 lg:w-44"
                animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />

              <span className="relative inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-gold-500))] backdrop-blur-sm sm:text-[11px] sm:tracking-[0.2em]">
                <Sparkles className="h-3 w-3" aria-hidden />
                Next Step
              </span>

              <h2 className="relative mt-3 max-w-xl font-serif text-[1.65rem] font-bold leading-tight sm:text-2xl lg:text-3xl">
                {t("marketEntryAudit.readiness.title")}
              </h2>
              <p className="relative mt-2 max-w-xl text-sm leading-relaxed text-white/78 sm:text-[0.9375rem]">
                {t("marketEntryAudit.readiness.copy")}
              </p>

              <ul className="relative mt-4 flex flex-wrap gap-2">
                {[
                  { icon: ClipboardCheck, label: "Self-assessment ready" },
                  { icon: ShieldCheck, label: "Corridor-specific" },
                  { icon: Handshake, label: "Executive liaison" },
                ].map(({ icon: ItemIcon, label }) => (
                  <li
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/8 px-3 py-1.5 text-[10px] font-semibold text-white/88 backdrop-blur-sm sm:text-[11px]"
                  >
                    <ItemIcon className="h-3 w-3 shrink-0 text-[hsl(var(--brand-gold-500))]" aria-hidden />
                    {label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="cta-panel-actions">
              <Link
                to="/ask-soham"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-2xl bg-[hsl(var(--brand-gold-500))] px-5 py-3.5 text-sm font-semibold text-[hsl(var(--brand-navy-950))] shadow-[0_12px_32px_hsl(var(--brand-gold-500)/0.28)] transition hover:brightness-105"
              >
                <MessageCircle className="h-4 w-4 shrink-0 opacity-80" aria-hidden />
                {t("marketEntryAudit.readiness.readinessCta")}
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>

              <Link
                to="/market-entry"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-2xl border border-[hsl(var(--brand-purple-500)/0.22)] bg-white px-5 py-3.5 text-sm font-semibold text-[hsl(var(--brand-purple-700))] transition hover:border-[hsl(var(--brand-purple-500)/0.35)] hover:bg-[hsl(var(--brand-purple-700)/0.04)]"
              >
                Explore Market Entry Services
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>

              <a
                href="#inside"
                className="inline-flex min-h-11 w-full items-center justify-center text-sm font-semibold text-on-light-muted transition hover:text-[hsl(var(--brand-purple-700))]"
              >
                Review the 5 gaps again
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <AeoFrequentlyAskedQuestions items={MARKET_ENTRY_AUDIT_FAQS} className="theme-section-soft px-5 section-pad sm:px-6" />
    </PageLayout>
  );
};

export default MarketEntryAudit;
