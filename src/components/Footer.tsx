import { ArrowUpRight, Instagram, Linkedin, Mail, Twitter, Youtube, type LucideIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SITE_LOGO, SITE_LOGO_ALT } from "@/lib/site";
import { scrollToPageTop } from "@/lib/scrollToTop";
import type { MouseEvent } from "react";

type FooterLink = { label: string; href: string; external?: boolean };

const essentialLinks: FooterLink[] = [
  { label: "Market Entry", href: "/market-entry" },
  { label: "Language & Localization", href: "/language-localization" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact" },
  { label: "SANO", href: "https://www.arogyayatri.com/", external: true },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const certifications = [
  { name: "ISO 9001:2015", src: "/allLogos/ISO-9001.png", alt: "ISO 9001:2015 certification logo" },
  { name: "CITLoB", src: "/allLogos/CITLoB-logo-2023.jpg", alt: "CITLoB logo" },
  { name: "Bhashini", src: "/allLogos/Bhashini-Logo.png", alt: "Bhashini initiative logo" },
];

const socialLinks: Array<{ label: string; href: string; Icon: LucideIcon }> = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/ewan-business-solutions/", Icon: Linkedin },
  { label: "YouTube", href: "https://www.youtube.com/@EWAN-SSK", Icon: Youtube },
  { label: "Instagram", href: "https://www.instagram.com/ewanbizsolution/", Icon: Instagram },
  { label: "X", href: "https://x.com/ewanbusiness", Icon: Twitter },
];

const FooterNavLink = ({ link, label }: { link: FooterLink; label: string }) =>
  link.external ? (
    <a
      href={link.href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 text-sm text-white/75 transition-colors hover:text-[hsl(var(--brand-gold-500))]"
    >
      {label}
      <ArrowUpRight className="h-3 w-3 opacity-50" aria-hidden />
    </a>
  ) : (
    <Link to={link.href} className="text-sm text-white/75 transition-colors hover:text-[hsl(var(--brand-gold-500))]">
      {label}
    </Link>
  );

const Footer = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const getLinkLabel = (label: string) => {
    if (label === "About Us") return t("footer.aboutUs");
    if (label === "Contact Us") return t("footer.contactUs");
    if (label === "SANO") return t("footer.sano");
    if (label === "Privacy Policy") return t("footer.privacyPolicy");
    return label;
  };

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      event.preventDefault();
      scrollToPageTop("smooth");
    }
  };

  return (
    <footer className="border-t border-white/10 bg-[hsl(var(--brand-navy-950))] pb-[calc(4rem+env(safe-area-inset-bottom,0px))] text-white lg:pb-0">
      <div className="container mx-auto px-4 py-8 sm:px-6 sm:py-9">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <div className="max-w-md">
            <Link to="/" className="inline-block" onClick={handleLogoClick}>
              <img src={SITE_LOGO} alt={SITE_LOGO_ALT} className="h-10 w-auto brightness-0 invert sm:h-11" />
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-white/65">{t("footer.tagline")}</p>
            <a
              href="mailto:info@ewan.co.in"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/85 transition-colors hover:text-[hsl(var(--brand-gold-500))]"
            >
              <Mail className="h-4 w-4 text-[hsl(var(--brand-gold-500))]" aria-hidden />
              info@ewan.co.in
            </a>
            <p className="mt-2 text-xs text-white/45">India · Southeast Asia · East Asia · Latin America · Africa</p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 lg:max-w-xl lg:justify-end">
            {essentialLinks.map((link) => (
              <FooterNavLink key={link.label} link={link} label={getLinkLabel(link.label)} />
            ))}
          </nav>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 border-t border-white/10 pt-5 sm:gap-6">
          {certifications.map((cert) => (
            <img
              key={cert.name}
              src={cert.src}
              alt={cert.alt}
              loading="lazy"
              className="h-7 w-auto max-w-[72px] object-contain brightness-0 invert opacity-75 sm:h-8 sm:max-w-[84px]"
            />
          ))}
          <span className="text-[11px] font-medium text-white/45">MSAMB Empanelled</span>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
          <p className="text-xs text-white/45">{t("footer.rights")}</p>
          <div className="flex flex-wrap gap-2">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/70 transition hover:border-[hsl(var(--brand-gold-500)/0.4)] hover:text-[hsl(var(--brand-gold-500))]"
              >
                <Icon className="h-4 w-4" aria-hidden />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
