import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealOptions {
  trigger?: string | Element;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  stagger?: number;
  duration?: number;
  delay?: number;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  once?: boolean;
  threshold?: number;
}

/**
 * A custom hook for revealing elements on scroll using GSAP animations
 */
export const useScrollReveal = (
  selector: string,
  options: ScrollRevealOptions = {}
) => {
  const elementRef = useRef<HTMLElement | null>(null);
  const animationCompletedRef = useRef(false);

  const {
    trigger,
    start = "top 80%",
    end = "bottom 20%",
    scrub = false,
    markers = false,
    stagger = 0.1,
    duration = 0.6,
    delay = 0,
    from = { opacity: 0, y: 50 },
    to = { opacity: 1, y: 0 },
    once = true,
    threshold = 0.1,
  } = options;

  useEffect(() => {
    if (animationCompletedRef.current) return;

    const element = elementRef.current;
    if (!element) return;

    // Find all elements matching the selector
    const elements = element.querySelectorAll(selector);
    if (elements.length === 0) return;

    // Convert NodeList to Array and set willChange
    const targets = Array.from(elements);
    targets.forEach((t) => {
      (t as HTMLElement).style.willChange = "transform, opacity";
    });

    // Create the timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger || element,
        start,
        end: scrub ? end : undefined,
        scrub,
        markers,
        once,
        toggleActions: once
          ? "play none none none"
          : "play reverse play reverse",
      },
      onComplete: () => {
        if (once) {
          animationCompletedRef.current = true;
          gsap.set(targets, {
            clearProps: "willChange",
          });
        }
      },
    });

    // Set initial state and animate
    tl.set(targets, { ...from, immediateRender: false, force3D: true });
    tl.to(targets, {
      ...to,
      duration,
      delay,
      stagger,
      ease: "power3.out",
      force3D: true,
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars.trigger === element || t.vars.trigger === trigger) {
          t.kill();
        }
      });
      tl.kill();
    };
  }, [
    selector,
    trigger,
    start,
    end,
    scrub,
    markers,
    stagger,
    duration,
    delay,
    from,
    to,
    once,
    threshold,
  ]);

  return elementRef;
};
