import { useState } from "react";
import { ArrowRight, Building2, CalendarClock, CheckCircle2, Globe2, Mail, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { useTranslation } from "react-i18next";

const defaultServiceOptions = [
  "Market Entry",
  "Language Services",
  "Market Research",
  "Import/Export",
  "Other",
];

const defaultRegionOptions = [
  "India <-> Japan",
  "India <-> China",
  "India <-> ASEAN",
  "India <-> Middle East",
  "India <-> Europe",
  "Other Corridor",
];

const trustStats = [
  { value: "60k+", labelKey: "contact.trust.interpretationHours" },
  { value: "250+", labelKey: "contact.trust.enterpriseClients" },
  { value: "125+", labelKey: "contact.trust.languagesHandled" },
  { value: "ISO", labelKey: "contact.trust.certified" },
];

const defaultAudience = [
  "Foreign companies entering India",
  "Indian companies expanding abroad",
  "Businesses needing language support",
];

const Contact = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const serviceOptions = t("contact.serviceOptions", { returnObjects: true, defaultValue: defaultServiceOptions }) as string[];
  const regionOptions = t("contact.regionOptions", { returnObjects: true, defaultValue: defaultRegionOptions }) as string[];
  const audience = t("contact.audience", { returnObjects: true, defaultValue: defaultAudience }) as string[];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  };

  return (
    <PageLayout
      title={t("seo.contact.title")}
      description={t("seo.contact.description")}
      canonicalPath="/contact/"
    >
      <section className="relative overflow-hidden theme-section-light px-6 pb-12 pt-8">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 14% 14%, hsl(var(--brand-purple-500) / 0.2) 0%, transparent 36%), radial-gradient(circle at 86% 16%, hsl(var(--brand-gold-500) / 0.16) 0%, transparent 34%), radial-gradient(circle at 68% 80%, hsl(var(--brand-cyan-500) / 0.12) 0%, transparent 42%)",
          }}
        />
        <div className="container relative mx-auto">
          <div className="grid items-start gap-10 xl:grid-cols-[1fr_1.05fr]">
            <article className="space-y-8">
              <p className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white/65 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-700))]">
                <Globe2 className="h-3.5 w-3.5" />
                {t("contact.hero.badge")}
              </p>
              <h1 className="max-w-3xl text-4xl font-serif font-extrabold leading-tight text-[hsl(var(--brand-navy-950))] sm:text-5xl lg:text-6xl">
                {t("contact.hero.title")}
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-on-light-secondary">
                {t("contact.hero.subtitle")}
              </p>
              <p className="text-sm font-medium text-on-light-muted">
                {t("contact.hero.meta")}
              </p>

              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))]">
                  {t("contact.options.title")}
                </p>
                <div className="theme-card-light rounded-2xl p-5">
                  <p className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--brand-navy-950))]">
                    <Mail className="h-4 w-4 text-[hsl(var(--brand-gold-600))]" />
                    {t("contact.options.email.title")}
                  </p>
                  <a href="mailto:info@ewan.co.in" className="mt-1 block text-lg font-semibold text-[hsl(var(--brand-navy-950))]">
                    info@ewan.co.in
                  </a>
                  <p className="mt-2 text-sm text-on-light-muted">{t("contact.options.email.desc")}</p>
                </div>

                <div className="theme-card-light rounded-2xl p-5">
                  <p className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--brand-navy-950))]">
                    <CalendarClock className="h-4 w-4 text-[hsl(var(--brand-gold-600))]" />
                    {t("contact.options.askSoham.title")}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-[hsl(var(--brand-navy-950))]">{t("contact.options.askSoham.sub")}</p>
                  <p className="mt-2 text-sm text-on-light-muted">{t("contact.options.askSoham.desc")}</p>
                  <Link
                    to="/ask-soham"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-5 py-2 text-sm font-semibold text-[hsl(var(--brand-navy-950))]"
                  >
                    {t("contact.options.askSoham.cta")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-[hsl(var(--border-light))] bg-white/70 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))]">{t("contact.hq.title")}</p>
                <p className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--brand-navy-950))]">
                  <MapPin className="h-4 w-4 text-[hsl(var(--brand-gold-600))]" />
                  {t("contact.hq.location")}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-on-light-muted">
                  {t("contact.hq.desc")}
                </p>
              </div>
            </article>

            <article className="theme-card-light rounded-3xl p-7 lg:p-9">
              <h2 className="text-3xl font-serif font-bold text-[hsl(var(--brand-navy-950))]">{t("contact.form.title")}</h2>
              <p className="mt-2 text-sm text-on-light-secondary">
                {t("contact.form.subtitle")}
              </p>

              <form className="mt-7 space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-sm font-medium text-[hsl(var(--brand-navy-950))]">
                    {t("contact.form.fields.fullName")}
                    <input
                      required
                      name="fullName"
                      type="text"
                      placeholder="Jane Doe"
                      className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] bg-white/90 px-4 py-2.5 text-sm outline-none transition focus:border-[hsl(var(--brand-purple-500))]"
                    />
                  </label>
                  <label className="text-sm font-medium text-[hsl(var(--brand-navy-950))]">
                    {t("contact.form.fields.company")}
                    <input
                      name="company"
                      type="text"
                      placeholder="Acme Corp"
                      className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] bg-white/90 px-4 py-2.5 text-sm outline-none transition focus:border-[hsl(var(--brand-purple-500))]"
                    />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-sm font-medium text-[hsl(var(--brand-navy-950))]">
                    {t("contact.form.fields.email")}
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="jane@acme.com"
                      className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] bg-white/90 px-4 py-2.5 text-sm outline-none transition focus:border-[hsl(var(--brand-purple-500))]"
                    />
                  </label>
                  <label className="text-sm font-medium text-[hsl(var(--brand-navy-950))]">
                    {t("contact.form.fields.phone")}
                    <input
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] bg-white/90 px-4 py-2.5 text-sm outline-none transition focus:border-[hsl(var(--brand-purple-500))]"
                    />
                  </label>
                </div>

                <label className="block text-sm font-medium text-[hsl(var(--brand-navy-950))]">
                  {t("contact.form.fields.service")}
                  <select
                    required
                    name="service"
                    defaultValue=""
                    className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] bg-white/90 px-4 py-2.5 text-sm outline-none transition focus:border-[hsl(var(--brand-purple-500))]"
                  >
                    <option value="" disabled>
                      {t("contact.form.placeholders.selectService")}
                    </option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block text-sm font-medium text-[hsl(var(--brand-navy-950))]">
                  {t("contact.form.fields.region")}
                  <select
                    required
                    name="region"
                    defaultValue=""
                    className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] bg-white/90 px-4 py-2.5 text-sm outline-none transition focus:border-[hsl(var(--brand-purple-500))]"
                  >
                    <option value="" disabled>
                      {t("contact.form.placeholders.selectRegion")}
                    </option>
                    {regionOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block text-sm font-medium text-[hsl(var(--brand-navy-950))]">
                  {t("contact.form.fields.context")}
                  <textarea
                    required
                    name="message"
                    placeholder={t("contact.form.placeholders.message")}
                    rows={4}
                    className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] bg-white/90 px-4 py-3 text-sm outline-none transition focus:border-[hsl(var(--brand-purple-500))]"
                  />
                </label>

                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-purple-700))] px-7 py-3 text-sm font-semibold text-white transition hover:brightness-110"
                  >
                    {t("contact.form.cta")}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <span className="inline-flex items-center gap-1.5 text-xs text-on-light-muted">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[hsl(var(--brand-gold-600))]" />
                    {t("contact.form.promises.response")}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-on-light-muted">
                    <ShieldCheck className="h-3.5 w-3.5 text-[hsl(var(--brand-gold-600))]" />
                    {t("contact.form.promises.confidential")}
                  </span>
                </div>
              </form>

              {submitted && (
                <p className="mt-4 rounded-xl bg-[hsl(var(--brand-gold-500)/0.2)] px-4 py-3 text-sm font-medium text-[hsl(var(--brand-navy-950))]">
                  {t("contact.submitted")}
                </p>
              )}

              <div className="mt-8 rounded-2xl border border-[hsl(var(--border-light))] bg-white/70 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))]">
                  {t("contact.audienceTitle")}
                </p>
                <div className="mt-3 grid gap-2">
                  {audience.map((item) => (
                    <p key={item} className="inline-flex items-start gap-2 text-sm text-on-light-secondary">
                      <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-gold-600))]" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="theme-section-soft px-6 py-12">
        <div className="container mx-auto rounded-3xl border border-[hsl(var(--border-light))] bg-white/75 px-6 py-7">
          <div className="grid gap-6 text-center sm:grid-cols-4">
            {trustStats.map((item) => (
              <div key={item.labelKey}>
                <p className="text-3xl font-extrabold text-[hsl(var(--brand-navy-950))]">{item.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-on-light-muted">{t(item.labelKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="theme-section-light px-6 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="rounded-3xl bg-[hsl(var(--brand-purple-700))] px-8 py-10 text-white md:flex md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-gold-500))]">{t("contact.altCta.badge")}</p>
              <h3 className="mt-3 text-3xl font-serif font-bold">{t("contact.altCta.title")}</h3>
              <p className="mt-2 text-sm text-white/80">{t("contact.altCta.desc")}</p>
            </div>
            <Link
              to="/ask-soham"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-7 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] md:mt-0"
            >
              {t("contact.altCta.button")}
              <MessageCircle className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
