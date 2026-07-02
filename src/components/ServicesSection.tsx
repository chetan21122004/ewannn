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

const serviceIllustrations: Record<string, { src: string; alt: string }> = {
  "market-entry": {
    src: "/doodles/Business Plan-pana.svg",
    alt: "Market entry planning illustration",
  },
  language: {
    src: "/doodles/Group discussion-bro.svg",
    alt: "Language and localization illustration",
  },
};

const accentStyles = {
  gold: {
    haloBorder: "border-[hsl(var(--brand-gold-500)/0.14)]",
    iconWrap: "bg-[linear-gradient(135deg,hsl(var(--brand-purple-700))_0%,hsl(var(--brand-gold-600))_100%)]",
    check: "text-[hsl(var(--brand-gold-600))]",
    link: "text-[hsl(var(--brand-purple-700))]",
  },
  purple: {
    haloBorder: "border-[hsl(var(--brand-purple-500)/0.16)]",
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
    <section id="services" className="relative overflow-hidden py-5 theme-section-soft lg:py-10">
      <div className="glow-orb glow-orb-purple -left-32 top-6 h-[260px] w-[260px] opacity-8 lg:-left-40 lg:top-10 lg:h-[400px] lg:w-[400px]" />
      <div className="glow-orb glow-orb-gold -bottom-16 -right-32 h-[240px] w-[240px] opacity-8 lg:-right-40 lg:bottom-10 lg:h-[380px] lg:w-[380px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.14] theme-grid-overlay-light lg:opacity-20" />

      <div className="container relative z-10 mx-auto px-5 sm:px-6">
        <motion.div
          className="mx-auto mb-6 max-w-3xl text-center lg:mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="mb-3 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider theme-card-light text-[hsl(var(--brand-purple-700))] lg:mb-4">
            <Globe2 className="h-3.5 w-3.5" aria-hidden /> {t("home.services.badge")}
          </span>
          <h2 className="font-serif text-[1.65rem] font-bold leading-tight text-on-light sm:text-4xl lg:text-5xl">
            {t("home.services.titlePrefix")}{" "}
            <span className="italic text-[hsl(var(--brand-purple-700))]">{t("home.services.titleHighlight")}</span>
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-6xl items-stretch gap-4 md:gap-6 lg:grid-cols-2 lg:gap-7">
          {blocks.map((block, i) => {
            const Icon = block.id === "language" ? Languages : Building2;
            const accent = accentStyles[block.accent];
            const features = Array.isArray(block.features) ? block.features : [];
            const illustration = serviceIllustrations[block.id];
            return (
              <motion.div
                key={block.id}
                id={block.id === "language" ? "language" : undefined}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="group relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] p-5 theme-card-light card-shine sm:rounded-3xl sm:p-7 lg:p-8"
              >
                <div className={`pointer-events-none absolute -right-14 -top-14 hidden h-40 w-40 rounded-full border-[14px] sm:block ${accent.haloBorder}`} />

                <div className="relative z-10 flex h-full min-w-0 flex-col">
                  <div className="mb-4 flex items-start gap-3 sm:mb-5 sm:gap-4">
                    <motion.div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl sm:h-12 sm:w-12 sm:rounded-2xl ${accent.iconWrap} shadow-gold-md`}
                      whileHover={{ rotate: 6, scale: 1.05 }}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </motion.div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-serif text-lg font-bold leading-snug text-on-light sm:text-2xl lg:text-[1.65rem]">
                        {block.label}
                      </h3>
                    </div>
                  </div>

                  {illustration ? (
                    <motion.figure
                      className="mb-4 shrink-0 lg:hidden"
                      initial={{ opacity: 0, scale: 0.94 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12 + 0.15, duration: 0.55 }}
                    >
                      <motion.img
                        src={illustration.src}
                        alt={illustration.alt}
                        className="mx-auto h-28 w-full max-w-[180px] object-contain"
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          duration: 5.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.35,
                        }}
                      />
                    </motion.figure>
                  ) : null}

                  <div className="flex flex-1 flex-col gap-5 sm:flex-row sm:items-center sm:gap-6 lg:gap-8">
                    <div className="flex min-w-0 flex-1 flex-col">
                      <p className="text-sm leading-relaxed text-on-light-muted sm:text-[0.95rem]">{block.desc}</p>

                      {features.length > 0 ? (
                        <ul className="mt-4 space-y-2.5 sm:mt-5">
                          {features.map((f, fi) => (
                            <motion.li
                              key={f}
                              className="flex items-start gap-3 text-sm text-on-light-secondary"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.12 + fi * 0.08 + 0.25 }}
                            >
                              <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${accent.check}`} />
                              <span>{f}</span>
                            </motion.li>
                          ))}
                        </ul>
                      ) : null}

                      <Link
                        to={block.href}
                        className={`mt-auto inline-flex min-h-11 items-center gap-2 pt-4 text-sm font-semibold uppercase tracking-wider sm:pt-5 ${accent.link} group/link max-lg:w-full max-lg:justify-center max-lg:rounded-full max-lg:border max-lg:border-[hsl(var(--border-light))] max-lg:bg-[hsl(var(--surface-light-50))] max-lg:px-4 lg:w-auto lg:justify-start lg:rounded-none lg:border-0 lg:bg-transparent lg:px-0`}
                      >
                        {t("home.services.learnMore")}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>

                    {illustration ? (
                      <motion.figure
                        className="mx-auto hidden shrink-0 sm:mx-0 sm:block sm:w-[42%] lg:w-[38%]"
                        initial={{ opacity: 0, scale: 0.94 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.12 + 0.15, duration: 0.55 }}
                      >
                        <motion.img
                          src={illustration.src}
                          alt={illustration.alt}
                          className="mx-auto h-36 w-full max-w-[220px] object-contain sm:h-40 sm:max-w-none lg:h-44"
                          animate={{ y: [0, -6, 0] }}
                          transition={{
                            duration: 5.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.35,
                          }}
                          whileHover={{ scale: 1.04 }}
                        />
                      </motion.figure>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
