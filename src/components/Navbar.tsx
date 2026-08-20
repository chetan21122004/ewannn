import { useEffect, useMemo, useState, type MouseEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowUpRight,
  Building2,
  ChevronDown,
  ChevronRight,
  Factory,
  FileText,
  Languages,
  Menu,
  MessageCircle,
  Mail,
  Newspaper,
  Play,
  Users,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE_LOGO, SITE_LOGO_ALT } from "@/lib/site";
import { scrollToPageTop } from "@/lib/scrollToTop";
import { handleAskSohamNavClick } from "@/components/AskSohamInquiryProvider";
import { useTranslation } from "react-i18next";
import MobileBottomNav from "@/components/MobileBottomNav";
import NavbarLanguageSwitcher from "@/components/NavbarLanguageSwitcher";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { LucideIcon } from "lucide-react";

type NavItem = {
  labelKey: string;
  href: string;
  external?: boolean;
};

type NavGroup = {
  labelKey: string;
  href?: string;
  links?: NavItem[];
};

type DesktopNavItem = {
  labelKey: string;
  href: string;
  external?: boolean;
};

type DesktopNavGroup = {
  labelKey: string;
  href?: string;
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
      { labelKey: "navMenu.marketEntry.marketAudit", href: "/market-entry-audit" },
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
      { labelKey: "navMenu.about.caseStudy", href: "/case-study" },
      { labelKey: "navMenu.about.testimonials", href: "/testimonials" },
    ],
  },
  {
    labelKey: "nav.industries",
    href: "/industries",
  },
  {
    labelKey: "nav.media",
    links: [
      { labelKey: "navMenu.media.languageGazette", href: "/language-gazette" },
      { labelKey: "navMenu.media.blogInsights", href: "/insights" },
      { labelKey: "navMenu.media.videos", href: "/videos" },
      { labelKey: "navMenu.media.newsletter", href: "/newsletter" },
    ],
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
      { labelKey: "navMenu.marketEntry.marketAudit", href: "/market-entry-audit" },
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
      { labelKey: "navMenu.about.caseStudy", href: "/case-study" },
      { labelKey: "navMenu.about.testimonials", href: "/testimonials" },
    ],
  },
  {
    labelKey: "nav.industries",
    href: "/industries",
  },
  {
    labelKey: "nav.media",
    links: [
      { labelKey: "navMenu.media.languageGazette", href: "/language-gazette" },
      { labelKey: "navMenu.media.blogInsights", href: "/insights" },
      { labelKey: "navMenu.media.videos", href: "/videos" },
      { labelKey: "navMenu.media.newsletter", href: "/newsletter" },
    ],
  },
];

const mobileGroupMeta: Record<string, { icon: LucideIcon; tint: string }> = {
  "nav.marketEntry": { icon: Building2, tint: "bg-[hsl(var(--brand-purple-700)/0.1)] text-[hsl(var(--brand-purple-700))]" },
  "nav.languageLocalization": { icon: Languages, tint: "bg-[hsl(var(--brand-cyan-500)/0.12)] text-[hsl(var(--brand-cyan-500))]" },
  "nav.aboutUs": { icon: Users, tint: "bg-[hsl(var(--brand-gold-500)/0.15)] text-[hsl(var(--brand-gold-500))]" },
  "nav.industries": { icon: Factory, tint: "bg-[hsl(var(--brand-navy-950)/0.08)] text-[hsl(var(--brand-navy-950))]" },
  "nav.media": { icon: Newspaper, tint: "bg-[hsl(var(--brand-purple-500)/0.1)] text-[hsl(var(--brand-purple-700))]" },
};

const isNavSectionLink = (href: string) => href.includes("#");

const isPathActive = (href: string, pathname: string, hash = "") => {
  const hashIndex = href.indexOf("#");
  const base = hashIndex === -1 ? href : href.slice(0, hashIndex);
  const fragment = hashIndex === -1 ? undefined : href.slice(hashIndex + 1);
  const normalizedBase = base || "/";

  const pathMatches =
    normalizedBase === "/"
      ? pathname === "/"
      : pathname === normalizedBase || pathname.startsWith(`${normalizedBase}/`);

  if (!pathMatches) return false;

  if (fragment) {
    const currentHash = hash.startsWith("#") ? hash.slice(1) : hash;
    return currentHash === fragment;
  }

  return true;
};

