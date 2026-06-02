import { motion } from "framer-motion";
import { Building2, Languages, ArrowRight, CheckCircle2, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const defaultBlocks = [
  {
    id: "market-entry",
    label: "Market Entry & Operations",
    desc: "We manage the full complexity of entering a new market - regulatory navigation, entity formation, executive liaison and on-ground operations. For companies moving between India and Asia, we are the partner already in the room.",
    features: [] as string[],
    accent: "gold" as const,
    href: "/market-entry",
  },
  {
    id: "language",
    label: "Language & Localization",
    desc: "125+ languages. ISO 9001:2015 certified. Native expertise. From simultaneous interpretation in Fortune 500 boardrooms to certified document translation and website localization - every word is accountable.",
    features: [] as string[],
    accent: "purple" as const,
    href: "/language-localization",
  },
];

const accentStyles = {
  gold: {
    haloBorder: "border-[hsl(var(--brand-gold-500)/0.2)]",
    iconWrap: "bg-[linear-gradient(135deg,hsl(var(--brand-purple-700))_0%,hsl(var(--brand-gold-600))_100%)]",
    check: "text-[hsl(var(--brand-gold-600))]",
    link: "text-[hsl(var(--brand-purple-700))]",
  },
  purple: {
    haloBorder: "border-[hsl(var(--brand-purple-500)/0.24)]",
    iconWrap: "bg-[linear-gradient(135deg,hsl(var(--brand-purple-700))_0%,hsl(var(--brand-cyan-500))_100%)]",
    check: "text-[hsl(var(--brand-purple-700))]",
    link: "text-[hsl(var(--brand-purple-700))]",
  },
} as const;

const ServicesSection = () => {
  const { t } = useTranslation();
  const blocksRaw = t("home.services.blocks", {
    returnObjects: true,
    defaultValue: defaultBlocks,
  }) as Array<{
    id: string;
    label: string;
    desc: string;
    features: string[];
    accent: "gold" | "purple";
    href?: string;
  }>;
  const blocks = (Array.isArray(blocksRaw) ? blocksRaw : defaultBlocks).map((block, index) => ({
    ...defaultBlocks[index],
    ...block,
    href: block.href ?? defaultBlocks[index]?.href ?? "/market-entry",
  }));

  return (
    <section id="services" className="relative overflow-hidden py-8 lg:py-16 theme-section-soft">
      <div className="glow-orb glow-orb-purple w-[400px] h-[400px] top-10 -left-40 opacity-8" />
      <div className="glow-orb glow-orb-gold w-[380px] h-[380px] bottom-10 -right-40 opacity-8" />
      <div className="absolute inset-0 theme-grid-overlay-light opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full theme-card-light text-[hsl(var(--brand-purple-700))] text-xs font-semibold tracking-wider uppercase mb-4">
            <Globe2 className="w-3.5 h-3.5" /> {t("home.services.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-on-light">
            {t("home.services.titlePrefix")} <span className="gradient-text italic">{t("home.services.titleHighlight")}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {blocks.map((block, i) => {
            const Icon = block.id === "language" ? Languages : Building2;
            const accent = accentStyles[block.accent];
            const features = Array.isArray(block.features) ? block.features : [];
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

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-on-light mb-4">{block.label}</h3>
                <p className="text-on-light-muted leading-relaxed mb-6">{block.desc}</p>

                {features.length > 0 ? (
                  <ul className="space-y-3 mb-8">
                    {features.map((f, fi) => (
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
                ) : (
                  <div className="mb-8" />
                )}

                <Link
                  to={block.href}
                  className={`inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase ${accent.link} group/link`}
                >
                  {t("home.services.learnMore")}
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
