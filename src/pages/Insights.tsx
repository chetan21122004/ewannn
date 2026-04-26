import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const featuredCards = [
  {
    title: "The Language Gazette",
    subtitle: "A design-first look at global language strategy.",
    image: "/stitch/insights/insight-asset-02.jpg",
  },
  {
    title: "Market Signal: Japan ↔ India Corridors",
    subtitle: "What growth teams need to track now.",
    image: "/stitch/insights/insight-asset-03.jpg",
  },
  {
    title: "Beyond Translation",
    subtitle: "Semantic fidelity in enterprise localization.",
    image: "/stitch/insights/insight-asset-04.jpg",
  },
];

const articleRows = [
  {
    tag: "ASIA OPERATIONS",
    title: "Vietnam Growth Rail: Why speed beats size in corridor strategy",
    image: "/stitch/insights/insight-asset-05.jpg",
  },
  {
    tag: "INTERPRETATION",
    title: "Boardroom interpretation: the hidden execution lever",
    image: "/stitch/insights/insight-asset-06.jpg",
  },
  {
    tag: "CAREERS",
    title: "Language careers in 2026: where premium demand is shifting",
    image: "/stitch/insights/insight-asset-07.jpg",
  },
  {
    tag: "GLOBAL STRATEGY",
    title: "Signal density and expansion timing in uncertain markets",
    image: "/stitch/insights/insight-asset-08.jpg",
  },
  {
    tag: "SPEECH & CULTURE",
    title: "How interpretation type changes negotiation outcomes",
    image: "/stitch/insights/insight-asset-09.jpg",
  },
];

const eventCards = [
  {
    title: "Executive Forum Highlight",
    image: "/stitch/insights/insight-asset-15.jpg",
  },
  {
    title: "Workshop: Cross-border Brand Systems",
    image: "/stitch/insights/insight-asset-16.jpg",
  },
  {
    title: "Studio Session: Voice Strategy",
    image: "/stitch/insights/insight-asset-17.jpg",
  },
];

const Insights = () => {
  return (
    <PageLayout
      title="Blog & Insights | Ewan Business Solutions"
      description="Strategic articles, market narratives, and execution intelligence from EWAN's cross-border language and operations teams."
      canonicalPath="/insights/"
    >
      <section className="relative overflow-hidden bg-[hsl(var(--brand-navy-950))] px-6 pb-24 pt-16 text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--brand-purple-700)/0.16)] to-transparent" />
        <div className="container relative mx-auto grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]">
              Blog & Insights
            </span>
            <h1 className="mt-6 font-serif text-5xl font-extrabold leading-[0.95] md:text-7xl">
              Full Futuristic
              <br />
              <span className="text-[hsl(var(--brand-gold-500))]">Narrative</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/78">
              A premium editorial surface for market intelligence, language strategy, and cross-border execution signals.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:info@ewan.co.in?subject=Insights%20Subscription"
                className="rounded-xl bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-bold text-[hsl(var(--brand-navy-950))]"
              >
                Subscribe to Insights
              </a>
              <Link
                to="/media"
                className="rounded-xl border border-white/25 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10"
              >
                Back to Media Hub
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative mx-auto h-[360px] w-[360px] max-w-full overflow-hidden rounded-full border border-white/20 p-3">
              <img src="/stitch/insights/insight-asset-01.jpg" alt="Futuristic data visualization" className="h-full w-full rounded-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="theme-section-light px-6 py-20">
        <div className="container mx-auto">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <h2 className="font-serif text-4xl font-extrabold text-[hsl(var(--brand-navy-950))]">Featured Stories</h2>
              <p className="mt-3 text-on-light-secondary">Signals that shape expansion outcomes across Asia and beyond.</p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredCards.map((card) => (
              <article key={card.title} className="theme-card-light overflow-hidden rounded-[1.5rem]">
                <img src={card.image} alt={card.title} className="h-56 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[hsl(var(--brand-navy-950))]">{card.title}</h3>
                  <p className="mt-2 text-sm text-on-light-secondary">{card.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="theme-section-soft px-6 py-20">
        <div className="container mx-auto max-w-6xl space-y-6">
          {articleRows.map((article, index) => (
            <article key={article.title} className="theme-card-light grid items-center gap-5 rounded-[1.5rem] p-5 md:grid-cols-[260px_1fr_auto]">
              <img src={article.image} alt={article.title} className="h-40 w-full rounded-xl object-cover" />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-gold-600))]">{article.tag}</p>
                <h3 className="mt-2 text-2xl font-bold text-[hsl(var(--brand-navy-950))]">{article.title}</h3>
              </div>
              <button className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--brand-purple-700))]">
                Read Insight <ArrowRight className="h-4 w-4" />
              </button>
              {index < articleRows.length - 1 ? <div className="col-span-full border-b border-[hsl(var(--border-light))]" /> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="theme-section-light px-6 py-20">
        <div className="container mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="font-serif text-4xl font-extrabold text-[hsl(var(--brand-navy-950))]">Events & Sessions</h2>
            <a href="mailto:info@ewan.co.in?subject=Speaking%20Request" className="text-sm font-semibold text-[hsl(var(--brand-purple-700))]">
              Request Speaking Profile
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {eventCards.map((event) => (
              <article key={event.title} className="theme-card-light overflow-hidden rounded-[1.5rem]">
                <img src={event.image} alt={event.title} className="aspect-video w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[hsl(var(--brand-navy-950))]">{event.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Insights;
