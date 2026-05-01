import { ArrowDown, ArrowRight, Car, Factory, Gavel, GraduationCap, Microscope, Network, Plane, PlayCircle, Tent, Terminal, Wheat } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { useTranslation } from "react-i18next";

const defaultSpecializations = [
  { title: "Automotive", copy: "From simultaneous interpretation for boardroom negotiations between Indian OEMs and Japanese or Korean suppliers, to technical manual translation and subsidiary setup support - Ewan is the trusted language and operations partner for the automotive corridor." },
  { title: "Pharmaceuticals", copy: "Regulatory document translation, clinical trial materials, product literature localization and multilingual communication for India's pharma sector and international partners." },
  { title: "Aerospace", copy: "Specialist technical documentation translation, standards interpretation and high-stakes negotiation support for aerospace sector clients." },
  { title: "Manufacturing", copy: "End-to-end support for manufacturers entering India or expanding abroad - from initial market assessment and language support through to full operational setup." },
  { title: "Exhibitions & Trade Fairs", copy: "On-site interpretation, booth materials localization, buyer-seller communication and real-time language support at international exhibitions and trade events across India." },
  { title: "Technology", copy: "Software localization, UI/UX translation, technical documentation, multilingual customer support and market entry advisory for technology firms entering or expanding across Asia." },
  { title: "Agriculture & Food", copy: "Export documentation, cross-border buyer communication and product localization for Indian agricultural exporters targeting China, Japan, Southeast Asia and beyond." },
  { title: "Legal & Compliance", copy: "Certified translation of contracts, agreements, court documents and regulatory filings - accurate, validated and legally precise." },
  { title: "Education", copy: "Curriculum translation, IB and international board materials, institutional communication and multilingual e-learning content for educational institutions and publishers." },
  { title: "Media & OTT", copy: "Subtitling, dubbing, voiceover and content localization for film, television and streaming platforms expanding across language markets." },
];

const specializationIcons = [Car, Microscope, Plane, Factory, Tent, Terminal, Wheat, Gavel, GraduationCap, PlayCircle];

const Industries = () => {
  const { t } = useTranslation();
  const specializations = t("industries.specializations.items", {
    returnObjects: true,
    defaultValue: defaultSpecializations,
  }) as Array<{ title: string; copy: string }>;

  return (
    <PageLayout
      title={t("seo.industries.title")}
      description={t("seo.industries.description")}
      canonicalPath="/industries/"
    >
      <section className="relative overflow-hidden bg-[hsl(var(--brand-navy-950))] px-6 py-24 text-white lg:py-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{
            backgroundImage: "radial-gradient(hsl(var(--brand-purple-500)) 0.5px, transparent 0.5px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="pointer-events-none absolute bottom-16 right-20 h-80 w-80 rounded-full bg-[hsl(var(--brand-gold-500)/0.15)] blur-3xl" />

        <div className="container relative mx-auto">
          <div className="max-w-3xl">
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-[hsl(var(--brand-gold-500))]">
              {t("industries.hero.badge")}
            </p>
            <h1 className="font-serif text-5xl font-extrabold leading-tight tracking-tight md:text-7xl xl:text-8xl">
              {t("industries.hero.titlePrefix")} <span className="text-[hsl(var(--brand-gold-500))]">{t("industries.hero.titleHighlight")}</span> {t("industries.hero.titleSuffix")}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
              {t("industries.hero.subtitle")}
            </p>
            <a
              href="#specializations"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[hsl(var(--brand-gold-500))] px-8 py-4 text-base font-bold text-[hsl(var(--brand-navy-950))] transition hover:scale-105"
            >
              {t("industries.hero.cta")}
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="theme-section-light px-6 py-24">
        <div className="container mx-auto grid items-center gap-16 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-4xl font-bold tracking-tight text-[hsl(var(--brand-navy-950))] md:text-5xl">
              {t("industries.overview.title")}
            </h2>
            <p className="text-on-light-secondary mt-8 text-lg leading-relaxed">
              {t("industries.overview.copy")}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-8">
              <div>
                <p className="text-3xl font-extrabold text-[hsl(var(--brand-gold-600))]">500+</p>
                <p className="text-on-light-muted mt-1 text-xs font-semibold uppercase tracking-wider">{t("industries.overview.stats.marketAudits")}</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-[hsl(var(--brand-gold-600))]">42</p>
                <p className="text-on-light-muted mt-1 text-xs font-semibold uppercase tracking-wider">{t("industries.overview.stats.countryHubs")}</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2.5rem] bg-[hsl(var(--surface-light-100))] shadow-2xl">
              <img
                src="/stitch/industries/empowering-sector.jpg"
                alt="Modern glass architecture representing global business sectors"
                className="h-full w-full object-cover grayscale opacity-85"
              />
            </div>
            <div className="theme-card-light absolute -bottom-8 -left-8 max-w-xs rounded-2xl p-6">
              <Network className="mb-3 h-8 w-8 text-[hsl(var(--brand-gold-500))]" />
              <p className="text-sm font-medium text-[hsl(var(--brand-navy-950))]">
                {t("industries.overview.quote")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="specializations" className="theme-section-soft px-6 py-24">
        <div className="container mx-auto">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="font-serif text-4xl font-bold text-[hsl(var(--brand-navy-950))]">{t("industries.specializations.title")}</h2>
            <p className="text-on-light-secondary mt-4">
              {t("industries.specializations.subtitle")}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {specializations.map(({ title, copy }, index) => {
              const Icon = specializationIcons[index] || Network;
              return (
              <article
                key={title}
                className="theme-card-light rounded-[1.7rem] p-7 transition duration-300 hover:-translate-y-1"
              >
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[hsl(var(--surface-light-100))]">
                  <Icon className="h-7 w-7 text-[hsl(var(--brand-purple-700))]" />
                </div>
                <h3 className="text-lg font-bold text-[hsl(var(--brand-navy-950))]">{title}</h3>
                <p className="text-on-light-secondary mt-3 text-sm leading-relaxed">{copy}</p>
              </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="theme-section-light px-6 py-24">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[hsl(var(--brand-purple-700))] p-12 md:p-16">
            <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-[hsl(var(--brand-gold-500)/0.2)] blur-3xl" />
            <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h2 className="font-serif text-4xl font-bold leading-tight text-white md:text-5xl">
                  {t("industries.cta.title")}
                </h2>
                <p className="mt-5 text-lg text-white/80">
                  {t("industries.cta.copy")}
                </p>
              </div>
              <Link
                to="/ask-soham"
                className="inline-flex items-center gap-3 rounded-full bg-[hsl(var(--brand-gold-500))] px-8 py-4 text-base font-bold text-[hsl(var(--brand-navy-950))] shadow-xl transition hover:scale-105"
              >
                {t("industries.cta.button")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Industries;
