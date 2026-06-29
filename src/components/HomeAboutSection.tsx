import { motion, useReducedMotion } from "framer-motion";
import { BadgeCheck, Building2, Languages, MapPin, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

const defaultPills = ["Pune, India · Founded 2020", "125+ languages", "ISO 9001:2015", "MSAMB · Bhashini"];

const pillIcons: LucideIcon[] = [MapPin, Languages, BadgeCheck, Building2];

const viewFade = { once: true, margin: "-60px" as const };

const HomeAboutSection = () => {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const pillsRaw = t("home.aboutIntro.pills", { returnObjects: true, defaultValue: defaultPills }) as string[];
  const pills = Array.isArray(pillsRaw) ? pillsRaw : defaultPills;

  const ease = [0.22, 1, 0.36, 1] as const;
  const itemHidden = reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 };
  const itemShow = reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 };
  const itemTransition = (delay = 0) =>
    reduceMotion
      ? { duration: 0.35, delay, ease: "easeOut" as const }
      : { duration: 0.72, delay, ease };

  return (
    <section
      id="about-ewan-intro"
      aria-labelledby="about-ewan-intro-heading"
      className="relative overflow-hidden border-y border-[hsl(var(--border-light)/0.85)] py-6 theme-section-soft stitch-line stitch-line-bottom lg:py-14"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] theme-grid-overlay-light lg:opacity-[0.18]" />
      <div className="glow-orb glow-orb-purple -left-20 -top-24 h-[280px] w-[280px] opacity-[0.08] lg:-left-28 lg:-top-36 lg:h-[460px] lg:w-[460px] lg:opacity-[0.11]" />
      <div className="glow-orb glow-orb-gold -bottom-20 right-[-18%] h-[240px] w-[240px] opacity-[0.07] lg:-bottom-32 lg:right-[-12%] lg:h-[380px] lg:w-[380px] lg:opacity-[0.09]" />
      <div
        className="pointer-events-none absolute -right-[min(42vw,28rem)] top-1/2 hidden h-[min(88vw,36rem)] w-[min(88vw,36rem)] -translate-y-1/2 rounded-full border-[1.5px] border-[hsl(var(--brand-purple-500)/0.12)] lg:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-[min(36vw,22rem)] top-1/2 hidden h-[min(72vw,30rem)] w-[min(72vw,30rem)] -translate-y-1/2 rounded-full border border-[hsl(var(--brand-gold-500)/0.1)] lg:block"
        aria-hidden
      />

      <div className="container relative z-10 mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* Left: editorial column + diagonal accent */}
          <div className="relative lg:col-span-5">
            <div
              className="pointer-events-none absolute top-[-10%] z-0 h-[120%] w-[calc(100%+2.5rem)] max-lg:left-[-1rem] lg:-left-10 lg:w-[calc(100%+4.5rem)]"
              style={{
                clipPath: "polygon(0 0, 100% 0, 72% 100%, 0 100%)",
                background:
                  "linear-gradient(168deg, hsl(var(--brand-purple-500) / 0.1) 0%, hsl(var(--brand-cyan-500) / 0.05) 48%, transparent 92%)",
              }}
              aria-hidden
            />
            <div className="pointer-events-none absolute bottom-4 left-0 hidden h-24 w-24 rounded-2xl border border-[hsl(var(--brand-purple-700)/0.1)] opacity-60 lg:block" aria-hidden />

            <motion.div
              initial={itemHidden}
              whileInView={itemShow}
              viewport={viewFade}
              transition={itemTransition(0)}
              className="relative z-10 space-y-5 lg:space-y-7"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-card)/0.94)] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[hsl(var(--brand-purple-700))] shadow-[0_10px_36px_hsl(var(--brand-navy-950)/0.07)]">
                <Sparkles className="h-3.5 w-3.5 shrink-0 text-[hsl(var(--brand-gold-600))]" aria-hidden />
                {t("home.aboutIntro.badge")}
              </div>

              <h2
                id="about-ewan-intro-heading"
                className="font-serif text-[1.75rem] font-bold leading-[1.1] tracking-tight text-on-light sm:text-4xl lg:text-[2.75rem] xl:text-[3rem]"
              >
                <span className="text-[hsl(var(--text-on-light))]">{t("home.aboutIntro.headlinePrefix")}</span>
                <span className="relative inline-block align-baseline">
                  <span
                    className="pointer-events-none absolute left-0 top-0 -z-10 select-none whitespace-nowrap font-serif text-[2rem] font-bold italic leading-[1.08] text-[hsl(var(--brand-purple-700)/0.07)] sm:text-4xl lg:text-[2.75rem] xl:text-[3rem]"
                    style={{ transform: "translate(0.12em, 0.14em)" }}
                    aria-hidden
                  >
                    {t("home.aboutIntro.headlineHighlight")}
                  </span>
                  <span className="text-[hsl(var(--brand-purple-700))] italic">
                    {t("home.aboutIntro.headlineHighlight")}
                  </span>
                </span>
                <span className="text-[hsl(var(--text-on-light))]">{t("home.aboutIntro.headlineSuffix")}</span>
              </h2>

              <motion.figure
                initial={itemHidden}
                whileInView={itemShow}
                viewport={viewFade}
                transition={itemTransition(reduceMotion ? 0 : 0.1)}
                className="relative hidden max-w-[340px] sm:max-w-[390px] lg:block lg:max-w-[420px]"
              >
                <motion.img
                  src="/doodles/International trade-rafiki.svg"
                  alt="International trade illustration representing UVAN's cross-border market entry and language services"
                  className="h-56 w-full object-contain object-left sm:h-64 lg:h-72"
                  loading="lazy"
                  decoding="async"
                  animate={reduceMotion ? undefined : { y: [0, -8, 0], rotate: [0, 1.2, 0] }}
                  transition={reduceMotion ? undefined : { duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.figure>
            </motion.div>
          </div>

          {/* Right: bento */}
          <div className="grid gap-3 sm:gap-5 lg:col-span-7">
            <motion.div
              initial={itemHidden}
              whileInView={itemShow}
              viewport={viewFade}
              transition={itemTransition(reduceMotion ? 0 : 0.06)}
              className="relative overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-card)/0.72)] p-1 shadow-[0_16px_44px_hsl(var(--brand-navy-950)/0.06)] backdrop-blur-sm sm:rounded-3xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--brand-purple-500)/0.06)] via-transparent to-[hsl(var(--brand-cyan-500)/0.05)] pointer-events-none" aria-hidden />
              <div className="relative grid grid-cols-2 gap-2 p-3 sm:flex sm:flex-wrap sm:gap-2.5 sm:overflow-visible sm:p-4 lg:[&::-webkit-scrollbar]:hidden">
                {pills.map((pill, i) => {
                  const Icon = pillIcons[i % pillIcons.length];
                  return (
                    <span
                      key={pill}
                      className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--brand-purple-700)/0.14)] bg-[hsl(var(--surface-light-card)/0.95)] px-3 py-2 text-[9px] font-semibold uppercase leading-snug tracking-[0.1em] text-[hsl(var(--brand-purple-700)/0.92)] shadow-[0_4px_18px_hsl(var(--brand-navy-950)/0.04)] sm:min-w-0 sm:px-3.5 sm:text-[11px] sm:tracking-[0.12em]"
                    >
                      <Icon className="h-3 w-3 shrink-0 text-[hsl(var(--brand-gold-600))] sm:h-3.5 sm:w-3.5" aria-hidden />
                      {pill}
                    </span>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={itemHidden}
              whileInView={itemShow}
              viewport={viewFade}
              transition={itemTransition(reduceMotion ? 0 : 0.14)}
              className="relative"
            >
              <div
                className="pointer-events-none absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-[hsl(var(--brand-purple-500)/0.2)] via-transparent to-[hsl(var(--brand-cyan-500)/0.14)] opacity-80 blur-xl lg:-inset-3"
                aria-hidden
              />
              <div className="relative rounded-[1.5rem] bg-gradient-to-br from-[hsl(var(--brand-purple-500)/0.65)] via-[hsl(var(--brand-gold-500)/0.5)] to-[hsl(var(--brand-cyan-500)/0.55)] p-px shadow-[0_24px_56px_hsl(var(--brand-navy-950)/0.1)] sm:rounded-[1.85rem]">
                <div className="relative overflow-hidden rounded-[calc(1.5rem-1px)] bg-[hsl(var(--surface-light-card)/0.98)] card-shine sm:rounded-[calc(1.85rem-1px)]">
                  <div
                    className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-[hsl(var(--brand-purple-500))] via-[hsl(var(--brand-gold-500)/0.88)] to-[hsl(var(--brand-cyan-500))]"
                    aria-hidden
                  />
                  <div className="relative border border-[hsl(var(--border-light)/0.55)] p-5 pl-5 md:p-9 md:pl-8">
                    <div className="mb-4 flex items-center gap-2 text-[hsl(var(--brand-purple-700)/0.88)] md:mb-5">
                      <Building2 className="h-5 w-5 shrink-0" aria-hidden />
                      <span className="text-xs font-semibold uppercase tracking-[0.22em]">{t("home.aboutIntro.cardLabel")}</span>
                    </div>
                    <p className="text-[0.9375rem] leading-[1.7] text-on-light-secondary md:text-lg md:leading-[1.75]">{t("home.aboutIntro.cardBlurb")}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutSection;
