import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function SlideInUp(target, options = {}) {
  return gsap.from(target, {
    y: "50%",
    opacity: 0,
    filter: "blur(8px)",
    duration: 0.8,
    stagger: 0.2,
    ...options,
  });
}

export function SlideInRight(target, options = {}) {
  gsap.from(target, {
    x: "50%",
    opacity: 0,
    filter: "blur(8px)",
    duration: 0.8,
    stagger: 0.2,
    ...options,
  });
}
