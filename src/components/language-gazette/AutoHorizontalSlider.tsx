import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

type AutoHorizontalSliderProps = {
  /** Accessible label for the carousel region */
  ariaLabel: string;
  items: ReactNode[];
  /** Tailwind basis classes per slide */
  slideClassName?: string;
  autoplayMs?: number;
  /** Tailwind gradient stop class for edge fades, e.g. from-[hsl(40_30%_97%)] */
  edgeFadeFromClass?: string;
  className?: string;
};

const DEFAULT_SLIDE = "basis-[78%] sm:basis-[52%] md:basis-[38%] lg:basis-[30%] xl:basis-[26%]";

const AutoHorizontalSlider = ({
  ariaLabel,
  items,
  slideClassName = DEFAULT_SLIDE,
  autoplayMs = 4500,
  edgeFadeFromClass = "from-white",
  className,
}: AutoHorizontalSliderProps) => {
  const reduceMotion = useReducedMotion();
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const pausedRef = useRef(false);

  const onSelect = useCallback((carouselApi: CarouselApi) => {
    setCanScrollPrev(carouselApi.canScrollPrev());
    setCanScrollNext(carouselApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api.off("reInit", onSelect);
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  useEffect(() => {
    if (!api || reduceMotion || items.length <= 1) return;

    const tick = () => {
      if (pausedRef.current) return;
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    };

    const id = window.setInterval(tick, autoplayMs);
    return () => window.clearInterval(id);
  }, [api, autoplayMs, items.length, reduceMotion]);

  if (items.length === 0) return null;

  return (
    <div
      className={cn("relative", className)}
      aria-label={ariaLabel}
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
      }}
      onFocusCapture={() => {
        pausedRef.current = true;
      }}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          pausedRef.current = false;
        }
      }}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r to-transparent sm:w-12",
          edgeFadeFromClass,
        )}
        aria-hidden
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l to-transparent sm:w-12",
          edgeFadeFromClass,
        )}
        aria-hidden
      />

      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: items.length > 2, dragFree: true, containScroll: "trimSnaps" }}
        className="px-1"
      >
        <CarouselContent className="-ml-3 sm:-ml-4">
          {items.map((item, index) => (
            <CarouselItem key={index} className={cn("pl-3 sm:pl-4", slideClassName)}>
              {item}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {items.length > 1 ? (
        <>
          <button
            type="button"
            onClick={() => api?.scrollPrev()}
            disabled={!canScrollPrev}
            className="absolute left-0 top-[38%] z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[hsl(var(--border-light))] bg-white text-on-light shadow-md transition hover:bg-[hsl(var(--surface-light-100))] disabled:pointer-events-none disabled:opacity-35 sm:left-1 sm:h-10 sm:w-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => api?.scrollNext()}
            disabled={!canScrollNext}
            className="absolute right-0 top-[38%] z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[hsl(var(--border-light))] bg-white text-on-light shadow-md transition hover:bg-[hsl(var(--surface-light-100))] disabled:pointer-events-none disabled:opacity-35 sm:right-1 sm:h-10 sm:w-10"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4" aria-hidden />
          </button>
        </>
      ) : null}
    </div>
  );
};

export default AutoHorizontalSlider;
