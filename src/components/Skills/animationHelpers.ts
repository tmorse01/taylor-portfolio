import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

/**
 * Sets up staggered animations for skill cards
 * @param ref Reference to the container with skill cards
 * @param selector CSS selector for the items to animate
 */
export const setupSkillCardAnimations = (
  ref: RefObject<HTMLElement>,
  selector: string = ".skill-card"
): (() => void) => {
  const skillCards = ref.current?.querySelectorAll(selector);
  if (!skillCards?.length) return () => {};

  // Set initial state
  gsap.set(skillCards, {
    y: 50,
    opacity: 0,
  });

  // Create scroll trigger
  const scrollTrigger = ScrollTrigger.batch(skillCards, {
    start: "top 85%",
    onEnter: (batch) => {
      gsap.to(batch, {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
      });
    },
    once: true,
  });

  // Return cleanup function
  return () => {
    scrollTrigger.forEach((trigger) => trigger.kill());
  };
};

/**
 * Creates a gsap timeline for skill section entrance animations
 */
export const createSkillsEntryAnimation = (
  headingRef: RefObject<HTMLElement>
): gsap.core.Timeline => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: headingRef.current,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  if (headingRef.current) {
    timeline
      .from(headingRef.current.querySelector("h2"), {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      })
      .from(
        headingRef.current.querySelector("p"),
        {
          y: 20,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3"
      );
  }

  return timeline;
};
