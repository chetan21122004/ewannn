import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import SectionDivider from "@/components/SectionDivider";

/** Stitch-aligned imagery (`public/stitch/market-research/`) */
const stitch = {
  heroBg: "/stitch/market-research/hero-bg.jpg",
  intelData: "/stitch/market-research/intel-data.jpg",
  benchmarking: "/stitch/market-research/benchmarking.jpg",
  worldMap: "/stitch/market-research/world-map.jpg",
} as const;

const services = [
  {
    title: "Distributor & Partner Intelligence",
    description:
      "Before committing to a distribution partner or vendor relationship, you need to know who they actually are - not just what their credentials say. Ewan conducts in-person distributor research that goes beyond document review: physical site visits, local reputation checks, operational capacity assessment, and stakeholder interviews.",
    points: [
      "Physical site verification of distributor premises",
      "Local reputation and reference checks",
      "Operational capacity and workforce assessment",
      "Credit and financial standing (where available)",
      "Existing client and supplier relationship mapping",
    ],
  },
  {
    title: "Competitor Analysis",
    description:
      "Understanding your competitive landscape in a new market requires more than reading annual reports. Ewan conducts on-ground competitor intelligence - visiting retail and trade channels, speaking to buyers and distributors, and assessing positioning, pricing, and distribution reach in the local language and context.",
    points: [
      "Competitor product and pricing analysis",
      "Distribution channel mapping",
      "Buyer and trade channel interviews",
      "Positioning and perception research",
    ],
  },
  {
    title: "Consumer & Buyer Research",
    description:
      "Multilingual qualitative and quantitative research with target consumers, procurement managers, and business buyers. Conducted in the respondent's native language - with analysis that reflects cultural context, not just response data.",
    points: [
      "In-depth interviews (IDIs) in native language",
      "Focus groups - multilingual facilitation",
      "Quantitative surveys with native-language questionnaire design",
      "Buyer persona development for Indian and Asian markets",
    ],
  },
  {
    title: "Sector & Industry Assessment",
    description:
      "Entry-level sector intelligence for companies evaluating a new market. We map the regulatory environment, key industry players, trade body landscape, and sector-specific risks - giving you a clear picture of what you're walking into before you commit.",
    points: [
      "Regulatory and compliance landscape overview",
      "Key player and stakeholder mapping",
      "Market sizing and growth assessment",
      "Entry opportunity and risk analysis",
    ],
  },
  {
    title: "Primary Market Research for Government Programs",
    description:
      "Ewan has designed and conducted primary market research for export promotion programs under MSAMB (Government of Maharashtra) - giving us direct experience with government-commissioned research methodology and reporting standards.",
    points: [
      "Government export program research design",
      "Primary data collection with institutional standards",
      "MSAMB-aligned reporting and deliverables",
      "Cross-sector research coordination",
    ],
  },
];

const howWeDeliver = [
  {
    step: "01",
    title: "Research Brief & Methodology Design",
    detail: "Aligning on objectives, geography, target respondents, timeline, and output format.",
  },
  {
    step: "02",
    title: "Respondent Identification & Screening",
    detail: "Identifying and qualifying the right respondents - distributors, buyers, officials, or end consumers.",
  },
  {
    step: "03",
    title: "On-Ground Fieldwork (native language)",
    detail: "Research conducted in the field, in the local language, by culturally fluent practitioners.",
  },
  {
    step: "04",
    title: "Data Analysis & Cultural Interpretation",
    detail: "Interpreting findings with sector and cultural intelligence - not just tabulating responses.",
  },
  {
    step: "05",
    title: "Report Delivery with Findings & Recommendations",
    detail: "A structured report with our own interpretation and actionable recommendations - not just raw data.",
  },
];

const whoThisIsFor = [
  "Foreign companies evaluating India entry - need ground-truth intelligence before committing",
  "Indian companies assessing export markets in Japan, Southeast Asia, or China",
  "Manufacturers evaluating distributor or partner options before signing agreements",
  "Companies requiring multilingual primary research that desk-based agencies cannot deliver",
];

