import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/PageLayout";

const defaultTrustStats = [
  { value: "60,000+", label: "Hours Execution" },
  { value: "250+", label: "Global Clients" },
  { value: "125+", label: "Languages Managed" },
  { value: "ISO", label: "Certified Processes" },
];

const defaultMatrixItems = [
  {
    title: "Entity Traps",
    copy: "Incorrect structural choices locking in permanent tax disadvantages.",
  },
  {
    title: "Partner Friction",
    copy: "Misaligned distribution channels creating brand dilution.",
  },
  {
    title: "Human Capital",
    copy: "Local labor law infractions stalling core team deployment.",
  },
  {
    title: "Coordination Tax",
    copy: "HQ mandates clashing with localized operational necessity.",
  },
];

const defaultGaps = [
  {
    title: "Regulatory & Entity Structuring",
    copy: "Choosing the wrong entity type (e.g., branch vs. subsidiary) can trigger irreversible tax liabilities and restrict specific operational licenses in the target jurisdiction.",
  },
  {
    title: "Partner & Distribution Control",
    copy: "Over-reliance on local distributors without clear exit clauses or IP protection frameworks leads to brand hijacking and margin erosion.",
  },
  {
    title: "The Coordination Tax",
    copy: "The invisible cost of misalignment between HQ assumptions and local vendor realities, causing project timelines to stretch from months to years.",
  },
  {
    title: "Human Capital Deployment",
    copy: "Visa delays, localized benefits compliance, and misjudging the cultural expectations of top-tier local talent.",
  },
  {
    title: "Executive Liaison Friction",
    copy: "Lack of a localized authority figure to translate board directives into immediate on-the-ground action, leading to decision paralysis.",
  },
];

