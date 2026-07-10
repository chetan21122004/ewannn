import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Download,
  MailPlus,
  Newspaper,
  Play,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/PageLayout";
import SectionDivider from "@/components/SectionDivider";
import { latestGazetteIssue } from "@/data/languageGazetteIssues";
import { absoluteUrl, collectionPageSchema } from "@/lib/schemaHelpers";

const NEWSLETTER_URL =
  "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7211685542705467393";

const hubSections = [
  { id: "blog-insights", label: "Articles" },
  { id: "language-gazette", label: "The Language Gazette" },
  { id: "video-insights", label: "Videos" },
  { id: "newsletter", label: "Newsletter" },
] as const;

const recommendedTopics = [
  {
    title: "How to Enter the Indian Market as a Foreign Company",
    to: "/insights/how-to-enter-indian-market",
  },
  {
    title: "How to Choose a Translation Partner in India",
    to: "/insights/how-to-choose-translation-partner-india",
  },
  {
    title: "What Is Simultaneous Interpretation?",
    to: "/insights/what-is-simultaneous-interpretation",
  },
  {
    title: "The 5 operational gaps that quietly kill cross-border expansion",
    to: "/market-entry-audit",
  },
  {
    title: "India-Vietnam trade corridor: what businesses need to know in 2026",
    to: "/insights/how-to-enter-indian-market",
  },
  {
    title: "Is a career in Asian languages worth it in India? An honest guide",
    to: "/insights",
  },
];

const marqueeItems = [
  "India market entry",
  "Translation strategy",
  "Executive liaisoning",
  "Simultaneous interpretation",
  "Cross-border operations",
  "Cultural intelligence",
  "125+ languages",
  "Asia corridor insights",
];

