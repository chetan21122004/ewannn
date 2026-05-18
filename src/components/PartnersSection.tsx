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

const PartnersSection = () => {
  const { t } = useTranslation();
  const itemsRaw = t("home.partners.items", { returnObjects: true, defaultValue: defaultPartnerItems }) as PartnerItem[];
  const items = Array.isArray(itemsRaw) ? itemsRaw : defaultPartnerItems;
  const exploreHref = t("home.partners.exploreHref", { defaultValue: "/about-us#our-partners" });

  return (
    <section className="relative overflow-hidden border-y border-[hsl(var(--border-light)/0.85)] py-20 lg:py-10 theme-section-soft">
      <div className="glow-orb glow-orb-purple pointer-events-none h-[460px] w-[460px] -top-36 -left-28 opacity-[0.11]" />
      <div className="glow-orb glow-orb-gold pointer-events-none h-[380px] w-[380px] -bottom-32 right-[-12%] opacity-[0.09]" />
      <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.18]" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          className="mx-auto mb-12 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-card)/0.94)] px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-[hsl(var(--brand-purple-700))] shadow-[0_10px_36px_hsl(var(--brand-navy-950)/0.07)]">
            <Handshake className="h-3.5 w-3.5 shrink-0 text-[hsl(var(--brand-gold-600))]" aria-hidden />
            {t("home.partners.badge")}
          </span>
          <h2 className="font-serif text-3xl font-bold text-on-light sm:text-4xl lg:text-5xl">
            {t("home.partners.titleBefore")}
            <span className="gradient-text italic">{t("home.partners.titleGradient")}</span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-on-light-secondary sm:text-base">{t("home.partners.intro")}</p>
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
                className="theme-card-light card-shine rounded-2xl p-6 text-center"
              >
                <div className="mb-4 flex h-16 items-center justify-center">
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
                <h3 className="gradient-text mb-2 font-serif text-lg font-bold">{p.name}</h3>
                <p className="text-sm leading-relaxed text-on-light-secondary">{p.desc}</p>
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
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[hsl(var(--brand-purple-700))] hover:underline"
          >
            {t("home.partners.exploreCta")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
