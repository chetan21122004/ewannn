import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Award, CheckCircle2, Globe2, Handshake, Languages } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/PageLayout";
import SectionDivider from "@/components/SectionDivider";
import AutoHorizontalSlider from "@/components/language-gazette/AutoHorizontalSlider";
import PartnerRevealCard from "@/components/PartnerRevealCard";
import ConsulateLetterGallery from "@/components/ConsulateLetterGallery";
import AeoFrequentlyAskedQuestions from "@/components/AeoFrequentlyAskedQuestions";
import { ABOUT_US_FAQS, ENTITY_PARAGRAPH_A_SECTIONS, ENTITY_PARAGRAPH_B } from "@/data/aeoContent";
import { absoluteUrl, faqPageSchema, personSoham, personSukhada } from "@/lib/schemaHelpers";
import { SUKHADA_LINKEDIN } from "@/lib/site";

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
    desc: "In a formal letter of recognition, the Consulate General acknowledged our contribution to strengthening India-China agricultural and trade relations - noting that over 1,200 farmers and 800 hectares of farmland would benefit from the work.",
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
    desc: "Export Program Empanelment",
    badge: "State Empanelment",
    logo: "/allLogos/MSAMB-logo.png",
    logoAlt: "Maharashtra State Agricultural Marketing Board logo",
  },
  {
    title: "Bhashini Initiative - Ministry of Electronics & IT (MeitY)",
    desc: "Ministry of Electronics & IT (MeitY)",
    badge: "National AI Mission",
    logo: "/allLogos/Bhashini-Logo.png",
    logoAlt: "Bhashini initiative logo",
  },
  {
    title: "CITLoB - Confederation of Indian Translators and Language Professionals",
    desc: "Vice President",
    badge: "Industry Leadership",
    logo: "/allLogos/CITLoB-logo-2023.jpg",
    logoAlt: "CITLoB logo",
  },
  {
    title: "Symbiosis International University",
    desc: "Faculty",
    badge: "Academic Engagement",
    logo: "/allLogos/Symbiosis-logo.png",
    logoAlt: "Symbiosis International University logo",
  },
  {
    title: "IB Board - International Baccalaureate",
    desc: "International Baccalaureate Curriculum Designer",
    badge: "Curriculum Design",
    logo: "/allLogos/IB-logo.svg",
    logoAlt: "International Baccalaureate logo",
  },
];

const partners = [
  {
    type: "Institutional Partner",
    name: "Bhashini - MeitY, Government of India",
    description:
      "India's national language technology initiative. Our partnership with Bhashini aligns UVAN with the country's most significant investment in multilingual AI - strengthening our language technology capabilities and our institutional standing.",
    logo: "/allLogos/Bhashini-Logo.png",
    logoAlt: "Bhashini logo",
    featured: true,
  },
  {
    type: "Strategic Partner",
    name: "Tattava CX",
    description:
      "Strategic communications and customer experience partner. Tattava CX brings expertise in brand communication, client experience design, and strategic messaging - complementing UVAN's cross-border language and market entry work.",
    logo: "/allLogos/tattava-cx.svg",
    logoAlt: "Tattava CX logo",
  },
  {
    type: "Sister Institution",
    name: "Vaani Skills",
    description:
      "Vaani Skills is UVAN's sister institution - a skill development organisation focused on language training, commerce education, and vocational upskilling. Vaani trains language professionals across 125+ languages including Japanese, Mandarin, Korean, German, French, Spanish, Arabic, and all major Indian regional languages. This institutional link ensures UVAN has access to a trained, job-ready talent pipeline - and gives our clients confidence in the quality of professionals behind every engagement.",
    logo: "/allLogos/bhashik-logo.png",
    logoAlt: "Vaani Skills logo",
    link: "https://bhashikskill.co.in",
  },
] as const;

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

const doodleSquiggle = "/stitch/about-us/doodle-squiggle-right.svg";
const doodleBridge = "/stitch/about-us/doodle-bridge-wave.svg";
const doodleDots = "/stitch/about-us/doodle-dot-field.svg";
const heroBlobBackground =
  "/bg-blobs/purple-luxury-wave-background-design-free-vector.jpg";
