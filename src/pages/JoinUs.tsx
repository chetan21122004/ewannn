import { ArrowRight, ArrowUpRight, BrainCircuit, Handshake, Network, Users } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const openRoles = [
  { title: "Senior Market Strategy Lead", location: "Global / Remote" },
  { title: "Head of Linguistic Intelligence", location: "Singapore / Hybrid" },
];

const JoinUs = () => {
  return (
    <PageLayout
      title="Join Us | EWAN Business Solutions"
      description="Join EWAN's global team and partner network to shape the future of market intelligence and localization."
      canonicalPath="/join-us/"
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
            <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[hsl(var(--brand-purple-500)/0.25)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-gold-500))]">
              Ecosystem Architects
            </span>
            <h1 className="font-serif text-5xl font-extrabold leading-[0.95] tracking-tight lg:text-7xl xl:text-8xl">
              The Human <br />
              <span className="text-[hsl(var(--brand-gold-500))]">Network</span> of the <br />
              Future.
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-white/80 lg:text-xl">
              We are building a decentralized intelligence engine for global expansion. Collaboration is not a buzzword; it is our architectural foundation.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-8 py-4 text-base font-semibold text-[hsl(var(--brand-navy-950))] transition hover:scale-[1.02]"
              >
                Explore Your Path
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#partnership-ecosystems"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
              >
                View Network Map
                <Network className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="hidden lg:col-span-4 lg:block">
            <img
              src="/stitch/join-us/hero-network.jpg"
              alt="Futuristic digital network visual representing collaboration"
              className="w-full rounded-[2.5rem] object-cover shadow-2xl grayscale transition duration-700 hover:grayscale-0"
            />
          </div>
        </div>
      </section>

      <section className="theme-section-light px-6 py-24">
        <div className="container mx-auto grid items-center gap-14 lg:grid-cols-12">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <h2 className="font-serif text-4xl font-bold text-[hsl(var(--brand-navy-950))] lg:text-5xl">Careers</h2>
            <p className="text-on-light-secondary mt-6 text-lg leading-relaxed">
              Join a culture that prioritizes strategic autonomy over bureaucratic hierarchy. We seek executive architects, creative problem solvers, and localization pioneers.
            </p>

            <div className="mt-8 space-y-4">
              {openRoles.map((role) => (
                <article
                  key={role.title}
                  className="theme-card-light flex items-center justify-between rounded-2xl p-6 transition hover:translate-x-1"
                >
                  <div>
                    <h3 className="text-lg font-bold text-[hsl(var(--brand-navy-950))]">{role.title}</h3>
                    <p className="text-on-light-muted text-sm">{role.location}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-[hsl(var(--brand-gold-500))]" />
                </article>
              ))}
            </div>

            <Link to="/contact" className="mt-7 inline-flex items-center gap-2 font-semibold text-[hsl(var(--brand-navy-950))]">
              See All Open Roles
              <ArrowUpRight className="h-4 w-4 text-[hsl(var(--brand-gold-500))]" />
            </Link>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-7">
            <img
              src="/stitch/join-us/office-culture.jpg"
              alt="Modern office culture and work environment"
              className="h-[460px] w-full rounded-[2.5rem] object-cover shadow-[0_18px_40px_hsl(var(--brand-navy-950)/0.12)]"
            />
          </div>
        </div>
      </section>

      <section id="partnership-ecosystems" className="theme-section-soft px-6 py-24">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-4xl font-bold text-[hsl(var(--brand-navy-950))] lg:text-5xl">Partnership Ecosystems</h2>
            <p className="text-on-light-secondary mt-6 text-lg">
              Whether you are a boutique agency or an independent strategist, we provide the platform to scale your expertise.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <article className="theme-card-light rounded-[2.5rem] p-10">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[hsl(var(--surface-light-100))]">
                <Handshake className="h-7 w-7 text-[hsl(var(--brand-purple-700))]" />
              </div>
              <h3 className="text-3xl font-bold text-[hsl(var(--brand-navy-950))]">Vendors</h3>
              <p className="text-on-light-secondary mt-5 text-base leading-relaxed">
                We partner with specialized firms in localization, legal compliance, and market logistics. Integrate your services into our global delivery framework.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[hsl(var(--brand-gold-500))] px-6 py-3 font-semibold text-[hsl(var(--brand-navy-950))]"
              >
                Partnership Inquiry
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </article>

            <article className="rounded-[2.5rem] bg-[hsl(var(--brand-purple-700))] p-10 text-white shadow-[0_16px_36px_hsl(var(--brand-purple-700)/0.35)]">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <Users className="h-7 w-7 text-[hsl(var(--brand-gold-500))]" />
              </div>
              <h3 className="text-3xl font-bold">Collaborations</h3>
              <p className="mt-5 text-base leading-relaxed text-white/85">
                For independent consultants and industry experts. Access high-value projects and leverage EWAN infrastructure to deliver at an enterprise scale.
              </p>
              <Link
                to="/ask-soham"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-[hsl(var(--brand-purple-700))]"
              >
                Join Expert Network
                <BrainCircuit className="h-4 w-4" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="theme-section-light px-6 pb-24 pt-10">
        <div className="theme-card-light container mx-auto max-w-6xl rounded-[3rem] p-12 text-center lg:p-20">
          <h2 className="font-serif text-4xl font-extrabold tracking-tight text-[hsl(var(--brand-navy-950))] lg:text-6xl">
            Your Next Evolution <br />
            Starts Here.
          </h2>
          <p className="text-on-light-secondary mx-auto mt-7 max-w-2xl text-lg">
            Whether you are looking to join our core team or partner as a specialist, we have a seat at the table for world-class talent.
          </p>
          <Link
            to="/contact"
            className="mx-auto mt-10 inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-10 py-5 text-lg font-bold text-[hsl(var(--brand-navy-950))] shadow-lg shadow-[hsl(var(--brand-gold-500)/0.35)] transition hover:scale-105"
          >
            Explore Your Path
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default JoinUs;
