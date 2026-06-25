import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/PageLayout";
import AeoFrequentlyAskedQuestions from "@/components/AeoFrequentlyAskedQuestions";
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
    description:
      "You are based in Japan, Southeast Asia, East Asia, Latin America or Africa. You see India as your next growth market. You need a partner who understands both sides - your culture and India's operational reality.",
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
    description:
      "You are an Indian company ready to expand into Southeast Asia, East Asia or beyond. You need on-ground support, local language capability and someone who can open doors in markets you don't yet know.",
    points: [
      "Indian manufacturers seeking Southeast Asian distribution",
      "Indian exporters entering Japan, China, Vietnam or Indonesia",
      "Indian service firms establishing presence in ASEAN markets",
    ],
  },
];

const workstreams = [
  "Regulatory & Entity Formation - Local entity setup, RBI/FEMA compliance, industry licensing, sectoral approvals",
  "Bank Onboarding & Financial Setup - Business account establishment, financial infrastructure, payment pathways",
  "Executive Liaison & Negotiation Support - Native-language liaison for government relations and senior business negotiations",
  "Local Procurement & Supply Chain - Vetted vendor identification, physical site verification, supply chain establishment",
  "Payroll & HR Facilitation - Local talent pipeline, labour law compliance, staffing support",
  "On-Ground Operations Management - Day-to-day operational oversight, vendor coordination, reporting",
  "Language & Cultural Intelligence - Interpretation, translation and cultural advisory throughout every workstream",
];

