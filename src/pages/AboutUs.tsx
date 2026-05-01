import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { useTranslation } from "react-i18next";

const metrics = [
  { value: "5", label: "Years" },
  { value: "250+", label: "Global Clients" },
  { value: "10+", label: "Sectors" },
];

const trustSignals = [
  "MSAMB, Government of Maharashtra - Export Program Empanelment",
  "Bhashini Initiative - Ministry of Electronics & IT (MeitY)",
  "CITLoB - Confederation of Indian Translators and Language Professionals",
  "Symbiosis International University - Faculty Recognition",
  "IB Board - International Baccalaureate Curriculum Designer",
];

const partnerCards = [
  {
    name: "Bhashini (Government of India)",
    blurb:
      "India's national language technology initiative. Our work with Bhashini strengthens multilingual technology integration and institutional standing.",
  },
  {
    name: "Tattava CX",
    blurb:
      "Strategic communication and customer experience partner that complements Ewan's cross-border language and market entry execution.",
  },
  {
    name: "Bhashik Skill Development",
    blurb:
      "Ewan's sister institution focused on language training and vocational readiness, creating a trained talent pipeline for client mandates.",
  },
];

const ecosystemLanguages = ["Japanese", "Mandarin", "Korean", "German", "French", "Spanish", "Arabic", "Indian Languages"];

const joinTracks = [
  "Join our team - language, operations, and account roles",
  "Join our vendor network - interpreters, translators, subtitlers, voice talent",
  "Collaborate with us - institutions, agencies, platforms, and trade bodies",
];

const sectors = [
  "Automotive",
  "Pharmaceuticals",
  "Aerospace",
  "Manufacturing",
  "Exhibitions & Trade Fairs",
  "Technology",
  "Agriculture & Food",
  "Legal & Compliance",
  "Education",
  "Media & OTT",
];

