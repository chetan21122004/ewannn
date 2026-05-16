import { ArrowRight, ArrowUpRight, Handshake, ShieldCheck, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/PageLayout";
import AeoFrequentlyAskedQuestions from "@/components/AeoFrequentlyAskedQuestions";
import { JOIN_US_FAQS } from "@/data/aeoContent";
import { absoluteUrl, faqPageSchema } from "@/lib/schemaHelpers";

const JOIN_US_KEYWORDS =
  "language jobs India, translator jobs India, interpreter jobs Pune, language company career India, freelance translator India";

const joinUsJsonLd = [faqPageSchema(absoluteUrl("/join-us/"), JOIN_US_FAQS)];

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
  "Commitment to Ewan's quality standards and deadlines",
  "ISO 17100 compliance preferred",
];

const collaborationTypes = [
  "Language schools and academies - talent pipeline, curriculum, and training partnerships",
  "Market entry and legal firms - referral and co-delivery arrangements for cross-border clients",
  "Technology platforms - language AI, localisation tools, and content management integrations",
  "Government and trade bodies - export promotion, bilateral trade facilitation",
  "Content and media agencies - multilingual production, OTT localisation, corporate media",
];

const collaborators = [
  "Bhashini - MeitY, Government of India",
  "Tattava CX - Strategic Communications",
  "CITLoB - Confederation of Indian Translators and Language Professionals",
  "Further collaborators as relationships are confirmed",
];