/** Whether a dropdown link belongs to the current page for parent nav highlighting. */
const isGroupPageMatch = (href: string, pathname: string) => {
  const hashIndex = href.indexOf("#");
  const base = hashIndex === -1 ? href : href.slice(0, hashIndex);
  const normalizedBase = base || "/";

  // Homepage section anchors (e.g. /#testimonials) must not activate nav groups on "/".
  if (normalizedBase === "/" && hashIndex !== -1) return false;

  if (normalizedBase === "/") return pathname === "/";
  return pathname === normalizedBase || pathname.startsWith(`${normalizedBase}/`);
};

const isGroupActive = (group: NavGroup | DesktopNavGroup, pathname: string, hash = "") =>
  (group.href ? isPathActive(group.href, pathname, hash) : false) ||
  (group.links?.some((link) => isGroupPageMatch(link.href, pathname)) ?? false);

const getNavLinkIcon = (item: NavItem): LucideIcon | null => {
  if (item.external) return ArrowUpRight;
  if (item.href === "/videos") return Play;
  if (isNavSectionLink(item.href)) return null;
  return FileText;
};

const MobileNavSubLink = ({
  item,
  onClick,
  active,
  t,
}: {
  item: NavItem;
  onClick?: () => void;
  active?: boolean;
  t: (key: string) => string;
}) => {
  const className = cn(
    "flex min-h-10 items-center gap-3 rounded-lg border-l-2 py-2 pl-3 pr-2 text-[13px] font-medium transition",
    active
      ? "border-[hsl(var(--brand-purple-700))] bg-[hsl(var(--brand-purple-700)/0.06)] text-[hsl(var(--brand-purple-700))]"
      : "border-transparent text-[hsl(var(--brand-navy-950)/0.82)] hover:border-[hsl(var(--brand-purple-500)/0.35)] hover:bg-[hsl(var(--surface-light-50))]",
  );

  const content = (
    <>
      <span className="flex min-w-0 items-center gap-2.5 leading-snug">
        {(() => {
          const Icon = getNavLinkIcon(item);
          return Icon ? <Icon className="h-3.5 w-3.5 shrink-0 opacity-45" aria-hidden /> : null;
        })()}
        <span>{t(item.labelKey)}</span>
      </span>
    </>
  );

  return item.external ? (
    <a className={className} href={item.href} target="_blank" rel="noreferrer" onClick={onClick}>
      {content}
    </a>
  ) : (
    <Link className={className} to={item.href} onClick={onClick}>
      {content}
    </Link>
  );
};

const DesktopNavDropdownLink = ({
  item,
  t,
  onNavigate,
}: {
  item: DesktopNavItem;
  t: (key: string) => string;
  onNavigate?: () => void;
}) => {
  const Icon = getNavLinkIcon(item);
  const className =
    "flex items-center gap-2.5 rounded-lg px-3 py-2 text-[14px] font-medium leading-snug text-[hsl(var(--brand-navy-950)/0.92)] outline-none transition hover:bg-[hsl(var(--surface-light-50))] hover:text-[hsl(var(--brand-navy-950))] focus-visible:bg-[hsl(var(--surface-light-50))] focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-purple-500)/0.35)] focus-visible:ring-inset";

  const handleNavigate = () => {
    onNavigate?.();
    (document.activeElement as HTMLElement | null)?.blur();
  };

  const label = (
    <>
      {Icon ? <Icon className="h-3.5 w-3.5 shrink-0 opacity-45" aria-hidden /> : null}
      <span className="min-w-0">{t(item.labelKey)}</span>
    </>
  );

  return item.external ? (
    <a href={item.href} target="_blank" rel="noreferrer" className={className} onClick={handleNavigate}>
      {label}
    </a>
  ) : (
    <Link to={item.href} className={className} onClick={handleNavigate}>
      {label}
    </Link>
  );
};

const getActiveMobileGroup = (pathname: string, hash = "") =>
  mobileNavGroups.find((group) => isGroupActive(group, pathname, hash))?.labelKey;

const desktopNavTriggerClass = (active: boolean) =>
  cn(
    "inline-flex min-h-[2.5rem] items-center gap-1 rounded-full px-3.5 py-2 text-[13px] font-semibold whitespace-nowrap text-[hsl(var(--brand-navy-950)/0.78)] outline-none transition",
    "hover:bg-white hover:text-[hsl(var(--brand-navy-950))] hover:shadow-sm",
    "focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-purple-500)/0.4)] focus-visible:ring-offset-1 focus-visible:ring-offset-[hsl(var(--surface-light-50))]",
    active &&
      "bg-white text-[hsl(var(--brand-purple-700))] shadow-sm ring-1 ring-[hsl(var(--brand-purple-700)/0.12)]",
  );

