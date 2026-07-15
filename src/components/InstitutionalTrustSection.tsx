import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ConsulateLetterGallery, { type ConsulateLetter } from "@/components/ConsulateLetterGallery";
import { blurReveal, fadeOnly } from "@/lib/animationVariants";

const defaultConsulateLetters: ConsulateLetter[] = [
  {
    src: "/Ewan-Consulate-experience-letter-page-001-min.jpg",
    alt: "Chinese Consulate appreciation letter page 1",
    label: "Page 1 · Chinese Original",
  },
  {
    src: "/Ewan-Consulate-experience-letter-page-002-min.jpg",
    alt: "Chinese Consulate appreciation letter page 2",
    label: "Page 2 · English Translation",
  },
];

const InstitutionalTrustSection = () => {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion() ?? false;

  const consulateLetters = t("home.institutionalTrust.letters", {
    returnObjects: true,
    defaultValue: defaultConsulateLetters,
  }) as ConsulateLetter[];

  const headerVariant = reduceMotion ? fadeOnly : blurReveal;

  return (
    <section className="relative overflow-hidden px-6 py-5 theme-section-soft lg:py-10">
      <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.08]" />

      <div className="container relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="theme-card-light card-shine overflow-hidden rounded-3xl border border-[hsl(var(--border-light))]"
        >
          <div className="grid lg:grid-cols-12">
            <div className="border-b border-[hsl(var(--border-light))] p-8 lg:col-span-5 lg:border-b-0 lg:border-r lg:p-10">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-[hsl(var(--border-light))] bg-white p-3 shadow-sm">
                <img
                  src="/page-assets/cn-flag.png"
                  alt="Flag of the People's Republic of China"
                  loading="lazy"
                  className="max-h-12 w-full object-contain"
                />
              </div>

              <span className="inline-flex rounded-full bg-[hsl(var(--brand-gold-500)/0.14)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-gold-600))]">
                {t("home.institutionalTrust.featuredBadge", { defaultValue: "Government Recognition" })}
              </span>

              <motion.h2
                className="mt-4 font-serif text-2xl font-bold leading-snug text-[hsl(var(--brand-navy-950))] sm:text-3xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={headerVariant}
              >
                {t("home.institutionalTrust.titleHighlight")}
              </motion.h2>

              <motion.p
                className="mt-4 text-sm leading-relaxed text-on-light-secondary sm:text-base"
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 }}
              >
                {t("home.institutionalTrust.subtitle")}
              </motion.p>
            </div>

            <ConsulateLetterGallery
              letters={consulateLetters}
              viewLabel={t("home.institutionalTrust.viewLetter", { defaultValue: "View full letter" })}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InstitutionalTrustSection;
