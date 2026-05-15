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
      "You are based in Japan, Southeast Asia, East Asia, Latin America or Africa. You see India as your next growth market. You need a partner who understands both sides — your culture and India's operational reality.",
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
  "Regulatory & Entity Formation — Local entity setup, RBI/FEMA compliance, industry licensing, sectoral approvals",
  "Bank Onboarding & Financial Setup — Business account establishment, financial infrastructure, payment pathways",
  "Executive Liaison & Negotiation Support — Native-language liaison for government relations and senior business negotiations",
  "Local Procurement & Supply Chain — Vetted vendor identification, physical site verification, supply chain establishment",
  "Payroll & HR Facilitation — Local talent pipeline, labour law compliance, staffing support",
  "On-Ground Operations Management — Day-to-day operational oversight, vendor coordination, reporting",
  "Language & Cultural Intelligence — Interpretation, translation and cultural advisory throughout every workstream",
];

const auditGaps = [
  "Gap 1 — Regulatory & Entity Infrastructure",
  "Gap 2 — Partner & Distribution Integrity (Physical Verification)",
  "Gap 3 — The 'Coordination Tax' — Management Overhead",
  "Gap 4 — Human Capital & Local Staffing Strategy",
  "Gap 5 — Executive Liaison & High-Stakes Negotiation",
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
    detail: "Ewan manages the full mandate on the ground. Regular updates. We handle the complexity.",
  },
  {
    title: "Ongoing Operations Support",
    detail: "Once established, Ewan continues as your on-ground liaison, operations manager and language partner.",
  },
];

