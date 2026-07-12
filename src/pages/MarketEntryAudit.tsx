import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/PageLayout";
import SectionDivider from "@/components/SectionDivider";
import AeoFrequentlyAskedQuestions from "@/components/AeoFrequentlyAskedQuestions";
import { MARKET_ENTRY_AUDIT_FAQS } from "@/data/aeoContent";
import { absoluteUrl, faqPageSchema, webPageWithLeadAction } from "@/lib/schemaHelpers";
import { COMPANY_EMAIL } from "@/lib/site";
import { buildFormMailtoUrl } from "@/lib/formSubmit";

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
    copy: "Readiness checks for staffing, visas, and local talent — and what slips when this gap is left open.",
  },
  {
    title: "Executive Liaison & Negotiation",
    copy: "Assessment prompts for high-stakes liaison and the cost of decisions made without on-ground authority.",
  },
];

const MarketEntryAudit = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const insideItems = t("marketEntryAudit.inside.items", {
    returnObjects: true,
    defaultValue: defaultInsideItems,
  }) as Array<{ title: string; copy: string }>;

  const handleDownload = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) {
      return;
    }
    window.location.href = buildFormMailtoUrl(COMPANY_EMAIL, "2026 Market Entry Audit Download Request", {
      email: email.trim(),
    });
    setSubmitted(true);
  };

  return (
    <PageLayout
      title={t("seo.marketEntryAudit.title")}
      description={t("seo.marketEntryAudit.description")}
      canonicalPath="/market-entry-audit/"
      keywords={MARKET_ENTRY_AUDIT_KEYWORDS}
      jsonLd={marketEntryAuditLd}
    >
      <section className="relative overflow-hidden theme-section-soft px-6 pb-20 pt-14 lg:pb-28 lg:pt-20">
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.12]" />

        <div className="container relative z-10 mx-auto max-w-4xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[hsl(var(--brand-purple-700))]">
            {t("marketEntryAudit.hero.badge")}
          </p>
          <h1 className="mt-5 font-serif text-4xl font-bold leading-[1.05] text-on-light sm:text-5xl lg:text-6xl">
            {t("marketEntryAudit.hero.title")}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-on-light-secondary sm:text-lg">
            {t("marketEntryAudit.hero.subtitle")}
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-on-light-secondary sm:text-base">
            {t("marketEntryAudit.hero.whatItIs")}
          </p>

          <div className="mt-10 max-w-xl">
            {submitted ? (
              <div className="rounded-2xl border border-[hsl(var(--border-light))] bg-white p-6 shadow-sm">
                <h2 className="font-serif text-xl font-bold text-on-light">{t("marketEntryAudit.hero.confirmationTitle")}</h2>
                <p className="mt-2 text-sm leading-relaxed text-on-light-secondary">{t("marketEntryAudit.hero.confirmationCopy")}</p>
                <a
                  href={AUDIT_PDF_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
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
                className="rounded-2xl border border-[hsl(var(--border-light))] bg-white p-4 shadow-sm sm:p-5"
              >
                <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-on-light">
                  <FileText className="h-4 w-4 text-[hsl(var(--brand-purple-700))]" aria-hidden />
                  {t("marketEntryAudit.hero.formLabel")}
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    className="min-h-11 w-full rounded-xl border border-[hsl(var(--border-light))] bg-white px-4 py-3 text-sm text-on-light placeholder:text-on-light-muted focus:border-[hsl(var(--brand-purple-700)/0.5)] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-purple-700)/0.15)]"
                    placeholder={t("marketEntryAudit.hero.emailPlaceholder")}
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    aria-label={t("marketEntryAudit.hero.emailPlaceholder")}
                  />
                  <button
                    type="submit"
                    className="min-h-11 shrink-0 rounded-xl bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
                  >
                    {t("marketEntryAudit.hero.downloadCta")}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" fromDark />

      <section className="theme-section-light px-6 py-16 md:py-20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl font-bold text-on-light sm:text-4xl">{t("marketEntryAudit.inside.title")}</h2>
          <p className="mt-4 max-w-4xl text-base leading-relaxed text-on-light-secondary">{t("marketEntryAudit.inside.intro")}</p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {insideItems.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[hsl(var(--border-light))] bg-white p-6 shadow-sm"
              >
                <div className="mb-3 flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-purple-700))]" aria-hidden />
                  <h3 className="text-lg font-bold text-on-light">{item.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-on-light-secondary">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="theme-section-dark px-6 py-16 text-center md:py-20">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">{t("marketEntryAudit.readiness.title")}</h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/80 sm:text-base">{t("marketEntryAudit.readiness.copy")}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/ask-soham"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
            >
              {t("marketEntryAudit.readiness.readinessCta")}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              to="/market-entry"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[hsl(var(--surface-glass)/0.24)] px-6 py-3 text-sm font-semibold text-foreground/90 transition hover:bg-[hsl(var(--surface-glass)/0.08)]"
            >
              Explore Market Entry Services
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <AeoFrequentlyAskedQuestions items={MARKET_ENTRY_AUDIT_FAQS} className="theme-section-light px-6 py-16 md:py-20" />
    </PageLayout>
  );
};

export default MarketEntryAudit;
