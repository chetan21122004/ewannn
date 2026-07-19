import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import type { AskSohamLocationState } from "@/components/AskSohamInquiryProvider";
import {
  applyHashHighlight,
  dispatchHashTarget,
  findHashTarget,
  getHashId,
  isNonScrollHash,
} from "@/lib/hashNavigation";

const NAV_OFFSET = 112;

const HashScrollHandler = () => {
  const location = useLocation();
  const previousPathname = useRef(location.pathname);

  useEffect(() => {
    const isPathChanged = previousPathname.current !== location.pathname;
    previousPathname.current = location.pathname;

    if (location.hash) {
      return;
    }

    const state = location.state as AskSohamLocationState | null;
    if (state?.openInquiry) {
      return;
    }

    if (isPathChanged) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [location.pathname, location.hash, location.state]);

  useLayoutEffect(() => {
    const hashId = getHashId(location.hash);
    if (!hashId || isNonScrollHash(hashId)) {
      return;
    }

    const isPathChanged = previousPathname.current !== location.pathname;
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

      const targetTop = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
      window.scrollTo({
        top: Math.max(targetTop, 0),
        behavior: isPathChanged ? "auto" : "smooth",
      });

      window.setTimeout(() => {
        if (cancelled) return;
        applyHashHighlight(target);
        dispatchHashTarget(hashId);
      }, isPathChanged ? 120 : 380);
    };

    scrollToTarget();

    return () => {
      cancelled = true;
    };
  }, [location.pathname, location.hash]);

  return null;
};

export default HashScrollHandler;
