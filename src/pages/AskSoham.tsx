import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Globe2,
  Map,
  MessageCircle,
  SearchCheck,
  Sparkles,
  Video,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { useTranslation } from "react-i18next";

const BOOKING_URL = "https://calendly.com";

const tracks = [
  {
    icon: SearchCheck,
    title: "Market Entry & Cross-Border Expansion",
    description:
      "For companies exploring India entry, Indian firms going abroad, executives evaluating corridors. You'll get a clear picture of the actual complexity involved, what Ewan has done in your sector, and whether we're the right partner for your expansion.",
    points: ["Regulatory gap and complexity assessment", "Corridor-specific experience and proof"],
  },
  {
    icon: Globe2,
    title: "Language Strategy & Localization",
    description:
      "For marketing managers, procurement leads, or businesses evaluating language service needs. You'll get guidance on what kind of service fits your use case, how to evaluate quality, and a straight answer on whether Ewan can help.",
    points: ["Service fit assessment for your use case", "Quality evaluation framework"],
  },
  {
    icon: Map,
    title: "Language Career & Industry Guidance",
    description:
      "For students, freelancers, and emerging professionals exploring careers in languages, interpretation, or cross-cultural work. You'll get Soham's honest perspective on the industry, which corridors have the most opportunity, and where to focus.",
    points: ["Industry reality and career pathways", "High-opportunity corridor identification"],
  },
];

