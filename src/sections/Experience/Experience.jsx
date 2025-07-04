import SectionHeading from "../../components/layout/SectionHeading/SectionHeading";
import { useEffect, useState, useRef } from "react";

// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import { SlideInLeft, SlideInRight, SlideInUp } from "../../transitions/Slide";
import { FadeIn } from "../../transitions/Fade";

const ExperienceData = [
  {
    id: 1,
    title: "Web Developer",
    loc: "Avlanche",
    logo: "/logos/avlanche_logo.png",
    from: "2025-03-24",
    to: "today",
    dot: "right",
  },
  {
    id: 2,
    title: "Frontend Developer",
    loc: "Fiverr – Freelance",
    logo: "/logos/fiverr_logo.png",
    from: "2024-01-01",
    to: "2025-03-24",
    dot: "right",
  },
  {
    id: 3,
    title: "Freelance Web Developer",
    loc: "Self Employed",
    logo: "/org_logo.png",
    from: "2022-01-01",
    to: "2025-03-24",
    dot: "right",
  },
];

const EducationData = [
  {
    id: 1,
    title: "Trainee - Full Stack Developer",
    loc: "Univeristy of Moratuwa",
    logo: "/logos/uom_logo.png",
    from: "2023-05",
    to: "2024-05",
    dot: "left",
  },
  // {
  //   id: 2,
  //   title: "CS50: Introduction to Computer Science",
  //   loc: "Harvard University",
  //   logo: "/logos/harvard_logo.png",
  //   from: "2024-08",
  //   to: "2024-11",
  //   dot: "left",
  // },
  {
    id: 3,
    title: "G.C.E Advanced Level",
    loc: "Nugawela Central College",
    logo: "/logos/ncc_logo.png",
    from: "2021-12",
    to: "2023-12",
    dot: "left",
  },
  {
    id: 4,
    title: "English Language",
    loc: "Vocational Training Authority",
    logo: "/logos/vta_logo.png",
    from: "2021-04",
    to: "2022-04",
    dot: "left",
  },
  {
    id: 5,
    title: "G.C.E Ordinary Level",
    loc: "Sri Rahula College",
    logo: "/logos/srck_logo.png",
    from: "2010-01",
    to: "2021-01",
    dot: "left",
  },
];

function Experience() {
  const expContainerRef = useRef();
  const expTimeline = useRef();

  useGSAP(
    () => {
      expTimeline.current = gsap.timeline({
        scrollTrigger: {
          trigger: expContainerRef.current,
          start: "top 50%",
          // markers: true,
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
            {ExperienceData.map((item) => (
              <ExperienceCard key={item.id} {...item} />
            ))}
          </div>

          <div className="fade-in relative hidden flex-col justify-between md:flex">
            <span className="absolute left-1/2 h-full w-[3px] -translate-x-1/2 bg-stone-200"></span>
          </div>

          <h3 className="text-center text-xl font-medium tracking-tight md:hidden">
            Education
          </h3>

          <div className="slide-in-right flex flex-1 flex-col gap-2 md:gap-4">
            {EducationData.map((item) => (
              <ExperienceCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;

// EXPERIENCE CARD

function ExperienceCard({
  title = "Web Developer",
  loc = "IFS",
  logo = "/logo.png",
  from = "2018-01-01",
  to = "today",
  dot = "right",
}) {
  useEffect(() => {
    setExpTime(calcDate(startDate, endDate));
  }, []);

  const [expTime, setExpTime] = useState("0 mos");
  const startDate = new Date(from);
  const endDate = to === "today" ? new Date() : new Date(to);
  const startDateString = formatExpDate(startDate);
  const endDateString = to === "today" ? "Present" : formatExpDate(endDate);

  const dotRight = dot === "right";
  const dotLeft = dot === "left";

  return (
    <div
      className={`flex items-center justify-center ${dotLeft ? "flex-row-reverse" : "flex-row"}`}
    >
      <div className="flex w-full flex-row items-start gap-5 rounded-xl bg-stone-100 px-4 py-4.5">
        <img
          className="max-h-16 rounded-lg"
          src={`${logo}`}
          alt={`Logo of ${loc}`}
        />

        <div className="relative">
          <h6 className="text-lg font-medium tracking-tight">{title}</h6>
          <p className="text-sm text-[var(--primary-mid-blue)]">{loc}</p>
          <p className="text-sm text-[var(--primary-dark-blue)]/75">
            {startDateString} - {endDateString} · {expTime}
          </p>
        </div>
      </div>
      <div className={`relative hidden w-6 flex-row items-center md:flex`}>
        <div className="h-[3px] w-full bg-stone-200"></div>
        <div
          className={`absolute z-2 mx-auto h-4 w-4 min-w-4 rounded-full bg-stone-200 ${dotLeft ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"}`}
        ></div>
      </div>
    </div>
  );
}

function calcDate(startDate, endDate) {
  const yearsDiff = endDate.getFullYear() - startDate.getFullYear();
  const monthsDiff = endDate.getMonth() - startDate.getMonth();
  const totalMonths = yearsDiff * 12 + monthsDiff;

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return `${years} yrs ${months} mos`;
}

function formatExpDate(date) {
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();
  return `${month} ${year}`;
}
