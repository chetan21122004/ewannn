import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Globe2,
  GraduationCap,
  Languages,
  MessageCircle,
  Quote,
  SearchCheck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import AeoFrequentlyAskedQuestions from "@/components/AeoFrequentlyAskedQuestions";
import { ASK_SOHAM_FAQS, ENTITY_PARAGRAPH_B } from "@/data/aeoContent";
import { absoluteUrl, faqPageSchema, personSoham, serviceSchema } from "@/lib/schemaHelpers";
import { CALENDLY_SCHEDULING_URL, getCalendlyEmbedUrl } from "@/lib/site";
import { useTranslation } from "react-i18next";

const BOOKING_SECTION_ID = "book-call";
const calendlyEmbedUrl = getCalendlyEmbedUrl();
const BOOKING_EMAIL =
  "mailto:info@ewan.co.in?subject=Ask%20Soham%20-%2015%20Min%20Free%20Call&body=Please%20include%3A%0A1.%20Your%20name%20and%20company%20%2F%20institution%0A2.%20Which%20track%20applies%20(Market%20Entry%20%2F%20Language%20Strategy%20%2F%20Career%20Guidance)%0A3.%20What%20corridor%20or%20region%20are%20you%20focused%20on%3F%0A4.%20What%27s%20your%20biggest%20challenge%20or%20question%20right%20now%3F";

const ASK_SOHAM_KEYWORDS =
  "talk to language expert, India market entry consultation free, Soham Kakade UVAN";

const ABOUT_SOHAM =
  "Soham Kakade is the founder of UVAN. 60,000+ hours of simultaneous interpretation. Full Chinese Government scholarship. VP CITLoB. Bhashini Initiative. MSAMB Export Program. Symbiosis Faculty. IB Board Curriculum Designer. When you book this call, you're talking to someone who has actually been in the room.";

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

const preBookingQuestions = [
  "Your name and company / institution",
  "Which track applies to you (Market Entry / Language Strategy / Career Guidance)",
  "What corridor or region are you focused on?",
  "What's your biggest challenge or question right now?",
];

const trustBarItems = [
  "60,000+ Hours Interpretation",
  "250+ Clients",
  "125+ Languages",
  "ISO 9001:2015",
  "Market Entry Mandates Delivered",
  "Recognised by Consulate General of the PRC",
];

