import { motion } from "framer-motion";
import { Landmark } from "lucide-react";
import { useTranslation } from "react-i18next";

const defaultConsulateLetters = [
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
  const consulateLetters = t("home.institutionalTrust.letters", {
    returnObjects: true,
    defaultValue: defaultConsulateLetters,
  }) as Array<{ src: string; alt: string; label: string }>;

  return (
    <section className="relative overflow-hidden py-5 lg:py-10 theme-section-soft">
      <div className="glow-orb glow-orb-purple w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-8" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[hsl(var(--brand-purple-700))] to-[hsl(var(--brand-purple-500))] mb-4 shadow-gold-md"
            >
              <Landmark className="w-8 h-8 text-white" />
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-4xl font-serif font-bold text-on-light mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {t("home.institutionalTrust.titlePrefix")}{" "}
              <span className="text-[hsl(var(--brand-purple-700))] italic">
                {t("home.institutionalTrust.titleHighlight")}
              </span>
            </motion.h2>

            <motion.p
              className="text-base text-on-light-muted leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {t("home.institutionalTrust.subtitle")}
            </motion.p>
          </div>

          <div className="grid items-start gap-6 xl:grid-cols-2">
            {consulateLetters.map((letter, index) => (
              <motion.figure
                key={letter.src}
                className="overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-card)/0.96)] shadow-[0_8px_24px_hsl(var(--brand-navy-950)/0.08)]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                <div className="relative bg-[hsl(var(--surface-light-50))] p-4 sm:p-5">
                  <img
                    src={letter.src}
                    alt={letter.alt}
                    className="w-full rounded-xl border border-[hsl(var(--border-light-strong))] object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="border-t border-[hsl(var(--border-light))] px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--text-on-light-secondary))]">
                  {letter.label}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstitutionalTrustSection;
