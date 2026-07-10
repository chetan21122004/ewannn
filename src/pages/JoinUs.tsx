import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  CheckCircle2,
  Handshake,
  Landmark,
  ShieldCheck,
  Sparkles,
  Users,
  UserPlus,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/PageLayout";
import SectionDivider from "@/components/SectionDivider";
import AeoFrequentlyAskedQuestions from "@/components/AeoFrequentlyAskedQuestions";
import { JOIN_US_FAQS } from "@/data/aeoContent";
import { absoluteUrl, faqPageSchema } from "@/lib/schemaHelpers";

const JOIN_US_KEYWORDS =
  "language jobs India, translator jobs India, interpreter jobs Pune, language company career India, freelance translator India";

const joinUsJsonLd = [faqPageSchema(absoluteUrl("/join-us/"), JOIN_US_FAQS)];

const tracks = [
  {
    id: "join-team",
    step: "01",
    label: "Join Our Team",
    desc: "Full-time or contract roles for language and operations professionals.",
    icon: Users,
  },
  {
    id: "register-vendor",
    step: "02",
    label: "Vendor Network",
    desc: "Freelance translators, interpreters, and localisation specialists.",
    icon: Briefcase,
  },
  {
    id: "collaborate",
    step: "03",
    label: "Collaborate",
    desc: "Institutions, platforms, and firms aligned with the India-Asia corridor.",
    icon: Handshake,
  },
] as const;

const whyReasons = [
  {
    title: "Language Meets Operations",
    desc: "125+ language capability combined with on-ground market entry execution — not a support function, but how we operate.",
    icon: Sparkles,
  },
  {
    title: "Institutional Recognition",
    desc: "Formal recognition from the Consulate General of China, MSAMB empanelment, Bhashini partnership, and CITLoB leadership.",
    icon: Landmark,
  },
  {
    title: "Oriental Flock Community",
    desc: "Access to some of the best language professionals in India through Pune's language industry meetup, founded with CITLoB.",
    icon: Users,
  },
];

const teamLookFor = [
  "Native or near-native proficiency in Asian or emerging market languages (Mandarin, Japanese, Korean, ASEAN, Arabic, Spanish, Portuguese, French, German, etc.)",
  "Sector experience in automotive, pharma, aerospace, legal, or exhibitions preferred",
  "Operational discipline and client communication skills",
  "Curiosity about cross-border business, market entry, and cultural intelligence",
];

const vendorOffer = [
  "Ongoing project assignments across 125+ language pairs",
  "Sector-specific briefs — automotive, pharma, legal, media",
  "Transparent rates and reliable payment cycles",
  "Long-term relationships built on quality and trust",
];

const vendorNeed = [
  "Proven experience in your language pair and sector",
  "CAT tool proficiency preferred (SDL Trados, memoQ, or equivalent)",
  "Commitment to UVAN's quality standards and deadlines",
  "ISO 17100 compliance preferred",
];

const collaborationTypes = [
  "Language schools and academies — talent pipeline, curriculum, and training partnerships",
  "Market entry and legal firms — referral and co-delivery arrangements for cross-border clients",
  "Technology platforms — language AI, localisation tools, and content management integrations",
  "Government and trade bodies — export promotion, bilateral trade facilitation",
  "Content and media agencies — multilingual production, OTT localisation, corporate media",
];

const collaborators = [
  { name: "Bhashini — MeitY", logo: "/allLogos/Bhashini-Logo.png" },
  { name: "Tattava CX", logo: "/allLogos/tattava-cx.svg" },
  { name: "CITLoB", logo: "/allLogos/CITLoB-logo-2023.jpg" },
];

const inputClassName =
  "mt-1.5 min-h-11 w-full rounded-xl border border-[hsl(var(--border-light))] bg-white px-4 py-2.5 text-base text-[hsl(var(--brand-navy-950))] outline-none transition focus:border-[hsl(var(--brand-purple-500))] focus:ring-2 focus:ring-[hsl(var(--brand-purple-500)/0.2)]";

