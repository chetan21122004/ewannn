import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Globe2,
  Handshake,
  Landmark,
  Sparkles,
  Store,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import PageLayout from "@/components/PageLayout";
import LiaisonServiceCard from "@/components/LiaisonServiceCard";
import AeoFrequentlyAskedQuestions from "@/components/AeoFrequentlyAskedQuestions";
import { LIAISONING_FAQS } from "@/data/aeoContent";
import { absoluteUrl, faqPageSchema, serviceSchema } from "@/lib/schemaHelpers";

const LIAISONING_CONTACT = "/contact";

const whatLiaisoningParagraphs = [
  "Liaisoning is not translation. It is not project management. It is the human infrastructure that sits between two organisations operating across cultural, linguistic, and institutional boundaries - and makes sure that what one party intends is what the other party receives.",
  "In practice, it means: someone in the room who understands both sides. Someone who knows when to push, when to wait, and when a silence means agreement versus concern. Someone with existing relationships in the institutions, ministries, industry bodies, and boardrooms that matter.",
  "After 10 years operating at the intersection of Indian and Asian business, UVAN brings exactly that.",
];

const liaisonServices = [
  {
    id: "government-institutional",
    title: "Government & Institutional Liaison",
    description:
      "Direct engagement with ministries, regulatory bodies, trade associations, and government-linked entities on behalf of your organisation. We manage formal correspondence, meeting facilitation, and ongoing institutional relationships - navigating procedural requirements and cultural protocols so your organisation's interests are represented accurately and with credibility.",
    points: [
      "Ministry and regulatory body communication",
      "Trade body and industry association engagement",
      "Consulate and embassy facilitation",
      "Government project coordination",
    ],
    icon: Landmark,
    doodle: "/doodles/Call center-amico.svg",
    doodleAlt: "Government liaison illustration",
  },
  {
    id: "corporate-business",
    title: "Corporate & Business Liaison",
    description:
      "Bridging the gap between your organisation and Indian or Asian corporate counterparts - whether for initial introductions, ongoing partner management, or high-stakes negotiation support. We provide a professionally credible interface that reflects your organisation's standing and intent.",
    points: [
      "Board-level and senior executive introductions",
      "Partner and distributor relationship management",
      "Negotiation facilitation and cultural mediation",
      "Joint venture and MOU facilitation",
    ],
    icon: Briefcase,
    doodle: "/doodles/Group discussion-bro.svg",
    doodleAlt: "Corporate liaison illustration",
  },
  {
    id: "single-point-coordination",
    title: "Single Point of Coordination",
    description:
      "For companies managing multiple vendor relationships, regulatory tracks, and operational workstreams simultaneously in a new market, the cost of fragmented coordination is enormous. UVAN acts as your single point of contact - consolidating communication, aligning workstreams, and giving your leadership one clear line of accountability.",
    points: [
      "Multi-vendor coordination and management",
      "Workstream alignment across legal, financial, operational, and language functions",
      "Regular structured reporting to your leadership",
      "Issue escalation and resolution",
    ],
    icon: Users,
    doodle: "/doodles/Schedule-amico.svg",
    doodleAlt: "Coordination illustration",
  },
  {
    id: "cultural-intelligence",
    title: "Cultural Intelligence & Communication Advisory",
    description:
      "Many deals that should close, don't - because something in the communication created friction that neither side could name. UVAN's cultural advisory work helps your team understand what is actually being communicated in meetings, correspondence, and negotiations - and how to respond in ways that build rather than erode trust.",
    points: [
      "Pre-meeting cultural briefings for your leadership team",
      "Post-meeting debrief and communication review",
      "Cultural sensitivity training for India-entry teams",
      "Communication strategy advisory for Asian market engagement",
    ],
    icon: Globe2,
    doodle: "/doodles/Light bulb-bro (1).svg",
    doodleAlt: "Cultural intelligence illustration",
    crossRef: {
      label: "Structured language training via Vaani Skills ↗",
      href: "https://bhashikskill.co.in",
    },
  },
  {
    id: "exhibition-trade-fair",
    title: "Exhibition & Trade Fair Facilitation",
    description:
      "At international exhibitions and trade events across India, UVAN provides on-ground facilitation - managing introductions, interpreting buyer-seller conversations, and ensuring your team can operate with full confidence in a multilingual, multicultural environment.",
    points: [
      "On-site interpretation and facilitation at exhibitions",
      "Buyer-seller introduction and matchmaking",
      "Booth communication and materials support",
      "Post-event follow-up coordination",
    ],
    icon: Store,
    doodle: "/doodles/International trade-bro.svg",
    doodleAlt: "Exhibition facilitation illustration",
  },
];

