import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

type ClientLogo = {
  name: string;
  src?: string;
  alt: string;
  isTextOnly?: boolean;
};

const clients: ClientLogo[] = [
  { name: "Tata Autocomp", src: "/allLogos/Tata-Autocomp.jpeg", alt: "Tata Autocomp logo" },
  { name: "Markets & Markets", src: "/allLogos/Marketsandmarkets.jpeg", alt: "Markets and Markets logo" },
  { name: "Groupo Antolin", isTextOnly: true, alt: "Groupo Antolin logo" },
  { name: "Mittal Group", src: "/allLogos/Mittal-Group.jpeg", alt: "Mittal Group logo" },
  { name: "Seasonz International", src: "/allLogos/Seasonz-Group.jpeg", alt: "Seasonz International logo" },
  { name: "Balbharati", src: "/allLogos/Balbharti.jpeg", alt: "Balbharati logo" },
  { name: "Gandharva Mahavidyalay", src: "/allLogos/Gandharva-Mahavidyalay.jpeg", alt: "Gandharva Mahavidyalay logo" },
  { name: "Indian Magic Eye", src: "/allLogos/Ime-Indian-magic-eye.jpeg", alt: "Indian Magic Eye logo" },
  { name: "Indus International School", src: "/allLogos/Indus-International-School.jpeg", alt: "Indus International School logo" },
  { name: "Joy Reaps Metal", src: "/allLogos/Joy-reaps-metal.jpeg", alt: "Joy Reaps Metal logo" },
  { name: "Kheliya", src: "/allLogos/Kheliya.jpeg", alt: "Kheliya logo" },
  { name: "Riskberg", src: "/allLogos/Riskberg.jpeg", alt: "Riskberg logo" },
  { name: "SG Analytics", src: "/allLogos/SG-Analytics-logo.jpg", alt: "SG Analytics logo" },
  { name: "Shayadri Farms", src: "/allLogos/Shayadri-Farms.jpeg", alt: "Shayadri Farms logo" },
  { name: "Tomsa Destil", src: "/allLogos/Tomsa-Destil-India-Pvt-Ltd-logo.jpg", alt: "Tomsa Destil logo" },
  { name: "Integral Technical Group", src: "/allLogos/integral-technical-group-logo.jpg", alt: "Integral Technical Group logo" },
  { name: "JSIMR", src: "/allLogos/jsimr-logo.png", alt: "JSIMR logo" },
];

const ClientLogosSection = () => {
  const { t } = useTranslation();
  return (
    <section
      className="relative overflow-hidden border-y border-[hsl(var(--border-light)/0.85)] theme-section-light p-6"
      aria-label="Client logos"
    >
      <div className="absolute inset-0 theme-grid-overlay-light opacity-15 pointer-events-none" />
      <div className="glow-orb glow-orb-purple w-[320px] h-[320px] -top-28 left-10 opacity-8" />
      <div className="glow-orb glow-orb-gold w-[280px] h-[280px] -bottom-20 right-10 opacity-8" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          className="mb-10 flex flex-col items-center gap-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand-purple-700))]" aria-hidden />
            <p className="text-center text-xs font-semibold uppercase tracking-[0.32em] text-[hsl(var(--text-on-light-muted))]">
              {t("home.clientLogos.badge")}
            </p>
            <span className="h-px w-10 max-w-[40vw] bg-gradient-to-r from-[hsl(var(--brand-purple-700)/0.6)] to-transparent" aria-hidden />
          </div>
        </motion.div>

        <div className="client-logos-fade relative overflow-hidden">
          <div className="client-logos-marquee flex items-center  ">
            {[...clients, ...clients].map((client, i) => (
              <motion.div
                key={`${client.name}-${i}`}
                className="mx-2 flex min-h-[11rem] min-w-[280px] shrink-0 items-center justify-center px-6 py-5 md:min-h-[12rem] md:min-w-[320px] md:px-8"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 420, damping: 24 }}
              >
                {client.src && !client.isTextOnly ? (
                  <img
                    src={client.src}
                    alt={client.alt}
                    loading="lazy"
                    className="client-logo-img "
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
                      if (fallback) fallback.style.display = "inline";
                    }}
                  />
                ) : null}
                <span
                  style={{ display: client.src && !client.isTextOnly ? "none" : "inline" }}
                  className="max-w-[28rem] text-center text-base font-semibold leading-snug text-[hsl(var(--text-on-light))] md:text-lg"
                >
                  {client.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes clientLogosMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .client-logos-marquee {
          animation: clientLogosMarquee 55s linear infinite;
          width: max-content;
        }
        @media (min-width: 1024px) {
          .client-logos-marquee {
            animation-duration: 76s;
          }
        }
        .client-logos-fade {
          -webkit-mask-image: linear-gradient(to right, transparent, black 7%, black 93%, transparent);
          mask-image: linear-gradient(to right, transparent, black 7%, black 93%, transparent);
        }
        @media (prefers-reduced-motion: reduce) {
          .client-logos-marquee {
            animation: none;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default ClientLogosSection;
