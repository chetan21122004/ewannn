import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Globe2, Mail, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

/* ─── Footer Nav Columns ─────────────────────────────────────────────── */
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
      { label: "Market Entry Audit", href: "/market-entry-audit" },
      { label: "Contact Us", href: "/contact" },
      { label: "Bhashik Skill Development ↗", href: "https://bhashikskill.co.in", external: true },
    ],
  },
];

/* ─── Certifications ─────────────────────────────────────────────────── */
const certifications = [
  { name: "ISO 9001:2015 Certified", src: "/allLogos/ISO-9001.png", alt: "ISO 9001:2015 certification logo" },
  { name: "CITLoB Member", src: "/allLogos/CITLoB-logo-2023.jpg", alt: "CITLoB logo" },
  { name: "Bhashini Initiative Partner", src: "/allLogos/Bhashini-Logo.png", alt: "Bhashini initiative logo" },
];

/* ─── Social Links ───────────────────────────────────────────────────── */
const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/EwanBusinessSolutions?mibextid=ZbWKwL" },
  { label: "X", href: "https://x.com/ewanbusiness" },
  { label: "Instagram", href: "https://www.instagram.com/ewanbizsolution/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/ewan-business-solutions/" },
  { label: "YouTube", href: "https://www.youtube.com/@EWAN-SSK" },
];

const trustPills = ["125+ Languages", "250+ Clients", "60,000+ Hours"];

const coverageRegions = ["India", "Southeast Asia", "East Asia", "Latin America", "Africa"];

/* ─── Reusable footer link renderer ─────────────────────────────────── */
const FooterNavLink = ({ link }: { link: FooterLink }) =>
  link.external ? (
    <a
      href={link.href}
      target="_blank"
      rel="noreferrer"
      className="text-sm text-foreground/70 transition-colors hover:text-[hsl(var(--brand-gold-500))]"
    >
      {link.label}
    </a>
  ) : (
    <Link
      to={link.href}
      className="text-sm text-foreground/70 transition-colors hover:text-[hsl(var(--brand-gold-500))]"
    >
      {link.label}
    </Link>
  );

