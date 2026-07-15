import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, type LucideIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export type GlobalTalkiesServiceItem = {
  id: string;
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
  doodle: string;
  doodleAlt: string;
};

type GlobalTalkiesServiceCardProps = {
  service: GlobalTalkiesServiceItem;
  index: number;
  reduceMotion: boolean;
  hidden: { opacity: number; y?: number } | false;
  show: { opacity: number; y?: number };
  transition: (delay?: number) => { duration: number; delay: number; ease: readonly [number, number, number, number] };
};

const teaserFromDescription = (description: string) => {
  const sentence = description.split(/(?<=[.!?])\s+/)[0] ?? description;
  return sentence.length > 120 ? `${sentence.slice(0, 117).trim()}…` : sentence;
};

const GlobalTalkiesServiceCard = ({
  service,
  index,
  reduceMotion,
  hidden,
  show,
  transition,
}: GlobalTalkiesServiceCardProps) => {
  const [open, setOpen] = useState(false);
  const Icon = service.icon;
  const teaser = teaserFromDescription(service.description);

  return (
    <>
      <motion.button
        type="button"
        id={service.id}
        initial={hidden}
        whileInView={show}
        viewport={{ once: true, margin: "-48px" }}
        transition={transition((index % 3) * 0.08)}
        aria-haspopup="dialog"
        aria-label={`${service.title} — view service scope`}
        onClick={() => setOpen(true)}
        className="group relative scroll-mt-28 flex min-h-[248px] w-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-[hsl(var(--border-light))] bg-white p-5 text-left shadow-[0_10px_28px_hsl(var(--brand-navy-950)/0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-[hsl(var(--brand-purple-500)/0.28)] hover:shadow-[0_18px_40px_hsl(var(--brand-navy-950)/0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-purple-700))] focus-visible:ring-offset-2 sm:min-h-[268px] sm:rounded-[1.35rem] sm:p-6"
      >
        <span
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--brand-gold-500)/0.55)] to-transparent opacity-0 transition duration-300 group-hover:opacity-100"
          aria-hidden
        />

        <span
          className="pointer-events-none absolute top-3 left-3 h-2 w-2 border-t border-l border-[hsl(var(--brand-purple-700)/0.2)] transition duration-300 group-hover:border-[hsl(var(--brand-gold-500)/0.65)]"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute top-3 right-3 h-2 w-2 border-t border-r border-[hsl(var(--brand-purple-700)/0.2)] transition duration-300 group-hover:border-[hsl(var(--brand-gold-500)/0.65)]"
          aria-hidden
        />

        <div className="mb-3 flex items-start justify-between gap-3">
          <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-[hsl(var(--brand-purple-700)/0.75)] sm:text-[11px]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[linear-gradient(135deg,hsl(var(--brand-purple-700))_0%,hsl(var(--brand-cyan-500))_100%)] text-white shadow-gold-sm">
            <Icon className="h-4 w-4" aria-hidden />
          </div>
        </div>

        <motion.img
          src={service.doodle}
          alt=""
          aria-hidden
          className="mx-auto mb-3 h-20 w-full max-w-[120px] object-contain opacity-90 sm:h-24 sm:max-w-[140px]"
          animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
        />

        <span className="font-serif text-lg font-bold leading-snug text-on-light sm:text-xl">{service.title}</span>
        <span className="mt-2 line-clamp-2 text-xs leading-relaxed text-on-light-secondary sm:text-sm">{teaser}</span>
      </motion.button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[min(88vh,640px)] max-w-md gap-0 overflow-hidden rounded-[1.35rem] border-[hsl(var(--border-light))] bg-white p-0 shadow-[0_28px_80px_hsl(var(--brand-navy-950)/0.18)] sm:max-w-lg">
          <div className="relative overflow-hidden bg-[linear-gradient(135deg,hsl(var(--brand-navy-950))_0%,hsl(var(--brand-purple-800))_100%)] px-5 py-5 text-white sm:px-6 sm:py-6">
            <div className="pointer-events-none absolute inset-0 opacity-[0.12] theme-grid-overlay-light" aria-hidden />
            <DialogHeader className="relative space-y-3 text-left">
              <div className="flex items-start justify-between gap-3">
                <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-[hsl(var(--brand-gold-500))]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-[hsl(var(--brand-gold-500))] backdrop-blur-sm">
                  <Icon className="h-4 w-4" aria-hidden />
                </div>
              </div>
              <DialogTitle className="font-serif text-xl font-bold leading-snug text-white sm:text-2xl">
                {service.title}
              </DialogTitle>
              <DialogDescription className="text-sm leading-relaxed text-white/78">{service.description}</DialogDescription>
            </DialogHeader>
          </div>

          <div className="max-h-[min(52vh,360px)] overflow-y-auto overscroll-contain px-5 py-4 sm:px-6 sm:py-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--brand-purple-700))]">
              Deliverables
            </p>
            <ul className="mt-3 space-y-2.5">
              {service.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-on-light-secondary">
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand-purple-700))]"
                    aria-hidden
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GlobalTalkiesServiceCard;
