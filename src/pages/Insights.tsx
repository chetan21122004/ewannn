import { useState } from "react";
import { ArrowRight, BookOpen, Globe2, Mail, MessageCircle, Sparkles, Youtube } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { useContactInquiry } from "@/components/ContactInquiryProvider";
import InsightsArticlesSlider from "@/components/insights/InsightsArticlesSlider";
import { absoluteUrl, breadcrumbSchema } from "@/lib/schemaHelpers";

const repoCards = [
  {
    tag: "Insights",
    category: "Insights",
    date: "Jul 25, 2026",
    title: "Ewan Business Solutions is Now Uvan International Liaisoning Private Limited",
    copy: "After five years of building alongside our clients, we announce a new chapter — same team and standards, with a name that reflects who we have become.",
    image: "/stitch/insights/article-uvan-rebrand.jpg",
    to: "/insights/ewan-to-uvan-rebrand" as const,
  },
  {
    tag: "Insights",
    category: "Insights",
    date: "Oct 12, 2024",
    title: "India-Vietnam trade corridor (2026 insights)",
    copy: "Exploring the emerging logistics and trade infrastructure connecting the sub-continent to Southeast Asia.",
    image: "/stitch/insights/article-asian-market.jpg",
    to: "/insights/how-to-enter-indian-market" as const,
  },
  {
    tag: "Language",
    category: "Language",
    date: "Sept 28, 2024",
    title: "What 60,000 hours of interpretation taught me",
    copy: "The hidden nuances of high-stakes negotiation where silence is as important as the translated word.",
    image: "/stitch/insights/article-interpretation.jpg",
    to: "/insights/what-is-simultaneous-interpretation" as const,
  },
  {
    tag: "Career",
    category: "Career",
    date: "Sept 15, 2024",
    title: "Career in Asian languages (An honest guide)",
    copy: "Moving beyond translation: How to build a strategic consultancy career using linguistic prowess.",
    image: "/stitch/insights/article-career-guide.jpg",
    to: "/insights" as const,
  },
  {
    tag: "Market Entry",
    category: "Market Entry",
    date: "Sept 02, 2024",
    title: "How to choose a translation partner",
    copy: "Avoid the 'Google Translate' trap. 5 critical questions to ask your language service provider.",
    image: "/stitch/insights/article-strategy.jpg",
    to: "/insights/how-to-choose-translation-partner-india" as const,
  },
  {
    tag: "Language",
    category: "Language",
    date: "Aug 21, 2024",
    title: "Simultaneous vs consecutive interpretation",
    copy: "When to use which? A technical breakdown of interpretation modes for corporate events.",
    image: "/stitch/insights/article-interpretation-type.jpg",
    to: "/insights/what-is-simultaneous-interpretation" as const,
  },
];

