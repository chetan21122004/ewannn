import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { blurReveal, fadeOnly, scaleUp } from "@/lib/animationVariants";

const partnerImages: Record<string, string> = {
  bhashini: "/allLogos/Bhashini-Logo.png",
  tattava: "/allLogos/tattava-cx.svg",
};

type PartnerItem = { id: string; name: string; desc: string; alt: string };

const defaultPartnerItems: PartnerItem[] = [
  {
    id: "bhashini",
    name: "Bhashini",
    desc: "Bhashini - Ministry of Electronics & IT (MeitY), Government of India · Language technology initiative.",
    alt: "Bhashini logo",
  },
  {
    id: "tattava",
    name: "Tattava CX",
    desc: "Strategic communications partner.",
    alt: "Tattava CX logo",
  },
];

const PartnerLogo = ({
  src,
  alt,
  name,
  className = "max-h-11 w-auto max-w-[170px] object-contain lg:max-h-14 lg:max-w-[210px]",
}: {
  src?: string;
  alt: string;
  name: string;
  className?: string;
}) => {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <span className="font-serif text-base font-bold tracking-tight text-[hsl(var(--brand-navy-950))] sm:text-lg">
        {name}
      </span>
    );
  }

  return (
    <img src={src} alt={alt} loading="lazy" className={className} onError={() => setFailed(true)} />
  );
};

const PartnersSection = () => {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion() ?? false;
  const itemsRaw = t("home.partners.items", { returnObjects: true, defaultValue: defaultPartnerItems }) as PartnerItem[];
  const items = Array.isArray(itemsRaw) ? itemsRaw : defaultPartnerItems;
  const exploreHref = t("home.partners.exploreHref", { defaultValue: "/about-us#our-partners" });
  const headerVariant = reduceMotion ? fadeOnly : blurReveal;
  const cardVariant = reduceMotion ? fadeOnly : scaleUp;

  return (
    <section className="relative overflow-hidden border-y border-[hsl(var(--border-light)/0.85)] py-5 theme-section-soft lg:py-8">
      <div className="glow-orb glow-orb-gold pointer-events-none -bottom-20 right-[-18%] h-[240px] w-[240px] opacity-[0.07] lg:-bottom-32 lg:right-[-12%] lg:h-[380px] lg:w-[380px] lg:opacity-[0.09]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] theme-grid-overlay-light lg:opacity-[0.18]" />

      <div className="container relative z-10 mx-auto px-5 sm:px-6">
        <motion.div
          className="mx-auto mb-6 max-w-2xl text-center lg:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headerVariant}
        >
          <h2 className="font-serif text-[1.65rem] font-bold leading-tight text-on-light sm:text-4xl lg:text-5xl">
            {t("home.partners.titleBefore")}
            <span className="italic text-[hsl(var(--brand-purple-700))]">{t("home.partners.titleGradient")}</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-on-light-secondary sm:mt-5 sm:text-base">
            {t("home.partners.intro")}
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-3 sm:gap-4 lg:grid-cols-2 lg:gap-6">
          {items.map((p, i) => {
            const src = partnerImages[p.id];
            return (
              <motion.article
                key={p.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariant}
                transition={{ delay: i * 0.12 }}
                whileHover={reduceMotion ? undefined : { y: -6 }}
                className="theme-card-light card-shine group overflow-hidden rounded-2xl border border-[hsl(var(--border-light)/0.9)]"
              >
                <div className="flex min-h-[84px] items-center justify-center border-b border-[hsl(var(--border-light))] bg-white px-5 py-4 sm:min-h-[96px] lg:min-h-[112px] lg:px-8">
                  <PartnerLogo src={src} alt={p.alt} name={p.name} />
                </div>
                <div className="p-4 text-left sm:p-5 lg:p-6 lg:text-center">
                  <h3 className="mb-1.5 font-serif text-base font-bold text-[hsl(var(--brand-purple-700))] sm:mb-2 sm:text-lg">
                    {p.name}
                  </h3>
                  <p className="text-xs leading-relaxed text-on-light-secondary sm:text-sm">{p.desc}</p>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="mt-6 flex justify-center lg:mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            to={exploreHref}
            className="inline-flex min-h-11 w-full max-w-md items-center justify-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-card))] px-5 text-xs font-semibold uppercase tracking-wide text-[hsl(var(--brand-purple-700))] transition hover:bg-[hsl(var(--surface-light-50))] sm:text-sm lg:w-auto lg:max-w-none lg:border-0 lg:bg-transparent lg:px-0 lg:hover:underline"
          >
            <motion.span
              animate={reduceMotion ? undefined : { rotate: [0, -8, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex"
            >
              <Handshake className="h-4 w-4 shrink-0" aria-hidden />
            </motion.span>
            {t("home.partners.exploreCta")}
            <ArrowRight className="hidden h-4 w-4 shrink-0 lg:inline" aria-hidden />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