const callPrinciples = [
  { icon: ShieldCheck, text: "No pitch unless you ask" },
  { icon: BriefcaseBusiness, text: "No generic advice" },
  { icon: BadgeCheck, text: "No obligation after the call" },
  { icon: Globe2, text: "A clear next step, even if UVAN is not the fit" },
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
  const reduceMotion = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1] as const;
  const hidden = reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 };
  const show = reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 };
  const transition = (delay = 0) => ({ duration: reduceMotion ? 0.35 : 0.72, delay, ease });

  return (
    <PageLayout
      title={t("seo.askSoham.title")}
      description={t("seo.askSoham.description")}
      canonicalPath="/ask-soham/"
      keywords={ASK_SOHAM_KEYWORDS}
      jsonLd={askSohamLd}
    >
      {/* ── HERO ── */}
      <section className="relative isolate overflow-hidden bg-[hsl(var(--brand-navy-950))] px-6 pb-20 pt-12 text-white lg:pb-28">
        {/* bg blob */}
        <div
          className="pointer-events-none absolute inset-0 opacity-30 mix-blend-color-dodge"
          style={{
            backgroundImage:
              "url('/bg-blobs/beautiful-purple-color-gradient-background-free-vector.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[hsl(var(--brand-navy-950)/0.2)] via-[hsl(var(--brand-navy-950)/0.55)] to-[hsl(var(--brand-navy-950))]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_72%_0%,hsl(var(--brand-purple-700)/0.38),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay opacity-[0.1]" />

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
              initial={hidden}
              animate={show}
              transition={transition(0)}
              className="max-w-3xl"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.55 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-white/90 backdrop-blur-sm"
              >
                <Sparkles className="h-3.5 w-3.5 text-[hsl(var(--brand-gold-500))]" aria-hidden />
                Free. 15 Minutes. No Pitch.
              </motion.div>

              <h1 className="font-serif text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-[4.25rem]">
                Ask{" "}
                <span className="relative inline-block italic text-[hsl(var(--brand-gold-500))]">
                  Soham
                  <motion.span
                    className="absolute -bottom-2 left-1 h-[5px] w-[92%] rounded-full bg-[hsl(var(--brand-gold-500)/0.38)]"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.6, ease }}
                    aria-hidden
                  />
                </span>
                .
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-[1.78] text-white/75 sm:text-lg">
                Whether you&apos;re a company entering India, a business expanding abroad, a professional navigating
                language services, or a student wondering whether a career in languages is right for you - book 15
                minutes with Soham Kakade for focused, honest, experience-based guidance.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <motion.a
                  href={`#${BOOKING_SECTION_ID}`}
                  whileHover={reduceMotion ? undefined : { y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-7 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-[hsl(var(--brand-navy-950))] shadow-[0_16px_40px_hsl(var(--brand-gold-500)/0.32)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-gold-500))]"
                >
                  Book Your Free 15-Minute Call
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </motion.a>
              </div>
            </motion.div>

            {/* Soham photo */}
            <motion.div
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 36 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
              transition={transition(0.12)}
              className="relative hidden lg:block"
            >
              <motion.div
                animate={reduceMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute -inset-6 rounded-[3rem] border border-white/12"
                aria-hidden
              />
              <motion.div
                animate={reduceMotion ? undefined : { rotate: -360 }}
                transition={{ duration: 54, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute -inset-12 rounded-[4rem] border border-[hsl(var(--brand-gold-500)/0.1)]"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-[2.25rem] border border-white/12 bg-[hsl(var(--brand-navy-950))] p-3 shadow-[0_32px_90px_hsl(var(--brand-navy-950)/0.55)]">
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TRACKS ── */}
      <section
        id="who-this-is-for"
        className="relative overflow-hidden px-6 py-20 theme-section-soft"
      >
        <div className="glow-orb glow-orb-purple pointer-events-none h-[460px] w-[460px] -left-40 -top-20 opacity-[0.11]" />
        <div className="glow-orb glow-orb-gold pointer-events-none h-[360px] w-[360px] -right-32 bottom-0 opacity-[0.09]" />
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.14]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-700))]">
              Three Tracks - Who This Is For
            </span>
            <h2 className="font-serif text-4xl font-bold leading-tight text-on-light sm:text-5xl">
              Pick the conversation{" "}
              <span className="italic text-[hsl(var(--brand-purple-700))]">that matches your question.</span>
            </h2>
          </motion.div>

          <div className="flex flex-col gap-6">
            {tracks.map((track, index) => {
              const Icon = track.icon;
              const flipRow = index % 2 !== 0;
              return (
                <motion.article
                  key={track.title}
                  initial={hidden}
                  whileInView={show}
                  viewport={{ once: true }}
                  transition={transition(index * 0.08)}
                  whileHover={reduceMotion ? undefined : { y: -4 }}
                  className="group theme-card-light card-shine overflow-hidden rounded-3xl border border-[hsl(var(--border-light))]"
                >
                  <div
                    className={`grid items-center p-7 sm:p-8 lg:grid-cols-2 lg:gap-10 lg:p-10 ${
                      flipRow ? "lg:[&>figure]:order-2 lg:[&>div]:order-1" : ""
                    }`}
                  >
                    <motion.figure
                      className="mb-6 flex items-center justify-center lg:mb-0"
                      initial={{ opacity: 0, scale: 0.94 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 + 0.14, duration: 0.55 }}
                    >
                      <motion.img
                        src={track.doodle}
                        alt={track.doodleAlt}
                        className="h-44 w-full max-w-[300px] object-contain sm:h-48 lg:h-52 lg:max-w-none"
                        animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
                        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
                      />
                    </motion.figure>

                    <div>
                      <div className="mb-5 flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,hsl(var(--brand-purple-700))_0%,hsl(var(--brand-cyan-500))_100%)] text-white shadow-gold-sm">
                          <Icon className="h-5 w-5" aria-hidden />
                        </div>
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
                      <a
                        href={`#${BOOKING_SECTION_ID}`}
                        className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[hsl(var(--brand-purple-700))] underline-offset-4 transition hover:underline"
                      >
                        Book this track <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHAT THIS CALL IS NOT ── */}
      <section className="relative overflow-hidden px-6 py-20 theme-section-light">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-multiply"
          style={{
            backgroundImage:
              "url('/bg-blobs/abstract-purple-fluid-wave-background-free-vector.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.12]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_1.2fr] lg:gap-8">
            {/* dark "what it's not" card */}
            <motion.div
              initial={hidden}
              whileInView={show}
              viewport={{ once: true }}
              transition={transition(0)}
              className="relative overflow-hidden rounded-3xl bg-[hsl(var(--brand-navy-950))] p-8 text-white sm:p-10"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,hsl(var(--brand-purple-500)/0.34),transparent_40%),radial-gradient(circle_at_85%_85%,hsl(var(--brand-gold-500)/0.2),transparent_36%)]" />
              <motion.img
                src="/doodles/Light bulb-bro (1).svg"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-6 -right-6 h-36 w-36 opacity-[0.14]"
                animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative z-10">
                <Quote className="mb-6 h-9 w-9 text-[hsl(var(--brand-gold-500))]" aria-hidden />
                <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl">
                  What This Call Is Not
                </h2>
                <p className="mt-5 text-sm leading-[1.85] text-white/72 sm:text-base">
                  This is not a sales call. Soham will not pitch UVAN services unless asked. This call is designed to
                  give you 15 minutes of focused, honest guidance from someone who has actually spent 10 years inside
                  the corridors you&apos;re trying to navigate. If UVAN is not the right fit, Soham will tell you.
                </p>
              </div>
            </motion.div>

            {/* principles grid */}
            <motion.div
              initial={hidden}
              whileInView={show}
              viewport={{ once: true }}
              transition={transition(0.08)}
              className="grid grid-cols-2 gap-4"
            >
              {callPrinciples.map((principle, i) => {
                const Icon = principle.icon;
                return (
                  <motion.div
                    key={principle.text}
                    initial={hidden}
                    whileInView={show}
                    viewport={{ once: true }}
                    transition={transition(0.08 + i * 0.06)}
                    className="flex flex-col gap-4 rounded-2xl border border-[hsl(var(--border-light))] bg-white p-5 shadow-[0_10px_30px_hsl(var(--brand-navy-950)/0.05)]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[hsl(var(--brand-purple-700)/0.1)] text-[hsl(var(--brand-purple-700))]">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <p className="text-sm font-bold leading-snug text-on-light">{principle.text}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ABOUT SOHAM ── */}
      <section className="relative overflow-hidden px-6 py-16 theme-section-light lg:py-20">
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.12]" />
        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12">
            <motion.div
              initial={hidden}
              whileInView={show}
              viewport={{ once: true }}
              transition={transition(0)}
            >
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-700))]">
                About Soham
              </span>
              <h2 className="font-serif text-3xl font-bold leading-tight text-on-light sm:text-4xl">
                The person on the other side of the call.
              </h2>
              <p className="mt-5 text-sm leading-[1.88] text-on-light-secondary sm:text-base">{ABOUT_SOHAM}</p>
              <p className="mt-4 text-sm leading-[1.88] text-on-light-muted sm:text-base">{ENTITY_PARAGRAPH_B}</p>
            </motion.div>
            <motion.figure
              initial={hidden}
              whileInView={show}
              viewport={{ once: true }}
              transition={transition(0.1)}
              className="relative overflow-hidden rounded-3xl border border-[hsl(var(--border-light))] shadow-[0_24px_60px_hsl(var(--brand-navy-950)/0.12)]"
            >
              <img
                src="/Soham-Sir.jpg"
                alt="Soham Kakade, Founder and CEO of UVAN"
                className="aspect-[4/5] w-full object-cover object-[center_20%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--brand-navy-950)/0.75)] via-transparent to-transparent" />
              <figcaption className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[hsl(var(--brand-gold-500))]">
                  Founder & CEO · UVAN
                </p>
                <p className="mt-1 font-serif text-2xl font-bold">Soham Kakade</p>
              </figcaption>
            </motion.figure>
          </div>
        </div>
      </section>

      {/* ── BOOKING WIDGET ── */}
      <section
        id={BOOKING_SECTION_ID}
        className="relative scroll-mt-28 overflow-hidden px-6 pb-16 pt-16 theme-section-soft lg:pb-20 lg:pt-20"
      >
        <div className="glow-orb glow-orb-purple pointer-events-none h-[440px] w-[440px] -right-40 top-10 opacity-[0.1]" />
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.15]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
            className="mx-auto mb-10 max-w-3xl text-center"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-700))]">
              <Clock3 className="h-3.5 w-3.5 text-[hsl(var(--brand-gold-600))]" aria-hidden />
              Booking
            </span>
            <h2 className="font-serif text-4xl font-bold leading-tight text-on-light sm:text-5xl">
              Choose a Time That Works For You
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-on-light-secondary sm:text-base">
              All calls via Google Meet or Zoom. Confirmation and link sent immediately on booking.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-on-light-muted sm:text-base">
              Soham is based in Pune, India (IST). Slots available across time zones for international callers.
            </p>
          </motion.div>

          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0.08)}
            className="overflow-hidden rounded-3xl border border-[hsl(var(--border-light))] bg-white shadow-[0_30px_80px_hsl(var(--brand-navy-950)/0.1)]"
          >
            <div className="border-b border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] px-6 py-5 sm:px-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[hsl(var(--brand-purple-700))]">
                Before You Book
              </p>
              <p className="mt-2 text-sm text-on-light-secondary">
                {calendlyEmbedUrl
                  ? "Calendly will ask for the details below so Soham can prepare for a focused 15-minute call."
                  : "Include these details in your email so the 15 minutes can stay focused."}
              </p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {preBookingQuestions.map((question) => (
                  <li key={question} className="flex items-start gap-2 text-sm text-on-light-secondary">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-gold-600))]" aria-hidden />
                    <span>{question}</span>
                  </li>
                ))}
              </ul>
            </div>

            {calendlyEmbedUrl ? (
              <div className="bg-white">
                <iframe
                  title="Book a free 15-minute call with Soham Kakade on Calendly"
                  src={calendlyEmbedUrl}
                  className="min-h-[760px] w-full border-0"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
                <div className="relative overflow-hidden bg-[hsl(var(--brand-navy-950))] p-7 text-white sm:p-8">
                  <motion.img
                    src="/doodles/Schedule-amico.svg"
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-6 -right-6 h-32 w-32 opacity-[0.16]"
                    animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[hsl(var(--brand-gold-500))]">
                    Email to Book
                  </p>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
                    Email us with the details above and we&apos;ll confirm a slot within one business day.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={BOOKING_EMAIL}
                      className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-5 py-3 text-sm font-bold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
                    >
                      Email to Book
                      <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </a>
                    <a
                      href="tel:+918275744740"
                      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/18"
                    >
                      Call (+91) 82757 44740
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 p-8 text-center">
                  <MessageCircle className="h-10 w-10 text-[hsl(var(--brand-purple-700))]" aria-hidden />
                  <p className="max-w-sm text-sm leading-relaxed text-on-light-secondary">
                    Prefer the contact form? We&apos;ll route your request to Soham&apos;s calendar team.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[hsl(var(--border-light-strong))] bg-white px-5 py-3 text-sm font-bold text-on-light transition hover:bg-[hsl(var(--surface-light-100))]"
                  >
                    Use the contact form
                  </Link>
                </div>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-center gap-3 border-t border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-100)/0.72)] px-6 py-5">
              {calendlyEmbedUrl && CALENDLY_SCHEDULING_URL ? (
                <a
                  href={CALENDLY_SCHEDULING_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-5 py-3 text-sm font-bold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
                >
                  Open Calendly in a New Tab
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
              ) : (
                <a
                  href={BOOKING_EMAIL}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-5 py-3 text-sm font-bold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
                >
                  info@ewan.co.in
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
              )}
              <Link
                to="/contact"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[hsl(var(--border-light-strong))] bg-white px-5 py-3 text-sm font-bold text-on-light transition hover:bg-[hsl(var(--surface-light-100))]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Use the contact form
              </Link>
            </div>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0.12)}
            className="mt-8 rounded-2xl border border-[hsl(var(--border-light))] bg-white p-5 sm:p-6"
          >
            <p className="mb-4 text-center text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-navy-950)/0.45)]">
              Trusted across corridors
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center text-[11px] font-semibold uppercase tracking-[0.08em] text-[hsl(var(--brand-navy-950)/0.72)] sm:text-xs">
              {trustBarItems.map((item, i) => (
                <span key={item} className="inline-flex items-center gap-3">
                  {i > 0 ? <span className="hidden text-[hsl(var(--brand-navy-950)/0.25)] sm:inline" aria-hidden>·</span> : null}
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <AeoFrequentlyAskedQuestions
        items={ASK_SOHAM_FAQS}
        className="theme-section-light px-6 py-16"
      />
    </PageLayout>
  );
};

export default AskSoham;