const filterOptions = ["All Articles", "Market Entry", "Language", "Career", "Insights"] as const;

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
  const { open: openContactForm } = useContactInquiry();
  const [activeFilter, setActiveFilter] = useState<(typeof filterOptions)[number]>("All Articles");

  const hidden = reduceMotion ? false : { opacity: 0, y: 24 };
  const show = { opacity: 1, y: 0 };
  const transition = (delay = 0) => ({ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const });

  const filteredRepoCards =
    activeFilter === "All Articles"
      ? repoCards
      : repoCards.filter((card) => card.category === activeFilter);

  return (
    <PageLayout
      title="Blog & Insights | UVAN"
      description="Strategic articles, market narratives, and execution intelligence from UVAN's cross-border language and operations teams."
      canonicalPath="/insights/"
      jsonLd={insightsLd}
    >
      <section className="relative isolate overflow-hidden theme-section-soft section-pad-hero sm:px-6">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 50% at 88% 12%, hsl(var(--brand-gold-500) / 0.14) 0%, transparent 52%), radial-gradient(ellipse 60% 55% at 6% 92%, hsl(var(--brand-purple-500) / 0.1) 0%, transparent 54%), radial-gradient(ellipse 40% 36% at 50% 50%, hsl(var(--brand-purple-700) / 0.04) 0%, transparent 70%)",
          }}
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.12] lg:opacity-[0.16]" />
        <div className="glow-orb glow-orb-gold pointer-events-none -right-16 top-1/4 h-[220px] w-[220px] opacity-[0.07] lg:-right-20 lg:h-[320px] lg:w-[320px] lg:opacity-[0.09]" />
        <div className="glow-orb pointer-events-none -left-20 bottom-0 h-[200px] w-[200px] bg-[hsl(var(--brand-purple-500)/0.12)] opacity-[0.5] blur-3xl lg:h-[280px] lg:w-[280px]" />

        <div className="container relative z-10 mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <motion.div
            initial={hidden}
            animate={show}
            transition={transition(0)}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-3.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))] shadow-sm sm:px-4 sm:py-1.5 sm:text-[10px] sm:tracking-[0.22em]">
              <Sparkles className="h-3 w-3 text-[hsl(var(--brand-gold-600))]" aria-hidden />
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
          </motion.div>

          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 32 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
            transition={transition(0.12)}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-[360px] lg:max-w-none">
              <div
                className="pointer-events-none absolute -inset-6 rounded-full opacity-60 blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle, hsl(var(--brand-purple-500) / 0.22) 0%, hsl(var(--brand-gold-500) / 0.12) 45%, transparent 72%)",
                }}
                aria-hidden
              />
              <div className="relative aspect-square overflow-hidden rounded-full border border-[hsl(var(--border-light))] bg-white p-1.5 shadow-[0_24px_64px_hsl(var(--brand-navy-950)/0.12)]">
                <img
                  src="/stitch/insights/hero-orb.jpg"
                  alt="Futuristic data visualization"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles */}
      <section id="articles" className="relative scroll-mt-36 overflow-hidden theme-section-light px-6 py-10 md:py-14">
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

          <div className="mb-8">
            <InsightsArticlesSlider key={activeFilter} articles={filteredRepoCards} />
          </div>

          <motion.article
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0.12)}
            className="relative overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-white p-6 sm:rounded-3xl sm:p-7 lg:flex lg:items-center lg:justify-between lg:gap-8"
          >
            <img
              src="/doodles/Mail-amico.svg"
              alt=""
              aria-hidden
              className="pointer-events-none absolute -bottom-4 -right-2 h-24 w-24 opacity-10 lg:relative lg:bottom-auto lg:right-auto lg:h-28 lg:w-28 lg:shrink-0 lg:opacity-100"
            />
            <div className="relative max-w-xl lg:flex-1">
              <Sparkles className="h-5 w-5 text-[hsl(var(--brand-purple-700))]" aria-hidden />
              <h3 className="mt-3 font-serif text-xl font-bold leading-snug text-on-light sm:text-2xl">
                Subscribe to the Executive Briefing
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-on-light-secondary">
                Weekly deep-dives into Asian market dynamics delivered to your inbox.
              </p>
            </div>
            <button
              type="button"
              onClick={openContactForm}
              className="relative mt-5 inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-5 py-2.5 text-sm font-bold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105 lg:mt-0"
            >
              <Mail className="h-4 w-4" aria-hidden />
              Subscribe via Email
            </button>
          </motion.article>
        </div>
      </section>

      {/* YouTube strip */}
      <section className="border-y border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] px-6 py-4 md:py-5">
        <div className="container mx-auto max-w-6xl">
          <motion.a
            href={UVAN_YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
            className="group flex flex-col gap-3 rounded-xl border border-[hsl(var(--border-light))] bg-white px-4 py-4 transition hover:border-[hsl(var(--brand-purple-700)/0.25)] hover:shadow-sm sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-4"
          >
            <span className="flex min-w-0 items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[hsl(var(--brand-navy-950))] text-white">
                <Youtube className="h-5 w-5" aria-hidden />
              </span>
              <span className="min-w-0 text-left">
                <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))]">
                  On YouTube
                </span>
                <span className="block text-sm font-semibold text-on-light sm:text-[0.9375rem]">
                  Talks, sessions, and event highlights from UVAN
                </span>
              </span>
            </span>
            <span className="inline-flex shrink-0 items-center gap-2 self-start text-sm font-semibold text-[hsl(var(--brand-purple-700))] sm:self-auto">
              View UVAN on YouTube
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </span>
          </motion.a>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden section-pad-cta theme-section-soft px-6 sm:pt-8">
        <div className="glow-orb glow-orb-gold pointer-events-none -right-12 -bottom-12 h-[180px] w-[180px] opacity-[0.06] lg:-right-6 lg:-bottom-16 lg:h-[240px] lg:w-[240px] lg:opacity-[0.07]" />
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.1] lg:opacity-[0.14]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
            className="overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-white shadow-[0_20px_60px_hsl(var(--brand-navy-950)/0.07)] sm:rounded-[1.75rem] lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,380px)] lg:items-stretch"
          >
            <div className="relative overflow-hidden bg-[linear-gradient(135deg,hsl(var(--brand-navy-950))_0%,hsl(var(--brand-purple-800))_52%,hsl(var(--brand-purple-700))_100%)] cta-panel-navy text-white">
              <div className="pointer-events-none absolute inset-0 opacity-[0.14] theme-grid-overlay-light" aria-hidden />
              <motion.img
                src="/doodles/Advantages-bro.svg"
                alt=""
                aria-hidden
                className="pointer-events-none absolute -right-6 -bottom-8 hidden h-40 w-40 opacity-[0.12] sm:block lg:h-48 lg:w-48"
                animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />

              <span className="relative inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-gold-500))] backdrop-blur-sm sm:text-[11px] sm:tracking-[0.2em]">
                <Sparkles className="h-3 w-3" aria-hidden />
                Next Step
              </span>

              <h2 className="relative mt-3 max-w-xl font-serif text-[1.65rem] font-bold leading-tight sm:text-2xl lg:text-3xl">
                Ready to apply this to your{" "}
                <span className="italic text-[hsl(var(--brand-gold-500))]">business</span>?
              </h2>
              <p className="relative mt-2 max-w-xl text-sm leading-relaxed text-white/78 sm:text-[0.9375rem]">
                Turn insight into execution - book a focused strategy conversation with Soham or explore how UVAN supports
                your next market move across language and operations.
              </p>

              <ul className="relative mt-4 flex flex-wrap gap-2">
                {[
                  { icon: Globe2, label: "Corridor intelligence" },
                  { icon: BookOpen, label: "Market entry & language" },
                  { icon: Sparkles, label: "10+ sectors" },
                ].map(({ icon: ItemIcon, label }) => (
                  <li
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/8 px-3 py-1.5 text-[10px] font-semibold text-white/88 backdrop-blur-sm sm:text-[11px]"
                  >
                    <ItemIcon className="h-3 w-3 shrink-0 text-[hsl(var(--brand-gold-500))]" aria-hidden />
                    {label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="cta-panel-actions">
              <Link
                to="/ask-soham"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-2xl bg-[hsl(var(--brand-gold-500))] px-5 py-3.5 text-sm font-semibold text-[hsl(var(--brand-navy-950))] shadow-[0_12px_32px_hsl(var(--brand-gold-500)/0.28)] transition hover:brightness-105"
              >
                <MessageCircle className="h-4 w-4 shrink-0 opacity-80" aria-hidden />
                Book a Strategy Call
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>

              <Link
                to="/ask-soham"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-2xl border border-[hsl(var(--brand-purple-500)/0.22)] bg-white px-5 py-3.5 text-sm font-semibold text-[hsl(var(--brand-purple-700))] transition hover:border-[hsl(var(--brand-purple-500)/0.35)] hover:bg-[hsl(var(--brand-purple-700)/0.04)]"
              >
                Ask Soham - 15 Min Free
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>

              <Link
                to="/market-entry"
                className="group inline-flex min-h-11 w-full items-center justify-center gap-2 text-sm font-semibold text-on-light-secondary transition hover:text-[hsl(var(--brand-purple-700))]"
              >
                Explore UVAN services
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>
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
