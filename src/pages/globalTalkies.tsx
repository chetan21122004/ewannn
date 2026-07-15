import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clapperboard,
  FileText,
  Film,
  Mic2,
  Quote,
  Sparkles,
  Subtitles,
  Tv,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import AeoFrequentlyAskedQuestions from "@/components/AeoFrequentlyAskedQuestions";
import { GLOBAL_TALKIES_FAQS } from "@/data/aeoContent";
import { absoluteUrl, faqPageSchema, serviceSchema } from "@/lib/schemaHelpers";

const globalTalkiesLd = [
  serviceSchema({
    name: "Global Talkies media localisation",
    description:
      "Multilingual film distribution, OTT localisation, subtitling, dubbing, voiceover, script adaptation, and cultural compliance for cross-border media.",
    canonicalPath: "/global-talkies/",
    serviceType: "Media localisation",
  }),
  faqPageSchema(absoluteUrl("/global-talkies/"), GLOBAL_TALKIES_FAQS),
];

const services = [
  {
    id: "subtitling",
    title: "Subtitling",
    description:
      "Professional subtitling for film, television, OTT content, corporate video, and documentary. Available in 100+ languages. Timed, formatted, and reviewed by native-language experts with content experience. Compliant with platform-specific subtitle specifications.",
    points: [
      "Narrative and dialogue subtitling",
      "SDH (Subtitles for the Deaf and Hard of Hearing)",
      "Platform-specific formatting (SRT, VTT, TTML)",
      "Netflix, Amazon, YouTube compliance",
      "Quality review by native-language editors",
    ],
    icon: Subtitles,
    doodle: "/doodles/Video tutorial-rafiki (1).svg",
    doodleAlt: "Subtitling illustration",
  },
  {
    id: "dubbing",
    title: "Dubbing",
    description:
      "Multilingual dubbing for film, animation, corporate training, and OTT content. Voice casting, script adaptation, recording coordination, and post-production review - managed end to end. Our dubbing retains the emotional register of the original while ensuring natural delivery in the target language.",
    points: [
      "Script adaptation - lip-sync aware",
      "Voice talent coordination across 50+ languages",
      "Recording supervision and direction",
      "Post-production review and quality assurance",
    ],
    icon: Mic2,
    doodle: "/doodles/Calling-amico.svg",
    doodleAlt: "Dubbing illustration",
  },
  {
    id: "voiceover",
    title: "Voiceover",
    description:
      "Professional multilingual voiceover for corporate videos, explainers, e-learning modules, advertisements, and product demos. 100+ languages. Human voices - not synthetic. Delivered to broadcast quality.",
    points: [
      "Corporate and institutional video voiceover",
      "E-learning and training content",
      "Product and promotional video narration",
      "Documentary and news voiceover",
    ],
    icon: Mic2,
    doodle: "/doodles/Cloud sync-amico.svg",
    doodleAlt: "Voiceover illustration",
  },
  {
    id: "script-translation",
    title: "Script Translation & Cultural Adaptation",
    description:
      "Screen translation is not the same as document translation. A script needs to breathe in its target language - not just be accurate. Our screen translators are experienced with dialogue rhythm, cultural reference adaptation, humour translation, and the specific demands of on-screen text.",
    points: [
      "Feature film and short film script translation",
      "TV series and episodic content",
      "Cultural reference review and adaptation",
      "Back-translation and quality verification",
    ],
    icon: FileText,
    doodle: "/doodles/Bookmarks-pana.svg",
    doodleAlt: "Script translation illustration",
  },
  {
    id: "film-distribution",
    title: "Film Distribution Support",
    description:
      "For Indian films seeking distribution in Asian markets - and for international films entering the Indian market - Global Talkies provides the language and cultural bridge that makes distribution viable. We support the full localisation stack required for distribution.",
    points: [
      "Full localisation package (subtitles + dub + materials)",
      "Distributor communication in target language",
      "Poster, trailer, and marketing materials translation",
      "Cultural compliance review for target market",
    ],
    icon: Film,
    doodle: "/doodles/International trade-bro.svg",
    doodleAlt: "Film distribution illustration",
  },
  {
    id: "ott-localisation",
    title: "OTT Platform Localisation",
    description:
      "OTT platforms expanding into new language markets - or sourcing content from India and Asia - require localisation at scale. Global Talkies offers volume capability across subtitling, dubbing, and metadata translation with the quality control and turnaround times that platform workflows demand.",
    points: [
      "High-volume subtitling and dubbing pipelines",
      "Metadata translation (titles, descriptions, genres)",
      "Platform specification compliance",
      "Quality management for episodic and series content",
    ],
    icon: Tv,
    doodle: "/doodles/Download-amico.svg",
    doodleAlt: "OTT localisation illustration",
  },
];

