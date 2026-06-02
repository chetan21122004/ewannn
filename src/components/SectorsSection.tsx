import { motion } from "framer-motion";
import { Car, Pill, Plane, Factory, Cpu, Calendar, Wheat, Scale, GraduationCap, Film } from "lucide-react";
import { useTranslation } from "react-i18next";

const defaultSectors = [
  { name: "Automotive", code: "01", icon: Car, accent: "gold" },
  { name: "Pharmaceuticals", code: "02", icon: Pill, accent: "cyan" },
  { name: "Aerospace", code: "03", icon: Plane, accent: "gold" },
  { name: "Manufacturing", code: "04", icon: Factory, accent: "cyan" },
  { name: "Technology", code: "05", icon: Cpu, accent: "gold" },
  { name: "Exhibitions & Trade Fairs", code: "06", icon: Calendar, accent: "cyan" },
  { name: "Agriculture & Food", code: "07", icon: Wheat, accent: "gold" },
  { name: "Legal & Compliance", code: "08", icon: Scale, accent: "cyan" },
  { name: "Education", code: "09", icon: GraduationCap, accent: "gold" },
  { name: "Media & OTT", code: "10", icon: Film, accent: "cyan" },
] as const;

const accentColorMap = {
  gold: {
    solid: "hsl(var(--brand-purple-700))",
    softBorder: "hsl(var(--brand-purple-700) / 0.3)",
    badge: "hsl(var(--brand-purple-700) / 0.42)",
    iconBg: "hsl(var(--brand-purple-700) / 0.08)",
    iconBorder: "hsl(var(--brand-purple-700) / 0.18)",
  },
  cyan: {
    solid: "hsl(var(--brand-cyan-500))",
    softBorder: "hsl(var(--brand-cyan-500) / 0.28)",
    badge: "hsl(var(--brand-cyan-500) / 0.4)",
    iconBg: "hsl(var(--brand-cyan-500) / 0.08)",
    iconBorder: "hsl(var(--brand-cyan-500) / 0.18)",
  },
} as const;

const SectorsSection = () => {
  const { t } = useTranslation();
  const sectorIcons = [Car, Pill, Plane, Factory, Cpu, Calendar, Wheat, Scale, GraduationCap, Film] as const;
  const sectorsRaw = t("home.sectors.items", { returnObjects: true, defaultValue: defaultSectors }) as Array<{
    name?: string;
    code?: string;
    accent?: "gold" | "cyan";
  }>;
  const sectors = (Array.isArray(sectorsRaw) ? sectorsRaw : defaultSectors).map((sector, index) => {
    const fallback = defaultSectors[index] ?? defaultSectors[0];
    return {
      name: typeof sector?.name === "string" ? sector.name : fallback.name,
      code: typeof sector?.code === "string" ? sector.code : fallback.code,
      accent: sector?.accent === "cyan" || sector?.accent === "gold" ? sector.accent : fallback.accent,
      icon: sectorIcons[index] ?? fallback.icon,
    };
  });

  return (
    <section id="sectors" className="relative overflow-hidden py-6 lg:py-10 theme-section-soft">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[hsl(var(--brand-purple-700)/0.5)]" aria-hidden />
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.45em] text-[hsl(var(--brand-purple-700)/0.78)]">
              {t("home.sectors.badge")}
            </span>
            <span className="h-px w-8 bg-[hsl(var(--brand-purple-700)/0.5)]" aria-hidden />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-on-light leading-[1.08]">
            {t("home.sectors.titlePrefix")}{" "}
            <span className="bg-gradient-to-r from-[hsl(var(--brand-purple-700))] via-[hsl(var(--brand-purple-500))] to-[hsl(var(--brand-cyan-500))] bg-clip-text text-transparent italic">
              {t("home.sectors.titleHighlight")}
              <br className="hidden sm:block" /> {t("home.sectors.titleHighlightLine2")}
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-4">
          {sectors.map((sector, i) => {
            const Icon = sector.icon;
            const accent = accentColorMap[sector.accent];

            return (
              <motion.div
                key={sector.name}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl p-5 text-center cursor-default select-none border border-transparent hover:border-[hsl(var(--brand-purple-700)/0.15)] transition-colors"
              >
                <span
                  className="absolute top-2.5 left-2.5 w-3.5 h-3.5 transition-colors duration-300"
                  style={{ borderTop: `1.5px solid ${accent.softBorder}`, borderLeft: `1.5px solid ${accent.softBorder}` }}
                  aria-hidden
                />
                <span
                  className="absolute top-2.5 right-2.5 w-3.5 h-3.5 transition-colors duration-300"
                  style={{ borderTop: `1.5px solid ${accent.softBorder}`, borderRight: `1.5px solid ${accent.softBorder}` }}
                  aria-hidden
                />
                <span
                  className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 transition-colors duration-300"
                  style={{ borderBottom: `1.5px solid ${accent.softBorder}`, borderLeft: `1.5px solid ${accent.softBorder}` }}
                  aria-hidden
                />
                <span
                  className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 transition-colors duration-300"
                  style={{ borderBottom: `1.5px solid ${accent.softBorder}`, borderRight: `1.5px solid ${accent.softBorder}` }}
                  aria-hidden
                />

                <span
                  className="absolute top-3.5 left-4 font-mono text-[9px] font-bold tracking-widest transition-colors duration-300"
                  style={{ color: accent.badge }}
                >
                  {sector.code}
                </span>

                <div
                  className="relative mx-auto mb-3 mt-3 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300"
                  style={{ background: accent.iconBg, border: `1px solid ${accent.iconBorder}` }}
                >
                  <Icon className="h-5 w-5 transition-colors duration-300" style={{ color: accent.solid }} />
                </div>

                <p className="relative z-10 text-xs sm:text-sm font-semibold leading-snug text-on-light-secondary group-hover:text-[hsl(var(--text-on-light))] transition-colors duration-300">
                  {sector.name}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
