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
import { useTranslation } from "react-i18next";

const BOOKING_SECTION_ID = "book-call";
const BOOKING_EMAIL =
  "mailto:info@ewan.co.in?subject=Ask%20Soham%20-%2015%20Min%20Free%20Call&body=Please%20include%3A%0A-%20Your%20name%20and%20company%0A-%20Which%20track%20applies%20(Market%20Entry%20%2F%20Language%20%2F%20Career)%0A-%20Corridor%20or%20region%0A-%20Your%20biggest%20question%20right%20now";

const ASK_SOHAM_KEYWORDS =
  "talk to language expert, India market entry consultation free, Soham Kakade UVAN";

const tracks = [
  {
    icon: SearchCheck,
    eyebrow: "Track 01",
    title: "Market Entry & Cross-Border Expansion",
    description:
      "For companies exploring India entry, Indian firms going abroad, and executives evaluating corridors. You get a clear view of the real complexity, relevant UVAN experience, and whether the mandate is a fit.",
    doodle: "/doodles/International trade-bro.svg",
    doodleAlt: "Cross-border market entry illustration",
  },
  {
    icon: Languages,
    eyebrow: "Track 02",
    title: "Language Strategy & Localization",
    description:
      "For marketing managers, procurement teams, and operators evaluating translation, interpretation, localization, or multilingual vendor quality. You get practical guidance before you spend.",
    doodle: "/doodles/Group discussion-bro.svg",
    doodleAlt: "Language strategy illustration",
  },
  {
    icon: GraduationCap,
    eyebrow: "Track 03",
    title: "Language Career & Industry Guidance",
    description:
      "For students, freelancers, and emerging professionals exploring language careers, interpretation, or cross-cultural work. You get Soham's direct read on where opportunity is moving.",
    doodle: "/doodles/Business growth-cuate.svg",
    doodleAlt: "Career guidance illustration",
  },
];

const preBookingQuestions = [
  "Your name and company / institution",
  "Which track applies to you",
  "What corridor or region you are focused on",
  "Your biggest challenge or question right now",
];

const trustBarItems = [
  { value: "60,000+", label: "interpretation hours" },
  { value: "125+", label: "languages" },
  { value: "250+", label: "clients served" },
  { value: "ISO", label: "9001:2015 certified" },
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
                Free · 15 Minutes · No Pitch
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
                A focused 15-minute call with Soham Kakade - Founder & CEO of UVAN. Market entry,
                language strategy, or language-career guidance. Honest. Specific. No script.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <motion.a
                  href={`#${BOOKING_SECTION_ID}`}
                  whileHover={reduceMotion ? undefined : { y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-7 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-[hsl(var(--brand-navy-950))] shadow-[0_16px_40px_hsl(var(--brand-gold-500)/0.32)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-gold-500))]"
                >
                  Book the Free Call
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </motion.a>
                <a
                  href="#who-this-is-for"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-white backdrop-blur transition hover:bg-white/18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  See the Tracks
                </a>
              </div>

              <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
                {trustBarItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={hidden}
                    animate={show}
                    transition={transition(0.1 + i * 0.06)}
                    className="rounded-2xl border border-white/12 bg-white/8 p-4 text-center backdrop-blur"
                  >
                    <p className="font-serif text-2xl font-bold text-white">{item.value}</p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white/55">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
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
              Three Tracks
            </span>
            <h2 className="font-serif text-4xl font-bold leading-tight text-on-light sm:text-5xl">
              Choose the room{" "}
              <span className="italic text-[hsl(var(--brand-purple-700))]">you are walking into.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-on-light-secondary">
              Each track is designed for a specific type of conversation. Pick the one that matches where you are right now.
            </p>
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
                        {track.description}
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
                  What this call is not.
                </h2>
                <p className="mt-5 text-sm leading-[1.85] text-white/72 sm:text-base">
                  This is not a sales call. Soham will not pitch UVAN services unless you ask. The
                  call is designed to give you focused, honest guidance - if UVAN is not the right
                  fit, Soham will tell you exactly that.
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

      {/* ── BOOK A CALL ── */}
      <section
        id={BOOKING_SECTION_ID}
        className="relative scroll-mt-28 overflow-hidden px-6 pb-20 pt-20 theme-section-soft"
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
              Book the Call
            </span>
            <h2 className="font-serif text-4xl font-bold leading-tight text-on-light sm:text-5xl">
              Request your{" "}
              <span className="italic text-[hsl(var(--brand-purple-700))]">15-minute slot.</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-on-light-secondary sm:text-base">
              Email us with the details below. Soham is based in Pune, India (IST) and accommodates
              international time zones.
            </p>
          </motion.div>

          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0.08)}
            className="overflow-hidden rounded-3xl border border-[hsl(var(--border-light))] bg-white shadow-[0_30px_80px_hsl(var(--brand-navy-950)/0.1)]"
          >
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
                  Before You Reach Out
                </p>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
                  Include these details in your email so the 15 minutes can stay focused.
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
              <ul className="grid gap-3 p-6 sm:grid-cols-2 sm:p-8">
                {preBookingQuestions.map((question) => (
                  <li
                    key={question}
                    className="flex items-start gap-3 text-sm font-medium leading-relaxed text-on-light-secondary"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-gold-600))]"
                      aria-hidden
                    />
                    <span>{question}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 border-t border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-100)/0.72)] px-6 py-5">
              <a
                href={BOOKING_EMAIL}
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-5 py-3 text-sm font-bold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
              >
                info@ewan.co.in
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
              <Link
                to="/contact"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[hsl(var(--border-light-strong))] bg-white px-5 py-3 text-sm font-bold text-on-light transition hover:bg-[hsl(var(--surface-light-100))]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Use the contact form
              </Link>
            </div>
          </motion.div>

          {/* Soham bio */}
          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0.08)}
            className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start"
          >
            <blockquote className="rounded-3xl border border-[hsl(var(--border-light))] bg-white p-6 shadow-[0_18px_46px_hsl(var(--brand-navy-950)/0.06)] sm:p-8">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[hsl(var(--brand-purple-700))]">
                Who is Soham Kakade?
              </p>
              <p className="text-sm leading-[1.88] text-on-light-secondary sm:text-base">
                {ENTITY_PARAGRAPH_B}
              </p>
            </blockquote>

            <div className="flex flex-col gap-4">
              <motion.figure
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
              >
                <img
                  src="/Soham-Sir.jpg"
                  alt="Soham Kakade"
                  className="w-full rounded-2xl object-cover object-[center_20%] shadow-[0_18px_46px_hsl(var(--brand-navy-950)/0.14)] lg:h-64"
                />
              </motion.figure>
              <div className="rounded-2xl border border-[hsl(var(--border-light))] bg-white p-5 text-center shadow-[0_8px_24px_hsl(var(--brand-navy-950)/0.05)]">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))]">
                  Founder & CEO
                </p>
                <p className="mt-1 font-serif text-xl font-bold text-on-light">Soham Kakade</p>
                <p className="mt-2 text-xs leading-relaxed text-on-light-muted">UVAN · Pune, India</p>
              </div>
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
