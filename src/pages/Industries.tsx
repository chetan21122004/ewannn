import { ArrowDown, ArrowRight, Globe2, Languages, MessageCircle, Mic2, Network, ShieldCheck, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import LanguageSectorCard from "@/components/language-localization/LanguageSectorCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getSectorById, sectorCatalog } from "@/data/sectorCatalog";
import { absoluteUrl, breadcrumbSchema, itemListFromTitles } from "@/lib/schemaHelpers";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";

const defaultSpecializations = [
  { title: "Automotive", copy: "From simultaneous interpretation for boardroom negotiations between Indian OEMs and Japanese or Korean suppliers, to technical manual translation and subsidiary setup support - UVAN is the trusted language and operations partner for the automotive corridor." },
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

/** Industries page sector order (exhibitions before technology) */
const industriesSectorIds = [
  "automotive",
  "pharmaceuticals",
  "aerospace",
  "manufacturing",
  "exhibitions",
  "technology",
  "agriculture",
  "legal",
  "education",
  "media",
] as const;

const overviewPillars = [
  {
    icon: Mic2,
    title: "Interpretation",
    copy: "Simultaneous and consecutive support in boardrooms, negotiations, and live engagements.",
  },
  {
    icon: ShieldCheck,
    title: "Documentation",
    copy: "Certified translation for pharma, legal, technical, and regulatory deliverables.",
  },
  {
    icon: Globe2,
    title: "On-ground execution",
    copy: "Exhibition support, liaison, and operational depth across trade corridors.",
  },
] as const;

const Industries = () => {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const specializations = t("industries.specializations.items", {
    returnObjects: true,
    defaultValue: defaultSpecializations,
  }) as Array<{ title: string; copy: string }>;

  const hidden = reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 };
  const show = { opacity: 1, y: 0 };
  const transition = (delay = 0) => ({
    duration: reduceMotion ? 0.35 : 0.72,
    delay,
    ease: [0.22, 1, 0.36, 1] as const,
  });

  const industriesLd = useMemo(() => {
    const pageUrl = absoluteUrl("/industries/");
    const titles = specializations.map((s) => s.title);
    return [
      breadcrumbSchema(pageUrl, [
        { name: "Home", path: "/" },
        { name: "Industries", path: "/industries/" },
      ]),
      itemListFromTitles(titles, pageUrl),
    ];
  }, [specializations]);

  const sectorCards = specializations.map((spec, index) => {
    const sectorId = industriesSectorIds[index] ?? industriesSectorIds[0];
    const meta = getSectorById(sectorId) ?? sectorCatalog[0];
    return {
      id: meta.id,
      title: spec.title,
      description: spec.copy,
      icon: meta.icon,
      image: meta.image,
      imageAlt: meta.imageAlt,
    };
  });

  return (
    <PageLayout
      title={t("seo.industries.title")}
      description={t("seo.industries.description")}
      canonicalPath="/industries/"
      keywords={t("seo.industries.keywords")}
      jsonLd={industriesLd}
    >
      <section className="relative isolate overflow-hidden theme-section-soft section-pad-hero sm:px-6">
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.12]" />
        <div className="glow-orb glow-orb-gold pointer-events-none -right-20 top-1/4 h-[240px] w-[240px] opacity-[0.06] lg:h-[360px] lg:w-[360px] lg:opacity-[0.08]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <motion.div
              className="lg:col-span-7"
              initial={hidden}
              animate={show}
              transition={transition(0)}
            >
              <p className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[hsl(var(--brand-purple-700))] sm:mb-5 sm:px-4 sm:py-1.5 sm:text-xs sm:tracking-[0.2em]">
                <Sparkles className="h-3 w-3 text-[hsl(var(--brand-gold-600))]" aria-hidden />
                {t("home.sectors.badge")}
              </p>

              <h1 className="font-serif text-[1.85rem] font-bold leading-[1.08] text-on-light sm:text-4xl lg:text-5xl xl:text-6xl xl:leading-tight">
                {t("industries.hero.titleBefore")}{" "}
                <span className="text-[hsl(var(--brand-purple-700))]">{t("industries.hero.titleHighlight")}</span>
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-on-light-secondary sm:mt-6 sm:text-base lg:text-lg">
                {t("industries.hero.subtitle")}
              </p>

              <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
                <motion.a
                  href="#specializations"
                  whileHover={reduceMotion ? undefined : { scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-5 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] shadow-[0_16px_40px_hsl(var(--brand-gold-500)/0.28)] transition hover:brightness-105 sm:px-6"
                >
                  {t("industries.hero.cta")}
                  <ArrowDown className="h-4 w-4 shrink-0" aria-hidden />
                </motion.a>
                <Link
                  to="/ask-soham"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[hsl(var(--border-light-strong))] bg-white px-5 py-3 text-sm font-semibold text-on-light transition hover:bg-[hsl(var(--surface-light-100))] sm:px-6"
                >
                  Ask Soham - 15 Min Free
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                </Link>
              </div>
            </motion.div>

            <motion.figure
              className="relative mx-auto w-full max-w-[440px] lg:col-span-5 lg:max-w-none"
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 32 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
              transition={transition(0.12)}
            >
              <div className="overflow-hidden rounded-[1.75rem] border border-[hsl(var(--border-light))] bg-white shadow-[0_20px_60px_hsl(var(--brand-navy-950)/0.08)] sm:rounded-[2rem]">
                <img
                  src="/stitch/industries/empowering-sector.jpg"
                  alt="Modern architecture representing global business sectors"
                  className="aspect-[4/5] w-full object-cover sm:aspect-[5/6]"
                />
              </div>
              <div className="theme-card-light absolute -bottom-5 -left-4 max-w-[240px] rounded-2xl border border-[hsl(var(--border-light))] p-4 shadow-[0_16px_40px_hsl(var(--brand-navy-950)/0.1)] sm:-bottom-6 sm:-left-6 sm:max-w-[260px] sm:p-5">
                <Network className="mb-2 h-6 w-6 text-[hsl(var(--brand-gold-500))] sm:h-7 sm:w-7" aria-hidden />
                <p className="text-xs font-medium leading-relaxed text-[hsl(var(--brand-navy-950))] sm:text-sm">
                  {t("industries.overview.quote")}
                </p>
              </div>
            </motion.figure>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden theme-section-light px-5 section-pad sm:px-6">
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.08]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
            className="overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-white shadow-[0_20px_60px_hsl(var(--brand-navy-950)/0.06)] sm:rounded-[1.75rem] lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(300px,380px)] lg:items-stretch"
          >
            <div className="relative p-6 sm:p-8 lg:p-10">
              <motion.img
                src="/doodles/International trade-bro.svg"
                alt=""
                aria-hidden
                className="pointer-events-none absolute -right-4 -top-2 hidden h-28 w-28 opacity-[0.08] lg:block"
                animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />

              <span className="relative inline-flex rounded-full border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))] sm:text-[11px] sm:tracking-[0.22em]">
                On-the-ground depth
              </span>

              <h2 className="relative mt-4 max-w-2xl font-serif text-2xl font-bold leading-tight text-[hsl(var(--brand-navy-950))] sm:text-3xl lg:text-4xl">
                {t("industries.overview.title")}
              </h2>

              <p className="relative mt-4 max-w-2xl text-sm leading-relaxed text-on-light-secondary sm:text-base lg:text-[1.0625rem]">
                {t("industries.overview.copy")}
              </p>

              <div className="relative mt-6 flex flex-wrap gap-2.5 sm:mt-8">
                <Link
                  to="/language-localization"
                  className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-2 text-xs font-semibold text-on-light transition hover:border-[hsl(var(--brand-purple-700)/0.3)] hover:text-[hsl(var(--brand-purple-700))] sm:text-sm"
                >
                  <Languages className="h-3.5 w-3.5 shrink-0 text-[hsl(var(--brand-purple-700))]" aria-hidden />
                  Language services
                  <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
                </Link>
                <Link
                  to="/market-entry"
                  className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-2 text-xs font-semibold text-on-light transition hover:border-[hsl(var(--brand-purple-700)/0.3)] hover:text-[hsl(var(--brand-purple-700))] sm:text-sm"
                >
                  <Network className="h-3.5 w-3.5 shrink-0 text-[hsl(var(--brand-purple-700))]" aria-hidden />
                  Market entry
                  <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] p-5 sm:p-6 lg:border-t-0 lg:border-l lg:p-7">
              {overviewPillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={hidden}
                    whileInView={show}
                    viewport={{ once: true }}
                    transition={transition(0.08 + index * 0.06)}
                    className="rounded-xl border border-[hsl(var(--border-light))] bg-white p-4 sm:rounded-2xl sm:p-5"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[hsl(var(--brand-purple-700)/0.08)] text-[hsl(var(--brand-purple-700))]">
                        <Icon className="h-4 w-4" aria-hidden />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-serif text-base font-bold text-[hsl(var(--brand-navy-950))]">{pillar.title}</h3>
                        <p className="mt-1 text-xs leading-relaxed text-on-light-secondary sm:text-sm">{pillar.copy}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="specializations" className="relative scroll-mt-28 overflow-hidden theme-section-soft px-5 section-pad sm:px-6">
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.1]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
            className="mb-8 max-w-3xl lg:mb-10"
          >
            <span className="inline-flex rounded-full border border-[hsl(var(--border-light))] bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))] sm:px-4 sm:py-1.5 sm:text-[11px] sm:tracking-[0.22em]">
              {t("industries.specializations.title")}
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-[hsl(var(--brand-navy-950))] sm:text-4xl">
              {t("industries.specializations.subtitle")}
            </h2>
          </motion.div>

          <Accordion type="single" collapsible className="flex flex-col gap-2.5 md:hidden">
            {sectorCards.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <AccordionItem
                  key={sector.id}
                  value={sector.id}
                  className="overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] border-b-0 bg-white shadow-sm data-[state=open]:border-[hsl(var(--brand-purple-500)/0.35)] data-[state=open]:ring-1 data-[state=open]:ring-[hsl(var(--brand-purple-500)/0.15)]"
                >
                  <AccordionTrigger className="relative min-h-[88px] gap-0 overflow-hidden p-0 hover:no-underline [&[data-state=open]>svg]:text-[hsl(var(--brand-gold-500))]">
                    <img src={sector.image} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--brand-navy-950)/0.88)] via-[hsl(var(--brand-navy-950)/0.72)] to-[hsl(var(--brand-navy-950)/0.45)]" aria-hidden />
                    <span className="relative z-10 flex min-w-0 flex-1 items-center gap-3 px-4 py-4 text-left text-white">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--brand-gold-500))]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="block font-serif text-base font-bold leading-snug">{sector.title}</span>
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 text-xs leading-relaxed text-on-light-secondary">
                    {sector.description}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>

          <div className="hidden gap-3.5 md:grid md:grid-cols-3 md:gap-4 lg:grid-cols-5 lg:gap-3">
            {sectorCards.map((sector, index) => (
              <LanguageSectorCard
                key={sector.id}
                sector={sector}
                index={index}
                hidden={hidden}
                show={show}
                transition={transition}
              />
            ))}
          </div>
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
                src="/doodles/Group discussion-bro.svg"
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
                {t("industries.cta.title")}
              </h2>
              <p className="relative mt-2 max-w-xl text-sm leading-relaxed text-white/78 sm:text-[0.9375rem]">
                {t("industries.cta.copy")}
              </p>

              <ul className="relative mt-4 flex flex-wrap gap-2">
                {[
                  { icon: Network, label: "Sector-specific depth" },
                  { icon: Globe2, label: "Corridor intelligence" },
                  { icon: Languages, label: "Language + operations" },
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
                {t("industries.cta.button")}
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>

              <Link
                to="/language-localization"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-2xl border border-[hsl(var(--brand-purple-500)/0.22)] bg-white px-5 py-3.5 text-sm font-semibold text-[hsl(var(--brand-purple-700))] transition hover:border-[hsl(var(--brand-purple-500)/0.35)] hover:bg-[hsl(var(--brand-purple-700)/0.04)]"
              >
                <Languages className="h-4 w-4 shrink-0" aria-hidden />
                Language services
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>

              <Link
                to="/market-entry"
                className="group inline-flex min-h-11 w-full items-center justify-center gap-2 text-sm font-semibold text-on-light-secondary transition hover:text-[hsl(var(--brand-purple-700))]"
              >
                Explore market entry
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Industries;
