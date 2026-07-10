import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  Facebook,
  Globe2,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const serviceOptions = [
  "Market Entry",
  "Language Services",
  "Market Research",
  "Import/Export",
  "Global Talkies",
  "Other",
];

const regionOptions = [
  "India <-> Japan",
  "India <-> China",
  "India <-> ASEAN",
  "India <-> Middle East",
  "India <-> Europe",
  "Other Corridor",
];

const trustStats = [
  { value: "60k+", label: "Interpretation Hours" },
  { value: "250+", label: "Enterprise Clients" },
  { value: "125+", label: "Languages Handled" },
  { value: "ISO", label: "9001:2015 Certified" },
];

const audience = [
  "Foreign companies entering India",
  "Indian companies expanding abroad",
  "Businesses needing language support",
];

const socialLinks = [
  { href: "https://www.facebook.com/EwanBusinessSolutions?mibextid=ZbWKwL", label: "Facebook", Icon: Facebook },
  { href: "https://www.linkedin.com/company/ewan-business-solutions/", label: "LinkedIn", Icon: Linkedin },
  { href: "https://www.instagram.com/ewanbizsolution/", label: "Instagram", Icon: Instagram },
  { href: "https://x.com/ewanbusiness", label: "X", Icon: Twitter },
];

const contactChannels = [
  {
    icon: Mail,
    label: "Email Us",
    value: "info@ewan.co.in",
    href: "mailto:info@ewan.co.in",
    note: "We typically respond within one business day.",
    doodle: "/doodles/Mail-amico.svg",
    doodleAlt: "Email illustration",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "(+91) 82757 44740",
    href: "tel:+918275744740",
    note: "Available during India business hours (IST).",
    doodle: "/doodles/Calling-amico.svg",
    doodleAlt: "Phone call illustration",
  },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const reduceMotion = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1] as const;
  const hidden = reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 };
  const show = reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 };
  const transition = (delay = 0) => ({ duration: reduceMotion ? 0.35 : 0.72, delay, ease });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  };

  return (
    <PageLayout
      title="Contact Us | UVAN"
      description="Let's team up to make your business better. Reach UVAN at info@ewan.co.in or (+91) 82757 44740. Visit us in Pune, India."
      canonicalPath="/contact/"
    >
      {/* Hero */}
      <section className="relative isolate overflow-hidden px-5 pb-10 pt-8 sm:px-6 lg:pb-20 lg:pt-12">
        {/* Primary full-bleed blob */}
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/bg-blobs/magic-background-with-purple-light-rays-effect-free-vector.jpg')",
          }}
          aria-hidden
        />
        {/* Secondary wave accent */}
        <div
          className="pointer-events-none absolute inset-0 bg-[length:130%] bg-[position:85%_15%] bg-no-repeat opacity-50 mix-blend-soft-light"
          style={{
            backgroundImage:
              "url('/bg-blobs/purple-luxury-wave-background-design-free-vector.jpg')",
          }}
          aria-hidden
        />
        {/* Light scrim - keeps copy readable on light theme */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[hsl(var(--surface-light-50)/0.88)] via-[hsl(var(--surface-light-50)/0.72)] to-[hsl(var(--surface-light-100)/0.85)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 12% 18%, hsl(var(--brand-purple-500) / 0.18) 0%, transparent 52%), radial-gradient(ellipse 55% 45% at 88% 12%, hsl(var(--brand-gold-500) / 0.14) 0%, transparent 48%), radial-gradient(ellipse 60% 50% at 50% 100%, hsl(var(--brand-cyan-500) / 0.1) 0%, transparent 55%)",
          }}
          aria-hidden
        />
        <div className="glow-orb glow-orb-purple pointer-events-none h-[280px] w-[280px] -left-24 top-0 opacity-[0.1] lg:h-[520px] lg:w-[520px] lg:-left-44 lg:opacity-[0.14]" />
        <div className="glow-orb glow-orb-gold pointer-events-none h-[220px] w-[220px] -right-20 bottom-0 opacity-[0.08] lg:h-[400px] lg:w-[400px] lg:-right-36 lg:opacity-[0.11]" />
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.14] lg:opacity-[0.2]" />
        {/* Bottom fade into next section */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[hsl(var(--surface-light-50))] to-transparent"
          aria-hidden
        />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(240px,320px)] lg:gap-14">
            <motion.div initial={hidden} animate={show} transition={transition(0)}>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))] shadow-sm sm:mb-5 sm:px-4 sm:py-1.5 sm:text-[11px] sm:tracking-[0.22em]">
                <Sparkles className="h-3 w-3 text-[hsl(var(--brand-gold-600))] sm:h-3.5 sm:w-3.5" aria-hidden />
                Get in Touch
              </span>
              <h1 className="max-w-3xl font-serif text-[1.75rem] font-bold leading-[1.08] text-on-light sm:text-4xl lg:text-5xl xl:text-6xl xl:leading-[1.02]">
                Let's Team Up to Make Your{" "}
                <span className="italic text-[hsl(var(--brand-purple-700))]">Business Better</span>
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-on-light-secondary sm:mt-5 sm:text-base lg:text-lg">
                Whether you are a foreign company entering India or an Indian company going global, we are here to bridge
                the gap. Reach out and let&apos;s get started.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
                <a
                  href="mailto:info@ewan.co.in"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-[hsl(var(--brand-navy-950))] shadow-[0_16px_36px_hsl(var(--brand-gold-500)/0.22)] transition hover:-translate-y-0.5 hover:brightness-105 sm:w-auto sm:px-6"
                >
                  Email Us
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                </a>
                <a
                  href="#contact-form"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-[hsl(var(--border-light-strong))] bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-on-light transition hover:bg-[hsl(var(--surface-light-100))] sm:w-auto sm:px-6"
                >
                  Send a Message
                </a>
              </div>
            </motion.div>

            <motion.figure
              initial={hidden}
              animate={show}
              transition={transition(0.12)}
              className="mx-auto hidden w-full max-w-[300px] lg:block lg:max-w-none"
            >
              <motion.img
                src="/doodles/Sent Message-pana.svg"
                alt="Send us a message illustration"
                className="h-44 w-full object-contain sm:h-52 lg:h-56"
                animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.figure>
          </div>
        </div>
      </section>

      {/* Contact channels */}
      <section className="relative px-5 py-8 theme-section-light sm:px-6 lg:py-14">
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.1] lg:opacity-[0.12]" />
        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid gap-3 md:grid-cols-2 md:gap-6">
            {contactChannels.map((channel, i) => {
              const Icon = channel.icon;
              return (
                <motion.a
                  key={channel.label}
                  href={channel.href}
                  initial={hidden}
                  whileInView={show}
                  viewport={{ once: true }}
                  transition={transition(i * 0.08)}
                  whileHover={reduceMotion ? undefined : { y: -5 }}
                  className="group theme-card-light card-shine flex items-start gap-4 overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] p-4 sm:rounded-3xl sm:p-6 md:flex-row md:items-center md:p-8"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,hsl(var(--brand-purple-700))_0%,hsl(var(--brand-cyan-500))_100%)] text-white shadow-gold-sm sm:h-12 sm:w-12 sm:rounded-2xl">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--brand-purple-700))] sm:text-[11px] sm:tracking-[0.18em]">
                      {channel.label}
                    </p>
                    <p className="mt-1 text-base font-bold text-on-light transition group-hover:text-[hsl(var(--brand-purple-700))] sm:mt-2 sm:text-xl">
                      {channel.value}
                    </p>
                    <p className="mt-1 text-xs text-on-light-secondary sm:mt-2 sm:text-sm">{channel.note}</p>
                  </div>
                  <motion.figure className="hidden shrink-0 items-center justify-center md:flex md:w-[42%]">
                    <motion.img
                      src={channel.doodle}
                      alt={channel.doodleAlt}
                      className="h-32 w-full max-w-[180px] object-contain sm:h-36"
                      animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
                      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                    />
                  </motion.figure>
                </motion.a>
              );
            })}
          </div>

          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0.16)}
            className="mt-4 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4 lg:grid-cols-[1fr_1fr_0.85fr]"
          >
            <div className="theme-card-light rounded-2xl border border-[hsl(var(--border-light))] p-4 sm:rounded-3xl sm:p-6 lg:p-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--brand-purple-700))] sm:text-[11px] sm:tracking-[0.18em]">
                Visit Us
              </p>
              <p className="mt-2 inline-flex items-start gap-2 text-xs leading-relaxed text-on-light-secondary sm:mt-3 sm:gap-2.5 sm:text-sm">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[hsl(var(--brand-gold-600))] sm:h-4 sm:w-4" aria-hidden />
                Flat no 14, Fourth Floor, Asmant Apartment, near Quantum Works, Erandwane, Karve Road, Pune - 411004
              </p>
            </div>

            <div className="theme-card-light rounded-2xl border border-[hsl(var(--border-light))] p-4 sm:rounded-3xl sm:p-6 lg:p-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--brand-purple-700))] sm:text-[11px] sm:tracking-[0.18em]">
                Ask Soham
              </p>
              <p className="mt-2 text-xs leading-relaxed text-on-light-secondary sm:mt-3 sm:text-sm">
                Book a free 15-minute strategy call with our founder - market entry, language strategy, or career guidance.
              </p>
              <Link
                to="/ask-soham"
                className="mt-3 inline-flex min-h-10 items-center gap-2 text-sm font-bold text-[hsl(var(--brand-purple-700))] underline-offset-4 hover:underline sm:mt-4"
              >
                Book the free call <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
            </div>

            <div className="theme-card-light rounded-2xl border border-[hsl(var(--border-light))] p-4 sm:col-span-2 sm:rounded-3xl sm:p-6 lg:col-span-1 lg:p-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--brand-purple-700))] sm:text-[11px] sm:tracking-[0.18em]">
                Follow Us
              </p>
              <div className="mt-3 flex flex-wrap gap-2 sm:mt-4 sm:gap-2.5">
                {socialLinks.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[hsl(var(--border-light))] bg-white text-on-light transition hover:border-[hsl(var(--brand-purple-700)/0.35)] hover:bg-[hsl(var(--brand-navy-950))] hover:text-white"
                  >
                    <Icon className="h-[18px] w-[18px]" aria-hidden />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form + audience */}
      <section id="contact-form" className="relative scroll-mt-24 overflow-hidden px-5 py-8 theme-section-soft sm:px-6 lg:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply lg:opacity-[0.08]"
          style={{
            backgroundImage:
              "url('/bg-blobs/abstract-purple-fluid-wave-background-free-vector.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="glow-orb glow-orb-purple pointer-events-none h-[240px] w-[240px] -right-24 top-10 opacity-[0.07] lg:h-[420px] lg:w-[420px] lg:-right-40 lg:opacity-[0.09]" />
        <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.12] lg:opacity-[0.14]" />

        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid items-start gap-6 xl:grid-cols-[0.95fr_1.05fr] xl:gap-10">
            <motion.div
              initial={hidden}
              whileInView={show}
              viewport={{ once: true }}
              transition={transition(0)}
              className="order-2 space-y-4 xl:order-1 xl:space-y-6"
            >
              <div>
                <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))] sm:mb-4 sm:px-4 sm:py-1.5 sm:text-[11px] sm:tracking-[0.22em]">
                  <Globe2 className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden />
                  Who We Work With
                </span>
                <h2 className="font-serif text-xl font-bold text-on-light sm:text-3xl lg:text-4xl">
                  Built for cross-border mandates.
                </h2>
              </div>

              <div className="flex flex-col gap-2 sm:space-y-3">
                {audience.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={hidden}
                    whileInView={show}
                    viewport={{ once: true }}
                    transition={transition(0.08 + i * 0.06)}
                    className="flex items-center gap-2.5 rounded-xl border border-[hsl(var(--border-light))] bg-white/80 px-3 py-2.5 sm:items-start sm:gap-3 sm:rounded-2xl sm:p-4"
                  >
                    <Building2 className="h-3.5 w-3.5 shrink-0 text-[hsl(var(--brand-purple-700))] sm:mt-0.5 sm:h-4 sm:w-4" aria-hidden />
                    <p className="text-xs font-medium text-on-light-secondary sm:text-sm">{item}</p>
                  </motion.div>
                ))}
              </div>

              <motion.figure
                initial={hidden}
                whileInView={show}
                viewport={{ once: true }}
                transition={transition(0.2)}
                className="hidden lg:block"
              >
                <motion.img
                  src="/doodles/Call center-amico.svg"
                  alt="UVAN support team illustration"
                  className="h-48 w-full max-w-sm object-contain"
                  animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.figure>
            </motion.div>

            <motion.article
              initial={hidden}
              whileInView={show}
              viewport={{ once: true }}
              transition={transition(0.1)}
              className="theme-card-light card-shine order-1 overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] p-5 sm:rounded-3xl sm:p-7 lg:p-9 xl:order-2"
            >
              <h2 className="font-serif text-xl font-bold text-on-light sm:text-2xl lg:text-3xl">Send Us a Message</h2>
              <p className="mt-1.5 text-xs text-on-light-secondary sm:mt-2 sm:text-sm">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>

              <form className="mt-5 space-y-3.5 sm:mt-7 sm:space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-3.5 sm:grid-cols-2 sm:gap-4">
                  <label className="text-sm font-medium text-on-light">
                    Name (Required)
                    <input
                      required
                      name="fullName"
                      type="text"
                      placeholder="Your Name"
                      className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[hsl(var(--brand-purple-500))] focus:ring-2 focus:ring-[hsl(var(--brand-purple-500)/0.15)]"
                    />
                  </label>
                  <label className="text-sm font-medium text-on-light">
                    Company
                    <input
                      name="company"
                      type="text"
                      placeholder="Company Name"
                      className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[hsl(var(--brand-purple-500))] focus:ring-2 focus:ring-[hsl(var(--brand-purple-500)/0.15)]"
                    />
                  </label>
                </div>

                <div className="grid gap-3.5 sm:grid-cols-2 sm:gap-4">
                  <label className="text-sm font-medium text-on-light">
                    Your Email (required)
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[hsl(var(--brand-purple-500))] focus:ring-2 focus:ring-[hsl(var(--brand-purple-500)/0.15)]"
                    />
                  </label>
                  <label className="text-sm font-medium text-on-light">
                    Phone
                    <input
                      name="phone"
                      type="tel"
                      placeholder="+91 00000 00000"
                      className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[hsl(var(--brand-purple-500))] focus:ring-2 focus:ring-[hsl(var(--brand-purple-500)/0.15)]"
                    />
                  </label>
                </div>

                <label className="block text-sm font-medium text-on-light">
                  Choose Subject
                  <select
                    required
                    name="service"
                    defaultValue=""
                    className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[hsl(var(--brand-purple-500))] focus:ring-2 focus:ring-[hsl(var(--brand-purple-500)/0.15)]"
                  >
                    <option value="" disabled>
                      Select a service area
                    </option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block text-sm font-medium text-on-light">
                  Trade Corridor
                  <select
                    name="region"
                    defaultValue=""
                    className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[hsl(var(--brand-purple-500))] focus:ring-2 focus:ring-[hsl(var(--brand-purple-500)/0.15)]"
                  >
                    <option value="" disabled>
                      Select your trade corridor
                    </option>
                    {regionOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block text-sm font-medium text-on-light">
                  Your Message (required)
                  <textarea
                    required
                    name="message"
                    placeholder="Tell us about your project or question..."
                    rows={4}
                    className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] bg-white px-4 py-3 text-sm outline-none transition focus:border-[hsl(var(--brand-purple-500))] focus:ring-2 focus:ring-[hsl(var(--brand-purple-500)/0.15)]"
                  />
                </label>

                <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                  <motion.button
                    type="submit"
                    whileHover={reduceMotion ? undefined : { scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[hsl(var(--brand-purple-700))] px-7 py-3 text-sm font-semibold text-white transition hover:brightness-110 sm:w-auto"
                  >
                    Send Message
                    <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                  </motion.button>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    <span className="inline-flex items-center gap-1.5 text-[11px] text-on-light-secondary sm:text-xs">
                      <Clock3 className="h-3.5 w-3.5 text-[hsl(var(--brand-gold-600))]" aria-hidden />
                      Response within 24 hrs
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] text-on-light-secondary sm:text-xs">
                      <ShieldCheck className="h-3.5 w-3.5 text-[hsl(var(--brand-gold-600))]" aria-hidden />
                      Confidential
                    </span>
                  </div>
                </div>
              </form>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 rounded-xl border border-[hsl(var(--brand-gold-500)/0.3)] bg-[hsl(var(--brand-gold-500)/0.12)] px-4 py-3 text-sm font-medium text-on-light"
                >
                  Thank you! We&apos;ve received your message and will be in touch soon.
                </motion.p>
              )}
            </motion.article>
          </div>
        </div>
      </section>

      {/* Trust stats */}
      {false && (
      <section className="relative px-5 py-8 theme-section-light sm:px-6 lg:py-14">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
            className="mb-5 text-center sm:mb-8"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))] sm:text-[11px] sm:tracking-[0.22em]">
              Why teams reach out
            </p>
            <h2 className="mt-2 font-serif text-xl font-bold text-on-light sm:mt-3 sm:text-3xl lg:text-4xl">
              Trusted across corridors.
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-4">
            {trustStats.map((item, i) => (
              <motion.div
                key={item.label}
                initial={hidden}
                whileInView={show}
                viewport={{ once: true }}
                transition={transition(i * 0.08)}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className="theme-card-light rounded-xl border border-[hsl(var(--border-light))] p-3.5 text-center sm:rounded-2xl sm:p-6"
              >
                <p className="font-serif text-2xl font-bold text-[hsl(var(--brand-navy-950))] sm:text-3xl">{item.value}</p>
                <p className="mt-1 text-[9px] font-bold uppercase leading-snug tracking-[0.12em] text-on-light-muted sm:mt-2 sm:text-[10px] sm:tracking-[0.14em]">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Bottom CTA */}
      <section className="px-5 pb-14 pt-2 theme-section-soft sm:px-6 lg:pb-20 lg:pt-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="relative overflow-hidden rounded-2xl bg-[hsl(var(--brand-navy-950))] px-5 py-8 text-white sm:rounded-3xl sm:px-8 sm:py-10 lg:flex lg:items-center lg:justify-between lg:gap-10"
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--brand-purple-500)/0.35),transparent_45%)]" />
            <motion.img
              src="/doodles/Address-cuate.svg"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-8 -right-4 hidden h-40 w-40 opacity-[0.15] lg:block"
              animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative z-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-gold-500))] sm:text-[10px] sm:tracking-[0.24em]">
                Free Strategy Session
              </p>
              <h3 className="mt-2 font-serif text-xl font-bold sm:mt-3 sm:text-3xl lg:text-4xl">Prefer a Live Conversation?</h3>
              <p className="mt-2 max-w-xl text-xs leading-relaxed text-white/75 sm:mt-3 sm:text-sm lg:text-base">
                Book 15 minutes with Soham - free, no commitment, and completely focused on your business goals.
              </p>
            </div>
            <Link
              to="/ask-soham"
              className="relative z-10 mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-6 py-3 text-sm font-bold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105 sm:mt-6 sm:w-auto sm:px-7 lg:mt-0"
            >
              Ask Soham - 15 Min Free
              <MessageCircle className="h-4 w-4 shrink-0" aria-hidden />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