const whoThisIsFor = [
  "Foreign companies managing government approvals, licensing, or regulatory engagement in India",
  "Japanese, Korean, and Southeast Asian manufacturers coordinating with Indian partners or suppliers",
  "Indian companies managing distributor or partner relationships in Asia",
  "Any organisation that needs a trusted, culturally fluent point of contact in a market they are still learning",
];

const whyUvanParagraphs = [
  "We have held this role - formally and informally - for 10 years. Our founder has sat across the table from heads of state, multinational CEOs, government officials, and trade body leaders in some of the most consequential meetings in the India-Asia corridor. When UVAN liaises on your behalf, the person in the room is not a coordinator reading from a brief. They are someone who has been in that room before.",
  "We are also formally recognised by the Consulate General of the People's Republic of China for our contribution to India-China trade relations - an institutional endorsement that reflects the trust we have built across years of credible, culturally intelligent engagement.",
];

const liaisonLd = [
  faqPageSchema(absoluteUrl("/liaisoning-facilitation/"), LIAISONING_FAQS),
  serviceSchema({
    name: "Business liaisoning & facilitation",
    description:
      "Government, institutional, corporate, coordination, cultural intelligence, and exhibition liaison with native-language fluency across the India-Asia corridor.",
    canonicalPath: "/liaisoning-facilitation/",
    serviceType: "Liaisoning services",
  }),
];

