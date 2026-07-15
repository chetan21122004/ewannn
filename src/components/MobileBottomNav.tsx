import { Link, useLocation } from "react-router-dom";
import { Building2, Home, Languages, Newspaper, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

type BottomNavItem = {
  href: string;
  labelKey: string;
  icon: typeof Home;
  isActive: (pathname: string) => boolean;
};

const bottomNavItems: BottomNavItem[] = [
  {
    href: "/",
    labelKey: "nav.bottomHome",
    icon: Home,
    isActive: (pathname) => pathname === "/",
  },
  {
    href: "/market-entry",
    labelKey: "nav.bottomMarket",
    icon: Building2,
    isActive: (pathname) =>
      ["/market-entry", "/liaisoning-facilitation", "/market-research", "/import-export", "/market-entry-audit"].some(
        (p) => pathname === p || pathname.startsWith(`${p}/`),
      ),
  },
  {
    href: "/language-localization",
    labelKey: "nav.bottomLanguage",
    icon: Languages,
    isActive: (pathname) =>
      pathname === "/language-localization" ||
      pathname.startsWith("/language-localization/") ||
      pathname === "/global-talkies",
  },
  {
    href: "/media",
    labelKey: "nav.bottomMedia",
    icon: Newspaper,
    isActive: (pathname) =>
      pathname === "/media" ||
      pathname.startsWith("/media/") ||
      pathname.startsWith("/language-gazette") ||
      pathname.startsWith("/insights") ||
      pathname === "/newsletter",
  },
  {
    href: "/about-us",
    labelKey: "nav.bottomAbout",
    icon: Users,
    isActive: (pathname) =>
      ["/about-us", "/join-us", "/case-study", "/contact"].some(
        (p) => pathname === p || pathname.startsWith(`${p}/`),
      ),
  },
];

const MobileBottomNav = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-[hsl(var(--border-light))] bg-white/95 backdrop-blur-md lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      aria-label="Mobile primary navigation"
    >
      <div className="mx-auto flex h-16 max-w-lg items-stretch justify-around px-1">
        {bottomNavItems.map((item) => {
          const Icon = item.icon;
          const active = item.isActive(pathname);
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "relative flex min-w-0 flex-1 flex-col items-center justify-center gap-0.5 rounded-lg px-1 py-2 transition-colors",
                active
                  ? "text-[hsl(var(--brand-purple-700))]"
                  : "text-[hsl(var(--brand-navy-950)/0.55)] hover:text-[hsl(var(--brand-navy-950)/0.85)]",
              )}
            >
              <Icon className={cn("h-5 w-5 shrink-0", active && "stroke-[2.5px]")} aria-hidden />
              <span className={cn("w-full truncate text-center text-[10px] font-semibold leading-tight", active && "text-[hsl(var(--brand-purple-700))]")}>
                {t(item.labelKey)}
              </span>
              {active ? (
                <span className="absolute bottom-1 h-0.5 w-8 rounded-full bg-[hsl(var(--brand-gold-500))]" aria-hidden />
              ) : null}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileBottomNav;
