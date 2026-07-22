import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
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
  Sparkles,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/PageLayout";
import { useContactInquiry } from "@/components/ContactInquiryProvider";
import MarqueeBand from "@/components/MarqueeBand";
import SectionDivider from "@/components/SectionDivider";
import AeoFrequentlyAskedQuestions from "@/components/AeoFrequentlyAskedQuestions";
import LanguageSectorCard from "@/components/language-localization/LanguageSectorCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { MARKET_ENTRY_FAQS, SPEAKABLE_MARKET_ENTRY } from "@/data/aeoContent";
import {
  absoluteUrl,
  breadcrumbSchema,
  faqPageSchema,
  serviceSchema,
  speakableWebPage,
} from "@/lib/schemaHelpers";

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
    id: "regulatory-entity-formation",
    title: "Regulatory & Entity Formation",
    description: "Local entity setup, RBI/FEMA compliance, industry licensing, sectoral approvals",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "bank-onboarding",
    title: "Bank Onboarding & Financial Setup",
    description: "Business account establishment, financial infrastructure, payment pathways",
    icon: Banknote,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "executive-liaison",
    title: "Executive Liaison & Negotiation Support",
    description: "Native-language liaison for government relations and senior business negotiations",
    icon: Users,
    href: "/liaisoning-facilitation/",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "local-procurement",
    title: "Local Procurement & Supply Chain",
    description: "Vetted vendor identification, physical site verification, supply chain establishment",
    icon: Package,
    href: "/import-export/",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "payroll-hr",
    title: "Payroll & HR Facilitation",
    description: "Local talent pipeline, labour law compliance, staffing support",
    icon: FileCheck,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "on-ground-operations",
    title: "On-Ground Operations Management",
    description: "Day-to-day operational oversight, vendor coordination, reporting",
    icon: Globe2,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "language-cultural-intelligence",
    title: "Language & Cultural Intelligence",
    description: "Interpretation, translation and cultural advisory throughout every workstream",
    icon: Languages,
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
  },
];

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
  const reduceMotion = useReducedMotion();
  const { open: openContactForm } = useContactInquiry();
  const [expandedHowStep, setExpandedHowStep] = useState<number | null>(null);
  const hidden = reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 };
  const show = { opacity: 1, y: 0 };
  const transition = (delay = 0) => ({
    duration: reduceMotion ? 0.35 : 0.72,
    delay,
    ease: [0.22, 1, 0.36, 1] as const,
  });

  const deliverCards = workstreams.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    icon: item.icon,
    image: item.image,
    imageAlt: item.title,
    href: "href" in item ? item.href : undefined,
    linkLabel: "Explore this service",
  }));

  const deliverCardRow = (items: typeof deliverCards, startIndex: number) =>
    items.map((item, offset) => (
      <LanguageSectorCard
        key={item.id}
        sector={item}
        index={startIndex + offset}
        hidden={hidden}
        show={show}
        transition={transition}
      />
    ));

  return (
    <PageLayout
      title={t("seo.marketEntry.title")}
      description={t("seo.marketEntry.description")}
      canonicalPath="/market-entry/"
      keywords={MARKET_ENTRY_KEYWORDS}
      jsonLd={marketEntryLd}
    >
      <section className="relative overflow-hidden bg-white section-pad-hero sm:px-6 lg:px-6">
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

      <section id="who-we-serve" className="theme-section-soft relative scroll-mt-24 overflow-hidden px-5 section-pad sm:px-6">
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

      <section id="what-we-deliver" className="theme-section-light relative scroll-mt-24 overflow-hidden px-5 section-pad sm:px-6">
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.12] lg:opacity-[0.14]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
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

          <MarqueeBand
            items={workstreams.map((item) => item.title)}
            ariaLabel="Market entry workstreams"
            icon={Sparkles}
          />

          <Accordion type="single" collapsible className="flex flex-col gap-2.5 md:hidden">
            {deliverCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] border-b-0 bg-white shadow-sm data-[state=open]:border-[hsl(var(--brand-purple-500)/0.35)] data-[state=open]:ring-1 data-[state=open]:ring-[hsl(var(--brand-purple-500)/0.15)]"
                >
                  <AccordionTrigger className="relative min-h-[88px] gap-0 overflow-hidden p-0 hover:no-underline [&[data-state=open]>svg]:text-[hsl(var(--brand-gold-500))]">
                    <img src={item.image} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--brand-navy-950)/0.88)] via-[hsl(var(--brand-navy-950)/0.72)] to-[hsl(var(--brand-navy-950)/0.45)]" aria-hidden />
                    <span className="relative z-10 flex min-w-0 flex-1 items-center gap-3 px-4 py-4 text-left text-white">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--brand-gold-500))]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="block font-serif text-base font-bold leading-snug">{item.title}</span>
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 text-xs leading-relaxed text-on-light-secondary">
                    {item.description}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>

          <div className="hidden md:flex md:flex-col md:gap-4 lg:gap-5">
            <div className="grid grid-cols-2 gap-3.5 md:gap-4 lg:grid-cols-4">
              {deliverCardRow(deliverCards.slice(0, 4), 0)}
            </div>
            <div className="mx-auto grid w-full max-w-5xl grid-cols-3 gap-3.5 md:gap-4">
              {deliverCardRow(deliverCards.slice(4), 4)}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="slant" flip />

      <section id="proof" className="theme-section-soft relative scroll-mt-24 overflow-hidden px-5 section-pad sm:px-6">
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

      <section id="how-it-works" className="relative scroll-mt-24 overflow-hidden theme-section-soft px-5 section-pad-cta sm:px-6">

        <div className="container relative z-10 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-8 lg:mb-8 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(220px,260px)] lg:items-center lg:gap-8">
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

              {howItWorks.map((step, index) => {
                const isOpen = expandedHowStep === index;

                return (
                <motion.article
                  key={step.title}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  onClick={() => setExpandedHowStep((prev) => (prev === index ? null : index))}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setExpandedHowStep((prev) => (prev === index ? null : index));
                    }
                  }}
                  onMouseLeave={() => setExpandedHowStep(null)}
                  className={cn(
                    "theme-card-light card-shine group/step relative flex h-full min-h-[11.5rem] cursor-pointer flex-col overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-white p-4 outline-none transition-[border-color,box-shadow] duration-300 focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-purple-500)/0.35)] sm:min-h-[12rem] sm:p-5 lg:p-6",
                    isOpen && "border-[hsl(var(--brand-purple-500)/0.28)] shadow-[0_14px_36px_rgba(26,22,51,0.08)]",
                    "lg:hover:border-[hsl(var(--brand-purple-500)/0.28)] lg:hover:shadow-[0_14px_36px_rgba(26,22,51,0.08)]",
                  )}
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

                  <div className="relative z-10 mb-3 flex items-center gap-3 sm:mb-4">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--brand-gold-500))] text-xs font-bold text-[hsl(var(--brand-navy-950))]">
                      {index + 1}
                    </span>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))] sm:text-[11px]">
                      Step {index + 1}
                    </p>
                  </div>

                  <h3 className="relative z-10 font-serif text-base font-bold leading-snug text-on-light sm:text-lg">{step.title}</h3>

                  <p
                    className={cn(
                      "relative z-10 mt-2 overflow-hidden text-xs leading-relaxed text-on-light-secondary transition-all duration-300 ease-out sm:mt-3 sm:text-sm",
                      isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0",
                      "lg:max-h-0 lg:opacity-0 lg:group-hover/step:max-h-40 lg:group-hover/step:opacity-100",
                      isOpen && "lg:max-h-40 lg:opacity-100",
                    )}
                  >
                    {step.detail}
                  </p>

                  <span
                    className={cn(
                      "relative z-10 mt-auto inline-flex items-center gap-1 pt-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-on-light-muted transition-opacity duration-300",
                      isOpen && "opacity-0",
                      "lg:opacity-100 lg:group-hover/step:opacity-0",
                      isOpen && "lg:opacity-0",
                    )}
                  >
                    View details
                    <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-300", isOpen && "rotate-180")} aria-hidden />
                  </span>
                </motion.article>
                );
              })}
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
            <button
              type="button"
              onClick={openContactForm}
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[hsl(var(--border-light-strong))] bg-white px-6 py-3 text-sm font-semibold text-on-light transition hover:bg-[hsl(var(--surface-light-100))] sm:w-auto"
            >
              Send a message to Soham
              <ArrowRight className="h-4 w-4 shrink-0" />
            </button>
          </div>
        </div>
      </section>

      <AeoFrequentlyAskedQuestions items={MARKET_ENTRY_FAQS} className="theme-section-light px-5 section-pad sm:px-6" />
    </PageLayout>
  );
};

export default MarketEntry;
