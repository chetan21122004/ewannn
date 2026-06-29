import { motion } from "framer-motion";
import { Layers, Award, Landmark } from "lucide-react";
import { useTranslation } from "react-i18next";

const defaultDifferentiators = [
  {
    title: "Language Meets Operations",
    desc: "We are the only partner in India who combines 125+ language capability with full-cycle market entry management. Language isn't a support function here - it is the core of how we operate.",
  },
  {
    title: "Corridors Not Classrooms",
    desc: "Our expertise comes from 60,000+ hours of real boardroom interpretation - in Mandarin, Japanese, Cantonese, and ASEAN languages. We didn't study these corridors. We built careers inside them.",
  },
  {
    title: "Recognised by Governments and Institutions",
    desc: "Formally recognised by the Consulate General of the People's Republic of China. Export program designers for the Government of Maharashtra (MSAMB). Faculty at Symbiosis. IB Board curriculum designers. Our institutional credentials are not decorative - they are evidence of the depth of trust we have built across borders.",
  },
];

const accentStyles = [
  {
    number: "text-[hsl(var(--brand-purple-700)/0.28)]",
    iconWrap: "bg-[linear-gradient(135deg,hsl(var(--brand-purple-700))_0%,hsl(var(--brand-purple-500))_100%)]",
    iconColor: "text-white",
    halo: "border-[hsl(var(--brand-purple-500)/0.16)] group-hover:border-[hsl(var(--brand-purple-500)/0.3)]",
  },
  {
    number: "text-[hsl(var(--brand-cyan-500)/0.28)]",
    iconWrap: "bg-[linear-gradient(135deg,hsl(var(--brand-purple-700))_0%,hsl(var(--brand-cyan-500))_100%)]",
    iconColor: "text-white",
    halo: "border-[hsl(var(--brand-cyan-500)/0.16)] group-hover:border-[hsl(var(--brand-cyan-500)/0.3)]",
  },
  {
    number: "text-[hsl(var(--brand-gold-600)/0.3)]",
    iconWrap: "bg-[linear-gradient(135deg,hsl(var(--brand-purple-700))_0%,hsl(var(--brand-gold-600))_100%)]",
    iconColor: "text-white",
    halo: "border-[hsl(var(--brand-gold-600)/0.16)] group-hover:border-[hsl(var(--brand-gold-600)/0.3)]",
  },
] as const;

const WhyEwanSection = () => {
  const { t } = useTranslation();
  const differentiators = t("home.whyEwan.differentiators", {
    returnObjects: true,
    defaultValue: defaultDifferentiators,
  }) as Array<{ title: string; desc: string }>;
  const differentiatorIcons = [Layers, Award, Landmark] as const;
  return (
    <section id="why-ewan" className="relative overflow-hidden py-6 theme-section-soft lg:py-16">
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-[0.1] mix-blend-multiply lg:opacity-15"
        style={{ backgroundImage: "url('/bg-blobs/abstract-purple-fluid-wave-background-free-vector.jpg')" }}
      />
      <div className="glow-orb glow-orb-purple -right-8 top-10 h-[240px] w-[240px] opacity-8 lg:right-10 lg:h-[360px] lg:w-[360px]" />
      <div className="glow-orb glow-orb-gold -bottom-12 left-4 h-[200px] w-[200px] opacity-8 lg:-bottom-16 lg:left-10 lg:h-[300px] lg:w-[300px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] theme-grid-overlay-light lg:opacity-[0.18]" />

      <div className="container relative z-10 mx-auto px-5 sm:px-6">
        <div className="mb-8 grid items-center gap-6 lg:mb-14 lg:grid-cols-[minmax(0,1fr)_minmax(220px,300px)] lg:gap-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider theme-card-light text-[hsl(var(--brand-purple-700))] lg:mb-5">
              {t("home.whyEwan.badge")}
            </span>
            <h2 className="mb-4 font-serif text-[1.65rem] font-bold leading-tight text-on-light sm:text-4xl lg:mb-5 lg:text-5xl">
              {t("home.whyEwan.titlePrefix")}{" "}
              <span className="block italic text-[hsl(var(--brand-purple-700))] sm:inline">
                {t("home.whyEwan.titleHighlight")}
              </span>
            </h2>
            <p className="text-sm leading-relaxed text-on-light-muted sm:text-lg">
              {t("home.whyEwan.subtitle")}
            </p>
          </motion.div>

          <motion.figure
            className="mx-auto hidden w-full max-w-[280px] lg:block lg:max-w-none lg:justify-self-end"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.12 }}
          >
            <motion.img
              src="/doodles/Advantages-bro.svg"
              alt="UVAN differentiators illustration"
              className="h-44 w-full object-contain sm:h-48 lg:h-52"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.figure>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {differentiators.map((d, i) => {
            const Icon = differentiatorIcons[i] ?? Layers;
            const accent = accentStyles[i % accentStyles.length];
            return (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] p-5 theme-card-light card-shine sm:rounded-3xl sm:p-8"
              >
                <div className={`absolute -right-16 -top-16 hidden h-48 w-48 rounded-full border-[15px] transition-colors duration-500 sm:block ${accent.halo}`} />

                <div className="relative">
                  <div className="mb-4 flex items-center gap-3 sm:mb-5">
                    <span className={`font-serif text-3xl font-bold sm:text-5xl ${accent.number}`}>0{i + 1}</span>
                    <motion.div
                      className={`ml-auto flex h-10 w-10 items-center justify-center rounded-xl shadow-gold-sm sm:h-12 sm:w-12 ${accent.iconWrap}`}
                      whileHover={{ rotate: 12, scale: 1.1 }}
                    >
                      <Icon className={`h-4 w-4 sm:h-5 sm:w-5 ${accent.iconColor}`} />
                    </motion.div>
                  </div>
                  <h3 className="mb-2 font-serif text-lg font-bold text-on-light sm:mb-3 sm:text-xl">{d.title}</h3>
                  <p className="text-sm leading-relaxed text-on-light-muted">{d.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyEwanSection;
