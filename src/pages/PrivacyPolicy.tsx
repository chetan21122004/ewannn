import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Mail, MapPin, Scale, ShieldCheck } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { privacyPolicyMeta, privacyPolicySections } from "@/data/privacyPolicyContent";
import { COMPANY_EMAIL, SITE_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

type PolicyBlock = (typeof privacyPolicySections)[number]["blocks"][number];

const renderInlineEmail = (text: string) => {
  const parts = text.split(COMPANY_EMAIL);

  if (parts.length === 1) {
    return text;
  }

  return parts.flatMap((part, index) => {
    if (index === parts.length - 1) {
      return [part];
    }

    return [
      part,
      <a
        key={`email-${index}`}
        href={`mailto:${COMPANY_EMAIL}`}
        className="font-medium text-[hsl(var(--brand-purple-700))] underline-offset-2 hover:underline"
      >
        {COMPANY_EMAIL}
      </a>,
    ];
  });
};

const renderInlineUrl = (text: string) => {
  const parts = text.split(SITE_URL);

  if (parts.length === 1) {
    return renderInlineEmail(text);
  }

  return parts.flatMap((part, index) => {
    if (index === parts.length - 1) {
      return [renderInlineEmail(part)];
    }

    return [
      renderInlineEmail(part),
      <a
        key={`url-${index}`}
        href={SITE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-[hsl(var(--brand-purple-700))] underline-offset-2 hover:underline"
      >
        {SITE_URL}
      </a>,
    ];
  });
};

const PolicyBlockContent = ({ block }: { block: PolicyBlock }) => {
  if (block.type === "paragraph") {
    return (
      <p className="text-[15px] leading-[1.75] text-on-light-secondary">
        {renderInlineUrl(block.text)}
      </p>
    );
  }

  if (block.type === "notice") {
    return (
      <div className="flex gap-3 rounded-xl border border-[hsl(var(--brand-purple-500)/0.16)] border-l-[3px] border-l-[hsl(var(--brand-purple-700))] bg-[hsl(var(--surface-light-50))] px-4 py-4 sm:px-5">
        <ShieldCheck
          className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-purple-700))]"
          strokeWidth={1.75}
          aria-hidden
        />
        <p className="text-[13px] font-medium leading-[1.7] tracking-wide text-on-light-secondary">
          {block.text}
        </p>
      </div>
    );
  }

  if (block.type === "subheading") {
    return (
      <h3 className="pt-1 font-serif text-[1.05rem] font-semibold text-on-light">{block.text}</h3>
    );
  }

  return (
    <ul className="space-y-2.5">
      {block.items.map((item) => (
        <li key={item} className="flex gap-3 text-[15px] leading-[1.75] text-on-light-secondary">
          <span
            className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand-purple-700)/0.55)]"
            aria-hidden
          />
          <span>{renderInlineUrl(item)}</span>
        </li>
      ))}
    </ul>
  );
};

const metaItems = [
  {
    icon: ShieldCheck,
    label: "Effective",
    value: privacyPolicyMeta.effectiveDate,
  },
  {
    icon: Scale,
    label: "Jurisdiction",
    value: privacyPolicyMeta.jurisdiction,
  },
  {
    icon: Mail,
    label: "Privacy contact",
    value: COMPANY_EMAIL,
    href: "/contact",
  },
] as const;