const heroBlobAccent =
  "/bg-blobs/abstract-purple-fluid-wave-background-free-vector.jpg";
const heroDoodleVisual = "/doodles/International trade-rafiki.svg";

const aboutLd = [
  personSoham(),
  personSukhada(),
  faqPageSchema(absoluteUrl("/about-us/"), ABOUT_US_FAQS),
];

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
  const { scrollYProgress } = useScroll({ target: pageRef, offset: ["start start", "end end"] });
  const corridorScale = useTransform(scrollYProgress, [0, 1], [0.06, 1]);
  const corridorGlowY = useTransform(scrollYProgress, [0, 1], ["0%", "82%"]);

  return (
    <PageLayout
      title={t("seo.about.title")}
      description={t("seo.about.description")}
      canonicalPath="/about-us/"
      keywords={t("seo.about.keywords")}
      jsonLd={aboutLd}
    >
      <div ref={pageRef} className="relative">
        <div className="pointer-events-none fixed right-4 top-8 z-40 hidden h-[52vh] w-px overflow-hidden rounded-full bg-[hsl(var(--brand-navy-950)/0.08)] xl:block">
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
        id="about-ewan"
        className="relative scroll-mt-24 overflow-hidden section-pad-hero sm:px-6"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-[hsl(var(--surface-light-50))] to-[hsl(var(--surface-light-100))]" />
        <div
          className="pointer-events-none absolute -right-[12%] -top-[22%] h-[min(92vw,780px)] w-[min(78vw,680px)] opacity-[0.2] grayscale-[55%] contrast-[0.9] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_72%)]"
          style={{
            backgroundImage: `url('${heroBlobBackground}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-[28%] -left-[10%] h-[min(70vw,520px)] w-[min(62vw,460px)] opacity-[0.1] grayscale-[70%] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
          style={{
            backgroundImage: `url('${heroBlobAccent}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,white_0%,hsl(var(--surface-light-50)/0.88)_42%,hsl(var(--surface-light-100)/0.96)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_42%_at_82%_12%,hsl(var(--brand-cyan-500)/0.07),transparent_58%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_38%_32%_at_8%_92%,hsl(var(--brand-gold-500)/0.06),transparent_52%)]" />
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.07]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[hsl(var(--surface-light-100))] to-transparent sm:h-24" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springReveal}
            className="max-w-3xl"
          >
            <p className="mb-4 inline-flex max-w-full items-center rounded-full border border-[hsl(var(--border-light))] bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))] sm:mb-5 sm:px-4 sm:py-1.5 sm:text-xs sm:tracking-[0.22em]">
              About the Firm
            </p>
            <h1 className="font-serif text-[1.85rem] font-bold leading-[1.08] text-on-light sm:text-4xl lg:text-[3.15rem] lg:leading-[1.06] xl:text-[3.35rem]">
              Built for the Corridors{" "}
              <span className="text-[hsl(var(--brand-purple-700))]">Others Don&apos;t Know.</span>
            </h1>
          </motion.div>

          <div className="mt-8 grid items-start gap-8 sm:mt-10 lg:mt-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.85fr)] lg:gap-12 xl:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springReveal, delay: 0.06 }}
              className="order-2 lg:order-1"
            >
              <div className="max-w-2xl space-y-4 rounded-[1.25rem] border border-[hsl(var(--border-light))] bg-white/90 p-5 shadow-[0_14px_40px_rgba(26,22,51,0.06)] sm:space-y-5 sm:p-6 lg:max-w-none">
                {ENTITY_PARAGRAPH_A_SECTIONS.map((paragraph, index) => (
                  <p
                    key={paragraph}
                    className={
                      index === 0
                        ? "text-base font-medium leading-[1.72] text-on-light sm:text-lg"
                        : index === ENTITY_PARAGRAPH_A_SECTIONS.length - 1
                          ? "border-t border-[hsl(var(--border-light))] pt-4 text-sm leading-[1.78] text-on-light-secondary sm:text-[0.9375rem]"
                          : "text-sm leading-[1.78] text-on-light-secondary sm:text-[0.9375rem]"
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            <motion.figure
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springReveal, delay: 0.12 }}
              className="order-1 lg:order-2 lg:sticky lg:top-8 lg:self-start"
            >
              <img
                src={heroDoodleVisual}
                alt="Cross-border trade and market corridors"
                className="mx-auto h-auto w-full max-w-[min(100%,340px)] lg:mx-0 lg:max-w-[min(100%,400px)] xl:max-w-[440px]"
                loading="eager"
              />
            </motion.figure>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section
        id="the-founders"
        className="relative overflow-hidden border-y border-[hsl(var(--border-light)/0.85)] px-6 py-24 theme-section-soft md:py-28 stitch-line stitch-line-bottom"
      >
        <div className="glow-orb glow-orb-gold pointer-events-none h-[380px] w-[380px] -bottom-32 right-[-12%] opacity-[0.09]" />
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.18]" />
        <img
          src={doodleSquiggle}
          alt=""
          className="pointer-events-none absolute -left-12 top-40 z-0 hidden h-72 w-56 -scale-x-100 select-none opacity-15 xl:block animate-float"
        />
        <div className="container relative z-10 mx-auto max-w-6xl">
          <header className="mb-16 text-center">
            <motion.h2
              className="mx-auto max-w-3xl font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-on-light leading-tight"
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={springReveal}
            >
              The Founders
            </motion.h2>
            <motion.p
              className="mx-auto mt-4 max-w-2xl text-base text-on-light-muted sm:text-lg"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...springReveal, delay: 0.06 }}
            >
              Leadership that has lived the corridors you are entering.
            </motion.p>
            <motion.img
              src={doodleBridge}
              alt=""
              className="pointer-events-none mx-auto mt-6 h-14 w-[min(100%,480px)] max-w-none select-none opacity-[0.25]"
              animate={{ scaleX: [0.96, 1.04, 0.96], opacity: [0.18, 0.34, 0.18] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </header>

          <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:gap-10">
            <motion.article
              className="relative overflow-hidden rounded-[2rem] border border-[hsl(var(--border-light))] bg-white p-5 shadow-[0_22px_60px_rgba(20,18,47,0.08)] sm:p-7 lg:p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealLeft}
              transition={springReveal}
            >
              <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(240px,280px)_minmax(0,1fr)] lg:items-start">
                <figure className="relative mx-auto w-full max-w-[280px] overflow-hidden rounded-2xl border border-white/10 bg-white/8 lg:mx-0 lg:max-w-none lg:sticky lg:top-8">
                  <motion.img
                    src="/Soham-Sir.jpg"
                    alt="Soham Kakade, Founder and CEO of UVAN"
                    className="aspect-[4/5] w-full object-cover object-center"
                    loading="lazy"
                    decoding="async"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[hsl(var(--brand-navy-950)/0.85)] to-transparent p-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[hsl(var(--brand-gold-500))]">
                      Founder &amp; CEO
                    </p>
                  </div>
                </figure>

                <div className="flex min-w-0 flex-col gap-6">
                  <header className="space-y-3 border-b border-[hsl(var(--border-light))] pb-6">
                    <span className="inline-flex rounded-full border border-[hsl(var(--brand-gold-500)/0.35)] bg-[hsl(var(--brand-gold-500)/0.1)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-gold-600))]">
                      01 · Founder
                    </span>
                    <h3 className="font-serif text-3xl font-bold leading-tight text-on-light sm:text-4xl">Soham Kakade</h3>
                    <p className="max-w-2xl font-serif text-lg font-semibold leading-snug text-on-light-secondary sm:text-xl">
                      10 Years in the Room Before Building the Firm.
                    </p>
                  </header>

                  <div className="rounded-2xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] p-5 sm:p-6">
                    <p className="text-sm leading-[1.85] text-on-light-secondary sm:text-[0.9375rem]">{ENTITY_PARAGRAPH_B}</p>
                  </div>

                  <p className="max-w-3xl rounded-2xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] px-5 py-4 text-sm leading-relaxed text-on-light-secondary">
                    UVAN exists because Soham saw, repeatedly, what happens when companies enter new markets without someone
                    who truly understands both sides of the conversation. He built the firm he wished had existed.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "BLCU Scholarship Recipient",
                      "60,000+ Hours Interpretation",
                      "ISO 9001:2015 Certified",
                      "Vice President CITLoB",
                      "Bhashini Initiative MeitY",
                      "MSAMB Export Program Designer",
                      "Faculty Symbiosis",
                      "IB Board Curriculum Designer",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[hsl(var(--border-light-strong))] bg-[hsl(var(--surface-light-100))] px-3 py-1.5 text-[10px] font-semibold tracking-wide text-on-light-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3 border-t border-[hsl(var(--border-light))] pt-6 sm:flex-row sm:flex-wrap">
                    <a
                      href="https://www.linkedin.com/in/soham-kakade-77b2819b/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[hsl(var(--border-light-strong))] bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-[0.1em] text-on-light transition hover:bg-[hsl(var(--surface-light-100))]"
                    >
                      Connect with Soham on LinkedIn
                      <ArrowRight className="h-4 w-4 shrink-0 text-[hsl(var(--brand-gold-600))]" />
                    </a>
                    <Link
                      to="/ask-soham"
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.08em] text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
                    >
                      Ask Soham - Book a Free 15-Minute Call
                      <ArrowRight className="h-4 w-4 shrink-0" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>

            <motion.article
              className="relative overflow-hidden rounded-[2rem] border border-[hsl(var(--border-light-strong))] bg-white p-5 shadow-[0_18px_44px_rgba(26,22,51,0.08)] sm:p-7 lg:p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealRight}
              transition={{ ...springReveal, delay: 0.08 }}
            >
              <motion.div
                className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[hsl(var(--brand-gold-500)/0.14)] blur-3xl"
                animate={{ scale: [1, 1.18, 1], opacity: [0.45, 0.85, 0.45] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(240px,280px)_minmax(0,1fr)] lg:items-start">
                <figure className="relative mx-auto w-full max-w-[280px] overflow-hidden rounded-2xl border border-[hsl(var(--border-light-strong))] bg-[hsl(var(--surface-light-100))] lg:mx-0 lg:max-w-none lg:sticky lg:top-8">
                  <motion.img
                    src="/Sukhada-maam.jpg"
                    alt="CMA Sukhada Kakade Bhalerao, Co-Founder and Director of UVAN"
                    className="aspect-[4/5] w-full object-cover object-center"
                    loading="lazy"
                    decoding="async"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[hsl(var(--brand-navy-950)/0.88)] to-transparent p-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[hsl(var(--brand-gold-500))]">
                      Co-Founder &amp; Director
                    </p>
                  </div>
                </figure>

                <div className="flex min-w-0 flex-col gap-6">
                  <header className="space-y-3 border-b border-[hsl(var(--border-light))] pb-6">
                    <span className="inline-flex rounded-full border border-[hsl(var(--brand-purple-700)/0.2)] bg-[hsl(var(--brand-purple-700)/0.08)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))]">
                      02 · Co-Founder
                    </span>
                    <h3 className="font-serif text-3xl font-bold leading-tight text-[hsl(var(--brand-navy-950))] sm:text-4xl">
                      <a
                        href={SUKHADA_LINKEDIN}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:text-[hsl(var(--brand-purple-700))] hover:underline"
                      >
                        CMA Sukhada Kakade Bhalerao
                      </a>
                    </h3>
                    <p className="max-w-2xl text-base font-semibold leading-snug text-[hsl(var(--brand-purple-700))] sm:text-lg">
                      The Financial and Operational Intelligence Behind UVAN.
                    </p>
                  </header>

                  <div className="space-y-4 text-sm leading-relaxed text-on-light-secondary sm:text-[0.9375rem]">
                    <p>
                      Sukhada Kakade Bhalerao is a Pune-based Certified Management Accountant (CMA), finance educator, and
                      entrepreneur. As Co-Founder and Director of UVAN, she provides the financial rigour and operational
                      structure that allows UVAN to deliver complex, multi-workstream mandates with confidence. Her expertise
                      spans financial planning, auditing, RBI/FEMA compliance advisory, entity formation financial setup,
                      internal controls, and client financial reporting.
                    </p>
                    <p>
                      With over 15 years of experience - including her own cost accounting practice (est. 2010), faculty roles,
                      and committee contributions - she brings a discipline that is rarely found in language or market entry
                      firms: the ability to see the financial architecture of an expansion before it is built, and to ensure
                      clients move quickly without financial exposure.
                    </p>
                    <p className="rounded-2xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] px-5 py-4">
                      She is also Co-Founder and Director of Vaani Skills, UVAN&apos;s sister institution focused
                      on language training, vocational skills, and career development - ensuring a steady pipeline of skilled,
                      job-ready language professionals for the industry.
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-on-light-muted">Credentials</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {[
                        "Certified Management Accountant (CMA)",
                        "Cost Accounting Practice (est. 2010)",
                        "Finance Educator & Faculty",
                        "Committee Contributor",
                        "Co-Founder, Vaani Skills",
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[hsl(var(--border-light-strong))] bg-[hsl(var(--surface-light-100))] px-3 py-1.5 text-[10px] font-semibold tracking-wide text-[hsl(var(--brand-gold-600))]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 border-t border-[hsl(var(--border-light))] pt-6 sm:flex-row sm:flex-wrap">
                    <a
                      href={SUKHADA_LINKEDIN}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[hsl(var(--border-light-strong))] bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-[0.1em] text-on-light transition hover:bg-[hsl(var(--surface-light-100))]"
                    >
                      Connect with Sukhada on LinkedIn
                      <ArrowRight className="h-4 w-4 shrink-0 text-[hsl(var(--brand-gold-600))]" />
                    </a>
                    <a
                      href="https://bhashikskill.co.in"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[hsl(var(--brand-navy-950))] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[hsl(var(--brand-navy-900))]"
                    >
                      Vaani Skills
                      <ArrowRight className="h-4 w-4 shrink-0 text-[hsl(var(--brand-gold-500))]" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      <SectionDivider variant="slant" flip />

      {/* Institutional Recognition */}
      <section className="relative overflow-hidden px-6 py-20 theme-section-light md:py-24 stitch-line stitch-line-bottom">
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
              Institutional Recognition
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-[hsl(var(--brand-navy-950))] sm:text-4xl lg:text-5xl">
              Recognised by Governments and Institutions
            </h2>
            <h3 className="mt-5 font-serif text-xl font-bold leading-snug text-[hsl(var(--brand-purple-700))] sm:text-2xl lg:text-3xl">
              Recognised by the Consulate General of the People&apos;s Republic of China
            </h3>
            <p className="mt-4 text-base leading-relaxed text-on-light-secondary">
              In a formal letter of recognition, the Consulate General acknowledged UVAN&apos;s contribution to
              strengthening India-China agricultural and trade relations - noting that over 1,200 farmers and 800
              hectares of farmland would benefit from the work. This is the kind of institutional trust that takes years
              to build and cannot be replicated overnight.
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
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
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
                    <h4 className="mt-4 font-serif text-2xl font-bold leading-snug text-[hsl(var(--brand-navy-950))] sm:text-3xl">
                      {item.title}
                    </h4>
                    <p className="mt-4 text-sm leading-relaxed text-on-light-secondary sm:text-base">{item.desc}</p>
                  </div>
                  {item.proofImages ? (
                    <ConsulateLetterGallery letters={item.proofImages} viewLabel="View full letter" />
                  ) : null}
                </div>
              </motion.div>
            ))}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.12 }}
          >
            <AutoHorizontalSlider
              ariaLabel="Institutional credentials"
              autoplayMs={5000}
              edgeFadeFromClass="from-[hsl(var(--surface-light-50))]"
              slideClassName="basis-[88%] sm:basis-[55%] md:basis-[42%] lg:basis-[32%]"
              items={recognitions
                .filter((item) => !item.featured)
                .map((item) => (
                  <article
                    key={item.title}
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
                      <h4 className="mt-4 font-serif text-xl font-bold leading-snug text-[hsl(var(--brand-navy-950))]">
                        {item.title}
                      </h4>
                      <p className="mt-3 flex-grow text-sm leading-relaxed text-on-light-secondary">{item.desc}</p>
                      <div className="mt-5 flex items-center gap-2 border-t border-[hsl(var(--border-light))] pt-4 text-[11px] font-semibold text-on-light-muted">
                        <CheckCircle2 className="h-4 w-4 text-[hsl(var(--brand-purple-700))]" aria-hidden />
                        Verified credential
                      </div>
                    </div>
                  </article>
                ))}
            />
          </motion.div>
        </div>
      </section>

      {/* Partners */}
      <section id="our-partners" className="relative overflow-hidden section-pad px-6 theme-section-soft md:py-24">
        <div className="glow-orb glow-orb-gold pointer-events-none -bottom-10 -left-16 h-[280px] w-[280px] opacity-[0.08]" />
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.08]" />
        <img
          src={doodleDots}
          alt=""
          className="pointer-events-none absolute right-10 top-16 hidden h-32 w-44 select-none opacity-[0.1] xl:block"
          aria-hidden
        />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-12 text-center lg:mb-14"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white/80 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-700))] backdrop-blur-sm">
              <Handshake className="h-3.5 w-3.5" aria-hidden />
              Our Partners
            </span>
            <h2 className="mx-auto mt-4 max-w-3xl font-serif text-3xl font-bold leading-tight text-[hsl(var(--brand-navy-950))] sm:text-4xl lg:text-5xl">
              Partners &amp; Collaborators Who Extend Our Reach
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-on-light-secondary sm:text-lg">
              UVAN works with trusted institutional and commercial partners whose capabilities complement our own —
              allowing us to deliver more comprehensive solutions for clients navigating complex cross-border environments.
            </p>
          </motion.div>

          <div className="flex flex-col gap-6 lg:gap-8">
            {partners
              .filter((partner) => "featured" in partner && partner.featured)
              .map((partner, i) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                >
                  <PartnerRevealCard
                    type={partner.type}
                    name={partner.name}
                    description={partner.description}
                    logo={partner.logo}
                    logoAlt={partner.logoAlt}
                    featured
                    accent="none"
                  />
                </motion.div>
              ))}

            <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
              {partners
                .filter((partner) => !("featured" in partner && partner.featured))
                .map((partner, i) => (
                  <motion.div
                    key={partner.name}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.12 + i * 0.1 }}
                  >
                    <PartnerRevealCard
                      type={partner.type}
                      name={partner.name}
                      description={partner.description}
                      logo={partner.logo}
                      logoAlt={partner.logoAlt}
                      link={"link" in partner ? partner.link : undefined}
                      accent={i === 0 ? "purple" : "gold"}
                    />
                  </motion.div>
                ))}
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="mt-12 rounded-2xl border border-[hsl(var(--border-light))] bg-white/75 px-6 py-5 text-center text-sm text-on-light-secondary backdrop-blur-sm sm:text-base"
          >
            Interested in Partnering With UVAN?{" "}
            <a
              href="/contact"
              className="font-bold text-[hsl(var(--brand-purple-700))] hover:underline"
            >
              Get in Touch About a Partnership →
            </a>
          </motion.p>
        </div>
      </section>

      {/* Oriental Flock */}
      <section id="oriental-flock" className="theme-section-light relative overflow-hidden section-pad px-6">
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
                  Community
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
                
                <Link
                  to="/ask-soham"
                  className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-5 py-2.5 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
                >
                  Ask Soham About the Next Edition
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </Link>
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

      <AeoFrequentlyAskedQuestions items={ABOUT_US_FAQS} className="theme-section-light section-pad px-6" />

      </div>
    </PageLayout>
  );
};

export default AboutUs;
