import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PartnerRevealCard from "@/components/PartnerRevealCard";
import { blurReveal, fadeOnly, scaleUp } from "@/lib/animationVariants";

const partnerMeta: Record<
  string,
  { logo: string; type: string; accent: "purple" | "gold"; logoClassName?: string }
> = {
  bhashini: {
    logo: "/allLogos/Bhashini-Logo.png",
    type: "Institutional Partner",
    accent: "purple",
    logoClassName: "max-h-11 w-auto max-w-[220px] sm:max-h-12",
  },
  tattava: {
    logo: "/allLogos/tattava-cx.svg",
    type: "Strategic Partner",
    accent: "gold",
    logoClassName: "max-h-14 max-w-[160px] sm:max-h-16",
  },
};

type PartnerItem = { id: string; name: string; desc: string; alt: string };

const defaultPartnerItems: PartnerItem[] = [
  {
    id: "bhashini",
    name: "Bhashini",
    desc: "Ministry of Electronics & IT (MeitY), Government of India · Language technology initiative.",
    alt: "Bhashini logo",
  },
  {
    id: "tattava",
    name: "Tattava CX",
    desc: "Strategic communications and customer experience partner.",
    alt: "Tattava CX logo",
  },
];

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
          {items.map((partner, i) => {
            const meta = partnerMeta[partner.id] ?? {
              logo: "/placeholder.svg",
              type: "Partner",
              accent: i === 0 ? ("purple" as const) : ("gold" as const),
            };

            return (
              <motion.div
                key={partner.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariant}
                transition={{ delay: i * 0.12 }}
              >
                <PartnerRevealCard
                  type={meta.type}
                  name={partner.name}
                  description={partner.desc}
                  logo={meta.logo}
                  logoAlt={partner.alt}
                  logoClassName={meta.logoClassName}
                  accent={meta.accent}
                />
              </motion.div>
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
