import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

type FooterLink = { label: string; href: string; external?: boolean };
type FooterColumn = { title: string; links: FooterLink[] };

const navColumns: FooterColumn[] = [
  {
    title: "Services",
    links: [
      { label: "Market Entry", href: "/market-entry" },
      { label: "Language & Localization", href: "/language-localization" },
      { label: "Liaisoning & Facilitation", href: "/liaisoning-facilitation" },
      { label: "Market Research", href: "/market-research" },
      { label: "Import, Procurement & Export", href: "/import-export" },
      { label: "Global Talkies", href: "/global-talkies" },
      { label: "Industries", href: "/industries" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Join Us", href: "/join-us" },
      { label: "Case Studies", href: "/media#case-study" },
      { label: "SANO", href: "https://www.arogyayatri.com/", external: true },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
  {
    title: "Media",
    links: [
      { label: "Media Hub", href: "/media" },
      { label: "The Language Gazette", href: "/language-gazette" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "Ask Soham - 15 Min Free", href: "/ask-soham" },
      { label: "Download the 2026 Market Entry Audit", href: "/market-entry-audit" },
      { label: "Contact Us", href: "/contact" },
      { label: "Bhashik Skill Development ↗", href: "https://bhashikskill.co.in", external: true },
    ],
  },
];

const certifications = [
  { name: "ISO 9001:2015", src: "/allLogos/ISO-9001.png", alt: "ISO 9001:2015 certification logo" },
  { name: "CITLoB", src: "/allLogos/CITLoB-logo-2023.jpg", alt: "CITLoB logo" },
  { name: "Bhashini", src: "/allLogos/Bhashini-Logo.png", alt: "Bhashini initiative logo" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/ewan-business-solutions/" },
  { label: "YouTube", href: "https://www.youtube.com/@EWAN-SSK" },
  { label: "Instagram", href: "https://www.instagram.com/ewanbizsolution/" },
  { label: "X", href: "https://x.com/ewanbusiness" },
];

const FooterNavLink = ({ link }: { link: FooterLink }) =>
  link.external ? (
    <a
      href={link.href}
      target="_blank"
      rel="noreferrer"
      className="text-sm text-white/60 transition-colors hover:text-white"
    >
      {link.label}
    </a>
  ) : (
    <Link to={link.href} className="text-sm text-white/60 transition-colors hover:text-white">
      {link.label}
    </Link>
  );

const Footer = () => {
  const { t } = useTranslation();

  const getColumnTitle = (title: string) => {
    if (title === "Services") return t("footer.services");
    if (title === "Company") return t("footer.company");
    if (title === "Media") return t("footer.media");
    if (title === "Quick Links") return t("footer.quickLinks");
    return title;
  };

  const getLinkLabel = (label: string) => {
    if (label === "Industries") return t("nav.industries");
    if (label === "About Us") return t("footer.aboutUs");
    if (label === "Join Us") return t("footer.joinUs");
    if (label === "Media Hub") return t("footer.mediaHub");
    if (label === "The Language Gazette") return t("footer.languageGazette");
    if (label === "Contact Us") return t("footer.contactUs");
    if (label === "Case Studies") return t("footer.caseStudies");
    if (label === "SANO") return t("footer.sano");
    if (label === "Privacy Policy") return t("footer.privacyPolicy");
    if (label === "Ask Soham - 15 Min Free") return t("footer.askSohamCta");
    if (label === "Download the 2026 Market Entry Audit") return t("footer.marketEntryAudit");
    return label;
  };

  return (
    <footer className="border-t border-[hsl(var(--border-light))] bg-[hsl(var(--brand-navy-950))] text-white">
      <div className="container mx-auto px-6 py-10 lg:py-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <img src="/logo.png" alt="EWAN Business Solutions logo" className="mb-4 h-12 w-auto brightness-0 invert" />
            <p className="max-w-xs text-sm leading-relaxed text-white/65">{t("footer.tagline")}</p>
            <a
              href="mailto:info@ewan.co.in"
              className="mt-4 inline-flex items-center gap-2 text-sm text-[hsl(var(--brand-gold-500))] transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4" />
              info@ewan.co.in
            </a>
            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-white/50 transition-colors hover:text-white"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
            {navColumns.map((col) => (
              <div key={col.title}>
                <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[hsl(var(--brand-gold-500))]">
                  {getColumnTitle(col.title)}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <FooterNavLink link={{ ...link, label: getLinkLabel(link.label) }} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-8">
          {certifications.map((cert) => (
            <img key={cert.name} src={cert.src} alt={cert.alt} loading="lazy" className="h-7 w-auto max-w-[100px] object-contain opacity-80 brightness-0 invert" />
          ))}
          <span className="text-xs text-white/40">MSAMB Empanelled</span>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row">
          <span>{t("footer.rights")}</span>
          <Link to="/privacy-policy" className="transition-colors hover:text-white/80">
            {t("footer.privacyPolicy")}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
