import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Building2,
  CheckCircle2,
  Cpu,
  Film,
  Globe2,
  Handshake,
  Scale,
  ShieldCheck,
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
import { PROJECTS_EMAIL } from "@/lib/site";
import FormHoneypot from "@/components/FormHoneypot";
import { submitForm } from "@/lib/formSubmit";

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

const teamLookFor = [
  "Native or near-native proficiency in Asian or emerging market languages (Mandarin, Japanese, Korean, ASEAN, Arabic, Spanish, Portuguese, French, German, etc.)",
  "Sector experience in automotive, pharma, aerospace, legal, or exhibitions preferred",
  "Operational discipline and client communication skills",
  "Curiosity about cross-border business, market entry, and cultural intelligence",
];

const vendorOffer = [
  "Ongoing project assignments across 125+ language pairs",
  "Sector-specific briefs - automotive, pharma, legal, media",
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
  {
    title: "Language schools & academies",
    desc: "Talent pipeline, curriculum design, and training partnerships.",
    icon: Building2,
  },
  {
    title: "Market entry & legal firms",
    desc: "Referral and co-delivery for cross-border India-Asia mandates.",
    icon: Scale,
  },
  {
    title: "Technology platforms",
    desc: "Language AI, localisation tools, and content management integrations.",
    icon: Cpu,
  },
  {
    title: "Government & trade bodies",
    desc: "Export promotion and bilateral trade facilitation programmes.",
    icon: Globe2,
  },
  {
    title: "Content & media agencies",
    desc: "Multilingual production, OTT localisation, and corporate media.",
    icon: Film,
  },
];

