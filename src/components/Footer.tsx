import { ArrowUpRight, ChevronDown, Mail, MapPin } from "lucide-react";
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
      { label: "Blog & Insights", href: "/insights" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "Ask Soham - 15 Min Free", href: "/ask-soham" },
      { label: "Download the 2026 Market Entry Audit", href: "/market-entry-audit" },
      { label: "Contact Us", href: "/contact" },
      { label: "Bhashik Skill Development", href: "https://bhashikskill.co.in", external: true },
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

const coverageRegions = ["India", "Southeast Asia", "East Asia", "Latin America", "Africa"];

const linkClass =
  "group inline-flex min-h-[44px] w-full items-center gap-1 text-sm text-[hsl(var(--brand-navy-950)/0.78)] transition-colors hover:text-[hsl(var(--brand-purple-700))] lg:min-h-0 lg:w-auto";

const FooterNavLink = ({ link }: { link: FooterLink }) =>
  link.external ? (
    <a href={link.href} target="_blank" rel="noreferrer" className={linkClass}>
      <span className="flex-1">{link.label}</span>
      <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-45 group-hover:opacity-100" aria-hidden />
    </a>
  ) : (
    <Link to={link.href} className={linkClass}>
      {link.label}
    </Link>
  );

const FooterLinkColumn = ({ title, links }: { title: string; links: FooterLink[] }) => (
  <>
    {/* Mobile accordion */}
    <details className="group border-b border-[hsl(var(--border-light))] lg:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))] [&::-webkit-details-marker]:hidden">
        {title}
        <ChevronDown className="h-4 w-4 shrink-0 text-[hsl(var(--brand-navy-950)/0.45)] transition-transform group-open:rotate-180" />
      </summary>
      <ul className="space-y-0.5 pb-4">
        {links.map((link) => (
          <li key={link.label}>
            <FooterNavLink link={link} />
          </li>
        ))}
      </ul>
    </details>

    {/* Desktop column */}
    <div className="hidden lg:block">
      <h4 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-700))]">{title}</h4>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <FooterNavLink link={link} />
          </li>
        ))}
      </ul>
    </div>
  </>
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
    if (label === "Blog & Insights") return t("footer.blogInsights");
    if (label === "Contact Us") return t("footer.contactUs");
    if (label === "Case Studies") return t("footer.caseStudies");
    if (label === "SANO") return t("footer.sano");
    if (label === "Privacy Policy") return t("footer.privacyPolicy");
    if (label === "Ask Soham - 15 Min Free") return t("footer.askSohamCta");
    if (label === "Download the 2026 Market Entry Audit") return t("footer.marketEntryAudit");
    if (label === "Bhashik Skill Development") return t("footer.bhashikSkill");
    return label;
  };

  const columnsWithLabels = navColumns.map((col) => ({
    ...col,
    translatedTitle: getColumnTitle(col.title),
    translatedLinks: col.links.map((link) => ({
      ...link,
      label: getLinkLabel(link.label),
    })),
  }));

  return (
    <footer className="relative overflow-hidden border-t border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] pb-[calc(4.5rem+env(safe-area-inset-bottom,0px))] lg:pb-0">
      {/* Accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-[hsl(var(--brand-purple-700))] via-[hsl(var(--brand-gold-500))] to-[hsl(var(--brand-cyan-500))]" />

      <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.12]" aria-hidden />

      <div className="container relative z-10 mx-auto px-4 py-8 sm:px-6 sm:py-10 lg:py-14">
        {/* Brand + links */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block">
              <img src="/logo.png" alt="EWAN Business Solutions" className="h-11 w-auto sm:h-14" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[hsl(var(--brand-navy-950)/0.72)]">{t("footer.tagline")}</p>

            <a
              href="mailto:info@ewan.co.in"
              className="mt-5 flex w-full items-center gap-3 rounded-xl border border-[hsl(var(--brand-purple-700)/0.2)] bg-[hsl(var(--brand-purple-700)/0.06)] px-4 py-3.5 transition hover:border-[hsl(var(--brand-purple-700)/0.35)] hover:bg-[hsl(var(--brand-purple-700)/0.09)] sm:max-w-sm"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                <Mail className="h-5 w-5 text-[hsl(var(--brand-gold-600))]" aria-hidden />
              </span>
              <span className="min-w-0 text-left">
                <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--brand-purple-700))]">
                  {t("footer.emailLabel")}
                </span>
                <span className="block truncate text-sm font-semibold text-[hsl(var(--brand-navy-950))]">info@ewan.co.in</span>
              </span>
            </a>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {coverageRegions.map((region) => (
                <span
                  key={region}
                  className="rounded-full border border-[hsl(var(--border-light))] bg-white px-2.5 py-1 text-[10px] font-semibold text-[hsl(var(--brand-navy-950)/0.65)] sm:text-[11px]"
                >
                  {region}
                </span>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[40px] items-center justify-center rounded-lg border border-[hsl(var(--border-light))] bg-white px-3 text-xs font-semibold text-[hsl(var(--brand-navy-950)/0.75)] transition hover:border-[hsl(var(--brand-purple-700)/0.3)] hover:text-[hsl(var(--brand-purple-700))] sm:min-h-0"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile: accordions in one card */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-white px-4 lg:mt-0 lg:col-span-8 lg:border-0 lg:bg-transparent lg:p-0">
            <div className="lg:grid lg:grid-cols-4 lg:gap-8">
              {columnsWithLabels.map((col) => (
                <FooterLinkColumn key={col.title} title={col.translatedTitle} links={col.translatedLinks} />
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-8 rounded-2xl border border-[hsl(var(--border-light))] bg-white p-5 sm:p-7">
          <p className="mb-5 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-[hsl(var(--brand-navy-950)/0.5)] sm:text-[11px]">
            {t("footer.certificationsLabel")}
          </p>
          <div className="grid grid-cols-3 place-items-center gap-4 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-8">
            {certifications.map((cert) => (
              <img
                key={cert.name}
                src={cert.src}
                alt={cert.alt}
                loading="lazy"
                className="h-8 w-auto max-w-[90px] object-contain sm:h-9 sm:max-w-[110px]"
              />
            ))}
          </div>
          <div className="mt-5 flex flex-col items-center gap-3 border-t border-[hsl(var(--border-light))] pt-5 sm:flex-row sm:justify-center sm:gap-6">
            <span className="rounded-full bg-[hsl(var(--surface-light-50))] px-4 py-2 text-xs font-semibold text-[hsl(var(--brand-navy-950)/0.75)]">
              MSAMB Empanelled
            </span>
            <a
              href="https://bhashikskill.co.in"
              target="_blank"
              rel="noreferrer"
              className="text-center text-xs font-medium text-[hsl(var(--brand-navy-950)/0.6)] transition-colors hover:text-[hsl(var(--brand-purple-700))]"
            >
              {t("footer.bhashikGroup")}
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 flex flex-col gap-3 border-t border-[hsl(var(--border-light))] pt-6 text-center text-xs text-[hsl(var(--brand-navy-950)/0.55)] sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:text-left sm:text-sm">
          <p>{t("footer.rights")}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:justify-end">
            <Link to="/privacy-policy" className="font-semibold text-[hsl(var(--brand-navy-950)/0.7)] hover:text-[hsl(var(--brand-purple-700))]">
              {t("footer.privacyPolicy")}
            </Link>
            <a href="mailto:info@ewan.co.in" className="font-semibold text-[hsl(var(--brand-navy-950)/0.7)] hover:text-[hsl(var(--brand-purple-700))]">
              info@ewan.co.in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
