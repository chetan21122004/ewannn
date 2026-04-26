import { motion } from "framer-motion";
import { Car, Pill, Plane, Factory, Cpu, Calendar, Wheat, Scale, GraduationCap, Film } from "lucide-react";
import { useTranslation } from "react-i18next";

const defaultSectors = [
  { name: "Automotive",           code: "01", icon: Car,           accent: "gold" },
  { name: "Pharmaceuticals",      code: "02", icon: Pill,          accent: "cyan" },
  { name: "Aerospace",            code: "03", icon: Plane,         accent: "gold" },
  { name: "Manufacturing",        code: "04", icon: Factory,       accent: "cyan" },
  { name: "Technology",           code: "05", icon: Cpu,           accent: "gold" },
  { name: "Exhibitions & Trade",  code: "06", icon: Calendar,      accent: "cyan" },
  { name: "Agriculture & Food",   code: "07", icon: Wheat,         accent: "gold" },
  { name: "Legal & Compliance",   code: "08", icon: Scale,         accent: "cyan" },
  { name: "Education",            code: "09", icon: GraduationCap, accent: "gold" },
  { name: "Media & OTT",          code: "10", icon: Film,          accent: "cyan" },
] as const;

const defaultFooterStats = [
  { value: "10+",    label: "Sectors Covered" },
  { value: "15+",    label: "Countries" },
  { value: "125+",   label: "Languages" },
  { value: "60K+",   label: "Hours Delivered" },
];

