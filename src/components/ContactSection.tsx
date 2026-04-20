import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MessageCircle, Languages } from "lucide-react";

const regions = ["India", "Southeast Asia", "East Asia", "Latin America", "Africa"];

const contactPillars = [
  "Market Entry & Operations",
  "Language & Localization",
  "Boardroom Interpretation",
  "Cross-Border Compliance",
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-14 lg:py-28 relative overflow-hidden theme-section-dark">
      <div className="glow-orb glow-orb-purple w-[520px] h-[520px] -top-48 left-[8%] opacity-10" />
      <div className="glow-orb glow-orb-gold w-[340px] h-[340px] -bottom-32 right-[12%] opacity-6" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 18% 20%, hsl(var(--brand-purple-500) / 0.09) 0%, transparent 34%),
            radial-gradient(circle at 82% 70%, hsl(var(--brand-cyan-500) / 0.05) 0%, transparent 36%),
            radial-gradient(circle at 50% 52%, hsl(var(--surface-glass) / 0.12) 0%, transparent 55%)
          `,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.15fr_0.85fr] items-start">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <motion.span
                className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--surface-glass)/0.2)] bg-[hsl(var(--surface-glass)/0.05)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-[hsl(var(--brand-purple-500)/0.86)]"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Sparkles className="h-3.5 w-3.5" />
                Let&apos;s Begin
              </motion.span>

              <motion.h2
                className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-[1.06]"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                Build Across Borders{" "}
                <span className="bg-gradient-to-r from-[hsl(var(--brand-purple-500))] via-[hsl(var(--surface-glass))] to-[hsl(var(--brand-purple-500)/0.85)] bg-clip-text text-transparent italic">
                  With Clarity.
                </span>
              </motion.h2>

              <motion.p
                className="max-w-2xl text-base sm:text-lg leading-relaxed text-foreground/78"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Whether you are entering India, scaling globally, or solving multilingual execution challenges, Ewan gives you one integrated partner for language and operations.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap gap-2.5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {regions.map((region) => (
                <span
                  key={region}
                  className="rounded-full border border-[hsl(var(--surface-glass)/0.2)] bg-[hsl(var(--surface-glass)/0.04)] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-foreground/72"
                >
                  {region}
                </span>
              ))}
            </motion.div>

            <motion.div
              className="grid gap-3 sm:grid-cols-2"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {contactPillars.map((pillar) => (
                <div
                  key={pillar}
                  className="rounded-xl border border-[hsl(var(--surface-glass)/0.14)] bg-[hsl(var(--surface-glass)/0.04)] px-4 py-3 text-sm font-medium text-foreground/82"
                >
                  {pillar}
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="rounded-3xl border border-[hsl(var(--surface-glass)/0.18)] bg-[hsl(var(--surface-glass)/0.045)] p-6 sm:p-7 backdrop-blur-md"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h3 className="text-2xl font-serif font-bold text-foreground mb-2">Start the Conversation</h3>
            <p className="text-sm sm:text-base text-foreground/72 mb-6">
              Choose your preferred starting point. We will respond quickly with a tailored next step.
            </p>

            <div className="space-y-3">
              <motion.a
                href="mailto:hello@ewan.com?subject=Market Entry"
                whileHover={{ scale: 1.02, boxShadow: "0 0 24px hsl(var(--brand-purple-500) / 0.2)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-between gap-3 rounded-xl bg-gradient-to-r from-[hsl(var(--brand-purple-700))] to-[hsl(var(--brand-purple-500))] px-5 py-4 text-white font-semibold text-sm uppercase tracking-[0.08em] border border-[hsl(var(--brand-purple-500)/0.3)]"
              >
                <span className="inline-flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Start Market Entry
                </span>
                <ArrowRight className="h-4 w-4" />
              </motion.a>

              <motion.a
                href="mailto:hello@ewan.com?subject=Language Quote"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-between gap-3 rounded-xl border border-[hsl(var(--surface-glass)/0.22)] bg-[hsl(var(--surface-glass)/0.03)] px-5 py-4 text-foreground/92 font-semibold text-sm uppercase tracking-[0.08em] hover:bg-[hsl(var(--surface-glass)/0.08)] transition-colors"
              >
                <span className="inline-flex items-center gap-2">
                  <Languages className="h-4 w-4" />
                  Get Language Quote
                </span>
                <ArrowRight className="h-4 w-4" />
              </motion.a>

              <motion.a
                href="mailto:soham@ewan.com?subject=15 Min Free Call"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-between gap-3 rounded-xl border border-[hsl(var(--brand-purple-500)/0.35)] bg-[hsl(var(--brand-purple-500)/0.09)] px-5 py-4 text-[hsl(var(--brand-purple-500))] font-semibold text-sm uppercase tracking-[0.08em] hover:bg-[hsl(var(--brand-purple-500)/0.14)] transition-colors"
              >
                <span className="inline-flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  Ask Soham (15 min)
                </span>
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </div>

            <motion.div
              className="mt-6 pt-5 border-t border-[hsl(var(--surface-glass)/0.14)]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
            >
              <p className="text-[11px] uppercase tracking-[0.24em] text-foreground/55">
                India · Southeast Asia · East Asia · Latin America · Africa
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
