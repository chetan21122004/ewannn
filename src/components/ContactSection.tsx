import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import { fadeOnly, slideLeft } from "@/lib/animationVariants";

const ContactSection = () => {
  const { t } = useTranslation();
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
      className="relative overflow-hidden border-y border-[hsl(var(--border-light)/0.85)] py-6 theme-section-soft lg:py-10"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, hsl(var(--brand-purple-700) / 0.14), transparent 42%), radial-gradient(circle at 80% 70%, hsl(var(--brand-gold-500) / 0.12), transparent 38%)",
          backgroundSize: "200% 200%",
          backgroundPosition: gradientPosition,
        }}
      />
      <div className="glow-orb glow-orb-purple pointer-events-none -left-20 -top-24 h-[280px] w-[280px] opacity-[0.08] lg:-left-28 lg:-top-36 lg:h-[460px] lg:w-[460px] lg:opacity-[0.11]" />
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
            className="space-y-5 text-center lg:space-y-7"
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
                Whether you're entering India for the first time or taking your Indian business into new markets, let's
                talk about what that looks like.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
