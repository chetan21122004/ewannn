import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

type NavItem = {
  labelKey: string;
  href: string;
  external?: boolean;
};

type NavGroup = {
  labelKey: string;
  href: string;
  links?: NavItem[];
};

const navGroups: NavGroup[] = [
  {
    labelKey: "nav.marketEntry",
    href: "/market-entry",
    links: [
      { labelKey: "navMenu.marketEntry.indiaEntryForForeign", href: "/market-entry" },
      { labelKey: "navMenu.marketEntry.indianGoingAbroad", href: "/market-entry" },
      { labelKey: "navMenu.marketEntry.liaisoning", href: "/liaisoning-facilitation" },
      { labelKey: "navMenu.marketEntry.marketResearch", href: "/market-research" },
      { labelKey: "navMenu.marketEntry.importExport", href: "/import-export" },
      { labelKey: "navMenu.marketEntry.marketAudit", href: "/market-entry-audit" },
      { labelKey: "navMenu.marketEntry.arogyaYatri", href: "https://www.arogyayatri.com/", external: true },
      { labelKey: "navMenu.marketEntry.culturalKnowHow", href: "https://bhashikskill.co.in", external: true },
    ],
  },
  {
    labelKey: "nav.languageLocalization",
    href: "/language-localization",
    links: [
      { labelKey: "navMenu.language.translation", href: "/language-localization" },
      { labelKey: "navMenu.language.interpretation", href: "/language-localization" },
      { labelKey: "navMenu.language.localization", href: "/language-localization" },
      { labelKey: "navMenu.language.transcription", href: "/language-localization" },
      { labelKey: "navMenu.language.voiceover", href: "/language-localization" },
      { labelKey: "navMenu.language.proofreading", href: "/language-localization" },
      { labelKey: "navMenu.language.globalTalkies", href: "/global-talkies" },
      { labelKey: "navMenu.language.learnLanguage", href: "https://bhashikskill.co.in", external: true },
    ],
  },
  {
    labelKey: "nav.aboutUs",
    href: "/about-us",
    links: [
      { labelKey: "navMenu.about.aboutEwan", href: "/about-us#about-ewan" },
      { labelKey: "navMenu.about.founders", href: "/about-us#founders" },
      { labelKey: "navMenu.about.orientalFlock", href: "/about-us#oriental-flock" },
      { labelKey: "navMenu.about.partners", href: "/about-us#partners" },
      { labelKey: "navMenu.about.joinUs", href: "/join-us" },
      { labelKey: "navMenu.about.caseStudies", href: "/about-us#case-studies" },
      { labelKey: "navMenu.about.testimonials", href: "/about-us#testimonials" },
    ],
  },
  {
    labelKey: "nav.media",
    href: "/media",
    links: [
      { labelKey: "navMenu.media.languageGazette", href: "/language-gazette" },
      { labelKey: "navMenu.media.blogInsights", href: "/insights" },
      { labelKey: "navMenu.media.videos", href: "/media#video-insights" },
      { labelKey: "navMenu.media.press", href: "/media#press" },
    ],
  },
  {
    labelKey: "nav.industries",
    href: "/industries",
  },
  {
    labelKey: "nav.contactUs",
    href: "/contact",
  },
];

const languageOptions = [
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" },
  { code: "ja", label: "日本語" },
];

const DropdownLinkItem = ({ item, onClick, t }: { item: NavItem; onClick?: () => void; t: (key: string) => string }) =>
  item.external ? (
    <a
      className="block rounded-lg px-3 py-2 text-sm text-foreground/80 transition hover:bg-white/10 hover:text-white"
      href={item.href}
      target="_blank"
      rel="noreferrer"
      onClick={onClick}
    >
      {t(item.labelKey)}
    </a>
  ) : (
    <Link
      className="block rounded-lg px-3 py-2 text-sm text-foreground/80 transition hover:bg-white/10 hover:text-white"
      to={item.href}
      onClick={onClick}
    >
      {t(item.labelKey)}
    </Link>
  );

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-glass">
      <div className="container mx-auto flex items-center justify-between gap-4 px-6 py-3">

        {/* Logo */}
        <Link to="/" className="shrink-0">
          <img src="/logo.png" alt="Ewan Business Solutions" className="h-12 w-auto object-contain" />
        </Link>

        <div className="hidden lg:flex items-center gap-1 rounded-xl border border-white/15 bg-white/5 px-2 py-1.5 backdrop-blur-md">
          {navGroups.map((group) => (
            <div key={group.labelKey} className="group relative">
              <Link
                to={group.href}
                className="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-medium text-foreground/85 transition hover:bg-white/10 hover:text-white group-hover:bg-white/10 group-focus-within:bg-white/10"
              >
                <span>{t(group.labelKey)}</span>
                {group.links ? <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180 group-focus-within:rotate-180" /> : null}
              </Link>

              {group.links ? (
                <div className="pointer-events-none invisible absolute left-0 top-full z-20 w-[34rem] translate-y-1 pt-2 opacity-0 transition-all duration-150 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <div className="rounded-xl border border-white/15 bg-[hsl(var(--surface-2)/0.96)] p-2 shadow-[0_18px_40px_hsl(var(--surface-1)/0.5)] backdrop-blur-sm">
                    <div className="grid grid-flow-col grid-rows-4 gap-1">
                      {group.links.map((item) => (
                        <DropdownLinkItem key={`${group.labelKey}-${item.labelKey}`} item={item} t={t} />
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-1 rounded-full border border-white/15 p-1">
            {languageOptions.map(({ code, label }) => (
              <button
                key={code}
                type="button"
                onClick={() => void i18n.changeLanguage(code)}
                className={cn(
                  "rounded-full px-2.5 py-1 text-xs transition",
                  i18n.resolvedLanguage?.startsWith(code)
                    ? "bg-white/20 text-white"
                    : "text-foreground/70 hover:text-white",
                )}
              >
                {label}
              </button>
            ))}
          </div>
          <Link
            to="/ask-soham"
            className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-4 py-2 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
          >
            <MessageCircle className="h-4 w-4" />
            {t("nav.askSoham")}
          </Link>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          type="button"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 px-6 py-5 space-y-4">
          {navGroups.map((group) => (
            <div key={group.labelKey}>
              <Link
                to={group.href}
                onClick={closeMobile}
                className="mb-1 block text-xs font-semibold uppercase tracking-widest text-[hsl(var(--brand-gold-500)/0.9)] transition hover:text-[hsl(var(--brand-gold-500))]"
              >
                {t(group.labelKey)}
              </Link>
              {group.links ? (
                <div className="ml-1 space-y-0.5 border-l border-white/5 pl-1">
                  {group.links.map((item) => (
                    <DropdownLinkItem key={`mobile-${group.labelKey}-${item.labelKey}`} item={item} onClick={closeMobile} t={t} />
                  ))}
                </div>
              ) : null}
            </div>
          ))}

          <Link
            to="/ask-soham"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-4 py-2 text-sm font-semibold text-[hsl(var(--brand-navy-950))]"
            onClick={closeMobile}
          >
            <MessageCircle className="h-4 w-4" />
            {t("nav.askSoham")}
          </Link>
        </div>
      )}

      <Link
        to="/ask-soham"
        className="fixed bottom-4 right-4 z-[60] inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-4 py-2 text-xs font-semibold text-[hsl(var(--brand-navy-950))] shadow-lg lg:hidden"
      >
        <MessageCircle className="h-3.5 w-3.5" />
        {t("nav.askSoham")}
      </Link>
    </nav>
  );
};

export default Navbar;
