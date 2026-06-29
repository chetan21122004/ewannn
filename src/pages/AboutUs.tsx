import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Award, CheckCircle2, Globe2, Handshake, Languages } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/PageLayout";
import SectionDivider from "@/components/SectionDivider";
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
  {
    name: "Chinese (Mandarin)",
    speakers: "929M",
    speakersDetail: "929 million speakers",
    desc: "Based on the Beijing dialect, widely spoken in northern China.",
    flagSrc: "/page-assets/flags/cn-flag.png",
    flagAlt: "China flag",
    region: "East Asia",
    accent: "gold" as const,
  },
  {
    name: "Japanese",
    speakers: "128M",
    speakersDetail: "128 million speakers",
    desc: "The de-facto official language of Japan.",
    flagSrc: "/page-assets/flags/jp-flag.png",
    flagAlt: "Japan flag",
    region: "East Asia",
    accent: "purple" as const,
  },
  {
    name: "Taiwanese",
    speakers: "23.6M",
    speakersDetail: "23.6 million speakers",
    desc: "Traditionally the most widely spoken language in Taiwan.",
    flagSrc: "/page-assets/flags/tw-flag.png",
    flagAlt: "Taiwan flag",
    region: "East Asia",
    accent: "cyan" as const,
  },
  {
    name: "Cantonese",
    speakers: "80M",
    speakersDetail: "80 million speakers",
    desc: "Official language of Hong Kong and Macau.",
    flagSrc: "/page-assets/flags/hk-flag.png",
    flagAlt: "Hong Kong flag",
    region: "Greater China",
    accent: "gold" as const,
  },
  {
    name: "Korean",
    speakers: "80M",
    speakersDetail: "80 million speakers",
    desc: "Native language of South Korea with its own unique alphabet.",
    flagSrc: "/page-assets/flags/kr-flag.png",
    flagAlt: "South Korea flag",
    region: "East Asia",
    accent: "purple" as const,
  },
  {
    name: "Bahasa (Indonesian/Malay)",
    speakers: "590M",
    speakersDetail: "590 million speakers",
    desc: "Official languages of Indonesia and Malaysia.",
    flagSrc: "/page-assets/flags/id-flag.png",
    flagAlt: "Indonesia flag",
    region: "ASEAN",
    accent: "cyan" as const,
  },
  {
    name: "Filipino & Tagalog",
    speakers: "139M",
    speakersDetail: "139 million speakers",
    desc: "National and official languages of the Philippines.",
    flagSrc: "/page-assets/flags/ph-flag.png",
    flagAlt: "Philippines flag",
    region: "ASEAN",
    accent: "gold" as const,
  },
  {
    name: "Vietnamese",
    speakers: "70M",
    speakersDetail: "70 million speakers",
    desc: "National and official language of Vietnam.",
    flagSrc: "/page-assets/flags/vn-flag.png",
    flagAlt: "Vietnam flag",
    region: "ASEAN",
    accent: "purple" as const,
  },
];

const LanguageFlag = ({ src, alt }: { src: string; alt: string }) => (
  <img
    src={src}
    alt={alt}
    loading="lazy"
    className="h-full w-full object-cover"
    onError={(event) => {
      if (!event.currentTarget.dataset.fallbackApplied) {
        event.currentTarget.dataset.fallbackApplied = "true";
        event.currentTarget.src = "/placeholder.svg";
      }
    }}
  />
);

const recognitions = [
  {
    title: "Consulate General of the People's Republic of China",
    desc: "Received a formal letter of recognition acknowledging our contribution to India-China agricultural and trade relations, benefiting 1,200+ farmers and 800+ hectares of farmland.",
    badge: "Government Recognition",
    logo: "/page-assets/cn-flag.png",
    logoAlt: "Flag of the People's Republic of China",
    featured: true,
    proofImages: [
      {
        src: "/Ewan-Consulate-experience-letter-page-001-min.jpg",
        alt: "Chinese Consulate appreciation letter page 1",
        label: "Page 1 · Chinese Original",
      },
      {
        src: "/Ewan-Consulate-experience-letter-page-002-min.jpg",
        alt: "Chinese Consulate appreciation letter page 2",
        label: "Page 2 · English Translation",
      },
    ],
  },
  {
    title: "MSAMB Government of Maharashtra",
    desc: "Empaneled for the state export program, assisting agricultural exporters with international language facilitation and trade setup.",
    badge: "State Empanelment",
    logo: "/allLogos/MSAMB-logo.png",
    logoAlt: "Maharashtra State Agricultural Marketing Board logo",
  },
  {
    title: "Bhashini Initiative (MeitY)",
    desc: "Strategic partner of India's national language technology mission under the Ministry of Electronics & IT.",
    badge: "National AI Mission",
    logo: "/allLogos/Bhashini-Logo.png",
    logoAlt: "Bhashini initiative logo",
  },
  {
    title: "CITLoB",
    desc: "Executive representation as Vice President of the Confederation of Indian Translators and Language Professionals.",
    badge: "Industry Leadership",
    logo: "/allLogos/CITLoB-logo-2023.jpg",
    logoAlt: "CITLoB logo",
  },
  {
    title: "ISO 9001:2015 Certification",
    desc: "Quality management system certification validating UVAN's structured processes for translation, interpretation, and cross-border service delivery.",
    badge: "Quality Certified",
    logo: "/allLogos/ISO-9001.png",
    logoAlt: "ISO 9001:2015 certification logo",
  },
  {
    title: "Symbiosis International University",
    desc: "Active academic faculty engagement, training the next generation of translation and interpretation professionals.",
    badge: "Academic Engagement",
    logo: "/allLogos/Symbiosis-logo.png",
    logoAlt: "Symbiosis International University logo",
  },
  {
    title: "IB Board (International Baccalaureate)",
    desc: "Appointed curriculum designer, shaping the pedagogical framework for international language education.",
    badge: "Curriculum Design",
    logo: "/allLogos/IB-logo.svg",
    logoAlt: "International Baccalaureate logo",
  },
];

