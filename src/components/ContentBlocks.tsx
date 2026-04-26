import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

type HeroProps = {
  label?: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string; external?: boolean };
  secondaryCta?: { label: string; href: string; external?: boolean };
};

export const Hero = ({ label, title, description, primaryCta, secondaryCta }: HeroProps) => {
  return (
    <section className="container mx-auto px-6 py-14 lg:py-20">
      {label ? <p className="text-xs uppercase tracking-[0.22em] text-[hsl(var(--brand-gold-500))]">{label}</p> : null}
      <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">{title}</h1>
      <p className="mt-4 max-w-3xl text-base text-foreground/80 sm:text-lg">{description}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        {primaryCta ? <CtaButton cta={primaryCta} variant="default" /> : null}
        {secondaryCta ? <CtaButton cta={secondaryCta} variant="outline" /> : null}
      </div>
    </section>
  );
};

function CtaButton({
  cta,
  variant,
}: {
  cta: { label: string; href: string; external?: boolean };
  variant: "default" | "outline";
}) {
  if (cta.external) {
    return (
      <Button asChild variant={variant}>
        <a href={cta.href} target="_blank" rel="noreferrer">
          {cta.label}
        </a>
      </Button>
    );
  }

  return (
    <Button asChild variant={variant}>
      <Link to={cta.href}>{cta.label}</Link>
    </Button>
  );
}

export const Section = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => (
  <section className="container mx-auto px-6 py-8">
    <h2 className="text-2xl font-semibold">{title}</h2>
    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-foreground/85">
          {item}
        </li>
      ))}
    </ul>
  </section>
);
