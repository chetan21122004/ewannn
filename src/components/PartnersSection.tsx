import { motion } from "framer-motion";
import { Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const partnerImages: Record<string, string> = {
  bhashini: "/allLogos/Bhashini-Logo.png",
  tattava: "/allLogos/tattava-cx.png",
};

type PartnerItem = { id: string; name: string; desc: string; alt: string };

const defaultPartnerItems: PartnerItem[] = [
  {
    id: "bhashini",
    name: "Bhashini",
    desc: "Bhashini — Ministry of Electronics & IT (MeitY), Government of India · Language technology initiative.",
    alt: "Bhashini logo",
  },
  {
    id: "tattava",
    name: "Tattava CX",
    desc: "Strategic communications partner.",
    alt: "Tattava CX logo",
  },
];

const PartnersSection = () => {
  const { t } = useTranslation();
  const itemsRaw = t("home.partners.items", { returnObjects: true, defaultValue: defaultPartnerItems }) as PartnerItem[];
  const items = Array.isArray(itemsRaw) ? itemsRaw : defaultPartnerItems;
  const exploreHref = t("home.partners.exploreHref", { defaultValue: "/about-us#our-partners" });

  return (
    <section className="py-20 lg:py-10 relative overflow-hidden section-navy">
      <div className="absolute inset-0 dots-pattern opacity-15 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card-gold text-primary text-xs font-medium tracking-wider uppercase mb-4">
            <Handshake className="w-3.5 h-3.5" /> {t("home.partners.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            {t("home.partners.titleBefore")}
            <span className="gradient-text italic">{t("home.partners.titleGradient")}</span>
          </h2>
          <p className="mt-5 text-sm sm:text-base text-muted-foreground leading-relaxed">{t("home.partners.intro")}</p>
        </motion.div>

        <div className="grid gap-6 max-w-5xl mx-auto md:grid-cols-2 lg:grid-cols-2">
          {items.map((p, i) => {
            const src = partnerImages[p.id];
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="p-6 rounded-2xl glass-card-gold border border-primary/15 card-shine text-center"
              >
                <div className="h-16 mb-4 flex items-center justify-center">
                  {src ? (
                    <img
                      src={src}
                      alt={p.alt}
                      loading="lazy"
                      className="max-h-14 w-auto object-contain"
                      onError={(e) => {
                        if (!e.currentTarget.dataset.fallbackApplied) {
                          e.currentTarget.dataset.fallbackApplied = "true";
                          e.currentTarget.src = "/logo.png";
                          return;
                        }
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  ) : null}
                </div>
                <h3 className="mb-2 text-lg font-serif font-bold gradient-text">{p.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            to={exploreHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary tracking-wide uppercase hover:underline"
          >
            {t("home.partners.exploreCta")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