const AskSoham = () => {
  const { t } = useTranslation();

  return (
    <PageLayout
      title={t("seo.askSoham.title")}
      description={t("seo.askSoham.description")}
      canonicalPath="/ask-soham/"
    >
      <section className="relative overflow-hidden px-6 pb-20 pt-10">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 78% 20%, hsl(var(--brand-purple-500) / 0.18) 0%, transparent 34%), radial-gradient(circle at 22% 82%, hsl(var(--brand-cyan-500) / 0.08) 0%, transparent 42%)",
          }}
        />
        <div className="container relative mx-auto">
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
                Whether you're a company entering India, a business expanding abroad, a professional navigating
                language services, or a student wondering whether a career in languages is right for you - book 15
                minutes with Soham Kakade for focused, honest, experience-based guidance.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-7 py-3.5 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:scale-[1.02] hover:brightness-105"
                >
                  Book Your 15-Min Free Session
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <p className="text-sm text-foreground/65">Google Meet or Zoom. Pune, India (IST).</p>
              </div>
            </div>
            <div className="relative lg:col-span-5">
              <div className="relative overflow-hidden rounded-[2.25rem] border border-[hsl(var(--surface-glass)/0.24)] shadow-[0_28px_70px_hsl(var(--surface-1)/0.35)]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5f0Li3dw-gYHfnh1gEw6HnfKnPKcxehbmQNIq6fnXKvmQk0paeV5qjXizpcA0wAigT5AWpu_QFgpzx5ENRHls2SSWRvdo-Zo9KcLdHYEm_OGyQzBvoXDrrGlrHw6vlmvNBuYUwAlGUQ5QGzYa3sKvPN86Jt4HJdfl99qS95Xsy0EGB50J5kIe0KK2yMTx0fa0B6bVojtot-YlJZeRMcbvZVbTUPVaYhdKSgl6C0lBwhM7SssrGB_cnr0U4UQrOjx0ICElzUEKfCQ"
                  alt="Modern glass architecture visual"
                  className="h-full min-h-[460px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--brand-navy-950)/0.4)] to-transparent" />
                <div className="absolute left-5 top-5 rounded-2xl border border-white/30 bg-white/15 p-4 text-white backdrop-blur-md">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/70">Architecture Node</p>
                  <p className="text-sm font-semibold">L-04 // Strategy</p>
                </div>
                <div className="absolute bottom-5 right-5 rounded-full border border-white/40 bg-white/20 p-4 text-white backdrop-blur-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em]">Market Entropy</p>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-4 rounded-3xl border border-[hsl(var(--surface-glass)/0.18)] bg-white p-5 shadow-[0_16px_40px_hsl(var(--surface-1)/0.2)] sm:-left-8">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-[hsl(var(--brand-purple-500)/0.13)] p-2 text-[hsl(var(--brand-purple-500))]">
                    <Globe2 className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[hsl(var(--brand-navy-950))]">Global Link</p>
                    <p className="text-xs text-foreground/60">Active deployment</p>
                  </div>
                </div>
                <div className="mt-3 h-1.5 w-40 rounded-full bg-[hsl(var(--surface-2))]">
                  <div className="h-full w-[85%] rounded-full bg-[hsl(var(--brand-gold-500))]" />
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
            <p className="mt-3 text-sm leading-relaxed text-foreground/72 sm:text-base">
              Each 15-minute call is structured around your specific situation. Pick the track that fits.
            </p>
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
                <ul className="mt-5 space-y-2">
                  {track.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-[hsl(var(--brand-navy-950)/0.9)]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-gold-500))]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What This Call Is Not */}
      <section className="bg-[#ffffff] px-6 py-12">
        <div className="container mx-auto">
          <div className="rounded-3xl border border-[hsl(var(--surface-glass)/0.2)] bg-[#f7f5ff] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-500)/0.88)]">Important</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-[hsl(var(--brand-navy-950))]">What This Call Is Not</h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-foreground/75">
              This is not a sales call. Soham will not pitch Ewan services unless asked. This call is designed to give
              you 15 minutes of focused, honest guidance from someone who has actually spent 10 years inside the
              corridors you're trying to navigate. If Ewan is not the right fit, Soham will tell you.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[hsl(var(--surface-glass)/0.08)] bg-[hsl(var(--surface-2))] px-6 py-16">
        <div className="container mx-auto grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/5] max-h-[min(560px,70vh)] overflow-hidden rounded-[2.25rem] border border-[hsl(var(--surface-glass)/0.22)] shadow-[0_20px_50px_hsl(var(--surface-1)/0.2)] sm:aspect-[3/4] lg:max-h-none lg:min-h-[460px] lg:aspect-auto">
            <img
              src="/Soham-Sir.jpg"
              alt="Soham Kakade, Founder of Ewan Business Solutions"
              className="h-full min-h-[280px] w-full object-cover object-[center_20%] sm:min-h-[360px] lg:min-h-[460px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--brand-navy-950)/0.75)] to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="font-serif text-3xl font-bold">Soham Kakade</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[hsl(var(--brand-gold-500))]">
                Founder & CEO
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-serif text-4xl font-bold text-[hsl(var(--text-primary))]">About Soham</h2>
            <p className="mt-4 text-sm leading-relaxed text-[hsl(var(--text-secondary))] sm:text-base">
              Soham Kakade is the founder of Ewan Business Solutions. 60,000+ hours of simultaneous interpretation.
              Full Chinese Government scholarship (BLCU). VP CITLoB. Bhashini Initiative. MSAMB Export Program
              Designer. Symbiosis Faculty. IB Board Curriculum Designer.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[hsl(var(--text-secondary))] sm:text-base">
              When you book this call, you're talking to someone who has actually been in the room.
            </p>
            <div className="mt-7 grid gap-4 border-t border-[hsl(var(--surface-glass)/0.16)] pt-6 sm:grid-cols-2">
              {[
                ["60,000+", "Interpretation Hours"],
                ["250+", "Clients Supported"],
                ["125+", "Languages Enabled"],
                ["10+", "Years in Cross-Border Rooms"],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="text-3xl font-bold text-[hsl(var(--text-primary))]">{value}</p>
                  <p className="text-xs uppercase tracking-[0.14em] text-[hsl(var(--text-muted))]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pb-16 pt-12">
        <div className="container mx-auto">
          <div className="mb-8 text-center">
            <h2 className="font-serif text-4xl font-bold text-[hsl(var(--brand-navy-950))] sm:text-5xl">
              Select Your Window
            </h2>
            <p className="mt-3 text-sm text-foreground/70 sm:text-base">Real-time availability for a focused 15-minute consult.</p>
          </div>
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.25rem] border border-[hsl(var(--surface-glass)/0.18)] bg-[hsl(var(--surface-2)/0.35)] shadow-[0_30px_75px_hsl(var(--surface-1)/0.15)]">
            <div className="grid md:grid-cols-[320px,1fr]">
              <div className="flex flex-col justify-between bg-[hsl(var(--brand-navy-950))] p-8 text-white">
                <div>
                  <h3 className="text-lg font-semibold">Ask Soham</h3>
                  <p className="mt-1 font-serif text-2xl font-bold">15 Min Strategy Sprint</p>
                  <div className="mt-6 space-y-3 text-sm text-white/70">
                    <p className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4" />
                      15 minutes
                    </p>
                    <p className="flex items-center gap-2">
                      <Video className="h-4 w-4" />
                      Video call
                    </p>
                  </div>
                </div>
                <p className="text-xs leading-relaxed text-white/60">
                  All sessions are confidential and centered on one high-value question.
                </p>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-[hsl(var(--brand-navy-950))]">October 2026</h4>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      aria-label="Previous month"
                      className="rounded-full border border-[hsl(var(--surface-glass)/0.3)] p-2 text-foreground/70"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      aria-label="Next month"
                      className="rounded-full border border-[hsl(var(--surface-glass)/0.3)] p-2 text-foreground/70"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-7 gap-2 text-center text-[10px] font-semibold uppercase tracking-[0.08em] text-foreground/55">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                    <p key={day}>{day}</p>
                  ))}
                </div>
                <div className="mt-3 grid grid-cols-7 gap-2 text-center">
                  {[28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((date) => (
                    <button
                      key={date}
                      type="button"
                      className={`aspect-square rounded-lg text-sm font-semibold transition ${
                        date === 7
                          ? "bg-[hsl(var(--brand-gold-500))] text-[hsl(var(--brand-navy-950))]"
                          : "text-[hsl(var(--brand-navy-950)/0.85)] hover:bg-[hsl(var(--surface-2))]"
                      }`}
                    >
                      {date}
                    </button>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-[hsl(var(--surface-glass)/0.24)] pt-6">
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
                  >
                    View Available Times
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
            </div>
          </div>
          <div className="mt-8 grid gap-3 rounded-2xl border border-[hsl(var(--surface-glass)/0.18)] bg-[hsl(var(--surface-2)/0.5)] p-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "60,000+ Hours Interpretation",
              "250+ Clients",
              "125+ Languages",
              "ISO 9001:2015 Certified",
              "Market Entry Mandates Delivered",
              "Recognised by Consulate General of the PRC",
            ].map((item) => (
              <p key={item} className="text-center text-xs font-semibold uppercase tracking-[0.1em] text-foreground/72">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AskSoham;
