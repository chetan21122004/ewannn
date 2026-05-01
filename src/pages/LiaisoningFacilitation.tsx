import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import SectionDivider from "@/components/SectionDivider";

/** Stitch screen assets (`public/stitch/liaisoning-facilitation/`); replace via `curl -L` from Stitch export when available */
const stitch = {
  heroBg: "/stitch/liaisoning-facilitation/hero-bg.jpg",
  heroVisual: "/stitch/liaisoning-facilitation/hero-visual.jpg",
  executive: "/stitch/liaisoning-facilitation/executive.jpg",
} as const;

const services = [
  {
    id: "executive-liaison",
    title: "Executive Business Liaison",
    description:
      "High-stakes boardroom and executive-level liaison for cross-border business. We don't just translate words; we translate authority, intent, and nuance. Our practitioners have spent a decade in the rooms where global leaders and Fortune 500 boards make decisions.",
    points: [
      "Boardroom interpretation and meeting facilitation",
      "Executive communication strategy for Asian markets",
      "Strategic partner relationship management",
      "Cross-cultural management advisory",
    ],
  },
  {
    id: "government-liaison",
    title: "Government & Regulatory Liaison",
    description:
      "Navigating government departments and regulatory bodies requires a specific kind of liaison - one built on institutional trust and professional standing. Ewan has formal recognition and experience with the Consulate General of the PRC, MSAMB, and the Bhashini Initiative (MeitY).",
    points: [
      "Government department and official liaison",
      "Regulatory and compliance communication",
      "Institutional partner relationship building",
      "Public sector project coordination",
    ],
  },
  {
    id: "negotiation-facilitation",
    title: "Negotiation Facilitation",
    description:
      "Negotiations in the India-Asia corridor often stall not because of the numbers, but because of how they are presented. We facilitate negotiations in Mandarin, Japanese, Korean, and ASEAN languages - ensuring that both sides are operating with the same understanding of intent.",
    points: [
      "Bilingual negotiation support",
      "Conflict mediation and bridge-building",
      "Contract and term-sheet negotiation liaison",
      "Cultural negotiation advisory",
    ],
  },
  {
    id: "crisis-resolution",
    title: "Crisis & Conflict Resolution",
    description:
      "When cross-border relationships break down, miscommunication is almost always at the center. Ewan provides neutral, professional mediation and liaison to resolve conflicts, clarify intent, and rebuild the communication bridge.",
    points: [
      "Communication breakdown mediation",
      "Dispute resolution facilitation",
      "Relationship recovery and turnaround",
      "Crisis communication support",
    ],
  },
];

const whoThisIsFor = [
  "CEOs and Directors leading cross-border expansion or procurement",
  "Foreign companies navigating Indian government or regulatory bodies",
  "Indian companies in complex negotiations with Japanese, Chinese, or Korean partners",
  "Government agencies and trade bodies requiring high-stakes institutional liaison",
];

