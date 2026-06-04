import { useEffect, useState, type MouseEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import MobileBottomNav from "@/components/MobileBottomNav";

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

type DesktopNavItem = {
  labelKey: string;
  href: string;
  external?: boolean;
};

type DesktopNavGroup = {
  labelKey: string;
  href: string;
  links?: DesktopNavItem[];
};

const mobileNavGroups: NavGroup[] = [
  {
    labelKey: "nav.marketEntry",
    href: "/market-entry",
    links: [
      {
        labelKey: "navMenu.marketEntry.indiaEntryForForeign",
        href: "/market-entry#india-entry-foreign-companies",
      },
      {
        labelKey: "navMenu.marketEntry.indianGoingAbroad",
        href: "/market-entry#indian-companies-going-abroad",
      },
      { labelKey: "navMenu.marketEntry.liaisoning", href: "/liaisoning-facilitation" },
      { labelKey: "navMenu.marketEntry.marketResearch", href: "/market-research" },
      { labelKey: "navMenu.marketEntry.importExport", href: "/import-export" },
      { labelKey: "navMenu.marketEntry.sano", href: "https://www.arogyayatri.com/", external: true },
      { labelKey: "navMenu.marketEntry.culturalKnowHow", href: "https://bhashikskill.co.in", external: true },
    ],
  },
  {
    labelKey: "nav.languageLocalization",
    href: "/language-localization",
    links: [
      { labelKey: "navMenu.language.translation", href: "/language-localization#translation" },
      { labelKey: "navMenu.language.interpretation", href: "/language-localization#interpretation" },
      { labelKey: "navMenu.language.localization", href: "/language-localization#localization" },
      { labelKey: "navMenu.language.transcription", href: "/language-localization#transcription" },
      { labelKey: "navMenu.language.voiceover", href: "/language-localization#voiceover" },
      { labelKey: "navMenu.language.proofreading", href: "/language-localization#proofreading" },
      { labelKey: "navMenu.language.globalTalkies", href: "/global-talkies" },
      { labelKey: "navMenu.language.learnLanguage", href: "https://bhashikskill.co.in", external: true },
    ],
  },
  {
    labelKey: "nav.aboutUs",
    href: "/about-us",
    links: [
      { labelKey: "navMenu.about.aboutEwan", href: "/about-us#about-ewan" },
      { labelKey: "navMenu.about.founders", href: "/about-us#the-founders" },
      { labelKey: "navMenu.about.orientalFlock", href: "/about-us#oriental-flock" },
      { labelKey: "navMenu.about.partners", href: "/about-us#our-partners" },
      { labelKey: "navMenu.about.joinUs", href: "/join-us" },
      { labelKey: "navMenu.about.caseStudies", href: "/media#case-study" },
      { labelKey: "navMenu.about.testimonials", href: "/#testimonials" },
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
    labelKey: "nav.contactUs",
    href: "/contact",
  },
];

const desktopNavGroups: DesktopNavGroup[] = [
  {
    labelKey: "nav.marketEntry",
    href: "/market-entry",
    links: [
      {
        labelKey: "navMenu.marketEntry.indiaEntryForForeign",
        href: "/market-entry#india-entry-foreign-companies",
      },
      {
        labelKey: "navMenu.marketEntry.indianGoingAbroad",
        href: "/market-entry#indian-companies-going-abroad",
      },
      { labelKey: "navMenu.marketEntry.liaisoning", href: "/liaisoning-facilitation" },
      { labelKey: "navMenu.marketEntry.marketResearch", href: "/market-research" },
      { labelKey: "navMenu.marketEntry.importExport", href: "/import-export" },
      { labelKey: "navMenu.marketEntry.sano", href: "https://www.arogyayatri.com/", external: true },
      { labelKey: "navMenu.marketEntry.culturalKnowHow", href: "https://bhashikskill.co.in", external: true },
    ],
  },
  {
    labelKey: "nav.languageLocalization",
    href: "/language-localization",
    links: [
      { labelKey: "navMenu.language.translation", href: "/language-localization#translation" },
      { labelKey: "navMenu.language.interpretation", href: "/language-localization#interpretation" },
      { labelKey: "navMenu.language.localization", href: "/language-localization#localization" },
      { labelKey: "navMenu.language.transcription", href: "/language-localization#transcription" },
      { labelKey: "navMenu.language.voiceover", href: "/language-localization#voiceover" },
      { labelKey: "navMenu.language.proofreading", href: "/language-localization#proofreading" },
      { labelKey: "navMenu.language.globalTalkies", href: "/global-talkies" },
      { labelKey: "navMenu.language.learnLanguage", href: "https://bhashikskill.co.in", external: true },
    ],
  },
  {
    labelKey: "nav.aboutUs",
    href: "/about-us",
    links: [
      { labelKey: "navMenu.about.aboutEwan", href: "/about-us#about-ewan" },
      { labelKey: "navMenu.about.founders", href: "/about-us#the-founders" },
      { labelKey: "navMenu.about.orientalFlock", href: "/about-us#oriental-flock" },
      { labelKey: "navMenu.about.partners", href: "/about-us#our-partners" },
      { labelKey: "navMenu.about.joinUs", href: "/join-us" },
      { labelKey: "navMenu.about.caseStudies", href: "/media#case-study" },
      { labelKey: "navMenu.about.testimonials", href: "/#testimonials" },
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
      className="block rounded-lg px-3 py-2.5 text-sm text-[hsl(var(--brand-navy-950)/0.88)] transition hover:bg-[hsl(var(--surface-light-100))]"
      href={item.href}
      target="_blank"
      rel="noreferrer"
      onClick={onClick}
    >
      {t(item.labelKey)}
    </a>
  ) : (
    <Link
      className="block rounded-lg px-3 py-2.5 text-sm text-[hsl(var(--brand-navy-950)/0.88)] transition hover:bg-[hsl(var(--surface-light-100))]"
      to={item.href}
      onClick={onClick}
    >
      {t(item.labelKey)}
    </Link>
  );

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const closeMobile = () => setMobileOpen(false);

  const isDesktopGroupActive = (href: string) => {
    const base = href.split("#")[0] ?? href;
    if (base === "/") return pathname === "/";
    return pathname === base || pathname.startsWith(`${base}/`);
  };

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    closeMobile();
  };

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 nav-glass">
        <div className="container mx-auto flex h-14 items-center justify-between gap-3 px-4 lg:h-auto lg:gap-4 lg:px-6 lg:py-3">
          <Link to="/" className="shrink-0" onClick={handleLogoClick}>
            <img src="/logo.png" alt="Ewan Business Solutions" className="h-9 w-auto object-contain lg:h-12" />
          </Link>

          {/* Desktop nav */}
          <div
            className="relative hidden overflow-visible lg:flex items-stretch rounded-2xl border border-[hsl(var(--border-light-strong))] bg-white px-2 py-1.5 shadow-[0_14px_34px_-10px_rgba(15,23,42,0.2)] ring-1 ring-[hsl(var(--brand-navy-950)/0.08)]"
            role="navigation"
            aria-label="Primary"
          >
            {desktopNavGroups.map((group, index) => {
              const active = isDesktopGroupActive(group.href);
              return (
                <div
                  key={group.labelKey}
                  className={cn(
                    "group relative flex items-stretch first:pl-0.5 last:pr-0.5",
                    index > 0 && "border-l border-[hsl(var(--brand-navy-950)/0.07)]",
                  )}
                >
                  <Link
                    to={group.href}
                    className={cn(
                      "inline-flex min-h-[2.75rem] items-center gap-1 rounded-xl px-4 py-2 text-[14px] font-semibold whitespace-nowrap tracking-[0.01em] text-[hsl(var(--brand-navy-950)/0.92)] outline-none transition",
                      "hover:bg-[hsl(var(--surface-light-100))] hover:text-[hsl(var(--brand-navy-950))]",
                      "focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-purple-500)/0.45)] focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                      active && "bg-[hsl(var(--brand-navy-950))] text-white shadow-[0_8px_20px_-12px_rgba(15,23,42,0.85)]",
                    )}
                  >
                    <span>{t(group.labelKey)}</span>
                    {group.links ? (
                      <ChevronDown className="h-[0.95rem] w-[0.95rem] shrink-0 text-[hsl(var(--brand-navy-950)/0.55)] opacity-85 transition-transform duration-200 group-hover:rotate-180 group-hover:opacity-100 group-hover:text-[hsl(var(--brand-navy-950))] group-focus-within:rotate-180 group-focus-within:opacity-100" />
                    ) : null}
                  </Link>

                  {group.links ? (
                    <div className="absolute left-0 top-full z-[80] hidden w-max min-w-[320px] max-w-[min(720px,calc(100vw-3rem))] pt-2 group-hover:block group-focus-within:block">
                      <div className="rounded-xl border border-[hsl(var(--border-light))] bg-white p-3 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.22)] ring-1 ring-[hsl(233_55%_12%/0.04)]">
                        <div
                          className={cn(
                            "grid gap-x-6 gap-y-0.5",
                            group.links.length <= 4 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-2",
                          )}
                        >
                          {group.links.map((item) =>
                            item.external ? (
                              <a
                                key={`${group.labelKey}-${item.labelKey}`}
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                className="block rounded-lg px-3 py-2 text-[14px] font-medium leading-snug text-[hsl(var(--brand-navy-950)/0.92)] outline-none transition hover:bg-[hsl(var(--surface-light-50))] hover:text-[hsl(var(--brand-navy-950))] focus-visible:bg-[hsl(var(--surface-light-50))] focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-purple-500)/0.35)] focus-visible:ring-inset"
                              >
                                {t(item.labelKey)}
                              </a>
                            ) : (
                              <Link
                                key={`${group.labelKey}-${item.labelKey}`}
                                to={item.href}
                                className="block rounded-lg px-3 py-2 text-[14px] font-medium leading-snug text-[hsl(var(--brand-navy-950)/0.92)] outline-none transition hover:bg-[hsl(var(--surface-light-50))] hover:text-[hsl(var(--brand-navy-950))] focus-visible:bg-[hsl(var(--surface-light-50))] focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-purple-500)/0.35)] focus-visible:ring-inset"
                              >
                                {t(item.labelKey)}
                              </Link>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
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

          {/* Mobile top actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="flex items-center gap-0.5 rounded-full border border-[hsl(var(--border-light))] bg-white/90 p-0.5 shadow-sm">
              {languageOptions.map(({ code, label }) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => void i18n.changeLanguage(code)}
                  className={cn(
                    "rounded-full px-2 py-1 text-[10px] font-semibold transition",
                    i18n.resolvedLanguage?.startsWith(code)
                      ? "bg-[hsl(var(--brand-navy-950))] text-white"
                      : "text-[hsl(var(--brand-navy-950)/0.65)]",
                  )}
                >
                  {code === "en" ? "EN" : label}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[hsl(var(--border-light))] bg-white text-[hsl(var(--brand-navy-950))] shadow-sm"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-label="Open menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {mobileOpen ? (
          <div className="lg:hidden">
            <button
              type="button"
              className="fixed inset-0 top-14 z-40 bg-[hsl(var(--brand-navy-950)/0.45)] backdrop-blur-[2px]"
              aria-label="Close menu"
              onClick={closeMobile}
            />
            <div className="fixed left-0 right-0 top-14 z-[45] max-h-[min(75vh,calc(100dvh-3.5rem-4rem))] overflow-y-auto border-b border-[hsl(var(--border-light))] bg-white shadow-[0_20px_50px_-12px_rgba(15,23,42,0.2)]">
              <div className="space-y-4 px-4 py-4">
                <Link
                  to="/ask-soham"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[hsl(var(--brand-gold-500))] px-4 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))]"
                  onClick={closeMobile}
                >
                  <MessageCircle className="h-4 w-4" />
                  {t("nav.askSoham")}
                </Link>

                {mobileNavGroups.map((group) => (
                  <div key={group.labelKey} className="rounded-xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50)/0.5)] p-3">
                    <Link
                      to={group.href}
                      onClick={closeMobile}
                      className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))]"
                    >
                      {t(group.labelKey)}
                    </Link>
                    {group.links ? (
                      <div className="space-y-0.5">
                        {group.links.map((item) => (
                          <DropdownLinkItem key={`mobile-${group.labelKey}-${item.labelKey}`} item={item} onClick={closeMobile} t={t} />
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </header>

      <MobileBottomNav />
    </>
  );
};

export default Navbar;
