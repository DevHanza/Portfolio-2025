import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const FadeIn = (target, options = {}) => {
  return gsap.from(target, {
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    ...options,
  });
};