const JoinUs = () => {
  const { t } = useTranslation();
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

  return (
    <PageLayout
      title={t("seo.joinUs.title")}
      description={t("seo.joinUs.description")}
      canonicalPath="/join-us/"
      keywords={JOIN_US_KEYWORDS}
      jsonLd={joinUsJsonLd}
    >
      <section className="relative overflow-hidden bg-[hsl(var(--brand-navy-950))] px-6 pb-24 pt-14 text-white lg:pb-32 lg:pt-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, hsl(var(--brand-purple-500)) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="pointer-events-none absolute -left-10 bottom-0 h-72 w-72 rounded-full bg-[hsl(var(--brand-purple-500)/0.2)] blur-3xl" />
        <div className="pointer-events-none absolute -right-16 top-20 h-80 w-80 rounded-full bg-[hsl(var(--brand-gold-500)/0.16)] blur-3xl" />

        <div className="container relative mx-auto grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h1 className="font-serif text-5xl font-extrabold leading-[0.95] tracking-tight lg:text-7xl xl:text-8xl">
              Be Part of <span className="text-[hsl(var(--brand-gold-500))]">What We&apos;re Building.</span>
            </h1>
            <p className="mt-8 max-w-3xl text-lg text-white/80 lg:text-xl">
              Ewan is growing - and we&apos;re looking for people and organisations who want to be part of a cross-border
              market partner that operates at the intersection of language, culture, and on-ground business operations.
              Whether you&apos;re a language professional, a specialist vendor, or an institution that shares our vision -
              there&apos;s a place for you here.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#join-team"
                className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-8 py-4 text-base font-semibold text-[hsl(var(--brand-navy-950))] transition hover:scale-[1.02]"
              >
                Join Our Team
                <Users className="h-4 w-4" />
              </a>
              <a
                href="#register-vendor"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Register as Vendor
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="join-team" className="theme-section-light scroll-mt-28 px-6 py-20">
        <div className="container mx-auto grid gap-14 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="theme-card-light rounded-[2.5rem] p-8 lg:p-10">
              {submittedTeam ? (
                <div className="py-10 text-center">
                  <ShieldCheck className="mx-auto h-16 w-16 text-[hsl(var(--brand-gold-500))]" />
                  <h3 className="mt-4 text-2xl font-bold text-[hsl(var(--brand-navy-950))]">Profile Received</h3>
                  <p className="mt-2 text-[#4b4566]">
                    Thank you for sharing your profile. Our team will review it and reach out if there is a fit.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmittedTeam(false)}
                    className="mt-6 text-sm font-semibold text-[hsl(var(--brand-purple-600))] hover:underline"
                  >
                    Send another profile
                  </button>
                </div>
              ) : (
                <form onSubmit={handleTeamSubmit} className="space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-[hsl(var(--brand-navy-950))]">Send Your Profile</h3>
                  <label className="block text-sm font-medium text-[hsl(var(--brand-navy-950))]">
                    Name (required)
                    <input
                      required
                      type="text"
                      className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] px-4 py-2.5 outline-none focus:border-[hsl(var(--brand-purple-500))]"
                    />
                  </label>
                  <label className="block text-sm font-medium text-[hsl(var(--brand-navy-950))]">
                    Language pairs (required)
                    <input
                      required
                      type="text"
                      className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] px-4 py-2.5 outline-none focus:border-[hsl(var(--brand-purple-500))]"
                    />
                  </label>
                  <label className="block text-sm font-medium text-[hsl(var(--brand-navy-950))]">
                    Specialisation / sector (required)
                    <input
                      required
                      type="text"
                      className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] px-4 py-2.5 outline-none focus:border-[hsl(var(--brand-purple-500))]"
                    />
                  </label>
                  <label className="block text-sm font-medium text-[hsl(var(--brand-navy-950))]">
                    CV upload (required)
                    <input
                      required
                      type="file"
                      className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] bg-white px-4 py-2.5 outline-none focus:border-[hsl(var(--brand-purple-500))]"
                    />
                  </label>
                  <label className="block text-sm font-medium text-[hsl(var(--brand-navy-950))]">
                    How did you hear about us?
                    <input
                      type="text"
                      className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] px-4 py-2.5 outline-none focus:border-[hsl(var(--brand-purple-500))]"
                    />
                  </label>
                  <button
                    type="submit"
                    className="mt-4 w-full rounded-full bg-[hsl(var(--brand-navy-950))] py-3.5 text-sm font-bold text-white transition hover:brightness-110"
                  >
                    Send Your Profile
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-500)/0.88)]">
              01 - Join Our Team
            </p>
            <h2 className="mt-2 font-serif text-4xl font-bold text-[hsl(var(--brand-navy-950))] lg:text-5xl">Join Our Team</h2>
            <p className="text-on-light-secondary mt-6 text-lg leading-relaxed">
              Language professionals, interpreters, translators, operations specialists, business development
              professionals, and account managers who want a full-time or contract role at Ewan.
            </p>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))]">
              What we look for
            </p>
            <div className="mt-4 space-y-4">
              {teamLookFor.map((item) => (
                <p key={item} className="flex items-start gap-2 text-[#4b4566]">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--brand-gold-600))]" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-[hsl(var(--brand-purple-500)/0.2)] bg-[#f2f0fa] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))]">
                Open roles
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#4b4566]">
                We are always looking for exceptional language professionals. Even if we don&apos;t have a current
                opening, we encourage you to send your profile.
              </p>
              <a
                href="mailto:info@ewan.co.in"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--brand-purple-600))] hover:underline"
              >
                info@ewan.co.in
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="register-vendor" className="theme-section-soft scroll-mt-28 px-6 py-20">
        <div className="container mx-auto grid gap-14 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-500)/0.88)]">
              02 - Join Our Vendor Network
            </p>
            <h2 className="mt-2 font-serif text-4xl font-bold text-[hsl(var(--brand-navy-950))] lg:text-5xl">
              Join Our Vendor Network
            </h2>
            <p className="text-on-light-secondary mt-6 text-lg leading-relaxed">
              Specialist translators, interpreters, subtitlers, voiceover artists, proofreaders, transcriptionists, and
              localisation engineers who work as freelancers or independent professionals.
            </p>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))]">
              What we offer vendors
            </p>
            <div className="mt-4 space-y-4">
              {vendorOffer.map((item) => (
                <p key={item} className="flex items-start gap-2 text-[#4b4566]">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--brand-gold-600))]" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))]">
              What we need from vendors
            </p>
            <div className="mt-4 space-y-4">
              {vendorNeed.map((item) => (
                <p key={item} className="flex items-start gap-2 text-[#4b4566]">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--brand-gold-600))]" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
            <p className="mt-8 text-sm leading-relaxed text-[#4b4566]">
              Many of our language professionals come through Bhashik Skill Development, our sister institution focused
              on language and vocational training. If you have trained with Bhashik, you are encouraged to apply
              directly.
            </p>
          </div>

          <div className="theme-card-light rounded-[2.5rem] p-8 lg:p-10">
            {submittedVendor ? (
              <div className="py-10 text-center">
                <ShieldCheck className="mx-auto h-16 w-16 text-[hsl(var(--brand-gold-500))]" />
                <h3 className="mt-4 text-2xl font-bold text-[hsl(var(--brand-navy-950))]">Registration Received</h3>
                <p className="mt-2 text-[#4b4566]">
                  Thank you for applying. Our vendor management team will review your profile and get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmittedVendor(false)}
                  className="mt-6 text-sm font-semibold text-[hsl(var(--brand-purple-600))] hover:underline"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <form onSubmit={handleVendorSubmit} className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-[hsl(var(--brand-navy-950))]">Register as a Vendor</h3>
                <label className="block text-sm font-medium text-[hsl(var(--brand-navy-950))]">
                  Name (required)
                  <input
                    required
                    type="text"
                    className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] px-4 py-2.5 outline-none focus:border-[hsl(var(--brand-purple-500))]"
                  />
                </label>
                <label className="block text-sm font-medium text-[hsl(var(--brand-navy-950))]">
                  Location (required)
                  <input
                    required
                    type="text"
                    className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] px-4 py-2.5 outline-none focus:border-[hsl(var(--brand-purple-500))]"
                  />
                </label>
                <label className="block text-sm font-medium text-[hsl(var(--brand-navy-950))]">
                  Languages (required)
                  <input
                    required
                    type="text"
                    className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] px-4 py-2.5 outline-none focus:border-[hsl(var(--brand-purple-500))]"
                  />
                </label>
                <label className="block text-sm font-medium text-[hsl(var(--brand-navy-950))]">
                  Specialisation (required)
                  <input
                    required
                    type="text"
                    className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] px-4 py-2.5 outline-none focus:border-[hsl(var(--brand-purple-500))]"
                  />
                </label>
                <label className="block text-sm font-medium text-[hsl(var(--brand-navy-950))]">
                  Tool proficiency
                  <input
                    type="text"
                    className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] px-4 py-2.5 outline-none focus:border-[hsl(var(--brand-purple-500))]"
                  />
                </label>
                <label className="block text-sm font-medium text-[hsl(var(--brand-navy-950))]">
                  Rate expectations
                  <input
                    type="text"
                    className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] px-4 py-2.5 outline-none focus:border-[hsl(var(--brand-purple-500))]"
                  />
                </label>
                <label className="block text-sm font-medium text-[hsl(var(--brand-navy-950))]">
                  CV / portfolio upload (required)
                  <input
                    required
                    type="file"
                    className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] bg-white px-4 py-2.5 outline-none focus:border-[hsl(var(--brand-purple-500))]"
                  />
                </label>
                <button
                  type="submit"
                  className="mt-4 w-full rounded-full bg-[hsl(var(--brand-purple-700))] py-3.5 text-sm font-bold text-white transition hover:brightness-110"
                >
                  Register as a Vendor
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section id="collaborate" className="theme-section-light px-6 py-20">
        <div className="container mx-auto grid gap-14 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-500)/0.88)]">
              03 - Collaborate With Us
            </p>
            <h2 className="mt-2 font-serif text-4xl font-bold text-[hsl(var(--brand-navy-950))] lg:text-5xl">
              Collaborate With Us
            </h2>
            <p className="text-on-light-secondary mt-6 text-lg leading-relaxed">
              Institutions, agencies, technology platforms, and businesses whose work intersects with cross-border
              language, market entry, or the India-Asia corridor.
            </p>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))]">
              Types of collaboration we welcome
            </p>
            <div className="mt-4 space-y-4">
              {collaborationTypes.map((item) => (
                <p key={item} className="flex items-start gap-2 text-sm text-[#4b4566]">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-gold-600))]" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))]">
              Current collaborators
            </p>
            <div className="mt-4 space-y-3">
              {collaborators.map((item) => (
                <p key={item} className="text-sm text-[#4b4566]">
                  {item}
                </p>
              ))}
            </div>
            <Link
              to="/ask-soham"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-navy-950))] px-8 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Explore a Collaboration
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="theme-card-light flex flex-col justify-center rounded-[2.5rem] p-8 lg:p-10">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[hsl(var(--surface-light-100))]">
              <Handshake className="h-7 w-7 text-[hsl(var(--brand-purple-700))]" />
            </div>
            <h3 className="font-serif text-3xl font-bold text-[hsl(var(--brand-navy-950))]">Institutional partnerships</h3>
            <p className="mt-4 leading-relaxed text-[#4b4566]">
              We work with schools, agencies, platforms, and trade bodies that share our focus on cross-border language,
              market entry, and India-Asia execution.
            </p>
          </div>
        </div>
      </section>

      <section id="why-ewan" className="theme-section-soft px-6 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-500)/0.88)]">
            Why Ewan
          </p>
          <h2 className="mt-2 font-serif text-4xl font-bold text-[hsl(var(--brand-navy-950))]">Why Ewan</h2>
          <p className="mt-6 text-lg leading-relaxed text-[#4b4566]">
            We have spent five years building something that is genuinely hard to replicate: deep language expertise,
            on-ground operational capability, institutional recognition from government bodies and consulates, and a
            community (Oriental Flock) that gives us access to some of the best language professionals in India. If you
            want to work at the intersection of language, culture, and international business - Ewan is where that work
            gets done.
          </p>
          <Link
            to="/ask-soham"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-8 py-3.5 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
          >
            Ask Soham About Working With Ewan
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <AeoFrequentlyAskedQuestions items={JOIN_US_FAQS} className="bg-[#f7f5ff] px-6 py-16" />
    </PageLayout>
  );
};

export default JoinUs;
