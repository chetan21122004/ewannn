import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/PageLayout";
import AeoFrequentlyAskedQuestions from "@/components/AeoFrequentlyAskedQuestions";
import { MARKET_ENTRY_AUDIT_FAQS } from "@/data/aeoContent";
import { absoluteUrl, faqPageSchema, webPageWithLeadAction } from "@/lib/schemaHelpers";

const MARKET_ENTRY_AUDIT_KEYWORDS =
  "India market entry checklist free, international expansion audit, cross-border business readiness, India entry risk assessment";

const AUDIT_PDF_URL = import.meta.env.VITE_MARKET_ENTRY_AUDIT_PDF_URL ?? "/Ewan_GlobalMarketEntry_Audit_2026.pdf";

const marketEntryAuditLd = [
  webPageWithLeadAction(absoluteUrl("/market-entry-audit/")),
  faqPageSchema(absoluteUrl("/market-entry-audit/"), MARKET_ENTRY_AUDIT_FAQS),
];

const defaultInsideItems = [
  {
    title: "Regulatory & Entity Infrastructure",
    copy: "Self-assessment prompts and the operational cost of entering without the right entity and compliance footing.",
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
      <section className="theme-section-light relative overflow-hidden px-6 pb-20 pt-16">
        <div className="theme-grid-overlay-light pointer-events-none absolute inset-0 opacity-20" />
        <div className="container relative mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-card)/0.95)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))]">
            {t("marketEntryAudit.hero.badge")}
          </div>
          <h1 className="mb-5 text-4xl font-extrabold leading-[1.08] text-on-light md:text-6xl">
            {t("marketEntryAudit.hero.title")}
          </h1>
          <p className="mb-8 max-w-3xl border-l-2 border-[hsl(var(--brand-purple-700)/0.3)] pl-5 text-base leading-relaxed text-on-light-secondary md:text-lg">
            {t("marketEntryAudit.hero.subtitle")}
          </p>

          {submitted ? (
            <div className="max-w-xl rounded-2xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-card)/0.95)] p-6 shadow-gold-sm">
              <h2 className="text-xl font-bold text-on-light">{t("marketEntryAudit.hero.confirmationTitle")}</h2>
              <p className="mt-2 text-sm text-on-light-secondary">{t("marketEntryAudit.hero.confirmationCopy")}</p>
              <a
                href={AUDIT_PDF_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition-transform hover:scale-[1.01]"
              >
                {t("marketEntryAudit.hero.downloadLink")}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ) : (
            <form
              onSubmit={handleDownload}
              className="flex max-w-xl flex-col gap-3 rounded-2xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-card)/0.95)] p-3 shadow-gold-sm sm:flex-row"
            >
              <input
                className="w-full rounded-xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] px-4 py-3 text-sm text-on-light placeholder:text-on-light-muted focus:outline-none"
                placeholder={t("marketEntryAudit.hero.emailPlaceholder")}
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button
                type="submit"
                className="rounded-xl bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition-transform hover:scale-[1.01]"
              >
                {t("marketEntryAudit.hero.downloadCta")}
              </button>
            </form>
          )}
        </div>
      </section>

      <section className="theme-section-soft px-6 py-20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-serif text-4xl font-bold text-on-light">{t("marketEntryAudit.inside.title")}</h2>
          <p className="mt-4 max-w-4xl text-base leading-relaxed text-on-light-secondary">{t("marketEntryAudit.inside.intro")}</p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {insideItems.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-card)/0.95)] p-6 shadow-gold-sm"
              >
                <h3 className="text-lg font-bold text-on-light">{item.title}</h3>
                <p className="mt-2 text-sm text-on-light-secondary">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="theme-section-dark px-6 py-20 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-extrabold text-foreground">{t("marketEntryAudit.readiness.title")}</h2>
          <p className="mt-4 text-foreground/80">{t("marketEntryAudit.readiness.copy")}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/ask-soham"
              className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
            >
              {t("marketEntryAudit.readiness.readinessCta")}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/ask-soham"
              className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--surface-glass)/0.24)] px-6 py-3 text-sm font-semibold text-foreground/90 transition hover:bg-[hsl(var(--surface-glass)/0.08)]"
            >
              {t("marketEntryAudit.readiness.askSohamCta")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <AeoFrequentlyAskedQuestions items={MARKET_ENTRY_AUDIT_FAQS} className="theme-section-light px-6 py-16 md:py-20" />
    </PageLayout>
  );
};

export default MarketEntryAudit;
