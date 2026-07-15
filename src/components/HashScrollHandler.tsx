import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import {
  applyHashHighlight,
  dispatchHashTarget,
  findHashTarget,
  getHashId,
} from "@/lib/hashNavigation";

const NAV_OFFSET = 112;

const HashScrollHandler = () => {
  const location = useLocation();
  const previousPathname = useRef(location.pathname);

  useEffect(() => {
    const isPathChanged = previousPathname.current !== location.pathname;
    previousPathname.current = location.pathname;

    if (!location.hash) {
      if (isPathChanged) {
        window.scrollTo({ top: 0, behavior: "auto" });
      }
      return;
    }

    const hashId = getHashId(location.hash);
    let cancelled = false;
    let attempts = 0;

    const scrollToTarget = () => {
      if (cancelled) return;

      const target = findHashTarget(hashId);
      if (!target) {
        if (attempts++ < 30) {
          requestAnimationFrame(scrollToTarget);
        }
        return;
      }

      if (isPathChanged) {
        window.scrollTo({ top: 0, behavior: "auto" });
      }

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const targetTop = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
          window.scrollTo({
            top: Math.max(targetTop, 0),
            behavior: "smooth",
          });

          window.setTimeout(() => {
            if (cancelled) return;
            applyHashHighlight(target);
            dispatchHashTarget(hashId);
          }, isPathChanged ? 720 : 380);
        });
      });
    };

    scrollToTarget();

    return () => {
      cancelled = true;
    };
  }, [location.pathname, location.hash]);

  return null;
};

export default HashScrollHandler;