/* ─── Footer Component ───────────────────────────────────────────────── */
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
    return label;
  };

  return (
    <footer className="relative overflow-hidden border-t border-[hsl(var(--surface-glass)/0.12)] theme-section-dark">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 14% 18%, hsl(var(--brand-purple-500) / 0.12) 0%, transparent 36%),
            radial-gradient(circle at 84% 78%, hsl(var(--brand-cyan-500) / 0.1) 0%, transparent 38%),
            radial-gradient(circle at 50% 12%, hsl(var(--surface-glass) / 0.08) 0%, transparent 45%)
          `,
        }}
      />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[hsl(var(--brand-purple-500)/0.12)] blur-3xl" />

      <div className="container relative z-10 mx-auto px-6 py-14 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 rounded-3xl border border-[hsl(var(--surface-glass)/0.22)] bg-gradient-to-br from-[hsl(var(--brand-purple-700)/0.32)] via-[hsl(var(--brand-purple-500)/0.14)] to-[hsl(var(--brand-cyan-500)/0.14)] p-6 shadow-[0_20px_45px_hsl(var(--surface-1)/0.42)] backdrop-blur-sm lg:p-8"
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-[hsl(var(--brand-purple-500)/0.92)]">
                Ready for Cross-Border Execution
              </p>
              <h3 className="text-2xl font-serif font-bold leading-tight text-foreground sm:text-3xl">
                Enter new markets with a team that has already operated inside the room.
              </h3>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {trustPills.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-[hsl(var(--surface-glass)/0.28)] bg-[hsl(var(--surface-glass)/0.08)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground/78"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2.5 sm:flex-row lg:flex-col">
              <Link
                to="/ask-soham"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[hsl(var(--brand-purple-700))] to-[hsl(var(--brand-purple-500))] px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:brightness-110"
              >
                Book a Free Strategy Call
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[hsl(var(--surface-glass)/0.28)] bg-[hsl(var(--surface-glass)/0.08)] px-6 py-3 text-sm font-semibold text-foreground/86 transition-colors hover:border-[hsl(var(--brand-gold-500)/0.5)] hover:text-[hsl(var(--brand-gold-500))]"
              >
                Speak With Our Team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>

        <div className="mb-12 grid gap-10 lg:grid-cols-12">
          <div className="rounded-3xl border border-[hsl(var(--surface-glass)/0.16)] bg-[hsl(var(--surface-glass)/0.05)] p-6 lg:col-span-4 lg:p-7">
            <motion.img src="/logo.png" alt="EWAN Business Solutions logo" className="mb-4 h-16 w-auto object-contain" whileHover={{ scale: 1.03 }} />

            <p className="mb-4 max-w-sm text-sm leading-relaxed text-foreground/74">
              Cross-Border Market Partner for India & the Emerging World
            </p>

            <a
              href="mailto:info@ewan.co.in"
              className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--surface-glass)/0.2)] bg-[hsl(var(--surface-glass)/0.06)] px-4 py-2 text-sm text-[hsl(var(--brand-gold-500)/0.92)] transition-colors hover:text-[hsl(var(--brand-gold-500))]"
            >
              <Mail className="h-4 w-4" />
              info@ewan.co.in
            </a>

            <div className="mt-6 grid gap-2">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-foreground/55">
                <Globe2 className="h-3.5 w-3.5" />
                Operational Regions
              </span>
              <p className="text-sm text-foreground/72">{coverageRegions.join(" · ")}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[hsl(var(--surface-glass)/0.2)] bg-[hsl(var(--surface-glass)/0.04)] px-3 py-1.5 text-xs font-medium text-foreground/82 transition-colors hover:border-[hsl(var(--brand-gold-500)/0.5)] hover:text-[hsl(var(--brand-gold-500))]"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[hsl(var(--surface-glass)/0.16)] bg-[hsl(var(--surface-glass)/0.04)] p-6 lg:col-span-8 lg:p-7">
            <div className="mb-6 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[hsl(var(--brand-gold-500)/0.86)]">
              <ShieldCheck className="h-4 w-4" />
              Trusted Navigation
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {navColumns.map((col) => (
                <div key={col.title}>
                  <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-gold-500)/0.88)]">
                    {getColumnTitle(col.title)}
                  </h4>
                  <ul className="space-y-2.5">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <FooterNavLink
                          link={{
                            ...link,
                            label: getLinkLabel(link.label),
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-8 rounded-3xl border border-[hsl(var(--surface-glass)/0.14)] bg-[hsl(var(--surface-glass)/0.03)] p-6 lg:p-8">
          <p className="mb-6 text-center text-xs uppercase tracking-[0.28em] text-foreground/58">
            Certifications & Ecosystem
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {certifications.map((cert) => (
              <motion.div
                key={cert.name}
                whileHover={{ opacity: 1, y: -2 }}
                className="flex items-center justify-center duration-300"
              >
                <img
                  src={cert.src}
                  alt={cert.alt}
                  loading="lazy"
                  className="h-8 w-auto max-w-[130px] object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
                    if (fallback) fallback.style.display = "inline";
                  }}
                />
                <span style={{ display: "none" }} className="text-xs font-medium text-foreground/70">
                  {cert.name}
                </span>
              </motion.div>
            ))}
            <span className="h-4 w-px bg-[hsl(var(--surface-glass)/0.1)] hidden md:block" aria-hidden />
            <a
              href="https://bhashikskill.co.in"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-foreground/52 transition-colors duration-300 hover:text-[hsl(var(--brand-gold-500))]"
            >
              Part of the Ewan Group - Bhashik Skill Development
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[hsl(var(--surface-glass)/0.1)] pt-6 text-xs text-foreground/56 sm:flex-row">
          <span>{t("footer.rights")}</span>
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="rounded-full border border-[hsl(var(--surface-glass)/0.18)] bg-[hsl(var(--surface-glass)/0.04)] px-3 py-1.5 transition-colors hover:border-[hsl(var(--brand-gold-500)/0.38)] hover:text-[hsl(var(--brand-gold-500))]"
            >
              {t("footer.privacy")}
            </a>
            <a
              href="#"
              className="rounded-full border border-[hsl(var(--surface-glass)/0.18)] bg-[hsl(var(--surface-glass)/0.04)] px-3 py-1.5 transition-colors hover:border-[hsl(var(--brand-gold-500)/0.38)] hover:text-[hsl(var(--brand-gold-500))]"
            >
              {t("footer.terms")}
            </a>
            <a
              href="#"
              className="rounded-full border border-[hsl(var(--surface-glass)/0.18)] bg-[hsl(var(--surface-glass)/0.04)] px-3 py-1.5 transition-colors hover:border-[hsl(var(--brand-gold-500)/0.38)] hover:text-[hsl(var(--brand-gold-500))]"
            >
              {t("footer.cookies")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