const collaborators = [
  { name: "Bhashini - MeitY", logo: "/allLogos/Bhashini-Logo.png" },
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
  const [submittingTeam, setSubmittingTeam] = useState(false);
  const [submittingVendor, setSubmittingVendor] = useState(false);
  const [teamError, setTeamError] = useState(false);
  const [vendorError, setVendorError] = useState(false);

  const handleTeamSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmittingTeam(true);
    setTeamError(false);
    const result = await submitForm(event.currentTarget, PROJECTS_EMAIL, "UVAN Join Our Team Application");
    if (result === "sent") {
      setSubmittedTeam(true);
    } else {
      setTeamError(true);
    }
    setSubmittingTeam(false);
  };

  const handleVendorSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmittingVendor(true);
    setVendorError(false);
    const result = await submitForm(event.currentTarget, PROJECTS_EMAIL, "UVAN Vendor Network Registration");
    if (result === "sent") {
      setSubmittedVendor(true);
    } else {
      setVendorError(true);
    }
    setSubmittingVendor(false);
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
      mainClassName="bg-white"
    >
      {/* Hero */}
      <section className="relative overflow-hidden bg-white section-pad-hero px-6 pt-10 lg:pt-14">
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.12]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
            <motion.div
              className="lg:col-span-7"
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[hsl(var(--brand-purple-700))]">
                Join UVAN
              </p>
              <h1 className="mt-5 font-serif text-4xl font-bold leading-[1.05] text-on-light sm:text-5xl lg:text-6xl">
                Be Part of{" "}
                <span className="text-[hsl(var(--brand-purple-700))]">What We&apos;re Building.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-on-light-secondary sm:text-lg">
                UVAN is growing - and we&apos;re looking for people and organisations who want to be part of a
                cross-border market partner that operates at the intersection of language, culture, and on-ground
                business operations. Whether you&apos;re a language professional, a specialist vendor, or an institution
                that shares our vision - there&apos;s a place for you here.
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
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[hsl(var(--border-light-strong))] bg-white px-6 py-3 text-sm font-semibold text-on-light transition hover:bg-[hsl(var(--surface-light-100))]"
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
              <div className="rounded-[1.75rem] border border-[hsl(var(--border-light))] bg-white p-5 shadow-sm sm:p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-700))]">
                  Three ways to work with us
                </p>
                <div className="mt-4 space-y-3">
                  {tracks.map((track) => {
                    const Icon = track.icon;
                    return (
                      <a
                        key={track.id}
                        href={`#${track.id}`}
                        className="group flex items-start gap-3 rounded-2xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] p-4 transition hover:border-[hsl(var(--brand-purple-700)/0.3)] hover:bg-[hsl(var(--surface-light-100))]"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[hsl(var(--brand-gold-500)/0.15)] text-[hsl(var(--brand-gold-600))]">
                          <Icon className="h-4 w-4" aria-hidden />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="flex items-center gap-2">
                            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-on-light-muted">
                              {track.step}
                            </span>
                            <span className="font-semibold text-on-light group-hover:text-[hsl(var(--brand-purple-700))]">
                              {track.label}
                            </span>
                          </span>
                          <span className="mt-1 block text-xs leading-relaxed text-on-light-secondary">{track.desc}</span>
                        </span>
                        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-on-light-muted transition group-hover:translate-x-0.5 group-hover:text-[hsl(var(--brand-purple-700))]" aria-hidden />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section id="join-team" className="theme-section-light scroll-mt-36 px-6 py-10 md:py-14">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <motion.div {...motionProps} className="order-1">
              <SectionHeader
                step="01 - Join Our Team"
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
                  href={`mailto:${PROJECTS_EMAIL}?subject=${encodeURIComponent("UVAN Join Our Team - Open Roles")}`}
                  className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[hsl(var(--brand-purple-700))] hover:underline"
                >
                  {PROJECTS_EMAIL}
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
                ) : teamError ? (
                  <SuccessState
                    title="Could not send"
                    message={`Please email your profile directly to ${PROJECTS_EMAIL}.`}
                    onReset={() => setTeamError(false)}
                    resetLabel="Try again"
                  />
                ) : (
                  <form onSubmit={handleTeamSubmit} className="relative space-y-4">
                    <FormHoneypot />
                    <div className="mb-2 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(var(--brand-navy-950))] text-[hsl(var(--brand-gold-500))]">
                        <UserPlus className="h-5 w-5" aria-hidden />
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-[hsl(var(--brand-navy-950))]">
                        Send Your Profile
                      </h3>
                    </div>
                    <FormField id="team-name" label="Name" required />
                    <FormField id="team-languages" label="Applying For Role" required />
                    <FormField id="team-specialisation" label="Full Time / Intern / Consultant" required />
                    <FormField id="team-cv" label="CV upload" required>
                      <input id="team-cv" name="team-cv" required type="file" className={inputClassName} />
                    </FormField>
                    <FormField id="team-referral" label="How did you hear about us?" />
                    <button
                      type="submit"
                      disabled={submittingTeam}
                      className="mt-2 min-h-11 w-full rounded-full bg-[hsl(var(--brand-navy-950))] py-3.5 text-sm font-bold text-white transition hover:brightness-110 disabled:opacity-60"
                    >
                      {submittingTeam ? "Sending…" : "Send Your Profile"}
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
      <section id="register-vendor" className="theme-section-soft scroll-mt-36 px-6 py-10 md:py-14">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <motion.div {...motionProps}>
              <SectionHeader
                step="02 - Join Our Vendor Network"
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
                Many of our language professionals come through Bhashik Skill Development, our sister institution focused
                on language and vocational training. If you have trained with Bhashik, you are encouraged to apply
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
                ) : vendorError ? (
                  <SuccessState
                    title="Could not send"
                    message={`Please email your registration directly to ${PROJECTS_EMAIL}.`}
                    onReset={() => setVendorError(false)}
                    resetLabel="Try again"
                  />
                ) : (
                  <form onSubmit={handleVendorSubmit} className="relative space-y-4">
                    <FormHoneypot />
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
                      disabled={submittingVendor}
                      className="mt-2 min-h-11 w-full rounded-full bg-[hsl(var(--brand-purple-700))] py-3.5 text-sm font-bold text-white transition hover:brightness-110 disabled:opacity-60"
                    >
                      {submittingVendor ? "Sending…" : "Register as a Vendor"}
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
      <section id="collaborate" className="relative scroll-mt-36 overflow-hidden px-6 py-10 md:py-14">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 48% 42% at 100% 0%, hsl(var(--brand-gold-500) / 0.1) 0%, transparent 55%), radial-gradient(ellipse 44% 40% at 0% 100%, hsl(var(--brand-purple-500) / 0.07) 0%, transparent 52%)",
          }}
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.1]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
            <motion.div {...motionProps} className="lg:col-span-7">
              <SectionHeader
                step="03 - Collaborate With Us"
                title="Collaborate With Us"
                intro="Institutions, agencies, technology platforms, and businesses whose work intersects with cross-border language, market entry, or the India-Asia corridor."
              />

              <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))]">
                Types of collaboration we welcome
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {collaborationTypes.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="group rounded-2xl border border-[hsl(var(--border-light))] bg-white/90 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-[hsl(var(--brand-purple-500)/0.28)] hover:shadow-[0_14px_36px_rgba(26,22,51,0.08)] sm:p-5"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(var(--brand-purple-700)/0.08)] text-[hsl(var(--brand-purple-700))] transition group-hover:bg-[hsl(var(--brand-purple-700))] group-hover:text-white">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <h3 className="mt-3 font-serif text-base font-bold leading-snug text-[hsl(var(--brand-navy-950))] sm:text-lg">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-on-light-secondary">{item.desc}</p>
                    </div>
                  );
                })}
              </div>

              <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))]">
                Current collaborators
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {collaborators.map((item) => (
                  <div
                    key={item.name}
                    className="flex min-h-[88px] flex-col items-center justify-center rounded-2xl border border-[hsl(var(--border-light))] bg-white px-4 py-5 text-center shadow-sm transition hover:border-[hsl(var(--brand-purple-500)/0.25)]"
                  >
                    <img
                      src={item.logo}
                      alt={item.name}
                      loading="lazy"
                      className="h-9 w-auto max-w-[100px] object-contain"
                      onError={(event) => {
                        if (!event.currentTarget.dataset.fallbackApplied) {
                          event.currentTarget.dataset.fallbackApplied = "true";
                          event.currentTarget.src = "/placeholder.svg";
                        }
                      }}
                    />
                    <span className="mt-3 text-[11px] font-semibold leading-snug text-on-light-secondary">{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...motionProps} className="lg:col-span-5">
              <div className="lg:sticky lg:top-40">
                <div className="overflow-hidden rounded-[2rem] border border-[hsl(var(--border-light))] bg-white shadow-[0_24px_60px_-28px_rgba(26,22,51,0.18)]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80"
                      alt="Partners collaborating on cross-border business"
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--brand-navy-950)/0.72)] via-[hsl(var(--brand-navy-950)/0.15)] to-transparent" />
                    <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-gold-500))] backdrop-blur-sm">
                      <Handshake className="h-3.5 w-3.5" aria-hidden />
                      Partnerships
                    </span>
                  </div>

                  <div className="p-6 sm:p-7">
                    <h3 className="font-serif text-2xl font-bold text-[hsl(var(--brand-navy-950))] sm:text-[1.75rem]">
                      Institutional partnerships
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-on-light-secondary sm:text-base">
                      We work with schools, agencies, platforms, and trade bodies that share our focus on cross-border
                      language, market entry, and India-Asia execution.
                    </p>

                    <ul className="mt-5 space-y-2.5 border-t border-[hsl(var(--border-light))] pt-5">
                      {[
                        "Co-branded programmes and referral arrangements",
                        "Joint go-to-market for corridor clients",
                        "Talent, training, and technology integrations",
                      ].map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm text-on-light-secondary">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-gold-600))]" aria-hidden />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-col gap-3">
                      <a
                        href={`mailto:${PROJECTS_EMAIL}?subject=${encodeURIComponent("UVAN Partnership Inquiry")}`}
                        className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-5 py-3 text-sm font-bold uppercase tracking-[0.06em] text-[hsl(var(--brand-navy-950))] shadow-[0_12px_28px_hsl(var(--brand-gold-500)/0.22)] transition hover:-translate-y-0.5 hover:brightness-105"
                      >
                        Discuss a partnership
                        <ArrowUpRight className="h-4 w-4" aria-hidden />
                      </a>
                      <a
                        href={`mailto:${PROJECTS_EMAIL}?subject=${encodeURIComponent("Contact UVAN")}`}
                        className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[hsl(var(--border-light-strong))] bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.06em] text-on-light transition hover:bg-[hsl(var(--surface-light-100))]"
                      >
                        Contact UVAN
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <AeoFrequentlyAskedQuestions items={JOIN_US_FAQS} className="theme-section-soft px-6 py-10 md:py-14" />
    </PageLayout>
  );
};

export default JoinUs;