const MarketResearchPage = () => {
  return (
    <PageLayout
      title="Primary Market Research Services India & Asia | Ewan Business Solutions"
      description="On-ground primary market research for companies entering India and Asian markets. Multilingual interviews, distributor intelligence, competitor analysis, and buyer research conducted by native-language experts."
      canonicalPath="/market-research/"
    >
      {/* Hero */}
      <section className="relative overflow-hidden bg-[hsl(var(--brand-navy-950))] px-6 pb-20 pt-10 text-white md:pb-28 md:pt-14 stitch-line stitch-line-bottom">
        <div
          className="pointer-events-none absolute inset-0 opacity-35 md:opacity-45"
          style={{
            backgroundImage: `url('${stitch.heroBg}')`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_72%_-5%,hsl(var(--brand-purple-700)/0.45),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_80%,hsl(var(--brand-cyan-500)/0.14),transparent_42%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[hsl(var(--brand-navy-950)/0.55)] via-[hsl(var(--brand-navy-950)/0.82)] to-[hsl(var(--brand-navy-950))]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
                On-Ground Intelligence. Native Language. Real Answers.
              </p>
              <h1 className="font-serif text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl xl:text-[3.35rem] xl:leading-[1.02]">
                Market Research That <span className="text-[hsl(var(--brand-gold-500))]">Goes Beyond the Report.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/78 sm:text-lg">
                Most market research for India is desk-based, English-language, and built on secondary data. Ewan's market
                research is different - conducted on the ground, in the local language, by people who understand what
                they're actually hearing. The difference is not methodological. It is the difference between data and
                intelligence.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="mailto:info@ewan.co.in?subject=Market%20Research%20Brief"
                  className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
                >
                  Discuss Your Research Brief
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="mailto:info@ewan.co.in?subject=Market%20Research%20Brief"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/12"
                >
                  info@ewan.co.in
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[440px] lg:col-span-5 lg:mx-0 lg:max-w-none">
              <div className="pointer-events-none absolute -right-8 top-1/4 h-28 w-28 rounded-full border border-dashed border-[hsl(var(--brand-purple-500)/0.35)]" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[hsl(var(--brand-navy-900))] shadow-[0_28px_70px_-20px_rgba(0,0,0,0.55)] ring-1 ring-white/10">
                <div className="absolute inset-0 z-[1] bg-gradient-to-tr from-[hsl(var(--brand-navy-950)/0.7)] via-transparent to-[hsl(var(--brand-purple-700)/0.25)]" />
                <img
                  src={stitch.intelData}
                  alt=""
                  className="aspect-[4/5] w-full object-cover sm:aspect-[5/6]"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" fromDark />

      {/* The Ewan Difference */}
      <section className="theme-section-soft relative overflow-hidden px-6 py-16 md:py-20 stitch-line stitch-line-bottom">
        <div className="pointer-events-none absolute -left-32 top-1/3 h-[min(90vw,480px)] w-[min(90vw,480px)] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,hsl(var(--brand-purple-500)/0.1),transparent_68%)]" />
        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="order-2 overflow-hidden rounded-[1.75rem] border border-[hsl(var(--border-light))] bg-white shadow-[0_18px_50px_rgba(26,22,51,0.08)] lg:order-1">
              <img src={stitch.benchmarking} alt="" className="aspect-[4/3] w-full object-cover" loading="lazy" />
            </div>
            <article className="order-1 rounded-[1.75rem] border border-[hsl(var(--border-light))] bg-white p-8 shadow-[0_14px_40px_rgba(26,22,51,0.06)] md:p-10 lg:order-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-500))]">
                The Ewan Difference
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-[hsl(var(--brand-navy-950))] md:text-4xl">
                The Biggest Risk Is Not a Lack of Data. It's the Wrong Data.
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-on-light-secondary md:text-base">
                <p>
                  When a foreign company wants to understand the Indian market - or when an Indian company wants to
                  understand Southeast Asia or East Asia - secondary reports, translated surveys, and English-language
                  interviews with urban respondents give you a picture of the market that looks clean but often misses the
                  reality on the ground.
                </p>
                <p>
                  Ewan conducts primary market research using native-language researchers across India and Asia. We speak
                  to distributors, buyers, government officials, industry experts, and end consumers in their own language
                  - and we interpret what we hear with the cultural and sector intelligence to tell you what it actually
                  means.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <SectionDivider variant="slant" />

      {/* Services */}
      <section id="services" className="theme-section-light px-6 py-16 md:py-20 stitch-line stitch-line-bottom">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 md:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-700))]">
              Our Market Research Services
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-[hsl(var(--brand-navy-950))] md:text-4xl">Five Research Disciplines</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="group scroll-mt-28 rounded-2xl border border-[hsl(var(--border-light))] bg-white p-7 shadow-[0_12px_36px_rgba(26,22,51,0.05)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_48px_rgba(26,22,51,0.09)] md:p-8"
              >
                <div className="mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-[hsl(var(--brand-purple-500))] to-[hsl(var(--brand-gold-500))] opacity-80 transition group-hover:w-16" />
                <h3 className="font-serif text-2xl font-bold text-[hsl(var(--brand-navy-950))]">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-on-light-secondary md:text-[0.9375rem]">{service.description}</p>
                <div className="mt-5 space-y-2 border-t border-[hsl(var(--border-light))] pt-5">
                  {service.points.map((point) => (
                    <p key={point} className="flex items-start gap-2 text-sm text-on-light-secondary">
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

      <SectionDivider variant="slant" />

      {/* How We Deliver */}
      <section className="relative overflow-hidden bg-[hsl(var(--brand-navy-950))] px-6 py-16 text-white md:py-20">
        <div className="pointer-events-none absolute right-[-8%] top-1/2 max-h-[520px] w-[min(55%,620px)] -translate-y-1/2 opacity-[0.12] lg:opacity-20">
          <img src={stitch.worldMap} alt="" className="h-full w-full object-contain object-center" loading="lazy" />
        </div>
        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="mb-12 md:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/72">Process</p>
            <h2 className="mt-2 font-serif text-3xl font-bold md:text-4xl">How We Deliver</h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/75 md:text-[0.9375rem]">
              Every research engagement begins with a structured brief. We then assign native-language researchers with
              sector familiarity, conduct fieldwork on the ground, and deliver findings with our own interpretation and
              recommendations - not just raw data.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {howWeDeliver.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-[hsl(var(--surface-glass)/0.12)] bg-[hsl(var(--surface-glass)/0.06)] p-5 backdrop-blur-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-gold-500))]">
                  Step {item.step}
                </p>
                <h3 className="mt-2 text-sm font-semibold leading-snug text-white">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-white/67">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="theme-section-soft px-6 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="rounded-[1.75rem] border border-[hsl(var(--border-light))] bg-white p-8 shadow-[0_14px_40px_rgba(26,22,51,0.06)] md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-700))]">Who This Is For</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-[hsl(var(--brand-navy-950))] md:text-[2rem]">
              Built for Companies Who Need Ground Truth
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {whoThisIsFor.map((item) => (
                <p
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] p-4 text-sm text-on-light-secondary"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-purple-500))]" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="slant" />

      {/* CTA */}
      <section className="bg-[hsl(var(--brand-navy-950))] px-6 py-16 text-white md:py-20">
        <div className="container mx-auto max-w-4xl rounded-[2rem] border border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 text-center shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-md md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Next Step</p>
          <h3 className="mt-3 font-serif text-3xl font-bold md:text-4xl">Send Your Research Brief</h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/75 md:text-[0.9375rem]">
            Tell us your objectives, target market, and timeline. We'll define a methodology and get back to you within
            24 hours.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:info@ewan.co.in?subject=Market%20Research%20Brief"
              className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
            >
              Send Your Research Brief
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/ask-soham"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Ask Soham - 15 Min Free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default MarketResearchPage;
