import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  Clock3,
  GraduationCap,
  Languages,
  MessageCircle,
  SearchCheck,
  Sparkles,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { useAskSohamInquiry } from "@/components/AskSohamInquiryProvider";
import AeoFrequentlyAskedQuestions from "@/components/AeoFrequentlyAskedQuestions";
import { ASK_SOHAM_FAQS } from "@/data/aeoContent";
import { blurReveal, fadeOnly, slideLeft, slideRight, staggerContainer, scaleUp } from "@/lib/animationVariants";
import { absoluteUrl, faqPageSchema, personSoham, serviceSchema } from "@/lib/schemaHelpers";
import { CALENDLY_SCHEDULING_URL, getCalendlyEmbedUrl } from "@/lib/site";
import { useTranslation } from "react-i18next";

const BOOKING_SECTION_ID = "book-call";
const sectionViewport = { once: true, margin: "-72px" as const, amount: 0.22 };

const ASK_SOHAM_KEYWORDS =
  "talk to language expert, India market entry consultation free, Soham Kakade UVAN";

const tracks = [
  {
    icon: SearchCheck,
    eyebrow: "Track 1",
    title: "Market Entry & Cross-Border Expansion",
    forAudience:
      "companies exploring India entry, Indian firms going abroad, executives evaluating corridors.",
    youGet:
      "a clear picture of the actual complexity involved, what UVAN has done in your sector, and whether we're the right partner for your expansion.",
    doodle: "/doodles/International trade-bro.svg",
    doodleAlt: "Cross-border market entry illustration",
  },
  {
    icon: Languages,
    eyebrow: "Track 2",
    title: "Language Strategy & Localization",
    forAudience:
      "marketing managers, procurement leads, or businesses evaluating language service needs.",
    youGet:
      "guidance on what kind of service fits your use case, how to evaluate quality, and a straight answer on whether UVAN can help.",
    doodle: "/doodles/Group discussion-bro.svg",
    doodleAlt: "Language strategy illustration",
  },
  {
    icon: GraduationCap,
    eyebrow: "Track 3",
    title: "Language Career & Industry Guidance",
    forAudience:
      "students, freelancers, and emerging professionals exploring careers in languages, interpretation, or cross-cultural work.",
    youGet:
      "Soham's honest perspective on the industry, which corridors have the most opportunity, and where to focus.",
    doodle: "/doodles/Business growth-cuate.svg",
    doodleAlt: "Career guidance illustration",
  },
];

const askSohamLd = [
  personSoham(),
  faqPageSchema(absoluteUrl("/ask-soham/"), ASK_SOHAM_FAQS),
  serviceSchema({
    name: "Ask Soham consultation",
    description:
      "Free 15-minute strategy call with founder Soham Kakade covering India market entry, language services fit, or language-industry careers - honest, non-sales guidance.",
    canonicalPath: "/ask-soham/",
    serviceType: "Business consultation",
  }),
];

