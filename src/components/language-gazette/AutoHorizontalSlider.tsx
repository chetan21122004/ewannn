import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import Autoplay from "embla-carousel-autoplay";
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
  const rootRef = useRef<HTMLDivElement>(null);
  const autoplayPluginRef = useRef(
    Autoplay({
      delay: autoplayMs,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      playOnInit: false,
    }),
  );
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const autoplayEnabled = !reduceMotion && items.length > 1;

  const onSelect = useCallback((carouselApi: CarouselApi) => {
    if (!carouselApi) return;
    setCanScrollPrev(carouselApi.canScrollPrev());
    setCanScrollNext(carouselApi.canScrollNext());
  }, []);

  useEffect(() => {
    autoplayPluginRef.current.options.delay = autoplayMs;
  }, [autoplayMs]);

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
    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!api || !autoplayEnabled) return;

    const autoplay = autoplayPluginRef.current;

    if (isVisible && !isHovered) {
      autoplay.play();
    } else {
      autoplay.stop();
    }

    return () => {
      autoplay.stop();
    };
  }, [api, autoplayEnabled, isHovered, isVisible]);

  useEffect(() => {
    if (!api || items.length <= 1) return;

    const reInit = () => {
      api.reInit();
    };

    window.addEventListener("resize", reInit);
    return () => window.removeEventListener("resize", reInit);
  }, [api, items.length]);

  if (items.length === 0) return null;

  const loopEnabled = items.length >= 2;
  const carouselPlugins = autoplayEnabled ? [autoplayPluginRef.current] : [];

  return (
    <div
      ref={rootRef}
      className={cn("relative", className)}
      aria-label={ariaLabel}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsHovered(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsHovered(false);
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
        opts={{ align: "start", loop: loopEnabled, containScroll: "trimSnaps" }}
        plugins={carouselPlugins}
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
            disabled={!loopEnabled && !canScrollPrev}
            className="absolute left-0 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[hsl(var(--border-light))] bg-white text-on-light shadow-md transition hover:bg-[hsl(var(--surface-light-100))] disabled:pointer-events-none disabled:opacity-35 sm:left-1 sm:h-10 sm:w-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => api?.scrollNext()}
            disabled={!loopEnabled && !canScrollNext}
            className="absolute right-0 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[hsl(var(--border-light))] bg-white text-on-light shadow-md transition hover:bg-[hsl(var(--surface-light-100))] disabled:pointer-events-none disabled:opacity-35 sm:right-1 sm:h-10 sm:w-10"
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
