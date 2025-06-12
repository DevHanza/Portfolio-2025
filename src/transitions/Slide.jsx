import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function SlideInUp(target, scrollTriggerOptions = {}, options = {}) {
  return gsap.fromTo(
    target,
    { y: "50%", opacity: 0, filter: "blur(8px)" },
    {
      x: 0,
      y: 0,
      filter: "blur(0px)",
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: target,
        start: "top 40%",
        toggleActions: "play none none none",
        ...scrollTriggerOptions,
      },
      ...options,
    },
  );
}

export function SlideInRight(target, scrollTriggerOptions = {}, options = {}) {
  gsap.fromTo(
    target,
    { x: "50%", opacity: 0, filter: "blur(8px)" },
    {
      x: 0,
      y: 0,
      filter: "blur(0px)",
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: target,
        start: "top 90%",
        toggleActions: "play none none none",
        ...scrollTriggerOptions,
      },
      ...options,
    },
  );
}
