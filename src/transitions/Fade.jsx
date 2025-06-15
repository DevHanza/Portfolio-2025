import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function FadeIn(target, options = {}) {
  return gsap.from(target, {
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    ...options,
  });
}
