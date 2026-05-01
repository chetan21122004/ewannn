import { ArrowRight, ArrowUpRight, Handshake, Users, Award, ShieldCheck, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { useState } from "react";

const JoinUs = () => {
  const [submittedVendor, setSubmittedVendor] = useState(false);

  const handleVendorSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedVendor(true);
  };

  return (
    <PageLayout
      title="Careers & Vendor Registration | EWAN Business Solutions"
      description="Join our team or register as a vendor. Earn more with our vendor referral policy. Become a part of Ewan's global language network."
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
              Join Ewan Business Solutions
            </span>
            <h1 className="font-serif text-5xl font-extrabold leading-[0.95] tracking-tight lg:text-7xl xl:text-8xl">
              Be Part of <br />
              <span className="text-[hsl(var(--brand-gold-500))]">What We're Building.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-white/80 lg:text-xl">
              Ewan is growing - and we're looking for people and organisations who want to be part of a cross-border market partner that operates at the intersection of language, culture, and on-ground business operations.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#register-vendor"
                className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-8 py-4 text-base font-semibold text-[hsl(var(--brand-navy-950))] transition hover:scale-[1.02]"
              >
                Register as Vendor
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#join-team"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Join Our Team
                <Users className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="referral" className="theme-section-light px-6 py-16">
        <div className="container mx-auto">
          <div className="rounded-[2rem] border border-[hsl(var(--brand-gold-500)/0.3)] bg-[hsl(var(--brand-gold-500)/0.1)] p-8 text-center md:p-12">
            <Award className="mx-auto h-12 w-12 text-[hsl(var(--brand-gold-600))]" />
            <h2 className="mt-5 font-serif text-3xl font-bold text-[hsl(var(--brand-navy-950))]">Earn More with Our Vendor Referral Policy!</h2>
            <p className="mt-3 text-lg text-[#4b4566]">Know an excellent linguist? Refer them to our vendor network and earn bonuses for every successful project they complete.</p>
            <button className="mt-6 font-semibold text-[hsl(var(--brand-purple-600))] hover:underline">
              Discover the Full Policy – Click Here!
            </button>
          </div>
        </div>
      </section>

      <section id="register-vendor" className="theme-section-soft px-6 py-20">
        <div className="container mx-auto grid gap-14 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[hsl(var(--surface-light-100))]">
              <Handshake className="h-7 w-7 text-[hsl(var(--brand-purple-700))]" />
            </div>
            <h2 className="font-serif text-4xl font-bold text-[hsl(var(--brand-navy-950))] lg:text-5xl">Register as Vendor</h2>
            <p className="text-on-light-secondary mt-6 text-lg leading-relaxed">
              We partner with specialized freelance translators, interpreters, and language professionals worldwide. Join our network to access high-quality global projects.
            </p>
            <div className="mt-8 space-y-4">
              <p className="flex items-center gap-2 text-[#4b4566]">
                <ShieldCheck className="h-5 w-5 text-[hsl(var(--brand-gold-600))]" />
                Access to global clientele
              </p>
              <p className="flex items-center gap-2 text-[#4b4566]">
                <ShieldCheck className="h-5 w-5 text-[hsl(var(--brand-gold-600))]" />
                Prompt payments and clear communication
              </p>
              <p className="flex items-center gap-2 text-[#4b4566]">
                <ShieldCheck className="h-5 w-5 text-[hsl(var(--brand-gold-600))]" />
                Long-term collaboration opportunities
              </p>
            </div>
          </div>

          <div className="theme-card-light rounded-[2.5rem] p-8 lg:p-10">
            {submittedVendor ? (
              <div className="text-center py-10">
                <ShieldCheck className="mx-auto h-16 w-16 text-[hsl(var(--brand-gold-500))]" />
                <h3 className="mt-4 text-2xl font-bold text-[hsl(var(--brand-navy-950))]">Registration Received</h3>
                <p className="mt-2 text-[#4b4566]">Thank you for applying. Our vendor management team will review your profile and get back to you shortly.</p>
                <button 
                  onClick={() => setSubmittedVendor(false)}
                  className="mt-6 text-sm font-semibold text-[hsl(var(--brand-purple-600))] hover:underline"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <form onSubmit={handleVendorSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-sm font-medium text-[hsl(var(--brand-navy-950))]">
                    Your Name (required)
                    <input required type="text" className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] px-4 py-2.5 outline-none focus:border-[hsl(var(--brand-purple-500))]" />
                  </label>
                  <label className="text-sm font-medium text-[hsl(var(--brand-navy-950))]">
                    Your Contact Number
                    <input type="tel" className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] px-4 py-2.5 outline-none focus:border-[hsl(var(--brand-purple-500))]" />
                  </label>
                </div>
                
                <label className="block text-sm font-medium text-[hsl(var(--brand-navy-950))]">
                  Your Email (required)
                  <input required type="email" className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] px-4 py-2.5 outline-none focus:border-[hsl(var(--brand-purple-500))]" />
                </label>

                <label className="block text-sm font-medium text-[hsl(var(--brand-navy-950))]">
                  Country of Origin (required)
                  <input required type="text" className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] px-4 py-2.5 outline-none focus:border-[hsl(var(--brand-purple-500))]" />
                </label>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-sm font-medium text-[hsl(var(--brand-navy-950))]">
                    Native Language known* (required)
                    <input required type="text" className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] px-4 py-2.5 outline-none focus:border-[hsl(var(--brand-purple-500))]" />
                  </label>
                  <label className="text-sm font-medium text-[hsl(var(--brand-navy-950))]">
                    Foreign Language known* (required)
                    <input required type="text" className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] px-4 py-2.5 outline-none focus:border-[hsl(var(--brand-purple-500))]" />
                  </label>
                </div>

                <label className="block text-sm font-medium text-[hsl(var(--brand-navy-950))]">
                  Certification in Foreign language
                  <input type="text" className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] px-4 py-2.5 outline-none focus:border-[hsl(var(--brand-purple-500))]" />
                </label>

                <button
                  type="submit"
                  className="mt-4 w-full rounded-full bg-[hsl(var(--brand-purple-700))] py-3.5 text-sm font-bold text-white transition hover:brightness-110"
                >
                  Register
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section id="join-team" className="theme-section-light px-6 py-20">
        <div className="container mx-auto grid gap-14 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="theme-card-light rounded-[2.5rem] p-8 lg:p-10">
              <h3 className="text-2xl font-serif font-bold text-[hsl(var(--brand-navy-950))]">Submit Your Application</h3>
              <form className="mt-6 space-y-4">
                <label className="block text-sm font-medium text-[hsl(var(--brand-navy-950))]">
                  Your Name (required)
                  <input required type="text" className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] px-4 py-2.5 outline-none focus:border-[hsl(var(--brand-purple-500))]" />
                </label>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-sm font-medium text-[hsl(var(--brand-navy-950))]">
                    Your Contact Number
                    <input type="tel" className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] px-4 py-2.5 outline-none focus:border-[hsl(var(--brand-purple-500))]" />
                  </label>
                  <label className="text-sm font-medium text-[hsl(var(--brand-navy-950))]">
                    Your Email (required)
                    <input required type="email" className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] px-4 py-2.5 outline-none focus:border-[hsl(var(--brand-purple-500))]" />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-sm font-medium text-[hsl(var(--brand-navy-950))]">
                    Country of Origin (required)
                    <input required type="text" className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] px-4 py-2.5 outline-none focus:border-[hsl(var(--brand-purple-500))]" />
                  </label>
                  <label className="text-sm font-medium text-[hsl(var(--brand-navy-950))]">
                    Native Language known* (required)
                    <input required type="text" className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] px-4 py-2.5 outline-none focus:border-[hsl(var(--brand-purple-500))]" />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-sm font-medium text-[hsl(var(--brand-navy-950))]">
                    Home Address
                    <input type="text" className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] px-4 py-2.5 outline-none focus:border-[hsl(var(--brand-purple-500))]" />
                  </label>
                  <label className="text-sm font-medium text-[hsl(var(--brand-navy-950))]">
                    City* (required)
                    <input required type="text" className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] px-4 py-2.5 outline-none focus:border-[hsl(var(--brand-purple-500))]" />
                  </label>
                </div>

                <label className="block text-sm font-medium text-[hsl(var(--brand-navy-950))]">
                  Upload Resume* (required)
                  <input required type="file" className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] px-4 py-2.5 outline-none bg-white focus:border-[hsl(var(--brand-purple-500))]" />
                </label>

                <label className="block text-sm font-medium text-[hsl(var(--brand-navy-950))]">
                  Cover letter or Additional Information
                  <textarea rows={3} className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] px-4 py-2.5 outline-none focus:border-[hsl(var(--brand-purple-500))]" />
                </label>

                <button type="button" className="mt-4 w-full rounded-full bg-[hsl(var(--brand-navy-950))] py-3.5 text-sm font-bold text-white transition hover:brightness-110">
                  Submit Application
                </button>
              </form>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[hsl(var(--brand-purple-500)/0.1)]">
              <Users className="h-7 w-7 text-[hsl(var(--brand-purple-700))]" />
            </div>
            <h2 className="font-serif text-4xl font-bold text-[hsl(var(--brand-navy-950))] lg:text-5xl">Join Our Team</h2>
            <p className="text-on-light-secondary mt-6 text-lg leading-relaxed">
              For language professionals, interpreters, translators, operations specialists, and account managers who want a full-time or contract role at Ewan.
            </p>
            
            <div className="mt-8 space-y-4">
              <p className="flex items-center gap-2 text-[#4b4566]">
                <ShieldCheck className="h-5 w-5 text-[hsl(var(--brand-gold-600))]" />
                Native or near-native proficiency in Asian/emerging market languages
              </p>
              <p className="flex items-center gap-2 text-[#4b4566]">
                <ShieldCheck className="h-5 w-5 text-[hsl(var(--brand-gold-600))]" />
                Sector experience in automotive, pharma, aerospace, or legal
              </p>
              <p className="flex items-center gap-2 text-[#4b4566]">
                <ShieldCheck className="h-5 w-5 text-[hsl(var(--brand-gold-600))]" />
                Operational discipline and client communication skills
              </p>
            </div>

            <div className="mt-8 rounded-2xl bg-[#f2f0fa] p-6 border border-[hsl(var(--brand-purple-500)/0.2)]">
              <h3 className="font-bold text-[hsl(var(--brand-navy-950))] flex items-center gap-2">
                <Mail className="h-5 w-5 text-[hsl(var(--brand-purple-600))]" />
                Direct Contact
              </h3>
              <p className="mt-2 text-sm text-[#4b4566]">We are always looking for exceptional language professionals. Even if we don't have a current opening, we encourage you to send your profile directly to:</p>
              <a href="mailto:info@ewan.co.in" className="mt-1 inline-block font-semibold text-[hsl(var(--brand-purple-600))] hover:underline">
                info@ewan.co.in
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="collaborate" className="theme-section-soft px-6 py-20">
        <div className="container mx-auto grid gap-14 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[hsl(var(--surface-light-100))]">
              <Handshake className="h-7 w-7 text-[hsl(var(--brand-purple-700))]" />
            </div>
            <h2 className="font-serif text-4xl font-bold text-[hsl(var(--brand-navy-950))] lg:text-5xl">Collaborate With Us</h2>
            <p className="text-on-light-secondary mt-6 text-lg leading-relaxed">
              For institutions, agencies, technology platforms, and businesses whose work intersects with cross-border language, market entry, or the India-Asia corridor.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Language schools & academies",
                "Market entry & legal firms",
                "Technology platforms & AI",
                "Government & trade bodies",
                "Content & media agencies",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-[#4b4566]">
                  <ShieldCheck className="h-4 w-4 text-[hsl(var(--brand-gold-600))]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="theme-card-light rounded-[2.5rem] p-8 lg:p-10 flex flex-col justify-center text-center">
            <h3 className="text-2xl font-serif font-bold text-[hsl(var(--brand-navy-950))]">Why Ewan?</h3>
            <p className="mt-4 text-[#4b4566] leading-relaxed">
              We have spent five years building something that is genuinely hard to replicate: deep language expertise, on-ground operational capability, institutional recognition, and a community (Oriental Flock) that gives us access to the best talent in India.
            </p>
            <Link
              to="/ask-soham"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[hsl(var(--brand-navy-950))] px-8 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Ask Soham About Working With Ewan
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default JoinUs;