const PrivacyPolicy = () => (
  <PageLayout
    title={privacyPolicyMeta.title}
    description={privacyPolicyMeta.description}
    canonicalPath="/privacy-policy"
  >
    <section className="relative overflow-hidden border-b border-[hsl(var(--border-light))] theme-section-soft">
      <div className="pointer-events-none absolute inset-0 opacity-[0.1] theme-grid-overlay-light" />

      <div className="container relative z-10 mx-auto max-w-5xl px-5 py-10 sm:px-6 sm:py-14 lg:py-16">
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-on-light-muted transition-colors hover:text-[hsl(var(--brand-purple-700))]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Back to Home
        </Link>

        <div className="max-w-3xl">
          <span className="mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider theme-card-light text-[hsl(var(--brand-purple-700))]">
            Legal & Compliance
          </span>
          <h1 className="mb-4 font-serif text-[2rem] font-bold leading-tight text-on-light sm:text-4xl lg:text-[2.75rem]">
            Privacy Policy
          </h1>
          <p className="mb-6 text-base leading-relaxed text-on-light-muted sm:text-lg">
            {privacyPolicyMeta.summary}
          </p>
          <p className="text-sm text-on-light-secondary">
            Issued by{" "}
            <span className="font-semibold text-on-light">{privacyPolicyMeta.companyLegalName}</span>{" "}
            (“UVAN”).
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {metaItems.map(({ icon: Icon, label, value, ...rest }) => (
            <div
              key={label}
              className="rounded-2xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-card))] px-4 py-4 sm:px-5"
            >
              <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[hsl(var(--brand-purple-700))]">
                <Icon className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden />
                {label}
              </div>
              {"href" in rest && rest.href ? (
                <a
                  href={rest.href}
                  className="text-sm font-medium text-on-light transition-colors hover:text-[hsl(var(--brand-purple-700))] sm:text-[15px]"
                >
                  {value}
                </a>
              ) : (
                <p className="text-sm font-medium text-on-light sm:text-[15px]">{value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="theme-section-soft">
      <div className="container mx-auto max-w-5xl px-5 py-10 sm:px-6 sm:py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-14">
          <aside className="lg:sticky lg:top-8 lg:max-h-[calc(100dvh-8rem)] lg:self-start">
            <nav
              aria-label="Privacy policy sections"
              className="flex max-h-[min(24rem,calc(100dvh-8rem))] flex-col overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-card))] p-5 lg:max-h-[calc(100dvh-8rem)]"
            >
              <p className="mb-4 shrink-0 text-[11px] font-semibold uppercase tracking-[0.16em] text-[hsl(var(--brand-purple-700))]">
                Contents
              </p>
              <ol className="min-h-0 flex-1 space-y-1 overflow-y-auto overscroll-contain pr-1 [scrollbar-color:hsl(var(--brand-purple-700)/0.25)_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[hsl(var(--brand-purple-700)/0.25)] [&::-webkit-scrollbar-track]:bg-transparent">
                {privacyPolicySections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="group flex gap-2.5 rounded-lg px-2 py-1.5 text-[13px] leading-snug text-on-light-muted transition-colors hover:bg-[hsl(var(--surface-light-50))] hover:text-[hsl(var(--brand-purple-700))]"
                    >
                      <span className="mt-0.5 font-mono text-[10px] font-bold text-[hsl(var(--brand-purple-700)/0.45)] group-hover:text-[hsl(var(--brand-purple-700))]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{section.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className="min-w-0 rounded-3xl border border-[hsl(var(--border-light))] bg-[hsl(var(--surface-light-card))] px-5 py-8 shadow-[0_8px_32px_hsl(var(--brand-navy-950)/0.05)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="space-y-12">
              {privacyPolicySections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  className={cn(
                    "scroll-mt-28",
                    index < privacyPolicySections.length - 1 &&
                      "border-b border-[hsl(var(--border-light))] pb-12",
                  )}
                >
                  <div className="mb-5 flex items-start gap-4">
                    <span className="mt-1 font-mono text-xs font-bold tracking-[0.2em] text-[hsl(var(--brand-purple-700)/0.5)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-serif text-xl font-bold leading-snug text-on-light sm:text-2xl">
                      {section.title}
                    </h2>
                  </div>

                  <div className="space-y-4 pl-0 sm:pl-8">
                    {section.blocks.map((block, blockIndex) => (
                      <PolicyBlockContent key={`${section.id}-${blockIndex}`} block={block} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl bg-[linear-gradient(135deg,hsl(var(--brand-navy-950))_0%,hsl(var(--brand-purple-700))_100%)] px-6 py-8 text-white sm:px-8 sm:py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">
                Questions or requests
              </p>
              <h2 className="mb-2 font-serif text-2xl font-bold">Contact our privacy team</h2>
              <p className="text-sm leading-relaxed text-white/75 sm:text-[15px]">
                For consent withdrawal, data access requests, or any privacy-related concern, reach out
                directly and we will respond within a reasonable period.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-white/70">
                <MapPin className="h-4 w-4 shrink-0" aria-hidden />
                {privacyPolicyMeta.jurisdiction}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition-opacity hover:opacity-90"
              >
                <Mail className="h-4 w-4" aria-hidden />
                {COMPANY_EMAIL}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Contact page
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-on-light-muted">
          Last updated {privacyPolicyMeta.effectiveDate}. UVAN may revise this policy from time to time.
        </p>
      </div>
    </section>
  </PageLayout>
);

export default PrivacyPolicy;
