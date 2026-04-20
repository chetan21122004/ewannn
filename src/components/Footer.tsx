import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const navColumns = [
  {
    title: "Services",
    links: ["Market Entry", "Language & Localization", "Industries", "Case Studies"],
  },
  {
    title: "Company",
    links: ["About Us", "Founders", "Media", "Join Us"],
  },
  {
    title: "Contact",
    links: ["Ask Soham — 15 Min Free", "hello@ewan.com", "+91 · India HQ"],
  },
  {
    title: "Explore",
    links: ["Arogya Yatri", "Case Studies", "Join Us", "Privacy Policy"],
  },
];

const certifications = [
  { name: "ISO 9001:2015 Certified", src: "/allLogos/ISO-9001.png", alt: "ISO 9001:2015 certification logo" },
  { name: "CITLoB Member", src: "/allLogos/CITLoB-logo-2023.jpg", alt: "CITLoB logo" },
  { name: "Bhashini Initiative Partner", src: "/allLogos/Bhashini-Logo.png", alt: "Bhashini initiative logo" },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/EwanBusinessSolutions?mibextid=ZbWKwL" },
  { label: "X", href: "https://x.com/ewanbusiness" },
  { label: "Instagram", href: "https://www.instagram.com/ewanbizsolution/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/ewan-business-solutions/" },
  { label: "YouTube", href: "https://www.youtube.com/@EWAN-SSK" },
];

const Footer = () => {
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

      <div className="container relative z-10 mx-auto px-6 py-16 lg:py-20">
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
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[hsl(var(--brand-purple-700))] to-[hsl(var(--brand-purple-500))] px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:brightness-110"
            >
              Book Strategy Call
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <div className="mb-12 grid gap-10 border-y border-[hsl(var(--surface-glass)/0.1)] py-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <motion.img
              src="/logo.png"
              alt="EWAN Business Solutions logo"
              className="mb-3 h-16 w-auto object-contain"
              whileHover={{ scale: 1.03 }}
            />
            <p className="max-w-sm text-sm leading-relaxed text-foreground/72">
              Cross-Border Market Partner for India & the Emerging World
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[hsl(var(--surface-glass)/0.2)] bg-[hsl(var(--surface-glass)/0.04)] px-3 py-1.5 text-xs font-medium text-foreground/82 transition-colors hover:border-[hsl(var(--brand-purple-500)/0.5)] hover:text-[hsl(var(--brand-purple-500))]"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {navColumns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-500)/0.88)]">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-foreground/70 transition-colors hover:text-[hsl(var(--brand-purple-500))]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}


        </div>

        <div className="mb-8">
          <p className="mb-6 text-center text-xs uppercase tracking-[0.28em] text-foreground/58">Certifications & Ecosystem</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {certifications.map((cert) => (
              <motion.div
                key={cert.name}
                whileHover={{ opacity: 1, y: -2 }}
                className="flex items-center justify-center  duration-300 "
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
              className="text-xs text-foreground/52 transition-colors duration-300 hover:text-[hsl(var(--brand-purple-500))]"
            >
              Part of the Ewan Group — Bhashik Skill Development
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[hsl(var(--surface-glass)/0.1)] pt-6 text-xs text-foreground/56 sm:flex-row">
          <span>© 2024 COSIO. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <a href="#" className="transition-colors hover:text-[hsl(var(--brand-purple-500))]">Privacy</a>
            <a href="#" className="transition-colors hover:text-[hsl(var(--brand-purple-500))]">Terms</a>
            <a href="#" className="transition-colors hover:text-[hsl(var(--brand-purple-500))]">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