const LiaisoningFacilitation = () => {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const hidden = reduceMotion ? false : { opacity: 0, y: 24 };
  const show = { opacity: 1, y: 0 };
  const transition = (delay = 0) => ({ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const });

  return (
    <PageLayout
      title={t("seo.liaisoning.title")}
      description={t("seo.liaisoning.description")}
      canonicalPath="/liaisoning-facilitation/"
      keywords={t("seo.liaisoning.keywords")}
      jsonLd={liaisonLd}
    >
      {/* Hero */}
      <section className="relative overflow-hidden theme-section-soft section-pad-hero sm:px-6">
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.12]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <motion.div initial={hidden} animate={show} transition={transition(0)} className="max-w-3xl">
              <p className="mb-4 inline-flex max-w-full rounded-full border border-[hsl(var(--border-light))] bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))] sm:mb-5 sm:px-4 sm:py-1.5 sm:text-xs sm:tracking-[0.2em]">
                India. Japan. Southeast Asia. One Point of Contact.
              </p>
              <h1 className="font-serif text-[1.75rem] font-bold leading-[1.08] text-on-light sm:text-4xl lg:text-5xl xl:text-[3.25rem]">
                When the Room Matters, You Need Someone Who Knows How to{" "}
                <span className="text-[hsl(var(--brand-purple-700))]">Read It.</span>
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-on-light-secondary sm:mt-6 sm:text-base lg:text-lg">
                UVAN&apos;s liaisoning and facilitation services provide a single, trusted point of coordination between
                your organisation and its counterparts in India and across Asia - managing the communication, cultural
                interface, and operational connections that determine whether agreements get made or opportunities get
                missed.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
                <motion.a
                  href={LIAISONING_CONTACT}
                  whileHover={reduceMotion ? undefined : { y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-5 py-3 text-sm font-bold text-[hsl(var(--brand-navy-950))] shadow-[0_14px_36px_hsl(var(--brand-gold-500)/0.28)] transition hover:brightness-105 sm:w-auto sm:px-6"
                >
                  Discuss Your Liaisoning Needs
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                </motion.a>
                <motion.div whileHover={reduceMotion ? undefined : { scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                  <Link
                    to="/ask-soham"
                    className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[hsl(var(--border-light-strong))] bg-white px-5 py-3 text-sm font-semibold text-on-light transition hover:bg-[hsl(var(--surface-light-100))] sm:w-auto sm:px-6"
                  >
                    Ask Soham - 15 Min Free
                    <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.figure
              className="hidden lg:block"
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 24 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
              transition={transition(0.12)}
            >
              <motion.img
                src="/doodles/Group discussion-bro.svg"
                alt=""
                aria-hidden
                className="mx-auto h-56 w-full max-w-[360px] object-contain opacity-90"
                animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.figure>
          </div>
        </div>
      </section>

      {/* What liaisoning means */}
      <section id="what-liaisoning-means" className="theme-section-soft relative scroll-mt-24 overflow-hidden px-5 section-pad sm:px-6">
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.12] lg:opacity-[0.14]" />
        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
            className="mx-auto mb-6 max-w-3xl lg:mb-10"
          >
            <span className="mb-3 inline-flex rounded-full border border-[hsl(var(--border-light))] bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))] sm:mb-4 sm:px-4 sm:py-1.5 sm:text-xs sm:tracking-[0.18em]">
              Definition
            </span>
            <h2 className="font-serif text-[1.65rem] font-bold leading-tight text-on-light sm:text-4xl lg:text-5xl">
              What Liaisoning Actually Means
            </h2>
          </motion.div>

          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0.08)}
            className="theme-card-light card-shine mx-auto max-w-4xl rounded-2xl border border-[hsl(var(--border-light))] p-5 sm:rounded-3xl sm:p-8 lg:p-10"
          >
            <div className="space-y-4 text-sm leading-[1.85] text-on-light-secondary sm:space-y-5 sm:text-base">
              {whatLiaisoningParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="theme-section-light relative scroll-mt-24 overflow-visible px-5 section-pad sm:px-6">
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.1]" />
        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
            className="mb-6 max-w-3xl lg:mb-10"
          >
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))] sm:mb-4 sm:px-4 sm:py-1.5 sm:text-xs sm:tracking-[0.18em]">
              <Sparkles className="h-3.5 w-3.5 text-[hsl(var(--brand-gold-600))]" aria-hidden />
              Our Services
            </span>
            <h2 className="font-serif text-[1.65rem] font-bold text-on-light sm:text-4xl lg:text-5xl">
              Our Liaisoning &amp; Facilitation Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-6 lg:gap-5">
            {liaisonServices.map((service, index) => (
              <LiaisonServiceCard
                key={service.id}
                {...service}
                index={index}
                className={cn(
                  "lg:col-span-2",
                  index === 3 && "lg:col-start-2",
                  index === 4 && "lg:col-start-4 sm:col-span-2 sm:max-w-md sm:justify-self-center lg:max-w-none lg:justify-self-stretch",
                )}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section id="who-this-is-for" className="theme-section-soft relative scroll-mt-24 overflow-hidden px-5 section-pad sm:px-6">
        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
            className="theme-card-light card-shine rounded-2xl border border-[hsl(var(--border-light))] p-5 sm:rounded-3xl sm:p-8 lg:p-10"
          >
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))] sm:mb-4 sm:px-4 sm:py-1.5 sm:text-xs sm:tracking-[0.18em]">
              <Users className="h-3.5 w-3.5" aria-hidden />
              Who This Is For
            </span>
            <h2 className="font-serif text-[1.65rem] font-bold text-on-light sm:text-3xl lg:text-4xl">Who This Is For</h2>
            <ul className="mt-5 space-y-3 sm:mt-6">
              {whoThisIsFor.map((item, index) => (
                <motion.li
                  key={item}
                  initial={hidden}
                  whileInView={show}
                  viewport={{ once: true }}
                  transition={transition(0.08 + index * 0.04)}
                  className="flex items-start gap-2.5 rounded-xl border border-[hsl(var(--border-light))] bg-white/80 px-3 py-3 sm:gap-3 sm:px-4"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-gold-600))]" aria-hidden />
                  <span className="text-xs leading-relaxed text-on-light-secondary sm:text-sm">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Why UVAN */}
      <section className="theme-section-light relative overflow-hidden px-5 section-pad sm:px-6">
        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
            className="overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-white p-5 shadow-sm sm:rounded-3xl sm:p-8 lg:p-10"
          >
            <div className="relative z-10">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))] sm:mb-4 sm:px-4 sm:py-1.5 sm:text-xs">
                <Handshake className="h-3.5 w-3.5 text-[hsl(var(--brand-purple-700))]" aria-hidden />
                Why UVAN
              </span>
              <h2 className="font-serif text-[1.65rem] font-bold leading-tight text-on-light sm:text-3xl lg:text-4xl">Why UVAN</h2>
              <div className="mt-4 space-y-4 text-sm leading-[1.85] text-on-light-secondary sm:mt-6 sm:text-base">
                {whyUvanParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
                <a
                  href={LIAISONING_CONTACT}
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-5 py-3 text-sm font-bold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105 sm:w-auto sm:px-6"
                >
                  Start a Conversation
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                </a>
                <Link
                  to="/ask-soham"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-[hsl(var(--border-light-strong))] bg-white px-5 py-3 text-sm font-semibold text-on-light transition hover:bg-[hsl(var(--surface-light-100))] sm:w-auto sm:px-6"
                >
                  Ask Soham - 15 Min Free
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <AeoFrequentlyAskedQuestions items={LIAISONING_FAQS} className="theme-section-soft px-5 section-pad sm:px-6" />
    </PageLayout>
  );
};

export default LiaisoningFacilitation;