const auditGaps = [
  "Gap 1 - Regulatory & Entity Infrastructure",
  "Gap 2 - Partner & Distribution Integrity (Physical Verification)",
  "Gap 3 - The 'Coordination Tax' - Management Overhead",
  "Gap 4 - Human Capital & Local Staffing Strategy",
  "Gap 5 - Executive Liaison & High-Stakes Negotiation",
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

  return (
    <PageLayout
      title={t("seo.marketEntry.title")}
      description={t("seo.marketEntry.description")}
      canonicalPath="/market-entry/"
      keywords={MARKET_ENTRY_KEYWORDS}
      jsonLd={marketEntryLd}
    >
      <section className="relative overflow-hidden bg-[hsl(var(--brand-navy-950))] px-6 pb-24 pt-12 text-white">
        {/* Section Background Blob */}
        <div 
          className="absolute inset-0 z-0 opacity-25 mix-blend-color-dodge bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: "url('/bg-blobs/purple-luxury-wave-background-design-free-vector.jpg')" }}
        />
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(circle at 78% 20%, hsl(var(--brand-purple-500)/0.2) 0%, transparent 34%), radial-gradient(circle at 20% 82%, hsl(var(--brand-cyan-500)/0.12) 0%, transparent 40%), radial-gradient(circle at 50% 50%, hsl(var(--surface-glass)/0.05) 0%, transparent 55%)",
          }}
        />
        <img
          src="/doodles/International trade-rafiki.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-10 right-0 hidden h-72 w-72 opacity-[0.12] lg:block xl:h-80 xl:w-80"
        />
        <div className="container relative mx-auto">
          <div className="grid items-center gap-14 lg:grid-cols-[3fr_2fr]">
            <motion.div
              className="max-w-4xl"
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                India Entry. ASEAN Expansion. One Partner.
              </p>
              <h1 className="font-serif text-5xl font-bold leading-tight sm:text-6xl">
                We've Already Been in the Room.{" "}
                <span className="text-[hsl(var(--brand-gold-500))]">Now We'll Be in It With You.</span>
              </h1>
              <p className="market-entry-speakable mt-6 max-w-3xl text-lg leading-relaxed text-white/85">
                {SPEAKABLE_MARKET_ENTRY}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/ask-soham"
                    className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
                  >
                    Book Your India Entry Readiness Call
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/market-entry-audit"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                  >
                    Download the 2026 Market Entry Audit
                    <ArrowRight className="h-4 w-4" />
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

      <section id="who-we-serve" className="theme-section-soft relative overflow-hidden px-6 py-16">
        <div className="container relative z-10 mx-auto">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl font-bold text-on-light">Who We Serve</h2>
          </motion.div>
          <div className="grid gap-6 lg:grid-cols-2">
            {whoWeServe.map((segment, i) => (
              <motion.article
                key={segment.title}
                id={segment.id}
                className="theme-card-light scroll-mt-28 rounded-3xl p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -4 }}
              >
                <h3 className="font-serif text-2xl font-bold text-on-light">{segment.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-on-light-secondary">{segment.description}</p>
                <div className="mt-5 space-y-2.5">
                  {segment.points.map((point) => (
                    <p key={point} className="flex items-start gap-2 text-sm text-on-light-secondary">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-purple-500))]" />
                      <span>{point}</span>
                    </p>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="what-we-deliver" className="theme-section-light relative overflow-hidden px-6 py-16">
        <div className="container relative z-10 mx-auto">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl font-bold text-on-light">What We Deliver - 7 Workstreams</h2>
          </motion.div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {workstreams.map((item, i) => (
              <motion.article
                key={item}
                className="theme-card-light rounded-2xl p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <p className="text-sm leading-relaxed text-on-light-secondary">{item}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="proof" className="theme-section-soft relative scroll-mt-28 overflow-hidden px-6 py-16">
        <motion.div
          className="theme-card-light container relative z-10 mx-auto rounded-3xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))]">
            Full Market Entry Mandate - Japan to India
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-on-light">
            How a Leading Japanese Manufacturer Successfully Established India Operations
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-on-light-secondary">
            A leading Japanese manufacturer, engaged UVAN for a complete India entry mandate - from initial regulatory
            mapping and entity formation through to executive liaison, local procurement and on-ground operational setup.
            UVAN served as the single point of coordination across all workstreams, managing the language and cultural
            interface between Japanese leadership and Indian stakeholders simultaneously.
          </p>
          <p className="mt-3 text-sm font-medium text-on-light">
            Full market entry delivered. One partner. Zero coordination overhead.
          </p>
          <div className="mt-6">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Link
                to="/media"
                className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light-strong))] bg-[hsl(var(--surface-light-card))] px-5 py-2.5 text-sm font-semibold text-on-light transition hover:border-[hsl(var(--brand-purple-500)/0.6)]"
              >
                Read the Full Case Study
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section id="audit" className="theme-section-light relative overflow-hidden px-6 py-16">
        <img
          src="/doodles/Light bulb-bro (1).svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-6 -top-6 hidden h-40 w-40 opacity-[0.14] lg:block"
        />
        <motion.div
          className="theme-card-light container relative z-10 mx-auto rounded-3xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))]">Free Resource</p>
          <h2 className="mt-2 font-serif text-4xl font-bold text-on-light">
            Is Your Expansion Strategy Hiding These 5 Operational Gaps?
          </h2>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-on-light-secondary">
            The 2026 Global Market Entry Audit is UVAN&apos;s proprietary framework - built from 10 years of on-ground
            cross-border expansion experience. It reveals the 5 operational gaps that most companies don&apos;t see until
            capital has been deployed and timelines have slipped. Download it free and assess your readiness before you
            commit.
          </p>
          <div className="mt-6 grid gap-2 md:grid-cols-2">
            {auditGaps.map((gap, i) => (
              <motion.p
                key={gap}
                className="flex items-start gap-2 text-sm text-on-light-secondary"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-purple-500))]" />
                <span>{gap}</span>
              </motion.p>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-4">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/market-entry-audit"
                className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
              >
                Download the Free 2026 Market Entry Audit
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="theme-section-soft relative overflow-hidden px-6 py-16">
        <motion.div
          className="theme-card-light container relative z-10 mx-auto rounded-3xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-serif text-4xl font-bold text-on-light">How It Works</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((step, index) => (
              <motion.article
                key={step.title}
                className="rounded-2xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] p-5"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -3 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))]">
                  Step {index + 1}
                </p>
                <h3 className="mt-2 text-base font-semibold text-on-light">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-on-light-secondary">{step.detail}</p>
              </motion.article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/ask-soham"
                className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
              >
                Book Your India Entry Readiness Call
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/ask-soham"
                className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light-strong))] px-6 py-3 text-sm font-semibold text-on-light transition hover:border-[hsl(var(--brand-purple-500)/0.6)]"
              >
                Ask Soham - 15 Min Free
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <AeoFrequentlyAskedQuestions items={MARKET_ENTRY_FAQS} className="theme-section-light px-6 py-16" />
    </PageLayout>
  );
};

export default MarketEntry;
