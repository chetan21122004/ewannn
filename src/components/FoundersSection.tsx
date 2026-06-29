import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

const linkedinUrl = "https://www.linkedin.com/in/soham-kakade-77b2819b/";

type FounderItem = {
  name: string;
  role: string;
  img: string;
  intro: string[];
  badges: string[];
  linkedinUrl?: string;
  linkedinCta?: string;
};

const defaultFounders: FounderItem[] = [
  {
    name: "Soham Kakade",
    role: "Founder & CEO",
    img: "/Soham-Sir.jpg",
    linkedinUrl,
    linkedinCta: "Connect with Soham on LinkedIn →",
    intro: [
      "10 Years in the Room Before Building the Firm. Soham Kakade spent a decade interpreting confidential boardroom negotiations between global leaders and their Asian counterparts - accumulating over 60,000 hours of simultaneous interpretation across Mandarin, Cantonese, Japanese and ASEAN languages before founding UVAN.",
      "His foundation: a full Chinese Government scholarship at Beijing Language and Cultural University (BLCU). Since then: heads of state, Fortune 500 boardrooms, national textbooks, government export programs and geopolitical publications on the India-Asia corridor.",
      "UVAN exists because cross-border expansion deserves a partner who has actually been on both sides of the table.",
    ],
    badges: [
      "BLCU Scholarship Recipient",
      "60,000+ Hours Interpretation",
      "ISO 9001:2015 Certified",
      "Vice President, CITLoB",
      "Bhashini Initiative, MeitY",
      "MSAMB Export Program Designer",
    ],
  },
  {
    name: "CMA Sukhada Kakade Bhalerao",
    role: "Co-Founder & Director",
    img: "/Sukhada-maam.jpg",
    intro: [
      "Sukhada Kakade Bhalerao is a Pune-based Certified Management Accountant (CMA), finance educator, and entrepreneur with over 15 years of experience in finance, auditing, and professional training.",
      "As Co-Founder and Director of UVAN and Bhashik Skill Development, she brings the financial rigour and operational backbone that underpins everything UVAN delivers - from entity formation financial setup and RBI/FEMA compliance advisory to internal controls and structured business operations.",
      "She also runs her own cost accounting practice (est. 2010) and is passionate about bridging industry and academia.",
    ],
    badges: [
      "CMA Certified",
      "15+ Years Experience",
      "Finance & Compliance Expert",
      "RBI & FEMA Advisory",
      "Internal Controls Specialist",
      "Entity Setup & Structuring",
      "Entrepreneur Since 2010",
    ],
  },
];

const founderAccents = [
  {
    halo: "border-[hsl(var(--brand-purple-500)/0.16)]",
    imageBorder: "border-[hsl(var(--brand-purple-500)/0.34)]",
    role: "text-[hsl(var(--brand-purple-700))]",
    badge: "border-[hsl(var(--brand-purple-700)/0.28)] bg-[hsl(var(--brand-purple-700)/0.09)] text-[hsl(var(--brand-purple-700))]",
    link: "text-[hsl(var(--brand-purple-700))] hover:text-[hsl(var(--brand-purple-500))]",
    stackRing: "ring-[hsl(var(--brand-purple-500)/0.12)]",
  },
  {
    halo: "border-[hsl(var(--brand-cyan-500)/0.16)]",
    imageBorder: "border-[hsl(var(--brand-cyan-500)/0.32)]",
    role: "text-[hsl(var(--brand-cyan-500))]",
    badge: "border-[hsl(var(--brand-cyan-500)/0.26)] bg-[hsl(var(--brand-cyan-500)/0.09)] text-[hsl(var(--brand-cyan-500))]",
    link: "text-[hsl(var(--brand-cyan-500))] hover:text-[hsl(var(--brand-purple-700))]",
    stackRing: "ring-[hsl(var(--brand-cyan-500)/0.12)]",
  },
] as const;

type FounderCardProps = {
  founder: FounderItem;
  accent: (typeof founderAccents)[number];
  linkedinFallback: string;
  isReversed?: boolean;
  stackIndex?: number;
  stackTotal?: number;
  className?: string;
};

