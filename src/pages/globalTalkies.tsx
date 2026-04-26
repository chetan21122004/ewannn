import { ArrowRight, Captions, CheckCircle2, Languages, Mic2, Waves } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const coreSolutions = [
  {
    title: "Subtitling & SDH",
    description:
      "Frame-accurate subtitle synchronization, including adaptation for the deaf and hard of hearing (SDH).",
    icon: Captions,
  },
  {
    title: "Dubbing & VO",
    description:
      "Lip-sync dubbing, UN-style voice-over, and creative audio post-production with native-language voice talent.",
    icon: Mic2,
  },
  {
    title: "Metadata & CMS",
    description:
      "Localization for descriptions, tags, and metadata pipelines across streaming platforms and VOD ecosystems.",
    icon: Languages,
  },
];

const corridors = [
  { title: "Hollywood ↔ MENA", text: "The industry benchmark for Arabic localization.", border: "border-[hsl(var(--brand-gold-500))]" },
  { title: "Europe ↔ South Asia", text: "Scaled pipelines for Hindi, Tamil, and Bengali catalogs.", border: "border-[hsl(var(--brand-purple-500))]" },
  { title: "East Asia ↔ Global", text: "Bridging K-content and anime storytelling to international audiences.", border: "border-[#9f96ba]" },
];

