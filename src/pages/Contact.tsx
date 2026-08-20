import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Facebook,
  Globe2,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/PageLayout";
import ContactInquiryForm from "@/components/ContactInquiryForm";
import { COMPANY_ADDRESS, COMPANY_FACEBOOK, COMPANY_INSTAGRAM, COMPANY_LINKEDIN, COMPANY_X, PROJECTS_EMAIL, SOHAM_EMAIL } from "@/lib/site";

const audience = [
  "Foreign companies entering India",
  "Indian companies expanding abroad",
  "Businesses needing language support",
];

const socialLinks = [
  { href: COMPANY_FACEBOOK, label: "Facebook", Icon: Facebook },
  { href: COMPANY_LINKEDIN, label: "LinkedIn", Icon: Linkedin },
  { href: COMPANY_INSTAGRAM, label: "Instagram", Icon: Instagram },
  { href: COMPANY_X, label: "X", Icon: Twitter },
];

const buildContactChannels = () => [
  {
    icon: Mail,
    label: "Email Us",
    value: PROJECTS_EMAIL,
    href: `mailto:${PROJECTS_EMAIL}`,
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
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const contactChannels = buildContactChannels();

  const ease = [0.22, 1, 0.36, 1] as const;
  const hidden = reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 };
  const show = reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 };
  const transition = (delay = 0) => ({ duration: reduceMotion ? 0.35 : 0.72, delay, ease });

  return (
    <PageLayout
      title={t("seo.contact.title")}
      description={t("seo.contact.description")}
      canonicalPath="/contact/"
    >
      {/* Hero */}
      <section className="relative isolate overflow-hidden section-pad-hero sm:px-6">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 45% at 88% 12%, hsl(var(--brand-gold-500) / 0.14) 0%, transparent 48%), radial-gradient(ellipse 60% 50% at 50% 100%, hsl(var(--brand-cyan-500) / 0.1) 0%, transparent 55%)",
          }}
          aria-hidden
        />
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
                  href={`mailto:${PROJECTS_EMAIL}`}
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
                {COMPANY_ADDRESS}
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
      <section id="contact-form" className="relative scroll-mt-24 overflow-hidden section-pad theme-section-soft sm:px-6">
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

              <div className="mt-5 sm:mt-7">
                <ContactInquiryForm recipientEmail={SOHAM_EMAIL} />
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-pad-cta theme-section-soft sm:px-6 pt-2">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="relative overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-white px-5 py-8 shadow-sm sm:rounded-3xl sm:px-8 sm:py-10 lg:flex lg:items-center lg:justify-between lg:gap-10"
            initial={hidden}
            whileInView={show}
            viewport={{ once: true }}
            transition={transition(0)}
          >
            <motion.img
              src="/doodles/Address-cuate.svg"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-8 -right-4 hidden h-40 w-40 opacity-[0.1] lg:block"
              animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative z-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))] sm:text-[10px] sm:tracking-[0.24em]">
                Free Strategy Session
              </p>
              <h3 className="mt-2 font-serif text-xl font-bold text-on-light sm:mt-3 sm:text-3xl lg:text-4xl">Prefer a Live Conversation?</h3>
              <p className="mt-2 max-w-xl text-xs leading-relaxed text-on-light-secondary sm:mt-3 sm:text-sm lg:text-base">
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