const FormField = ({
  id,
  label,
  required,
  type = "text",
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  type?: string;
  children?: React.ReactNode;
}) => (
  <label htmlFor={id} className="block text-sm font-medium text-[hsl(var(--brand-navy-950))]">
    {label}
    {required ? <span className="text-[hsl(var(--brand-purple-700))]"> *</span> : null}
    {children ?? (
      <input id={id} name={id} required={required} type={type} className={inputClassName} />
    )}
  </label>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-on-light-secondary sm:text-base">
        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-gold-600))]" aria-hidden />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const SuccessState = ({
  title,
  message,
  onReset,
  resetLabel,
}: {
  title: string;
  message: string;
  onReset: () => void;
  resetLabel: string;
}) => (
  <div className="py-10 text-center">
    <ShieldCheck className="mx-auto h-16 w-16 text-[hsl(var(--brand-gold-500))]" aria-hidden />
    <h3 className="mt-4 font-serif text-2xl font-bold text-[hsl(var(--brand-navy-950))]">{title}</h3>
    <p className="mt-2 text-sm leading-relaxed text-on-light-secondary sm:text-base">{message}</p>
    <button
      type="button"
      onClick={onReset}
      className="mt-6 min-h-11 text-sm font-semibold text-[hsl(var(--brand-purple-700))] hover:underline"
    >
      {resetLabel}
    </button>
  </div>
);

const SectionHeader = ({
  step,
  title,
  intro,
}: {
  step: string;
  title: string;
  intro: string;
}) => (
  <div className="max-w-xl">
    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-700))]">
      {step}
    </p>
    <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[hsl(var(--brand-navy-950))] sm:text-4xl lg:text-[2.75rem]">
      {title}
    </h2>
    <p className="mt-4 text-base leading-relaxed text-on-light-secondary sm:text-lg">{intro}</p>
  </div>
);

