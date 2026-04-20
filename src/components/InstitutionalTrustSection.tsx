import { motion } from "framer-motion";
import { Landmark, Users, Map } from "lucide-react";
import { useScrollReveal, useCountUp } from "@/hooks/useScrollReveal";

const impacts = [
  { value: 1200, suffix: "+", label: "Farmers Impacted", icon: Users },
  { value: 800, suffix: "", label: "Hectares Covered", icon: Map },
];

const impactAccent = [
  {
    icon: "text-[hsl(var(--brand-purple-700))]",
    number: "text-[hsl(var(--brand-purple-700))]",
    ring: "border-[hsl(var(--brand-purple-500)/0.26)]",
  },
  {
    icon: "text-[hsl(var(--brand-cyan-500))]",
    number: "text-[hsl(var(--brand-cyan-500))]",
    ring: "border-[hsl(var(--brand-cyan-500)/0.24)]",
  },
] as const;

const consulateLetters = [
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
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-10 lg:py-28 relative overflow-hidden theme-section-soft">
      <div className="glow-orb glow-orb-purple w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-8" />
      <div className="glow-orb glow-orb-gold w-[300px] h-[300px] -top-20 right-14 opacity-8" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 18% 24%, hsl(var(--brand-purple-500) / 0.10) 0%, transparent 34%),
            radial-gradient(circle at 82% 18%, hsl(var(--brand-cyan-500) / 0.08) 0%, transparent 32%),
            radial-gradient(circle at 50% 75%, hsl(var(--surface-glass) / 0.28) 0%, transparent 55%)
          `,
        }}
      />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[hsl(var(--brand-purple-700))] to-[hsl(var(--brand-purple-500))] mb-6 shadow-gold-md"
            >
              <Landmark className="w-9 h-9 text-white" />
            </motion.div>

            <motion.span
              className="block text-xs uppercase tracking-[0.3em] text-[hsl(var(--brand-purple-700)/0.86)] font-semibold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              CONSULATE RECOGNITION
            </motion.span>

            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-on-light mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Recognised by the{" "}
              <span className="bg-gradient-to-r from-[hsl(var(--brand-purple-700))] via-[hsl(var(--brand-purple-500))] to-[hsl(var(--brand-cyan-500))] bg-clip-text text-transparent italic">
                Consulate General of the People's Republic of China
              </span>
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg text-on-light-muted leading-relaxed max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Recognised through a formal letter of appreciation for Ewan's contribution to strengthening India-China agricultural and trade relations, with impact across 1,200 farmers and 800 hectares of farmland.
            </motion.p>
          </div>

          <div className="grid items-start gap-8 xl:grid-cols-2">
            {consulateLetters.map((letter, index) => (
              <motion.figure
                key={letter.src}
                className="overflow-hidden rounded-[28px] border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-card)/0.96)] shadow-[0_20px_56px_hsl(var(--brand-navy-950)/0.14)]"
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

          <div className="grid grid-cols-2 gap-6 max-w-xl mx-auto mt-8">
            {impacts.map((s, i) => {
              const Icon = s.icon;
              return <ImpactStat key={s.label} stat={s} index={i} isVisible={isVisible} Icon={Icon} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

function ImpactStat({ stat, index, isVisible, Icon }: any) {
  const count = useCountUp(stat.value, 2000, isVisible);
  const accent = impactAccent[index % impactAccent.length];
  return (
    <motion.div
      className="p-6 rounded-2xl theme-card-light border border-[hsl(var(--border-light))] text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      whileHover={{ y: -5, scale: 1.03 }}
    >
      <div className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl border bg-[hsl(var(--surface-light-card)/0.9)] ${accent.ring}`}>
        <Icon className={`w-6 h-6 ${accent.icon}`} />
      </div>
      <div className={`text-3xl sm:text-4xl font-serif font-bold mb-1 ${accent.number}`}>
        {count.toLocaleString()}{stat.suffix}
      </div>
      <p className="text-xs uppercase tracking-wider text-on-light-muted font-medium">{stat.label}</p>
    </motion.div>
  );
}

export default InstitutionalTrustSection;