const partners = [
  {
    name: "Bhashini - MeitY, Government of India",
    description:
      "India's national language technology initiative. Our partnership with Bhashini aligns UVAN with the country's most significant investment in multilingual AI - strengthening our language technology capabilities and our institutional standing.",
    logo: "/allLogos/Bhashini-Logo.png",
    logoAlt: "Bhashini logo",
  },
  {
    name: "Tattava CX",
    description:
      "Strategic communications and customer experience partner. Tattava CX brings expertise in brand communication, client experience design, and strategic messaging - complementing UVAN's cross-border language and market entry work.",
    logo: "/allLogos/tattava-cx.svg",
    logoAlt: "Tattava CX logo",
  },
  {
    name: "Bhashik Skill Development - Sister Institution",
    description:
      "Bhashik Skill Development is UVAN's sister institution - a skill development organisation focused on language training, commerce education, and vocational upskilling across 125+ languages.",
    logo: "/allLogos/bhashik-logo.png",
    logoAlt: "Bhashik Skill Development logo",
    link: "https://bhashikskill.co.in",
  },
];

const BrandLogo = ({
  src,
  alt,
  className = "max-h-14 w-auto max-w-[180px] object-contain",
}: {
  src: string;
  alt: string;
  className?: string;
}) => (
  <img
    src={src}
    alt={alt}
    loading="lazy"
    className={className}
    onError={(event) => {
      if (!event.currentTarget.dataset.fallbackApplied) {
        event.currentTarget.dataset.fallbackApplied = "true";
        event.currentTarget.src = "/placeholder.svg";
      }
    }}
  />
);

const foundationCredentials = [
  "Founded in Pune in 2020",
  "125+ language capability",
  "On-ground market execution",
  "ISO 9001:2015 certified",
];

