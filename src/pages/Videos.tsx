import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Play, Sparkles, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/PageLayout";
import { absoluteUrl, breadcrumbSchema } from "@/lib/schemaHelpers";

const UVAN_YOUTUBE_URL = "https://www.youtube.com/@EWAN-SSK";

const videoHighlights = [
  {
    title: "Event highlights",
    copy: "On-ground moments from trade fairs, bilateral engagements, and cross-border sessions.",
    image: "/stitch/insights/video-event-highlight.jpg",
    imageAlt: "UVAN event highlights and industry talks",
  },
  {
    title: "Industry talks",
    copy: "Soham and the UVAN team on language strategy, market entry, and corridor execution.",
    image: "/stitch/insights/video-talk.jpg",
    imageAlt: "UVAN industry talk session",
  },
  {
    title: "Session recaps",
    copy: "Oriental Flock and practitioner sessions distilled for operators and language professionals.",
    image: "/stitch/insights/video-session.jpg",
    imageAlt: "UVAN practitioner session recap",
  },
  {
    title: "Keynotes & panels",
    copy: "Conference stages and panel discussions across India-Asia business corridors.",
    image: "/stitch/language-gazette/video-keynote.jpg",
    imageAlt: "UVAN keynote and panel discussion",
  },
] as const;

const Videos = () => {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  const hidden = reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 };
  const show = reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 };
  const transition = (delay = 0) => ({ duration: reduceMotion ? 0.35 : 0.72, delay, ease: [0.22, 1, 0.36, 1] as const });

  const motionProps = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 } as const,
        whileInView: { opacity: 1, y: 0 } as const,
        viewport: { once: true } as const,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
      };

  const jsonLd = [
    breadcrumbSchema(absoluteUrl("/videos/"), [
      { name: "Home", path: "/" },
      { name: "Videos", path: "/videos/" },
    ]),
  ];

  return (
    <PageLayout
      title={t("seo.videos.title")}
      description={t("seo.videos.description")}
      canonicalPath="/videos/"
      keywords={t("seo.videos.keywords")}
      jsonLd={jsonLd}
    >
      <section className="relative isolate overflow-hidden section-pad-hero sm:px-6">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 52% 44% at 92% 8%, hsl(var(--brand-gold-500) / 0.13) 0%, transparent 50%), radial-gradient(ellipse 58% 48% at 8% 88%, hsl(var(--brand-purple-500) / 0.08) 0%, transparent 52%)",
          }}
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.12] lg:opacity-[0.16]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <motion.div initial={hidden} animate={show} transition={transition(0)} className="lg:col-span-5">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))] shadow-sm sm:mb-5 sm:px-4 sm:py-1.5 sm:text-[11px] sm:tracking-[0.22em]">
                <Sparkles className="h-3 w-3 text-[hsl(var(--brand-gold-600))] sm:h-3.5 sm:w-3.5" aria-hidden />
                Videos
              </span>
              <h1 className="max-w-2xl font-serif text-[1.85rem] font-bold leading-[1.06] text-on-light sm:text-4xl lg:text-5xl">
                Watch UVAN in{" "}
                <span className="italic text-[hsl(var(--brand-purple-700))]">action.</span>
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-on-light-secondary sm:mt-5 sm:text-base lg:text-lg">
                Event highlights, industry talks, and Oriental Flock session recaps - Soham and the UVAN team on
                language, market entry, and cross-border execution.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
                <a
                  href={UVAN_YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-[hsl(var(--brand-navy-950))] shadow-[0_16px_36px_hsl(var(--brand-gold-500)/0.22)] transition hover:-translate-y-0.5 hover:brightness-105 sm:w-auto sm:px-6"
                >
                  Watch on YouTube
                  <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
                </a>
                <Link
                  to="/insights"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-[hsl(var(--border-light-strong))] bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-on-light transition hover:bg-[hsl(var(--surface-light-100))] sm:w-auto sm:px-6"
                >
                  Browse articles
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                </Link>
              </div>
            </motion.div>

            <motion.div initial={hidden} animate={show} transition={transition(0.1)} className="lg:col-span-7">
              <a
                href={UVAN_YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-video overflow-hidden rounded-[2rem] border border-[hsl(var(--border-light))] shadow-[0_20px_60px_hsl(var(--brand-navy-950)/0.1)]"
              >
                <img
                  src="/stitch/insights/video-event-highlight.jpg"
                  alt="UVAN event highlights and industry talks"
                  loading="eager"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[hsl(var(--brand-navy-950)/0.45)] transition group-hover:bg-[hsl(var(--brand-navy-950)/0.35)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-sm transition group-hover:scale-105 group-hover:bg-white/30 sm:h-20 sm:w-20">
                    <Play className="h-7 w-7 translate-x-0.5 text-white sm:h-8 sm:w-8" aria-hidden />
                  </span>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="theme-section-light px-6 section-pad">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...motionProps} className="mb-8 max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-700))]">
              <Youtube className="h-3.5 w-3.5" aria-hidden />
              UVAN on YouTube
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-[hsl(var(--brand-navy-950))] sm:text-4xl">
              Sessions, talks & event coverage
            </h2>
            <p className="mt-4 text-base leading-relaxed text-on-light-secondary">
              All videos live on the UVAN YouTube channel - subscribe for new uploads from the field.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {videoHighlights.map((video, index) => (
              <motion.a
                key={video.title}
                href={UVAN_YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                initial={hidden}
                whileInView={show}
                viewport={{ once: true }}
                transition={transition(0.04 + index * 0.06)}
                className="group overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-white shadow-[0_10px_28px_hsl(var(--brand-navy-950)/0.05)] transition hover:-translate-y-0.5 hover:border-[hsl(var(--brand-purple-500)/0.28)] hover:shadow-[0_16px_40px_hsl(var(--brand-navy-950)/0.08)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={video.image}
                    alt={video.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[hsl(var(--brand-navy-950)/0.35)] transition group-hover:bg-[hsl(var(--brand-navy-950)/0.25)]" />
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[hsl(var(--brand-navy-950))]">
                      <Play className="h-4 w-4 translate-x-0.5" aria-hidden />
                    </span>
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-base font-bold text-[hsl(var(--brand-navy-950))]">{video.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-on-light-secondary">{video.copy}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div {...motionProps} className="mt-10 flex flex-wrap gap-3">
            <a
              href={UVAN_YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[hsl(var(--brand-navy-950))] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              <Youtube className="h-4 w-4" aria-hidden />
              View all on YouTube
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
            <Link
              to="/language-gazette"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[hsl(var(--border-light-strong))] bg-white px-6 py-3 text-sm font-semibold text-on-light transition hover:bg-[hsl(var(--surface-light-100))]"
            >
              The Language Gazette
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Videos;