const Media = () => {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  const motionProps = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 } as const,
        whileInView: { opacity: 1, y: 0 } as const,
        viewport: { once: true } as const,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
      };

  const mediaLd = [
    collectionPageSchema(
      "Media, Insights & Newsletter",
      "Read UVAN articles, explore The Language Gazette, watch event videos, and subscribe to the UVAN newsletter.",
      absoluteUrl("/media/"),
    ),
  ];

  return (
    <PageLayout
      title={t("seo.media.title")}
      description={t("seo.media.description")}
      canonicalPath="/media/"
      keywords={t("seo.media.keywords")}
      jsonLd={mediaLd}
    >
      <section className="relative overflow-hidden bg-[hsl(var(--brand-navy-950))] px-6 pb-20 pt-14 text-white lg:pb-28 lg:pt-20">
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: "url('/stitch/insights/gazette-cover.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-[hsl(var(--brand-navy-950)/0.55)] via-[hsl(var(--brand-navy-950)/0.9)] to-[hsl(var(--brand-navy-950))]" />
        <div className="pointer-events-none absolute -right-16 top-16 h-80 w-80 rounded-full bg-[hsl(var(--brand-gold-500)/0.14)] blur-3xl" />
        <div className="pointer-events-none absolute -left-10 bottom-0 h-72 w-72 rounded-full bg-[hsl(var(--brand-purple-500)/0.18)] blur-3xl" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[hsl(var(--brand-gold-500))]">
              Media Hub
            </p>
            <h1 className="mt-5 font-serif text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              Articles, Gazette issues and{" "}
              <span className="text-[hsl(var(--brand-gold-500))]">corridor intelligence.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/82 sm:text-lg">
              Published by UVAN for practitioners navigating India entry, language services, and cross-border execution.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#blog-insights"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
              >
                Articles
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <a
                href="#language-gazette"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                The Language Gazette
                <Newspaper className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="container relative z-10 mx-auto mt-12 max-w-6xl border-t border-white/10 pt-4">
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
            {hubSections.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="transition hover:text-[hsl(var(--brand-gold-500))]">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" fromDark />

      <section id="blog-insights" className="theme-section-soft scroll-mt-36 px-6 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...motionProps} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-700))]">
              <BookOpen className="h-3.5 w-3.5" aria-hidden />
              Articles
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-[hsl(var(--brand-navy-950))] sm:text-4xl lg:text-5xl">
              Articles
            </h2>
            <p className="mt-5 text-base leading-relaxed text-on-light-secondary sm:text-lg">
              Regular insights from Soham Kakade and the UVAN team on market entry, language strategy, cross-border
              business and the India-Asia corridor.
            </p>
          </motion.div>

          <div className="client-logos-fade mt-8 overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-white/70 py-3">
            <div className="blogs-marquee flex w-max items-center gap-3">
              {[...marqueeItems, ...marqueeItems].map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="rounded-full border border-[hsl(var(--brand-purple-700)/0.12)] bg-[hsl(var(--brand-purple-700)/0.06)] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--brand-purple-700))]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <motion.div {...motionProps} className="mt-10">
            <ul className="grid gap-3 sm:grid-cols-2">
              {recommendedTopics.map((topic) => (
                <li key={topic.title}>
                  <Link
                    to={topic.to}
                    className="group flex h-full items-start gap-3 rounded-2xl border border-[hsl(var(--border-light))] bg-white p-4 transition hover:border-[hsl(var(--brand-purple-500)/0.3)] hover:shadow-sm"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-gold-600))]"
                      aria-hidden
                    />
                    <span className="text-sm leading-relaxed text-on-light-secondary group-hover:text-[hsl(var(--brand-navy-950))]">
                      {topic.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...motionProps} className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/insights"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[hsl(var(--brand-purple-700))] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Browse All Insights
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </motion.div>
        </div>
      </section>

      <SectionDivider variant="slant" />

      <section id="language-gazette" className="theme-section-light scroll-mt-36 px-6 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
            <motion.div {...motionProps} className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-700))]">
                <Newspaper className="h-3.5 w-3.5" aria-hidden />
                The Language Gazette
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-[hsl(var(--brand-navy-950))] sm:text-4xl lg:text-5xl">
                The Language Gazette
              </h2>
              <p className="mt-5 text-base leading-relaxed text-on-light-secondary sm:text-lg">
                UVAN&apos;s publication exploring the intersection of language, cultural intelligence and international
                business. Read 2026 web articles or browse earlier issue-style editions.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/language-gazette"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[hsl(var(--brand-navy-950))] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
                >
                  Browse Gazette
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  to={latestGazetteIssue.path}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[hsl(var(--border-light-strong))] bg-white px-6 py-3 text-sm font-semibold text-[hsl(var(--brand-purple-700))] transition hover:bg-[hsl(var(--surface-light-100))]"
                >
                  Latest Issue
                  <Download className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </motion.div>

            <motion.div {...motionProps} className="lg:col-span-5">
              <Link
                to={latestGazetteIssue.path}
                className="group block overflow-hidden rounded-[2rem] border border-[hsl(var(--border-light))] bg-white shadow-[0_18px_44px_rgba(26,22,51,0.08)]"
              >
                <img
                  src={latestGazetteIssue.coverImage}
                  alt={`The Language Gazette ${latestGazetteIssue.label} cover`}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                />
                <div className="border-t border-[hsl(var(--border-light))] p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-gold-600))]">
                    {latestGazetteIssue.label} Issue
                  </p>
                  <p className="mt-2 font-serif text-xl font-bold text-[hsl(var(--brand-navy-950))]">
                    Read the latest digital issue
                  </p>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" />

      <section id="video-insights" className="theme-section-light scroll-mt-36 px-6 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
            <motion.div {...motionProps} className="order-2 lg:order-1 lg:col-span-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-700))]">
                <Play className="h-3.5 w-3.5" aria-hidden />
                Videos
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-[hsl(var(--brand-navy-950))] sm:text-4xl lg:text-5xl">
                Videos
              </h2>
              <p className="mt-5 text-base leading-relaxed text-on-light-secondary sm:text-lg">
                Watch Soham and the UVAN team in action through event highlights, industry talks and Oriental Flock
                session recaps.
              </p>
              <a
                href="https://www.youtube.com/@EWAN-SSK"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-[hsl(var(--brand-navy-950))] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
              >
                Watch on YouTube
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            </motion.div>

            <motion.div {...motionProps} className="order-1 lg:order-2 lg:col-span-7">
              <a
                href="https://www.youtube.com/@EWAN-SSK"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-video overflow-hidden rounded-[2rem] border border-[hsl(var(--border-light))]"
              >
                <img
                  src="/stitch/insights/video-event-highlight.jpg"
                  alt="UVAN event highlights and industry talks"
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[hsl(var(--brand-navy-950)/0.45)] transition group-hover:bg-[hsl(var(--brand-navy-950)/0.35)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-sm transition group-hover:bg-white/30">
                    <Play className="h-7 w-7 translate-x-0.5 text-white" aria-hidden />
                  </span>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider variant="slant" flip />

      <section id="newsletter" className="theme-section-soft scroll-mt-36 px-6 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            {...motionProps}
            className="relative overflow-hidden rounded-[2rem] border border-[hsl(var(--border-light))] bg-white p-7 shadow-[0_18px_44px_rgba(26,22,51,0.08)] sm:p-10"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[hsl(var(--brand-gold-500)/0.16)] blur-3xl" />
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-700))]">
                  <MailPlus className="h-3.5 w-3.5" aria-hidden />
                  Newsletter
                </span>
                <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-[hsl(var(--brand-navy-950))] sm:text-4xl">
                  Subscribe to UVAN on LinkedIn
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-on-light-secondary">
                  Notes on cross-border market entry, language services, and operational execution for companies moving
                  across India and emerging corridors.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3 lg:items-end">
                <span className="rounded-full border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] px-5 py-2 text-sm font-bold text-[hsl(var(--brand-purple-700))]">
                  2000+ subscribers
                </span>
                <a
                  href={NEWSLETTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-8 py-3 text-sm font-bold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
                >
                  Subscribe on LinkedIn
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
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

export default Media;
