import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const NAV_OFFSET = 112;

const HashScrollHandler = () => {
  const location = useLocation();
  const previousPathname = useRef(location.pathname);

  useEffect(() => {
    const isPathChanged = previousPathname.current !== location.pathname;
    previousPathname.current = location.pathname;

    // Any page-to-page link should open from the top.
    if (isPathChanged) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }

    if (!location.hash) return;

    const hashId = decodeURIComponent(location.hash.slice(1));
    const target = document.getElementById(hashId);
    if (!target) return;

    // For section links: reset to top first, then animate down.
    window.scrollTo({ top: 0, behavior: "auto" });

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const targetTop = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
        window.scrollTo({
          top: Math.max(targetTop, 0),
          behavior: "smooth",
        });
      });
    });
  }, [location.pathname, location.hash]);

  return null;
};

export default HashScrollHandler;