const JoinUs = () => {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const [submittedTeam, setSubmittedTeam] = useState(false);
  const [submittedVendor, setSubmittedVendor] = useState(false);

  const handleTeamSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmittedTeam(true);
  };

  const handleVendorSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmittedVendor(true);
  };

  const motionProps = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 } as const,
        whileInView: { opacity: 1, y: 0 } as const,
        viewport: { once: true } as const,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <PageLayout
      title={t("seo.joinUs.title")}
      description={t("seo.joinUs.description")}
      canonicalPath="/join-us/"
      keywords={JOIN_US_KEYWORDS}
      jsonLd={joinUsJsonLd}
    >
      {/* Hero */}
      <section className="relative overflow-hidden bg-[hsl(var(--brand-navy-950))] px-6 pb-20 pt-14 text-white lg:pb-28 lg:pt-20">
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: "url('/page-assets/Building-Strong-International-Ties-Header-img-V2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-[hsl(var(--brand-navy-950)/0.55)] via-[hsl(var(--brand-navy-950)/0.88)] to-[hsl(var(--brand-navy-950))]" />
        <div className="pointer-events-none absolute -left-10 bottom-0 h-72 w-72 rounded-full bg-[hsl(var(--brand-purple-500)/0.2)] blur-3xl" />
        <div className="pointer-events-none absolute -right-16 top-20 h-80 w-80 rounded-full bg-[hsl(var(--brand-gold-500)/0.16)] blur-3xl" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
            <motion.div
              className="lg:col-span-7"
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[hsl(var(--brand-gold-500))]">
                Join UVAN
              </p>
              <h1 className="mt-5 font-serif text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
                Be Part of{" "}
                <span className="text-[hsl(var(--brand-gold-500))]">What We&apos;re Building.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/82 sm:text-lg">
                UVAN is growing — and we&apos;re looking for people and organisations who want to be part of a
                cross-border market partner that operates at the intersection of language, culture, and on-ground
                business operations. Whether you&apos;re a language professional, a specialist vendor, or an institution
                that shares our vision — there&apos;s a place for you here.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#join-team"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
                >
                  Join Our Team
                  <Users className="h-4 w-4" aria-hidden />
                </a>
                <a
                  href="#register-vendor"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Register as Vendor
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-5"
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-500))]">
                  Three ways to work with us
                </p>
                <div className="mt-4 space-y-3">
                  {tracks.map((track) => {
                    const Icon = track.icon;
                    return (
                      <a
                        key={track.id}
                        href={`#${track.id}`}
                        className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-[hsl(var(--brand-gold-500)/0.35)] hover:bg-white/[0.08]"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[hsl(var(--brand-gold-500)/0.15)] text-[hsl(var(--brand-gold-500))]">
                          <Icon className="h-4 w-4" aria-hidden />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="flex items-center gap-2">
                            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">
                              {track.step}
                            </span>
                            <span className="font-semibold text-white group-hover:text-[hsl(var(--brand-gold-500))]">
                              {track.label}
                            </span>
                          </span>
                          <span className="mt-1 block text-xs leading-relaxed text-white/65">{track.desc}</span>
                        </span>
                        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-white/40 transition group-hover:translate-x-0.5 group-hover:text-[hsl(var(--brand-gold-500))]" aria-hidden />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" fromDark />

      {/* Why UVAN */}
      {false && (
      <section id="why-ewan" className="theme-section-soft scroll-mt-28 px-6 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...motionProps} className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-700))]">
              Why UVAN
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-[hsl(var(--brand-navy-950))] sm:text-4xl lg:text-5xl">
              Five Years Building Something Hard to Replicate
            </h2>
            <p className="mt-5 text-base leading-relaxed text-on-light-secondary sm:text-lg">
              We have spent five years building deep language expertise, on-ground operational capability, institutional
              recognition from government bodies and consulates, and a community (Oriental Flock) that gives us access to
              some of the best language professionals in India. If you want to work at the intersection of language,
              culture, and international business — UVAN is where that work gets done.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {whyReasons.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  {...motionProps}
                  transition={{ ...motionProps.transition, delay: index * 0.08 }}
                  className="theme-card-light card-shine rounded-3xl border border-[hsl(var(--border-light))] p-6 sm:p-7"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[hsl(var(--brand-purple-700)/0.1)] text-[hsl(var(--brand-purple-700))]">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[hsl(var(--brand-navy-950))]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-on-light-secondary">{item.desc}</p>
                </motion.article>
              );
            })}
          </div>

          <motion.div {...motionProps} className="mt-10 text-center">
            <Link
              to="/ask-soham"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-7 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
            >
              Ask Soham About Working With UVAN
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </motion.div>
        </div>
      </section>
      )}

      {/* Sticky track nav */}
      <nav
        aria-label="Join UVAN tracks"
        className="sticky top-14 z-30 border-b border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50)/0.92)] px-4 py-3 backdrop-blur-md lg:top-28"
      >
        <div className="container mx-auto flex max-w-6xl gap-2 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {tracks.map((track) => (
            <a
              key={track.id}
              href={`#${track.id}`}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-2 text-xs font-semibold text-[hsl(var(--brand-navy-950))] transition hover:border-[hsl(var(--brand-purple-500)/0.35)] hover:text-[hsl(var(--brand-purple-700))]"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--brand-purple-700))]">
                {track.step}
              </span>
              {track.label}
            </a>
          ))}
        </div>
      </nav>

      <SectionDivider variant="slant" />

      {/* Join Our Team */}
      <section id="join-team" className="theme-section-light scroll-mt-36 px-6 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <motion.div {...motionProps} className="order-1">
              <SectionHeader
                step="01 — Join Our Team"
                title="Join Our Team"
                intro="Language professionals, interpreters, translators, operations specialists, business development professionals, and account managers who want a full-time or contract role at UVAN."
              />

              <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))]">
                What we look for
              </p>
              <div className="mt-4">
                <BulletList items={teamLookFor} />
              </div>

              <div className="mt-8 rounded-2xl border border-[hsl(var(--brand-purple-500)/0.18)] bg-[hsl(var(--surface-light-100))] p-5 sm:p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))]">
                  Open roles
                </p>
                <p className="mt-3 text-sm leading-relaxed text-on-light-secondary">
                  We are always looking for exceptional language professionals. Even if we don&apos;t have a current
                  opening, we encourage you to send your profile.
                </p>
                <a
                  href="mailto:info@ewan.co.in"
                  className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[hsl(var(--brand-purple-700))] hover:underline"
                >
                  info@ewan.co.in
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </motion.div>

            <motion.div {...motionProps} className="order-2">
              <div className="theme-card-light rounded-[2rem] border border-[hsl(var(--border-light))] p-6 sm:p-8 lg:sticky lg:top-40">
                {submittedTeam ? (
                  <SuccessState
                    title="Profile Received"
                    message="Thank you for sharing your profile. Our team will review it and reach out if there is a fit."
                    onReset={() => setSubmittedTeam(false)}
                    resetLabel="Send another profile"
                  />
                ) : (
                  <form onSubmit={handleTeamSubmit} className="space-y-4">
                    <div className="mb-2 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(var(--brand-navy-950))] text-[hsl(var(--brand-gold-500))]">
                        <UserPlus className="h-5 w-5" aria-hidden />
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-[hsl(var(--brand-navy-950))]">
                        Send Your Profile
                      </h3>
                    </div>
                    <FormField id="team-name" label="Name" required />
                    <FormField id="team-languages" label="Language pairs" required />
                    <FormField id="team-specialisation" label="Specialisation / sector" required />
                    <FormField id="team-cv" label="CV upload" required>
                      <input id="team-cv" name="team-cv" required type="file" className={inputClassName} />
                    </FormField>
                    <FormField id="team-referral" label="How did you hear about us?" />
                    <button
                      type="submit"
                      className="mt-2 min-h-11 w-full rounded-full bg-[hsl(var(--brand-navy-950))] py-3.5 text-sm font-bold text-white transition hover:brightness-110"
                    >
                      Send Your Profile
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" />

      {/* Vendor Network */}
      <section id="register-vendor" className="theme-section-soft scroll-mt-36 px-6 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <motion.div {...motionProps}>
              <SectionHeader
                step="02 — Join Our Vendor Network"
                title="Join Our Vendor Network"
                intro="Specialist translators, interpreters, subtitlers, voiceover artists, proofreaders, transcriptionists, and localisation engineers who work as freelancers or independent professionals."
              />

              <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))]">
                What we offer vendors
              </p>
              <div className="mt-4">
                <BulletList items={vendorOffer} />
              </div>

              <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))]">
                What we need from vendors
              </p>
              <div className="mt-4">
                <BulletList items={vendorNeed} />
              </div>

              <p className="mt-8 rounded-2xl border border-[hsl(var(--border-light))] bg-white/70 p-5 text-sm leading-relaxed text-on-light-secondary">
                Many of our language professionals come through Vaani Skills, our sister institution focused
                on language and vocational training. If you have trained with Vaani, you are encouraged to apply
                directly.
              </p>
            </motion.div>

            <motion.div {...motionProps}>
              <div className="theme-card-light rounded-[2rem] border border-[hsl(var(--border-light))] p-6 sm:p-8 lg:sticky lg:top-40">
                {submittedVendor ? (
                  <SuccessState
                    title="Registration Received"
                    message="Thank you for applying. Our vendor management team will review your profile and get back to you shortly."
                    onReset={() => setSubmittedVendor(false)}
                    resetLabel="Submit another application"
                  />
                ) : (
                  <form onSubmit={handleVendorSubmit} className="space-y-4">
                    <div className="mb-2 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(var(--brand-purple-700))] text-white">
                        <Briefcase className="h-5 w-5" aria-hidden />
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-[hsl(var(--brand-navy-950))]">
                        Register as a Vendor
                      </h3>
                    </div>
                    <FormField id="vendor-name" label="Name" required />
                    <FormField id="vendor-location" label="Location" required />
                    <FormField id="vendor-languages" label="Languages" required />
                    <FormField id="vendor-specialisation" label="Specialisation" required />
                    <FormField id="vendor-tools" label="Tool proficiency" />
                    <FormField id="vendor-rates" label="Rate expectations" />
                    <FormField id="vendor-portfolio" label="CV / portfolio upload" required>
                      <input
                        id="vendor-portfolio"
                        name="vendor-portfolio"
                        required
                        type="file"
                        className={inputClassName}
                      />
                    </FormField>
                    <button
                      type="submit"
                      className="mt-2 min-h-11 w-full rounded-full bg-[hsl(var(--brand-purple-700))] py-3.5 text-sm font-bold text-white transition hover:brightness-110"
                    >
                      Register as a Vendor
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider variant="slant" flip />

      {/* Collaborate */}
      <section id="collaborate" className="theme-section-light scroll-mt-36 px-6 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <motion.div {...motionProps} className="lg:col-span-7">
              <SectionHeader
                step="03 — Collaborate With Us"
                title="Collaborate With Us"
                intro="Institutions, agencies, technology platforms, and businesses whose work intersects with cross-border language, market entry, or the India-Asia corridor."
              />

              <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))]">
                Types of collaboration we welcome
              </p>
              <div className="mt-4">
                <BulletList items={collaborationTypes} />
              </div>

              <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))]">
                Current collaborators
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {collaborators.map((item) => (
                  <div
                    key={item.name}
                    className="inline-flex items-center gap-3 rounded-2xl border border-[hsl(var(--border-light))] bg-white px-4 py-3"
                  >
                    <img
                      src={item.logo}
                      alt=""
                      loading="lazy"
                      className="h-8 w-auto max-w-[72px] object-contain"
                      onError={(event) => {
                        if (!event.currentTarget.dataset.fallbackApplied) {
                          event.currentTarget.dataset.fallbackApplied = "true";
                          event.currentTarget.src = "/placeholder.svg";
                        }
                      }}
                    />
                    <span className="text-sm font-medium text-on-light-secondary">{item.name}</span>
                  </div>
                ))}
              </div>

            </motion.div>

            <motion.div {...motionProps} className="lg:col-span-5">
              <div className="theme-card-light flex h-full flex-col justify-between rounded-[2rem] border border-[hsl(var(--border-light))] p-7 sm:p-8">
                <div>
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[hsl(var(--surface-light-100))]">
                    <Handshake className="h-7 w-7 text-[hsl(var(--brand-purple-700))]" aria-hidden />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[hsl(var(--brand-navy-950))] sm:text-3xl">
                    Institutional partnerships
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-on-light-secondary sm:text-base">
                    We work with schools, agencies, platforms, and trade bodies that share our focus on cross-border
                    language, market entry, and India-Asia execution.
                  </p>
                </div>
                <a
                  href="mailto:info@ewan.co.in?subject=Partnership%20with%20UVAN"
                  className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full border border-[hsl(var(--border-light-strong))] bg-white px-5 py-3 text-sm font-semibold text-[hsl(var(--brand-purple-700))] transition hover:bg-[hsl(var(--surface-light-100))]"
                >
                  Get in Touch About a Partnership
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <AeoFrequentlyAskedQuestions items={JOIN_US_FAQS} className="theme-section-soft px-6 py-16 md:py-20" />
    </PageLayout>
  );
};

export default JoinUs;
