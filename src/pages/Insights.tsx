import { ArrowRight, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const gazetteCards = [
  {
    tag: "Issue No. 04",
    title: "Decoding the Asian Market: Q4 2024 Outlook",
    image: "/stitch/insights/gazette-cover.jpg",
  },
  {
    tag: "Market Entry",
    title: "Why Japanese companies struggle entering India",
    image: "/stitch/insights/gazette-market-insight.jpg",
    offset: "md:mt-24",
  },
  {
    tag: "Intelligence",
    title: "The 5 operational gaps in cross-border expansion",
    image: "/stitch/insights/gazette-communication.jpg",
  },
];

const repoCards = [
  {
    tag: "Insights",
    date: "Oct 12, 2024",
    title: "India-Vietnam trade corridor (2026 insights)",
    copy: "Exploring the emerging logistics and trade infrastructure connecting the sub-continent to Southeast Asia.",
    image: "/stitch/insights/article-asian-market.jpg",
    authorImage: "/stitch/insights/author-1.jpg",
  },
  {
    tag: "Language",
    date: "Sept 28, 2024",
    title: "What 60,000 hours of interpretation taught me",
    copy: "The hidden nuances of high-stakes negotiation where silence is as important as the translated word.",
    image: "/stitch/insights/article-interpretation.jpg",
    authorImage: "/stitch/insights/author-2.jpg",
  },
  {
    tag: "Career",
    date: "Sept 15, 2024",
    title: "Career in Asian languages (An honest guide)",
    copy: "Moving beyond translation: How to build a strategic consultancy career using linguistic prowess.",
    image: "/stitch/insights/article-career-guide.jpg",
    authorImage: "/stitch/insights/author-3.jpg",
  },
  {
    tag: "Market Entry",
    date: "Sept 02, 2024",
    title: "How to choose a translation partner",
    copy: "Avoid the 'Google Translate' trap. 5 critical questions to ask your language service provider.",
    image: "/stitch/insights/article-strategy.jpg",
    authorImage: "/stitch/insights/author-4.jpg",
  },
  {
    tag: "Language",
    date: "Aug 21, 2024",
    title: "Simultaneous vs consecutive interpretation",
    copy: "When to use which? A technical breakdown of interpretation modes for corporate events.",
    image: "/stitch/insights/article-interpretation-type.jpg",
    authorImage: "/stitch/insights/author-5.jpg",
  },
];

const videoCards = [
  {
    tag: "Event Highlight",
    title: "Global Strategy Summit 2024",
    image: "/stitch/insights/video-event-highlight.jpg",
  },
  {
    tag: "Talks",
    title: "The Future of Translation Tech",
    image: "/stitch/insights/video-talk.jpg",
  },
  {
    tag: "Oriental Flock Sessions",
    title: "Session 09: India-Japan Corridor",
    image: "/stitch/insights/video-session.jpg",
  },
];

const Insights = () => {
  return (
    <PageLayout
      title="Blog & Insights | Ewan Business Solutions"
      description="Strategic articles, market narratives, and execution intelligence from EWAN's cross-border language and operations teams."
      canonicalPath="/insights/"
    >
      <section className="relative overflow-hidden bg-[hsl(var(--surface-light-50))] px-6 py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,hsl(var(--brand-purple-700)/0.08),transparent_42%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_84%_78%,hsl(var(--brand-gold-500)/0.06),transparent_38%)]" />
        <div className="pointer-events-none absolute left-8 top-16 hidden select-none text-5xl font-extrabold text-[hsl(var(--brand-purple-700)/0.16)] lg:block">
          {`{"insights":true}`}
        </div>
        <div className="pointer-events-none absolute bottom-32 right-10 hidden select-none text-base font-semibold tracking-[0.18em] text-[hsl(var(--brand-navy-900)/0.12)] xl:block">
          ARCHITECTURE_OF_DATA
        </div>
        <div className="container relative mx-auto max-w-6xl grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="inline-flex rounded-full bg-[hsl(var(--surface-2))] px-3.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))]">
              Intelligence Report 2024
            </span>
            <h1 className="mt-6 font-serif text-3xl font-extrabold leading-[0.98] text-[hsl(var(--brand-navy-950))] md:text-5xl xl:text-6xl">
              Insights on{" "}
              <span className="italic text-[hsl(var(--brand-gold-600))]">
                Language
              </span>
              , Culture and
              <br />
              Cross-Border Business
            </h1>
            <p className="mt-5 max-w-xl text-sm font-light leading-relaxed text-on-light-secondary md:text-lg">
              Published by Ewan for business leaders, language professionals, and cross-border operators seeking tectonic shifts in global expansion.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <a
                href="mailto:info@ewan.co.in?subject=Insights%20Subscription"
                className="rounded-full bg-[hsl(var(--brand-navy-950))] px-5 py-2 text-xs font-bold text-white md:text-sm"
              >
                Subscribe to Insights
              </a>
              <Link
                to="/media"
                className="rounded-full border border-[hsl(var(--border-light))] px-5 py-2 text-xs font-semibold text-[hsl(var(--brand-navy-950))] md:text-sm"
              >
                Back to Media Hub
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-[360px]">
              <div className="aspect-square overflow-hidden rounded-full bg-[hsl(var(--brand-purple-100))] p-1">
                <img src="/stitch/insights/hero-orb.jpg" alt="Futuristic data visualization" className="h-full w-full rounded-full object-cover grayscale" />
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-xl bg-white p-4 shadow-lg">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[hsl(var(--brand-gold-600))]">Live Metrics</p>
                <p className="mt-2 text-xl font-black text-[hsl(var(--brand-navy-950))]">60,000+ Hours</p>
                <p className="mt-1 max-w-[180px] text-xs text-on-light-secondary">Of cross-cultural interpretation expertise applied.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="theme-section-soft px-6 py-16">
        <div className="container mx-auto">
          <div className="mx-auto mb-10 flex max-w-6xl flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-serif text-2xl font-extrabold text-[hsl(var(--brand-navy-950))] md:text-4xl">The Language Gazette</h2>
              <p className="mt-3 text-sm text-on-light-secondary md:text-base">Our quarterly publication on global strategy and cultural intelligence. A masterclass in cross-border operations.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/language-gazette" className="rounded-full bg-[hsl(var(--brand-navy-950))] px-5 py-2.5 text-sm font-bold text-white">
                Browse All Articles
              </Link>
              <a href="mailto:info@ewan.co.in?subject=Language%20Gazette%20Issue" className="rounded-full border border-[hsl(var(--border-light))] px-5 py-2.5 text-sm font-bold text-[hsl(var(--brand-navy-950))]">
                Download Latest Issue
              </a>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            {gazetteCards.map((card) => (
              <article key={card.title} className={`group cursor-pointer ${card.offset ?? ""}`}>
                <div className="relative mb-4 aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                  <img src={card.image} alt={card.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-[hsl(var(--brand-navy-950)/0.16)] opacity-0 transition group-hover:opacity-100" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-gold-600))]">{card.tag}</span>
                    <span className="h-px flex-1 bg-[hsl(var(--border-light))]" />
                  </div>
                  <h3 className="text-lg font-bold text-[hsl(var(--brand-navy-950))] md:text-xl">{card.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="theme-section-light px-6 py-16">
        <div className="container mx-auto">
          <div className="mx-auto mb-8 flex max-w-6xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <h2 className="text-xl font-bold uppercase tracking-tight text-[hsl(var(--brand-navy-950))] md:text-2xl">Repository of Insights</h2>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-[hsl(var(--brand-navy-950))] px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white">All Articles</span>
              <span className="rounded-full bg-[hsl(var(--surface-2))] px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[hsl(var(--brand-navy-950))]">Market Entry</span>
              <span className="rounded-full bg-[hsl(var(--surface-2))] px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[hsl(var(--brand-navy-950))]">Language</span>
              <span className="rounded-full bg-[hsl(var(--surface-2))] px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[hsl(var(--brand-navy-950))]">Career</span>
            </div>
          </div>

          <div className="mx-auto grid max-w-6xl gap-x-7 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {repoCards.map((card) => (
              <article key={card.title} className="flex flex-col">
                <div className="mb-5 overflow-hidden rounded-xl">
                  <img src={card.image} alt={card.title} className="aspect-[16/10] w-full object-cover transition duration-500 hover:scale-105" />
                </div>
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[hsl(var(--brand-gold-600))]">{card.tag}</span>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-on-light-muted">{card.date}</span>
                </div>
                <h3 className="text-lg font-bold leading-snug text-[hsl(var(--brand-navy-950))]">{card.title}</h3>
                <p className="mt-3 flex-grow text-xs text-on-light-secondary md:text-sm">{card.copy}</p>
                <div className="mt-6 flex items-center gap-3 border-t border-[hsl(var(--border-light))] pt-5">
                  <img src={card.authorImage} alt="Author Soham" className="h-8 w-8 rounded-full object-cover" />
                  <span className="text-sm font-semibold text-[hsl(var(--brand-navy-950))]">Soham</span>
                </div>
              </article>
            ))}

            <article className="rounded-xl bg-[hsl(var(--brand-navy-950))] p-6 text-white">
              <div className="text-3xl text-[hsl(var(--brand-gold-500))]">↗</div>
              <h3 className="mt-4 text-2xl font-bold">Subscribe to the Executive Briefing</h3>
              <p className="mt-3 text-white/75">Weekly deep-dives into Asian market dynamics delivered to your inbox.</p>
              <a href="mailto:info@ewan.co.in?subject=Executive%20Briefing%20Subscription" className="mt-7 inline-flex items-center gap-2 border-b border-white/40 pb-1 text-sm font-semibold">
                Email address <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="theme-section-soft px-6 py-16">
        <div className="container mx-auto">
          <div className="mx-auto mb-10 flex max-w-6xl flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-serif text-2xl font-extrabold text-[hsl(var(--brand-navy-950))] md:text-3xl">Visual Insights</h2>
              <p className="mt-3 text-sm text-on-light-secondary md:text-base">Watch our latest talks, event highlights, and deep-dive technical sessions on cross-border operations.</p>
            </div>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[hsl(var(--brand-gold-600))]">
              VIEW YOUTUBE CHANNEL <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
            {videoCards.map((video) => (
              <article key={video.title} className="group relative overflow-hidden rounded-xl">
                <img src={video.image} alt={video.title} className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center bg-[hsl(var(--brand-navy-950)/0.35)] opacity-0 transition group-hover:opacity-100">
                  <PlayCircle className="h-14 w-14 text-white" />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[hsl(var(--brand-navy-950)/0.88)] to-transparent p-5 text-white">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-gold-500))]">{video.tag}</p>
                  <h3 className="mt-1 text-base font-bold">{video.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="theme-section-light border-y border-[hsl(var(--border-light)/0.5)] px-6 py-12">
        <div className="container mx-auto max-w-6xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-on-light-muted">Featured In & Recognized By</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 text-xl font-extrabold text-[hsl(var(--brand-navy-950)/0.7)]">
            <span>FICCI</span>
            <span>CII</span>
            <span>MSAMB</span>
            <span>CONSULATE GENERAL</span>
            <span>TIMES OF INDIA</span>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-6 py-20 text-center">
        <div className="container relative mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl font-extrabold leading-tight text-[hsl(var(--brand-navy-950))] md:text-5xl">
            Ready to Apply This to
            <br />
            Your <span className="text-[hsl(var(--brand-gold-600))] underline underline-offset-8">Business</span>?
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 md:flex-row">
            <a href="mailto:info@ewan.co.in?subject=Book%20a%20Call" className="rounded-full bg-[hsl(var(--brand-gold-500))] px-8 py-3 text-sm font-bold text-[hsl(var(--brand-navy-950))]">
              Book a call
            </a>
            <Link to="/ask-soham" className="rounded-full border border-[hsl(var(--brand-navy-950))] px-8 py-3 text-sm font-bold text-[hsl(var(--brand-navy-950))]">
              Ask Soham
            </Link>
            <Link to="/market-entry" className="text-sm font-bold text-[hsl(var(--brand-navy-950))] underline-offset-4 hover:underline">
              Explore services
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Insights;
