import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
      { label: "Import, Procurement & Export", href: "/import-procurement-export" },
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
      { label: "Ask Soham — 15 Min Free", href: "/ask-soham" },
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
  return (
    <footer className="relative overflow-hidden border-t border-[hsl(var(--surface-glass)/0.12)] theme-section-dark">
      {/* Background glows */}
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

      <div className="container relative z-10 mx-auto px-6 py-16 lg:py-20">

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 rounded-3xl border border-[hsl(var(--surface-glass)/0.2)] bg-gradient-to-r from-[hsl(var(--brand-purple-700)/0.3)] via-[hsl(var(--brand-purple-500)/0.14)] to-[hsl(var(--brand-cyan-500)/0.14)] p-6 shadow-[0_18px_40px_hsl(var(--surface-1)/0.42)] backdrop-blur-sm lg:p-8"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.26em] text-[hsl(var(--brand-purple-500)/0.92)]">
                Ready for Cross-Border Execution
              </p>
              <h3 className="text-2xl font-serif font-bold text-foreground sm:text-3xl">
                Enter new markets with a team that has already operated inside the room.
              </h3>
            </div>
            <Link
              to="/ask-soham"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[hsl(var(--brand-purple-700))] to-[hsl(var(--brand-purple-500))] px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:brightness-110 shrink-0"
            >
              Book a Free Strategy Call
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>

        {/* Main footer grid */}
        <div className="mb-12 grid gap-10 border-y border-[hsl(var(--surface-glass)/0.1)] py-10 lg:grid-cols-12">

          {/* Brand column */}
          <div className="lg:col-span-4">
            <motion.img
              src="/logo.png"
              alt="EWAN Business Solutions logo"
              className="mb-3 h-16 w-auto object-contain"
              whileHover={{ scale: 1.03 }}
            />
            <p className="mb-1 max-w-sm text-sm leading-relaxed text-foreground/72">
              Cross-Border Market Partner for India & the Emerging World
            </p>
            <a
              href="mailto:info@ewan.co.in"
              className="text-sm text-[hsl(var(--brand-gold-500)/0.9)] transition-colors hover:text-[hsl(var(--brand-gold-500))]"
            >
              info@ewan.co.in
            </a>

            {/* Social links */}
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

          {/* Nav columns */}
          {navColumns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-gold-500)/0.88)]">
                {col.title === "Services"
                  ? t("footer.services")
                  : col.title === "Company"
                    ? t("footer.company")
                    : col.title === "Media"
                      ? t("footer.media")
                      : col.title === "Quick Links"
                        ? t("footer.quickLinks")
                        : col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <FooterNavLink
                      link={{
                        ...link,
                        label:
                          link.label === "Industries"
                            ? t("nav.industries")
                            : link.label === "About Us"
                              ? t("footer.aboutUs")
                              : link.label === "Join Us"
                                ? t("footer.joinUs")
                                : link.label === "Media Hub"
                                  ? t("footer.mediaHub")
                                  : link.label === "The Language Gazette"
                                    ? t("footer.languageGazette")
                                    : link.label === "Contact Us"
                                      ? t("footer.contactUs")
                                      : link.label,
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications & ecosystem */}
        <div className="mb-8">
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
              Part of the Ewan Group — Bhashik Skill Development
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[hsl(var(--surface-glass)/0.1)] pt-6 text-xs text-foreground/56 sm:flex-row">
          <span>{t("footer.rights")}</span>
          <div className="flex items-center gap-5">
            <a href="#" className="transition-colors hover:text-[hsl(var(--brand-gold-500))]">{t("footer.privacy")}</a>
            <a href="#" className="transition-colors hover:text-[hsl(var(--brand-gold-500))]">{t("footer.terms")}</a>
            <a href="#" className="transition-colors hover:text-[hsl(var(--brand-gold-500))]">{t("footer.cookies")}</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