const marketEntryLd = [
  speakableWebPage(absoluteUrl("/market-entry/"), [".market-entry-speakable"]),
  faqPageSchema(absoluteUrl("/market-entry/"), MARKET_ENTRY_FAQS),
  serviceSchema({
    name: "India market entry consulting",
    description:
      "Ewan manages full-cycle India market entry for foreign companies — entity formation, regulatory navigation, executive liaison, and on-ground operations. 10 years. 10+ sectors.",
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
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 78% 20%, hsl(var(--brand-purple-500)/0.2) 0%, transparent 34%), radial-gradient(circle at 20% 82%, hsl(var(--brand-cyan-500)/0.12) 0%, transparent 40%), radial-gradient(circle at 50% 50%, hsl(var(--surface-glass)/0.05) 0%, transparent 55%)",
          }}
        />
        <div className="container relative mx-auto">
          <div className="grid items-center gap-14 lg:grid-cols-[3fr_2fr]">
            <div className="max-w-4xl">
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
                <Link
                  to="/ask-soham"
                  className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
                >
                  Book Your India Entry Readiness Call
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/market-entry-audit"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                >
                  Download the 2026 Market Entry Audit
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="overflow-hidden rounded-3xl shadow-[0_22px_60px_rgba(6,3,20,0.55)]">
                <img
                  src="/page-assets/bsnssltn-4-min.jpg"
                  alt="Ewan Business Solutions - Market Entry for South Asian and Oriental Markets"
                  className="h-full w-full object-cover grayscale transition duration-700 hover:grayscale-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="who-we-serve" className="bg-[#f7f7fb] px-6 py-16">
        <div className="container mx-auto">
          <div className="mb-8">
            <h2 className="font-serif text-4xl font-bold text-[#1a1633]">Who We Serve</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {whoWeServe.map((segment) => (
              <article
                key={segment.title}
                id={segment.id}
                className="scroll-mt-28 rounded-3xl border border-[#e7e3f1] bg-white p-8 shadow-[0_10px_30px_rgba(20,16,45,0.06)]"
              >
                <h3 className="font-serif text-2xl font-bold text-[#1a1633]">{segment.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#3d3859]">{segment.description}</p>
                <div className="mt-5 space-y-2.5">
                  {segment.points.map((point) => (
                    <p key={point} className="flex items-start gap-2 text-sm text-[#332f4f]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-purple-500))]" />
                      <span>{point}</span>
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="what-we-deliver" className="bg-[#f2f0fa] px-6 py-16">
        <div className="container mx-auto">
          <div className="mb-8">
            <h2 className="font-serif text-4xl font-bold text-[#1a1633]">What We Deliver — 7 Workstreams</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {workstreams.map((item) => (
              <article key={item} className="rounded-2xl border border-[#e7e3f1] bg-white p-5">
                <p className="text-sm leading-relaxed text-[#332f4f]">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="proof" className="scroll-mt-28 bg-[#ffffff] px-6 py-16">
        <div className="container mx-auto rounded-3xl border border-[#e7e3f1] bg-[#f8f7fc] p-8 shadow-[0_10px_28px_rgba(20,16,45,0.06)]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-500)/0.88)]">
            Full Market Entry Mandate — Japan to India
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-[#1a1633]">
            How a Leading Japanese Manufacturer Successfully Established India Operations
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-[#3d3859]">
            A leading Japanese manufacturer, engaged Ewan for a complete India entry mandate — from initial regulatory
            mapping and entity formation through to executive liaison, local procurement and on-ground operational setup.
            Ewan served as the single point of coordination across all workstreams, managing the language and cultural
            interface between Japanese leadership and Indian stakeholders simultaneously.
          </p>
          <p className="mt-3 text-sm font-medium text-[#2d2946]">
            Full market entry delivered. One partner. Zero coordination overhead.
          </p>
          <div className="mt-6">
            <Link
              to="/media"
              className="inline-flex items-center gap-2 rounded-full border border-[#d9d2ea] bg-white px-5 py-2.5 text-sm font-semibold text-[#2d2946] transition hover:border-[hsl(var(--brand-purple-500)/0.6)]"
            >
              Read the Full Case Study
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="audit" className="bg-[#f2f0fa] px-6 py-16">
        <div className="container mx-auto rounded-3xl border border-[#e7e3f1] bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-500)/0.88)]">Free Resource</p>
          <h2 className="mt-2 font-serif text-4xl font-bold text-[#1a1633]">
            Is Your Expansion Strategy Hiding These 5 Operational Gaps?
          </h2>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-[#3d3859]">
            The 2026 Global Market Entry Audit is Ewan&apos;s proprietary framework — built from 10 years of on-ground
            cross-border expansion experience. It reveals the 5 operational gaps that most companies don&apos;t see until
            capital has been deployed and timelines have slipped. Download it free and assess your readiness before you
            commit.
          </p>
          <div className="mt-6 grid gap-2 md:grid-cols-2">
            {auditGaps.map((gap) => (
              <p key={gap} className="flex items-start gap-2 text-sm text-[#332f4f]">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-purple-500))]" />
                <span>{gap}</span>
              </p>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              to="/market-entry-audit"
              className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
            >
              Download the Free 2026 Market Entry Audit
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f2f0fa] px-6 py-16">
        <div className="container mx-auto rounded-3xl border border-[#e7e3f1] bg-white p-8">
          <h2 className="font-serif text-4xl font-bold text-[#1a1633]">How It Works</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-[#e7e3f1] bg-[#f8f7fc] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-500)/0.88)]">
                  Step {index + 1}
                </p>
                <h3 className="mt-2 text-base font-semibold text-[#1a1633]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#3d3859]">{step.detail}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/ask-soham"
              className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
            >
              Book Your India Entry Readiness Call
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/ask-soham"
              className="inline-flex items-center gap-2 rounded-full border border-[#d9d2ea] px-6 py-3 text-sm font-semibold text-[#2d2946] transition hover:border-[hsl(var(--brand-purple-500)/0.6)]"
            >
              Ask Soham — 15 Min Free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <AeoFrequentlyAskedQuestions items={MARKET_ENTRY_FAQS} className="bg-[#ffffff] px-6 py-16" />
    </PageLayout>
  );
};

export default MarketEntry;
