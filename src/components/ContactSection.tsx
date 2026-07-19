import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Building2, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useContactInquiry } from "@/components/ContactInquiryProvider";
import { fadeOnly, slideLeft } from "@/lib/animationVariants";

const ContactSection = () => {
  const { t } = useTranslation();
  const { open: openContactForm } = useContactInquiry();
  const reduceMotion = useReducedMotion() ?? false;
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const gradientPosition = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion ? ["50% 50%", "50% 50%", "50% 50%"] : ["0% 50%", "50% 50%", "100% 50%"],
  );

  const copyVariant = reduceMotion ? fadeOnly : slideLeft;

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden border-y border-[hsl(var(--border-light)/0.85)] py-6 theme-section-soft lg:py-12"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 70%, hsl(var(--brand-gold-500) / 0.12), transparent 38%)",
          backgroundSize: "200% 200%",
          backgroundPosition: gradientPosition,
        }}
      />
      <div className="glow-orb glow-orb-gold pointer-events-none -bottom-20 right-[-18%] h-[240px] w-[240px] opacity-[0.07] lg:-bottom-32 lg:right-[-12%] lg:h-[380px] lg:w-[380px] lg:opacity-[0.09]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] theme-grid-overlay-light lg:opacity-[0.18]" />

      <motion.img
        src="/doodles/Call center-amico.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-12 top-1/4 hidden h-52 w-52 opacity-[0.09] lg:block"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 0.09, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      <div className="container relative z-10 mx-auto px-5 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <motion.div
            className="space-y-6 text-center lg:space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={copyVariant}
          >
            <div className="space-y-3 lg:space-y-4">
              <motion.span
                className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-card)/0.94)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-[hsl(var(--brand-purple-700))] shadow-[0_10px_36px_hsl(var(--brand-navy-950)/0.07)]"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Sparkles className="h-3.5 w-3.5 shrink-0 text-[hsl(var(--brand-gold-600))]" aria-hidden />
                {t("home.contact.badge")}
              </motion.span>

              <motion.h2
                className="mx-auto max-w-4xl font-serif text-[1.75rem] font-bold leading-[1.08] text-on-light sm:text-5xl lg:text-6xl lg:leading-[1.06]"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                {t("home.contact.titlePrefix")}{" "}
                <span className="italic text-[hsl(var(--brand-purple-700))]">
                  {t("home.contact.titleHighlight")}
                </span>
              </motion.h2>

              <motion.p
                className="mx-auto max-w-3xl text-base leading-relaxed text-on-light-secondary sm:text-lg"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.08 }}
              >
                {t("home.contact.subtitle")}
              </motion.p>
            </div>

            <motion.div
              className="mx-auto w-full max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.14 }}
            >
              <div className="rounded-[1.75rem] border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-card)/0.92)] p-2 shadow-[0_16px_48px_hsl(var(--brand-navy-950)/0.06)] sm:p-2.5">
                <motion.div whileHover={reduceMotion ? undefined : { scale: 1.01 }} whileTap={reduceMotion ? undefined : { scale: 0.99 }}>
                  <button
                    type="button"
                    onClick={openContactForm}
                    className="group inline-flex min-h-[3.25rem] w-full items-center justify-center gap-2.5 rounded-[1.35rem] bg-[hsl(var(--brand-gold-500))] px-5 py-3.5 text-sm font-semibold text-[hsl(var(--brand-navy-950))] shadow-[0_10px_28px_-12px_hsl(var(--brand-gold-500)/0.75)] transition hover:brightness-105 sm:min-h-[3.5rem] sm:px-6 sm:text-[0.9375rem]"
                  >
                    <Building2 className="h-4 w-4 shrink-0 opacity-80" aria-hidden />
                    <span>{t("home.contact.marketEntryCta")}</span>
                    <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </button>
                </motion.div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-on-light-muted">{t("home.contact.cardSubtitle")}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
