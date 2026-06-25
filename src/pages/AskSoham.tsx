import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Globe2, Map, MessageCircle, SearchCheck, Sparkles } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AeoFrequentlyAskedQuestions from "@/components/AeoFrequentlyAskedQuestions";
import { ASK_SOHAM_FAQS, ENTITY_PARAGRAPH_B } from "@/data/aeoContent";
import { absoluteUrl, faqPageSchema, personSoham, serviceSchema } from "@/lib/schemaHelpers";
import { useTranslation } from "react-i18next";

const BOOKING_SCHEDULING_URL = import.meta.env.VITE_CALENDLY_SCHEDULING_URL ?? "https://calendly.com";
const BOOKING_EMBED_URL = `${BOOKING_SCHEDULING_URL.replace(/\?.*$/, "").replace(/\/$/, "")}?embed=true`;
const BOOKING_WIDGET_ID = "booking-widget";

const ASK_SOHAM_KEYWORDS =
  "talk to language expert, India market entry consultation free, Soham Kakade UVAN";

const tracks = [
  {
    icon: SearchCheck,
    title: "Market Entry & Cross-Border Expansion",
    description:
      "For companies exploring India entry, Indian firms going abroad, executives evaluating corridors. You'll get a clear picture of the actual complexity involved, what UVAN has done in your sector, and whether we're the right partner for your expansion.",
  },
  {
    icon: Globe2,
    title: "Language Strategy & Localization",
    description:
      "For marketing managers, procurement leads, or businesses evaluating language service needs. You'll get guidance on what kind of service fits your use case, how to evaluate quality, and a straight answer on whether UVAN can help.",
  },
  {
    icon: Map,
    title: "Language Career & Industry Guidance",
    description:
      "For students, freelancers, and emerging professionals exploring careers in languages, interpretation, or cross-cultural work. You'll get Soham's honest perspective on the industry, which corridors have the most opportunity, and where to focus.",
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

  return (
    <PageLayout
      title={t("seo.askSoham.title")}
      description={t("seo.askSoham.description")}
      canonicalPath="/ask-soham/"
      keywords={ASK_SOHAM_KEYWORDS}
      jsonLd={askSohamLd}
    >
      <section className="relative overflow-hidden px-6 pb-20 pt-10">
        {/* Section Background Blob */}
        <div 
          className="absolute inset-0 z-0 opacity-15 mix-blend-multiply bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: "url('/bg-blobs/abstract-purple-fluid-wave-background-free-vector.jpg')" }}
        />
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background:
              "radial-gradient(circle at 78% 20%, hsl(var(--brand-purple-500) / 0.18) 0%, transparent 34%), radial-gradient(circle at 22% 82%, hsl(var(--brand-cyan-500) / 0.08) 0%, transparent 42%)",
          }}
        />

        {/* Transparent Calling Doodle */}
        <motion.img
          src="/doodles/Calling-amico.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-10 left-4 hidden h-64 w-64 opacity-[0.12] lg:block z-0"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container relative z-20 mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--surface-glass)/0.24)] bg-[hsl(var(--surface-glass)/0.1)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-500)/0.92)]">
                <Sparkles className="h-3.5 w-3.5" />
                Free. 15 Minutes. No Pitch.
              </p>
              <h1 className="max-w-4xl font-serif text-5xl font-bold leading-[0.95] text-[hsl(var(--brand-navy-950))] sm:text-6xl lg:text-7xl">
                Ask <span className="text-[hsl(var(--brand-gold-500))]">Soham.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg">
                Whether you&apos;re a company entering India, a business expanding abroad, a professional navigating
                language services, or a student wondering whether a career in languages is right for you - book 15
                minutes with Soham Kakade for focused, honest, experience-based guidance.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={`#${BOOKING_WIDGET_ID}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-7 py-3.5 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:scale-[1.02] hover:brightness-105"
                >
                  Book Your Free 15-Minute Call
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="relative lg:col-span-5">
              <div className="relative overflow-hidden rounded-[2.25rem] border border-[hsl(var(--surface-glass)/0.24)] shadow-[0_28px_70px_hsl(var(--surface-1)/0.35)]">
                <img
                  src="/Soham-Sir.jpg"
                  alt="Soham Kakade, Founder of UVAN"
                  className="h-full min-h-[460px] w-full object-cover object-[center_20%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--brand-navy-950)/0.55)] to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--brand-gold-500))]">
                    Founder & CEO
                  </p>
                  <p className="mt-1 font-serif text-2xl font-bold">Soham Kakade</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5ff] px-6 py-16">
        <div className="container mx-auto">
          <div className="mb-10 max-w-3xl">
            <h2 className="font-serif text-4xl font-bold text-[hsl(var(--brand-navy-950))] sm:text-5xl">
              Three Tracks - Who This Is For
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {tracks.map((track) => (
              <article
                key={track.title}
                className="rounded-[2rem] border border-[hsl(var(--surface-glass)/0.2)] bg-white p-7 shadow-[0_16px_36px_hsl(var(--surface-1)/0.14)]"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-[hsl(var(--surface-2))] p-3 text-[hsl(var(--brand-purple-500))]">
                  <track.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[hsl(var(--brand-navy-950))]">{track.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/72">{track.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#ffffff] px-6 py-12">
        <div className="container mx-auto">
          <div className="rounded-3xl border border-[hsl(var(--surface-glass)/0.2)] bg-[#f7f5ff] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-500)/0.88)]">
              Important
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-[hsl(var(--brand-navy-950))]">What This Call Is Not</h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-foreground/75">
              This is not a sales call. Soham will not pitch UVAN services unless asked. This call is designed to give
              you 15 minutes of focused, honest guidance from someone who has actually spent 10 years inside the
              corridors you&apos;re trying to navigate. If UVAN is not the right fit, Soham will tell you.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[hsl(var(--surface-glass)/0.08)] bg-[hsl(var(--surface-2))] px-6 py-16">
        <div className="container mx-auto grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/5] max-h-[min(560px,70vh)] overflow-hidden rounded-[2.25rem] border border-[hsl(var(--surface-glass)/0.22)] shadow-[0_20px_50px_hsl(var(--surface-1)/0.2)] sm:aspect-[3/4] lg:max-h-none lg:min-h-[460px] lg:aspect-auto">
            <img
              src="/Soham-Sir.jpg"
              alt="Soham Kakade, Founder of UVAN"
              className="h-full min-h-[280px] w-full object-cover object-[center_20%] sm:min-h-[360px] lg:min-h-[460px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--brand-navy-950)/0.75)] to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="font-serif text-3xl font-bold">Soham Kakade</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[hsl(var(--brand-gold-500))]">Founder & CEO</p>
            </div>
          </div>
          <div>
            <h2 className="font-serif text-4xl font-bold text-[hsl(var(--text-primary))]">About Soham</h2>
            <p className="mt-4 text-sm leading-relaxed text-[hsl(var(--text-secondary))] sm:text-base">
              When you book this call, you&apos;re scheduling time with someone who has spent years in the room where
              languages, markets, and institutions meet - not a sales representative.
            </p>
          </div>
        </div>
      </section>

      <section id={BOOKING_WIDGET_ID} className="scroll-mt-28 bg-white px-6 pb-16 pt-12">
        <div className="container mx-auto">
          <blockquote className="mx-auto mb-10 max-w-3xl rounded-2xl border border-[hsl(var(--surface-glass)/0.2)] bg-[hsl(var(--surface-2)/0.45)] px-6 py-5 text-left text-sm leading-relaxed text-[hsl(var(--brand-navy-950)/0.92)] sm:text-base">
            {ENTITY_PARAGRAPH_B}
          </blockquote>
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h2 className="font-serif text-4xl font-bold text-[hsl(var(--brand-navy-950))] sm:text-5xl">
              Choose a Time That Works For You
            </h2>
            <p className="mt-3 text-sm text-foreground/70 sm:text-base">
              All calls via Google Meet or Zoom. Confirmation and link sent immediately on booking.
            </p>
            <p className="mt-2 text-sm text-foreground/65 sm:text-base">
              Soham is based in Pune, India (IST). Slots available across time zones for international callers.
            </p>
          </div>

          <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.25rem] border border-[hsl(var(--surface-glass)/0.18)] bg-[hsl(var(--surface-2)/0.35)] shadow-[0_30px_75px_hsl(var(--surface-1)/0.15)]">
            <div className="border-b border-[hsl(var(--surface-glass)/0.18)] bg-white px-6 py-5 sm:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-500)/0.88)]">
                Before You Book
              </p>
              <p className="mt-2 text-sm text-foreground/75">
                Calendly will ask for the details below so Soham can prepare for a focused 15-minute call.
              </p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {preBookingQuestions.map((question) => (
                  <li key={question} className="flex items-start gap-2 text-sm text-[hsl(var(--brand-navy-950)/0.9)]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-gold-500))]" />
                    <span>{question}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white">
              <iframe
                title="Book a free 15-minute call with Soham Kakade on Calendly"
                src={BOOKING_EMBED_URL}
                className="min-h-[760px] w-full border-0"
                loading="lazy"
              />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 border-t border-[hsl(var(--surface-glass)/0.18)] bg-white px-6 py-5">
              <a
                href={BOOKING_SCHEDULING_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
              >
                Open Calendly in a New Tab
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:info@ewan.co.in"
                className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--surface-glass)/0.3)] px-5 py-3 text-sm font-medium text-foreground/85 transition hover:border-[hsl(var(--brand-purple-500)/0.5)]"
              >
                <MessageCircle className="h-4 w-4" />
                Prefer email? info@ewan.co.in
              </a>
            </div>
          </div>

          <div className="mt-8 grid gap-3 rounded-2xl border border-[hsl(var(--surface-glass)/0.18)] bg-[hsl(var(--surface-2)/0.5)] p-5 sm:grid-cols-2 lg:grid-cols-3">
            {trustBarItems.map((item) => (
              <p key={item} className="text-center text-xs font-semibold uppercase tracking-[0.1em] text-foreground/72">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <AeoFrequentlyAskedQuestions items={ASK_SOHAM_FAQS} className="bg-[#f7f5ff] px-6 py-16" />
    </PageLayout>
  );
};

export default AskSoham;