const accentColorMap = {
  gold: {
    solid: "hsl(var(--brand-purple-700))",
    softFill: "hsl(var(--brand-purple-700) / 0.06)",
    softBorder: "hsl(var(--brand-purple-700) / 0.3)",
    badge: "hsl(var(--brand-purple-700) / 0.42)",
    iconBg: "hsl(var(--brand-purple-700) / 0.08)",
    iconBorder: "hsl(var(--brand-purple-700) / 0.18)",
  },
  cyan: {
    solid: "hsl(var(--brand-cyan-500))",
    softFill: "hsl(var(--brand-cyan-500) / 0.06)",
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
  const footerStats = t("home.sectors.footerStats", {
    returnObjects: true,
    defaultValue: defaultFooterStats,
  }) as Array<{ value: string; label: string }>;

  return (
  <section id="sectors" className="py-10 relative overflow-hidden theme-section-soft">

    {/* ── Radar ring backdrop ─────────────────────────────── */}
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <svg
        viewBox="0 0 900 900"
        fill="none"
        className="absolute w-[110%] max-w-none opacity-[0.06]"
        aria-hidden
      >
        {[140, 260, 380, 500].map((r) => (
          <circle
            key={r}
            cx="450" cy="450" r={r}
            stroke="hsl(var(--brand-purple-700))"
            strokeWidth="0.8"
            strokeDasharray={r < 300 ? "4 9" : "2 7"}
          />
        ))}
        {/* Cross hairs */}
        <line x1="450" y1="0" x2="450" y2="900" stroke="hsl(var(--brand-purple-700))" strokeWidth="0.5" />
        <line x1="0" y1="450" x2="900" y2="450" stroke="hsl(var(--brand-purple-700))" strokeWidth="0.5" />
      </svg>
    </div>

    {/* ── Horizontal scan line ────────────────────────────── */}
    <motion.div
      className="pointer-events-none absolute left-0 right-0 h-px"
      style={{ background: "linear-gradient(to right, transparent, hsl(var(--brand-purple-500) / 0.32), transparent)" }}
      animate={{ top: ["0%", "100%"] }}
      transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
      aria-hidden
    />

    {/* ── Ambient glow orbs ───────────────────────────────── */}
    <div className="glow-orb glow-orb-purple w-[700px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-8 pointer-events-none" />
    <div className="glow-orb glow-orb-gold w-[320px] h-[320px] -top-20 -right-20 opacity-8 pointer-events-none" />
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: `
          radial-gradient(circle at 20% 22%, hsl(var(--brand-purple-500) / 0.10) 0%, transparent 32%),
          radial-gradient(circle at 78% 70%, hsl(var(--brand-cyan-500) / 0.08) 0%, transparent 36%),
          radial-gradient(circle at 50% 48%, hsl(var(--surface-glass) / 0.35) 0%, transparent 55%)
        `,
      }}
    />

    <div className="container mx-auto px-6 relative z-10">

      {/* ── Section header ──────────────────────────────────── */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="inline-flex items-center gap-3 mb-7">
          <span className="h-px w-8 bg-[hsl(var(--brand-purple-700)/0.5)]" aria-hidden />
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.45em] text-[hsl(var(--brand-purple-700)/0.78)]">
            {t("home.sectors.badge")}
          </span>
          <span className="h-px w-8 bg-[hsl(var(--brand-purple-700)/0.5)]" aria-hidden />
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-on-light mb-5 leading-[1.08]">
          {t("home.sectors.titlePrefix")}{" "}
          <span className="bg-gradient-to-r from-[hsl(var(--brand-purple-700))] via-[hsl(var(--brand-purple-500))] to-[hsl(var(--brand-cyan-500))] bg-clip-text text-transparent italic">
            {t("home.sectors.titleHighlight")}<br className="hidden sm:block" /> {t("home.sectors.titleHighlightLine2")}
          </span>
        </h2>
        <p className="text-on-light-muted text-base sm:text-lg max-w-xl mx-auto">
          {t("home.sectors.subtitle")}
        </p>
      </motion.div>

      {/* ── Sector grid ─────────────────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-4">
        {sectors.map((sector, i) => {
          const Icon = sector.icon;
          const accent = accentColorMap[sector.accent];

          return (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, y: 50, scale: 0.88 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.055, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.04 }}
              className="sector-card group relative overflow-hidden rounded-2xl p-5 text-center cursor-default select-none"
            >
              {/* Hover fill */}
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: accent.softFill }}
                aria-hidden
              />

              {/* Corner bracket: top-left */}
              <span
                className="absolute top-2.5 left-2.5 w-3.5 h-3.5 transition-colors duration-300"
                style={{
                  borderTop: `1.5px solid ${accent.softBorder}`,
                  borderLeft: `1.5px solid ${accent.softBorder}`,
                }}
                aria-hidden
              />
              {/* Corner bracket: top-right */}
              <span
                className="absolute top-2.5 right-2.5 w-3.5 h-3.5 transition-colors duration-300"
                style={{
                  borderTop: `1.5px solid ${accent.softBorder}`,
                  borderRight: `1.5px solid ${accent.softBorder}`,
                }}
                aria-hidden
              />
              {/* Corner bracket: bottom-left */}
              <span
                className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 transition-colors duration-300"
                style={{
                  borderBottom: `1.5px solid ${accent.softBorder}`,
                  borderLeft: `1.5px solid ${accent.softBorder}`,
                }}
                aria-hidden
              />
              {/* Corner bracket: bottom-right */}
              <span
                className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 transition-colors duration-300"
                style={{
                  borderBottom: `1.5px solid ${accent.softBorder}`,
                  borderRight: `1.5px solid ${accent.softBorder}`,
                }}
                aria-hidden
              />

              {/* Sector code badge */}
              <span
                className="absolute top-3.5 left-4 font-mono text-[9px] font-bold tracking-widest transition-colors duration-300"
                style={{ color: accent.badge }}
              >
                {sector.code}
              </span>

              {/* Icon container */}
              <div
                className="relative mx-auto mb-4 mt-3 flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-400"
                style={{
                  background: accent.iconBg,
                  border: `1px solid ${accent.iconBorder}`,
                  boxShadow: `0 0 0 0 ${accent.solid}`,
                }}
              >
                <Icon
                  className="h-6 w-6 transition-colors duration-300"
                  style={{ color: accent.solid }}
                />
              </div>

              {/* Sector name */}
              <p className="relative z-10 text-xs sm:text-sm font-semibold leading-snug text-on-light-secondary group-hover:text-[hsl(var(--text-on-light))] transition-colors duration-300">
                {sector.name}
              </p>

              {/* Bottom active indicator line */}
              <span
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-10 rounded-full transition-all duration-500"
                style={{ background: accent.solid }}
                aria-hidden
              />
            </motion.div>
          );
        })}
      </div>

      {/* ── Footer stats bar ────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.65, duration: 0.6 }}
        className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-[hsl(var(--border-light))]"
        style={{ background: "hsl(var(--surface-light-card) / 0.72)" }}
      >
        {footerStats.map((s) => (
          <div
            key={s.value}
            className="flex flex-col items-center justify-center gap-1 px-6 py-6 text-center"
            style={{ background: "hsl(var(--surface-light-card) / 0.88)" }}
          >
            <span className="font-serif text-3xl font-bold text-[hsl(var(--brand-purple-700))]">{s.value}</span>
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-[hsl(var(--text-on-light-muted))]">
              {s.label}
            </span>
          </div>
        ))}
      </motion.div>
    </div>

    <style>{`
      .sector-card {
        background: hsl(var(--surface-light-card) / 0.92);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid hsl(var(--border-light));
        box-shadow: 0 4px 24px hsl(var(--brand-navy-950) / 0.08);
        transition: box-shadow 0.35s ease, border-color 0.35s ease;
      }
      .sector-card:hover {
        box-shadow: 0 8px 36px hsl(var(--brand-navy-950) / 0.12), 0 0 0 1px hsl(var(--brand-purple-700) / 0.12);
        border-color: hsl(var(--border-light-strong));
      }
    `}</style>
  </section>
  );
};

export default SectorsSection;