const GlobalTalkies = () => {
  return (
    <PageLayout
      title="Global Talkies | Media Localization & Dubbing | Ewan"
      description="Global Talkies by Ewan delivers subtitle, dubbing, voice, metadata, and script adaptation services for global media and OTT distribution."
      canonicalPath="/global-talkies/"
    >
      <section className="relative overflow-hidden bg-[hsl(var(--brand-navy-950))] px-6 pb-24 pt-12 text-white">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 20% 30%, hsl(var(--brand-purple-500)/0.32) 0%, transparent 52%), radial-gradient(circle at 80% 70%, hsl(var(--brand-navy-950)) 0%, transparent 52%)",
          }}
        />
        <div className="pointer-events-none absolute bottom-20 right-0 h-32 w-[44rem] rotate-12 bg-gradient-to-r from-transparent via-[hsl(var(--brand-gold-500)/0.16)] to-transparent blur-3xl" />

        <div className="container relative mx-auto">
          <div className="grid items-center gap-14 lg:grid-cols-[3fr_2fr]">
            <div>
              <p className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]">
                <span className="h-2 w-2 animate-ping rounded-full bg-[hsl(var(--brand-gold-500))]" />
                Global Talkies Division
              </p>
              <h1 className="font-serif text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                Media Beyond <br />
                <span className="text-[hsl(var(--brand-gold-500))]">Boundaries.</span>
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/78">
                A futuristic ecosystem where content transcends language. High-fidelity localization for the next era
                of cinematic storytelling.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="mailto:info@ewan.co.in?subject=Global%20Talkies%20Media%20Project"
                  className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-7 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
                >
                  Start Your Media Project
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  to="/media"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-white/92 transition hover:bg-white/10"
                >
                  Explore Reel
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-[0_22px_60px_rgba(6,3,20,0.55)]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKurD57EdDta90oRUlAOCphtLrPNGddbCY_fsXZ2LlGggT5lX-fpilKQ7ybCHwCJG1qBeao3R61_qL0FIZKEr35_6oIIxyuHMZOlYIk9kmGMwU1PfsfHDpljZHfh73926foWJjd4-oVVJaYdaNE5WmxYHxcenV6F03bsgIJUUFA08FvkLUu__nZ89m_jpOE5WDGiu5D8PN7uHO1EUkNI_UraDkr5YY_0fkc01zbok1se4siE-yg6cg_danzcTiCynfa2SMqYkMFIY"
                  alt="Cinematic production studio with glowing audio monitors and editing controls"
                  className="h-full w-full object-cover grayscale transition duration-700 hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-[hsl(var(--brand-navy-950)/0.35)] mix-blend-multiply" />
                <div className="absolute bottom-8 left-1/2 w-[82%] -translate-x-1/2 rounded-xl border border-white/10 bg-black/60 p-4 text-center backdrop-blur-md">
                  <p className="text-sm italic text-white/90">[ Cinematic Music Swells ]</p>
                  <p className="font-serif text-lg font-bold text-[hsl(var(--brand-gold-500))]">The world is listening.</p>
                </div>
              </div>
              <div className="absolute -right-6 -top-6 hidden rounded-2xl bg-white p-5 text-[#1f1b3f] shadow-xl xl:block">
                <div className="mb-2 flex items-center gap-2">
                  <Waves className="h-4 w-4 text-[hsl(var(--brand-gold-500))]" />
                  <span className="text-xs font-bold uppercase tracking-wide">Voice Match AI</span>
                </div>
                <div className="h-1.5 w-32 overflow-hidden rounded-full bg-[#ece7f6]">
                  <div className="h-full w-3/4 bg-[hsl(var(--brand-gold-500))]" />
                </div>
                <p className="mt-2 text-[10px] font-semibold tracking-wider">SYNC: 99.98% COMPLETE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fcf8ff] px-6 py-24">
        <div className="container mx-auto grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-gold-500))]">01 / The Vision</p>
            <h2 className="mt-4 font-serif text-5xl font-bold leading-tight text-[#1f1b3f]">
              Voice of <br /> the World.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#4b4566]">
              Global Talkies is not just a localization service, it is a bridge between cultures. We capture the soul
              of your story and adapt it for 120+ languages without losing emotional depth.
            </p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#4b4566]">
              Our methodology combines linguistic craft and production-grade workflow controls, preserving nuance from
              dialect to pacing to performance intent.
            </p>
            <div className="mt-10 flex gap-10">
              <div>
                <p className="font-serif text-4xl font-bold text-[#1f1b3f]">120+</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#6f688b]">Languages</p>
              </div>
              <div>
                <p className="font-serif text-4xl font-bold text-[#1f1b3f]">50k+</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#6f688b]">Hours Dubbed</p>
              </div>
            </div>
          </div>

          <div className="relative grid grid-cols-2 gap-5">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp3et_UVPRpJcBPQH4xm9epkLmW1AUTNWc9GgZYmA4MxSmVv9moWTDwQBil6Hyn2S349YS-tpV3lWiFo9jTwSu_TJyndWGPHqYzd9WFFU5hI2u4KLz2nhv2Eq3Jau-wa1bH6xLjQbVbbO2rkYAAxIn_i_3WKxQd_wfU4kVWQj3yzz1AKMZHWZwDQXHWXuJxhgwDb-GFwdhoJNq3qvnNtvDRzx5jXYsSBuuB3lvkuBY5Y_i0Ni3TYhvTERAEhmJL7RF4BhXVhxnQxg"
              alt="Microphone in a soundproof vocal booth"
              className="mt-12 h-[360px] w-full rounded-2xl object-cover shadow-lg"
            />
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzIZDLjf5XexPbKhkTJJQquQGAsCTcnaHPiRcDZWbMXC4FUogc5b5uv7HuT8k3JoT5-XQi-p1WIp4WBi36R78MNeGRTeRo29NN7bWfBCx_fhY35o8z9GEL3f6ETdlj_Zi4fmCsH2VoW64CS563X9Ec9QCU1d2T1BvJG-ISzR82wl2ygWdqvSGJt9scFboLFheqWgwgm6t-J2MIuZv5bSjKWmQuX-CmBJBec6AenkcQMX2kXgIouZRlk8yi1eLdM31yllR4-YO6q3U"
              alt="Cinema display with vibrant projected colors"
              className="mb-12 h-[360px] w-full rounded-2xl object-cover shadow-lg"
            />
            <div className="absolute -bottom-6 -left-4 max-w-[250px] rounded-2xl bg-[#3b1f4b] p-6 text-white shadow-xl">
              <p className="text-sm leading-relaxed">
                Seamless cultural adaptation for Asian, European, and MENA markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f2ff] px-6 py-24">
        <div className="container mx-auto">
          <div className="mb-14 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-gold-500))]">02 / Technical Mastery</p>
            <h2 className="mt-4 font-serif text-5xl font-bold text-[#1f1b3f]">Core Media Solutions</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {coreSolutions.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="group relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-3xl border border-[#e7e1f3] bg-white p-8 transition hover:-translate-y-1 hover:bg-[#2a103c] hover:text-white"
                >
                  <div>
                    <div className="mb-6 inline-flex rounded-2xl bg-[#f0ebfb] p-3 transition group-hover:bg-white/10">
                      <Icon className="h-6 w-6 text-[#2a103c] group-hover:text-[hsl(var(--brand-gold-500))]" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#4b4566] group-hover:text-white/75">{item.description}</p>
                  </div>
                  <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#2a103c] group-hover:text-[hsl(var(--brand-gold-500))]">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-8 grid overflow-hidden rounded-3xl border border-[#e7e1f3] bg-white md:grid-cols-2">
            <div className="p-9">
              <h3 className="font-serif text-3xl font-bold text-[#1f1b3f]">Script Adaptation</h3>
              <p className="mt-4 text-base leading-relaxed text-[#4b4566]">
                Localization is more than translation. It is transcreation. Our script experts adapt humor, idioms,
                and cultural references so your story lands authentically in every territory.
              </p>
              <div className="mt-6 space-y-3">
                {["Nuanced Cultural Sensitivity", "Dialect-Specific Adaptation"].map((point) => (
                  <p key={point} className="flex items-center gap-2 text-sm font-medium text-[#2a103c]">
                    <CheckCircle2 className="h-4 w-4 text-[hsl(var(--brand-gold-500))]" />
                    {point}
                  </p>
                ))}
              </div>
            </div>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0GvZuaIWPkUPnlcDQNC9cP7zi8QX5aw1zwm34eoHy8ZE5idWIpT9_rnNYcJRSjUPtHtXHVRnyRGyoYs89eMIV3u7pu71ykJZFsMqgeux6smFIoRGraCguYzHvVHz6UnI0fTcdjTjwZO_yzUDN7pJghu04C0VZsQgMlzrnSC46agtq2LJRFIfhjbR4Hbaf9dS9cG1X7ZENWHHilx8DNtw3t2uTq4FaUS_cpVLzzPgrjWSlfM_zK92C8T_CINkXbsjlaxrRpuTBU84"
              alt="Annotated script on an editor's desk"
              className="h-full min-h-[280px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white px-6 py-24">
        <div className="container mx-auto grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-gold-500))]">03 / Strategic Routes</p>
            <h2 className="mt-4 font-serif text-5xl font-bold leading-tight text-[#1f1b3f]">Language Corridors</h2>
            <p className="mt-6 text-lg leading-relaxed text-[#4b4566]">
              Optimized media workflows across key global corridors, reducing turnaround times while retaining narrative fidelity.
            </p>
            <div className="mt-8 space-y-4">
              {corridors.map((item) => (
                <article key={item.title} className={`rounded-2xl border-l-4 bg-[#f5f2ff] p-5 ${item.border}`}>
                  <h3 className="font-semibold text-[#1f1b3f]">{item.title}</h3>
                  <p className="mt-1 text-sm text-[#4b4566]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-[#2a103c]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBog5K-bymbCXMJHFfW2iP6lkklg_LJyKvQsxzkqOvIOeZzcGDnLz9o-JBrTa-yhLANweO3-cPf5KD8qxV2nrIf5Yv_84NKSI0cGKIvF9s4akoLihuH0IrTYl03RCFWVq-tfXHloTzVtkeN49PPUxzCq_V7Ac5EduJDzfT0CnKJUqCxRJhhrEi5_HArjpzxZuEiFXD454ZZlIEbMicHAsGevwI4_eEZaGtC8jXDh73ob2N8C8g6kGaSxzfJXiZac023foS0kDthtys"
              alt="Abstract digital world map with glowing connections"
              className="h-full w-full object-cover opacity-45 mix-blend-screen"
            />
            <div className="absolute left-[20%] top-[30%] h-4 w-4 rounded-full bg-[hsl(var(--brand-gold-500))]">
              <div className="absolute inset-0 animate-ping rounded-full bg-[hsl(var(--brand-gold-500))]" />
            </div>
            <div className="absolute left-[50%] top-[42%] h-4 w-4 rounded-full bg-white">
              <div className="absolute inset-0 animate-ping rounded-full bg-white" />
            </div>
            <div className="absolute left-[80%] top-[62%] h-4 w-4 rounded-full bg-[hsl(var(--brand-gold-500))]">
              <div className="absolute inset-0 animate-ping rounded-full bg-[hsl(var(--brand-gold-500))]" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="max-w-sm rounded-3xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-xl">
                <p className="font-mono text-4xl font-bold text-[hsl(var(--brand-gold-500))]">LIVE</p>
                <p className="mt-2 text-sm leading-relaxed text-white/86">
                  Active pipeline monitoring for 450+ concurrent media localization streams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fcf8ff] px-6 pb-20 pt-8">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-[#3b1f4b] p-12 text-center text-white md:p-16">
            <h2 className="font-serif text-4xl font-bold md:text-5xl">Ready to Take Your Story Global?</h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/82">
              Join leading studios, OTT platforms, and production teams delivering consistent viewing experiences
              across languages and regions.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:info@ewan.co.in?subject=Global%20Talkies%20Media%20Project"
                className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-8 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
              >
                Start Your Media Project
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/ask-soham"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Talk to an Expert
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GlobalTalkies;