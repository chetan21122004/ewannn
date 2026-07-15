import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  MailPlus,
  Newspaper,
  Play,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/PageLayout";
import SectionDivider from "@/components/SectionDivider";
import GazetteMediaShowcase from "@/components/language-gazette/GazetteMediaShowcase";
import { latestGazetteIssue } from "@/data/languageGazetteIssues";
import { absoluteUrl, collectionPageSchema } from "@/lib/schemaHelpers";

const NEWSLETTER_URL =
  "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7211685542705467393";

const hubSections = [
  { id: "blog-insights", label: "Articles", icon: BookOpen },
  { id: "language-gazette", label: "The Language Gazette", icon: Newspaper },
  { id: "video-insights", label: "Videos", icon: Play },
  { id: "newsletter", label: "Newsletter", icon: MailPlus },
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

  const ease = [0.22, 1, 0.36, 1] as const;
  const hidden = reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 };
  const show = reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 };
  const transition = (delay = 0) => ({ duration: reduceMotion ? 0.35 : 0.72, delay, ease });

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
      <section className="relative isolate overflow-hidden px-5 pb-12 pt-8 sm:px-6 lg:pb-20 lg:pt-14">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 52% 44% at 92% 8%, hsl(var(--brand-gold-500) / 0.13) 0%, transparent 50%), radial-gradient(ellipse 58% 48% at 8% 88%, hsl(var(--brand-purple-500) / 0.08) 0%, transparent 52%), radial-gradient(ellipse 40% 36% at 50% 100%, hsl(var(--brand-cyan-500) / 0.09) 0%, transparent 55%)",
          }}
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.12] lg:opacity-[0.16]" />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[hsl(var(--surface-light-50))] to-transparent"
          aria-hidden
        />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(260px,0.95fr)] lg:gap-14 xl:gap-16">
            <motion.div initial={hidden} animate={show} transition={transition(0)}>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))] shadow-sm sm:mb-5 sm:px-4 sm:py-1.5 sm:text-[11px] sm:tracking-[0.22em]">
                <Sparkles className="h-3 w-3 text-[hsl(var(--brand-gold-600))] sm:h-3.5 sm:w-3.5" aria-hidden />
                Media Hub
              </span>
              <h1 className="max-w-2xl font-serif text-[1.85rem] font-bold leading-[1.06] text-on-light sm:text-4xl lg:text-5xl xl:text-[3.25rem] xl:leading-[1.04]">
                Articles, Gazette issues and{" "}
                <span className="italic text-[hsl(var(--brand-purple-700))]">corridor intelligence.</span>
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-on-light-secondary sm:mt-5 sm:text-base lg:text-lg">
                Published by UVAN for practitioners navigating India entry, language services, and cross-border
                execution.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
                <a
                  href="#blog-insights"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-[hsl(var(--brand-navy-950))] shadow-[0_16px_36px_hsl(var(--brand-gold-500)/0.22)] transition hover:-translate-y-0.5 hover:brightness-105 sm:w-auto sm:px-6"
                >
                  Browse Articles
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                </a>
                <Link
                  to="/language-gazette"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-[hsl(var(--border-light-strong))] bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-on-light transition hover:bg-[hsl(var(--surface-light-100))] sm:w-auto sm:px-6"
                >
                  The Language Gazette
                  <Newspaper className="h-4 w-4 shrink-0" aria-hidden />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={hidden}
              animate={show}
              transition={transition(0.1)}
              className="relative mx-auto w-full max-w-[min(100%,380px)] lg:mx-0 lg:max-w-none lg:justify-self-end"
            >
              <motion.img
                src="/doodles/Bookmarks-pana.svg"
                alt="Media and publications illustration"
                className="relative z-10 mx-auto h-44 w-full max-w-[280px] object-contain sm:h-52 lg:mx-0 lg:h-56 lg:max-w-[320px]"
                animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                initial={hidden}
                animate={show}
                transition={transition(0.18)}
                className="absolute -bottom-2 left-0 right-0 z-20 mx-auto max-w-[240px] overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-white/95 p-3 shadow-[0_18px_44px_rgba(26,22,51,0.12)] backdrop-blur-sm sm:-left-4 sm:max-w-[260px] lg:-bottom-4 lg:-left-6"
              >
                <div className="flex gap-3">
                  <img
                    src={latestGazetteIssue.coverImage}
                    alt=""
                    aria-hidden
                    className="h-16 w-14 shrink-0 rounded-lg object-cover"
                  />
                  <div className="min-w-0">
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))]">
                      Latest from TLG
                    </p>
                    <p className="mt-1 line-clamp-2 text-xs font-semibold leading-snug text-on-light">
                      {latestGazetteIssue.label}
                    </p>
                    <Link
                      to={latestGazetteIssue.path}
                      className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-bold text-[hsl(var(--brand-gold-600))] hover:underline"
                    >
                      Read issue
                      <ArrowUpRight className="h-3 w-3" aria-hidden />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.nav
            aria-label="Media hub sections"
            initial={hidden}
            animate={show}
            transition={transition(0.14)}
            className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-4"
          >
            {hubSections.map((item) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  whileHover={reduceMotion ? undefined : { y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="group theme-card-light flex min-h-[72px] items-center gap-3 rounded-2xl border border-[hsl(var(--border-light))] p-4 transition hover:border-[hsl(var(--brand-purple-700)/0.28)] hover:shadow-[0_14px_36px_rgba(26,22,51,0.08)] sm:min-h-[80px] sm:p-5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[hsl(var(--brand-purple-700)/0.08)] text-[hsl(var(--brand-purple-700))] transition group-hover:bg-[hsl(var(--brand-purple-700))] group-hover:text-white">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="text-sm font-bold text-on-light transition group-hover:text-[hsl(var(--brand-purple-700))]">
                    {item.label}
                  </span>
                </motion.a>
              );
            })}
          </motion.nav>
        </div>
      </section>

      <SectionDivider variant="wave" />

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

      <GazetteMediaShowcase />

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
