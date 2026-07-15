import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  Banknote,
  Building2,
  CheckCircle2,
  ChevronDown,
  FileCheck,
  Globe2,
  Languages,
  Package,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/PageLayout";
import SectionDivider from "@/components/SectionDivider";
import AeoFrequentlyAskedQuestions from "@/components/AeoFrequentlyAskedQuestions";
import { MARKET_ENTRY_FAQS, SPEAKABLE_MARKET_ENTRY } from "@/data/aeoContent";
import {
  absoluteUrl,
  breadcrumbSchema,
  faqPageSchema,
  serviceSchema,
  speakableWebPage,
} from "@/lib/schemaHelpers";
import { cn } from "@/lib/utils";

const MARKET_ENTRY_KEYWORDS =
  "India market entry consultant, foreign company India setup, entity formation India, Japan India business expansion, Southeast Asia India trade";

const whoWeServe = [
  {
    id: "india-entry-foreign-companies",
    title: "Foreign Companies Entering India",
    badge: "Into India",
    description:
      "You are based in Japan, Southeast Asia, East Asia, Latin America or Africa. You see India as your next growth market. You need a partner who understands both sides - your culture and India's operational reality.",
    illustration: "/doodles/International trade-bro.svg",
    illustrationAlt: "Foreign companies entering India illustration",
    points: [
      "Japanese and Korean manufacturers setting up India operations",
      "Southeast Asian companies seeking India distribution or manufacturing",
      "Latin American and African firms exploring India as a sourcing or expansion hub",
      "Any organisation needing language and operations managed by one trusted partner",
    ],
  },
  {
    id: "indian-companies-going-abroad",
    title: "Indian Companies Going Abroad",
    badge: "Out of India",
    description:
      "You are an Indian company ready to expand into Southeast Asia, East Asia or beyond. You need on-ground support, local language capability and someone who can open doors in markets you don't yet know.",
    illustration: "/doodles/Business growth-cuate.svg",
    illustrationAlt: "Indian companies expanding abroad illustration",
    points: [
      "Indian manufacturers seeking Southeast Asian distribution",
      "Indian exporters entering Japan, China, Vietnam or Indonesia",
      "Indian service firms establishing presence in ASEAN markets",
    ],
  },
];

const workstreams = [
  {
    title: "Regulatory & Entity Formation",
    description: "Local entity setup, RBI/FEMA compliance, industry licensing, sectoral approvals",
    icon: Building2,
  },
  {
    title: "Bank Onboarding & Financial Setup",
    description: "Business account establishment, financial infrastructure, payment pathways",
    icon: Banknote,
  },
  {
    title: "Executive Liaison & Negotiation Support",
    description: "Native-language liaison for government relations and senior business negotiations",
    icon: Users,
    href: "/liaisoning-facilitation/",
  },
  {
    title: "Local Procurement & Supply Chain",
    description: "Vetted vendor identification, physical site verification, supply chain establishment",
    icon: Package,
    href: "/import-export/",
  },
  {
    title: "Payroll & HR Facilitation",
    description: "Local talent pipeline, labour law compliance, staffing support",
    icon: FileCheck,
  },
  {
    title: "On-Ground Operations Management",
    description: "Day-to-day operational oversight, vendor coordination, reporting",
    icon: Globe2,
  },
  {
    title: "Language & Cultural Intelligence",
    description: "Interpretation, translation and cultural advisory throughout every workstream",
    icon: Languages,
  },
];

type WorkstreamItem = (typeof workstreams)[number];

