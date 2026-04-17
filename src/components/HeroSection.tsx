import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden section-dark"
    >
      {/* Subtle radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, hsl(0 0% 12%) 0%, hsl(0 0% 4%) 70%)",
        }}
      />

      {/* Faint gold accent corner */}
      <div
        className="absolute top-0 right-0 w-[40%] h-[60%] pointer-events-none opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle at top right, hsl(44 65% 52%), transparent 60%)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0 0% 100% / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      <div className="container mx-auto relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            <motion.div variants={item} className="eyebrow mb-8 text-gold">
              <span style={{ color: "hsl(var(--gold))" }}>Cross-Border Consulting</span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl lg:text-7xl font-serif font-semibold leading-[1.05] mb-8 text-on-dark tracking-tight"
            >
              Where global ambition
              <br />
              meets <span className="italic" style={{ color: "hsl(var(--gold))" }}>local mastery.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg text-on-dark-muted leading-relaxed max-w-xl mb-12"
            >
              EWAN partners with enterprise leaders on market entry, language and
              localization across the world's most complex markets — with the discretion
              of a trusted advisor.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap items-center gap-5">
              <a href="#contact" className="btn-gold">
                <Calendar className="w-4 h-4" />
                Ask Soham — 15 Min Free
              </a>
              <a href="#services" className="btn-outline-light">
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              variants={item}
              className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center gap-x-10 gap-y-3"
            >
              <span className="text-[11px] tracking-[0.2em] uppercase text-white/40 font-semibold">
                Trusted by
              </span>
              {["AUDI", "PFIZER", "NOMURA", "TOYOTA", "RAKUTEN"].map((n) => (
                <span
                  key={n}
                  className="text-sm font-semibold tracking-[0.18em] text-white/55 hover:text-gold transition-colors duration-500 cursor-default"
                >
                  {n}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-sm border border-gold/30" />
              <div className="relative overflow-hidden rounded-sm">
                <img
                  src="/hero-bg-new.png"
                  alt="EWAN — global cross-border consulting"
                  className="w-full h-[420px] lg:h-[540px] object-cover grayscale-[0.15] contrast-105"
                  width={800}
                  height={540}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>

              {/* Floating stat */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-background text-foreground p-5 rounded-sm shadow-soft-lg max-w-[240px] border border-border"
              >
                <div className="text-[10px] tracking-[0.2em] uppercase text-gold font-bold mb-1.5">
                  Global Reach
                </div>
                <div className="text-2xl font-serif font-bold leading-tight">
                  125+ Languages
                </div>
                <div className="text-xs text-body mt-1">
                  836+ specialist linguists
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <span className="text-[10px] text-white/30 tracking-[0.3em] uppercase font-semibold">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
