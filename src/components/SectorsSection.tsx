import { motion } from "framer-motion";
import { Car, Pill, Plane, Factory, Cpu, Calendar, Wheat, Scale, GraduationCap, Film } from "lucide-react";

const sectors = [
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

const footerStats = [
  { value: "10+",    label: "Sectors Covered" },
  { value: "15+",    label: "Countries" },
  { value: "125+",   label: "Languages" },
  { value: "60K+",   label: "Hours Delivered" },
];

const SectorsSection = () => (
  <section id="sectors" className="py-10 relative overflow-hidden section-navy-purple">

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
            stroke="hsl(70 100% 50%)"
            strokeWidth="0.8"
            strokeDasharray={r < 300 ? "4 9" : "2 7"}
          />
        ))}
        {/* Cross hairs */}
        <line x1="450" y1="0" x2="450" y2="900" stroke="hsl(70 100% 50%)" strokeWidth="0.5" />
        <line x1="0" y1="450" x2="900" y2="450" stroke="hsl(70 100% 50%)" strokeWidth="0.5" />
      </svg>
    </div>

    {/* ── Horizontal scan line ────────────────────────────── */}
    <motion.div
      className="pointer-events-none absolute left-0 right-0 h-px"
      style={{ background: "linear-gradient(to right, transparent, hsl(70 100% 50% / 0.35), transparent)" }}
      animate={{ top: ["0%", "100%"] }}
      transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
      aria-hidden
    />

    {/* ── Ambient glow orbs ───────────────────────────────── */}
    <div className="glow-orb glow-orb-purple w-[700px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25 pointer-events-none" />
    <div className="glow-orb glow-orb-gold w-[320px] h-[320px] -top-20 -right-20 opacity-15 pointer-events-none" />
    <div className="absolute inset-0 dots-pattern-purple opacity-20 pointer-events-none" />

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
          <span className="h-px w-8 bg-primary/60" aria-hidden />
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.45em] text-primary/70">
            Industries · 10 Active Sectors
          </span>
          <span className="h-px w-8 bg-primary/60" aria-hidden />
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-5 leading-[1.08]">
          Sector Expertise{" "}
          <span className="gradient-text italic">Across Every<br className="hidden sm:block" /> Major Industry</span>
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
          From boardrooms to factory floors — deep domain experience built over a decade.
        </p>
      </motion.div>

      {/* ── Sector grid ─────────────────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-4">
        {sectors.map((sector, i) => {
          const Icon = sector.icon;
          const isGold = sector.accent === "gold";

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
                style={{
                  background: isGold
                    ? "hsl(70 100% 50% / 0.06)"
                    : "hsl(199 100% 50% / 0.06)",
                }}
                aria-hidden
              />

              {/* Corner bracket: top-left */}
              <span
                className="absolute top-2.5 left-2.5 w-3.5 h-3.5 transition-colors duration-300"
                style={{
                  borderTop: `1.5px solid ${isGold ? "hsl(70 100% 50% / 0.35)" : "hsl(199 100% 50% / 0.35)"}`,
                  borderLeft: `1.5px solid ${isGold ? "hsl(70 100% 50% / 0.35)" : "hsl(199 100% 50% / 0.35)"}`,
                }}
                aria-hidden
              />
              {/* Corner bracket: top-right */}
              <span
                className="absolute top-2.5 right-2.5 w-3.5 h-3.5 transition-colors duration-300"
                style={{
                  borderTop: `1.5px solid ${isGold ? "hsl(70 100% 50% / 0.35)" : "hsl(199 100% 50% / 0.35)"}`,
                  borderRight: `1.5px solid ${isGold ? "hsl(70 100% 50% / 0.35)" : "hsl(199 100% 50% / 0.35)"}`,
                }}
                aria-hidden
              />
              {/* Corner bracket: bottom-left */}
              <span
                className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 transition-colors duration-300"
                style={{
                  borderBottom: `1.5px solid ${isGold ? "hsl(70 100% 50% / 0.35)" : "hsl(199 100% 50% / 0.35)"}`,
                  borderLeft: `1.5px solid ${isGold ? "hsl(70 100% 50% / 0.35)" : "hsl(199 100% 50% / 0.35)"}`,
                }}
                aria-hidden
              />
              {/* Corner bracket: bottom-right */}
              <span
                className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 transition-colors duration-300"
                style={{
                  borderBottom: `1.5px solid ${isGold ? "hsl(70 100% 50% / 0.35)" : "hsl(199 100% 50% / 0.35)"}`,
                  borderRight: `1.5px solid ${isGold ? "hsl(70 100% 50% / 0.35)" : "hsl(199 100% 50% / 0.35)"}`,
                }}
                aria-hidden
              />

              {/* Sector code badge */}
              <span
                className="absolute top-3.5 left-4 font-mono text-[9px] font-bold tracking-widest transition-colors duration-300"
                style={{ color: isGold ? "hsl(70 100% 50% / 0.45)" : "hsl(199 100% 50% / 0.45)" }}
              >
                {sector.code}
              </span>

              {/* Icon container */}
              <div
                className="relative mx-auto mb-4 mt-3 flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-400"
                style={{
                  background: isGold
                    ? "hsl(70 100% 50% / 0.08)"
                    : "hsl(199 100% 50% / 0.08)",
                  border: isGold
                    ? "1px solid hsl(70 100% 50% / 0.18)"
                    : "1px solid hsl(199 100% 50% / 0.18)",
                  boxShadow: isGold
                    ? "0 0 0 0 hsl(70 100% 50% / 0)"
                    : "0 0 0 0 hsl(199 100% 50% / 0)",
                }}
              >
                <Icon
                  className="h-6 w-6 transition-colors duration-300"
                  style={{ color: isGold ? "hsl(70 100% 50%)" : "hsl(199 100% 50%)" }}
                />
              </div>

              {/* Sector name */}
              <p className="relative z-10 text-xs sm:text-sm font-semibold leading-snug text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                {sector.name}
              </p>

              {/* Bottom active indicator line */}
              <span
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-10 rounded-full transition-all duration-500"
                style={{ background: isGold ? "hsl(70 100% 50%)" : "hsl(199 100% 50%)" }}
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
        className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-white/[0.06]"
        style={{ background: "rgba(255,255,255,0.04)" }}
      >
        {footerStats.map((s) => (
          <div
            key={s.value}
            className="flex flex-col items-center justify-center gap-1 px-6 py-6 text-center"
            style={{ background: "rgba(255,255,255,0.015)" }}
          >
            <span className="gradient-text font-serif text-3xl font-bold">{s.value}</span>
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-muted-foreground/70">
              {s.label}
            </span>
          </div>
        ))}
      </motion.div>
    </div>

    <style>{`
      .sector-card {
        background: rgba(22, 16, 29, 0.85);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.07);
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.35);
        transition: box-shadow 0.35s ease, border-color 0.35s ease;
      }
      .sector-card:hover {
        box-shadow: 0 8px 36px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(212, 255, 0, 0.12);
        border-color: rgba(255, 255, 255, 0.13);
      }
    `}</style>
  </section>
);

export default SectorsSection;
