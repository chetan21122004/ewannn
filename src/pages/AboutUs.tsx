import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Globe2, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/PageLayout";
import SectionDivider from "@/components/SectionDivider";
import HomeAboutSection from "@/components/HomeAboutSection";
import AeoFrequentlyAskedQuestions from "@/components/AeoFrequentlyAskedQuestions";
import { ABOUT_US_FAQS, ENTITY_PARAGRAPH_A, ENTITY_PARAGRAPH_B } from "@/data/aeoContent";
import { absoluteUrl, faqPageSchema, personSoham, personSukhada } from "@/lib/schemaHelpers";

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
      "India's national language technology initiative. Our partnership with Bhashini aligns UVAN with the country's most significant investment in multilingual AI - strengthening our language technology capabilities and our institutional standing.",
  },
  {
    name: "Tattava CX",
    description:
      "Strategic communications and customer experience partner. Tattava CX brings expertise in brand communication, client experience design, and strategic messaging - complementing UVAN's cross-border language and market entry work.",
  },
  {
    name: "Bhashik Skill Development - Sister Institution",
    description:
      "Bhashik Skill Development (bhashikskill.co.in) is UVAN's sister institution - a skill development organisation focused on language training, commerce education, and vocational upskilling across 125+ languages.",
    link: "https://bhashikskill.co.in",
  },
];

const doodleCorner = "/stitch/about-us/doodle-arc-corner.svg";
const doodleSquiggle = "/stitch/about-us/doodle-squiggle-right.svg";
const doodleBridge = "/stitch/about-us/doodle-bridge-wave.svg";
const doodleDots = "/stitch/about-us/doodle-dot-field.svg";

