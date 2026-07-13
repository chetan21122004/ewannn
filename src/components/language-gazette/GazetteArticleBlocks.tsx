import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export const ArticleLead = ({ children }: { children: ReactNode }) => (
  <p className="gazette-lead text-base leading-[1.8] text-[hsl(var(--brand-navy-950))] sm:text-lg sm:leading-[1.85] md:text-xl">{children}</p>
);

export const ArticleSection = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="mt-10 sm:mt-14">
    <h2 className="font-serif text-xl font-bold text-[hsl(var(--brand-navy-950))] sm:text-2xl md:text-3xl">{title}</h2>
    <div className="mt-2 h-1 w-12 rounded-full bg-[hsl(var(--brand-gold-500))] sm:w-16" />
    <div className="mt-5 space-y-4 text-base leading-[1.8] text-on-light-secondary sm:mt-6 sm:space-y-5 sm:text-[1.0625rem] sm:leading-[1.85]">{children}</div>
  </section>
);

export const ArticlePullQuote = ({ children, attribution }: { children: ReactNode; attribution?: string }) => (
  <figure className="relative my-8 overflow-hidden rounded-xl border-l-4 border-[hsl(var(--brand-purple-700))] bg-[hsl(var(--surface-light-50))] px-5 py-8 sm:my-12 sm:rounded-2xl sm:px-8 sm:py-10 md:px-12 md:py-12">
    <div className="absolute right-4 top-3 font-serif text-6xl leading-none text-[hsl(var(--brand-purple-700)/0.12)] sm:right-6 sm:top-4 sm:text-8xl">&ldquo;</div>
    <blockquote className="relative font-serif text-lg italic leading-relaxed text-on-light sm:text-xl md:text-2xl md:leading-relaxed">{children}</blockquote>
    {attribution ? <figcaption className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-[hsl(var(--brand-purple-700))] sm:mt-4 sm:text-sm sm:tracking-[0.16em]">{attribution}</figcaption> : null}
  </figure>
);

export const ArticleHighlight = ({ children }: { children: ReactNode }) => (
  <div className="my-8 border-l-4 border-[hsl(var(--brand-purple-700))] bg-[hsl(var(--surface-light-50))] px-4 py-5 sm:my-10 sm:px-6 sm:py-6 md:px-8">
    <p className="text-base font-medium leading-[1.8] text-[hsl(var(--brand-navy-950))] sm:text-[1.0625rem] sm:leading-[1.85]">{children}</p>
  </div>
);

export const ArticleClosing = ({ children }: { children: ReactNode }) => (
  <div className="mt-10 border-t border-black/10 pt-8 sm:mt-14 sm:pt-10">
    <p className="font-serif text-lg font-semibold leading-relaxed text-[hsl(var(--brand-navy-950))] sm:text-xl md:text-2xl">{children}</p>
  </div>
);

export const ArticleSteps = ({ steps }: { steps: { title: string; body: string }[] }) => (
  <ol className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
    {steps.map((step, index) => (
      <li
        key={step.title}
        className="flex flex-col gap-3 rounded-xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] p-4 sm:flex-row sm:gap-5 sm:rounded-2xl sm:p-6 md:p-7"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--brand-purple-700))] font-serif text-base font-bold text-white sm:h-11 sm:w-11 sm:text-lg">
          {index + 1}
        </span>
        <div className="min-w-0">
          <h3 className="font-serif text-lg font-bold text-[hsl(var(--brand-navy-950))] sm:text-xl">{step.title}</h3>
          <p className="mt-1.5 text-base leading-[1.8] text-on-light-secondary sm:mt-2 sm:text-[1.0625rem] sm:leading-[1.85]">{step.body}</p>
        </div>
      </li>
    ))}
  </ol>
);

export const ArticleServiceLinks = () => (
  <nav aria-label="Related UVAN services" className="mt-10 rounded-xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] p-4 sm:mt-14 sm:rounded-2xl sm:p-6 md:p-8">
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
    <div className="border-b border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-50))] px-6 py-5 md:px-10">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[hsl(var(--brand-purple-700))]">Translation</p>
      <h2 className="mt-2 font-serif text-2xl font-bold text-on-light md:text-3xl">{title}</h2>
      <p className="mt-1 text-sm text-on-light-muted">{author}</p>
    </div>
    <div className="space-y-5 px-6 py-8 text-[1.0625rem] leading-[1.9] text-on-light-secondary md:px-10 md:py-10">{children}</div>
  </section>
);