const AskSoham = () => {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion() ?? false;
  const { open: openInquiry } = useAskSohamInquiry();

  const ease = [0.22, 1, 0.36, 1] as const;
  const reveal = reduceMotion ? fadeOnly : blurReveal;
  const calendlyEmbedUrl = getCalendlyEmbedUrl();
  const enterLeft = reduceMotion ? fadeOnly : slideLeft;
  const enterRight = reduceMotion ? fadeOnly : slideRight;
  const enterScale = reduceMotion ? fadeOnly : scaleUp;
  const listStagger: Variants = reduceMotion ? { hidden: {}, visible: {} } : staggerContainer(0.12, 0.06);
  const transition = (delay = 0) => ({ duration: reduceMotion ? 0.35 : 0.72, delay, ease });

  return (
    <PageLayout
      title={t("seo.askSoham.title")}
      description={t("seo.askSoham.description")}
      canonicalPath="/ask-soham/"
      keywords={ASK_SOHAM_KEYWORDS}
      jsonLd={askSohamLd}
      mainClassName="bg-white"
    >
      {/* ── HERO ── */}
      <section className="relative isolate overflow-hidden bg-white px-6 pb-20 pt-2 sm:pt-4 lg:-mt-[4.25rem] lg:pb-28 lg:pt-14">
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.12]" />

        {/* decorative doodle */}
        <motion.img
          src="/doodles/Calling-amico.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-8 right-4 hidden h-56 w-56 opacity-[0.18] lg:block xl:h-64 xl:w-64"
          animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <motion.div
              variants={listStagger}
              initial="hidden"
              animate="visible"
              className="max-w-3xl"
            >
              <motion.div
                variants={reveal}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-[hsl(var(--brand-purple-700))]"
              >
                <Sparkles className="h-3.5 w-3.5 text-[hsl(var(--brand-gold-500))]" aria-hidden />
                Free. 15 Minutes. No Pitch.
              </motion.div>

              <motion.h1
                variants={reveal}
                className="font-serif text-5xl font-bold leading-[0.95] tracking-tight text-on-light sm:text-6xl lg:text-[4.25rem]"
              >
                Ask{" "}
                <span className="relative inline-block italic text-[hsl(var(--brand-purple-700))]">
                  Soham
                  <motion.span
                    className="absolute -bottom-2 left-1 h-[5px] w-[92%] rounded-full bg-[hsl(var(--brand-purple-700)/0.28)]"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: reduceMotion ? 0 : 0.55, duration: 0.65, ease }}
                    aria-hidden
                  />
                </span>
                .
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-2xl text-base leading-[1.78] text-on-light-secondary sm:text-lg"
              >
                Whether you&apos;re a company entering India, a business expanding abroad, a professional navigating
                language services, or a student wondering whether a career in languages is right for you - book 15
                minutes with Soham Kakade for focused, honest, experience-based guidance.
              </motion.p>

              <motion.div variants={reveal} className="mt-9 flex flex-wrap gap-3">
                <motion.a
                  href={`#${BOOKING_SECTION_ID}`}
                  whileHover={reduceMotion ? undefined : { y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-7 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-[hsl(var(--brand-navy-950))] shadow-[0_16px_40px_hsl(var(--brand-gold-500)/0.32)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-gold-500))]"
                >
                  Book Your Free 15-Minute Call
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </motion.a>
                <motion.button
                  type="button"
                  onClick={openInquiry}
                  whileHover={reduceMotion ? undefined : { y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[hsl(var(--brand-purple-500)/0.35)] bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-[hsl(var(--brand-purple-700))] transition hover:bg-[hsl(var(--brand-purple-700)/0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-purple-500))]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  Send a Message to Soham
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Soham photo */}
            <motion.div
              variants={enterScale}
              initial="hidden"
              animate="visible"
              transition={{ ...transition(0.18), duration: reduceMotion ? 0.35 : 0.85 }}
              className="relative hidden lg:block"
            >
              <motion.div
                animate={reduceMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute -inset-6 rounded-[3rem] border border-[hsl(var(--border-light))]"
                aria-hidden
              />
              <motion.div
                animate={reduceMotion ? undefined : { rotate: -360 }}
                transition={{ duration: 54, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute -inset-12 rounded-[4rem] border border-[hsl(var(--brand-gold-500)/0.15)]"
                aria-hidden
              />
              <motion.div
                className="relative overflow-hidden rounded-[2.25rem] border border-[hsl(var(--border-light))] bg-white p-3 shadow-[0_32px_90px_rgba(20,18,47,0.12)]"
                whileHover={reduceMotion ? undefined : { y: -6, scale: 1.01 }}
                transition={{ duration: 0.35, ease }}
              >
                <img
                  src="/Soham-Sir.jpg"
                  alt="Soham Kakade, Founder and CEO of UVAN"
                  className="h-[500px] w-full rounded-[1.75rem] object-cover object-[center_20%]"
                />
                <div className="absolute inset-3 rounded-[1.75rem] bg-gradient-to-t from-[hsl(var(--brand-navy-950)/0.85)] via-transparent to-transparent" />
                <div className="absolute bottom-7 left-7 right-7 text-white">
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[hsl(var(--brand-gold-500))]">
                    Founder & CEO · UVAN
                  </p>
                  <h2 className="mt-2 font-serif text-3xl font-bold">Soham Kakade</h2>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/72">
                    60,000+ hours. Mandarin, Cantonese, Japanese, ASEAN corridors.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TRACKS ── */}
      <section
        id="who-this-is-for"
        className="relative overflow-hidden px-6 py-20 theme-section-soft"
      >
        <div className="glow-orb glow-orb-gold pointer-events-none h-[360px] w-[360px] -right-32 bottom-0 opacity-[0.09]" />
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.14]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            variants={listStagger}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <motion.span
              variants={reveal}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-700))]"
            >
              Three Tracks - Who This Is For
            </motion.span>
            <motion.h2 variants={reveal} className="font-serif text-4xl font-bold leading-tight text-on-light sm:text-5xl">
              Pick the conversation{" "}
              <span className="italic text-[hsl(var(--brand-purple-700))]">that matches your question.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={listStagger}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            className="flex flex-col gap-6"
          >
            {tracks.map((track, index) => {
              const Icon = track.icon;
              const flipRow = index % 2 !== 0;
              const cardReveal = flipRow ? enterRight : enterLeft;
              return (
                <motion.article
                  key={track.title}
                  variants={cardReveal}
                  whileHover={reduceMotion ? undefined : { y: -6, scale: 1.005 }}
                  transition={{ duration: 0.3, ease }}
                  className="group theme-card-light card-shine overflow-hidden rounded-3xl border border-[hsl(var(--border-light))] shadow-[0_16px_40px_hsl(var(--brand-navy-950)/0.05)] transition-shadow duration-300 hover:shadow-[0_24px_56px_hsl(var(--brand-navy-950)/0.1)]"
                >
                  <div
                    className={`grid items-center p-7 sm:p-8 lg:grid-cols-2 lg:gap-10 lg:p-10 ${
                      flipRow ? "lg:[&>figure]:order-2 lg:[&>div]:order-1" : ""
                    }`}
                  >
                    <motion.figure
                      className="mb-6 flex items-center justify-center lg:mb-0"
                      initial={reduceMotion ? false : { opacity: 0, scale: 0.92, rotate: flipRow ? 4 : -4 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={sectionViewport}
                      transition={{ duration: 0.65, delay: index * 0.08, ease }}
                    >
                      <motion.img
                        src={track.doodle}
                        alt={track.doodleAlt}
                        className="h-44 w-full max-w-[300px] object-contain sm:h-48 lg:h-52 lg:max-w-none"
                        animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
                        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.45 }}
                      />
                    </motion.figure>

                    <motion.div
                      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={sectionViewport}
                      transition={{ duration: 0.6, delay: 0.1 + index * 0.08, ease }}
                    >
                      <div className="mb-5 flex items-center gap-4">
                        <motion.div
                          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,hsl(var(--brand-purple-700))_0%,hsl(var(--brand-cyan-500))_100%)] text-white shadow-gold-sm"
                          whileHover={reduceMotion ? undefined : { scale: 1.08, rotate: 4 }}
                          transition={{ duration: 0.25 }}
                        >
                          <Icon className="h-5 w-5" aria-hidden />
                        </motion.div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[hsl(var(--brand-gold-600))]">
                          {track.eyebrow}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl font-bold leading-snug text-on-light sm:text-3xl">
                        {track.title}
                      </h3>
                      <p className="mt-4 text-sm leading-[1.78] text-on-light-secondary sm:text-base">
                        <span className="font-semibold text-on-light">For:</span> {track.forAudience}
                      </p>
                      <p className="mt-3 text-sm leading-[1.78] text-on-light-secondary sm:text-base">
                        <span className="font-semibold text-on-light">You&apos;ll get:</span> {track.youGet}
                      </p>
                      <motion.a
                        href={`#${BOOKING_SECTION_ID}`}
                        className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[hsl(var(--brand-purple-700))] underline-offset-4 transition hover:underline"
                        whileHover={reduceMotion ? undefined : { x: 3 }}
                      >
                        Book this track <ArrowUpRight className="h-4 w-4" />
                      </motion.a>
                    </motion.div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── WHAT THIS CALL IS NOT ── */}
      <section className="relative overflow-hidden section-pad theme-section-light px-6">
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.12]" />

        <div className="container relative z-10 mx-auto max-w-4xl">
          <motion.div
            variants={listStagger}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            className="text-center"
          >
            <motion.span
              variants={reveal}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-700))]"
            >
              Straight talk
            </motion.span>
            <motion.h2
              variants={reveal}
              className="font-serif text-3xl font-bold leading-tight text-on-light sm:text-4xl lg:text-[2.75rem]"
            >
              What This Call Is Not
            </motion.h2>
            <motion.p
              variants={reveal}
              className="mx-auto mt-6 max-w-3xl text-base leading-[1.9] text-on-light-secondary sm:text-lg"
            >
              This is <strong className="font-semibold text-on-light">not a sales call</strong>. Soham will{" "}
              <strong className="font-semibold text-on-light">not pitch UVAN services unless you ask</strong>. The call
              is designed to give you{" "}
              <strong className="font-semibold text-on-light">15 minutes of focused, honest guidance</strong> from
              someone who has spent 10 years inside the corridors you&apos;re trying to navigate - with{" "}
              <strong className="font-semibold text-on-light">no generic advice</strong>,{" "}
              <strong className="font-semibold text-on-light">no obligation after the call</strong>, and{" "}
              <strong className="font-semibold text-on-light">a clear next step</strong>, even if UVAN is not the right
              fit.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT SOHAM ── */}
      <section className="relative overflow-hidden border-y border-[hsl(var(--border-light)/0.85)] bg-white section-pad px-6">
        <div className="glow-orb glow-orb-gold pointer-events-none -right-24 top-8 h-[280px] w-[280px] opacity-[0.05]" />
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.08]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(260px,320px)_minmax(0,1fr)] lg:gap-14">
            <motion.figure
              variants={enterLeft}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              className="relative mx-auto w-full max-w-[320px] lg:mx-0"
            >
              <motion.div
                className="relative overflow-hidden rounded-[1.65rem] border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] p-1.5 shadow-[0_24px_60px_hsl(var(--brand-navy-950)/0.08)]"
                whileHover={reduceMotion ? undefined : { y: -4, scale: 1.01 }}
                transition={{ duration: 0.35, ease }}
              >
                <img
                  src="/Soham-Sir.jpg"
                  alt="Soham Kakade, Founder of Ewan Business Solutions"
                  className="aspect-[4/5] w-full rounded-[1.35rem] object-cover object-[center_20%]"
                />
              </motion.div>
            </motion.figure>

            <motion.div
              variants={enterRight}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
            >
              <motion.span
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={sectionViewport}
                transition={transition(0.04)}
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-700))]"
              >
                About Soham
              </motion.span>
              <motion.h2
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={sectionViewport}
                transition={transition(0.1)}
                className="font-serif text-3xl font-bold leading-[1.08] text-on-light sm:text-4xl lg:text-[2.65rem]"
              >
                The person on the other side of the call.
              </motion.h2>

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={sectionViewport}
                transition={transition(0.16)}
                className="mt-6 rounded-[1.35rem] border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50)/0.7)] px-5 py-6 sm:px-7 sm:py-7"
              >
                <p className="text-base leading-[1.92] text-on-light-secondary sm:text-[1.0625rem]">
                  <strong className="font-semibold text-on-light">Soham Kakade</strong> is the founder of{" "}
                  <strong className="font-semibold text-on-light">Ewan Business Solutions</strong>. 60,000+ hours of
                  simultaneous interpretation. Full Chinese Government scholarship. VP CITLoB. Bhashini Initiative.
                  MSAMB Export Program. Symbiosis Faculty. IB Board Curriculum Designer.{" "}
                  <span className="font-serif text-[hsl(var(--brand-purple-700))]">
                    When you book this call, you&apos;re talking to someone who has actually been in the room.
                  </span>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BOOKING ── */}
      <section
        id={BOOKING_SECTION_ID}
        className="relative scroll-mt-28 overflow-hidden px-6 pb-16 pt-16 theme-section-soft lg:pb-20 lg:pt-20"
      >
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.12]" />

        <div className="container relative z-10 mx-auto max-w-4xl">
          <motion.div
            variants={listStagger}
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            className="text-center"
          >
            <motion.span
              variants={reveal}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-700))]"
            >
              <Clock3 className="h-3.5 w-3.5 text-[hsl(var(--brand-gold-600))]" aria-hidden />
              Booking
            </motion.span>
            <motion.h2 variants={reveal} className="font-serif text-3xl font-bold leading-tight text-on-light sm:text-4xl">
              Ready to talk with Soham?
            </motion.h2>

            <motion.div
              variants={reveal}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
            >
              {CALENDLY_SCHEDULING_URL ? (
                <motion.a
                  href={CALENDLY_SCHEDULING_URL}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={reduceMotion ? undefined : { y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-7 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-[hsl(var(--brand-navy-950))] shadow-[0_16px_40px_hsl(var(--brand-gold-500)/0.32)] transition hover:brightness-105 sm:w-auto"
                >
                  Book on Calendly
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </motion.a>
              ) : (
                <p className="text-sm text-on-light-muted">Calendly booking link will be added here shortly.</p>
              )}

              <motion.button
                type="button"
                onClick={openInquiry}
                whileHover={reduceMotion ? undefined : { y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-[hsl(var(--brand-purple-500)/0.35)] bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-[hsl(var(--brand-purple-700))] transition hover:bg-[hsl(var(--brand-purple-700)/0.06)] sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Send a Message to Soham
              </motion.button>
            </motion.div>

            {calendlyEmbedUrl ? (
              <motion.div
                variants={reveal}
                className="mt-10 overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-white shadow-[0_16px_48px_-24px_rgba(26,22,51,0.14)] sm:mt-12 sm:rounded-3xl"
              >
                <iframe
                  src={calendlyEmbedUrl}
                  title="Book a 30-minute call with Soham Kakade"
                  className="h-[min(720px,80dvh)] w-full border-0"
                  loading="lazy"
                />
              </motion.div>
            ) : null}
          </motion.div>
        </div>
      </section>

      <AeoFrequentlyAskedQuestions
        items={ASK_SOHAM_FAQS}
        className="theme-section-light section-pad px-6"
      />
    </PageLayout>
  );
};

export default AskSoham;
