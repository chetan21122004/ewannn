import { ArrowUpRight, ChevronDown, Linkedin, Mail, Twitter, Youtube, type LucideIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SITE_LOGO, SITE_LOGO_ALT } from "@/lib/site";
import { scrollToPageTop } from "@/lib/scrollToTop";
import type { MouseEvent } from "react";

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
      { label: "Case Study", href: "/case-study" },
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
      { label: "Newsletter", href: "/newsletter" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "Ask Soham - 15 Min Free", href: "/ask-soham" },
      { label: "Download the 2026 Market Entry Audit", href: "/market-entry-audit" },
      { label: "Contact Us", href: "/contact" },
      { label: "Vaani Skills", href: "https://bhashikskill.co.in", external: true },
    ],
  },
];

const socialLinks: Array<{ label: string; href: string; Icon: LucideIcon }> = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/ewan-business-solutions/", Icon: Linkedin },
  { label: "YouTube", href: "https://www.youtube.com/@EWAN-SSK", Icon: Youtube },
  { label: "X", href: "https://x.com/ewanbusiness", Icon: Twitter },
];

const coverageRegions = ["India", "Southeast Asia", "East Asia", "Latin America", "Africa"];

const linkClass =
  "group inline-flex min-h-[44px] w-full items-start gap-1 text-sm leading-snug text-white/80 transition-colors hover:text-[hsl(var(--brand-gold-500))] lg:min-h-0 lg:py-0.5";

const FooterNavLink = ({ link }: { link: FooterLink }) =>
  link.external ? (
    <a href={link.href} target="_blank" rel="noreferrer" className={linkClass}>
      <span className="flex-1">{link.label}</span>
      <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 opacity-45 group-hover:opacity-100" aria-hidden />
    </a>
  ) : (
    <Link to={link.href} className={linkClass}>
      {link.label}
    </Link>
  );

const FooterLinkColumn = ({ title, links }: { title: string; links: FooterLink[] }) => (
  <>
    <details className="group border-b border-white/10 lg:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-gold-500))] [&::-webkit-details-marker]:hidden">
        {title}
        <ChevronDown className="h-4 w-4 shrink-0 text-white/45 transition-transform group-open:rotate-180" />
      </summary>
      <ul className="space-y-0.5 pb-3">
        {links.map((link) => (
          <li key={link.label}>
            <FooterNavLink link={link} />
          </li>
        ))}
      </ul>
    </details>

    <div className="hidden min-w-0 lg:block">
      <h4 className="mb-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[hsl(var(--brand-gold-500))]">{title}</h4>
      <ul className="space-y-2.5">
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
  const { pathname } = useLocation();

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
    if (label === "Newsletter") return "Newsletter";
    if (label === "Contact Us") return t("footer.contactUs");
    if (label === "Case Study") return t("footer.caseStudy");
    if (label === "SANO") return t("footer.sano");
    if (label === "Privacy Policy") return t("footer.privacyPolicy");
    if (label === "Ask Soham - 15 Min Free") return t("footer.askSohamCta");
    if (label === "Download the 2026 Market Entry Audit") return t("footer.marketEntryAudit");
    if (label === "Vaani Skills") return t("footer.bhashikSkill");
    return label;
  };

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      event.preventDefault();
      scrollToPageTop("smooth");
    }
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
    <footer className="relative overflow-hidden border-t border-white/10 bg-[hsl(var(--brand-navy-950))] pb-[calc(4.5rem+env(safe-area-inset-bottom,0px))] text-white lg:pb-0">
      <div className="h-1 w-full bg-gradient-to-r from-[hsl(var(--brand-purple-700))] via-[hsl(var(--brand-gold-500))] to-[hsl(var(--brand-cyan-500))]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "url('/bg-blobs/abstract-background-purple-dark-blue-gradient-wave-modern-background-combination-curve-free-vector.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />

      <div className="container relative z-10 mx-auto px-4 py-8 sm:px-6 sm:py-10 lg:py-12">
        <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-8 xl:gap-10">
          <div className="lg:col-span-4">
            <Link
              to="/"
              onClick={handleLogoClick}
              className="inline-flex items-center rounded-xl border border-white/12 bg-white px-3.5 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition hover:border-[hsl(var(--brand-gold-500)/0.4)]"
            >
              <img
                src={SITE_LOGO}
                alt={SITE_LOGO_ALT}
                className="h-9 w-auto max-w-[148px] object-contain sm:h-10 sm:max-w-[160px]"
              />
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">{t("footer.tagline")}</p>

            <a
              href="mailto:info@ewan.co.in"
              className="mt-4 flex w-full items-center gap-3 rounded-xl border border-white/12 bg-white/5 px-4 py-3 transition hover:border-[hsl(var(--brand-gold-500)/0.4)] hover:bg-white/8 sm:max-w-sm"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[hsl(var(--brand-gold-500)/0.15)]">
                <Mail className="h-4 w-4 text-[hsl(var(--brand-gold-500))]" aria-hidden />
              </span>
              <span className="min-w-0 text-left">
                <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--brand-gold-500))]">
                  {t("footer.emailLabel")}
                </span>
                <span className="block truncate text-sm font-semibold text-white">info@ewan.co.in</span>
              </span>
            </a>

            <p className="mt-3 text-[11px] leading-relaxed text-white/45">
              {coverageRegions.join(" · ")}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/12 bg-white/5 text-white/75 transition hover:border-[hsl(var(--brand-gold-500)/0.45)] hover:bg-[hsl(var(--brand-gold-500)/0.12)] hover:text-[hsl(var(--brand-gold-500))]"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 lg:col-span-8 lg:mt-0">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-3 sm:px-4 lg:border-0 lg:bg-transparent lg:p-0">
              <div className="lg:grid lg:grid-cols-4 lg:items-start lg:gap-5 xl:gap-7">
                {columnsWithLabels.map((col) => (
                  <FooterLinkColumn
                    key={col.title}
                    title={col.translatedTitle}
                    links={col.translatedLinks}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-2 border-t border-white/10 pt-5 text-center text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:text-left sm:text-sm">
          <p>{t("footer.rights")}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:justify-end">
            <Link to="/privacy-policy" className="font-semibold text-white/70 hover:text-[hsl(var(--brand-gold-500))]">
              {t("footer.privacyPolicy")}
            </Link>
            <a href="mailto:info@ewan.co.in" className="font-semibold text-white/70 hover:text-[hsl(var(--brand-gold-500))]">
              info@ewan.co.in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
