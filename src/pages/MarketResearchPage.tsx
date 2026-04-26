import { ArrowRight, ArrowUpRight, BarChart3, Brain, Gavel, Send } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const verticalCards = [
  {
    title: "Consumer Behavior Analysis",
    copy: "Deep-dive into ethnographic studies and digital sentiment to understand the evolving needs of the global citizen.",
    Icon: Brain,
  },
  {
    title: "Market Sizing & Forecasts",
    copy: "Quantifying opportunity through 10-year probabilistic modeling.",
    Icon: BarChart3,
  },
  {
    title: "Policy & Regulatory Scanning",
    copy: "Navigating the complex landscape of international compliance and emerging legislation.",
    Icon: Gavel,
  },
];

const methodology = [
  {
    id: "01",
    title: "Scoping",
    copy: "Defining the intelligence gap and identifying critical unknown variables.",
  },
  {
    id: "02",
    title: "Acquisition",
    copy: "Multi-source data harvesting across primary, secondary, and tertiary silos.",
  },
  {
    id: "03",
    title: "Triangulation",
    copy: "Cross-verifying findings through divergent analytical frameworks.",
  },
  {
    id: "04",
    title: "Synthesis",
    copy: "Distilling complex findings into actionable executive strategy reports.",
  },
];

const MarketResearchPage = () => {
  return (
    <PageLayout
      title="Market Research | EWAN Business Solutions"
      description="Futuristic market intelligence and strategic research for faster, smarter global expansion decisions."
      canonicalPath="/market-research/"
    >
      <section className="relative overflow-hidden bg-[hsl(var(--brand-navy-950))] px-6 pb-24 pt-10 text-white lg:pb-36 lg:pt-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, #e2e0fc 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 opacity-20 lg:block">
          <img src="/stitch/market-research/hero-bg.jpg" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="container relative mx-auto">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[hsl(var(--brand-purple-500)/0.25)] px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-[hsl(var(--brand-gold-500))] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-white/90">Next-Gen Market Intelligence</span>
            </div>
            <h1 className="font-serif text-5xl font-extrabold leading-tight tracking-tight lg:text-7xl">
              Predicting Markets <br />
              <span className="text-[hsl(var(--brand-gold-500))]">Before They Form.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-xl font-light leading-relaxed text-white/80">
              We combine high-altitude strategic scanning with deep-subsurface technical data to decode the future of global industries.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                to="/ask-soham"
                className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-8 py-4 text-base font-semibold text-[hsl(var(--brand-navy-950))] transition hover:scale-[1.02]"
              >
                Request a Research Proposal
                <ArrowRight className="h-4 w-4" />
              </Link>
              <div className="flex items-center gap-3 text-white/70">
                <BarChart3 className="h-7 w-7" />
                <div className="text-sm">
                  <span className="block font-bold text-white">Live Data Processing</span>
                  <span className="font-light">99.8% Prediction Accuracy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 right-10 hidden xl:block">
          <div className="rounded-r-lg border-l-2 border-[hsl(var(--brand-gold-500))] bg-white/5 py-2 pl-4 backdrop-blur-md">
            <code className="mb-1 block text-xs font-bold uppercase tracking-widest text-[hsl(var(--brand-gold-500))]">Ref: EWAN_CORE_v2.4</code>
            <p className="font-mono text-[10px] leading-none text-white/60">Scanning Cluster 4: Asia-Pacific real-time sentiment index</p>
          </div>
        </div>
      </section>

      <section className="theme-section-light px-6 py-24">
        <div className="container mx-auto grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="relative">
            <div className="absolute -left-10 -top-10 -z-10 h-32 w-32 rounded-full bg-[hsl(var(--surface-light-200))]" />
            <img
              src="/stitch/market-research/intel-data.jpg"
              alt="High resolution digital screen with complex data visualizations and financial charts"
              className="w-full rounded-[2.5rem] object-cover shadow-2xl grayscale transition-all duration-700 hover:grayscale-0"
            />
          </div>
          <div>
            <h2 className="font-serif text-4xl font-bold tracking-tight text-[hsl(var(--brand-navy-950))]">Intelligence Over Data</h2>
            <p className="text-on-light-secondary mt-8 text-lg leading-relaxed">
              The world is not suffering from a lack of information; it is suffering from a lack of clarity. At EWAN, we move beyond the raw metric to find the hidden narrative.
            </p>
            <div className="mt-8 space-y-6">
              <div className="theme-card-light flex gap-5 rounded-xl p-6">
                <Brain className="mt-1 h-8 w-8 text-[hsl(var(--brand-gold-500))]" />
                <div>
                  <h4 className="font-semibold text-[hsl(var(--brand-navy-950))]">Cognitive Layering</h4>
                  <p className="text-on-light-secondary mt-2 text-sm">
                    We overlay psychological consumer profiles atop traditional economic datasets to reveal the why behind the what.
                  </p>
                </div>
              </div>
              <div className="theme-card-light flex gap-5 rounded-xl p-6 transition hover:bg-[hsl(var(--surface-light-100))]">
                <BarChart3 className="mt-1 h-8 w-8 text-[hsl(var(--brand-purple-500))]" />
                <div>
                  <h4 className="font-semibold text-[hsl(var(--brand-navy-950))]">Contextual Synthesis</h4>
                  <p className="text-on-light-secondary mt-2 text-sm">
                    Data in isolation is noise. We integrate regulatory, linguistic, and cultural filters into every report.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="theme-section-soft px-6 py-24">
        <div className="container mx-auto">
          <div className="mb-16 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-[hsl(var(--brand-gold-500))]">Our Expertise</span>
              <h2 className="font-serif text-4xl font-bold tracking-tight text-[hsl(var(--brand-navy-950))]">Specialized Research Verticals</h2>
            </div>
            <p className="text-on-light-secondary max-w-sm">Tailored intelligence solutions designed for market leaders and visionaries.</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            {verticalCards.map(({ title, copy, Icon }) => (
              <article
                key={title}
                className={`${title === "Consumer Behavior Analysis" ? "md:col-span-8" : "md:col-span-4"} rounded-[2.5rem] bg-white p-10 text-[hsl(var(--brand-navy-950))] shadow-[0_20px_40px_rgba(26,26,46,0.06)] transition duration-300 hover:-translate-y-1`}
              >
                <div className="mb-10 flex items-start justify-between">
                  <span className="rounded-2xl bg-[hsl(var(--surface-light-100))] p-4 text-[hsl(var(--brand-purple-500))]">
                    <Icon className="h-8 w-8" />
                  </span>
                  <ArrowUpRight className="text-on-light-muted h-5 w-5" />
                </div>
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-on-light-secondary mt-4 max-w-md text-sm leading-relaxed">{copy}</p>
              </article>
            ))}

            <article className="theme-card-light md:col-span-8 flex flex-col items-center gap-8 rounded-[2.5rem] p-10 transition duration-300 hover:-translate-y-1 md:flex-row">
              <div className="flex-1">
                <span className="mb-10 inline-block rounded-2xl bg-[hsl(var(--surface-light-200))] p-4 text-[hsl(var(--brand-purple-500))]">
                  <BarChart3 className="h-8 w-8" />
                </span>
                <h3 className="text-2xl font-bold text-[hsl(var(--brand-navy-950))]">Competitive Benchmarking</h3>
                <p className="text-on-light-secondary mt-4">Granular analysis of competitor performance, technical debt, and strategic positioning.</p>
              </div>
              <div className="w-full md:w-1/3">
                <img src="/stitch/market-research/benchmarking.jpg" alt="Abstract colorful business charts and bar graphs" className="aspect-square w-full rounded-2xl object-cover opacity-95" />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="theme-section-light px-6 py-24">
        <div className="container mx-auto">
          <h2 className="mb-20 text-center font-serif text-4xl font-bold tracking-tight text-[hsl(var(--brand-navy-950))]">Our Methodology</h2>
          <div className="relative">
            <div className="absolute left-0 top-1/2 hidden h-px w-full -z-10 bg-[hsl(var(--border-light))] lg:block" />
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
              {methodology.map((item) => (
                <article key={item.id}>
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-100))] text-xl font-bold text-[hsl(var(--brand-navy-950))] transition hover:bg-[hsl(var(--brand-purple-500))] hover:text-white">
                    {item.id}
                  </div>
                  <h4 className="mb-3 text-xl font-bold text-[hsl(var(--brand-navy-950))]">{item.title}</h4>
                  <p className="text-on-light-secondary text-sm leading-relaxed">{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="theme-section-soft px-6 py-20">
        <div className="theme-card-light container mx-auto max-w-7xl rounded-[3rem] p-12 text-center lg:p-24">
          <h2 className="font-serif text-4xl font-bold tracking-tight text-[hsl(var(--brand-navy-950))] lg:text-5xl">Ready for Unfair Clarity?</h2>
          <p className="text-on-light-secondary mx-auto mt-7 max-w-2xl text-lg">
            Join elite organizations who leverage EWAN research to out-maneuver competition in global markets.
          </p>
          <Link
            to="/ask-soham"
            className="mx-auto mt-10 inline-flex items-center gap-3 rounded-full bg-[hsl(var(--brand-gold-500))] px-10 py-5 text-xl font-bold text-[hsl(var(--brand-navy-950))] shadow-lg shadow-[hsl(var(--brand-gold-500)/0.35)] transition hover:scale-105"
          >
            Request a Research Proposal
            <Send className="h-5 w-5" />
          </Link>
        </div>
      </section>

    </PageLayout>
  );
};

export default MarketResearchPage;
