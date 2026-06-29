import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export const ArticleLead = ({ children }: { children: ReactNode }) => (
  <p className="gazette-lead text-lg leading-[1.85] text-[hsl(var(--brand-navy-950))] md:text-xl">{children}</p>
);

export const ArticleSection = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="mt-14">
    <h2 className="font-serif text-2xl font-bold text-[hsl(var(--brand-navy-950))] md:text-3xl">{title}</h2>
    <div className="mt-2 h-1 w-16 rounded-full bg-[hsl(var(--brand-gold-500))]" />
    <div className="mt-6 space-y-5 text-[1.0625rem] leading-[1.85] text-on-light-secondary">{children}</div>
  </section>
);

export const ArticlePullQuote = ({ children, attribution }: { children: ReactNode; attribution?: string }) => (
  <figure className="relative my-12 overflow-hidden rounded-2xl bg-[hsl(var(--brand-navy-950))] px-8 py-10 text-white md:px-12 md:py-12">
    <div className="absolute right-6 top-4 font-serif text-8xl leading-none text-white/10">&ldquo;</div>
    <blockquote className="relative font-serif text-xl italic leading-relaxed md:text-2xl md:leading-relaxed">{children}</blockquote>
    {attribution ? <figcaption className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-[hsl(var(--brand-gold-500))]">{attribution}</figcaption> : null}
  </figure>
);

export const ArticleHighlight = ({ children }: { children: ReactNode }) => (
  <div className="my-10 rounded-2xl border border-[hsl(var(--brand-purple-700)/0.15)] bg-[hsl(var(--brand-purple-700)/0.04)] px-6 py-6 md:px-8">
    <p className="text-[1.0625rem] font-medium leading-[1.85] text-[hsl(var(--brand-navy-950))]">{children}</p>
  </div>
);

export const ArticleClosing = ({ children }: { children: ReactNode }) => (
  <div className="mt-14 border-t border-black/10 pt-10">
    <p className="font-serif text-xl font-semibold leading-relaxed text-[hsl(var(--brand-navy-950))] md:text-2xl">{children}</p>
  </div>
);

export const ArticleServiceLinks = () => (
  <nav aria-label="Related UVAN services" className="mt-14 rounded-2xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] p-6 md:p-8">
    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))]">
      Explore UVAN services
    </p>
    <ul className="mt-4 space-y-3">
      <li>
        <Link to="/market-entry/" className="text-sm font-semibold text-[hsl(var(--brand-purple-700))] hover:underline">
          Market Entry — India &amp; Asia corridor mandates
        </Link>
      </li>
      <li>
        <Link to="/language-localization/" className="text-sm font-semibold text-[hsl(var(--brand-purple-700))] hover:underline">
          Language &amp; Localization — translation, interpretation, localization
        </Link>
      </li>
      <li>
        <Link to="/ask-soham/" className="text-sm font-semibold text-[hsl(var(--brand-purple-700))] hover:underline">
          Ask Soham — free 15-minute call
        </Link>
      </li>
    </ul>
  </nav>
);

export const ArticleTranslation = ({ title, author, lang, children }: { title: string; author: string; lang: string; children: ReactNode }) => (
  <section lang={lang} className="mt-16 overflow-hidden rounded-[1.75rem] border border-black/8 bg-white shadow-[0_8px_40px_-12px_rgba(15,23,42,0.12)]">
    <div className="border-b border-black/8 bg-[hsl(var(--brand-navy-950))] px-6 py-5 md:px-10">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[hsl(var(--brand-gold-500))]">Translation</p>
      <h2 className="mt-2 font-serif text-2xl font-bold text-white md:text-3xl">{title}</h2>
      <p className="mt-1 text-sm text-white/70">{author}</p>
    </div>
    <div className="space-y-5 px-6 py-8 text-[1.0625rem] leading-[1.9] text-on-light-secondary md:px-10 md:py-10">{children}</div>
  </section>
);