const MarketEntryAudit = () => {
  const { t } = useTranslation();

  const trustStats = t("marketEntryAudit.trustStats", {
    returnObjects: true,
    defaultValue: defaultTrustStats,
  }) as Array<{ value: string; label: string }>;

  const matrixItems = t("marketEntryAudit.matrix.items", {
    returnObjects: true,
    defaultValue: defaultMatrixItems,
  }) as Array<{ title: string; copy: string }>;

  const gaps = t("marketEntryAudit.gaps.items", {
    returnObjects: true,
    defaultValue: defaultGaps,
  }) as Array<{ title: string; copy: string }>;

  return (
    <PageLayout
      title={t("seo.marketEntryAudit.title")}
      description={t("seo.marketEntryAudit.description")}
      canonicalPath="/market-entry-audit/"
    >
      <section className="relative overflow-hidden px-6 pb-24 pt-16 theme-section-light">
        <div className="absolute inset-0 theme-grid-overlay-light opacity-20 pointer-events-none" />
        <div className="container mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-card)/0.95)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))]">
              {t("marketEntryAudit.hero.badge")}
            </div>
            <h1 className="mb-5 text-4xl font-extrabold leading-[1.08] text-on-light md:text-6xl">
              {t("marketEntryAudit.hero.titlePrefix")}{" "}
              <span className="gradient-text">{t("marketEntryAudit.hero.titleHighlight")}</span>
            </h1>
            <p className="mb-8 max-w-2xl border-l-2 border-[hsl(var(--brand-purple-700)/0.3)] pl-5 text-base leading-relaxed text-on-light-secondary md:text-lg">
              {t("marketEntryAudit.hero.subtitle")}
            </p>
            <div className="flex max-w-xl flex-col gap-3 rounded-2xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-card)/0.95)] p-3 shadow-gold-sm sm:flex-row">
              <input
                className="w-full rounded-xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] px-4 py-3 text-sm text-on-light placeholder:text-on-light-muted focus:outline-none"
                placeholder={t("marketEntryAudit.hero.emailPlaceholder")}
                type="email"
              />
              <button className="rounded-xl bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition-transform hover:scale-[1.01]">
                {t("marketEntryAudit.hero.downloadCta")}
              </button>
            </div>
          </div>

          <div className="hidden lg:col-span-5 lg:block">
            <div className="relative h-full min-h-[420px]">
              <div className="absolute right-4 top-6 w-[300px] rounded-2xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-card)/0.9)] p-7 shadow-gold-md">
                <h3 className="mb-2 text-xl font-bold text-on-light">{t("marketEntryAudit.hero.card1Title")}</h3>
                <p className="text-sm text-on-light-secondary">{t("marketEntryAudit.hero.card1Copy")}</p>
              </div>
              <div className="absolute bottom-10 left-0 w-[290px] rounded-2xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-card)/0.95)] p-6 shadow-gold-sm">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))]">
                  {t("marketEntryAudit.hero.warningLabel")}
                </p>
                <p className="text-sm text-on-light-secondary">{t("marketEntryAudit.hero.warningCopy")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[hsl(var(--border-light))] px-6 py-12 theme-section-soft">
        <div className="container mx-auto grid max-w-7xl grid-cols-2 gap-6 md:grid-cols-4">
          {trustStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-[hsl(var(--brand-purple-700))]">{stat.value}</p>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-on-light-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 theme-section-light">
        <div className="container mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-gold-600))]">
              {t("marketEntryAudit.matrix.eyebrow")}
            </p>
            <h2 className="mb-6 text-4xl font-extrabold leading-tight text-on-light">{t("marketEntryAudit.matrix.title")}</h2>
            <p className="mb-4 text-on-light-secondary">{t("marketEntryAudit.matrix.copy1")}</p>
            <p className="text-on-light-secondary">{t("marketEntryAudit.matrix.copy2")}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {matrixItems.map((item, index) => (
              <article
                key={item.title}
                className={`rounded-2xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-card)/0.95)] p-6 shadow-gold-sm ${
                  index % 2 === 1 ? "md:translate-y-8" : ""
                }`}
              >
                <h3 className="mb-2 text-lg font-bold text-on-light">{item.title}</h3>
                <p className="text-sm text-on-light-secondary">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 theme-section-soft">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-4xl font-extrabold text-on-light">{t("marketEntryAudit.gaps.title")}</h2>
          <div className="space-y-8">
            {gaps.map((gap, index) => (
              <div key={gap.title} className={`flex flex-col gap-5 md:flex-row ${index % 2 === 1 ? "md:ml-10" : ""}`}>
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-card))] text-xl font-bold text-[hsl(var(--brand-purple-700))]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <article className="flex-1 rounded-2xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-card)/0.95)] p-7 shadow-gold-sm">
                  <h3 className="mb-3 text-2xl font-bold text-on-light">{gap.title}</h3>
                  <p className="text-on-light-secondary">{gap.copy}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 text-center theme-section-dark">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-5 text-4xl font-extrabold text-foreground">{t("marketEntryAudit.conversion.title")}</h2>
          <p className="mb-8 text-foreground/80">{t("marketEntryAudit.conversion.copy")}</p>
          <div className="mx-auto max-w-xl space-y-4 rounded-2xl border border-[hsl(var(--surface-glass)/0.24)] bg-[hsl(var(--surface-glass)/0.08)] p-7 text-left">
            <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-foreground/80">
              {t("marketEntryAudit.conversion.form.fullName")}
              <input
                className="mt-2 w-full rounded-xl border border-[hsl(var(--surface-glass)/0.25)] bg-[hsl(var(--surface-glass)/0.03)] px-4 py-3 text-sm text-foreground placeholder:text-foreground/40"
                placeholder="Jane Doe"
                type="text"
              />
            </label>
            <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-foreground/80">
              {t("marketEntryAudit.conversion.form.email")}
              <input
                className="mt-2 w-full rounded-xl border border-[hsl(var(--surface-glass)/0.25)] bg-[hsl(var(--surface-glass)/0.03)] px-4 py-3 text-sm text-foreground placeholder:text-foreground/40"
                placeholder="jane@company.com"
                type="email"
              />
            </label>
            <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-foreground/80">
              {t("marketEntryAudit.conversion.form.company")}
              <input
                className="mt-2 w-full rounded-xl border border-[hsl(var(--surface-glass)/0.25)] bg-[hsl(var(--surface-glass)/0.03)] px-4 py-3 text-sm text-foreground placeholder:text-foreground/40"
                placeholder="Acme Global"
                type="text"
              />
            </label>
            <button className="mt-3 w-full rounded-xl bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-base font-bold text-[hsl(var(--brand-navy-950))] transition-transform hover:scale-[1.01]">
              {t("marketEntryAudit.conversion.form.cta")}
            </button>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 text-center theme-section-light">
        <div className="container mx-auto max-w-2xl">
          <h2 className="mb-3 text-3xl font-bold text-on-light">{t("marketEntryAudit.finalCta.title")}</h2>
          <p className="mb-7 text-on-light-secondary">{t("marketEntryAudit.finalCta.copy")}</p>
          <Link
            to="/ask-soham"
            className="inline-flex items-center rounded-xl border border-[hsl(var(--brand-purple-700))] px-7 py-3 text-sm font-semibold text-[hsl(var(--brand-purple-700))] transition-all hover:bg-[hsl(var(--brand-purple-700))] hover:text-white"
          >
            {t("marketEntryAudit.finalCta.button")}
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default MarketEntryAudit;
