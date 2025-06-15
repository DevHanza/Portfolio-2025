import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const SlideInUp = (target, options = {}) => {
  return gsap.from(target, {
    y: "50%",
    opacity: 0,
    filter: "blur(8px)",
    duration: 0.5,
    stagger: 0.2,
    ...options,
  });
};

export const SlideInRight = (target, options = {}) => {
  return gsap.from(target, {
    x: "50%",
    opacity: 0,
    filter: "blur(8px)",
    duration: 0.5,
    stagger: 0.2,
    ...options,
  });
};

export const SlideInLeft = (target, options = {}) => {
  return gsap.from(target, {
    x: "-50%",
    opacity: 0,
    filter: "blur(8px)",
    duration: 0.5,
    stagger: 0.2,
    ...options,
  });
};
