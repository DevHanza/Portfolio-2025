import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { useEffect, useState, useRef } from "react";

// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import { SlideInLeft, SlideInRight, SlideInUp } from "../../transitions/Slide";
import { FadeIn } from "../../transitions/Fade";

function Experience() {
  const expContainerRef = useRef();
  const expTimeline = useRef();

  useGSAP(
    () => {
      expTimeline.current = gsap.timeline({
        scrollTrigger: {
          trigger: expContainerRef.current,
          start: "top 50%",
          markers: true,
          toggleActions: "play none none none",
        },
      });

      expTimeline.current
        .add(
          SlideInUp(expContainerRef.current.querySelectorAll(".slide-in-up")),
        )
        .add(
          [
            SlideInLeft(
              expContainerRef.current.querySelectorAll(".slide-in-left"),
            ),
            SlideInRight(
              expContainerRef.current.querySelectorAll(".slide-in-right"),
            ),
            FadeIn(expContainerRef.current.querySelectorAll(".fade-in")),
          ],
          "<",
        );

      return () => {
        expTimeline.current.kill();
      };
    },
    {
      scope: expContainerRef, // Limits selector to children of container
      dependencies: [], // Run once after mount
      revertOnUpdate: false, // optional
    },
  );

  return (
    <section id="experience" className="section" ref={expContainerRef}>
      <div className="container mx-auto flex max-w-[var(--container-width)] flex-col gap-12">
        <div className="slide-in-up">
          <SectionHeading
            label="Experience"
            title="Where I’ve Been & What I’ve Done"
            title_text="This is how I've spent the past few years — helping businesses grow through my skills and making the web a better place."
            direction="row"
            text_m_width=""
            title_m_width="max-w-70"
          />
        </div>
        <div className="flex flex-col gap-8 md:flex-row md:gap-0">
          <h3 className="text-center text-xl font-medium tracking-tight md:hidden">
            Experience
          </h3>

          <div className="slide-in-left flex flex-1 flex-col gap-2 md:gap-4">
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard to="2025-06-01" />
          </div>

          <div className="fade-in relative my-12 hidden w-12 flex-col justify-between md:flex">
            <span className="absolute left-1/2 h-full w-[3px] -translate-x-1/2 bg-stone-200"></span>

            <div className="relative">
              <div className="z-2 mx-auto h-4 w-4 rounded-full bg-stone-200"></div>
              <div className="absolute top-1/2 -z-1 h-[3px] w-full -translate-y-1/2 bg-stone-200"></div>
            </div>

            <div className="relative">
              <div className="z-2 mx-auto h-4 w-4 rounded-full bg-stone-200"></div>
              <div className="absolute top-1/2 -z-1 h-[3px] w-full -translate-y-1/2 bg-stone-200"></div>
            </div>

            <div className="relative">
              <div className="z-2 mx-auto h-4 w-4 rounded-full bg-stone-200"></div>
              <div className="absolute top-1/2 -z-1 h-[3px] w-full -translate-y-1/2 bg-stone-200"></div>
            </div>

            <div className="relative">
              <div className="z-2 mx-auto h-4 w-4 rounded-full bg-stone-200"></div>
              <div className="absolute top-1/2 -z-1 h-[3px] w-full -translate-y-1/2 bg-stone-200"></div>
            </div>
          </div>

          <h3 className="text-center text-xl font-medium tracking-tight md:hidden">
            Education
          </h3>

          <div className="slide-in-right flex flex-1 flex-col gap-2 md:gap-4">
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;

function ExperienceCard({
  title = "Web Developer",
  loc = "IFS",
  logo = "logo.png",
  from = "2018-01-01",
  to = "today",
}) {
  useEffect(() => {
    setExpTime(calcDate(startDate, endDate));
  }, []);

  const [expTime, setExpTime] = useState("0 mos");

  const startDate = new Date(from);
  const endDate = to === "today" ? new Date() : new Date(to);

  const startDateString = formatExpDate(startDate);
  const endDateString = to === "today" ? "Present" : formatExpDate(endDate);

  return (
    <div className="flex flex-row items-start gap-5 rounded-xl bg-stone-100 px-4 py-4.5">
      <img
        className="max-h-16 rounded-lg"
        src={`./${logo}`}
        alt={`Logo of ${loc}`}
      />
      <div className="">
        <h6 className="text-lg font-medium">{title}</h6>
        <p className="text-sm text-[var(--primary-mid-blue)]">{loc}</p>
        <p className="text-sm text-[var(--primary-dark-blue)]/75">
          {startDateString} - {endDateString} · {expTime}
        </p>
      </div>
    </div>
  );
}

function calcDate(startDate, endDate) {
  let monthsDiff = endDate.getMonth() - startDate.getMonth();
  let yearsDiff = endDate.getFullYear() - startDate.getFullYear();

  if (yearsDiff < 1) {
    return `${monthsDiff} mos`;
  }

  return `${yearsDiff} yrs ${monthsDiff} mos`;
}

function formatExpDate(date) {
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();
  return `${month} ${year}`;
}