const WorkstreamCard = ({ item, index }: { item: WorkstreamItem; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const Icon = item.icon;
  const href = "href" in item ? item.href : undefined;
  const showDetails = expanded;

  return (
    <div
      className={cn(
        "theme-card-light card-shine group/card relative flex h-full min-h-[10.75rem] flex-col overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-white transition-all duration-300 sm:min-h-[11.5rem] sm:rounded-3xl",
        showDetails &&
          "border-[hsl(var(--brand-purple-500)/0.28)] shadow-[0_16px_36px_rgba(26,22,51,0.08)]",
        "lg:hover:border-[hsl(var(--brand-purple-500)/0.28)] lg:hover:shadow-[0_16px_36px_rgba(26,22,51,0.08)]",
      )}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--brand-gold-500)/0.55)] to-transparent" />
      <span
        className="pointer-events-none absolute -right-1 bottom-2 font-serif text-[4.5rem] font-bold leading-none text-[hsl(var(--brand-navy-950)/0.04)] sm:text-[5rem]"
        aria-hidden
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div
        role="button"
        tabIndex={0}
        className="relative z-10 flex h-full flex-col p-5 text-left sm:p-6 lg:cursor-default"
        onClick={() => setExpanded((prev) => !prev)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setExpanded((prev) => !prev);
          }
        }}
        aria-expanded={showDetails}
        aria-label={`${showDetails ? "Hide" : "Show"} details for ${item.title}`}
      >
        <div className="flex items-start justify-between gap-4">
          <span className="inline-flex h-9 min-w-[2.25rem] items-center justify-center rounded-full bg-[hsl(var(--brand-navy-950))] px-2.5 font-mono text-[11px] font-bold tracking-[0.16em] text-[hsl(var(--brand-gold-500))]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] text-[hsl(var(--brand-purple-700))] transition duration-300 group-hover/card:scale-[1.04] group-hover/card:border-[hsl(var(--brand-purple-500)/0.22)]">
            <Icon className="h-[1.15rem] w-[1.15rem]" aria-hidden />
          </span>
        </div>

        <h3 className="mt-5 max-w-[16rem] font-serif text-lg font-bold leading-snug text-on-light sm:text-xl">{item.title}</h3>

        <div
          className={cn(
            "grid transition-all duration-300 ease-out",
            showDetails ? "mt-4 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0",
            "lg:mt-0 lg:grid-rows-[0fr] lg:opacity-0 lg:group-hover/card:mt-4 lg:group-hover/card:grid-rows-[1fr] lg:group-hover/card:opacity-100",
          )}
        >
          <div className="overflow-hidden">
            <p className="max-w-[18rem] text-sm leading-relaxed text-on-light-secondary">{item.description}</p>
            {href ? (
              <Link
                to={href}
                className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--brand-purple-700))] hover:underline"
                onClick={(event) => event.stopPropagation()}
              >
                Explore this service
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            ) : null}
          </div>
        </div>

        <span
          className={cn(
            "mt-auto inline-flex items-center gap-1.5 pt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-on-light-muted transition-opacity duration-200 lg:hidden",
            showDetails && "opacity-0",
          )}
        >
          View details
          <ChevronDown className="h-3.5 w-3.5" aria-hidden />
        </span>

        <span className="mt-auto hidden pt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-on-light-muted opacity-60 transition-opacity duration-200 lg:inline-flex lg:group-hover/card:opacity-0">
          Hover for details
        </span>
      </div>
    </div>
  );
};

const howItWorks = [
  {
    title: "India Entry Readiness Call",
    detail:
      "30 minutes. We assess your expansion goals, identify highest-risk gaps and give you a clear picture of what needs to be in place before you move.",
  },
  {
    title: "Custom Entry Roadmap",
    detail:
      "A structured, sequenced plan covering regulatory, operational, language and cultural requirements specific to your sector and corridor.",
  },
  {
    title: "Execution",
    detail: "UVAN manages the full mandate on the ground. Regular updates. We handle the complexity.",
  },
  {
    title: "Ongoing Operations Support",
    detail: "Once established, UVAN continues as your on-ground liaison, operations manager and language partner.",
  },
];

const marketEntryLd = [
  speakableWebPage(absoluteUrl("/market-entry/"), [".market-entry-speakable"]),
  faqPageSchema(absoluteUrl("/market-entry/"), MARKET_ENTRY_FAQS),
  serviceSchema({
    name: "India market entry consulting",
    description:
      "UVAN manages full-cycle India market entry for foreign companies - entity formation, regulatory navigation, executive liaison, and on-ground operations. 10 years. 10+ sectors.",
    canonicalPath: "/market-entry/",
    serviceType: "Market entry consulting",
  }),
  breadcrumbSchema(absoluteUrl("/market-entry/"), [
    { name: "Home", path: "/" },
    { name: "Market Entry", path: "/market-entry/" },
  ]),
];