const mediaCorridors = [
  { corridor: "Hindi ↔ Japanese", note: "Indian content for Japanese OTT / Japanese content for Indian audiences" },
  { corridor: "Hindi ↔ Mandarin / Cantonese", note: "Indian film distribution in China and Taiwan" },
  { corridor: "Hindi ↔ Korean", note: "K-drama localisation for Indian audiences; Indian content for Korean platforms" },
  { corridor: "Hindi ↔ Southeast Asian languages", note: "ASEAN OTT and broadcast distribution" },
  { corridor: "Hindi ↔ Arabic", note: "Middle East and North Africa distribution" },
  { corridor: "Hindi ↔ Spanish / Portuguese", note: "Latin American distribution" },
];

const whoThisIsFor = [
  "Indian film producers and distributors seeking Asian market release",
  "International content owners seeking Indian distribution",
  "OTT platforms building multilingual content libraries",
  "Corporate production teams needing training and communications video in multiple languages",
  "Animation and gaming studios requiring multilingual voice and text localisation",
];

const GlobalTalkies = () => {
  const reduceMotion = useReducedMotion();
  const hidden = reduceMotion ? false : { opacity: 0, y: 24 };
  const show = { opacity: 1, y: 0 };
  const transition = (delay = 0) => ({ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const });

  return (
    <PageLayout
      title="Global Talkies - Multilingual Film Distribution & Media Localisation | UVAN"
      description="Global Talkies by UVAN - multilingual film distribution, OTT content localisation, subtitling, dubbing, and cultural adaptation for Indian and international content crossing language borders."
      canonicalPath="/global-talkies/"
      jsonLd={globalTalkiesLd}
    >
      {/* Hero */}
      <section className="relative overflow-hidden theme-section-soft px-6 pb-24 pt-12">
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.12]" />

        <div className="container relative mx-auto">
          <div className="grid items-center gap-14 lg:grid-cols-[3fr_2fr]">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-700))]">
                Stories Without Borders.
              </p>
              <h1 className="font-serif text-5xl font-bold leading-[0.95] tracking-tight text-on-light sm:text-6xl lg:text-7xl">
                Great Content Deserves an Audience in{" "}
                <span className="text-[hsl(var(--brand-purple-700))]">Every Language.</span>
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-on-light-secondary">
                Global Talkies is UVAN's media and film services vertical - built for content creators, distributors,
                OTT platforms, and production companies that want to move stories across language barriers without losing
                what makes them powerful.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-7 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
                >
                  Discuss Your Content
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light-strong))] bg-white px-7 py-3 text-sm font-semibold text-on-light transition hover:bg-[hsl(var(--surface-light-100))]"
                >
                  info@ewan.co.in
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-[0_22px_60px_rgba(6,3,20,0.55)]">
                <img
                  src="/page-assets/global-talkies-img2.png"
                  alt="Global Talkies - film distribution and localization for international audiences"
                  className="h-full w-full object-cover transition duration-700"
                />
                <div className="absolute inset-0 bg-[hsl(var(--brand-navy-950)/0.25)] mix-blend-multiply" />
                <div className="absolute bottom-8 left-1/2 w-[82%] -translate-x-1/2 rounded-xl border border-white/10 bg-black/60 p-4 text-center backdrop-blur-md">
                  <p className="text-sm italic text-white/90">[ For Producers, Distributors & OTT Platforms ]</p>
                  <p className="font-serif text-lg font-bold text-[hsl(var(--brand-gold-500))]">The world is watching.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Global Talkies Does */}
      <section className="relative overflow-hidden px-6 py-16 theme-section-soft lg:py-20">
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.12]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
            className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(220px,280px)]"
          >
            <div className="theme-card-light card-shine rounded-3xl border border-[hsl(var(--border-light))] p-8 sm:p-10">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-700))]">
                <Clapperboard className="h-3.5 w-3.5" aria-hidden />
                What Global Talkies Does
              </span>
              <h2 className="font-serif text-3xl font-bold leading-tight text-on-light sm:text-4xl lg:text-5xl">
                Language Is the First Wall Between a Story and Its{" "}
                <span className="italic text-[hsl(var(--brand-purple-700))]">Audience.</span>
              </h2>
              <div className="mt-6 grid gap-5 text-base leading-relaxed text-on-light-secondary md:grid-cols-2">
                <p>
                  Global Talkies exists to remove it. We combine UVAN's deep multilingual capability - 125+ languages,
                  native-expert translators, cultural intelligence built across 10 years in the India-Asia corridor - with
                  a focused understanding of what media localisation actually requires: not just linguistic accuracy, but
                  emotional and cultural fidelity.
                </p>
                <p>
                  A subtitle that is technically correct but culturally tone-deaf loses the audience. A dub that doesn't
                  match the emotional register of a scene loses the scene. Global Talkies understands the difference - and
                  delivers localisation that serves the story, not just the script.
                </p>
              </div>
            </div>
            <motion.figure
              initial={hidden}
              whileInView={show}
              viewport={{ once: true }}
              transition={transition(0.1)}
            >
              <motion.img
                src="/doodles/Video tutorial-rafiki (1).svg"
                alt="Media localisation illustration"
                className="mx-auto h-44 w-full max-w-[260px] object-contain sm:h-48"
                animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.figure>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative scroll-mt-28 overflow-hidden px-6 py-16 theme-section-light lg:py-20">
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.1]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
            className="mb-10 grid items-center gap-8 lg:mb-12 lg:grid-cols-[minmax(0,1fr)_minmax(200px,260px)]"
          >
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-700))]">
                <Sparkles className="h-3.5 w-3.5 text-[hsl(var(--brand-gold-600))]" aria-hidden />
                Our Services
              </span>
              <h2 className="font-serif text-4xl font-bold text-on-light sm:text-5xl">
                Six Media <span className="italic text-[hsl(var(--brand-purple-700))]">Localisation</span> Capabilities
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-on-light-secondary">
                From subtitling and dubbing to OTT pipelines - end-to-end media localisation with cultural fidelity built in.
              </p>
            </div>
            <motion.img
              src="/doodles/Advantages-bro.svg"
              alt="Media services illustration"
              className="mx-auto h-40 w-full max-w-[240px] object-contain lg:max-w-none"
              animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.id}
                  id={service.id}
                  initial={hidden}
                  whileInView={show}
                  viewport={{ once: true }}
                  transition={transition((index % 3) * 0.08)}
                  whileHover={reduceMotion ? undefined : { y: -5 }}
                  className="group theme-card-light card-shine scroll-mt-28 overflow-hidden rounded-3xl border border-[hsl(var(--border-light))] p-6 sm:p-7"
                >
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700)/0.75)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[linear-gradient(135deg,hsl(var(--brand-purple-700))_0%,hsl(var(--brand-cyan-500))_100%)] text-white shadow-gold-sm">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                  </div>
                  <motion.img
                    src={service.doodle}
                    alt={service.doodleAlt}
                    className="mx-auto mb-4 h-24 w-full max-w-[140px] object-contain"
                    animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                  />
                  <h3 className="font-serif text-xl font-bold text-on-light sm:text-2xl">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-on-light-secondary">{service.description}</p>
                  <ul className="mt-5 space-y-2 border-t border-[hsl(var(--border-light))] pt-4">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-on-light-secondary">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-purple-700))]" aria-hidden />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Language Corridors - Media */}
      <section className="overflow-hidden theme-section-soft px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[hsl(var(--brand-purple-700))]">
                Network
              </span>
              <h2 className="font-serif text-5xl font-bold tracking-tight text-on-light">Language Corridors - Media</h2>
            </div>
            <p className="max-w-md font-light leading-relaxed text-on-light-secondary">
              Our deepest media localisation experience sits in the corridors that mirror UVAN's broader expertise.
            </p>
          </div>
          <div className="flex flex-col space-y-1">
            {mediaCorridors.map((item, index) => (
              <div
                key={item.corridor}
                className="group flex cursor-pointer items-center justify-between border-b border-[hsl(var(--border-light))] py-10 transition-all duration-500 hover:bg-[hsl(var(--surface-light-100))] hover:px-6"
              >
                <div className="flex items-center space-x-10">
                  <span className="font-serif text-4xl font-light text-on-light-muted transition-colors group-hover:text-[hsl(var(--brand-purple-700))]">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-on-light md:text-3xl">{item.corridor}</h3>
                </div>
                <div className="hidden text-right md:block">
                  <p className="text-sm font-light text-on-light-secondary">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="relative overflow-hidden px-6 py-16 theme-section-soft lg:py-20">
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.1]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
            className="grid items-center gap-10 lg:grid-cols-[minmax(220px,280px)_minmax(0,1fr)]"
          >
            <motion.figure
              initial={hidden}
              whileInView={show}
              viewport={{ once: true }}
              transition={transition(0.08)}
              className="order-2 lg:order-1"
            >
              <motion.img
                src="/doodles/Group discussion-bro.svg"
                alt="Content teams illustration"
                className="mx-auto h-44 w-full max-w-[260px] object-contain lg:mx-0"
                animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.figure>

            <div className="order-1 theme-card-light card-shine rounded-3xl border border-[hsl(var(--border-light))] p-8 sm:p-10 lg:order-2">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-700))]">
                <Users className="h-3.5 w-3.5" aria-hidden />
                Who This Is For
              </span>
              <h2 className="font-serif text-3xl font-bold text-on-light sm:text-4xl">
                Built for Content That{" "}
                <span className="italic text-[hsl(var(--brand-purple-700))]">Crosses Borders</span>
              </h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {whoThisIsFor.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={hidden}
                    whileInView={show}
                    viewport={{ once: true }}
                    transition={transition(0.1 + index * 0.04)}
                    className="flex items-start gap-3 rounded-2xl border border-[hsl(var(--border-light))] bg-white/70 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-gold-600))]" aria-hidden />
                    <span className="text-sm leading-relaxed text-on-light-secondary">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Global Talkies */}
      <section className="relative overflow-hidden px-6 py-16 theme-section-light lg:py-20">

        <div className="container relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
            className="grid items-center gap-10 lg:grid-cols-12"
          >
            <div className="theme-card-light card-shine rounded-3xl border border-[hsl(var(--border-light))] p-8 sm:p-10 lg:col-span-8">
              <span className="mb-4 inline-flex rounded-full border border-[hsl(var(--border-light))] bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[hsl(var(--brand-purple-700))]">
                Why Global Talkies
              </span>
              <h2 className="font-serif text-3xl font-bold leading-tight text-on-light sm:text-4xl lg:text-5xl">
                We Treat Content as a{" "}
                <span className="italic text-[hsl(var(--brand-purple-700))]">Cultural Translation</span> Challenge.
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-on-light-secondary">
                Most media localisation providers treat content as a throughput problem. Global Talkies treats it as a
                cultural translation challenge - because that is what it is. When UVAN's interpreters sit in boardrooms
                between Japanese and Indian executives, they are doing the same thing a good subtitle editor does: finding
                the version of an idea that lands correctly on the other side of a cultural boundary.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-on-light-secondary">
                Global Talkies brings that sensibility to every piece of content we touch.
              </p>
            </div>

            <motion.aside
              initial={hidden}
              whileInView={show}
              viewport={{ once: true }}
              transition={transition(0.12)}
              className="rounded-3xl border border-[hsl(var(--border-light))] bg-white p-8 lg:col-span-4"
            >
              <Quote className="h-8 w-8 text-[hsl(var(--brand-purple-700))]" aria-hidden />
              <blockquote className="mt-5 font-serif text-xl font-bold leading-snug text-on-light sm:text-2xl">
                "Localisation that serves the story, not just the script."
              </blockquote>
              <p className="mt-4 text-sm leading-relaxed text-on-light-secondary">
                The same cultural intelligence UVAN applies in boardrooms - applied to every subtitle, dub, and script we deliver.
              </p>
            </motion.aside>
          </motion.div>
        </div>
      </section>

      <AeoFrequentlyAskedQuestions items={GLOBAL_TALKIES_FAQS} className="bg-[#f8f7fc] px-6 py-16" />

      {/* CTA */}
      <section className="theme-section-soft px-6 py-16">
        <div className="container mx-auto rounded-3xl border border-[hsl(var(--border-light))] bg-white p-8 text-center shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-700))]">Next Step</p>
          <h3 className="mt-2 font-serif text-4xl font-bold text-on-light">Send Your Content Brief</h3>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
            >
              Send Your Content Brief
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/ask-soham"
              className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light-strong))] bg-white px-6 py-3 text-sm font-semibold text-on-light transition hover:bg-[hsl(var(--surface-light-100))]"
            >
              Ask Soham - 15 Min Free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GlobalTalkies;