const foundationProofPoints = [
  { value: "125+", label: "Languages" },
  { value: "250+", label: "Clients" },
  { value: "10+", label: "Sectors" },
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

const revealUp = {
  hidden: { opacity: 0, y: 34, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const revealLeft = {
  hidden: { opacity: 0, x: -34, filter: "blur(10px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)" },
};

const revealRight = {
  hidden: { opacity: 0, x: 34, filter: "blur(10px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)" },
};

const springReveal = { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const };

const AboutUs = () => {
  const { t } = useTranslation();
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const foundationRef = useRef<HTMLElement>(null);
  const leadershipRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: pageRef, offset: ["start start", "end end"] });
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const { scrollYProgress: foundationScroll } = useScroll({ target: foundationRef, offset: ["start end", "end start"] });
  const { scrollYProgress: leadershipScroll } = useScroll({ target: leadershipRef, offset: ["start end", "end start"] });
  const corridorScale = useTransform(scrollYProgress, [0, 1], [0.06, 1]);
  const corridorGlowY = useTransform(scrollYProgress, [0, 1], ["0%", "82%"]);
  const heroImageY = useTransform(heroScroll, [0, 1], ["0%", "18%"]);
  const heroOverlayY = useTransform(heroScroll, [0, 1], ["0%", "10%"]);
  const heroCopyY = useTransform(heroScroll, [0, 1], ["0%", "-12%"]);
  const heroStatsY = useTransform(heroScroll, [0, 1], ["0%", "16%"]);
  const heroFade = useTransform(heroScroll, [0, 0.72, 1], [1, 0.92, 0.68]);
  const foundationTitleY = useTransform(foundationScroll, [0, 0.5, 1], ["12%", "0%", "-8%"]);
  const foundationCardY = useTransform(foundationScroll, [0, 0.5, 1], ["10%", "0%", "-10%"]);
  const foundationIllustrationY = useTransform(foundationScroll, [0, 1], ["18%", "-18%"]);
  const foundationSideY = useTransform(foundationScroll, [0, 1], ["18%", "-8%"]);
  const leadershipHeaderY = useTransform(leadershipScroll, [0, 0.5, 1], ["14%", "0%", "-12%"]);
  const leadershipSohamY = useTransform(leadershipScroll, [0, 0.45, 1], ["18%", "0%", "-10%"]);
  const leadershipSukhadaY = useTransform(leadershipScroll, [0, 0.55, 1], ["26%", "0%", "-6%"]);
  const leadershipPortraitY = useTransform(leadershipScroll, [0, 1], ["10%", "-12%"]);

  return (
    <PageLayout
      title={t("seo.about.title")}
      description={t("seo.about.description")}
      canonicalPath="/about-us/"
      keywords={t("seo.about.keywords")}
      jsonLd={aboutLd}
    >
      <div ref={pageRef} className="relative">
        <div className="pointer-events-none fixed right-4 top-28 z-40 hidden h-[52vh] w-px overflow-hidden rounded-full bg-[hsl(var(--brand-navy-950)/0.08)] xl:block">
          <motion.div
            className="absolute left-0 top-0 h-full w-full origin-top rounded-full bg-gradient-to-b from-[hsl(var(--brand-gold-500))] via-[hsl(var(--brand-purple-500))] to-[hsl(var(--brand-cyan-500))]"
            style={{ scaleY: corridorScale }}
          />
          <motion.div
            className="absolute -left-1.5 h-4 w-4 rounded-full bg-[hsl(var(--brand-gold-500))] blur-[3px]"
            style={{ y: corridorGlowY }}
          />
        </div>

      {/* Hero Section */}
      <section
        ref={heroRef}
        id="about-ewan"
        className="relative overflow-hidden stitch-line stitch-line-bottom bg-[hsl(var(--brand-navy-950))] px-6 pb-28 pt-10 md:pb-36 md:pt-16"
      >
        <motion.div
          className="absolute inset-0 z-0 opacity-[0.25]"
          style={{ y: heroImageY, scale: 1.08 }}
          data-bg="about-hero"
        >
          <div
            className="h-full w-full"
            style={{
            backgroundImage: "url('/page-assets/Building-Strong-International-Ties-Header-img-V2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          />
        </motion.div>
        {/* Luxury wave background overlay */}
        <motion.div
          className="absolute inset-0 z-0 opacity-40 mix-blend-color-dodge bg-cover bg-center"
          style={{ y: heroOverlayY, scale: 1.05 }}
        >
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: "url('/bg-blobs/purple-luxury-wave-background-design-free-vector.jpg')" }}
          />
        </motion.div>
        <motion.div
          className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_90%_60%_at_18%_18%,hsl(var(--brand-purple-700)/0.25),transparent_55%)]"
          animate={{ scale: [1, 1.08, 1], opacity: [0.75, 1, 0.75] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_88%_72%,hsl(var(--brand-gold-500)/0.12),transparent_42%)]"
          animate={{ scale: [1, 1.12, 1], x: [0, -18, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-[hsl(var(--brand-navy-950)/0.2)] via-[hsl(var(--brand-navy-950)/0.7)] to-[hsl(var(--brand-navy-950))]" />

        <motion.img
          src={doodleCorner}
          alt=""
          className="pointer-events-none absolute -left-4 top-16 z-[1] h-40 w-40 select-none opacity-50 sm:h-48 sm:w-48 md:left-2 md:top-24 animate-float"
          animate={{ rotate: [0, -4, 0], y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.img
          src={doodleSquiggle}
          alt=""
          className="pointer-events-none absolute -right-8 bottom-24 z-[1] hidden h-64 w-52 select-none opacity-60 md:block lg:bottom-32 lg:h-80 lg:w-64"
          animate={{ rotate: [0, 3, 0], x: [0, -8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.img
          src={doodleDots}
          alt=""
          className="pointer-events-none absolute left-1/2 top-1/2 z-[1] h-56 w-72 -translate-x-1/2 -translate-y-[30%] select-none opacity-[0.1] sm:opacity-15 animate-pulse-glow"
          animate={{ scale: [1, 1.08, 1], rotate: [0, 1, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="pointer-events-none absolute bottom-40 right-8 hidden select-none text-[10px] font-semibold uppercase tracking-[0.28em] text-[hsl(var(--brand-gold-500)/0.18)] xl:block">
          good · bridge · two corridors
        </div>

        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-12 lg:items-center">
            <motion.div
              className="lg:col-span-7"
              style={{ y: heroCopyY, opacity: heroFade }}
              initial="hidden"
              animate="visible"
              variants={revealLeft}
              transition={springReveal}
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
              style={{ y: heroStatsY, opacity: heroFade }}
              initial="hidden"
              animate="visible"
              variants={revealRight}
              transition={{ ...springReveal, delay: 0.16 }}
            >
              <motion.div
                className="relative mx-auto max-w-[400px] rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl lg:mr-0 lg:ml-auto lg:max-w-none"
                whileHover={{ y: -8, rotateX: 1.5, rotateY: -1.5 }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
              >
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
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" fromDark />

      {/* About the Firm */}
      <section
        ref={foundationRef}
        className="theme-section-soft relative overflow-hidden px-6 py-20 md:py-24 stitch-line stitch-line-bottom"
      >
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.16]" />
        <div className="pointer-events-none absolute left-[-8rem] top-10 h-[28rem] w-[28rem] rounded-full bg-[hsl(var(--brand-purple-500)/0.13)] blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-10rem] right-[-8rem] h-[30rem] w-[30rem] rounded-full bg-[hsl(var(--brand-gold-500)/0.12)] blur-3xl" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealUp}
            transition={springReveal}
            style={{ y: foundationTitleY }}
            className="mb-10 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(280px,0.45fr)] lg:items-end"
          >
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--brand-purple-700)/0.16)] bg-white/80 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-700))] shadow-sm backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--brand-gold-500))]" />
                Our Foundation
              </span>
              <h2 className="mt-5 max-w-4xl font-serif text-3xl font-bold leading-[1.02] text-[hsl(var(--brand-navy-950))] sm:text-4xl lg:text-[2.9rem]">
                Built where language, paperwork, people and pressure all collide.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-on-light-secondary lg:pb-1">
              The foundation is simple: cross-border work fails when communication and execution live in separate rooms.
              UVAN was built to keep them together.
            </p>
          </motion.div>

          <div className="grid gap-5 lg:grid-cols-12">
            <motion.article
              className="relative overflow-hidden rounded-[2rem] border border-[hsl(var(--brand-navy-950)/0.12)] bg-[hsl(var(--brand-navy-950))] p-6 text-white shadow-[0_22px_60px_rgba(20,18,47,0.22)] sm:p-8 lg:col-span-8 lg:row-span-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealLeft}
              transition={springReveal}
              style={{ y: foundationCardY }}
              whileHover={{ y: -8, rotateX: 1, rotateY: -1 }}
            >
              <motion.div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,hsl(var(--brand-purple-500)/0.34),transparent_34%),radial-gradient(circle_at_18%_88%,hsl(var(--brand-gold-500)/0.16),transparent_32%)]"
                animate={{ opacity: [0.72, 1, 0.72], scale: [1, 1.05, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative z-10 grid gap-7 lg:grid-cols-[minmax(0,1fr)_240px] lg:items-center">
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-gold-500))]">
                    The operating thesis
                  </p>
                  <p className="mt-5 max-w-xl text-lg font-semibold leading-relaxed text-white/90 sm:text-xl">
                    UVAN was founded in 2020 on a single conviction: companies win cross-border expansion when their partner has
                    already been on both sides of the table.
                  </p>
                  <blockquote className="mt-7 max-w-lg border-l-4 border-[hsl(var(--brand-gold-500))] bg-white/[0.07] py-5 pl-5 pr-5 font-serif text-lg italic leading-relaxed text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:text-xl">
                    &ldquo;We don&apos;t separate language from operations. In our experience, they are the same problem.&rdquo;
                  </blockquote>
                </div>
                <motion.img
                  src="/doodles/International trade-bro.svg"
                  alt="International trade illustration representing UVAN's cross-border operating foundation"
                  className="mx-auto h-52 w-full max-w-[280px] object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.24)] sm:h-60 lg:h-72"
                  loading="lazy"
                  decoding="async"
                  style={{ y: foundationIllustrationY }}
                  animate={{ rotate: [0, 1.5, 0], scale: [1, 1.03, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="grid gap-4 border-t border-white/10 pt-6 text-sm font-semibold leading-relaxed text-white/78 md:grid-cols-2 lg:col-span-2">
                  <p>
                    We sit at a rare intersection of <strong className="text-white">125+ language capability</strong> and
                    <strong className="text-white"> on-ground operational expertise</strong>.
                  </p>
                  <p>
                    That makes UVAN different from both traditional language agencies and conventional market entry consultants.
                  </p>
                </div>
              </div>
            </motion.article>

            <motion.article
              className="relative flex min-h-[232px] overflow-hidden rounded-[2rem] border border-[hsl(var(--border-light-strong))] bg-white p-6 shadow-[0_16px_38px_rgba(26,22,51,0.08)] sm:p-7 lg:col-span-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealRight}
              transition={{ ...springReveal, delay: 0.08 }}
              style={{ y: foundationSideY }}
              whileHover={{ y: -8, rotateZ: -0.35, boxShadow: "0 24px 54px rgba(26,22,51,0.12)" }}
            >
              <div className="my-auto">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[hsl(var(--brand-purple-500)/0.12)] text-[hsl(var(--brand-purple-700))]">
                  <Globe2 className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[hsl(var(--brand-navy-950))]">Our Mission</h3>
                <p className="mt-3 text-sm leading-relaxed text-on-light-secondary">
                  Help customers grow by communicating clearly with global markets, while preserving language, heritage and
                  business intent through accurate translation, interpretation and localization.
                </p>
              </div>
            </motion.article>

            <motion.article
              className="relative flex min-h-[232px] overflow-hidden rounded-[2rem] border border-[hsl(var(--brand-purple-500)/0.24)] bg-white/75 p-6 shadow-[0_16px_38px_rgba(26,22,51,0.07)] backdrop-blur sm:p-7 lg:col-span-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealRight}
              transition={{ ...springReveal, delay: 0.14 }}
              style={{ y: foundationSideY }}
              whileHover={{ y: -8, rotateZ: 0.35, boxShadow: "0 24px 54px rgba(26,22,51,0.11)" }}
            >
              <div className="my-auto">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[hsl(var(--brand-navy-950))] text-[hsl(var(--brand-gold-500))]">
                  <Handshake className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[hsl(var(--brand-navy-950))]">Our Vision</h3>
                <p className="mt-3 text-sm leading-relaxed text-on-light-secondary">
                  Become the leading cross-border partner for companies operating between India and the emerging world,
                  combining language excellence, operational capability and institutional credibility.
                </p>
              </div>
            </motion.article>

            <motion.div
              className="relative flex min-h-[160px] flex-col justify-center overflow-hidden rounded-[2rem] border border-[hsl(var(--border-light-strong))] bg-white p-5 shadow-[0_16px_38px_rgba(26,22,51,0.06)] sm:p-6 lg:col-span-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealUp}
              transition={{ ...springReveal, delay: 0.18 }}
              style={{ y: foundationTitleY }}
              whileHover={{ y: -7 }}
            >
              <p className="relative z-10 text-[10px] font-bold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-700))]">
                Proof in motion
              </p>
              <div className="relative z-10 mt-5 grid grid-cols-3 gap-2 sm:gap-3">
                {foundationProofPoints.map((item) => (
                  <div key={item.label} className="rounded-2xl bg-[hsl(var(--surface-light-100))] px-2 py-3 text-center">
                    <p className="font-serif text-2xl font-bold text-[hsl(var(--brand-navy-950))]">{item.value}</p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-on-light-muted">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative flex min-h-[160px] overflow-hidden rounded-[2rem] border border-[hsl(var(--brand-gold-500)/0.34)] bg-[hsl(var(--brand-gold-500)/0.12)] p-5 shadow-[0_16px_38px_rgba(26,22,51,0.05)] sm:p-6 lg:col-span-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealUp}
              transition={{ ...springReveal, delay: 0.22 }}
              style={{ y: foundationTitleY }}
              whileHover={{ y: -7, boxShadow: "0 22px 50px rgba(176,139,48,0.14)" }}
            >
              <div className="flex w-full flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div className="max-w-xl">
                  <p className="flex items-center gap-2 font-serif text-lg font-bold text-[hsl(var(--brand-navy-950))]">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[hsl(var(--brand-purple-700))] shadow-sm">
                      <Award className="h-4.5 w-4.5" />
                    </span>
                    Official Credentials & Registration
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-on-light-secondary">
                    Recognized by institutional partners, certified for quality, and built from real corridor work across
                    India, Asia, Latin America and Africa.
                  </p>
                </div>
                <div className="grid gap-2 sm:grid-cols-2 md:min-w-[320px]">
                  {foundationCredentials.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/72 px-3 py-2 text-xs font-semibold text-[hsl(var(--brand-navy-950)/0.78)] shadow-sm"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[hsl(var(--brand-purple-700))]" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.aside
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealUp}
            transition={{ ...springReveal, delay: 0.26 }}
            className="mt-6 rounded-[1.75rem] border border-[hsl(var(--brand-purple-700)/0.14)] bg-white/82 p-6 text-sm leading-[1.85] text-on-light-secondary shadow-[0_18px_46px_rgba(26,22,51,0.06)] backdrop-blur sm:p-8"
          >
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[hsl(var(--brand-purple-700))]">
              What is UVAN?
            </p>
            {ENTITY_PARAGRAPH_A}
          </motion.aside>
        </div>
      </section>

      <SectionDivider variant="slant" />

      {/* Founders Section */}
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
            <motion.span
              className="inline-block px-4 py-1.5 rounded-full theme-card-light text-[hsl(var(--brand-purple-700))] text-xs font-semibold tracking-wider uppercase mb-4"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              Executive Leadership
            </motion.span>
            <motion.h2
              className="mx-auto max-w-3xl font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-on-light leading-tight"
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={springReveal}
            >
              Leadership That Built the Corridors
            </motion.h2>
            <motion.img
              src={doodleBridge}
              alt=""
              className="pointer-events-none mx-auto mt-6 h-14 w-[min(100%,480px)] max-w-none select-none opacity-[0.25]"
              animate={{ scaleX: [0.96, 1.04, 0.96], opacity: [0.18, 0.34, 0.18] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </header>

          <div className="grid gap-6 lg:grid-cols-12">
            <motion.article
              className="relative overflow-hidden rounded-[2rem] border border-[hsl(var(--brand-navy-950)/0.14)] bg-[hsl(var(--brand-navy-950))] p-5 text-white shadow-[0_22px_60px_rgba(20,18,47,0.2)] sm:p-6 lg:col-span-7"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealLeft}
              transition={springReveal}
              whileHover={{ y: -8, rotateX: 0.75, rotateY: -0.75 }}
            >
              <motion.div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_95%_0%,hsl(var(--brand-purple-500)/0.34),transparent_42%)]"
                animate={{ opacity: [0.72, 1, 0.72], scale: [1, 1.04, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative z-10 grid gap-6 md:grid-cols-[220px_minmax(0,1fr)]">
                <figure className="relative overflow-hidden rounded-2xl bg-white/8">
                  <motion.img
                    src="/Soham-Sir.jpg"
                    alt="Soham Kakade, Founder and CEO of UVAN"
                    className="aspect-[4/5] h-full min-h-[300px] w-full object-cover object-center"
                    loading="lazy"
                    decoding="async"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[hsl(var(--brand-navy-950)/0.9)] to-transparent p-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[hsl(var(--brand-gold-500))]">
                      Founder & CEO
                    </p>
                  </div>
                </figure>

                <div className="flex min-w-0 flex-col">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-gold-500))]">
                      Corridor Builder
                    </p>
                    <h3 className="mt-2 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
                      Soham Kakade
                    </h3>
                    <p className="mt-4 max-w-xl text-sm font-medium leading-relaxed text-white/78">
                      A decade inside confidential boardroom negotiations before building UVAN. Soham brings 60,000+ hours
                      of interpretation experience across Mandarin, Cantonese, Japanese and ASEAN corridors.
                    </p>
                    <p className="mt-4 max-w-xl rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-xs leading-relaxed text-white/72">
                      {ENTITY_PARAGRAPH_B}
                    </p>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {[
                      { value: "60k+", label: "Interpretation hours" },
                      { value: "125+", label: "Languages" },
                      { value: "10+", label: "Sectors" },
                    ].map((item, index) => (
                      <motion.div
                        key={item.label}
                        className="rounded-2xl border border-white/10 bg-white/[0.06] p-3"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: 0.2 + index * 0.08 }}
                        whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,0.1)" }}
                      >
                        <p className="font-serif text-2xl font-bold text-[hsl(var(--brand-gold-500))]">{item.value}</p>
                        <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white/55">{item.label}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {["BLCU Scholarship", "Vice President, CITLoB", "Bhashini Partner", "MSAMB Program Designer"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/12 bg-white/[0.07] px-3 py-1 text-[10px] font-semibold tracking-wide text-white/78"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-3 border-t border-white/10 pt-6">
                    <a
                      href="https://www.linkedin.com/in/soham-kakade-77b2819b/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-white/12"
                    >
                      LinkedIn
                      <ArrowRight className="h-4 w-4 text-[hsl(var(--brand-gold-500))]" />
                    </a>
                    <Link
                      to="/ask-soham"
                      className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.08em] text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
                    >
                      Ask Soham
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>

            <motion.article
              className="relative overflow-hidden rounded-[2rem] border border-[hsl(var(--border-light-strong))] bg-white p-5 shadow-[0_18px_44px_rgba(26,22,51,0.08)] sm:p-6 lg:col-span-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealRight}
              transition={{ ...springReveal, delay: 0.12 }}
              whileHover={{ y: -8, rotateX: 0.75, rotateY: 0.75, boxShadow: "0 26px 62px rgba(26,22,51,0.13)" }}
            >
              <motion.div
                className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[hsl(var(--brand-gold-500)/0.16)] blur-3xl"
                animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="grid gap-6">
                <div className="grid gap-5 sm:grid-cols-[170px_minmax(0,1fr)] lg:grid-cols-1 xl:grid-cols-[170px_minmax(0,1fr)]">
                  <figure className="overflow-hidden rounded-2xl border border-[hsl(var(--border-light-strong))] bg-[hsl(var(--surface-light-100))]">
                    <motion.img
                      src="/Sukhada-maam.jpg"
                      alt="CMA Sukhada Kakade Bhalerao, Co-Founder and Director of UVAN"
                      className="aspect-[4/5] h-full min-h-[220px] w-full object-cover object-center"
                      loading="lazy"
                      decoding="async"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </figure>
                  <div className="min-w-0 self-center">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-gold-600))]">
                      Co-Founder & Director
                    </p>
                    <h3 className="mt-2 font-serif text-2xl font-bold leading-tight text-[hsl(var(--brand-navy-950))] sm:text-3xl">
                      CMA Sukhada K. Bhalerao
                    </h3>
                    <p className="mt-4 border-l-2 border-[hsl(var(--brand-gold-600))] pl-4 text-sm font-medium italic leading-relaxed text-on-light-secondary">
                      Certified Management Accountant and the financial operations backbone behind UVAN&apos;s market entry mandates.
                    </p>
                  </div>
                </div>

                <div className="border-t border-[hsl(var(--border-light))] pt-6">
                  <h4 className="font-serif text-xl font-bold leading-tight text-[hsl(var(--brand-navy-950))]">
                    Financial discipline for complex cross-border work.
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-on-light-secondary">
                    Sukhada brings 15+ years across finance, auditing, RBI/FEMA compliance, internal controls and entity
                    setup, giving UVAN the operating discipline needed for multi-workstream client mandates.
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-on-light-muted">Key Credentials</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {["Certified CMA", "15+ Years Experience", "RBI & FEMA Advisory", "Internal Controls", "Co-Founder, Bhashik"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[hsl(var(--border-light-strong))] bg-[hsl(var(--surface-light-100))] px-3 py-1 text-[10px] font-semibold tracking-wide text-[hsl(var(--brand-gold-600))]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 border-t border-[hsl(var(--border-light))] pt-5">
                  <a
                    href="https://www.linkedin.com/company/ewan-business-solutions/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light-strong))] bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-on-light transition hover:bg-[hsl(var(--surface-light-100))]"
                  >
                    LinkedIn
                    <ArrowRight className="h-4 w-4 text-[hsl(var(--brand-gold-600))]" />
                  </a>
                  <a
                    href="https://bhashikskill.co.in"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-navy-950))] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[hsl(var(--brand-navy-900))]"
                  >
                    Bhashik Skill
                    <ArrowRight className="h-4 w-4 text-[hsl(var(--brand-gold-500))]" />
                  </a>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      <SectionDivider variant="slant" flip fromDark />

      {/* Institutional Recognition */}
      <section className="relative overflow-hidden px-6 py-20 theme-section-light md:py-24 stitch-line stitch-line-bottom">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,hsl(var(--brand-purple-700)/0.07),transparent_38%)]" />
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.1]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-10 max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-700))]">
              <Award className="h-3.5 w-3.5" aria-hidden />
              Recognised by Governments and Institutions
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-[hsl(var(--brand-navy-950))] sm:text-4xl lg:text-5xl">
              Institutional trust built over years of corridor work
            </h2>
            <p className="mt-4 text-base leading-relaxed text-on-light-secondary">
              In a formal letter of recognition, the Consulate General acknowledged UVAN&apos;s contribution to
              strengthening India-China agricultural and trade relations - noting that over 1,200 farmers and 800
              hectares of farmland would benefit from the work.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mb-10 overflow-hidden rounded-3xl border border-[hsl(var(--border-light))] bg-white p-4 sm:p-5"
          >
            <p className="mb-4 px-2 text-[10px] font-bold uppercase tracking-[0.18em] text-on-light-muted">
              Credentials at a glance
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
              {recognitions.map((item) => (
                <div
                  key={item.title}
                  className="flex min-h-[88px] items-center justify-center rounded-2xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] px-3 py-4"
                >
                  <BrandLogo
                    src={item.logo}
                    alt={item.logoAlt}
                    className="max-h-12 w-full max-w-[120px] object-contain"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {recognitions
            .filter((item) => item.featured)
            .map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="theme-card-light card-shine mb-10 overflow-hidden rounded-3xl border border-[hsl(var(--border-light))]"
              >
                <div className="grid lg:grid-cols-12">
                  <div className="border-b border-[hsl(var(--border-light))] p-8 lg:col-span-5 lg:border-b-0 lg:border-r lg:p-10">
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-[hsl(var(--border-light))] bg-white p-3 shadow-sm">
                      <BrandLogo src={item.logo} alt={item.logoAlt} className="max-h-12 w-full object-contain" />
                    </div>
                    <span className="inline-flex rounded-full bg-[hsl(var(--brand-gold-500)/0.14)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-gold-600))]">
                      {item.badge}
                    </span>
                    <h3 className="mt-4 font-serif text-2xl font-bold leading-snug text-[hsl(var(--brand-navy-950))] sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-on-light-secondary sm:text-base">{item.desc}</p>
                  </div>
                  <div className="grid gap-4 p-6 sm:grid-cols-2 lg:col-span-7 lg:p-8">
                    {item.proofImages?.map((letter) => (
                      <figure
                        key={letter.src}
                        className="overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))]"
                      >
                        <div className="p-3 sm:p-4">
                          <img
                            src={letter.src}
                            alt={letter.alt}
                            loading="lazy"
                            className="w-full rounded-xl border border-[hsl(var(--border-light-strong))] object-cover"
                          />
                        </div>
                        <figcaption className="border-t border-[hsl(var(--border-light))] px-4 py-3 text-center text-[10px] font-bold uppercase tracking-[0.14em] text-on-light-muted">
                          {letter.label}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {recognitions
              .filter((item) => !item.featured)
              .map((item, i) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.06 }}
                  whileHover={{ y: -6 }}
                  className="theme-card-light card-shine flex h-full flex-col overflow-hidden rounded-3xl border border-[hsl(var(--border-light))]"
                >
                  <div className="flex min-h-[108px] items-center justify-center border-b border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] px-6 py-5">
                    <BrandLogo
                      src={item.logo}
                      alt={item.logoAlt}
                      className="max-h-16 w-full max-w-[200px] object-contain"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <span className="inline-flex w-fit rounded-full bg-[hsl(var(--brand-purple-700)/0.1)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--brand-purple-700))]">
                      {item.badge}
                    </span>
                    <h3 className="mt-4 font-serif text-xl font-bold leading-snug text-[hsl(var(--brand-navy-950))]">
                      {item.title}
                    </h3>
                    <p className="mt-3 flex-grow text-sm leading-relaxed text-on-light-secondary">{item.desc}</p>
                    <div className="mt-5 flex items-center gap-2 border-t border-[hsl(var(--border-light))] pt-4 text-[11px] font-semibold text-on-light-muted">
                      <CheckCircle2 className="h-4 w-4 text-[hsl(var(--brand-purple-700))]" aria-hidden />
                      Verified credential
                    </div>
                  </div>
                </motion.article>
              ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="our-partners" className="relative overflow-hidden px-6 py-16 theme-section-soft md:py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-[position:72%_35%] opacity-[0.15] mix-blend-multiply"
          style={{
            backgroundImage: "url('/bg-blobs/abstract-purple-fluid-wave-background-free-vector.jpg')",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-[position:12%_78%] opacity-[0.13] mix-blend-multiply"
          style={{
            backgroundImage: "url('/bg-blobs/beautiful-purple-color-gradient-background-free-vector.jpg')",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-[position:8%_18%] opacity-[0.09] mix-blend-soft-light"
          style={{
            backgroundImage:
              "url('/bg-blobs/banner-background-colorful-bright-purple-gradient-geometric-effect-eps-10-free-vector.jpg')",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-[position:88%_82%] opacity-[0.11] mix-blend-multiply"
          style={{
            backgroundImage: "url('/bg-blobs/purple-abstract-background-luxury-elements-260nw-2723588695.webp')",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-soft-light"
          style={{
            backgroundImage:
              "url('/bg-blobs/abstract-technology-futuristic-digital-square-pattern-with-lighting-glowing-particles-square-elements-on-dark-purple-background-free-vector.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 84% 24%, hsl(var(--brand-purple-700)/0.1) 0%, transparent 40%), radial-gradient(circle at 14% 72%, hsl(var(--brand-gold-500)/0.09) 0%, transparent 36%)",
          }}
          aria-hidden
        />
        <div className="glow-orb glow-orb-purple pointer-events-none -right-20 top-8 h-[340px] w-[340px] opacity-[0.08]" />
        <div className="glow-orb glow-orb-gold pointer-events-none -bottom-16 -left-20 h-[300px] w-[300px] opacity-[0.07]" />
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.1]" />
        <img
          src={doodleDots}
          alt=""
          className="pointer-events-none absolute left-8 top-20 hidden h-36 w-48 select-none opacity-[0.11] lg:block"
          aria-hidden
        />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(200px,240px)] lg:items-end"
          >
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-700))]">
                <Handshake className="h-3.5 w-3.5" aria-hidden />
                Ecosystem & Alliance
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-[hsl(var(--brand-navy-950))] sm:text-4xl lg:text-5xl">
                Partners & Collaborators Who Extend Our Reach
              </h2>
              <p className="mt-4 text-base leading-relaxed text-on-light-secondary">
                UVAN works with trusted institutional and commercial partners whose capabilities complement our own -
                allowing us to deliver more comprehensive solutions for clients navigating complex cross-border environments.
              </p>
            </div>
            <motion.img
              src="/doodles/Business merger-amico.svg"
              alt="Partnership illustration"
              className="mx-auto h-36 w-full max-w-[220px] object-contain lg:mx-0 lg:ml-auto"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {partners.map((partner, i) => (
              <motion.article
                key={partner.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="theme-card-light card-shine group flex h-full flex-col overflow-hidden rounded-3xl border border-[hsl(var(--border-light))]"
              >
                <div className="flex min-h-[132px] items-center justify-center border-b border-[hsl(var(--border-light))] bg-white px-8 py-6">
                  <BrandLogo
                    src={partner.logo}
                    alt={partner.logoAlt}
                    className="max-h-16 w-full max-w-[220px] object-contain transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <h3 className="font-serif text-xl font-bold text-[hsl(var(--brand-navy-950))] transition group-hover:text-[hsl(var(--brand-purple-700))]">
                    {partner.name}
                  </h3>
                  <p className="mt-3 flex-grow text-sm leading-relaxed text-on-light-secondary">{partner.description}</p>
                  {partner.link ? (
                    <div className="mt-6 border-t border-[hsl(var(--border-light))] pt-4">
                      <a
                        href={partner.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-[hsl(var(--brand-purple-700))] transition group-hover:translate-x-0.5"
                      >
                        Visit Website
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  ) : null}
                </div>
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
        <motion.img
          src={doodleSquiggle}
          alt=""
          className="pointer-events-none absolute -right-6 top-24 z-0 h-52 w-40 select-none opacity-[0.08]"
          animate={{ y: [0, 14, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            className="relative overflow-hidden rounded-[2.5rem] border border-[hsl(var(--border-light-strong))] bg-white p-8 shadow-[0_16px_40px_rgba(26,22,51,0.06)] md:p-12 border-glow"
            initial={{ opacity: 0, y: 34, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={springReveal}
            whileHover={{ y: -8, boxShadow: "0 28px 70px rgba(26,22,51,0.12)" }}
          >
            
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
                    "4:00 PM - 6:00 PM",
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
            
          </motion.div>
        </div>
      </section>

      {/* Language Cards */}
      <section className="relative overflow-hidden px-6 py-16 theme-section-soft md:py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-[position:20%_30%] opacity-[0.16] mix-blend-multiply"
          style={{
            backgroundImage:
              "url('/bg-blobs/abstract-background-purple-dark-blue-gradient-wave-modern-background-combination-curve-free-vector.jpg')",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-[position:85%_70%] opacity-[0.14] mix-blend-multiply"
          style={{
            backgroundImage: "url('/bg-blobs/purple-luxury-wave-background-design-free-vector.jpg')",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.1] mix-blend-soft-light"
          style={{
            backgroundImage: "url('/bg-blobs/magic-background-with-purple-light-rays-effect-free-vector.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 18% 22%, hsl(var(--brand-purple-700)/0.1) 0%, transparent 42%), radial-gradient(circle at 82% 78%, hsl(var(--brand-gold-500)/0.08) 0%, transparent 38%)",
          }}
          aria-hidden
        />
        <div className="glow-orb glow-orb-purple pointer-events-none -left-24 top-12 h-[380px] w-[380px] opacity-[0.09]" />
        <div className="glow-orb glow-orb-gold pointer-events-none -bottom-20 -right-16 h-[320px] w-[320px] opacity-[0.07]" />
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.1]" />
        <img
          src={doodleDots}
          alt=""
          className="pointer-events-none absolute right-8 top-16 hidden h-40 w-52 select-none opacity-[0.12] lg:block"
          aria-hidden
        />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-12 grid gap-8 lg:mb-14 lg:grid-cols-[minmax(0,1fr)_minmax(200px,240px)] lg:items-end"
          >
            <div className="max-w-2xl text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-700))]">
                <Languages className="h-3.5 w-3.5" aria-hidden />
                Linguistic Footprint
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-[hsl(var(--brand-navy-950))] sm:text-4xl lg:text-5xl">
                Languages We <span className="italic text-[hsl(var(--brand-purple-700))]">Master</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-on-light-secondary lg:mx-0">
                125+ languages with deep specialization across Oriental, ASEAN, European, and Indian corridors - built
                from real boardroom and market execution work.
              </p>
            </div>
            <motion.div
              className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-[hsl(var(--border-light))] bg-white shadow-sm lg:mx-0 lg:ml-auto"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Globe2 className="h-11 w-11 text-[hsl(var(--brand-purple-700))]" aria-hidden />
            </motion.div>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {languageGroups.map((lang, i) => (
              <motion.article
                key={lang.name}
                className="group theme-card-light card-shine flex h-full flex-col overflow-hidden rounded-3xl border border-[hsl(var(--border-light))]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: (i % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
              >
                <div className="flex items-start justify-between gap-3 border-b border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-[0_4px_14px_hsl(var(--brand-navy-950)/0.12)] ring-1 ring-[hsl(var(--border-light))]">
                      <LanguageFlag src={lang.flagSrc} alt={lang.flagAlt} />
                    </div>
                    <span
                      className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] ${
                        lang.accent === "gold"
                          ? "bg-[hsl(var(--brand-gold-500)/0.14)] text-[hsl(var(--brand-gold-600))]"
                          : lang.accent === "cyan"
                            ? "bg-[hsl(var(--brand-cyan-500)/0.14)] text-[hsl(var(--brand-cyan-500))]"
                            : "bg-[hsl(var(--brand-purple-700)/0.1)] text-[hsl(var(--brand-purple-700))]"
                      }`}
                    >
                      {lang.region}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-on-light-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="font-serif text-lg font-bold leading-snug text-[hsl(var(--brand-navy-950))] transition group-hover:text-[hsl(var(--brand-purple-700))] sm:text-xl">
                    {lang.name}
                  </h3>
                  <div className="mt-4 flex items-end gap-2">
                    <p className="font-serif text-3xl font-bold leading-none text-[hsl(var(--brand-navy-950))]">
                      {lang.speakers}
                    </p>
                    <p className="pb-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-on-light-muted">
                      speakers
                    </p>
                  </div>
                  <p className="mt-1 text-[11px] font-medium text-on-light-muted">{lang.speakersDetail}</p>
                  <p className="mt-4 flex-grow text-sm leading-relaxed text-on-light-secondary">{lang.desc}</p>
                  <div className="mt-5 flex items-center gap-2 border-t border-[hsl(var(--border-light))] pt-4 text-[11px] font-semibold text-[hsl(var(--brand-purple-700))]">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0" aria-hidden />
                    Corridor-ready capability
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <AeoFrequentlyAskedQuestions items={ABOUT_US_FAQS} className="theme-section-light px-6 py-16 md:py-20" />

      </div>
    </PageLayout>
  );
};

export default AboutUs;
