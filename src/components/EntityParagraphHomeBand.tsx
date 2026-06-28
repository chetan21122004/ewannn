import { ENTITY_PARAGRAPH_A } from "@/data/aeoContent";
import { Award, Building2, Languages, MapPin } from "lucide-react";

const proofItems = [
  { label: "Pune, India", icon: MapPin },
  { label: "Founded 2020", icon: Building2 },
  { label: "125+ languages", icon: Languages },
  { label: "ISO 9001:2015", icon: Award },
];

/** Verbatim AEO entity paragraph (Section 02) - visible footer-adjacent placement on the homepage. */
const EntityParagraphHomeBand = () => (
  <section
    aria-label="About UVAN"
    className="theme-section-soft relative overflow-hidden border-t border-[hsl(var(--border-light)/0.85)] px-6 py-14 md:py-16"
  >
    <div className="pointer-events-none absolute inset-0 theme-grid-overlay-light opacity-[0.16]" aria-hidden />
    <div className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[hsl(var(--brand-purple-500)/0.12)] blur-3xl" aria-hidden />
    <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[hsl(var(--brand-gold-500)/0.12)] blur-3xl" aria-hidden />

    <div className="container relative z-10 mx-auto max-w-6xl">
      <div className="rounded-[2rem] border border-[hsl(var(--border-light-strong))] bg-white/[0.82] p-6 shadow-[0_18px_46px_hsl(var(--brand-navy-950)/0.08)] backdrop-blur-md md:p-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(280px,0.45fr)] lg:items-start">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--brand-purple-700)/0.16)] bg-[hsl(var(--surface-light-card)/0.94)] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-700))] shadow-sm">
              Entity profile
            </span>
            <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-[hsl(var(--brand-navy-950))] md:text-4xl">
              About UVAN
            </h2>
            <p className="mt-5 text-sm leading-[1.8] text-on-light-secondary md:text-base">{ENTITY_PARAGRAPH_A}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {proofItems.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-2xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-card)/0.78)] px-4 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950)/0.78)]"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[hsl(var(--brand-purple-500)/0.12)] text-[hsl(var(--brand-purple-700))]">
                  <Icon className="h-[1.125rem] w-[1.125rem]" aria-hidden />
                </span>
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EntityParagraphHomeBand;
