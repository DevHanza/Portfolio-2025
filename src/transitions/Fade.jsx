import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function FadeIn(target, scrollTriggerOptions = {}, options = {}) {
  return gsap.fromTo(
    target,
    { opacity: 0 },
    {
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
