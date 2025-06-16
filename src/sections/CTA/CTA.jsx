import "./CTA.css";
import { Button } from "../../components/Buttons/Buttons";

import { useRef } from "react";

// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import { SlideInUp } from "../../transitions/Slide";
import { FadeIn } from "../../transitions/Fade";

function CTA() {
  const ctaRef = useRef();
  const ctaTimeline = useRef();

  useGSAP(
    () => {
      ctaTimeline.current = gsap.timeline({
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 50%",
          // markers: true,
          toggleActions: "play none none none",
        },
      });

      ctaTimeline.current
        .add(SlideInUp(ctaRef.current.querySelectorAll(".slide-in-up")))
        .add(
          FadeIn(ctaRef.current.querySelectorAll(".fade-in"), {
            duration: 0.4,
          }),
        );

      return () => {
        ctaTimeline.current.kill();
      };
    },
    {
      scope: ctaRef, // Limits selector to children of container
      dependencies: [], // Run once after mount
      revertOnUpdate: false, // optional
    },
  );

  return (
    <section id="cta" className="section px-0!" ref={ctaRef}>
      <div className="slide-in-up container mx-auto flex max-w-[var(--container-width)] flex-col gap-12">
        <div className="cta min-h-25 rounded-3xl px-6 py-14 text-center">
          <h2 className="fade-in mx-auto mb-4 max-w-60 text-2xl leading-tight font-semibold tracking-tight text-white md:max-w-xl lg:text-3xl">
            Need a Developer You Can Count On?
          </h2>
          <p className="fade-in mx-auto mb-7 max-w-lg text-base font-light text-stone-200">
            Whether you're hiring or starting a new project, I build fast,
            modern websites that work beautifully and feel great to use.
          </p>
          <div className="fade-in">
            <Button type="secondary" href="https://calendly.com" newtab="true">
              Book a Free Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