const aboutLd = [
  personSoham(),
  personSukhada(),
  faqPageSchema(absoluteUrl("/about-us/"), ABOUT_US_FAQS),
];

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <PageLayout
      title={t("seo.about.title")}
      description={t("seo.about.description")}
      canonicalPath="/about-us/"
      keywords={t("seo.about.keywords")}
      jsonLd={aboutLd}
    >
      {/* Hero */}
      <section
        id="about-ewan"
        className="relative overflow-hidden stitch-line stitch-line-bottom bg-[hsl(var(--brand-navy-950))] px-6 pb-28 pt-10 md:pb-36 md:pt-16"
      >
        <div
          className="absolute inset-0 z-0 opacity-[0.25]"
          style={{
            backgroundImage: "url('/page-assets/Building-Strong-International-Ties-Header-img-V2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Luxury wave background overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-40 mix-blend-color-dodge bg-cover bg-center"
          style={{ backgroundImage: "url('/bg-blobs/purple-luxury-wave-background-design-free-vector.jpg')" }}
        />
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_90%_60%_at_18%_18%,hsl(var(--brand-purple-700)/0.25),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_88%_72%,hsl(var(--brand-gold-500)/0.12),transparent_42%)]" />
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-[hsl(var(--brand-navy-950)/0.2)] via-[hsl(var(--brand-navy-950)/0.7)] to-[hsl(var(--brand-navy-950))]" />

        <img
          src={doodleCorner}
          alt=""
          className="pointer-events-none absolute -left-4 top-16 z-[1] h-40 w-40 select-none opacity-50 sm:h-48 sm:w-48 md:left-2 md:top-24 animate-float"
        />
        <img
          src={doodleSquiggle}
          alt=""
          className="pointer-events-none absolute -right-8 bottom-24 z-[1] hidden h-64 w-52 select-none opacity-60 md:block lg:bottom-32 lg:h-80 lg:w-64"
        />
        <img
          src={doodleDots}
          alt=""
          className="pointer-events-none absolute left-1/2 top-1/2 z-[1] h-56 w-72 -translate-x-1/2 -translate-y-[30%] select-none opacity-[0.1] sm:opacity-15 animate-pulse-glow"
        />

        <div className="pointer-events-none absolute left-6 top-28 hidden select-none text-4xl font-extrabold tracking-tight text-[hsl(var(--brand-purple-500)/0.12)] lg:block xl:left-12 xl:text-5xl">
          {`{"ewan":"bridge"}`}
        </div>
        <div className="pointer-events-none absolute bottom-40 right-8 hidden select-none text-[10px] font-semibold uppercase tracking-[0.28em] text-[hsl(var(--brand-gold-500)/0.18)] xl:block">
          good · bridge · two corridors
        </div>

        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-12 lg:items-start">
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[hsl(var(--brand-gold-500))] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--brand-gold-500))] animate-pulse" />
                What does &quot;UVAN&quot; mean?
              </p>
              <h1 className="mt-6 font-serif text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-[3.35rem] xl:text-6xl xl:leading-[1.02]">
                A Bridge Connecting <br className="hidden sm:block" />
                <span className="text-[hsl(var(--brand-purple-500))] italic">Two Good Things.</span>
              </h1>
              <div className="relative mt-10 max-w-xl">
                <img
                  src={doodleBridge}
                  alt=""
                  className="pointer-events-none absolute -left-4 top-full mt-4 hidden h-16 w-[min(100%,420px)] max-w-none select-none opacity-40 sm:block"
                />
                <p className="relative text-base leading-relaxed text-white/85 sm:text-lg">
                  The word &quot;UVAN&quot; is the amalgamation of the Japanese letter <strong>&quot;E&quot;</strong> meaning good and the
                  Traditional Chinese word <strong>&quot;WAN&quot;</strong> meaning bridge.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative lg:col-span-5"
              initial={{ opacity: 0, y: 26, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative mx-auto max-w-[400px] rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl lg:mr-0 lg:ml-auto lg:max-w-none">
                <div className="pointer-events-none absolute -right-3 -top-3 h-20 w-20 rounded-full border-2 border-dashed border-[hsl(var(--brand-gold-500)/0.25)] animate-spin-slow" style={{ animationDuration: '24s' }} />
                <div className="pointer-events-none absolute -bottom-4 left-8 h-4 w-20 rounded-full bg-[hsl(var(--brand-purple-500)/0.3)] blur-md" />
                
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[hsl(var(--brand-purple-500))] mb-4">Live footprint</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {metrics.map((item, i) => (
                    <motion.article
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md hover:bg-white/10 transition-colors"
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
                      whileHover={{ y: -4, scale: 1.02 }}
                    >
                      <p className="font-serif text-3xl font-bold text-[hsl(var(--brand-gold-500))]">{item.value}</p>
                      <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/60 leading-none">{item.label}</p>
                    </motion.article>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" fromDark />

      <HomeAboutSection />

      {/* About the Firm */}
      <section className="theme-section-soft relative overflow-hidden px-6 py-20 md:py-24 stitch-line stitch-line-bottom">
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 translate-x-1/4 -translate-y-1/4 bg-[radial-gradient(circle,hsl(var(--brand-purple-500)/0.12),transparent_70%)]" />
        
        {/* Subtle decorative doodles in the background */}
        <motion.img
          src="/doodles/Business growth-cuate.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -left-10 top-10 hidden h-56 w-56 opacity-[0.06] lg:block"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight text-[hsl(var(--brand-navy-950))]">
                Built for the Corridors Others Don&apos;t Know.
              </h2>
              <div className="relative mt-6">
                <div className="h-1.5 w-24 rounded-full bg-[hsl(var(--brand-gold-500))]" />
              </div>
              <div className="relative mt-8 space-y-5 text-[0.9375rem] leading-relaxed text-on-light-secondary md:text-base [&_strong]:text-[hsl(var(--brand-navy-950))]">
                <p>
                  UVAN was founded in 2020 on a single conviction: that the companies who win in
                  cross-border expansion are the ones with a partner who has already been on both sides of the table.
                </p>
                <p>
                  We sit at a rare intersection - <strong>125+ language capability</strong> and <strong>on-ground operational expertise</strong> - that
                  makes us genuinely different from both traditional language agencies and conventional market entry
                  consultants. We don&apos;t separate language from operations. In our experience, they are the same problem.
                </p>
                <p>
                  We work with foreign companies entering India and Indian companies expanding across Southeast Asia, East
                  Asia, Latin America and Africa. In five years, we have served 250+ clients across 10+ sectors, delivering
                  everything from single document translations to full market entry mandates.
                </p>
                <div className="mt-8 rounded-2xl border border-[hsl(var(--border-light-strong))] bg-white/70 backdrop-blur-sm p-6 text-[0.9375rem] leading-relaxed text-on-light-secondary shadow-[0_12px_30px_rgba(26,22,51,0.03)] border-l-4 border-l-[hsl(var(--brand-purple-700))]">
                  <p className="font-medium text-[hsl(var(--brand-navy-950))] mb-2">Registration Details</p>
                  <p className="text-xs sm:text-sm">{ENTITY_PARAGRAPH_A}</p>
                </div>
              </div>
            </motion.div>
            
            <div className="grid gap-6 md:gap-8">
              {/* Mission Card */}
              <motion.article
                className="group relative overflow-hidden rounded-3xl border border-[hsl(var(--border-light))] bg-white p-8 shadow-[0_12px_28px_rgba(26,22,51,0.05)] md:p-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -6 }}
              >
                {/* Background doodle watermark */}
                <img
                  src="/doodles/Light bulb-bro (1).svg"
                  alt=""
                  className="pointer-events-none absolute -right-4 -bottom-4 h-32 w-32 select-none opacity-[0.08] transition-transform duration-500 group-hover:scale-110"
                />
                
                <div className="relative z-10">
                  <div className="mb-5 inline-flex items-center justify-center rounded-2xl bg-[hsl(var(--brand-purple-500)/0.1)] p-4 text-[hsl(var(--brand-purple-700))] shadow-inner">
                    <Globe2 className="h-7 w-7" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[hsl(var(--brand-navy-950))] mb-3">Our Mission</h3>
                  <p className="text-sm leading-relaxed text-on-light-secondary md:text-[0.9375rem]">
                    To help our customers grow their business by enabling them to communicate with their global markets. We
                    strive to preserve languages and heritage around the globe, improving worldwide communication through
                    accurate, localized translation and interpretation services.
                  </p>
                </div>
              </motion.article>

              {/* Vision Card */}
              <motion.article
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[hsl(var(--brand-navy-950))] p-8 text-white shadow-[0_16px_48px_rgba(26,22,51,0.22)] md:p-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                whileHover={{ y: -6 }}
              >
                <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_100%_0%,hsl(var(--brand-purple-700)/0.35),transparent_55%)]" />
                
                <div className="relative z-10">
                  <div className="mb-5 inline-flex items-center justify-center rounded-2xl bg-white/10 p-4 text-[hsl(var(--brand-gold-500))]">
                    <Handshake className="h-7 w-7" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-3 text-white">Our Vision</h3>
                  <p className="text-sm leading-relaxed text-white/80 md:text-[0.9375rem]">
                    To become the leading cross-border partner for companies operating between India and the emerging world -
                    combining language excellence, on-ground operational capability, and institutional credibility that
                    cannot be replicated overnight.
                  </p>
                </div>
              </motion.article>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="slant" />

      {/* Founders */}
      <section
        id="the-founders"
        className="relative overflow-hidden border-y border-[hsl(var(--border-light)/0.85)] px-6 py-24 theme-section-soft md:py-28 stitch-line stitch-line-bottom"
      >
        <div className="glow-orb glow-orb-purple pointer-events-none h-[460px] w-[460px] -top-36 -left-28 opacity-[0.11]" />
        <div className="glow-orb glow-orb-gold pointer-events-none h-[380px] w-[380px] -bottom-32 right-[-12%] opacity-[0.09]" />
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.18]" />
        <img
          src={doodleSquiggle}
          alt=""
          className="pointer-events-none absolute -left-12 top-40 z-0 hidden h-72 w-56 -scale-x-100 select-none opacity-15 xl:block animate-float"
        />
        <div className="container relative z-10 mx-auto max-w-6xl">
          <header className="mb-16 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full theme-card-light text-[hsl(var(--brand-purple-700))] text-xs font-semibold tracking-wider uppercase mb-4">
              Executive Leadership
            </span>
            <h2 className="mx-auto max-w-3xl font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-on-light leading-tight">
              Leadership That Built the Corridors
            </h2>
            <img
              src={doodleBridge}
              alt=""
              className="pointer-events-none mx-auto mt-6 h-14 w-[min(100%,480px)] max-w-none select-none opacity-[0.25]"
            />
          </header>

          {/* Soham */}
          <motion.article
            className="theme-card-light mb-16 rounded-3xl border border-[hsl(var(--border-light))] bg-white/90 backdrop-blur-md shadow-premium-lg overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-col gap-8 p-6 sm:p-8 md:gap-10 lg:flex-row lg:items-start lg:p-10">
              <div className="mx-auto w-full max-w-[320px] shrink-0 lg:mx-0 lg:max-w-[280px]">
                <figure className="overflow-hidden rounded-2xl border border-[hsl(var(--border-light-strong))] bg-[hsl(var(--surface-light-100))] shadow-[0_12px_36px_hsl(var(--brand-navy-950)/0.1)] relative group">
                  <img
                    src="/Soham-Sir.jpg"
                    alt="Soham Kakade, Founder & CEO of UVAN"
                    className="aspect-[4/5] w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--brand-navy-950)/0.3)] to-transparent pointer-events-none" />
                </figure>
              </div>
              <div className="min-w-0 flex-1">
                <div className="border-b border-[hsl(var(--border-light))] pb-6">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-on-light">Soham Kakade</h3>
                  <p className="mt-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[hsl(var(--brand-gold-600))]">
                    Founder & CEO
                  </p>
                </div>
                
                <p className="mt-6 text-sm sm:text-base leading-relaxed text-on-light-secondary font-medium italic border-l-2 border-l-[hsl(var(--brand-purple-700))] pl-4">
                  {ENTITY_PARAGRAPH_B}
                </p>
                
                <h4 className="mt-6 font-serif text-xl sm:text-2xl font-bold leading-tight text-on-light">
                  10 Years in the Room Before Building the Firm.
                </h4>
                
                <p className="mt-4 text-sm leading-relaxed text-on-light-secondary">
                  Soham Kakade spent a decade interpreting confidential boardroom negotiations between global leaders and
                  their Asian counterparts - accumulating over 60,000 hours of simultaneous interpretation across
                  Mandarin, Cantonese, Japanese and ASEAN languages before founding UVAN.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-on-light-secondary">
                  His foundation: a full Chinese Government scholarship at Beijing Language and Cultural University (BLCU),
                  one of the world&apos;s most rigorous language institutions. Since then: heads of state, Fortune 500
                  boardrooms, national textbooks, government export programs and geopolitical publications on the
                  India-Asia corridor. UVAN exists because Soham saw, repeatedly, what happens when companies enter new
                  markets without someone who truly understands both sides of the conversation. He built the firm he wished had existed.
                </p>
                
                <div className="mt-6">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-on-light-muted mb-3">Key Credentials</p>
                  <div className="flex flex-wrap gap-2">
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
                        className="rounded-full border border-[hsl(var(--border-light-strong))] bg-[hsl(var(--surface-light-100))] px-3.5 py-1.5 text-[10px] sm:text-xs font-semibold tracking-wide text-[hsl(var(--brand-purple-700))]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-3.5">
                  <motion.a
                    href="https://www.linkedin.com/in/soham-kakade-77b2819b/"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 rounded-full border-2 border-[hsl(var(--border-light-strong))] bg-[hsl(var(--surface-light-card))] px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-on-light transition hover:bg-[hsl(var(--surface-light-200)/0.65)]"
                  >
                    Connect on LinkedIn
                    <ArrowRight className="h-4 w-4 text-[hsl(var(--brand-purple-700))]" />
                  </motion.a>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      to="/ask-soham"
                      className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--brand-purple-500)/0.3)] bg-gradient-to-r from-[hsl(var(--brand-purple-700))] to-[hsl(var(--brand-purple-500))] px-6 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-gold-sm"
                    >
                      Ask Soham - Book a Free 15-Minute Call
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Sukhada */}
          <motion.article
            className="theme-card-light rounded-3xl border border-[hsl(var(--border-light))] bg-white/90 backdrop-blur-md shadow-premium-lg overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-col gap-8 p-6 sm:p-8 md:gap-10 lg:flex-row-reverse lg:items-start lg:p-10">
              <div className="mx-auto w-full max-w-[320px] shrink-0 lg:mx-0 lg:max-w-[280px]">
                <figure className="overflow-hidden rounded-2xl border border-[hsl(var(--border-light-strong))] bg-[hsl(var(--surface-light-100))] shadow-[0_12px_36px_hsl(var(--brand-navy-950)/0.1)] relative group">
                  <img
                    src="/Sukhada-maam.jpg"
                    alt="CMA Sukhada Kakade Bhalerao, Co-Founder & Director of UVAN"
                    className="aspect-[4/5] w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--brand-navy-950)/0.3)] to-transparent pointer-events-none" />
                </figure>
              </div>
              <div className="min-w-0 flex-1">
                <div className="border-b border-[hsl(var(--border-light))] pb-6">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-on-light">CMA Sukhada Kakade Bhalerao</h3>
                  <p className="mt-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[hsl(var(--brand-gold-600))]">
                    Co-Founder & Director
                  </p>
                </div>
                
                <h4 className="mt-6 font-serif text-xl sm:text-2xl font-bold leading-tight text-on-light">
                  The Financial and Operational Intelligence Behind UVAN.
                </h4>
                
                <p className="mt-4 text-sm leading-relaxed text-on-light-secondary">
                  Sukhada Kakade Bhalerao is a Pune-based Certified Management Accountant (CMA), finance educator, and
                  entrepreneur. As Co-Founder and Director of UVAN, she provides the financial rigour
                  and operational structure that allows UVAN to deliver complex, multi-workstream mandates with
                  confidence. Her expertise spans financial planning, auditing, RBI/FEMA compliance advisory, entity
                  formation financial setup, internal controls, and client financial reporting.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-on-light-secondary">
                  With over 15 years of experience - including her own cost accounting practice (est. 2010), faculty
                  roles, and committee contributions - she brings a discipline that is rarely found in language or market
                  entry firms: the ability to see the financial architecture of an expansion before it is built, and to ensure
                  clients move quickly without financial exposure.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-on-light-secondary">
                  She is also Co-Founder and Director of Bhashik Skill Development, UVAN&apos;s sister institution focused on language training, vocational skills, and career development - ensuring a steady pipeline of skilled, job-ready language professionals for the industry.
                </p>
                
                <div className="mt-6">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-on-light-muted mb-3">Key Credentials</p>
                  <div className="flex flex-wrap gap-2">
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
                        className="rounded-full border border-[hsl(var(--border-light-strong))] bg-[hsl(var(--surface-light-100))] px-3.5 py-1.5 text-[10px] sm:text-xs font-semibold tracking-wide text-[hsl(var(--brand-gold-600))]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
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
              In a formal letter of recognition, the Consulate General acknowledged UVAN&apos;s contribution to
              strengthening India-China agricultural and trade relations - noting that over 1,200 farmers and 800
              hectares of farmland would benefit from the work. This is the kind of institutional trust that takes years
              to build and cannot be replicated overnight.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {institutionalRecognitions.map((item, i) => (
              <motion.p
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-[hsl(var(--border-light))] bg-white p-5 text-sm text-on-light-secondary shadow-[0_8px_24px_rgba(26,22,51,0.04)] md:p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -3 }}
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-purple-500))]" />
                <span>{item}</span>
              </motion.p>
            ))}
          </div>
        </div>
      </section>


      {/* Partners */}
      <section id="our-partners" className="theme-section-soft relative overflow-hidden px-6 py-16 md:py-20">
        <div className="pointer-events-none absolute left-[-20%] top-1/2 h-[min(80vw,420px)] w-[min(80vw,420px)] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,hsl(var(--brand-gold-500)/0.06),transparent_70%)]" />
        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="mb-12 md:mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full theme-card-light text-[hsl(var(--brand-purple-700))] text-xs font-semibold tracking-wider uppercase mb-4">
              Ecosystem & Alliance
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[hsl(var(--brand-navy-950))] leading-tight">
              Partners & Collaborators Who Extend Our Reach.
            </h2>
            <p className="mt-5 max-w-3xl text-sm sm:text-base leading-relaxed text-on-light-secondary">
              UVAN works with trusted institutional and commercial partners whose capabilities complement our own -
              allowing us to deliver more comprehensive solutions for clients navigating complex cross-border
              environments.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {partners.map((partner, i) => (
              <motion.article
                key={partner.name}
                className="group rounded-3xl border border-[hsl(var(--border-light))] bg-white p-7 shadow-[0_12px_32px_rgba(26,22,51,0.04)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(26,22,51,0.08)] md:p-8 flex flex-col justify-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <div>
                  <h3 className="font-serif text-xl font-bold text-[hsl(var(--brand-navy-950))] group-hover:text-[hsl(var(--brand-purple-700))] transition-colors">{partner.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-on-light-secondary">{partner.description}</p>
                </div>
                {partner.link && (
                  <div className="mt-6 pt-4 border-t border-[hsl(var(--border-light))]">
                    <a
                      href={partner.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[hsl(var(--brand-purple-700))] transition group-hover:translate-x-1"
                    >
                      Visit Website
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                )}
              </motion.article>
            ))}
          </div>
          
          <p className="mt-12 text-center text-sm text-on-light-secondary">
            Interested in partnering with UVAN?{" "}
            <a
              href="mailto:info@ewan.co.in?subject=Partnership"
              className="font-bold text-[hsl(var(--brand-purple-700))] hover:underline"
            >
              Get in touch about a partnership →
            </a>
          </p>
        </div>
      </section>

      {/* Oriental Flock */}
      <section id="oriental-flock" className="theme-section-light relative overflow-hidden px-6 py-16 md:py-20">
        <img
          src={doodleSquiggle}
          alt=""
          className="pointer-events-none absolute -right-6 top-24 z-0 h-52 w-40 select-none opacity-[0.08]"
        />
        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[hsl(var(--border-light-strong))] bg-white p-8 shadow-[0_16px_40px_rgba(26,22,51,0.06)] md:p-12">
            
            <div className="grid lg:grid-cols-[1fr_260px] gap-8 items-center">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[hsl(var(--brand-purple-500)/0.1)] text-[hsl(var(--brand-purple-700))] text-[10px] font-bold tracking-wider uppercase mb-5">
                  Language Community Hub
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[hsl(var(--brand-navy-950))] leading-tight">
                  Oriental Flock - Where the Language Industry Gathers.
                </h2>
                
                <p className="mt-5 text-sm sm:text-base leading-relaxed text-on-light-secondary">
                  Oriental Flock is Pune&apos;s language industry meetup - a regular gathering of freelancers, interpreters,
                  language trainers, bilingual professionals and companies solving the real challenges of working across
                  languages and cultures. Founded by Soham Kakade in partnership with CITLoB.
                </p>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-on-light-secondary">
                  Past sessions have brought together practitioners from GlobalLogic, Vinsys, Cybage, The Oriental Dialogue
                  and independent language professionals from across India. Topics have ranged from bilingual hiring
                  challenges to freelancer-to-LSP connections to cross-cultural communication in high-stakes settings.
                </p>
                
                <div className="mt-8 flex flex-wrap gap-2.5">
                  {[
                    "Regular gatherings",
                    "91Springboard, Baner, Pune",
                    "4:00 PM – 6:00 PM",
                    "Open to language professionals, learners and companies",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[hsl(var(--border-light-strong))] bg-[hsl(var(--surface-light-50))] px-3.5 py-1.5 text-[10px] sm:text-xs font-semibold tracking-wide text-on-light"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                
                <p className="mt-6 text-xs sm:text-sm text-on-light-muted">
                  Follow{" "}
                  <a
                    href="https://www.instagram.com/ewanbizsolution/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-[hsl(var(--brand-purple-700))] hover:underline"
                  >
                    @orientalflock
                  </a>{" "}
                  on Instagram for upcoming editions and session highlights.
                </p>
              </div>
              
              {/* Group discussion community doodle */}
              <div className="hidden lg:flex justify-center items-center shrink-0 w-60 h-60 relative">
                <motion.img
                  src="/doodles/Group discussion-bro.svg"
                  alt="Oriental Flock Gathering"
                  className="relative z-10 w-full h-full object-contain"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Language Cards */}
      <section className="theme-section-soft relative overflow-hidden px-6 py-16 md:py-20">
        <div className="pointer-events-none absolute right-12 top-20 hidden lg:block">
          <img src={doodleDots} alt="" className="h-48 w-64 select-none opacity-[0.16] animate-pulse-glow" />
        </div>
        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="mb-12 text-center md:mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full theme-card-light text-[hsl(var(--brand-purple-700))] text-xs font-semibold tracking-wider uppercase mb-4">
              Linguistic Footprint
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[hsl(var(--brand-navy-950))] leading-tight">Languages We Master</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-on-light-secondary">
              We handle 125+ languages, with deep specialization in Oriental, European, and Indian corridors.
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {languageGroups.map((lang, i) => (
              <motion.article
                key={lang.name}
                className="group relative rounded-2xl border border-[hsl(var(--border-light-strong))] bg-white p-6 shadow-[0_8px_24px_rgba(26,22,51,0.03)] md:p-7 flex flex-col justify-between"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                whileHover={{ y: -6, borderColor: 'hsl(var(--brand-purple-700)/0.25)', boxShadow: '0 16px 36px rgba(26,22,51,0.06)' }}
              >
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[hsl(var(--brand-navy-950))] group-hover:text-[hsl(var(--brand-purple-700))] transition-colors">{lang.name}</h3>
                  <span className="inline-block mt-1 text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--brand-gold-600))]">{lang.speakers} Speakers</span>
                  <p className="mt-4 text-xs sm:text-sm text-on-light-secondary leading-relaxed">{lang.desc}</p>
                </div>
                <div className="mt-5 pt-3 border-t border-[hsl(var(--border-light))] flex justify-end">
                  <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--brand-purple-700)/0.4)] group-hover:bg-[hsl(var(--brand-purple-700))] transition-colors" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <AeoFrequentlyAskedQuestions items={ABOUT_US_FAQS} className="theme-section-light px-6 py-16 md:py-20" />

    </PageLayout>
  );
};

export default AboutUs;
