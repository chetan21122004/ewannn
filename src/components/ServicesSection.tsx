import { motion } from "framer-motion";
import { Building2, Languages, ArrowRight, CheckCircle2, Globe2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const defaultBlocks = [
  {
    id: "market-entry",
    label: "Market Entry & Operations",
    title: "Land. Setup. Scale.",
    desc: "Full-stack market entry into India and outbound expansion for Indian companies — handled end to end.",
    features: ["Entity setup & incorporation", "Regulatory & compliance", "Liaison & government affairs", "On-ground execution"],
    accent: "gold",
  },
  {
    id: "language",
    label: "Language & Localization",
    title: "Speak Every Market.",
    desc: "Certified linguists and native experts across 125+ languages — translation, interpretation, and full localization.",
    features: ["Translation & document services", "Live & remote interpretation", "Voiceover & multimedia localization", "Certified + native expertise"],
    accent: "purple",
  },
];

const accentStyles = {
  gold: {
    haloBorder: "border-[hsl(var(--brand-gold-500)/0.2)]",
    iconWrap: "bg-[linear-gradient(135deg,hsl(var(--brand-purple-700))_0%,hsl(var(--brand-gold-600))_100%)]",
    label: "text-[hsl(var(--brand-gold-600))]",
    check: "text-[hsl(var(--brand-gold-600))]",
    link: "text-[hsl(var(--brand-purple-700))]",
  },
  purple: {
    haloBorder: "border-[hsl(var(--brand-purple-500)/0.24)]",
    iconWrap: "bg-[linear-gradient(135deg,hsl(var(--brand-purple-700))_0%,hsl(var(--brand-cyan-500))_100%)]",
    label: "text-[hsl(var(--brand-purple-700))]",
    check: "text-[hsl(var(--brand-purple-700))]",
    link: "text-[hsl(var(--brand-purple-700))]",
  },
} as const;

const ServicesSection = () => {
  const { t } = useTranslation();
  const blocks = t("home.services.blocks", {
    returnObjects: true,
    defaultValue: defaultBlocks,
  }) as Array<{
    id: string;
    label: string;
    title: string;
    desc: string;
    features: string[];
    accent: "gold" | "purple";
  }>;
  return (
    <section id="services" className="py-10 lg:py-32 relative overflow-hidden theme-section-soft">
      <div className="glow-orb glow-orb-purple w-[400px] h-[400px] top-10 -left-40 opacity-8" />
      <div className="glow-orb glow-orb-gold w-[380px] h-[380px] bottom-10 -right-40 opacity-8" />
      <div className="absolute inset-0 theme-grid-overlay-light opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full theme-card-light text-[hsl(var(--brand-purple-700))] text-xs font-semibold tracking-wider uppercase mb-5">
            <Globe2 className="w-3.5 h-3.5" /> {t("home.services.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-on-light mb-5">
            {t("home.services.titlePrefix")} <span className="gradient-text italic">{t("home.services.titleHighlight")}</span>
          </h2>
          <p className="text-on-light-muted text-base sm:text-lg leading-relaxed">
            {t("home.services.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {blocks.map((block, i) => {
            const Icon = block.id === "language" ? Languages : Building2;
            const accent = accentStyles[block.accent];
            return (
              <motion.div
                key={block.id}
                id={block.id === "language" ? "language" : undefined}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="group relative p-8 lg:p-10 rounded-3xl theme-card-light card-shine overflow-hidden border border-[hsl(var(--border-light))]"
              >
                <div className={`absolute -top-20 -right-20 w-60 h-60 rounded-full border-[20px] ${accent.haloBorder}`} />

                <motion.div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${accent.iconWrap} shadow-gold-md`}
                  whileHover={{ rotate: 8, scale: 1.08 }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </motion.div>

                <p className={`text-xs uppercase tracking-[0.2em] font-semibold mb-3 ${accent.label}`}>
                  {block.label}
                </p>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-on-light mb-4">{block.title}</h3>
                <p className="text-on-light-muted leading-relaxed mb-6">{block.desc}</p>

                <ul className="space-y-3 mb-8">
                  {block.features.map((f, fi) => (
                    <motion.li
                      key={f}
                      className="flex items-start gap-3 text-sm text-on-light-secondary"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + fi * 0.08 + 0.3 }}
                    >
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${accent.check}`} />
                      <span>{f}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.a
                  href="#contact"
                  whileHover={{ x: 5 }}
                  className={`inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase ${accent.link} group/link`}
                >
                  {t("home.services.learnMore")}
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </motion.a>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="inline-block text-sm sm:text-base text-on-light-secondary italic font-serif">
            <span className="text-primary not-italic font-semibold">→</span> {t("home.services.footerPrefix")} <span className="gradient-text font-semibold not-italic">{t("home.services.footerHighlight")}</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