const navUtilityPillClass = (active: boolean, compact = false) =>
  cn(
    "inline-flex items-center gap-1.5 rounded-full border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] font-semibold text-[hsl(var(--brand-navy-950))] shadow-sm transition",
    "hover:border-[hsl(var(--brand-purple-500)/0.35)] hover:bg-white",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-purple-500)/0.4)] focus-visible:ring-offset-1",
    active && "border-[hsl(var(--brand-purple-500)/0.35)] bg-white text-[hsl(var(--brand-purple-700))]",
    compact ? "h-9 px-2.5 text-[10px] bg-white/90" : "h-9 px-3 text-[11px]",
  );

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState<string>("");
  const [openDesktopGroup, setOpenDesktopGroup] = useState<string | null>(null);
  const { t } = useTranslation();
  const { pathname, hash } = useLocation();
  const closeMobile = () => setMobileOpen(false);
  const closeDesktopDropdown = () => setOpenDesktopGroup(null);

  const isDesktopGroupActive = (group: DesktopNavGroup) => isGroupActive(group, pathname, hash);
  const isContactActive = isPathActive("/contact", pathname, hash);

  const mobileGroupsWithLinks = useMemo(
    () => mobileNavGroups.filter((group) => group.links?.length),
    [],
  );
  const mobileStandaloneLinks = useMemo(
    () => mobileNavGroups.filter((group) => !group.links?.length),
    [],
  );

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      event.preventDefault();
      scrollToPageTop("smooth");
    }
    closeMobile();
  };

  useEffect(() => {
    setMobileOpen(false);
    closeDesktopDropdown();
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    setExpandedGroup(getActiveMobileGroup(pathname, hash) ?? "");
  }, [mobileOpen, pathname, hash]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMobile();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 nav-glass">
        <div className="container mx-auto flex h-14 items-center justify-between gap-4 px-4 lg:h-[4.25rem] lg:gap-6 lg:px-6">
          <Link to="/" className="shrink-0" onClick={handleLogoClick}>
            <img src={SITE_LOGO} alt={SITE_LOGO_ALT} className="h-9 w-auto object-contain lg:h-11" />
          </Link>

          {/* Desktop nav */}
          <div
            className="relative hidden overflow-visible lg:flex items-stretch rounded-full border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] p-1 shadow-sm"
            role="navigation"
            aria-label="Primary"
          >
            {desktopNavGroups.map((group, index) => {
              const active = isDesktopGroupActive(group);
              return (
                <div
                  key={group.labelKey}
                  className={cn(
                    "group relative flex items-stretch",
                    index > 0 && "before:absolute before:left-0 before:top-1/2 before:h-4 before:w-px before:-translate-y-1/2 before:bg-[hsl(var(--border-light))]",
                  )}
                  onMouseEnter={() => group.links && setOpenDesktopGroup(group.labelKey)}
                  onMouseLeave={() => setOpenDesktopGroup((current) => (current === group.labelKey ? null : current))}
                  onFocusCapture={() => group.links && setOpenDesktopGroup(group.labelKey)}
                  onBlurCapture={(event) => {
                    if (!group.links) return;
                    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                      setOpenDesktopGroup((current) => (current === group.labelKey ? null : current));
                    }
                  }}
                >
                  {group.links && !group.href ? (
                    <button
                      type="button"
                      className={desktopNavTriggerClass(active)}
                      aria-haspopup="true"
                      aria-label={`${t(group.labelKey)} menu`}
                    >
                      <span>{t(group.labelKey)}</span>
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 shrink-0 opacity-60 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180",
                          active ? "text-[hsl(var(--brand-purple-700))]" : "text-[hsl(var(--brand-navy-950)/0.5)]",
                        )}
                      />
                    </button>
                  ) : (
                    <Link to={group.href!} className={desktopNavTriggerClass(active)}>
                      <span>{t(group.labelKey)}</span>
                      {group.links ? (
                        <ChevronDown
                          className={cn(
                            "h-3.5 w-3.5 shrink-0 opacity-60 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180",
                            active ? "text-[hsl(var(--brand-purple-700))]" : "text-[hsl(var(--brand-navy-950)/0.5)]",
                          )}
                        />
                      ) : null}
                    </Link>
                  )}

                  {group.links ? (
                    <div
                      className={cn(
                        "absolute left-0 top-full z-[80] w-max min-w-[320px] max-w-[min(720px,calc(100vw-3rem))] pt-2",
                        openDesktopGroup === group.labelKey ? "block" : "hidden",
                      )}
                    >
                      <div className="rounded-xl border border-[hsl(var(--border-light))] bg-white p-3 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.22)] ring-1 ring-[hsl(233_55%_12%/0.04)]">
                        <div
                          className={cn(
                            "grid gap-x-6 gap-y-0.5",
                            group.links.length <= 4 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-2",
                          )}
                        >
                          {group.links.map((item) => (
                            <DesktopNavDropdownLink
                              key={`${group.labelKey}-${item.labelKey}`}
                              item={item}
                              t={t}
                              onNavigate={closeDesktopDropdown}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-2.5">
            <Link to="/contact" className={navUtilityPillClass(isContactActive)}>
              <Mail className="h-3.5 w-3.5 shrink-0 text-[hsl(var(--brand-purple-700))]" aria-hidden />
              {t("nav.contactUs")}
            </Link>
            <NavbarLanguageSwitcher variant="desktop" />
            <Link
              to="/ask-soham"
              onClick={(event) => handleAskSohamNavClick(event, pathname)}
              className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-4 py-2 text-[13px] font-semibold text-[hsl(var(--brand-navy-950))] shadow-[0_4px_14px_-4px_hsl(var(--brand-gold-500)/0.55)] transition hover:brightness-105"
            >
              <MessageCircle className="h-4 w-4" />
              {t("nav.askSoham")}
            </Link>
          </div>

          {/* Mobile top actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link to="/contact" className={navUtilityPillClass(isContactActive, true)} aria-label={t("nav.contactUs")}>
              <Mail className="h-3.5 w-3.5 shrink-0 text-[hsl(var(--brand-purple-700))]" aria-hidden />
              <span className="sr-only sm:not-sr-only">{t("nav.contactUs")}</span>
            </Link>
            <NavbarLanguageSwitcher variant="mobile" />
            <button
              type="button"
              className={cn(
                "inline-flex h-9 w-9 items-center justify-center rounded-full border shadow-sm transition",
                mobileOpen
                  ? "border-[hsl(var(--brand-purple-700))] bg-[hsl(var(--brand-purple-700))] text-white"
                  : "border-[hsl(var(--border-light))] bg-white text-[hsl(var(--brand-navy-950))]",
              )}
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer outside header - backdrop-filter on header breaks nested position:fixed */}
      <div className="lg:hidden" aria-hidden={!mobileOpen}>
        <button
          type="button"
          className={cn(
            "fixed inset-0 z-[55] bg-[hsl(var(--brand-navy-950)/0.45)] backdrop-blur-[2px] transition-opacity duration-300",
            mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
          )}
          aria-label="Close menu"
          onClick={closeMobile}
          tabIndex={mobileOpen ? 0 : -1}
        />

        <aside
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className={cn(
            "fixed inset-y-0 right-0 z-[60] flex w-[min(100%,340px)] flex-col border-l border-[hsl(var(--border-light))] bg-white shadow-[-12px_0_40px_-8px_rgba(15,23,42,0.22)] transition-transform duration-300 ease-out",
            mobileOpen ? "translate-x-0" : "translate-x-full pointer-events-none",
          )}
          style={{ paddingTop: "env(safe-area-inset-top, 0px)", paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
        >
          <div className="flex shrink-0 items-center justify-between gap-3 border-b border-[hsl(var(--border-light))] px-4 py-3.5">
            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))]">Menu</p>
              <p className="font-serif text-base font-bold leading-tight text-[hsl(var(--brand-navy-950))]">Explore UVAN</p>
            </div>
            <button
              type="button"
              onClick={closeMobile}
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] text-[hsl(var(--brand-navy-950))] transition hover:bg-[hsl(var(--surface-light-100))]"
              aria-label="Close menu"
            >
              <X className="h-4 w-4" aria-hidden />
            </button>
          </div>

          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-4 py-4">
            <Link
              to="/ask-soham"
              onClick={(event) => {
                handleAskSohamNavClick(event, pathname);
                closeMobile();
              }}
              className="mb-4 flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-[hsl(var(--brand-gold-500))] px-4 py-2.5 text-sm font-semibold text-[hsl(var(--brand-navy-950))] shadow-[0_8px_20px_-10px_hsl(var(--brand-gold-500)/0.7)] transition active:scale-[0.99]"
            >
              <MessageCircle className="h-4 w-4 shrink-0" aria-hidden />
              {t("nav.askSoham")}
            </Link>

            <p className="mb-2 px-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--brand-navy-950)/0.45)]">
              Services &amp; pages
            </p>

            <Accordion
              type="single"
              collapsible
              value={expandedGroup}
              onValueChange={setExpandedGroup}
              className="rounded-xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50)/0.6)] px-1"
            >
              {mobileGroupsWithLinks.map((group) => {
                const meta = mobileGroupMeta[group.labelKey];
                const Icon = meta?.icon ?? ChevronRight;
                const sectionActive = isGroupActive(group, pathname, hash);

                return (
                  <AccordionItem key={group.labelKey} value={group.labelKey} className="border-[hsl(var(--border-light))] px-1 last:border-b-0">
                    <AccordionTrigger
                      className={cn(
                        "gap-3 rounded-lg px-2 py-3.5 text-left hover:no-underline [&[data-state=open]]:bg-white [&[data-state=open]]:shadow-sm",
                        sectionActive && "text-[hsl(var(--brand-purple-700))]",
                      )}
                    >
                      <span className="flex min-w-0 flex-1 items-center gap-3">
                        <span className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-lg", meta?.tint)}>
                          <Icon className="h-4 w-4" aria-hidden />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-[hsl(var(--brand-navy-950))]">{t(group.labelKey)}</span>
                          <span className="block text-[11px] font-normal text-[hsl(var(--brand-navy-950)/0.5)]">
                            {group.links?.length} links
                          </span>
                        </span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-2 pt-0">
                      <div className="space-y-0.5 rounded-lg bg-white px-1 py-1.5">
                        {group.links?.map((item) => (
                          <MobileNavSubLink
                            key={`mobile-${group.labelKey}-${item.labelKey}`}
                            item={item}
                            active={isPathActive(item.href, pathname, hash)}
                            onClick={closeMobile}
                            t={t}
                          />
                        ))}
                      </div>
                      {group.href ? (
                        <Link
                          to={group.href}
                          onClick={closeMobile}
                          className="mt-2 flex min-h-9 items-center justify-center gap-1.5 rounded-lg text-xs font-semibold text-[hsl(var(--brand-purple-700))] transition hover:bg-[hsl(var(--brand-purple-700)/0.06)]"
                        >
                          View all {t(group.labelKey)}
                          <ChevronRight className="h-3.5 w-3.5" aria-hidden />
                        </Link>
                      ) : null}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>

            {mobileStandaloneLinks.map((group) => {
              const meta = mobileGroupMeta[group.labelKey];
              const Icon = meta?.icon ?? ChevronRight;
              const active = group.href ? isPathActive(group.href, pathname, hash) : false;

              if (!group.href) return null;

              return (
                <Link
                  key={group.labelKey}
                  to={group.href}
                  onClick={closeMobile}
                  className={cn(
                    "mt-3 flex min-h-12 items-center gap-3 rounded-xl border px-3 py-2.5 transition active:scale-[0.99]",
                    active
                      ? "border-[hsl(var(--brand-purple-500)/0.4)] bg-[hsl(var(--brand-purple-700)/0.05)]"
                      : "border-[hsl(var(--border-light))] bg-white hover:bg-[hsl(var(--surface-light-50))]",
                  )}
                >
                  <span className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-lg", meta?.tint)}>
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1 text-sm font-semibold text-[hsl(var(--brand-navy-950))]">{t(group.labelKey)}</span>
                  <ChevronRight className="h-4 w-4 shrink-0 text-[hsl(var(--brand-navy-950)/0.35)]" aria-hidden />
                </Link>
              );
            })}
          </div>

          <div className="shrink-0 border-t border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] px-4 py-3.5">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--brand-navy-950)/0.45)]">
              {t("nav.contactUs")}
            </p>
            <Link
              to="/contact"
              onClick={closeMobile}
              className={cn(
                "flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 transition active:scale-[0.99]",
                isContactActive
                  ? "border-[hsl(var(--brand-purple-500)/0.35)] bg-[hsl(var(--brand-purple-700)/0.06)]"
                  : "border-[hsl(var(--border-light))] bg-white hover:bg-[hsl(var(--surface-light-50))]",
              )}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[hsl(var(--brand-purple-700)/0.1)] text-[hsl(var(--brand-purple-700))]">
                <Mail className="h-4 w-4" aria-hidden />
              </span>
              <span className="min-w-0 flex-1 text-sm font-semibold text-[hsl(var(--brand-navy-950))]">{t("nav.contactUs")}</span>
              <ChevronRight className="h-4 w-4 shrink-0 text-[hsl(var(--brand-navy-950)/0.35)]" aria-hidden />
            </Link>
          </div>

          <div className="shrink-0 border-t border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] px-4 py-3.5">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--brand-navy-950)/0.45)]">Language</p>
            <NavbarLanguageSwitcher variant="drawer" onSelect={closeMobile} />
          </div>
        </aside>
      </div>

      <MobileBottomNav />
    </>
  );
};

export default Navbar;
