import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Building2, CheckCircle2, Facebook, Globe2, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, ShieldCheck, Twitter } from "lucide-react";
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
  { href: "https://x.com/ewanbusiness", label: "X (Twitter)", Icon: Twitter },
];

const contactCards = [
  {
    icon: Mail,
    label: "Message Us",
    value: "info@ewan.co.in",
    href: "mailto:info@ewan.co.in",
    note: "We typically respond within one business day.",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "(+91) 82757 44740",
    href: "tel:+918275744740",
    note: "Available during India business hours (IST).",
  },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

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
      {/* Hero + Form Section */}
      <section className="relative overflow-hidden theme-section-light px-6 pb-12 pt-8">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 14% 14%, hsl(var(--brand-purple-500) / 0.2) 0%, transparent 36%), radial-gradient(circle at 86% 16%, hsl(var(--brand-gold-500) / 0.16) 0%, transparent 34%), radial-gradient(circle at 68% 80%, hsl(var(--brand-cyan-500) / 0.12) 0%, transparent 42%)",
          }}
        />
        <motion.img
          src="/doodles/Mail-amico.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -top-4 right-2 hidden h-52 w-52 opacity-[0.13] lg:block xl:h-60 xl:w-60"
          initial={{ opacity: 0, y: -14 }}
          whileInView={{ opacity: 0.13, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          style={{ animation: "wave-float 8s ease-in-out infinite" }}
        />
        <div className="container relative mx-auto">
          <div className="grid items-start gap-10 xl:grid-cols-[1fr_1.05fr]">
            <article className="space-y-8">
              <motion.p
                className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-white/65 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-700))]"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Globe2 className="h-3.5 w-3.5" />
                Get in Touch
              </motion.p>
              <motion.h1
                className="max-w-3xl text-4xl font-serif font-extrabold leading-tight text-on-light sm:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.05 }}
              >
                Let's Team Up to Make Your Business Better
              </motion.h1>
              <motion.p
                className="max-w-2xl text-lg leading-relaxed text-on-light-secondary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 }}
              >
                Whether you're a foreign company entering India or an Indian company going global, we are here to bridge the gap. Reach out and let's get started.
              </motion.p>

              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))]">
                  Contact Options
                </p>

                {contactCards.map((card, i) => (
                  <motion.div
                    key={card.label}
                    className="theme-card-light rounded-2xl p-5"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.1, duration: 0.6 }}
                    whileHover={{ y: -3 }}
                  >
                    <p className="inline-flex items-center gap-2 text-sm font-semibold text-on-light">
                      <card.icon className="h-4 w-4 text-[hsl(var(--brand-gold-600))]" />
                      {card.label}
                    </p>
                    <a href={card.href} className="mt-1 block text-lg font-semibold text-on-light hover:underline">
                      {card.value}
                    </a>
                    <p className="mt-2 text-sm text-on-light-secondary">{card.note}</p>
                  </motion.div>
                ))}

                {/* Ask Soham */}
                <motion.div
                  className="theme-card-light rounded-2xl p-5"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35, duration: 0.6 }}
                  whileHover={{ y: -3 }}
                >
                  <p className="inline-flex items-center gap-2 text-sm font-semibold text-on-light">
                    <MessageCircle className="h-4 w-4 text-[hsl(var(--brand-gold-600))]" />
                    Ask Soham - Free 15-Min Call
                  </p>
                  <p className="mt-1 text-sm text-on-light-secondary">Book a free 15-minute strategy call with our founder.</p>
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="mt-4 inline-block">
                    <Link
                      to="/ask-soham"
                      className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-5 py-2 text-sm font-semibold text-[hsl(var(--brand-navy-950))]"
                    >
                      Book Now
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </motion.div>
                </motion.div>
              </div>

              {/* Office Address */}
              <motion.div
                className="rounded-2xl border border-[hsl(var(--border-light))] bg-white/70 p-5"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45, duration: 0.6 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))]">Visit Us</p>
                <p className="mt-3 inline-flex items-start gap-2 text-sm font-semibold text-on-light">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-gold-600))]" />
                  Flat no. 14, Asmanth Appartment, Karve Rd, near Quantum Works, behind SBI, Pandurang Colony, Erandwane, Pune, Maharashtra 411004
                </p>
              </motion.div>

              {/* Socials */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.55 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))]">Follow Us</p>
                <div className="mt-3 flex gap-4">
                  {socialLinks.map(({ href, label, Icon }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      whileHover={{ y: -3, scale: 1.06 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-[hsl(var(--border-light))] bg-white/70 text-on-light transition-colors hover:bg-[hsl(var(--brand-navy-950))] hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </article>

            {/* Contact Form */}
            <motion.article
              className="theme-card-light relative overflow-hidden rounded-3xl p-7 lg:p-9"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <img
                src="/doodles/Calling-amico.svg"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 opacity-[0.08] sm:h-56 sm:w-56"
              />
              <h2 className="relative text-3xl font-serif font-bold text-on-light">Send Us a Message</h2>
              <p className="relative mt-2 text-sm text-on-light-secondary">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form className="relative mt-7 space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-sm font-medium text-on-light">
                    Name (Required)
                    <input
                      required
                      name="fullName"
                      type="text"
                      placeholder="Your Name"
                      className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] bg-white/90 px-4 py-2.5 text-sm outline-none transition focus:border-[hsl(var(--brand-purple-500))]"
                    />
                  </label>
                  <label className="text-sm font-medium text-on-light">
                    Company
                    <input
                      name="company"
                      type="text"
                      placeholder="Company Name"
                      className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] bg-white/90 px-4 py-2.5 text-sm outline-none transition focus:border-[hsl(var(--brand-purple-500))]"
                    />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-sm font-medium text-on-light">
                    Your Email (required)
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] bg-white/90 px-4 py-2.5 text-sm outline-none transition focus:border-[hsl(var(--brand-purple-500))]"
                    />
                  </label>
                  <label className="text-sm font-medium text-on-light">
                    Phone
                    <input
                      name="phone"
                      type="tel"
                      placeholder="+91 00000 00000"
                      className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] bg-white/90 px-4 py-2.5 text-sm outline-none transition focus:border-[hsl(var(--brand-purple-500))]"
                    />
                  </label>
                </div>

                <label className="block text-sm font-medium text-on-light">
                  Choose Subject
                  <select
                    required
                    name="service"
                    defaultValue=""
                    className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] bg-white/90 px-4 py-2.5 text-sm outline-none transition focus:border-[hsl(var(--brand-purple-500))]"
                  >
                    <option value="" disabled>Select a service area</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </label>

                <label className="block text-sm font-medium text-on-light">
                  Trade Corridor
                  <select
                    name="region"
                    defaultValue=""
                    className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] bg-white/90 px-4 py-2.5 text-sm outline-none transition focus:border-[hsl(var(--brand-purple-500))]"
                  >
                    <option value="" disabled>Select your trade corridor</option>
                    {regionOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
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
                    className="mt-1.5 w-full rounded-xl border border-[hsl(var(--border-light))] bg-white/90 px-4 py-3 text-sm outline-none transition focus:border-[hsl(var(--brand-purple-500))]"
                  />
                </label>

                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-purple-700))] px-7 py-3 text-sm font-semibold text-white transition hover:brightness-110"
                  >
                    Send Message
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                  <span className="inline-flex items-center gap-1.5 text-xs text-on-light-secondary">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[hsl(var(--brand-gold-600))]" />
                    Response within 24 hrs
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-on-light-secondary">
                    <ShieldCheck className="h-3.5 w-3.5 text-[hsl(var(--brand-gold-600))]" />
                    Confidential
                  </span>
                </div>
              </form>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative mt-4 rounded-xl bg-[hsl(var(--brand-gold-500)/0.2)] px-4 py-3 text-sm font-medium text-on-light"
                >
                  ✅ Thank you! We've received your message and will be in touch soon.
                </motion.p>
              )}

              <div className="relative mt-8 rounded-2xl border border-[hsl(var(--border-light))] bg-white/70 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))]">
                  Who We Work With
                </p>
                <div className="mt-3 grid gap-2">
                  {audience.map((item) => (
                    <p key={item} className="inline-flex items-start gap-2 text-sm text-on-light-secondary">
                      <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-gold-600))]" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="theme-section-soft px-6 py-12">
        <div className="container mx-auto rounded-3xl border border-[hsl(var(--border-light))] bg-white/75 px-6 py-7">
          <div className="grid gap-6 text-center sm:grid-cols-4">
            {trustStats.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-3xl font-extrabold text-on-light">{item.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-on-light-secondary">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="theme-section-light px-6 pb-20 pt-4">
        <div className="container mx-auto">
          <motion.div
            className="rounded-3xl bg-[hsl(var(--brand-purple-700))] px-8 py-10 text-white md:flex md:items-center md:justify-between"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-gold-500))]">Free Strategy Session</p>
              <h3 className="mt-3 text-3xl font-serif font-bold">Prefer a Live Conversation?</h3>
              <p className="mt-2 text-sm text-white/80">Book 15 minutes with Soham - free, no commitment, and completely focused on your business goals.</p>
            </div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="mt-6 inline-block md:mt-0">
              <Link
                to="/ask-soham"
                className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-7 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))]"
              >
                Ask Soham - 15 Min Free
                <MessageCircle className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
