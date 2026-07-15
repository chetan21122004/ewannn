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
  { name: "Bajaj", src: "/allLogos/Bajaj-Logo.png", alt: "Bajaj logo" },
  { name: "Japanese Manufacturing Client", isTextOnly: true, alt: "Confidential client - logo withheld" },
  { name: "Markets & Markets", src: "/allLogos/Marketsandmarkets.jpeg", alt: "Markets and Markets logo" },
  { name: "Groupo Antolin", src: "/allLogos/Groupo-Antolin.jpeg", alt: "Groupo Antolin logo" },
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
      className="relative overflow-hidden border-y border-[hsl(var(--border-light)/0.85)] theme-section-light px-4 py-3 sm:p-4"
      aria-label="Client logos"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] theme-grid-overlay-light lg:opacity-15" />
      <div className="glow-orb glow-orb-gold -bottom-16 right-6 h-[200px] w-[200px] opacity-8 lg:-bottom-20 lg:right-10 lg:h-[280px] lg:w-[280px]" />

      <div className="container relative z-10 mx-auto px-2 sm:px-6">
        <motion.div
          className="mb-3 flex flex-col items-center gap-2 lg:mb-5 lg:gap-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-xs font-medium text-on-light-muted sm:text-sm">
            {t("home.clientLogos.badge")}
          </p>
        </motion.div>

        <div className="client-logos-fade relative overflow-hidden">
          <div className="client-logos-marquee flex items-center">
            {[...clients, ...clients].map((client, i) => (
              <motion.div
                key={`${client.name}-${i}`}
                className="mx-1.5 flex min-h-[4.25rem] min-w-[9rem] shrink-0 items-center justify-center overflow-hidden px-3 py-2 sm:mx-2 sm:min-h-[6.25rem] sm:min-w-[200px] sm:px-5 sm:py-3 md:min-h-[7rem] md:min-w-[220px]"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 420, damping: 24 }}
              >
                {client.src && !client.isTextOnly ? (
                  <img
                    src={client.src}
                    alt={client.alt}
                    loading="lazy"
                    className="client-logo-img max-h-20 w-auto max-w-full object-contain sm:max-h-28"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
                      if (fallback) fallback.style.display = "inline";
                    }}
                  />
                ) : null}
                <span
                  style={{ display: client.src && !client.isTextOnly ? "none" : "inline" }}
                  className="max-w-[9rem] text-center text-xs font-semibold leading-snug text-[hsl(var(--text-on-light))] sm:max-w-[28rem] sm:text-base md:text-lg"
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
          animation: clientLogosMarquee 38s linear infinite;
          width: max-content;
        }
        @media (min-width: 640px) {
          .client-logos-marquee {
            animation-duration: 55s;
          }
        }
        @media (min-width: 1024px) {
          .client-logos-marquee {
            animation-duration: 76s;
          }
        }
        .client-logos-fade {
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }
        @media (min-width: 1024px) {
          .client-logos-fade {
            -webkit-mask-image: linear-gradient(to right, transparent, black 7%, black 93%, transparent);
            mask-image: linear-gradient(to right, transparent, black 7%, black 93%, transparent);
          }
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