const LiaisoningFacilitation = () => {
  return (
    <PageLayout
      title="Executive Liaison & Negotiation Facilitation India | Ewan Business Solutions"
      description="High-stakes executive liaison, government relations, and negotiation facilitation for the India-Asia corridor. 60,000+ hours of boardroom experience in Mandarin, Japanese, and Korean."
      canonicalPath="/liaisoning-facilitation/"
    >
      {/* Hero */}
      <section className="relative overflow-hidden bg-[hsl(var(--brand-navy-950))] px-6 pb-20 pt-10 text-white md:pb-28 md:pt-14 stitch-line stitch-line-bottom">
        <div
          className="pointer-events-none absolute inset-0 opacity-30 md:opacity-40"
          style={{
            backgroundImage: `url('${stitch.heroBg}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_45%_at_65%_0%,hsl(var(--brand-purple-700)/0.42),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_85%,hsl(var(--brand-cyan-500)/0.12),transparent_42%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[hsl(var(--brand-navy-950)/0.5)] via-[hsl(var(--brand-navy-950)/0.78)] to-[hsl(var(--brand-navy-950))]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
                High-Stakes Liaison. Cultural Precision. Results-Driven Execution.
              </p>
              <h1 className="font-serif text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl xl:text-[3.35rem] xl:leading-[1.02]">
                When the Room Is Tense,{" "}
                <span className="text-[hsl(var(--brand-gold-500))]">the Right Partner Makes the Difference.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/78 sm:text-lg">
                Ewan provides executive liaison and negotiation support for cross-border business. We sit between you and
                your partners, government officials, or vendors - ensuring that intent is never lost in translation.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="mailto:info@ewan.co.in?subject=Liaisoning%20Requirement"
                  className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
                >
                  Discuss Your Liaisoning Requirement
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  to="/ask-soham"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/12"
                >
                  Ask Soham - 15 Min Free
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[440px] lg:col-span-5 lg:mx-0 lg:max-w-none">
              <div className="pointer-events-none absolute -right-6 top-1/3 h-24 w-24 rounded-full border border-dashed border-[hsl(var(--brand-gold-500)/0.3)]" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[hsl(var(--brand-navy-900))] shadow-[0_28px_70px_-20px_rgba(0,0,0,0.55)] ring-1 ring-white/10">
                <div className="absolute inset-0 z-[1] bg-gradient-to-tr from-[hsl(var(--brand-navy-950)/0.72)] via-transparent to-[hsl(var(--brand-purple-700)/0.28)]" />
                <img
                  src={stitch.heroVisual}
                  alt=""
                  className="aspect-[4/5] w-full object-cover sm:aspect-[5/6]"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Ewan Difference */}
      <section className="theme-section-soft relative overflow-hidden px-6 py-12">
        <div className="pointer-events-none absolute right-0 top-1/2 h-[min(80vw,400px)] w-[min(80vw,400px)] -translate-y-1/3 translate-x-1/4 rounded-full bg-[radial-gradient(circle,hsl(var(--brand-purple-500)/0.1),transparent_70%)]" />
        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="order-2 overflow-hidden rounded-[1.75rem] border border-[hsl(var(--border-light))] bg-white shadow-[0_18px_50px_rgba(26,22,51,0.08)] lg:order-1">
              <img src={stitch.executive} alt="" className="aspect-[4/3] w-full object-cover" loading="lazy" />
            </div>
            <article className="order-1 rounded-[1.75rem] border border-[hsl(var(--border-light))] bg-white p-8 shadow-[0_14px_40px_rgba(26,22,51,0.06)] md:p-10 lg:order-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-500))]">
                Executive Liaison
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-[hsl(var(--brand-navy-950))] md:text-4xl">
                Liaison Is Not Just Interpretation. It Is Representation.
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-on-light-secondary md:text-base">
                <p>
                  In high-stakes business environments - whether it's a joint venture negotiation, a government audit, or
                  a supplier dispute - what you say is as important as how it is understood. Ewan provides the
                  professional standing and cultural intelligence to represent your interests accurately.
                </p>
                <p>
                  Our founder, Soham Kakade, brings over 60,000 hours of simultaneous interpretation experience in the
                  most sensitive boardroom environments. This is the foundation of our liaisoning service: the ability to
                  read a room, manage expectations, and ensure that cross-border relationships are built on clarity.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="theme-section-light px-6 py-12">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-700))]">
              Our Liaisoning Services
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-[hsl(var(--brand-navy-950))] md:text-4xl">Four Liaisoning Capabilities</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.id}
                id={service.id}
                className="group scroll-mt-28 rounded-2xl border border-[hsl(var(--border-light))] bg-white p-7 shadow-[0_12px_36px_rgba(26,22,51,0.05)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_48px_rgba(26,22,51,0.09)] md:p-8"
              >
                <div className="mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-[hsl(var(--brand-purple-500))] to-[hsl(var(--brand-gold-500))] opacity-80 transition group-hover:w-16" />
                <h3 className="font-serif text-2xl font-bold text-[hsl(var(--brand-navy-950))]">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-on-light-secondary md:text-[0.9375rem]">{service.description}</p>
                <div className="mt-5 space-y-2 border-t border-[hsl(var(--border-light))] pt-5">
                  {service.points.map((point) => (
                    <p key={point} className="flex items-start gap-2 text-sm text-on-light-secondary">
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

      {/* Who This Is For */}
      <section className="theme-section-soft px-6 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="rounded-[1.75rem] border border-[hsl(var(--border-light))] bg-white p-8 shadow-[0_14px_40px_rgba(26,22,51,0.06)] md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-700))]">Who This Is For</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-[hsl(var(--brand-navy-950))] md:text-[2rem]">
              Built for High-Stakes Communication
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {whoThisIsFor.map((item) => (
                <p
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] p-4 text-sm text-on-light-secondary"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-purple-500))]" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>


   

    </PageLayout>
  );
};

export default LiaisoningFacilitation;
