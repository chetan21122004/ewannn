import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

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
  return (
    <PageLayout
      title="Global Talkies - Multilingual Film Distribution & Media Localisation | Ewan Business Solutions"
      description="Global Talkies by Ewan - multilingual film distribution, OTT content localisation, subtitling, dubbing, and cultural adaptation for Indian and international content crossing language borders."
      canonicalPath="/global-talkies/"
    >
      {/* Hero */}
      <section className="relative overflow-hidden bg-[hsl(var(--brand-navy-950))] px-6 pb-24 pt-12 text-white">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 20% 30%, hsl(var(--brand-purple-500)/0.32) 0%, transparent 52%), radial-gradient(circle at 80% 70%, hsl(var(--brand-navy-950)) 0%, transparent 52%)",
          }}
        />
        <div className="pointer-events-none absolute bottom-20 right-0 h-32 w-[44rem] rotate-12 bg-gradient-to-r from-transparent via-[hsl(var(--brand-gold-500)/0.16)] to-transparent blur-3xl" />

        <div className="container relative mx-auto">
          <div className="grid items-center gap-14 lg:grid-cols-[3fr_2fr]">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                Stories Without Borders.
              </p>
              <h1 className="font-serif text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                Great Content Deserves an Audience in{" "}
                <span className="text-[hsl(var(--brand-gold-500))]">Every Language.</span>
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/78">
                Global Talkies is Ewan's media and film services vertical - built for content creators, distributors,
                OTT platforms, and production companies that want to move stories across language barriers without losing
                what makes them powerful.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="mailto:info@ewan.co.in?subject=Global%20Talkies%20Content%20Brief"
                  className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-7 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
                >
                  Discuss Your Content
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="mailto:info@ewan.co.in?subject=Global%20Talkies%20Content%20Brief"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-white/92 transition hover:bg-white/10"
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
      <section className="bg-[#f2f0fa] px-6 py-14">
        <div className="container mx-auto">
          <article className="rounded-3xl border border-[#e7e3f1] bg-white p-8 shadow-[0_10px_26px_rgba(20,16,45,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-500)/0.88)]">
              What Global Talkies Does
            </p>
            <h2 className="mt-3 font-serif text-4xl font-bold text-[#1a1633]">
              Language Is the First Wall Between a Story and Its Audience.
            </h2>
            <div className="mt-4 grid gap-4 text-sm leading-relaxed text-[#3d3859] md:grid-cols-2">
              <p>
                Global Talkies exists to remove it. We combine Ewan's deep multilingual capability - 125+ languages,
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
          </article>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-[#f8f7fc] px-6 py-16">
        <div className="container mx-auto">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-500)/0.88)]">
              Our Services
            </p>
            <h2 className="mt-2 font-serif text-4xl font-bold text-[#1a1633]">Six Media Localisation Capabilities</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-28 rounded-3xl border border-[#e7e3f1] bg-white p-7 shadow-[0_10px_26px_rgba(20,16,45,0.06)] transition hover:-translate-y-1"
              >
                <h3 className="font-serif text-2xl font-bold text-[#1a1633]">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#3d3859]">{service.description}</p>
                <div className="mt-5 space-y-2">
                  {service.points.map((point) => (
                    <p key={point} className="flex items-start gap-2 text-sm text-[#332f4f]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-purple-500))]" />
                      <span>{point}</span>
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Language Corridors - Media */}
      <section className="overflow-hidden bg-[hsl(var(--brand-navy-950))] px-8 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[hsl(var(--brand-purple-500))]">
                Network
              </span>
              <h2 className="font-serif text-5xl font-bold tracking-tight">Language Corridors - Media</h2>
            </div>
            <p className="max-w-md font-light leading-relaxed text-white/70">
              Our deepest media localisation experience sits in the corridors that mirror Ewan's broader expertise.
            </p>
          </div>
          <div className="flex flex-col space-y-1">
            {mediaCorridors.map((item, index) => (
              <div
                key={item.corridor}
                className="group flex cursor-pointer items-center justify-between border-b border-white/10 py-10 transition-all duration-500 hover:bg-white/5 hover:px-6"
              >
                <div className="flex items-center space-x-10">
                  <span className="font-serif text-4xl font-light text-white/30 transition-colors group-hover:text-[hsl(var(--brand-gold-500))]">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white md:text-3xl">{item.corridor}</h3>
                </div>
                <div className="hidden text-right md:block">
                  <p className="text-sm font-light text-white/60">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-[#f8f7fc] px-6 py-14">
        <div className="container mx-auto">
          <div className="rounded-3xl border border-[#e7e3f1] bg-white p-8 shadow-[0_10px_26px_rgba(20,16,45,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-500)/0.88)]">
              Who This Is For
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-[#1a1633]">Built for Content That Crosses Borders</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {whoThisIsFor.map((item) => (
                <p key={item} className="flex items-start gap-2 text-sm text-[#332f4f]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-purple-500))]" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Global Talkies */}
      <section className="bg-[#ffffff] px-6 py-14">
        <div className="container mx-auto">
          <article className="rounded-3xl border border-[#e7e3f1] bg-[#f8f7fc] p-8 shadow-[0_10px_26px_rgba(20,16,45,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-500)/0.88)]">
              Why Global Talkies
            </p>
            <h2 className="mt-2 font-serif text-4xl font-bold text-[#1a1633]">
              We Treat Content as a Cultural Translation Challenge.
            </h2>
            <p className="mt-4 max-w-4xl text-sm leading-relaxed text-[#3d3859]">
              Most media localisation providers treat content as a throughput problem. Global Talkies treats it as a
              cultural translation challenge - because that is what it is. When Ewan's interpreters sit in boardrooms
              between Japanese and Indian executives, they are doing the same thing a good subtitle editor does: finding
              the version of an idea that lands correctly on the other side of a cultural boundary. Global Talkies brings
              that sensibility to every piece of content we touch.
            </p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[hsl(var(--brand-navy-950))] px-6 py-16 text-white">
        <div className="container mx-auto rounded-3xl border border-white/15 bg-white/5 p-8 text-center backdrop-blur-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Next Step</p>
          <h3 className="mt-2 font-serif text-4xl font-bold">Send Your Content Brief</h3>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:info@ewan.co.in?subject=Global%20Talkies%20Content%20Brief"
              className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
            >
              Send Your Content Brief
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/ask-soham"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
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