import { ArrowRight, BriefcaseBusiness, CircleDollarSign, ShieldCheck, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const disciplines = [
  {
    title: "Supply Chain Optimization",
    copy: "End-to-end audit and re-engineering of your logistics flow to minimize overhead and maximize velocity.",
    icon: BriefcaseBusiness,
    cta: "Explore Framework",
  },
  {
    title: "Customs & Compliance",
    copy: "Navigating the intricate landscape of international trade laws with focused risk mitigation and policy alignment.",
    icon: ShieldCheck,
    cta: "View Protocol",
  },
  {
    title: "Logistics Management",
    copy: "Command-center style oversight for global shipping, tracking every unit with operational precision.",
    icon: Truck,
    cta: "Platform Access",
  },
  {
    title: "Trade Finance Support",
    copy: "Optimizing cash flow through strategic trade credit and international financial instruments.",
    icon: CircleDollarSign,
    cta: "Consult Finance",
  },
];

const corridorStats = [
  { value: "42", label: "Active Ports" },
  { value: "115", label: "Trade Routes" },
  { value: "12k+", label: "TEU/Month" },
  { value: "24/7", label: "Surveillance" },
];

const ImportExport = () => {
  return (
    <PageLayout
      title="Global Trade Solutions | Import / Export | Ewan"
      description="Futuristic import and export enablement by Ewan with compliance, logistics, and strategic trade architecture."
      canonicalPath="/import-export/"
    >
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_#3B1F4B_0%,_#250935_100%)] px-6 pb-20 pt-16 text-white md:pb-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(#D4AF37 0.5px, transparent 0.5px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 opacity-30 lg:block">
          <img src="/stitch/import-export/hero-overlay.jpg" alt="" className="h-full w-full object-cover mix-blend-overlay" />
        </div>

        <div className="container relative mx-auto flex flex-col items-center gap-16 lg:flex-row lg:gap-20">
          <div className="lg:w-3/5">
            <p className="mb-8 inline-flex rounded-full border border-[#D4AF37]/35 bg-[#fed65b]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#ffe088]">
              The Future of Logistics
            </p>
            <h1 className="font-serif text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Global Trade <br />
              <span className="text-[#e9c349]">Simplified.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Architecting seamless corridors across borders. We leverage advanced logistics modeling and compliance
              intelligence to accelerate your global footprint.
            </p>
            <div className="mt-10">
              <Link
                to="/ask-soham"
                className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-7 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
              >
                Get a Trade Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative lg:w-2/5">
            <div className="absolute -left-4 -top-8 z-20 max-w-xs rotate-3 rounded-3xl border border-white/10 bg-white/70 p-6 text-[#1a1a2e] shadow-2xl backdrop-blur-xl sm:-left-8 sm:-top-10">
              <ShieldCheck className="mb-3 h-7 w-7 text-[#745c00]" />
              <h3 className="text-lg font-bold">99.8% Compliance</h3>
              <p className="mt-2 text-sm text-[#4b444d]">Zero-friction customs passage for complex industrial imports.</p>
            </div>
            <div className="flex h-[320px] w-[320px] items-center justify-center rounded-full border border-white/10 bg-white/5 p-8 backdrop-blur-md sm:h-[380px] sm:w-[380px]">
              <img
                src="/stitch/import-export/hero-circle.jpg"
                alt="High-tech shipping terminal with digital logistics overlays"
                className="h-full w-full rounded-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fcf8ff] px-6 py-20">
        <div className="container mx-auto grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <img
            src="/stitch/import-export/philosophy.jpg"
            alt="Modern cargo port architecture at dawn"
            className="w-full rounded-[2.5rem] object-cover shadow-md"
          />
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#735c00]">Our Philosophy</p>
            <h2 className="font-serif text-4xl font-bold tracking-tight text-[#250935] sm:text-5xl">
              Unlocking Global Trade via Strategic Architecture
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-[#4b444d]">
              <p>
                We do not just move products; we design ecosystems. Our approach treats the global supply chain as a
                fluid system of interconnected nodes, where every minute saved is a competitive advantage earned.
              </p>
              <p>
                By integrating local regulatory expertise with futuristic logistics tech, Ewan turns import and export
                from an operational burden into a growth engine.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f2ff] px-6 py-20">
        <div className="container mx-auto">
          <div className="mb-14 flex items-end justify-between gap-6">
            <h2 className="max-w-2xl font-serif text-4xl font-bold tracking-tight text-[#250935] sm:text-5xl">
              Core Logistics Disciplines
            </h2>
          </div>
          <div className="grid grid-cols-1 overflow-hidden rounded-[2rem] border border-[#cec3ce]/40 bg-[#cec3ce]/30 md:grid-cols-2">
            {disciplines.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="group bg-white p-10 transition-colors duration-500 hover:bg-[#250935]">
                  <Icon className="mb-6 h-8 w-8 text-[#735c00] group-hover:text-[#ffe088]" />
                  <h3 className="text-2xl font-bold text-[#250935] group-hover:text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#4b444d] group-hover:text-white/75">{item.copy}</p>
                  <Link to="/ask-soham" className="mt-6 inline-flex items-center gap-2 font-semibold text-[#745c00] group-hover:text-[#ffe088]">
                    {item.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#fcf8ff] px-6 py-20">
        <div className="container mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold tracking-tight text-[#250935] sm:text-5xl">Our Global Corridors</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#4b444d]">
            Visualizing the pathways of progress. Our network covers major hubs across EMEA, APAC, and the Americas.
          </p>
          <div className="relative mx-auto mt-12 max-w-6xl">
            <div className="pointer-events-none absolute inset-0 z-0 opacity-15">
              <svg className="h-full w-full" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
                <path d="M100,250 Q250,100 500,250 T900,250" fill="none" stroke="#D4AF37" strokeDasharray="10,5" strokeWidth="2" />
                <path d="M200,400 Q400,200 600,400 T800,100" fill="none" stroke="#250935" strokeWidth="1.5" />
                <circle cx="100" cy="250" r="4" fill="#D4AF37" />
                <circle cx="500" cy="250" r="4" fill="#D4AF37" />
                <circle cx="900" cy="250" r="4" fill="#D4AF37" />
              </svg>
            </div>
            <img
              src="/stitch/import-export/corridors-map.jpg"
              alt="Stylized global trade route map"
              className="relative z-10 w-full rounded-[2.2rem] object-cover shadow-xl grayscale"
            />
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {corridorStats.map((item) => (
                <article key={item.label} className="rounded-2xl bg-[#efecff] p-5">
                  <p className="text-3xl font-bold text-[#250935]">{item.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#4b444d]">{item.label}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="container mx-auto max-w-5xl rounded-[2.5rem] border border-[#cec3ce]/40 bg-white/80 p-10 text-center shadow-[0_20px_45px_rgba(26,26,46,0.08)] backdrop-blur-xl sm:p-14">
          <h2 className="font-serif text-3xl font-bold leading-tight text-[#250935] sm:text-5xl">
            Ready to Command the <br /> International Market?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[#4b444d]">
            Schedule a strategy session with our senior trade architects to audit your current logistics footprint.
          </p>
          <Link
            to="/ask-soham"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-8 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
          >
            Get a Trade Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default ImportExport;
/*
import { ArrowRight, BriefcaseBusiness, CircleDollarSign, ShieldCheck, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const disciplines = [
  {
    title: "Supply Chain Optimization",
    copy: "End-to-end audit and re-engineering of your logistics flow to minimize overhead and maximize velocity.",
    icon: BriefcaseBusiness,
    cta: "Explore Framework",
  },
  {
    title: "Customs & Compliance",
    copy: "Navigating the intricate landscape of international trade laws with focused risk mitigation and policy alignment.",
    icon: ShieldCheck,
    cta: "View Protocol",
  },
  {
    title: "Logistics Management",
    copy: "Command-center style oversight for global shipping, tracking every unit with operational precision.",
    icon: Truck,
    cta: "Platform Access",
  },
  {
    title: "Trade Finance Support",
    copy: "Optimizing cash flow through strategic trade credit and international financial instruments.",
    icon: CircleDollarSign,
    cta: "Consult Finance",
  },
];

const corridorStats = [
  { value: "42", label: "Active Ports" },
  { value: "115", label: "Trade Routes" },
  { value: "12k+", label: "TEU/Month" },
  { value: "24/7", label: "Surveillance" },
];

const ImportExport = () => {
  return (
    <PageLayout
      title="Global Trade Solutions | Import / Export | Ewan"
      description="Futuristic import and export enablement by Ewan with compliance, logistics, and strategic trade architecture."
      canonicalPath="/import-export/"
    >
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_#3B1F4B_0%,_#250935_100%)] px-6 pb-20 pt-16 text-white md:pb-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(#D4AF37 0.5px, transparent 0.5px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 opacity-30 lg:block">
          <img src="/stitch/import-export/hero-overlay.jpg" alt="" className="h-full w-full object-cover mix-blend-overlay" />
        </div>

        <div className="container relative mx-auto flex flex-col items-center gap-16 lg:flex-row lg:gap-20">
          <div className="lg:w-3/5">
            <p className="mb-8 inline-flex rounded-full border border-[#D4AF37]/35 bg-[#fed65b]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#ffe088]">
              The Future of Logistics
            </p>
            <h1 className="font-serif text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Global Trade <br />
              <span className="text-[#e9c349]">Simplified.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Architecting seamless corridors across borders. We leverage advanced logistics modeling and compliance
              intelligence to accelerate your global footprint.
            </p>
            <div className="mt-10">
              <Link
                to="/ask-soham"
                className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-7 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
              >
                Get a Trade Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative lg:w-2/5">
            <div className="absolute -left-4 -top-8 z-20 max-w-xs rotate-3 rounded-3xl border border-white/10 bg-white/70 p-6 text-[#1a1a2e] shadow-2xl backdrop-blur-xl sm:-left-8 sm:-top-10">
              <ShieldCheck className="mb-3 h-7 w-7 text-[#745c00]" />
              <h3 className="text-lg font-bold">99.8% Compliance</h3>
              <p className="mt-2 text-sm text-[#4b444d]">Zero-friction customs passage for complex industrial imports.</p>
            </div>
            <div className="flex h-[320px] w-[320px] items-center justify-center rounded-full border border-white/10 bg-white/5 p-8 backdrop-blur-md sm:h-[380px] sm:w-[380px]">
              <img
                src="/stitch/import-export/hero-circle.jpg"
                alt="High-tech shipping terminal with digital logistics overlays"
                className="h-full w-full rounded-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fcf8ff] px-6 py-20">
        <div className="container mx-auto grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <img
            src="/stitch/import-export/philosophy.jpg"
            alt="Modern cargo port architecture at dawn"
            className="w-full rounded-[2.5rem] object-cover shadow-md"
          />
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#735c00]">Our Philosophy</p>
            <h2 className="font-serif text-4xl font-bold tracking-tight text-[#250935] sm:text-5xl">
              Unlocking Global Trade via Strategic Architecture
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-[#4b444d]">
              <p>
                We do not just move products; we design ecosystems. Our approach treats the global supply chain as a
                fluid system of interconnected nodes, where every minute saved is a competitive advantage earned.
              </p>
              <p>
                By integrating local regulatory expertise with futuristic logistics tech, Ewan turns import and export
                from an operational burden into a growth engine.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f2ff] px-6 py-20">
        <div className="container mx-auto">
          <div className="mb-14 flex items-end justify-between gap-6">
            <h2 className="max-w-2xl font-serif text-4xl font-bold tracking-tight text-[#250935] sm:text-5xl">
              Core Logistics Disciplines
            </h2>
          </div>
          <div className="grid grid-cols-1 overflow-hidden rounded-[2rem] border border-[#cec3ce]/40 bg-[#cec3ce]/30 md:grid-cols-2">
            {disciplines.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="group bg-white p-10 transition-colors duration-500 hover:bg-[#250935]">
                  <Icon className="mb-6 h-8 w-8 text-[#735c00] group-hover:text-[#ffe088]" />
                  <h3 className="text-2xl font-bold text-[#250935] group-hover:text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#4b444d] group-hover:text-white/75">{item.copy}</p>
                  <Link to="/ask-soham" className="mt-6 inline-flex items-center gap-2 font-semibold text-[#745c00] group-hover:text-[#ffe088]">
                    {item.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#fcf8ff] px-6 py-20">
        <div className="container mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold tracking-tight text-[#250935] sm:text-5xl">Our Global Corridors</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#4b444d]">
            Visualizing the pathways of progress. Our network covers major hubs across EMEA, APAC, and the Americas.
          </p>
          <div className="relative mx-auto mt-12 max-w-6xl">
            <div className="pointer-events-none absolute inset-0 z-0 opacity-15">
              <svg className="h-full w-full" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
                <path d="M100,250 Q250,100 500,250 T900,250" fill="none" stroke="#D4AF37" strokeDasharray="10,5" strokeWidth="2" />
                <path d="M200,400 Q400,200 600,400 T800,100" fill="none" stroke="#250935" strokeWidth="1.5" />
                <circle cx="100" cy="250" r="4" fill="#D4AF37" />
                <circle cx="500" cy="250" r="4" fill="#D4AF37" />
                <circle cx="900" cy="250" r="4" fill="#D4AF37" />
              </svg>
            </div>
            <img
              src="/stitch/import-export/corridors-map.jpg"
              alt="Stylized global trade route map"
              className="relative z-10 w-full rounded-[2.2rem] object-cover shadow-xl grayscale"
            />
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {corridorStats.map((item) => (
                <article key={item.label} className="rounded-2xl bg-[#efecff] p-5">
                  <p className="text-3xl font-bold text-[#250935]">{item.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#4b444d]">{item.label}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="container mx-auto max-w-5xl rounded-[2.5rem] border border-[#cec3ce]/40 bg-white/80 p-10 text-center shadow-[0_20px_45px_rgba(26,26,46,0.08)] backdrop-blur-xl sm:p-14">
          <h2 className="font-serif text-3xl font-bold leading-tight text-[#250935] sm:text-5xl">
            Ready to Command the <br /> International Market?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[#4b444d]">
            Schedule a strategy session with our senior trade architects to audit your current logistics footprint.
          </p>
          <Link
            to="/ask-soham"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-[hsl(var(--brand-gold-500))] px-8 py-3 text-sm font-semibold text-[hsl(var(--brand-navy-950))] transition hover:brightness-105"
          >
            Get a Trade Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default ImportExport;
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Global Trade Solutions | EWAN Business Solutions</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=Inter:wght@300;400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "secondary": "#735c00",
                    "surface-container-low": "#f5f2ff",
                    "outline-variant": "#cec3ce",
                    "on-secondary-container": "#745c00",
                    "on-secondary": "#ffffff",
                    "inverse-on-surface": "#f2efff",
                    "on-error": "#ffffff",
                    "inverse-primary": "#dfb9f0",
                    "error-container": "#ffdad6",
                    "on-tertiary": "#ffffff",
                    "on-surface": "#1a1a2e",
                    "error": "#ba1a1a",
                    "outline": "#7d747e",
                    "tertiary-fixed-dim": "#adc6ff",
                    "on-secondary-fixed": "#241a00",
                    "secondary-fixed-dim": "#e9c349",
                    "on-surface-variant": "#4b444d",
                    "primary-fixed": "#f5d9ff",
                    "inverse-surface": "#2f2e43",
                    "secondary-container": "#fed65b",
                    "surface-dim": "#dad7f3",
                    "primary-fixed-dim": "#dfb9f0",
                    "on-primary-fixed-variant": "#593b69",
                    "on-secondary-fixed-variant": "#574500",
                    "tertiary": "#001538",
                    "surface-variant": "#e2e0fc",
                    "on-tertiary-fixed-variant": "#004494",
                    "surface-container": "#efecff",
                    "on-tertiary-fixed": "#001a41",
                    "surface-tint": "#725282",
                    "primary": "#250935",
                    "on-primary-fixed": "#2a0e3a",
                    "surface-container-lowest": "#ffffff",
                    "surface": "#fcf8ff",
                    "on-primary": "#ffffff",
                    "background": "#fcf8ff",
                    "on-error-container": "#93000a",
                    "primary-container": "#3b1f4b",
                    "on-tertiary-container": "#5090ff",
                    "surface-container-highest": "#e2e0fc",
                    "secondary-fixed": "#ffe088",
                    "tertiary-container": "#00295f",
                    "on-primary-container": "#a886b9",
                    "tertiary-fixed": "#d8e2ff",
                    "on-background": "#1a1a2e",
                    "surface-bright": "#fcf8ff",
                    "surface-container-high": "#e8e5ff"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "fontFamily": {
                    "headline": ["Plus Jakarta Sans"],
                    "body": ["Inter"],
                    "label": ["Inter"]
            }
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
        }
        .glass-panel {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
        }
        .doodle-overlay {
            background-image: radial-gradient(#D4AF37 0.5px, transparent 0.5px);
            background-size: 24px 24px;
            opacity: 0.15;
        }
        .hero-gradient {
            background: radial-gradient(circle at top right, #3B1F4B 0%, #250935 100%);
        }
    </style>
</head>
<body class="bg-background font-body text-on-surface selection:bg-secondary-container">
<!-- TopNavBar -->
<nav class="sticky top-0 w-full z-50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl shadow-[0_20px_40px_rgba(26,26,46,0.06)]">
<div class="flex justify-between items-center max-w-7xl mx-auto px-10 py-6">
<span class="text-xl font-bold tracking-tighter text-[#250935] dark:text-white font-headline">EWAN Business Solutions</span>
<div class="hidden md:flex items-center gap-8">
<a class="font-['Plus_Jakarta_Sans'] tracking-tight font-medium text-sm text-[#250935] dark:text-slate-300 hover:text-[#D4AF37] transition-colors" href="#">Market Entry</a>
<a class="font-['Plus_Jakarta_Sans'] tracking-tight font-medium text-sm text-[#250935] dark:text-slate-300 hover:text-[#D4AF37] transition-colors" href="#">Language &amp; Localization</a>
<a class="font-['Plus_Jakarta_Sans'] tracking-tight font-medium text-sm text-[#D4AF37] border-b-2 border-[#D4AF37] pb-1" href="#">Industries</a>
<a class="font-['Plus_Jakarta_Sans'] tracking-tight font-medium text-sm text-[#250935] dark:text-slate-300 hover:text-[#D4AF37] transition-colors" href="#">About Us</a>
<a class="font-['Plus_Jakarta_Sans'] tracking-tight font-medium text-sm text-[#250935] dark:text-slate-300 hover:text-[#D4AF37] transition-colors" href="#">Media</a>
<a class="font-['Plus_Jakarta_Sans'] tracking-tight font-medium text-sm text-[#250935] dark:text-slate-300 hover:text-[#D4AF37] transition-colors" href="#">Contact Us</a>
</div>
<div class="flex items-center gap-6">
<span class="material-symbols-outlined text-[#250935] dark:text-purple-100 cursor-pointer hover:scale-105 transition-transform">language</span>
<button class="bg-secondary text-on-secondary px-6 py-2.5 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 active:scale-95">
                    Ask Soham — 15 Min Free
                </button>
</div>
</div>
</nav>
<main>
<!-- Futuristic Hero Section -->
<section class="relative min-height-[921px] overflow-hidden hero-gradient text-white py-32 px-10">
<div class="absolute inset-0 doodle-overlay"></div>
<div class="absolute top-0 right-0 w-1/2 h-full opacity-20">
<img alt="" class="w-full h-full object-cover mix-blend-overlay" data-alt="Technical logistics map with glowing digital data points and schematic doodles over a dark global oceanic background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoAMVQqZeH5307ht2XJddBjjWQqRHexh_DBvBPha6Ni47xFjQJ1Jh4vTf-sOf0s4l1ychxr5hTTyG1ge7K3rtqVr1GXCzxHSOK-fxee9sCVdY8y85A5yKsm2Pb1Zm_aohWHItUYZyRzKRKszlSKMImhecWhefPJzvnTq1rrv07s7dHTUPZUSQpRmbTxpZFZ013iHFeWla1EMhzzhoiRG8GFRwKzdJzlb51OtY00ijqHTJmm2c_KdAhgS01SN8bvs6OTwYMQnTdHPE"/>
</div>
<div class="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-20">
<div class="md:w-3/5">
<div class="inline-block px-4 py-1.5 bg-secondary-container/10 border border-secondary/30 rounded-full mb-8">
<span class="text-secondary-fixed text-xs font-label font-bold tracking-[0.2em] uppercase">The Future of Logistics</span>
</div>
<h1 class="text-6xl md:text-8xl font-headline font-extrabold tracking-tighter leading-[0.9] mb-10">
                        Global Trade <br/><span class="text-secondary-fixed-dim">Simplified.</span>
</h1>
<p class="text-xl font-body font-light text-surface-variant/80 max-w-xl mb-12 leading-relaxed">
                        Architecting seamless corridors across borders. We leverage advanced logistics modeling and compliance intelligence to accelerate your global footprint.
                    </p>
<div class="flex gap-6">
<button class="bg-secondary text-on-secondary px-10 py-5 rounded-full font-headline font-bold text-lg hover:scale-105 transition-transform">
                            Get a Trade Consultation
                        </button>
</div>
</div>
<div class="md:w-2/5 relative">
<!-- Layered Glassmorphism Cards -->
<div class="glass-panel p-8 rounded-3xl border border-white/10 shadow-2xl transform rotate-3 absolute -top-12 -left-12 z-20 max-w-xs">
<span class="material-symbols-outlined text-secondary-fixed text-4xl mb-4">analytics</span>
<h4 class="text-primary font-headline font-bold text-lg">99.8% Compliance</h4>
<p class="text-on-surface-variant text-sm mt-2 font-body">Zero-friction customs passage for complex industrial imports.</p>
</div>
<div class="bg-white/5 backdrop-blur-md p-10 rounded-full border border-white/5 w-96 h-96 flex items-center justify-center">
<div class="relative w-64 h-64">
<img alt="" class="w-full h-full object-cover rounded-full shadow-2xl" data-alt="Close-up of a high-tech shipping container terminal with futuristic digital overlays showing pathing and optimization data" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA0L0w8US5NmSNHtLBdmzaN7GMJCoSjBeNGLuQJL902_GgKxnv4C3mxEjN7fuD6BSp3fX8E8wO2hozBmc7veVL4dKPZDpONekZPUSp5AV1wNzNS0zrto7-DfEXVYpD0oEECHN6KpyW3v0fTQ-sVMZghbXUwGn5R_e8VAv4ahBVDphqfqk4fiIgJx7oA1e1Ve3xwt7AzQql2AL5wK3H_m--hmI2rW0gpxa3NQHVjiRVnkakAUzY7CbgeSme-plWpfv6bpMAH-CQPbA"/>
</div>
</div>
</div>
</div>
</section>
<!-- Unlocking Global Trade -->
<section class="py-32 px-10 bg-surface">
<div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-24 items-center">
<div class="md:w-1/2">
<img alt="" class="rounded-[2.5rem] shadow-sm" data-alt="Minimalist architectural shot of a modern cargo port at dawn, focus on structural clean lines and soft purple light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9TT1at597N6kpBFuEy2S4iM09VVTo2UxFmYI2S-S-Ug1OP9n2i0_xI7cRot9CYliIvUtL2IB0xgClaUPW3DJeSdLHrHLJKcLW041NG06EBgX6mpd2as7wJK1CiC9di65G0opmkC5aP7ORO0EmyebX7AExDnlF1hMikKq-tN_KWvPfHs38gWVMPxH-CZ1-mEqOW2FUOXKx3CzzKsHHboVA0KOLLCq__cYl3omBr-5Yx5QSR7zC790QIp4lnajfch70tsU9RlO5w9U"/>
</div>
<div class="md:w-1/2">
<span class="text-secondary font-label font-bold tracking-widest text-xs uppercase mb-6 block">Our Philosophy</span>
<h2 class="text-5xl font-headline font-bold text-primary tracking-tight mb-8">Unlocking Global Trade via Strategic Architecture</h2>
<div class="space-y-8 text-on-surface-variant font-body leading-relaxed text-lg">
<p>We don't just move products; we design ecosystems. Our approach treats the global supply chain as a fluid system of interconnected nodes, where every minute saved is a competitive advantage earned.</p>
<p>By integrating local regulatory expertise with futuristic logistics tech, EWAN ensures your business transacts without boundaries, turning "import/export" from a headache into a hallmark of your growth.</p>
</div>
</div>
</div>
</section>
<!-- Services: Strategy Reveal -->
<section class="py-32 px-10 bg-surface-container-low">
<div class="max-w-7xl mx-auto">
<div class="flex justify-between items-end mb-20">
<div class="max-w-2xl">
<h2 class="text-5xl font-headline font-bold text-primary tracking-tight">Core Logistics Disciplines</h2>
</div>
<div class="hidden md:block">
<span class="material-symbols-outlined text-6xl text-outline-variant/30">monitoring</span>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/20 overflow-hidden rounded-[2.5rem] border border-outline-variant/10">
<!-- Supply Chain Optimization -->
<div class="bg-surface-container-lowest p-12 group hover:bg-primary transition-colors duration-500">
<span class="material-symbols-outlined text-4xl text-secondary mb-8 group-hover:text-secondary-fixed">precision_manufacturing</span>
<h3 class="text-2xl font-headline font-bold text-primary group-hover:text-white mb-4">Supply Chain Optimization</h3>
<p class="text-on-surface-variant group-hover:text-surface-variant/70 leading-relaxed">End-to-end audit and re-engineering of your logistics flow to minimize overhead and maximize velocity.</p>
<div class="mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
<a class="text-secondary-fixed-dim font-bold flex items-center gap-2" href="#">Explore Framework <span class="material-symbols-outlined">arrow_right_alt</span></a>
</div>
</div>
<!-- Customs & Compliance -->
<div class="bg-surface-container-lowest p-12 group hover:bg-primary transition-colors duration-500">
<span class="material-symbols-outlined text-4xl text-secondary mb-8 group-hover:text-secondary-fixed">verified_user</span>
<h3 class="text-2xl font-headline font-bold text-primary group-hover:text-white mb-4">Customs &amp; Compliance</h3>
<p class="text-on-surface-variant group-hover:text-surface-variant/70 leading-relaxed">Navigating the intricate landscape of international trade laws with 100% focus on risk mitigation.</p>
<div class="mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
<a class="text-secondary-fixed-dim font-bold flex items-center gap-2" href="#">View Protocol <span class="material-symbols-outlined">arrow_right_alt</span></a>
</div>
</div>
<!-- Logistics Management -->
<div class="bg-surface-container-lowest p-12 group hover:bg-primary transition-colors duration-500">
<span class="material-symbols-outlined text-4xl text-secondary mb-8 group-hover:text-secondary-fixed">local_shipping</span>
<h3 class="text-2xl font-headline font-bold text-primary group-hover:text-white mb-4">Logistics Management</h3>
<p class="text-on-surface-variant group-hover:text-surface-variant/70 leading-relaxed">Command-center style oversight for global shipping, tracking every unit with surgical precision.</p>
<div class="mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
<a class="text-secondary-fixed-dim font-bold flex items-center gap-2" href="#">Platform Access <span class="material-symbols-outlined">arrow_right_alt</span></a>
</div>
</div>
<!-- Trade Finance Support -->
<div class="bg-surface-container-lowest p-12 group hover:bg-primary transition-colors duration-500">
<span class="material-symbols-outlined text-4xl text-secondary mb-8 group-hover:text-secondary-fixed">payments</span>
<h3 class="text-2xl font-headline font-bold text-primary group-hover:text-white mb-4">Trade Finance Support</h3>
<p class="text-on-surface-variant group-hover:text-surface-variant/70 leading-relaxed">Optimizing cash flow through strategic trade credit and international financial instruments.</p>
<div class="mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
<a class="text-secondary-fixed-dim font-bold flex items-center gap-2" href="#">Consult Finance <span class="material-symbols-outlined">arrow_right_alt</span></a>
</div>
</div>
</div>
</div>
</section>
<!-- Global Corridors Section -->
<section class="py-32 px-10 bg-surface overflow-hidden">
<div class="max-w-7xl mx-auto text-center mb-20">
<h2 class="text-5xl font-headline font-bold text-primary tracking-tight mb-6">Our Global Corridors</h2>
<p class="text-on-surface-variant max-w-2xl mx-auto text-lg">Visualizing the pathways of progress. Our network covers major hubs across EMEA, APAC, and the Americas.</p>
</div>
<div class="relative max-w-6xl mx-auto">
<!-- Map Visualization with Doodles -->
<div class="absolute inset-0 z-0 opacity-10 pointer-events-none">
<svg class="w-full h-full" viewbox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
<path d="M100,250 Q250,100 500,250 T900,250" fill="none" stroke="#D4AF37" stroke-dasharray="10,5" stroke-width="2"></path>
<path d="M200,400 Q400,200 600,400 T800,100" fill="none" stroke="#250935" stroke-width="1.5"></path>
<circle cx="100" cy="250" fill="#D4AF37" r="4"></circle>
<circle cx="500" cy="250" fill="#D4AF37" r="4"></circle>
<circle cx="900" cy="250" fill="#D4AF37" r="4"></circle>
</svg>
</div>
<div class="relative z-10">
<img alt="" class="w-full h-auto rounded-[3rem] shadow-xl grayscale" data-alt="Stylized monochromatic map of the world with clean lines and geometric technical annotations showing primary shipping lanes" data-location="Global" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgzlNJ4HdD2TYZ6ciqLXyLIxjkjooDBZbLHeQ893Qg6OU-wUhSIzPrvR37Zn3MTXWgqTrQiW4FFcg6COGAOiOCi-4zq-0q7WpFGjTOddxtPTjz0vifB2CrrZ1sy5nkv1_YZLUcDy2HIQ1mFYGBTV2dHT8ZPrSO6tP9lO6QtIhFtoxWFwjjVRZ9O5d5BqHKOCK7IKzG6ULFUGEtEU9_cLYUdPc60DOKNR5TDdBipxfirO_4TqqjTaAe2HxpUZOXFZ71uV39tBWdRrU"/>
</div>
<div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
<div class="text-center p-6 bg-surface-container rounded-2xl">
<span class="block text-3xl font-headline font-extrabold text-primary mb-2">42</span>
<span class="text-xs font-label uppercase tracking-widest text-on-surface-variant">Active Ports</span>
</div>
<div class="text-center p-6 bg-surface-container rounded-2xl">
<span class="block text-3xl font-headline font-extrabold text-primary mb-2">115</span>
<span class="text-xs font-label uppercase tracking-widest text-on-surface-variant">Trade Routes</span>
</div>
<div class="text-center p-6 bg-surface-container rounded-2xl">
<span class="block text-3xl font-headline font-extrabold text-primary mb-2">12k+</span>
<span class="text-xs font-label uppercase tracking-widest text-on-surface-variant">TEU/Month</span>
</div>
<div class="text-center p-6 bg-surface-container rounded-2xl">
<span class="block text-3xl font-headline font-extrabold text-primary mb-2">24/7</span>
<span class="text-xs font-label uppercase tracking-widest text-on-surface-variant">Surveillance</span>
</div>
</div>
</div>
</section>
<!-- Final CTA -->
<section class="py-24 px-10">
<div class="max-w-5xl mx-auto glass-panel border border-outline-variant/20 rounded-[3.5rem] p-16 text-center relative overflow-hidden">
<div class="absolute -top-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
<div class="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
<h2 class="text-4xl md:text-5xl font-headline font-bold text-primary mb-8 leading-tight">Ready to Command the <br/>International Market?</h2>
<p class="text-lg text-on-surface-variant mb-12 max-w-xl mx-auto">Schedule a strategy session with our senior trade architects to audit your current logistics footprint.</p>
<button class="bg-secondary text-on-secondary px-12 py-5 rounded-full font-headline font-bold text-xl hover:scale-105 transition-transform shadow-lg shadow-secondary/20">
                    Get a Trade Consultation
                </button>
</div>
</section>
</main>
<!-- Footer -->
<footer class="w-full rounded-t-[2.5rem] mt-20 bg-[#3B1F4B] dark:bg-[#1A1A2E] text-white">
<div class="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-12 py-24">
<div class="md:col-span-1">
<span class="text-2xl font-bold text-white mb-6 block font-headline">EWAN Business Solutions</span>
<p class="font-['Inter'] font-light text-sm tracking-wide text-purple-200/70 mb-8">Architecting growth corridors for the world's most ambitious enterprises.</p>
</div>
<div>
<h4 class="font-headline font-bold text-lg mb-8">Solutions</h4>
<div class="flex flex-col gap-4">
<a class="font-['Inter'] font-light text-sm tracking-wide text-purple-200/70 hover:text-white transition-colors hover:translate-x-1 transition-transform" href="#">Market Entry Solutions</a>
<a class="font-['Inter'] font-light text-sm tracking-wide text-purple-200/70 hover:text-white transition-colors hover:translate-x-1 transition-transform" href="#">Localization Services</a>
<a class="font-['Inter'] font-light text-sm tracking-wide text-purple-200/70 hover:text-white transition-colors hover:translate-x-1 transition-transform" href="#">Industry Insights</a>
</div>
</div>
<div>
<h4 class="font-headline font-bold text-lg mb-8">Company</h4>
<div class="flex flex-col gap-4">
<a class="font-['Inter'] font-light text-sm tracking-wide text-purple-200/70 hover:text-white transition-colors hover:translate-x-1 transition-transform" href="#">About Our Vision</a>
<a class="font-['Inter'] font-light text-sm tracking-wide text-purple-200/70 hover:text-white transition-colors hover:translate-x-1 transition-transform" href="#">Media Center</a>
<a class="font-['Inter'] font-light text-sm tracking-wide text-purple-200/70 hover:text-white transition-colors hover:translate-x-1 transition-transform" href="#">Contact Strategy</a>
</div>
</div>
<div>
<h4 class="font-headline font-bold text-lg mb-8">Newsletter</h4>
<p class="font-['Inter'] font-light text-sm tracking-wide text-purple-200/70 mb-6">Strategic insights delivered bi-weekly.</p>
<div class="flex">
<input class="bg-white/10 border-none rounded-l-xl px-4 py-3 text-sm focus:ring-1 focus:ring-secondary w-full text-white placeholder-purple-200/40" placeholder="Email address" type="email"/>
<button class="bg-secondary px-4 py-3 rounded-r-xl"><span class="material-symbols-outlined">send</span></button>
</div>
</div>
</div>
<div class="max-w-7xl mx-auto px-12 py-8 border-t border-white/10">
<p class="font-['Inter'] font-light text-sm tracking-wide text-purple-200/50">© 2024 EWAN Business Solutions. All rights reserved.</p>
</div>
</footer>
</body></html>
*/