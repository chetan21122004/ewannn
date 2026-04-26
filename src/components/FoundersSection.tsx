import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

const linkedinUrl = "https://www.linkedin.com/in/soham-kakade-77b2819b/";

const defaultFounders = [
  {
    name: "Soham Kakade",
    role: "Founder & CEO",
    img: "/Soham-Sir.jpg",
    intro: [
      "10 Years in the Room Before Building the Firm. Soham Kakade spent a decade interpreting confidential boardroom negotiations between global leaders and their Asian counterparts - accumulating over 60,000 hours of simultaneous interpretation across Mandarin, Cantonese, Japanese and ASEAN languages before founding Ewan.",
      "His foundation: a full Chinese Government scholarship at Beijing Language and Cultural University (BLCU). Since then: heads of state, Fortune 500 boardrooms, national textbooks, government export programs and geopolitical publications on the India-Asia corridor.",
      "Ewan exists because cross-border expansion deserves a partner who has actually been on both sides of the table.",
    ],
    badges: ["BLCU Scholar", "60,000+ Hours Interpretation", "ISO 9001:2015 Certified", "Vice President, CITLoB", "Bhashini Initiative, MeitY", "MSAMB Export Program Designer"],
  },
  {
    name: "Sukhada Kakade",
    role: "Co-Founder & Director",
    img: "/Sukhada-maam.jpg",
    intro: [
      "Sukhada Kakade Bhalerao is a Pune-based Certified Management Accountant (CMA), finance educator, and entrepreneur with over 15 years of experience in finance, auditing, and professional training.",
      "As Co-Founder and Director of Ewan Business Solutions and Bhashik Skill Development, she brings the financial rigour and operational backbone that underpins everything Ewan delivers - from entity formation financial setup and RBI/FEMA compliance advisory to internal controls and structured business operations.",
      "She also runs her own cost accounting practice (est. 2010) and is passionate about bridging industry and academia.",
    ],
    badges: ["CMA Certified", "15+ Years Experience", "Finance & Compliance Expert", "RBI & FEMA Advisory", "Internal Controls Specialist", "Entity Setup & Structuring", "Entrepreneur Since 2010"],
  },
];

const founderAccents = [
  {
    halo: "border-[hsl(var(--brand-purple-500)/0.16)]",
    imageBorder: "border-[hsl(var(--brand-purple-500)/0.34)]",
    role: "text-[hsl(var(--brand-purple-700))]",
    badge: "border-[hsl(var(--brand-purple-700)/0.28)] bg-[hsl(var(--brand-purple-700)/0.09)] text-[hsl(var(--brand-purple-700))]",
    link: "text-[hsl(var(--brand-purple-700))] hover:text-[hsl(var(--brand-purple-500))]",
  },
  {
    halo: "border-[hsl(var(--brand-cyan-500)/0.16)]",
    imageBorder: "border-[hsl(var(--brand-cyan-500)/0.32)]",
    role: "text-[hsl(var(--brand-cyan-500))]",
    badge: "border-[hsl(var(--brand-cyan-500)/0.26)] bg-[hsl(var(--brand-cyan-500)/0.09)] text-[hsl(var(--brand-cyan-500))]",
    link: "text-[hsl(var(--brand-cyan-500))] hover:text-[hsl(var(--brand-purple-700))]",
  },
] as const;

const FoundersSection = () => {
  const { t } = useTranslation();
  const founders = t("home.founders.items", {
    returnObjects: true,
    defaultValue: defaultFounders,
  }) as typeof defaultFounders;
  return (
    <section id="about" className="relative overflow-hidden py-20 lg:py-28 theme-section-soft">
      <div className="glow-orb glow-orb-purple w-[400px] h-[400px] top-10 -left-40 opacity-8" />
      <div className="glow-orb glow-orb-gold w-[360px] h-[360px] bottom-10 -right-40 opacity-8" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 16% 20%, hsl(var(--brand-purple-500) / 0.08) 0%, transparent 34%),
            radial-gradient(circle at 84% 74%, hsl(var(--brand-cyan-500) / 0.07) 0%, transparent 36%),
            radial-gradient(circle at 50% 52%, hsl(var(--surface-glass) / 0.26) 0%, transparent 56%)
          `,
        }}
      />

      <div className="container relative z-10 px-6 mx-auto">
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full theme-card-light text-[hsl(var(--brand-purple-700))] text-xs font-semibold tracking-wider uppercase mb-5">
            {t("home.founders.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-on-light mb-4">
            <span className="bg-gradient-to-r from-[hsl(var(--brand-purple-700))] via-[hsl(var(--brand-purple-500))] to-[hsl(var(--brand-cyan-500))] bg-clip-text text-transparent italic">
              {t("home.founders.title")}
            </span>
          </h2>
          <p className="text-on-light-muted text-base sm:text-lg">
            {t("home.founders.subtitle")}
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-7 lg:gap-8">
          {founders.map((f, i) => {
            const accent = founderAccents[i % founderAccents.length];
            const isReversed = i % 2 !== 0;
            return (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-3xl p-6 md:p-8 theme-card-light border border-[hsl(var(--border-light))]"
              >
                <div className={`relative grid items-start gap-6 lg:gap-8 ${isReversed ? "md:grid-cols-[1fr_280px]" : "md:grid-cols-[280px_1fr]"}`}>
                  <motion.div
                    className={`relative h-[320px] w-full overflow-hidden rounded-2xl border ${accent.imageBorder} shadow-gold-md md:h-[360px] ${
                      isReversed ? "md:order-2" : ""
                    }`}
                    whileHover={{ scale: 1.01 }}
                  >
                    <img src={f.img} alt={f.name} className="w-full h-full object-cover" />
                  </motion.div>
                  <div className={`space-y-5 ${isReversed ? "md:order-1" : ""}`}>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-serif font-bold text-on-light md:text-[1.7rem]">{f.name}</h3>
                      <p className={`text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] ${accent.role}`}>
                        {f.role}
                      </p>
                    </div>

                    <div className="space-y-3 text-sm leading-relaxed text-on-light-muted sm:text-base">
                      {f.intro.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2.5 pt-1">
                      {f.badges.map((badge) => (
                        <span
                          key={badge}
                          className={`rounded-full border px-3 py-1.5 text-xs sm:text-sm font-medium ${accent.badge}`}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>

                    <motion.a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className={`inline-flex items-center gap-2 pt-1 text-sm font-semibold transition-colors ${accent.link}`}
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                      {t("home.founders.linkedinCta")}
                    </motion.a>
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

export default FoundersSection;