const FounderCard = ({
  founder,
  accent,
  linkedinFallback,
  isReversed = false,
  stackIndex,
  stackTotal,
  className,
}: FounderCardProps) => (
  <article
    className={cn(
      "group relative overflow-hidden rounded-3xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-card)/0.98)] p-6 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.28)] backdrop-blur-sm md:p-8",
      stackIndex !== undefined && "ring-1",
      stackIndex !== undefined && accent.stackRing,
      className,
    )}
  >
    {stackIndex !== undefined && stackTotal !== undefined ? (
      <span className="absolute right-5 top-5 z-10 rounded-full border border-[hsl(var(--border-light))] bg-white/90 px-2.5 py-1 text-[10px] font-bold tabular-nums tracking-[0.14em] text-[hsl(var(--brand-navy-950)/0.45)]">
        {String(stackIndex + 1).padStart(2, "0")} / {String(stackTotal).padStart(2, "0")}
      </span>
    ) : null}

    <div
      className={cn(
        "relative grid items-start gap-6 lg:gap-8",
        isReversed ? "md:grid-cols-[1fr_280px]" : "md:grid-cols-[280px_1fr]",
        stackIndex !== undefined && "md:grid-cols-[280px_1fr]",
      )}
    >
      <div
        className={cn(
          "relative h-[280px] w-full overflow-hidden rounded-2xl border shadow-gold-md sm:h-[320px] md:h-[360px]",
          accent.imageBorder,
          isReversed && stackIndex === undefined ? "md:order-2" : "",
        )}
      >
        <img src={founder.img} alt={founder.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
      </div>

      <div className={cn("space-y-5", isReversed && stackIndex === undefined ? "md:order-1" : "")}>
        <div className="space-y-2 pr-12 lg:pr-0">
          <h3 className="font-serif text-2xl font-bold text-on-light md:text-[1.7rem]">{founder.name}</h3>
          <p className={cn("text-xs font-semibold uppercase tracking-[0.18em] sm:text-sm", accent.role)}>{founder.role}</p>
        </div>

        <div className="space-y-3 text-sm leading-relaxed text-on-light-muted sm:text-base">
          {founder.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="flex flex-wrap gap-2.5 pt-1">
          {founder.badges.map((badge) => (
            <span key={badge} className={cn("rounded-full border px-3 py-1.5 text-xs font-medium sm:text-sm", accent.badge)}>
              {badge}
            </span>
          ))}
        </div>

        {founder.linkedinUrl ? (
          <a
            href={founder.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className={cn("inline-flex items-center gap-2 pt-1 text-sm font-semibold transition-colors", accent.link)}
          >
            <Linkedin className="h-3.5 w-3.5" aria-hidden />
            {founder.linkedinCta ?? linkedinFallback}
          </a>
        ) : null}
      </div>
    </div>

    <div className={cn("pointer-events-none absolute -right-14 -top-14 hidden h-40 w-40 rounded-full border-[14px] md:block", accent.halo)} aria-hidden />
  </article>
);

type FounderStackItemProps = {
  founder: FounderItem;
  index: number;
  total: number;
  accent: (typeof founderAccents)[number];
  linkedinFallback: string;
};

const FounderStackItem = ({ founder, index, total, accent, linkedinFallback }: FounderStackItemProps) => {
  const stepRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const isLast = index === total - 1;

  const { scrollYProgress } = useScroll({
    target: stepRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.55, 1], reduceMotion || isLast ? [1, 1, 1] : [1, 1, 0.94]);
  const y = useTransform(scrollYProgress, [0, 0.55, 1], reduceMotion || isLast ? [0, 0, 0] : [0, 0, -12]);
  const opacity = useTransform(scrollYProgress, [0, 0.65, 1], reduceMotion || isLast ? [1, 1, 1] : [1, 1, 0.88]);
  const filter = useTransform(
    scrollYProgress,
    [0, 0.65, 1],
    reduceMotion || isLast ? ["blur(0px)", "blur(0px)", "blur(0px)"] : ["blur(0px)", "blur(0px)", "blur(1px)"],
  );

  return (
    <div ref={stepRef} className={cn("relative", isLast ? "pb-4" : "h-[115vh] xl:h-[105vh]")}>
      <motion.div
        className="sticky top-24 z-10 lg:top-28"
        style={{
          zIndex: index + 1,
          scale,
          y,
          opacity,
          filter,
          transformOrigin: "top center",
        }}
      >
        <FounderCard
          founder={founder}
          accent={accent}
          linkedinFallback={linkedinFallback}
          stackIndex={index}
          stackTotal={total}
        />
      </motion.div>
    </div>
  );
};

const FoundersSection = () => {
  const { t } = useTranslation();
  const founders = t("home.founders.items", {
    returnObjects: true,
    defaultValue: defaultFounders,
  }) as FounderItem[];
  const linkedinFallback = t("home.founders.linkedinCta");

  return (
    <section id="about" className="relative overflow-visible py-16 theme-section-soft lg:py-24">
      <div className="glow-orb glow-orb-purple h-[400px] w-[400px] -left-40 top-10 opacity-8" />
      <div className="glow-orb glow-orb-gold h-[360px] w-[360px] -right-40 bottom-10 opacity-8" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 16% 20%, hsl(var(--brand-purple-500) / 0.08) 0%, transparent 34%),
            radial-gradient(circle at 84% 74%, hsl(var(--brand-cyan-500) / 0.07) 0%, transparent 36%),
            radial-gradient(circle at 50% 52%, hsl(var(--surface-glass) / 0.26) 0%, transparent 56%)
          `,
        }}
      />

      <div className="container relative z-10 mx-auto px-5 sm:px-6">
        <motion.div
          className="mx-auto mb-10 max-w-3xl text-center lg:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="mb-5 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider theme-card-light text-[hsl(var(--brand-purple-700))]">
            {t("home.founders.badge")}
          </span>
          <h2 className="mb-4 font-serif text-3xl font-bold text-on-light sm:text-4xl lg:text-5xl">
            <span className="italic text-[hsl(var(--brand-purple-700))]">{t("home.founders.title")}</span>
          </h2>
          <p className="text-base text-on-light-muted sm:text-lg">{t("home.founders.subtitle")}</p>
        </motion.div>

        {/* Mobile: standard stacked cards */}
        <div className="mx-auto grid max-w-6xl gap-7 lg:hidden">
          {founders.map((founder, i) => {
            const accent = founderAccents[i % founderAccents.length];
            return (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.12, duration: 0.65 }}
              >
                <FounderCard
                  founder={founder}
                  accent={accent}
                  linkedinFallback={linkedinFallback}
                  isReversed={i % 2 !== 0}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Desktop: sticky card stack */}
        <div className="mx-auto hidden max-w-6xl lg:block">
          {founders.map((founder, i) => (
            <FounderStackItem
              key={founder.name}
              founder={founder}
              index={i}
              total={founders.length}
              accent={founderAccents[i % founderAccents.length]}
              linkedinFallback={linkedinFallback}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