const MarketEntry = () => {
  const { t } = useTranslation();

  return (
    <PageLayout
      title={t("seo.marketEntry.title")}
      description={t("seo.marketEntry.description")}
      canonicalPath="/market-entry/"
      keywords={MARKET_ENTRY_KEYWORDS}
      jsonLd={marketEntryLd}
    >
      <section className="relative overflow-hidden bg-white px-5 pb-14 pt-8 sm:px-6 lg:px-6 lg:pb-24 lg:pt-12">
        <img
          src="/doodles/International trade-rafiki.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-10 right-0 hidden h-72 w-72 opacity-[0.12] lg:block xl:h-80 xl:w-80"
        />
        <div className="container relative mx-auto">
          <div className="grid items-center gap-8 lg:grid-cols-[3fr_2fr] lg:gap-14">
            <motion.div
              className="max-w-4xl"
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-4 inline-flex max-w-full rounded-full border border-[hsl(var(--border-light))] bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))] sm:mb-5 sm:px-4 sm:py-1.5 sm:text-xs sm:tracking-[0.2em]">
                India Entry. ASEAN Expansion. One Partner.
              </p>
              <h1 className="font-serif text-[1.85rem] font-bold leading-[1.08] text-on-light sm:text-4xl lg:text-5xl xl:text-6xl xl:leading-tight">
                We've Already Been in the Room.{" "}
                <span className="text-[hsl(var(--brand-purple-700))]">Now We'll Be in It With You.</span>
              </h1>
              <p className="market-entry-speakable mt-4 max-w-3xl text-sm leading-relaxed text-on-light-secondary sm:mt-6 sm:text-base lg:text-lg">
                {SPEAKABLE_MARKET_ENTRY}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap lg:gap-4">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                  <Link
                    to="/ask-soham"
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-5 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105 sm:w-auto sm:px-6"
                  >
                    Book Your India Entry Readiness Call
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                  <Link
                    to="/market-entry-audit"
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-[hsl(var(--border-light-strong))] bg-white px-5 py-3 text-sm font-semibold text-on-light transition hover:bg-[hsl(var(--surface-light-100))] sm:w-auto sm:px-6"
                  >
                    Download the 2026 Market Entry Audit
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, y: 26, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="overflow-hidden rounded-3xl shadow-[0_22px_60px_rgba(6,3,20,0.55)]">
                <img
                  src="/page-assets/bsnssltn-4-min.jpg"
                  alt="UVAN - Market Entry for South Asian and Oriental Markets"
                  className="h-full w-full object-cover grayscale transition duration-700 hover:grayscale-0"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" />

      <section id="who-we-serve" className="theme-section-soft relative scroll-mt-24 overflow-hidden px-5 py-8 sm:px-6 lg:py-20">
        <div className="glow-orb glow-orb-gold pointer-events-none h-[200px] w-[200px] -right-16 bottom-0 opacity-[0.06] lg:h-[360px] lg:w-[360px] lg:-right-24 lg:opacity-[0.08]" />
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.12] lg:opacity-[0.16]" />

        <div className="container relative z-10 mx-auto">
          <motion.div
            className="mx-auto mb-6 max-w-3xl text-center lg:mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-[1.65rem] font-bold text-on-light sm:text-4xl lg:text-5xl">Who We Serve</h2>
          </motion.div>

          <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:gap-6 lg:gap-8">
            {whoWeServe.map((segment, i) => {
              const illustrationFirst = i % 2 === 0;
              return (
                <motion.article
                  key={segment.title}
                  id={segment.id}
                  className="group theme-card-light card-shine scroll-mt-28 overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] lg:rounded-3xl"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4 }}
                >
                  <div className="grid items-center gap-5 p-4 sm:gap-8 sm:p-6 lg:grid-cols-2 lg:gap-10 lg:p-10">
                    <motion.figure
                      className={`order-2 flex items-center justify-center px-1 sm:px-4 ${illustrationFirst ? "lg:order-1" : "lg:order-2"}`}
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.12, duration: 0.55 }}
                    >
                      <motion.img
                        src={segment.illustration}
                        alt={segment.illustrationAlt}
                        className="h-32 w-full max-w-[240px] object-contain sm:h-44 sm:max-w-[320px] lg:h-52 lg:max-w-none"
                        animate={{ y: [0, -7, 0] }}
                        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.35 }}
                        whileHover={{ scale: 1.03 }}
                      />
                    </motion.figure>

                    <div className={`order-1 min-w-0 ${illustrationFirst ? "lg:order-2" : "lg:order-1"}`}>
                      <span className="inline-flex rounded-full bg-[hsl(var(--brand-purple-700)/0.08)] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--brand-purple-700))] sm:px-3 sm:py-1 sm:text-[11px] sm:tracking-[0.16em]">
                        {segment.badge}
                      </span>
                      <h3 className="mt-2 font-serif text-xl font-bold leading-snug text-on-light sm:mt-3 sm:text-2xl lg:text-3xl">{segment.title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-on-light-secondary sm:mt-3 sm:text-sm lg:text-base">{segment.description}</p>
                      <ul className="mt-4 space-y-2 sm:mt-5 sm:space-y-2.5">
                        {segment.points.map((point, pi) => (
                          <motion.li
                            key={point}
                            className="flex items-start gap-2 text-xs text-on-light-secondary sm:gap-2.5 sm:text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 + pi * 0.06 + 0.2 }}
                          >
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[hsl(var(--brand-purple-500))] sm:h-4 sm:w-4" />
                            <span>{point}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider variant="slant" />

      <section id="what-we-deliver" className="theme-section-light relative scroll-mt-24 overflow-hidden px-5 py-8 sm:px-6 lg:py-20">
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.12] lg:opacity-[0.14]" />

        <div className="container relative z-10 mx-auto">
          <motion.div
            className="mb-8 lg:mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-3 inline-flex rounded-full border border-[hsl(var(--border-light))] bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))] sm:px-4 sm:py-1.5 sm:text-[11px] sm:tracking-[0.22em]">
              What We Deliver
            </span>
            <h2 className="font-serif text-3xl font-bold leading-tight text-on-light sm:text-4xl lg:text-5xl">
              <span className="text-[hsl(var(--brand-purple-700))] italic">7 Workstreams</span>{" "}
              Under One Partner
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-on-light-secondary sm:text-base">
              Every market entry mandate runs across these operational workstreams - language and cultural intelligence
              threaded through each one.
            </p>
          </motion.div>

          <div className="space-y-5 sm:space-y-6">
            <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
              {workstreams.slice(0, 6).map((item, i) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="h-full"
                >
                  <WorkstreamCard item={item} index={i} />
                </motion.article>
              ))}
            </div>

            {(() => {
              const item = workstreams[6];
              const Icon = item.icon;
              const capstoneInner = (
                <div className="theme-card-light card-shine group/capstone relative overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-[linear-gradient(135deg,hsl(var(--surface-light-50))_0%,hsl(var(--surface-light-100))_52%,hsl(var(--brand-purple-700)/0.06)_100%)] p-5 sm:rounded-3xl sm:p-6 lg:p-8">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--brand-purple-700)/0.35)] to-transparent" />
                  <div className="grid items-center gap-5 lg:grid-cols-[auto_minmax(0,1fr)_minmax(12rem,16rem)] lg:gap-8">
                    <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-3">
                      <span className="inline-flex h-10 min-w-[2.5rem] items-center justify-center rounded-full bg-[hsl(var(--brand-navy-950))] px-3 font-mono text-xs font-bold tracking-[0.18em] text-[hsl(var(--brand-gold-500))]">
                        07
                      </span>
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,hsl(var(--brand-purple-700))_0%,hsl(var(--brand-cyan-500))_100%)] text-white shadow-gold-sm">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))] sm:text-[11px] sm:tracking-[0.22em]">
                        Threaded through every workstream
                      </p>
                      <h3 className="mt-2 font-serif text-2xl font-bold leading-snug text-on-light sm:text-[1.65rem] lg:text-3xl">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-on-light-secondary sm:text-base">
                        {item.description}
                      </p>
                    </div>
                    <div className="hidden border-l border-[hsl(var(--border-light))] pl-6 lg:block">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-on-light-muted">
                        Cross-cutting capability
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-on-light-secondary">
                        Applied across regulatory, financial, operational and executive workstreams.
                      </p>
                    </div>
                  </div>
                </div>
              );

              return (
                <motion.article
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.18 }}
                  whileHover={{ y: -3 }}
                >
                  {capstoneInner}
                </motion.article>
              );
            })()}
          </div>
        </div>
      </section>

      <SectionDivider variant="slant" flip />

      <section id="proof" className="theme-section-soft relative scroll-mt-24 overflow-hidden px-5 py-8 sm:px-6 lg:py-20">
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.12] lg:opacity-[0.14]" />

        <motion.div
          className="theme-card-light card-shine container relative z-10 mx-auto overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] p-4 sm:rounded-3xl sm:p-6 lg:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(240px,320px)] lg:items-center lg:gap-10">
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[hsl(var(--brand-purple-700))] sm:text-xs sm:tracking-[0.18em]">
                Full Market Entry Mandate - Japan to India
              </p>
              <h2 className="mt-2 font-serif text-[1.45rem] font-bold leading-tight text-on-light sm:mt-3 sm:text-3xl lg:text-4xl">
                How a Leading Japanese Manufacturer Successfully Established India Operations
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-on-light-secondary sm:mt-4 sm:text-sm lg:text-base">
                A leading Japanese manufacturer engaged UVAN for a complete India entry mandate - from initial regulatory
                mapping and entity formation through to executive liaison, local procurement and on-ground operational setup.
                UVAN served as the single point of coordination across all workstreams, managing the language and cultural
                interface between Japanese leadership and Indian stakeholders simultaneously.
              </p>

              <div className="mt-4 grid grid-cols-3 gap-2 sm:mt-6 sm:gap-3">
                {["Regulatory setup", "Executive liaison", "Operations live"].map((label, i) => (
                  <motion.div
                    key={label}
                    className="rounded-xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] px-2 py-2.5 text-center sm:px-4 sm:py-3"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + 0.15 }}
                  >
                    <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[hsl(var(--brand-purple-700))] sm:text-[10px] sm:tracking-[0.16em]">Delivered</p>
                    <p className="mt-0.5 text-[11px] font-semibold leading-snug text-on-light sm:mt-1 sm:text-sm">{label}</p>
                  </motion.div>
                ))}
              </div>

              <p className="mt-4 text-xs font-medium text-on-light sm:mt-5 sm:text-sm">
                Full market entry delivered. One partner. Zero coordination overhead.
              </p>

              <div className="mt-4 sm:mt-6">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="block w-full sm:inline-block sm:w-auto">
                  <Link
                    to="/case-study"
                    className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[hsl(var(--border-light-strong))] bg-[hsl(var(--surface-light-card))] px-5 py-2.5 text-sm font-semibold text-on-light transition hover:border-[hsl(var(--brand-purple-500)/0.6)] sm:w-auto"
                  >
                    Read the Full Case Study
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </Link>
                </motion.div>
              </div>
            </div>

            <motion.figure
              className="mx-auto w-full max-w-[220px] lg:max-w-none"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.12 }}
            >
              <motion.img
                src="/doodles/Charts-cuate.svg"
                alt="Japan to India market entry case study illustration"
                className="h-32 w-full object-contain sm:h-44 sm:max-w-[300px] lg:h-52"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.figure>
          </div>
        </motion.div>
      </section>

      <section id="audit" className="theme-section-light relative scroll-mt-24 overflow-hidden px-5 py-8 sm:px-6 lg:py-16">
        <motion.div
          className="theme-card-light container relative z-10 mx-auto rounded-2xl border border-[hsl(var(--border-light))] p-5 sm:rounded-3xl sm:p-8 lg:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-2xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))] sm:text-xs">
                Free Resource
              </p>
              <h2 className="mt-2 font-serif text-2xl font-bold leading-tight text-on-light sm:text-3xl lg:text-4xl">
                The 5 Operational Gaps That Quietly Kill International Expansion.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-on-light-secondary">
                Assess your expansion readiness before you commit.
              </p>
            </div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full shrink-0 lg:w-auto">
              <Link
                to="/market-entry-audit"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105 lg:w-auto"
              >
                Download the 2026 Market Entry Audit
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <SectionDivider variant="wave" />

      <section id="how-it-works" className="relative scroll-mt-24 overflow-hidden theme-section-soft px-5 py-10 sm:px-6 lg:py-20">

        <div className="container relative z-10 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-8 lg:mb-10 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(220px,260px)] lg:items-center lg:gap-8">
              <div>
                <span className="mb-3 inline-flex rounded-full border border-[hsl(var(--border-light))] bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))] sm:px-4 sm:py-1.5 sm:text-[11px] sm:tracking-[0.22em]">
                  Process
                </span>
                <h2 className="font-serif text-3xl font-bold leading-tight text-on-light sm:text-4xl lg:text-5xl">How It Works</h2>
              </div>
              <motion.figure
                className="mx-auto hidden w-full max-w-[240px] lg:block lg:max-w-none lg:justify-self-end"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <motion.img
                  src="/doodles/Schedule-amico.svg"
                  alt="Market entry process illustration"
                  className="h-36 w-full object-contain sm:h-40 lg:h-44"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.figure>
            </div>

            <div className="relative md:hidden">
              <div
                className="pointer-events-none absolute bottom-4 left-4 top-4 w-px bg-gradient-to-b from-[hsl(var(--brand-purple-500)/0.45)] via-[hsl(var(--brand-purple-500)/0.2)] to-transparent"
                aria-hidden
              />
              <ol className="space-y-3">
                {howItWorks.map((step, index) => (
                  <motion.li
                    key={step.title}
                    className="relative flex gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.45 }}
                    transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--brand-gold-500))] text-xs font-bold text-[hsl(var(--brand-navy-950))] ring-4 ring-[hsl(var(--surface-light-100))]">
                      {index + 1}
                    </span>
                    <div className="relative min-w-0 flex-1 overflow-hidden rounded-xl border border-[hsl(var(--border-light))] bg-white px-3.5 py-3">
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--brand-gold-500)/0.45)] to-transparent" />
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))]">
                        Step {index + 1}
                      </p>
                      <h3 className="mt-1 font-serif text-sm font-bold leading-snug text-on-light sm:text-base">{step.title}</h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-on-light-secondary">{step.detail}</p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>

            <div className="relative hidden auto-rows-fr gap-4 md:grid md:grid-cols-2 xl:grid-cols-4 xl:gap-5">
              <div
                className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-12 hidden h-px bg-gradient-to-r from-transparent via-[hsl(var(--brand-purple-500)/0.35)] to-transparent xl:block"
                aria-hidden
              />

              {howItWorks.map((step, index) => (
                <motion.article
                  key={step.title}
                  className="theme-card-light card-shine relative flex h-full min-h-[14rem] flex-col overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-white p-4 sm:min-h-[15rem] sm:p-5 lg:p-6"
                  initial={{ opacity: 0, y: 40, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.65, delay: index * 0.14, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -5 }}
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--brand-gold-500)/0.55)] to-transparent" />
                  <span
                    className="pointer-events-none absolute -right-1 top-2 font-serif text-6xl font-bold leading-none text-[hsl(var(--brand-navy-950)/0.05)] sm:text-7xl"
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative z-10 mb-4 flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--brand-gold-500))] text-xs font-bold text-[hsl(var(--brand-navy-950))]">
                      {index + 1}
                    </span>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))] sm:text-[11px]">
                      Step {index + 1}
                    </p>
                  </div>

                  <h3 className="relative z-10 font-serif text-base font-bold leading-snug text-on-light sm:text-lg">{step.title}</h3>
                  <p className="relative z-10 mt-2 flex-1 text-xs leading-relaxed text-on-light-secondary sm:mt-3 sm:text-sm">
                    {step.detail}
                  </p>
                </motion.article>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-[hsl(var(--border-light))] pt-8 sm:flex-row sm:flex-wrap">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                <Link
                  to="/ask-soham"
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105 sm:w-auto"
                >
                  Book Your India Entry Readiness Call
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                <Link
                  to="/market-entry-audit"
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[hsl(var(--border-light-strong))] bg-white px-6 py-3 text-sm font-semibold text-on-light transition hover:bg-[hsl(var(--surface-light-100))] sm:w-auto"
                >
                  Download the 2026 Market Entry Audit
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider variant="slant" />

      <section className="relative overflow-hidden theme-section-soft px-5 py-12 sm:px-6 lg:py-16">
        <div className="container relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl font-bold leading-tight text-on-light sm:text-4xl">Ready to Stress-Test Your Market Entry Plan?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-on-light-secondary sm:text-base">
            Start with a free 15-minute readiness call with founder Soham Kakade, or download the 2026 Market Entry Audit
            to identify gaps before you commit capital.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/ask-soham"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105 sm:w-auto"
            >
              Ask Soham - 15 Min Free
              <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
            <a
              href="/contact"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[hsl(var(--border-light-strong))] bg-white px-6 py-3 text-sm font-semibold text-on-light transition hover:bg-[hsl(var(--surface-light-100))] sm:w-auto"
            >
              Email info@ewan.co.in
              <ArrowRight className="h-4 w-4 shrink-0" />
            </a>
          </div>
        </div>
      </section>

      <AeoFrequentlyAskedQuestions items={MARKET_ENTRY_FAQS} className="theme-section-light px-5 py-10 sm:px-6 sm:py-16" />
    </PageLayout>
  );
};

export default MarketEntry;
