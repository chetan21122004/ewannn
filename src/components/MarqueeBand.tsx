import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type MarqueeBandProps = {
  items: string[];
  ariaLabel: string;
  icon?: LucideIcon;
  className?: string;
  pillClassName?: string;
};

const MarqueeBand = ({ items, ariaLabel, icon: Icon, className, pillClassName }: MarqueeBandProps) => {
  const doubled = [...items, ...items];

  return (
    <div
      className={cn("relative left-1/2 mb-8 w-screen max-w-[100vw] -translate-x-1/2 md:mb-10", className)}
      role="region"
      aria-label={ariaLabel}
    >
      <div className="marquee-fade overflow-hidden border-y border-[hsl(var(--border-light))] bg-white/80 py-4">
        <div className="flex w-max animate-marquee items-center gap-3 px-4 motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-2">
          {doubled.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className={cn(
                "inline-flex shrink-0 items-center gap-2 rounded-full border border-[hsl(var(--brand-purple-700)/0.12)] bg-[hsl(var(--brand-purple-700)/0.06)] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--brand-purple-700))]",
                pillClassName,
              )}
            >
              {Icon ? <Icon className="h-3 w-3 text-[hsl(var(--brand-gold-600))]" aria-hidden /> : null}
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeBand;