const founders = [
  {
    id: "founder-soham",
    name: "Soham Kakade",
    role: "CEO & Founder",
    headline: "10 Years in the Room Before Building the Firm",
    description:
      "Soham spent a decade interpreting confidential boardroom negotiations between global leaders and their Asian counterparts. He has delivered 60,000+ hours of simultaneous interpretation across Mandarin, Cantonese, Japanese, and ASEAN languages.",
    detail:
      "From a full Chinese Government scholarship at Beijing Language and Cultural University (BLCU) to assignments across heads of state, Fortune 500 boardrooms, government export programs, and publications in the India-Asia corridor, his experience shaped Ewan's operating model.",
    tags: ["60,000+ Hrs Interpretation", "Mandarin / Cantonese / Japanese / ASEAN", "BLCU Scholarship"],
    points: [
      "ISO 9001:2015 Certified",
      "Vice President - CITLoB",
      "Bhashini Initiative - MeitY",
      "MSAMB Export Program Designer",
      "Faculty - Symbiosis",
      "IB Board Curriculum Designer",
    ],
    linkedin: "https://www.linkedin.com/in/soham-kakade-77b2819b/",
    image: "/Soham-Sir.jpg",
  },
  {
    id: "founder-sukhada",
    name: "Sukhada Kakade Bhalerao",
    role: "Director & Co-Founder",
    headline: "The Financial and Operational Intelligence Behind Ewan",
    description:
      "Sukhada is a Certified Management Accountant (CMA) with 15+ years of experience in financial planning, auditing, RBI/FEMA compliance advisory, entity setup, internal controls, and client reporting.",
    detail:
      "With her own cost accounting practice since 2010, teaching and faculty roles, and leadership at Bhashik Skill Development, she ensures Ewan's delivery is backed by financial rigor and operational reliability.",
    tags: ["CMA Credentialed", "15+ Years Experience", "RBI / FEMA Compliance"],
    points: [
      "Cost Accounting Practice (est. 2010)",
      "Finance Educator & Faculty",
      "Committee Contributor",
      "Co-Founder - Bhashik Skill Development",
    ],
    linkedin: "https://www.linkedin.com/company/ewan-business-solutions/",
    image: "/Sukhada-maam.jpg",
  },
];

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <PageLayout
      title={t("seo.about.title")}
      description={t("seo.about.description")}
      canonicalPath="/about-us/"
    >
      <section id="about-ewan" className="relative flex min-h-[780px] items-center justify-center overflow-hidden bg-[hsl(var(--brand-navy-950))] px-6">
        <div
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--brand-purple-700)/0.18)_0%,transparent_70%)]" />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[hsl(var(--brand-navy-950)/0.4)] via-[hsl(var(--brand-navy-950)/0.84)] to-[hsl(var(--brand-navy-950))]" />
        <div className="container relative z-10 mx-auto text-center text-white">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-[hsl(var(--brand-gold-500))]">
            Global Language & Operations
          </p>
          <h1 className="mx-auto max-w-5xl font-serif text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Built for the Corridors Others Don&apos;t Know.
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-base text-white/75 sm:text-lg">
            Ewan operates at the intersection of 125+ languages and on-ground operations, supporting foreign companies
            entering India and Indian companies expanding globally.
          </p>
          <a
            href="mailto:info@ewan.co.in?subject=Partnership%20Inquiry"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-7 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
          >
            Partner With Us
            <ArrowRight className="h-4 w-4" />
          </a>
          <div className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-3">
            {metrics.map((item) => (
              <article key={item.label} className="rounded-2xl border border-[hsl(var(--surface-glass)/0.16)] bg-[hsl(var(--surface-glass)/0.06)] p-7 backdrop-blur-md">
                <p className="text-3xl font-bold text-[hsl(var(--brand-purple-500))]">{item.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/70">{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[hsl(var(--surface-light-50))] px-6 py-20">
        <div className="container mx-auto grid items-center gap-8 lg:grid-cols-[0.42fr_0.58fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-500))]">Core Positioning</p>
            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-[#1a1633]">
              Language and operations are not separate problems.
            </h2>
            <div className="mt-7 h-1 w-20 bg-[hsl(var(--brand-gold-500))]" />
          </div>
          <article className="rounded-2xl border border-[hsl(var(--surface-glass)/0.18)] bg-white p-8 shadow-[0_18px_40px_hsl(var(--brand-navy-950)/0.08)]">
            <p className="text-base leading-relaxed text-[#332e4b]">
              Most firms approach expansion with either language support or consulting support. Ewan combines both, because
              operational execution, cultural precision, and multilingual communication are the same business problem.
            </p>
          </article>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f2f0fa] px-6 py-20">
        <div className="container mx-auto grid gap-12 md:grid-cols-[0.36fr_0.64fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-500))]">Our Origin</p>
            <h2 className="mt-4 font-serif text-4xl font-bold text-[#1a1633]">Founded in 2020. Built for the long term.</h2>
          </div>
          <article className="rounded-2xl border-l-4 border-l-[hsl(var(--brand-purple-500))] border-r border-r-[#ddd7ee] border-t border-t-[#ddd7ee] border-b border-b-[#ddd7ee] bg-white p-8 shadow-[0_12px_32px_hsl(var(--brand-navy-950)/0.07)]">
            <p className="text-base leading-relaxed text-[#302a48]">
              Ewan was founded on one conviction: companies succeed in cross-border expansion when their partner understands
              both sides of the table. We deliver everything from single-document translation to full market entry mandates
              with confidence, context, and execution discipline.
            </p>
          </article>
        </div>
      </section>

      <section id="founders" className="relative overflow-hidden bg-[hsl(var(--brand-navy-950))] px-6 py-24 text-white">
        <div className="pointer-events-none absolute -left-28 top-10 h-80 w-80 rounded-full bg-[hsl(var(--brand-purple-700)/0.26)] blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-[hsl(var(--brand-gold-500)/0.16)] blur-3xl" />
        <div className="container mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-500))]">Leadership</p>
            <h2 className="mt-3 font-serif text-4xl font-bold md:text-5xl">The Architects of Fluency</h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white/65 md:text-base">
              Strategic language leadership anchored by boardroom experience, compliance rigor, and execution discipline.
            </p>
          </div>

          <div className="space-y-8">
            {founders.map((founder) => (
              <article
                key={founder.id}
                className="overflow-hidden rounded-3xl border border-[hsl(var(--surface-glass)/0.16)] bg-[hsl(var(--surface-glass)/0.06)] shadow-[0_24px_55px_hsl(var(--brand-navy-950)/0.45)] backdrop-blur-sm"
              >
                <div className="grid gap-0 lg:grid-cols-[320px_1fr]">
                  <div className="relative h-80 overflow-hidden lg:h-full">
                    <img
                      src={founder.image}
                      alt={`${founder.name} portrait`}
                      className="h-full w-full object-cover transition duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--brand-navy-950)/0.76)] via-[hsl(var(--brand-navy-950)/0.22)] to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5">
                      <h3 className="font-serif text-2xl font-bold text-white">{founder.name}</h3>
                      <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[hsl(var(--brand-gold-500))]">{founder.role}</p>
                    </div>
                  </div>

                  <div className="p-6 md:p-8">
                    <h4 className="font-serif text-2xl font-bold leading-tight text-white">{founder.headline}</h4>

                    <div className="mt-5 flex flex-wrap gap-2.5">
                      {founder.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[hsl(var(--surface-glass)/0.14)] bg-[hsl(var(--surface-glass)/0.08)] px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.06em] text-[hsl(var(--brand-purple-500))]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 space-y-3">
                      <p className="text-sm leading-relaxed text-white/80 md:text-[15px]">{founder.description}</p>
                      <p className="text-sm leading-relaxed text-white/72 md:text-[15px]">{founder.detail}</p>
                    </div>

                    <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                      {founder.points.map((point) => (
                        <p key={point} className="flex items-start gap-2.5 text-sm text-white/74">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-gold-500))]" />
                          <span>{point}</span>
                        </p>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-wrap gap-3">
                      <a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--surface-glass)/0.22)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white/10"
                      >
                        Connect on LinkedIn
                        <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                      {founder.id === "founder-soham" ? (
                        <Link
                          to="/ask-soham"
                          className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
                        >
                          Ask Soham - 15 Min Call
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="government-recognition" className="border-y border-[#d9d3e7] bg-[#faf9fd] px-6 py-16">
        <div className="container mx-auto">
          <div className="mb-7 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-500))]">Recognised by Governments and Institutions</p>
            <h3 className="mt-2 font-serif text-3xl font-bold text-[#1a1633]">Recognised by the Consulate General of China</h3>
            <p className="mx-auto mt-4 max-w-4xl text-sm leading-relaxed text-[#3f3958]">
              In a formal letter, the Consulate General acknowledged Ewan&apos;s contribution to India-China trade and
              agriculture outcomes impacting 1,200+ farmers and 800 hectares of farmland.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {trustSignals.map((item) => (
              <article key={item} className="rounded-xl border border-[#e6e1f2] bg-white px-5 py-4">
                <p className="flex items-start gap-2 text-sm text-[#393351]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-purple-500))]" />
                  <span>{item}</span>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="oriental-flock" className="scroll-mt-28 bg-[#fcfbff] px-6 py-16">
        <div className="container mx-auto rounded-3xl border border-[#e2ddf0] bg-[#f5f2fc] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-500))]">Community</p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-[#1a1633]">Oriental Flock - Where the Language Industry Gathers</h2>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-[#3e3858]">
            Oriental Flock is Pune&apos;s language industry meetup bringing together translators, freelancers, trainers, and
            companies to solve practical challenges around hiring, collaboration, and cross-cultural communication.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <p className="rounded-xl border border-[#dfd8ef] bg-white p-4 text-sm text-[#3e3858]">
              <span className="font-semibold">Format:</span> 91Springboard Baner, Pune · 4:00 PM to 6:00 PM sessions
            </p>
            <p className="rounded-xl border border-[#dfd8ef] bg-white p-4 text-sm text-[#3e3858]">
              <span className="font-semibold">Topics:</span> Bilingual hiring, freelancer collaboration, high-stakes
              cross-cultural communication
            </p>
          </div>
        </div>
      </section>

      <section id="partners" className="scroll-mt-28 bg-[#f4f2fb] px-6 py-16">
        <div className="container mx-auto">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-500))]">Partners</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-[#1a1633]">Partners & Collaborators Who Extend Our Reach</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {partnerCards.map((partner) => (
              <article key={partner.name} className="rounded-2xl border border-[#ddd8eb] bg-white p-6 shadow-[0_12px_24px_hsl(var(--brand-navy-950)/0.06)]">
                <h3 className="font-serif text-xl font-bold text-[#1a1633]">{partner.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#3e3858]">{partner.blurb}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="bhashik-pipeline" className="bg-[#fbf9ff] px-6 py-16">
        <div className="container mx-auto rounded-3xl border border-[#e2ddf0] bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-500))]">Ecosystem</p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-[#1a1633]">Bhashik Skill Development Pipeline</h2>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-[#3e3858]">
            Bhashik, Ewan&apos;s sister institution, builds the trained workforce behind our quality standards by developing
            language professionals across key Asian, European, and Indian language tracks.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {ecosystemLanguages.map((lang) => (
              <span key={lang} className="rounded-full border border-[#d8d1ea] bg-[#f4f0fb] px-3 py-1 text-xs font-semibold text-[#4a4364]">
                {lang}
              </span>
            ))}
          </div>
          <div className="mt-7 grid gap-3 md:grid-cols-2">
            {joinTracks.map((item) => (
              <p key={item} className="flex items-start gap-2 text-sm text-[#3e3858]">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-purple-500))]" />
                <span>{item}</span>
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="case-studies" className="scroll-mt-28 border-y border-[#e8e2f4] bg-[#faf8ff] px-6 py-16">
        <div className="container mx-auto">
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-500))]">Evidence</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-[#1a1633] md:text-4xl">Case Studies</h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#3e3858]">
              Representative mandates where integrated language and operations work reduced coordination risk and accelerated
              time-to-validated traction in-market.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <article className="rounded-3xl border border-[#e2ddf0] bg-white p-7 shadow-[0_12px_28px_rgba(20,16,45,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--brand-gold-600))]">
                Market Entry · Manufacturing
              </p>
              <h3 className="mt-3 font-serif text-xl font-bold text-[#1a1633]">Japan → India full mandate</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#3e3858]">
                Regulatory mapping, entity formation, executive liaison, local procurement, and on-ground operational setup —
                coordinated as one mandate so leadership could execute without fragmenting oversight.
              </p>
              <div className="mt-5">
                <Link
                  to="/market-entry#proof"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--brand-purple-600))] transition hover:gap-3"
                >
                  Read narrative on Market Entry
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
            <article className="rounded-3xl border border-[#e2ddf0] bg-white p-7 shadow-[0_12px_28px_rgba(20,16,45,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--brand-gold-600))]">
                Language Intelligence · Corridor
              </p>
              <h3 className="mt-3 font-serif text-xl font-bold text-[#1a1633]">High-stakes interpreting at scale</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#3e3858]">
                60,000+ hours of simultaneous and consecutive interpretation across boardrooms, government engagements, and
                sector programs — where tone, confidentiality, and technical precision directly affect deal outcomes.
              </p>
              <div className="mt-5">
                <Link
                  to="/language-localization#interpretation"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--brand-purple-600))] transition hover:gap-3"
                >
                  Explore interpretation capability
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
            <article className="rounded-3xl border border-[#e2ddf0] bg-white p-7 shadow-[0_12px_28px_rgba(20,16,45,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--brand-gold-600))]">
                Readiness · Planning
              </p>
              <h3 className="mt-3 font-serif text-xl font-bold text-[#1a1633]">Expansion gap assessment</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#3e3858]">
                Teams use the Global Market Entry Audit framework to surface operational and coordination gaps before capital
                is committed — aligning language, compliance, and execution plans early.
              </p>
              <div className="mt-5">
                <Link
                  to="/market-entry-audit"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--brand-purple-600))] transition hover:gap-3"
                >
                  Open the Market Entry Audit
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="testimonials" className="scroll-mt-28 bg-[#f4f2fb] px-6 py-16">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-500))]">Clients</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-[#1a1633] md:text-4xl">Testimonials</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#3e3858]">
              How partners describe working with Ewan when language, culture, and operations must move together.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <figure className="rounded-3xl border border-[#e2ddf0] bg-white p-8 shadow-[0_12px_28px_rgba(20,16,45,0.05)]">
              <blockquote className="text-sm leading-relaxed text-[#2f2a48]">
                &ldquo;We stopped managing three different vendors for language, liaison, and local checks. One accountable
                partner changed how fast we could validate India without losing board-level confidence.&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-xs font-semibold uppercase tracking-wider text-[hsl(var(--brand-purple-500))]">
                VP Operations · Industrial manufacturer (Northeast Asia)
              </figcaption>
            </figure>
            <figure className="rounded-3xl border border-[#e2ddf0] bg-white p-8 shadow-[0_12px_28px_rgba(20,16,45,0.05)]">
              <blockquote className="text-sm leading-relaxed text-[#2f2a48]">
                &ldquo;Interpretation quality in technical sessions was non-negotiable for us. Ewan&apos;s interpreters
                understood the engineering intent—not just the words—which kept negotiations on track.&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-xs font-semibold uppercase tracking-wider text-[hsl(var(--brand-purple-500))]">
                Program Director · Cross-border procurement program
              </figcaption>
            </figure>
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/ask-soham"
              className="inline-flex items-center gap-2 rounded-full border border-[#d9d2ea] bg-white px-6 py-3 text-sm font-semibold text-[#2d2946] transition hover:border-[hsl(var(--brand-purple-500)/0.55)]"
            >
              Discuss your mandate with Soham
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="industries" className="bg-[#fbf9ff] px-6 py-16">
        <div className="container mx-auto rounded-3xl border border-[#e2ddf0] bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-500))]">Industry Portfolio</p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-[#1a1633]">Industries We Serve</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((item) => (
              <p key={item} className="flex items-start gap-2 text-sm text-[#3b3554]">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-purple-500))]" />
                <span>{item}</span>
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[hsl(var(--brand-navy-950))] px-6 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_80%,hsl(var(--brand-gold-500)/0.12)_0%,transparent_45%)]" />
        <div className="container relative mx-auto max-w-4xl rounded-3xl border border-[hsl(var(--surface-glass)/0.16)] bg-[hsl(var(--surface-glass)/0.05)] p-10 text-center backdrop-blur-sm">
          <h2 className="font-serif text-4xl font-bold">Ready to Scale Securely?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/75">
            Let&apos;s discuss how integrated language and operational intelligence can de-risk your global expansion.
          </p>
          <a
            href="mailto:info@ewan.co.in?subject=About%20Us%20Partnership"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-8 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
          >
            Get in Touch About a Partnership
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutUs;
