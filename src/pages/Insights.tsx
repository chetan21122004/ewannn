import { useState } from "react";
import {
  ArrowRight,
  Award,
  BookOpen,
  Mail,
  Newspaper,
  Play,
  Sparkles,
  Youtube,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { absoluteUrl, breadcrumbSchema } from "@/lib/schemaHelpers";

const gazetteCards = [
  {
    tag: "Issue No. 04",
    title: "Decoding the Asian Market: Q4 2024 Outlook",
    image: "/stitch/insights/gazette-cover.jpg",
    to: "/language-gazette" as const,
    featured: true,
  },
  {
    tag: "Market Entry",
    title: "Why Japanese companies struggle entering India",
    image: "/stitch/insights/gazette-market-insight.jpg",
    to: "/insights/how-to-enter-indian-market" as const,
    featured: false,
  },
  {
    tag: "Intelligence",
    title: "The 5 operational gaps in cross-border expansion",
    image: "/stitch/insights/gazette-communication.jpg",
    to: "/market-entry-audit" as const,
    featured: false,
  },
];

const repoCards = [
  {
    tag: "Insights",
    category: "Insights",
    date: "Oct 12, 2024",
    title: "India-Vietnam trade corridor (2026 insights)",
    copy: "Exploring the emerging logistics and trade infrastructure connecting the sub-continent to Southeast Asia.",
    image: "/stitch/insights/article-asian-market.jpg",
    authorImage: "/stitch/insights/author-1.jpg",
    to: "/insights/how-to-enter-indian-market" as const,
  },
  {
    tag: "Language",
    category: "Language",
    date: "Sept 28, 2024",
    title: "What 60,000 hours of interpretation taught me",
    copy: "The hidden nuances of high-stakes negotiation where silence is as important as the translated word.",
    image: "/stitch/insights/article-interpretation.jpg",
    authorImage: "/stitch/insights/author-2.jpg",
    to: "/insights/what-is-simultaneous-interpretation" as const,
  },
  {
    tag: "Career",
    category: "Career",
    date: "Sept 15, 2024",
    title: "Career in Asian languages (An honest guide)",
    copy: "Moving beyond translation: How to build a strategic consultancy career using linguistic prowess.",
    image: "/stitch/insights/article-career-guide.jpg",
    authorImage: "/stitch/insights/author-3.jpg",
    to: "/insights" as const,
  },
  {
    tag: "Market Entry",
    category: "Market Entry",
    date: "Sept 02, 2024",
    title: "How to choose a translation partner",
    copy: "Avoid the 'Google Translate' trap. 5 critical questions to ask your language service provider.",
    image: "/stitch/insights/article-strategy.jpg",
    authorImage: "/stitch/insights/author-4.jpg",
    to: "/insights/how-to-choose-translation-partner-india" as const,
  },
  {
    tag: "Language",
    category: "Language",
    date: "Aug 21, 2024",
    title: "Simultaneous vs consecutive interpretation",
    copy: "When to use which? A technical breakdown of interpretation modes for corporate events.",
    image: "/stitch/insights/article-interpretation-type.jpg",
    authorImage: "/stitch/insights/author-5.jpg",
    to: "/insights/what-is-simultaneous-interpretation" as const,
  },
];

const filterOptions = ["All Articles", "Market Entry", "Language", "Career", "Insights"] as const;

const videoCards = [
  {
    tag: "Event Highlight",
    title: "Global Strategy Summit 2024",
    image: "/stitch/insights/video-event-highlight.jpg",
    featured: true,
  },
  {
    tag: "Talks",
    title: "The Future of Translation Tech",
    image: "/stitch/insights/video-talk.jpg",
    featured: false,
  },
  {
    tag: "Oriental Flock Sessions",
    title: "Session 09: India-Japan Corridor",
    image: "/stitch/insights/video-session.jpg",
    featured: false,
  },
];

const recognitionPartners = ["FICCI", "CII", "MSAMB", "Consulate General", "Times of India"];

const UVAN_YOUTUBE_URL = "https://www.youtube.com/@EWAN-SSK";

const blogMarqueeItems = [
  "Market Entry",
  "Translation Strategy",
  "Simultaneous Interpretation",
  "India-Vietnam Corridor",
  "Cross-Border Operations",
  "Language Careers",
  "Cultural Intelligence",
  "Asia Corridors",
  "125+ Languages",
];

const insightsLd = [
  breadcrumbSchema(absoluteUrl("/insights/"), [
    { name: "Home", path: "/" },
    { name: "Insights", path: "/insights/" },
  ]),
];

const Insights = () => {
  const reduceMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState<(typeof filterOptions)[number]>("All Articles");

  const hidden = reduceMotion ? false : { opacity: 0, y: 24 };
  const show = { opacity: 1, y: 0 };
  const transition = (delay = 0) => ({ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const });

  const filteredRepoCards =
    activeFilter === "All Articles"
      ? repoCards
      : repoCards.filter((card) => card.category === activeFilter);

  const featuredGazette = gazetteCards.find((card) => card.featured) ?? gazetteCards[0];
  const secondaryGazette = gazetteCards.filter((card) => !card.featured);

  return (
    <PageLayout
      title="Blog & Insights | UVAN"
      description="Strategic articles, market narratives, and execution intelligence from UVAN's cross-border language and operations teams."
      canonicalPath="/insights/"
      jsonLd={insightsLd}
    >
      <section className="relative overflow-hidden bg-[hsl(var(--surface-light-50))] px-6 py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_84%_78%,hsl(var(--brand-gold-500)/0.06),transparent_38%)]" />
        <div className="pointer-events-none absolute left-8 top-16 hidden select-none text-5xl font-extrabold text-[hsl(var(--brand-purple-700)/0.16)] lg:block">
          {`{"insights":true}`}
        </div>
        <div className="pointer-events-none absolute bottom-32 right-10 hidden select-none text-base font-semibold tracking-[0.18em] text-[hsl(var(--brand-navy-900)/0.12)] xl:block">
          ARCHITECTURE_OF_DATA
        </div>
        <div className="container relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="inline-flex rounded-full bg-[hsl(var(--surface-2))] px-3.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))]">
              Intelligence Report 2024
            </span>
            <h1 className="mt-6 font-serif text-3xl font-extrabold leading-[0.98] text-[hsl(var(--brand-navy-950))] md:text-5xl xl:text-6xl">
              Insights on{" "}
              <span className="italic text-[hsl(var(--brand-gold-600))]">Language</span>, Culture and
              <br />
              Cross-Border Business
            </h1>
            <p className="mt-5 max-w-xl text-sm font-light leading-relaxed text-on-light-secondary md:text-lg">
              Published by UVAN for business leaders, language professionals, and cross-border operators seeking tectonic shifts in global expansion.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <a
                href="#articles"
                className="rounded-full bg-[hsl(var(--brand-navy-950))] px-5 py-2 text-xs font-bold text-white md:text-sm"
              >
                Articles
              </a>
              <a
                href="#language-gazette"
                className="rounded-full border border-[hsl(var(--border-light))] px-5 py-2 text-xs font-semibold text-[hsl(var(--brand-navy-950))] md:text-sm"
              >
                The Language Gazette
              </a>
              <Link
                to="/media"
                className="rounded-full border border-[hsl(var(--border-light))] px-5 py-2 text-xs font-semibold text-[hsl(var(--brand-navy-950))] md:text-sm"
              >
                Media Hub
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-[360px]">
              <div className="aspect-square overflow-hidden rounded-full bg-[hsl(var(--brand-purple-100))] p-1">
                <img
                  src="/stitch/insights/hero-orb.jpg"
                  alt="Futuristic data visualization"
                  className="h-full w-full rounded-full object-cover grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section id="articles" className="relative scroll-mt-36 overflow-hidden theme-section-light px-6 py-16 md:py-20">
        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
            className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          >
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-700))]">
                <BookOpen className="h-3.5 w-3.5" aria-hidden />
                Articles
              </span>
              <h2 className="mt-4 font-serif text-3xl font-extrabold text-[hsl(var(--brand-navy-950))] sm:text-4xl">
                Articles for operators and leaders
              </h2>
              <p className="mt-3 text-base text-on-light-secondary">
                Filter by topic - market entry, language strategy, career paths, and corridor intelligence.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] transition ${
                    activeFilter === filter
                      ? "bg-[hsl(var(--brand-navy-950))] text-white shadow-sm"
                      : "border border-[hsl(var(--border-light))] bg-white text-[hsl(var(--brand-navy-950))] hover:border-[hsl(var(--brand-purple-700)/0.3)]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="client-logos-fade mb-10 overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-white/70 py-3">
            <div className="blogs-marquee flex w-max items-center gap-3">
              {[...blogMarqueeItems, ...blogMarqueeItems].map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="rounded-full border border-[hsl(var(--brand-purple-700)/0.12)] bg-[hsl(var(--brand-purple-700)/0.06)] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--brand-purple-700))]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {filteredRepoCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={hidden}
                whileInView={show}
                viewport={{ once: true }}
                transition={transition(0.06 + index * 0.05)}
                layout
              >
                <Link to={card.to} className="group flex h-full flex-col">
                  <article className="theme-card-light card-shine flex h-full flex-col overflow-hidden rounded-3xl border border-[hsl(var(--border-light))] transition hover:-translate-y-1">
                    <div className="overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <span className="rounded-full bg-[hsl(var(--brand-gold-500)/0.14)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--brand-gold-600))]">
                          {card.tag}
                        </span>
                        <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-on-light-muted">{card.date}</span>
                      </div>
                      <h3 className="text-lg font-bold leading-snug text-[hsl(var(--brand-navy-950))] group-hover:text-[hsl(var(--brand-purple-700))]">
                        {card.title}
                      </h3>
                      <p className="mt-3 flex-grow text-sm leading-relaxed text-on-light-secondary">{card.copy}</p>
                      <div className="mt-5 flex items-center gap-3 border-t border-[hsl(var(--border-light))] pt-4">
                        <img src={card.authorImage} alt="Author Soham" className="h-9 w-9 rounded-full object-cover ring-2 ring-[hsl(var(--border-light))]" />
                        <div>
                          <p className="text-sm font-semibold text-[hsl(var(--brand-navy-950))]">Soham</p>
                          <p className="text-[11px] text-on-light-muted">UVAN Editorial</p>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}

            <motion.article
              initial={hidden}
              whileInView={show}
              viewport={{ once: true }}
              transition={transition(0.2)}
              className="relative overflow-hidden rounded-3xl border border-[hsl(var(--border-light))] bg-white p-7 md:col-span-2 lg:col-span-1"
            >
              <img
                src="/doodles/Mail-amico.svg"
                alt=""
                aria-hidden
                className="pointer-events-none absolute -bottom-4 -right-2 h-28 w-28 opacity-10"
              />
              <Sparkles className="h-6 w-6 text-[hsl(var(--brand-purple-700))]" aria-hidden />
              <h3 className="relative mt-4 font-serif text-2xl font-bold leading-snug text-on-light">Subscribe to the Executive Briefing</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-on-light-secondary">
                Weekly deep-dives into Asian market dynamics delivered to your inbox.
              </p>
              <a
                href="mailto:info@ewan.co.in?subject=Executive%20Briefing%20Subscription"
                className="relative mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-5 py-2.5 text-sm font-bold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
              >
                <Mail className="h-4 w-4" aria-hidden />
                Subscribe via Email
              </a>
            </motion.article>
          </div>
        </div>
      </section>

      {/* The Language Gazette */}
      <section id="language-gazette" className="relative scroll-mt-36 overflow-hidden theme-section-soft px-6 py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.1]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
            className="mb-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(200px,260px)] lg:items-end"
          >
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-700))]">
                <Newspaper className="h-3.5 w-3.5" aria-hidden />
                The Language Gazette
              </span>
              <h2 className="mt-4 font-serif text-3xl font-extrabold text-[hsl(var(--brand-navy-950))] sm:text-4xl">
                The Language <span className="italic text-[hsl(var(--brand-purple-700))]">Gazette</span>
              </h2>
              <p className="mt-3 text-base leading-relaxed text-on-light-secondary">
                UVAN&apos;s quarterly publication on global strategy and cultural intelligence - a masterclass in cross-border operations.
              </p>
            </div>
            <motion.img
              src="/doodles/Bookmarks-pana.svg"
              alt="Publication illustration"
              className="mx-auto h-32 w-full max-w-[220px] object-contain lg:mx-0 lg:ml-auto"
              animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <div className="mb-8 flex flex-wrap gap-3">
            <Link
              to="/language-gazette"
              className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-navy-950))] px-5 py-2.5 text-sm font-bold text-white transition hover:brightness-110"
            >
              Browse Gazette
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="mailto:info@ewan.co.in?subject=Language%20Gazette%20Issue"
              className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-5 py-2.5 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:-translate-y-0.5"
            >
              Request Latest Issue
            </a>
          </div>

          <div className="grid gap-6 lg:grid-cols-12">
            <motion.div
              initial={hidden}
              whileInView={show}
              viewport={{ once: true }}
              transition={transition(0.08)}
              className="lg:col-span-7"
            >
              <Link to={featuredGazette.to} className="group block h-full">
                <article className="theme-card-light card-shine h-full overflow-hidden rounded-3xl border border-[hsl(var(--border-light))] transition hover:-translate-y-1">
                  <div className="relative overflow-hidden">
                    <img
                      src={featuredGazette.image}
                      alt={featuredGazette.title}
                      className="aspect-[16/11] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-[hsl(var(--brand-navy-950))] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-gold-500))]">
                      {featuredGazette.tag}
                    </span>
                  </div>
                  <div className="p-6 sm:p-7">
                    <h3 className="font-serif text-2xl font-bold leading-snug text-[hsl(var(--brand-navy-950))] transition group-hover:text-[hsl(var(--brand-purple-700))] sm:text-3xl">
                      {featuredGazette.title}
                    </h3>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--brand-purple-700))]">
                      Read issue
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </article>
              </Link>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
              {secondaryGazette.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={hidden}
                  whileInView={show}
                  viewport={{ once: true }}
                  transition={transition(0.12 + index * 0.08)}
                >
                  <Link to={card.to} className="group block h-full">
                    <article className="theme-card-light card-shine flex h-full overflow-hidden rounded-3xl border border-[hsl(var(--border-light))] transition hover:-translate-y-1 sm:flex-row lg:flex-col">
                      <div className="relative shrink-0 overflow-hidden sm:w-36 lg:w-full">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="aspect-[4/3] h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:aspect-auto sm:min-h-full lg:aspect-[16/10]"
                        />
                      </div>
                      <div className="flex flex-col p-5">
                        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-gold-600))]">
                          {card.tag}
                        </span>
                        <h3 className="mt-2 font-serif text-lg font-bold leading-snug text-[hsl(var(--brand-navy-950))] group-hover:text-[hsl(var(--brand-purple-700))]">
                          {card.title}
                        </h3>
                        <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-[hsl(var(--brand-purple-700))]">
                          Read
                          <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visual Insights */}
      <section className="relative overflow-hidden theme-section-soft px-6 py-16 md:py-20">

        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
            className="mb-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(200px,240px)] lg:items-end"
          >
            <div className="max-w-2xl">
              <a
                href={UVAN_YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-700))] transition hover:border-[hsl(var(--brand-purple-700)/0.35)] hover:bg-[hsl(var(--surface-light-50))]"
              >
                <Youtube className="h-3.5 w-3.5" aria-hidden />
                Visual Insights
              </a>
              <h2 className="mt-4 font-serif text-3xl font-extrabold text-[hsl(var(--brand-navy-950))] sm:text-4xl">
                Talks, sessions, and event highlights
              </h2>
              <p className="mt-3 text-base leading-relaxed text-on-light-secondary">
                Watch our latest talks, event highlights, and deep-dive technical sessions on cross-border operations.
              </p>
            </div>
            <a
              href={UVAN_YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start rounded-full border border-[hsl(var(--border-light))] bg-white px-5 py-2.5 text-sm font-semibold text-[hsl(var(--brand-purple-700))] shadow-sm transition hover:-translate-y-0.5 lg:self-auto"
            >
              <Youtube className="h-4 w-4" aria-hidden />
              View UVAN on YouTube
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-12">
            <motion.a
              href={UVAN_YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={hidden}
              whileInView={show}
              viewport={{ once: true }}
              transition={transition(0.1)}
              className="group relative block overflow-hidden rounded-3xl border border-[hsl(var(--border-light))] lg:col-span-8"
            >
              <img
                src={videoCards[0].image}
                alt={videoCards[0].title}
                className="aspect-video w-full object-cover transition duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--brand-navy-950)/0.85)] via-[hsl(var(--brand-navy-950)/0.25)] to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="inline-flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-white/15 backdrop-blur-sm transition group-hover:scale-105">
                  <Play className="ml-1 h-8 w-8 text-white" fill="currentColor" />
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <span className="rounded-full bg-[hsl(var(--brand-gold-500))] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-navy-950))]">
                  {videoCards[0].tag}
                </span>
                <h3 className="mt-3 max-w-xl font-serif text-2xl font-bold text-white sm:text-3xl">{videoCards[0].title}</h3>
              </div>
            </motion.a>

            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1">
              {videoCards.slice(1).map((video, index) => (
                <motion.a
                  key={video.title}
                  href={UVAN_YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={hidden}
                  whileInView={show}
                  viewport={{ once: true }}
                  transition={transition(0.16 + index * 0.08)}
                  className="group relative block overflow-hidden rounded-3xl border border-[hsl(var(--border-light))]"
                >
                  <img
                    src={video.image}
                    alt={video.title}
                    className="aspect-video w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--brand-navy-950)/0.8)] to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                    {video.tag}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="font-serif text-lg font-bold leading-snug text-white">{video.title}</h3>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured In & Recognized By */}
      <section className="relative overflow-hidden border-y border-[hsl(var(--border-light)/0.5)] px-6 py-14 theme-section-light">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
            className="flex flex-col items-center text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-on-light-muted">
              <Award className="h-3.5 w-3.5" aria-hidden />
              Featured In & Recognized By
            </span>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {recognitionPartners.map((partner, index) => (
                <motion.span
                  key={partner}
                  initial={hidden}
                  whileInView={show}
                  viewport={{ once: true }}
                  transition={transition(0.04 + index * 0.04)}
                  className="rounded-2xl border border-[hsl(var(--border-light))] bg-white px-5 py-3 text-sm font-extrabold uppercase tracking-[0.08em] text-[hsl(var(--brand-navy-950)/0.75)] shadow-sm sm:text-base"
                >
                  {partner}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 pb-20 pt-8 theme-section-soft">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="relative overflow-hidden rounded-3xl border border-[hsl(var(--border-light))] bg-white px-8 py-12 text-center shadow-sm sm:px-12 sm:py-14"
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
          >
            <div className="relative z-10 mx-auto max-w-3xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[hsl(var(--brand-purple-700))]">Next Step</p>
              <h2 className="mt-4 font-serif text-3xl font-extrabold leading-tight text-on-light sm:text-4xl md:text-5xl">
                Ready to Apply This to Your{" "}
                <span className="italic text-[hsl(var(--brand-purple-700))]">Business</span>?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-on-light-secondary">
                Turn insight into execution - book a strategy call or explore UVAN services for your next market move.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                href="/ask-soham"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-8 py-3 text-sm font-bold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
                >
                  Book a Call
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  to="/ask-soham"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[hsl(var(--border-light-strong))] bg-white px-8 py-3 text-sm font-semibold text-on-light transition hover:bg-[hsl(var(--surface-light-100))]"
                >
                  Ask Soham - 15 Min Free
                </Link>
                <Link
                  to="/market-entry"
                  className="inline-flex min-h-12 items-center gap-1 px-2 text-sm font-semibold text-white/90 underline-offset-4 hover:text-white hover:underline"
                >
                  Explore services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @keyframes blogsMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .blogs-marquee {
          animation: blogsMarquee 30s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .blogs-marquee {
            animation: none;
          }
        }
      `}</style>
    </PageLayout>
  );
};

export default Insights;
