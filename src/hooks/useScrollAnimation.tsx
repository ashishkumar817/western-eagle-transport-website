import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollAnimation = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const selector = "main section:not(#home) > .container-custom > *, main section:not(#home) .container-custom > .grid > *, .animate-on-scroll";
    let revealObserver: IntersectionObserver | undefined;
    let scanFrame = 0;

    if (!reducedMotion && "IntersectionObserver" in window) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animated");
              revealObserver?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
      );
    }

    const prepareTargets = () => {
      document.querySelectorAll(selector).forEach((element, index) => {
        if (element.getAttribute("data-scroll-reveal") === "true") return;

        element.classList.add("animate-on-scroll");
        element.setAttribute("data-scroll-reveal", "true");
        (element as HTMLElement).style.setProperty(
          "--reveal-delay",
          `${Math.min(index % 5, 4) * 65}ms`
        );

        if (revealObserver) revealObserver.observe(element);
        else element.classList.add("animated");
      });
    };

    prepareTargets();

    // Lazy-loaded pages may mount after the route effect; pick up their sections too.
    const mutationObserver = new MutationObserver(() => {
      if (scanFrame) return;
      scanFrame = window.requestAnimationFrame(() => {
        scanFrame = 0;
        prepareTargets();
      });
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      revealObserver?.disconnect();
      if (scanFrame) window.cancelAnimationFrame(scanFrame);
    };
  }, [pathname]);
};

export default useScrollAnimation;
