import { ArrowRight, CheckCircle2, Globe2, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import SectionDivider from "@/components/SectionDivider";

const metrics = [
  { value: "5+", label: "Years in Operation" },
  { value: "125+", label: "Languages" },
  { value: "250+", label: "Global Clients" },
  { value: "10+", label: "Sectors Served" },
];

const languageGroups = [
  { name: "Chinese (Mandarin)", speakers: "929 million", desc: "Based on the Beijing dialect, widely spoken in northern China." },
  { name: "Japanese", speakers: "128 million", desc: "The de-facto official language of Japan." },
  { name: "Taiwanese", speakers: "23.6 million", desc: "Traditionally the most widely spoken language in Taiwan." },
  { name: "Cantonese", speakers: "80 million", desc: "Official language of Hong Kong and Macau." },
  { name: "Korean", speakers: "80 million", desc: "Native language of South Korea with its own unique alphabet." },
  { name: "Bahasa (Indonesian/Malay)", speakers: "590 million", desc: "Official languages of Indonesia and Malaysia." },
  { name: "Filipino & Tagalog", speakers: "139 million", desc: "National and official languages of the Philippines." },
  { name: "Vietnamese", speakers: "70 million", desc: "National and official language of Vietnam." },
];

const institutionalRecognitions = [
  "Recognised by the Consulate General of the People's Republic of China - formal letter acknowledging contribution to India-China agricultural and trade relations, benefiting 1,200+ farmers and 800+ hectares of farmland.",
  "MSAMB Government of Maharashtra - Export Program Empanelment",
  "Bhashini Initiative - Ministry of Electronics & IT (MeitY), Government of India",
  "CITLoB - Confederation of Indian Translators and Language Professionals (Vice President)",
  "Symbiosis International University - Faculty",
  "IB Board - International Baccalaureate Curriculum Designer",
];

const partners = [
  {
    name: "Bhashini - MeitY, Government of India",
    description:
      "India's national language technology initiative. Our partnership with Bhashini aligns Ewan with the country's most significant investment in multilingual AI - strengthening our language technology capabilities and our institutional standing.",
  },
  {
    name: "Tattava CX",
    description:
      "Strategic communications and customer experience partner. Tattava CX brings expertise in brand communication, client experience design, and strategic messaging - complementing Ewan's cross-border language and market entry work.",
  },
  {
    name: "Bhashik Skill Development - Sister Institution",
    description:
      "Bhashik Skill Development (bhashikskill.co.in) is Ewan's sister institution - a skill development organisation focused on language training, commerce education, and vocational upskilling across 125+ languages.",
    link: "https://bhashikskill.co.in",
  },
];

const doodleCorner = "/stitch/about-us/doodle-arc-corner.svg";
const doodleSquiggle = "/stitch/about-us/doodle-squiggle-right.svg";
const doodleBridge = "/stitch/about-us/doodle-bridge-wave.svg";
const doodleDots = "/stitch/about-us/doodle-dot-field.svg";

const AboutUs = () => {
  return (
    <PageLayout
      title="About Ewan Business Solutions | Cross-Border Market Partner India"
      description="Ewan Business Solutions - 5 years, 250+ clients, 125+ languages. Founded by Soham Kakade. Cross-border market entry and language services for the India-Asia corridor."
      canonicalPath="/about-us/"
    >
      {/* Hero */}
      <section
        id="about-ewan"
        className="relative overflow-hidden stitch-line stitch-line-bottom bg-[hsl(var(--brand-navy-950))] px-6 pb-28 pt-6 md:pb-36 md:pt-10"
      >
        <div
          className="absolute inset-0 z-0 opacity-[0.32] md:opacity-40"
          style={{
            backgroundImage: "url('/page-assets/about-ewan-aboutus.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_90%_60%_at_18%_18%,hsl(var(--brand-purple-700)/0.18),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_88%_72%,hsl(var(--brand-gold-500)/0.1),transparent_42%)]" />
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-[hsl(var(--brand-navy-950)/0.38)] via-[hsl(var(--brand-navy-950)/0.82)] to-[hsl(var(--brand-navy-950))]" />

        <img
          src={doodleCorner}
          alt=""
          className="pointer-events-none absolute -left-4 top-16 z-[1] h-40 w-40 select-none opacity-70 sm:h-48 sm:w-48 md:left-2 md:top-24"
        />
        <img
          src={doodleSquiggle}
          alt=""
          className="pointer-events-none absolute -right-8 bottom-24 z-[1] hidden h-64 w-52 select-none opacity-75 md:block lg:bottom-32 lg:h-80 lg:w-64"
        />
        <img
          src={doodleDots}
          alt=""
          className="pointer-events-none absolute left-1/2 top-1/2 z-[1] h-56 w-72 -translate-x-1/2 -translate-y-[30%] select-none opacity-[0.14] sm:opacity-20"
        />

        <div className="pointer-events-none absolute left-6 top-28 hidden select-none text-4xl font-extrabold tracking-tight text-[hsl(var(--brand-purple-500)/0.14)] lg:block xl:left-12 xl:text-5xl">
          {`{"ewan":"bridge"}`}
        </div>
        <div className="pointer-events-none absolute bottom-40 right-8 hidden select-none text-[10px] font-semibold uppercase tracking-[0.28em] text-[hsl(var(--brand-gold-500)/0.2)] xl:block">
          good · bridge · two corridors
        </div>

        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-12 lg:items-start">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[hsl(var(--brand-gold-500))]">
                What does &quot;Ewan&quot; mean?
              </p>
              <h1 className="mt-6 font-serif text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-[3.35rem] xl:text-6xl xl:leading-[1.02]">
                A Bridge Connecting <br className="hidden sm:block" />
                Two Good Things.
              </h1>
              <div className="relative mt-10 max-w-xl">
                <img
                  src={doodleBridge}
                  alt=""
                  className="pointer-events-none absolute -left-4 top-full mt-4 hidden h-16 w-[min(100%,420px)] max-w-none select-none opacity-50 sm:block"
                />
                <p className="relative text-base leading-relaxed text-white/78 sm:text-lg">
                  The word &quot;Ewan&quot; is the amalgamation of the Japanese letter <strong>&quot;E&quot;</strong> meaning good and the
                  Traditional Chinese word <strong>&quot;WAN&quot;</strong> meaning bridge.
                </p>
              </div>
            </div>

            <div className="relative lg:col-span-5 lg:mt-4">
              <div className="relative mx-auto max-w-[400px] rounded-[2rem] border border-[hsl(var(--surface-glass)/0.2)] bg-[hsl(var(--surface-glass)/0.05)] p-6 backdrop-blur-md lg:mr-0 lg:ml-auto lg:max-w-none">
                <div className="pointer-events-none absolute -right-3 -top-3 h-20 w-20 rounded-full border-2 border-dashed border-[hsl(var(--brand-gold-500)/0.25)]" />
                <div className="pointer-events-none absolute -bottom-2 left-8 h-3 w-16 rounded-full bg-[hsl(var(--brand-purple-500)/0.2)] blur-sm" />
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-500))]">Live footprint</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {metrics.map((item) => (
                    <article
                      key={item.label}
                      className="rounded-2xl border border-[hsl(var(--surface-glass)/0.18)] bg-[hsl(var(--surface-glass)/0.08)] p-5 backdrop-blur-md"
                    >
                      <p className="font-serif text-2xl font-bold text-[hsl(var(--brand-gold-500))] sm:text-3xl">{item.value}</p>
                      <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70">{item.label}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" fromDark />

      {/* About the Firm */}
      <section className="theme-section-soft relative overflow-hidden px-6 py-20 md:py-24 stitch-line stitch-line-bottom">
        <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 translate-x-1/4 -translate-y-1/4 bg-[radial-gradient(circle,hsl(var(--brand-purple-500)/0.12),transparent_68%)]" />
        <img
          src={doodleDots}
          alt=""
          className="pointer-events-none absolute bottom-8 left-4 z-0 h-40 w-48 select-none opacity-[0.2] lg:left-[6%]"
        />
        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-500))]">The Firm</p>
              <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-[hsl(var(--brand-navy-950))] md:text-[2.25rem]">
                Built for the Corridors Others Don&apos;t Know.
              </h2>
              <div className="relative mt-6">
                <div className="h-1 w-20 rounded-full bg-[hsl(var(--brand-gold-500))]" />
              </div>
              <div className="relative mt-8 space-y-4 text-[0.9375rem] leading-relaxed text-on-light-secondary md:text-base [&_strong]:text-[hsl(var(--brand-navy-950))]">
                <p>
                  Ewan Business Solutions was founded in 2020 on a single conviction: that the companies who win in
                  cross-border expansion are the ones with a partner who has already been on both sides of the table.
                </p>
                <p>
                  We sit at a rare intersection - 125+ language capability and on-ground operational expertise - that
                  makes us genuinely different from both traditional language agencies and conventional market entry
                  consultants. We don&apos;t separate language from operations. In our experience, they are the same problem.
                </p>
                <p>
                  We work with foreign companies entering India and Indian companies expanding across Southeast Asia, East
                  Asia, Latin America and Africa. In five years, we have served 250+ clients across 10+ sectors, delivering
                  everything from single document translations to full market entry mandates.
                </p>
              </div>
            </div>
            <div className="grid gap-5 md:gap-6">
              <article className="relative overflow-hidden rounded-3xl border border-[hsl(var(--border-light))] bg-white p-8 shadow-[0_14px_40px_rgba(26,22,51,0.06)] md:p-10">
                <img
                  src={doodleCorner}
                  alt=""
                  className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rotate-90 scale-x-[-1] select-none opacity-30"
                />
                <div className="relative">
                  <div className="mb-4 inline-flex items-center justify-center rounded-full bg-[hsl(var(--brand-purple-500)/0.1)] p-3 text-[hsl(var(--brand-purple-500))]">
                    <Globe2 className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[hsl(var(--brand-navy-950))]">Our Mission</h3>
                  <p className="mt-3 text-sm leading-relaxed text-on-light-secondary md:text-[0.9375rem]">
                    To help our customers grow their business by enabling them to communicate with their global markets. We
                    strive to preserve languages and heritage around the globe, improving worldwide communication through
                    accurate, localized translation and interpretation services.
                  </p>
                </div>
              </article>
              <article className="relative overflow-hidden rounded-3xl border border-[hsl(var(--surface-glass)/0.12)] bg-[hsl(var(--brand-navy-950))] p-8 text-white shadow-[0_14px_40px_rgba(26,22,51,0.28)] md:p-10">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_100%_0%,hsl(var(--brand-purple-700)/0.35),transparent_55%)]" />
                <div className="relative">
                  <div className="mb-4 inline-flex items-center justify-center rounded-full bg-[hsl(var(--brand-gold-500)/0.2)] p-3 text-[hsl(var(--brand-gold-500))]">
                    <Handshake className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold">Our Vision</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80 md:text-[0.9375rem]">
                    To become the leading cross-border partner for companies operating between India and the emerging world -
                    combining language excellence, on-ground operational capability, and institutional credibility that
                    cannot be replicated overnight.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="slant" />

      {/* Founders */}
      <section id="the-founders" className="relative overflow-hidden bg-[hsl(var(--brand-navy-950))] px-6 py-24 text-white md:py-28 stitch-line stitch-line-bottom">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_72%_-10%,hsl(var(--brand-purple-700)/0.22),transparent_50%)]" />
        <img
          src={doodleSquiggle}
          alt=""
          className="pointer-events-none absolute -left-12 top-40 z-0 hidden h-72 w-56 -scale-x-100 select-none opacity-25 xl:block"
        />
        <div className="container relative z-10 mx-auto max-w-6xl">
          <header className="mb-14 text-center md:mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-500))]">The Founders</p>
            <h2 className="mx-auto mt-4 max-w-3xl font-serif text-3xl font-bold md:text-4xl lg:text-5xl">
              Leadership That Built the Corridors
            </h2>
            <img src={doodleBridge} alt="" className="pointer-events-none mx-auto mt-6 h-14 w-[min(100%,480px)] max-w-none select-none opacity-40" />
          </header>

          {/* Soham */}
          <article className="mb-14 rounded-2xl border border-[hsl(var(--surface-glass)/0.12)] bg-[hsl(var(--surface-glass)/0.04)] shadow-[0_20px_50px_rgba(0,0,0,0.2)] backdrop-blur-sm md:mb-16">
            <div className="flex flex-col gap-8 p-6 sm:p-8 md:gap-10 lg:flex-row lg:items-start lg:p-10">
              <div className="mx-auto w-full max-w-[320px] shrink-0 lg:mx-0 lg:max-w-[300px]">
                <figure className="overflow-hidden rounded-2xl bg-[hsl(var(--brand-navy-950))] shadow-[inset_0_0_0_1px_hsl(var(--surface-glass)/0.12)]">
                  <img
                    src="/Soham-Sir.jpg"
                    alt="Soham Kakade, Founder & CEO of Ewan Business Solutions"
                    className="aspect-[4/5] w-full object-cover object-center"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              </div>
              <div className="min-w-0 flex-1">
                <div className="border-b border-[hsl(var(--surface-glass)/0.1)] pb-6">
                  <h3 className="font-serif text-2xl font-bold text-white sm:text-[1.75rem]">Soham Kakade</h3>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[hsl(var(--brand-gold-500))]">
                    Founder & CEO
                  </p>
                </div>
                <h4 className="mt-6 font-serif text-2xl font-bold leading-tight text-white md:text-[1.65rem]">
                  10 Years in the Room Before Building the Firm.
                </h4>
                <p className="mt-5 text-sm leading-relaxed text-white/82 md:text-[0.9375rem]">
                  Soham Kakade spent a decade interpreting confidential boardroom negotiations between global leaders and
                  their Asian counterparts - accumulating over 60,000 hours of simultaneous interpretation across
                  Mandarin, Cantonese, Japanese and ASEAN languages before founding Ewan.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/74 md:text-[0.9375rem]">
                  His foundation: a full Chinese Government scholarship at Beijing Language and Cultural University (BLCU),
                  one of the world&apos;s most rigorous language institutions. Since then: heads of state, Fortune 500
                  boardrooms, national textbooks, government export programs and geopolitical publications on the
                  India-Asia corridor. Ewan exists because Soham saw, repeatedly, what happens when companies enter new
                  markets without someone who truly understands both sides of the conversation. He built the firm he wished had existed.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "BLCU Scholarship Recipient",
                    "60,000+ Hours Interpretation",
                    "ISO 9001:2015 Certified",
                    "Vice President, CITLoB",
                    "Bhashini Initiative, MeitY",
                    "MSAMB Export Program Designer",
                    "Faculty, Symbiosis",
                    "IB Board Curriculum Designer",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[hsl(var(--surface-glass)/0.14)] bg-[hsl(var(--surface-glass)/0.08)] px-3 py-1 text-[11px] font-semibold tracking-[0.06em] text-[hsl(var(--brand-purple-500))]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="https://www.linkedin.com/in/soham-kakade-77b2819b/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--surface-glass)/0.22)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white/10"
                  >
                    Connect on LinkedIn
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                  <Link
                    to="/ask-soham"
                    className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-5 py-2 text-xs font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
                  >
                    Ask Soham - Book a Free 15-Minute Call
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {/* Sukhada */}
          <article className="rounded-2xl border border-[hsl(var(--surface-glass)/0.12)] bg-[hsl(var(--surface-glass)/0.04)] shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm">
            <div className="flex flex-col gap-8 p-6 sm:p-8 md:gap-10 lg:flex-row-reverse lg:items-start lg:p-10">
              <div className="mx-auto w-full max-w-[320px] shrink-0 lg:mx-0 lg:max-w-[300px]">
                <figure className="overflow-hidden rounded-2xl bg-[hsl(var(--brand-navy-950))] shadow-[inset_0_0_0_1px_hsl(var(--surface-glass)/0.12)]">
                  <img
                    src="/Sukhada-maam.jpg"
                    alt="CMA Sukhada Kakade Bhalerao, Co-Founder & Director of Ewan Business Solutions"
                    className="aspect-[4/5] w-full object-cover object-center"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              </div>
              <div className="min-w-0 flex-1">
                <div className="border-b border-[hsl(var(--surface-glass)/0.1)] pb-6">
                  <h3 className="font-serif text-2xl font-bold text-white sm:text-[1.75rem]">CMA Sukhada Kakade Bhalerao</h3>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[hsl(var(--brand-gold-500))]">
                    Co-Founder & Director
                  </p>
                </div>
                <h4 className="mt-6 font-serif text-2xl font-bold leading-tight text-white md:text-[1.65rem]">
                  The Financial and Operational Intelligence Behind Ewan.
                </h4>
                <p className="mt-5 text-sm leading-relaxed text-white/82 md:text-[0.9375rem]">
                  Sukhada Kakade Bhalerao is a Pune-based Certified Management Accountant (CMA), finance educator, and
                  entrepreneur. As Co-Founder and Director of Ewan Business Solutions, she provides the financial rigour
                  and operational structure that allows Ewan to deliver complex, multi-workstream mandates with
                  confidence. Her expertise spans financial planning, auditing, RBI/FEMA compliance advisory, entity
                  formation financial setup, internal controls, and client financial reporting.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/74 md:text-[0.9375rem]">
                  With over 15 years of experience - including her own cost accounting practice (est. 2010), faculty
                  roles, and committee contributions - she brings a discipline that is rarely found in language or market
                  entry firms: the ability to see the financial architecture of an expansion before it is built, and to ensure
                  clients move quickly without financial exposure.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/74 md:text-[0.9375rem]">
                  She is also Co-Founder and Director of Bhashik Skill Development, Ewan&apos;s sister institution focused on language training, vocational skills, and career development - ensuring a steady pipeline of skilled, job-ready language professionals for the industry.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Certified Management Accountant (CMA)",
                    "Cost Accounting Practice (est. 2010)",
                    "Finance Educator & Faculty",
                    "RBI & FEMA Advisory",
                    "Committee Contributor",
                    "Co-Founder, Bhashik Skill Development",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[hsl(var(--surface-glass)/0.14)] bg-[hsl(var(--surface-glass)/0.08)] px-3 py-1 text-[11px] font-semibold tracking-[0.06em] text-[hsl(var(--brand-gold-500))]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <SectionDivider variant="slant" flip fromDark />

      {/* Institutional Recognition */}
      <section className="theme-section-light relative overflow-hidden px-6 py-20 md:py-24 stitch-line stitch-line-bottom">
        <img
          src={doodleCorner}
          alt=""
          className="pointer-events-none absolute right-[-3rem] bottom-[-2rem] z-0 hidden h-40 w-40 rotate-180 select-none opacity-25 lg:block"
        />
        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="mb-12 md:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-700))]">
              Recognised by Governments and Institutions
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-[hsl(var(--brand-navy-950))] md:text-[2.25rem]">
              Recognised by the Consulate General of the People&apos;s Republic of China
            </h2>
            <p className="mt-5 max-w-4xl text-sm leading-relaxed text-on-light-secondary md:text-base">
              In a formal letter of recognition, the Consulate General acknowledged Ewan&apos;s contribution to
              strengthening India-China agricultural and trade relations - noting that over 1,200 farmers and 800
              hectares of farmland would benefit from the work. This is the kind of institutional trust that takes years
              to build and cannot be replicated overnight.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {institutionalRecognitions.map((item) => (
              <p
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-[hsl(var(--border-light))] bg-white p-5 text-sm text-on-light-secondary shadow-[0_8px_24px_rgba(26,22,51,0.04)] md:p-6"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-purple-500))]" />
                <span>{item}</span>
              </p>
            ))}
          </div>
        </div>
      </section>


      {/* Partners */}
      <section id="our-partners" className="theme-section-soft relative overflow-hidden px-6 py-12">
        <div className="pointer-events-none absolute left-[-20%] top-1/2 h-[min(80vw,420px)] w-[min(80vw,420px)] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,hsl(var(--brand-gold-500)/0.06),transparent_70%)]" />
        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="mb-12 md:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-700))]">Partners & Collaborators</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-[hsl(var(--brand-navy-950))] md:text-[2.25rem]">
              Partners & Collaborators Who Extend Our Reach.
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-on-light-secondary md:text-base">
              Ewan works with trusted institutional and commercial partners whose capabilities complement our own -
              allowing us to deliver more comprehensive solutions for clients navigating complex cross-border
              environments.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {partners.map((partner) => (
              <article
                key={partner.name}
                className="group rounded-3xl border border-[hsl(var(--border-light))] bg-white p-7 shadow-[0_14px_40px_rgba(26,22,51,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(26,22,51,0.09)] md:p-8"
              >
                <h3 className="font-serif text-xl font-bold text-[hsl(var(--brand-navy-950))]">{partner.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-on-light-secondary">{partner.description}</p>
                {partner.link && (
                  <a
                    href={partner.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[hsl(var(--brand-purple-500))] transition group-hover:underline"
                  >
                    Visit bhashikskill.co.in
                    <ArrowRight className="h-3 w-3" />
                  </a>
                )}
              </article>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-on-light-secondary md:mt-12">
            Interested in partnering with Ewan?{" "}
            <a
              href="mailto:info@ewan.co.in?subject=Partnership"
              className="font-semibold text-[hsl(var(--brand-purple-500))] hover:underline"
            >
              Get in touch about a partnership →
            </a>
          </p>
        </div>
      </section>

      {/* Oriental Flock */}
      <section id="oriental-flock" className="theme-section-light relative overflow-hidden px-6 py-12">
        <img
          src={doodleSquiggle}
          alt=""
          className="pointer-events-none absolute -right-6 top-24 z-0 h-52 w-40 select-none opacity-[0.12] lg:opacity-[0.18]"
        />
        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-[hsl(var(--border-light))] bg-white p-8 shadow-[0_18px_50px_rgba(26,22,51,0.06)] md:p-12">
            <div className="pointer-events-none absolute -left-px top-0 h-full w-1 bg-gradient-to-b from-[hsl(var(--brand-gold-500)/0.5)] via-[hsl(var(--brand-purple-500)/0.35)] to-transparent" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-700))]">Community</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-[hsl(var(--brand-navy-950))] md:text-[2.25rem]">
              Oriental Flock - Where the Language Industry Gathers.
            </h2>
            <p className="mt-5 max-w-4xl text-sm leading-relaxed text-on-light-secondary md:text-base">
              Oriental Flock is Pune&apos;s language industry meetup - a regular gathering of freelancers, interpreters,
              language trainers, bilingual professionals and companies solving the real challenges of working across
              languages and cultures. Founded by Soham Kakade in partnership with CITLoB.
            </p>
            <p className="mt-4 max-w-4xl text-sm leading-relaxed text-on-light-secondary md:text-base">
              Past sessions have brought together practitioners from GlobalLogic, Vinsys, Cybage, The Oriental Dialogue
              and independent language professionals from across India. Topics have ranged from bilingual hiring
              challenges to freelancer-to-LSP connections to cross-cultural communication in high-stakes settings.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Regular gatherings",
                "91Springboard, Baner, Pune",
                "4:00 PM – 6:00 PM",
                "Open to language professionals, learners and companies",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[hsl(var(--border-light-strong))] bg-[hsl(var(--surface-light-100))] px-4 py-2 text-[11px] font-semibold tracking-wide text-on-light md:text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm text-on-light-muted">
              Follow{" "}
              <a
                href="https://www.instagram.com/ewanbizsolution/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[hsl(var(--brand-purple-500))] hover:underline"
              >
                @orientalflock
              </a>{" "}
              on Instagram for upcoming editions and session highlights.
            </p>
          </div>
        </div>
      </section>

      {/* Language Cards */}
      <section className="theme-section-soft relative overflow-hidden px-6 py-12">
        <div className="pointer-events-none absolute right-12 top-20 hidden lg:block">
          <img src={doodleDots} alt="" className="h-48 w-64 select-none opacity-[0.16]" />
        </div>
        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="mb-12 text-center md:mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-500))]">Language Capability</p>
            <h2 className="mt-4 font-serif text-3xl font-bold text-[hsl(var(--brand-navy-950))] md:text-[2.25rem]">Languages We Master</h2>
            <p className="mx-auto mt-4 max-w-2xl text-on-light-secondary">
              We handle 125+ languages, with deep specialization in Oriental, European, and Indian corridors.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {languageGroups.map((lang) => (
              <article
                key={lang.name}
                className="rounded-2xl border border-[hsl(var(--border-light))] bg-white p-6 shadow-[0_10px_32px_rgba(26,22,51,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(26,22,51,0.08)] md:p-7"
              >
                <h3 className="font-serif text-xl font-bold text-[hsl(var(--brand-navy-950))]">{lang.name}</h3>
                <p className="mt-1 text-xs font-bold text-[hsl(var(--brand-gold-600))]">{lang.speakers} Speakers</p>
                <p className="mt-3 text-sm text-on-light-secondary">{lang.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

   
    </PageLayout>
  );
};

export default AboutUs;
