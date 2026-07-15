import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Globe2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

type LanguageOption = {
  code: string;
  label: string;
  shortLabel: string;
  flagSrc?: string;
};

const languageOptions: LanguageOption[] = [
  { code: "en", label: "English", shortLabel: "EN" },
  { code: "zh", label: "中文", shortLabel: "中文", flagSrc: "/page-assets/flags/cn-flag.png" },
  { code: "ja", label: "日本語", shortLabel: "日本語", flagSrc: "/page-assets/flags/jp-flag.png" },
];

const resolveLanguageCode = (resolvedLanguage?: string) =>
  languageOptions.find((option) => resolvedLanguage?.startsWith(option.code))?.code ?? "en";

const LanguageFlag = ({ option, className }: { option: LanguageOption; className?: string }) => {
  if (option.flagSrc) {
    return (
      <img
        src={option.flagSrc}
        alt=""
        aria-hidden
        className={cn("h-4 w-4 shrink-0 rounded-full object-cover ring-1 ring-[hsl(var(--border-light))]", className)}
      />
    );
  }

  return (
    <span
      className={cn(
        "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--brand-purple-700)/0.1)] text-[hsl(var(--brand-purple-700))]",
        className,
      )}
      aria-hidden
    >
      <Globe2 className="h-2.5 w-2.5" />
    </span>
  );
};

type NavbarLanguageSwitcherProps = {
  variant?: "desktop" | "mobile" | "drawer";
  onSelect?: () => void;
};

const NavbarLanguageSwitcher = ({ variant = "desktop", onSelect }: NavbarLanguageSwitcherProps) => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const currentCode = resolveLanguageCode(i18n.resolvedLanguage);
  const current = languageOptions.find((option) => option.code === currentCode) ?? languageOptions[0];

  const selectLanguage = (code: string) => {
    void i18n.changeLanguage(code);
    setOpen(false);
    onSelect?.();
  };

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  if (variant === "drawer") {
    return (
      <div className="space-y-1.5">
        {languageOptions.map((option) => {
          const active = currentCode === option.code;
          return (
            <button
              key={option.code}
              type="button"
              onClick={() => selectLanguage(option.code)}
              className={cn(
                "flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition",
                active
                  ? "border-[hsl(var(--brand-purple-500)/0.35)] bg-[hsl(var(--brand-purple-700)/0.06)]"
                  : "border-[hsl(var(--border-light))] bg-white hover:bg-[hsl(var(--surface-light-50))]",
              )}
            >
              <LanguageFlag option={option} className="h-5 w-5" />
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-[hsl(var(--brand-navy-950))]">{option.label}</span>
                <span className="block text-[11px] text-[hsl(var(--brand-navy-950)/0.5)]">{option.shortLabel}</span>
              </span>
              {active ? <Check className="h-4 w-4 shrink-0 text-[hsl(var(--brand-purple-700))]" aria-hidden /> : null}
            </button>
          );
        })}
      </div>
    );
  }

  const isMobile = variant === "mobile";

  return (
    <div
      ref={rootRef}
      className={cn("group/language relative", isMobile && open && "z-[70]")}
    >
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Language: ${current.label}. Change language`}
        onClick={() => setOpen((value) => !value)}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] font-semibold text-[hsl(var(--brand-navy-950))] shadow-sm transition",
          "hover:border-[hsl(var(--brand-purple-500)/0.35)] hover:bg-white",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-purple-500)/0.4)] focus-visible:ring-offset-1",
          isMobile ? "h-9 px-2.5 text-[10px] shadow-sm bg-white/90" : "h-9 px-3 text-[11px]",
        )}
      >
        <LanguageFlag option={current} />
        <span>{current.shortLabel}</span>
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 shrink-0 text-[hsl(var(--brand-navy-950)/0.45)] transition-transform duration-200",
            open && "rotate-180",
            "group-hover/language:rotate-180 group-focus-within/language:rotate-180",
          )}
          aria-hidden
        />
      </button>

      <div
        className={cn(
          "absolute right-0 top-full z-[80] min-w-[168px] pt-2",
          open ? "block" : "hidden",
          !isMobile && "lg:group-hover/language:block lg:group-focus-within/language:block",
        )}
      >
        <ul
          role="listbox"
          aria-label="Select language"
          className="overflow-hidden rounded-xl border border-[hsl(var(--border-light))] bg-white p-1 shadow-[0_16px_40px_-12px_rgba(15,23,42,0.22)] ring-1 ring-[hsl(233_55%_12%/0.04)]"
        >
          {languageOptions.map((option) => {
            const active = currentCode === option.code;
            return (
              <li key={option.code} role="option" aria-selected={active}>
                <button
                  type="button"
                  onClick={() => selectLanguage(option.code)}
                  className={cn(
                    "flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left transition",
                    active
                      ? "bg-[hsl(var(--brand-purple-700)/0.08)] text-[hsl(var(--brand-purple-700))]"
                      : "text-[hsl(var(--brand-navy-950)/0.88)] hover:bg-[hsl(var(--surface-light-50))]",
                  )}
                >
                  <LanguageFlag option={option} className="h-[18px] w-[18px]" />
                  <span className="min-w-0 flex-1 text-[13px] font-semibold leading-none">{option.label}</span>
                  {active ? <Check className="h-3.5 w-3.5 shrink-0" aria-hidden /> : null}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavbarLanguageSwitcher;
