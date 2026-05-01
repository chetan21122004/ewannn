import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { useTranslation } from "react-i18next";

const whoWeServe = [
  {
    id: "india-entry-foreign-companies",
    title: "Foreign Companies Entering India",
    description:
      "You are based in Japan, Southeast Asia, East Asia, Latin America, or Africa. You see India as your next growth market and need a partner who understands both sides.",
    points: [
      "Japanese and Korean manufacturers setting up India operations",
      "Southeast Asian companies seeking India distribution or manufacturing",
      "Latin American and African firms exploring India as a sourcing or expansion hub",
      "Any organization needing language and operations managed by one trusted partner",
    ],
  },
  {
    id: "indian-companies-going-abroad",
    title: "Indian Companies Going Abroad",
    description:
      "You are an Indian company ready to expand into Southeast Asia, East Asia, or beyond, and need on-ground support with local language capability.",
    points: [
      "Indian manufacturers seeking Southeast Asian distribution",
      "Indian exporters entering Japan, China, Vietnam, or Indonesia",
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
  "Language & Cultural Intelligence — Interpretation, translation, and cultural advisory throughout every workstream",
];

const auditGaps = [
  "Gap 1 — Regulatory & Entity Infrastructure",
  "Gap 2 — Partner & Distribution Integrity (Physical Verification)",
  "Gap 3 — The Coordination Tax — Management Overhead",
  "Gap 4 — Human Capital & Local Staffing Strategy",
  "Gap 5 — Executive Liaison & High-Stakes Negotiation",
];

const extensionBlocks = [
  {
    id: "liaisoning-facilitation",
    title: "Liaisoning & Facilitation",
    copy: "Single-point coordination between your organization and counterparts in India and Asia, across communication, cultural interface, and operational alignment.",
  },
  {
    id: "market-research",
    title: "Market Research",
    copy: "On-ground primary research in native languages for distributor checks, competitor intelligence, and sector-level validation before commitment.",
  },
  {
    id: "import-procurement-export",
    title: "Import, Procurement & Export",
    copy: "Trade-side execution support across sourcing, vendor communication, documentation, and handoff to logistics and delivery operations.",
  },
];

const howItWorks = [
  {
    title: "India Entry Readiness Call",
    detail: "30 minutes to assess expansion goals, identify risk gaps, and define what must be in place before you move.",
  },
  {
    title: "Custom Entry Roadmap",
    detail: "A sequenced plan covering regulatory, operational, language, and cultural requirements for your sector and corridor.",
  },
  {
    title: "Execution",
    detail: "Ewan manages the full mandate on the ground. Regular updates. We handle the complexity.",
  },
  {
    title: "Ongoing Operations Support",
    detail: "Once established, Ewan continues as your on-ground liaison, operations manager, and language partner.",
  },
];

const MarketEntry = () => {
  const { t } = useTranslation();

  return (
    <PageLayout
      title={t("seo.marketEntry.title")}
      description={t("seo.marketEntry.description")}
      canonicalPath="/market-entry/"
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
          <div className="max-w-4xl">
            <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              India Entry. ASEAN Expansion. One Partner.
            </p>
            <h1 className="font-serif text-5xl font-bold leading-tight sm:text-6xl">We&apos;ve Already Been in the Room. Now We&apos;ll Be in It With You.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/75">
              Ewan manages the full complexity of cross-border market entry — regulatory navigation, entity formation,
              local liaisoning, cultural intelligence, and language support — so your leadership can focus on building
              the business, not decoding a new market.
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
        </div>
      </section>

      <section id="who-we-serve" className="bg-[#f7f7fb] px-6 py-16">
        <div className="container mx-auto">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-500)/0.88)]">Who We Serve</p>
            <h2 className="mt-2 font-serif text-4xl font-bold text-[#1a1633]">Built for Both Sides of the Corridor</h2>
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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-500)/0.88)]">What We Deliver</p>
            <h2 className="mt-2 font-serif text-4xl font-bold text-[#1a1633]">7 Workstreams. One Accountable Partner.</h2>
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
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-500)/0.88)]">Full Market Entry Mandate — Japan to India</p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-[#1a1633]">How a Leading Japanese Manufacturer Successfully Established India Operations</h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-[#3d3859]">
            A leading Japanese manufacturer engaged Ewan for a complete India entry mandate — from initial regulatory
            mapping and entity formation through executive liaison, local procurement, and on-ground setup. Ewan served
            as the single point of coordination across all workstreams.
          </p>
          <p className="mt-3 text-sm font-medium text-[#2d2946]">Full market entry delivered. One partner. Zero coordination overhead.</p>
          <div className="mt-6">
            <Link
              to="/market-entry-audit"
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
          <h2 className="mt-2 font-serif text-4xl font-bold text-[#1a1633]">Is Your Expansion Strategy Hiding These 5 Operational Gaps?</h2>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-[#3d3859]">
            The 2026 Global Market Entry Audit is Ewan&apos;s proprietary framework built from 10 years of on-ground
            expansion experience. Download it free and assess your readiness before you commit.
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

      <section className="bg-[#ffffff] px-6 py-16">
        <div className="container mx-auto">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-500)/0.88)]">Integrated Extensions</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-[#1a1633]">Specialized Capabilities Around Market Entry</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {extensionBlocks.map((block) => (
              <article
                key={block.id}
                id={block.id}
                className="scroll-mt-28 rounded-2xl border border-[#e7e3f1] bg-[#f8f7fc] p-6"
              >
                <h3 className="font-serif text-xl font-bold text-[#1a1633]">{block.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#3d3859]">{block.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f2f0fa] px-6 py-16">
        <div className="container mx-auto rounded-3xl border border-[#e7e3f1] bg-white p-8">
          <h2 className="font-serif text-4xl font-bold text-[#1a1633]">How It Works</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-[#e7e3f1] bg-[#f8f7fc] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-500)/0.88)]">Step {index + 1}</p>
                <h3 className="mt-2 text-base font-semibold text-[#1a1633]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#3d3859]">{step.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pb-16 pt-8">
        <div className="container mx-auto rounded-3xl border border-[hsl(var(--surface-glass)/0.14)] bg-[hsl(var(--brand-navy-950))] p-8 text-white shadow-[0_16px_34px_hsl(var(--surface-1)/0.2)]">
          <h2 className="font-serif text-3xl font-bold">Ready to Enter with Confidence?</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/75">
            If the next market matters, execution details matter more. Start with a readiness conversation and move
            forward with a structured mandate.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
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
      </section>
    </PageLayout>
  );
};

export default MarketEntry;
