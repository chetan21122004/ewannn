import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import LanguageSectorCard from "@/components/language-localization/LanguageSectorCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getSectorCatalogEntry, homepageSectorIds } from "@/data/sectorCatalog";
import { blurReveal, fadeOnly } from "@/lib/animationVariants";

const defaultSectors = [
  { name: "Automotive", code: "01" },
  { name: "Pharmaceuticals", code: "02" },
  { name: "Aerospace", code: "03" },
  { name: "Manufacturing", code: "04" },
  { name: "Technology", code: "05" },
  { name: "Exhibitions & Trade Fairs", code: "06" },
  { name: "Agriculture & Food", code: "07" },
  { name: "Legal & Compliance", code: "08" },
  { name: "Education", code: "09" },
  { name: "Media & OTT", code: "10" },
] as const;

const SectorsSection = () => {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion() ?? false;

  const sectorsRaw = t("home.sectors.items", { returnObjects: true, defaultValue: defaultSectors }) as Array<{
    name?: string;
    code?: string;
  }>;

  const sectors = (Array.isArray(sectorsRaw) ? sectorsRaw : defaultSectors).map((sector, index) => {
    const fallback = defaultSectors[index] ?? defaultSectors[0];
    const meta = getSectorCatalogEntry(index);
    return {
      id: homepageSectorIds[index] ?? meta.id,
      name: typeof sector?.name === "string" ? sector.name : fallback.name,
      code: typeof sector?.code === "string" ? sector.code : fallback.code,
      description: meta.description,
      icon: meta.icon,
      image: meta.image,
      imageAlt: meta.imageAlt,
    };
  });

  const headerVariant = reduceMotion ? fadeOnly : blurReveal;
  const hidden = reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 };
  const show = { opacity: 1, y: 0 };
  const transition = (delay = 0) => ({
    duration: reduceMotion ? 0.35 : 0.72,
    delay,
    ease: [0.22, 1, 0.36, 1] as const,
  });

  return (
    <section id="sectors" className="relative overflow-hidden py-8 lg:py-12 theme-section-soft">
      <motion.img
        src="/doodles/Bookmarks-pana.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 -bottom-10 hidden h-48 w-48 opacity-[0.1] lg:block"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 0.1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      <motion.img
        src="/doodles/Preferences-bro.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 hidden h-48 w-48 opacity-[0.1] lg:block"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 0.1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      <div className="container relative z-10 mx-auto max-w-6xl px-5 sm:px-6">
        <motion.div
          className="mx-auto mb-8 max-w-5xl text-center lg:mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headerVariant}
        >
          <h2 className="font-serif text-3xl font-bold leading-tight text-on-light sm:text-4xl lg:text-5xl">
            {t("home.sectors.titlePrefix")}{" "}
            <span className="whitespace-nowrap italic text-[hsl(var(--brand-purple-700))]">
              {t("home.sectors.titleHighlight")} {t("home.sectors.titleHighlightLine2")}
            </span>
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="flex flex-col gap-2.5 md:hidden">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <AccordionItem
                key={sector.id}
                value={sector.id}
                className="overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] border-b-0 bg-white shadow-sm data-[state=open]:border-[hsl(var(--brand-purple-500)/0.35)] data-[state=open]:ring-1 data-[state=open]:ring-[hsl(var(--brand-purple-500)/0.15)]"
              >
                <AccordionTrigger className="relative min-h-[88px] gap-0 overflow-hidden p-0 hover:no-underline [&[data-state=open]>svg]:text-[hsl(var(--brand-gold-500))]">
                  <img src={sector.image} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--brand-navy-950)/0.88)] via-[hsl(var(--brand-navy-950)/0.72)] to-[hsl(var(--brand-navy-950)/0.45)]"
                    aria-hidden
                  />
                  <span className="relative z-10 flex min-w-0 flex-1 items-center gap-3 px-4 py-4 text-left text-white">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--brand-gold-500))]">
                        {sector.code}
                      </span>
                      <span className="block font-serif text-base font-bold leading-snug">{sector.name}</span>
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-xs leading-relaxed text-on-light-secondary">
                  {sector.description}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>

        <div className="hidden gap-3.5 md:grid md:grid-cols-3 md:gap-4 lg:grid-cols-5 lg:gap-3">
          {sectors.map((sector, index) => (
            <LanguageSectorCard
              key={sector.id}
              sector={{
                id: sector.id,
                title: sector.name,
                description: sector.description,
                icon: sector.icon,
                image: sector.image,
                imageAlt: sector.imageAlt,
                href: "/industries/",
                linkLabel: "Explore industries",
              }}
              index={index}
              hidden={hidden}
              show={show}
              transition={transition}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
