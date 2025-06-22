import "./Skills.css";
import SectionHeading from "../../components/layout/SectionHeading/SectionHeading";

import { useRef } from "react";
import { SlideInUp } from "../../transitions/Slide";
// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const skillsContainerRef = useRef();
  const skillsTimeline = useRef();

  useGSAP(
    () => {
      skillsTimeline.current = gsap.timeline({
        scrollTrigger: {
          trigger: skillsContainerRef.current,
          // markers: true,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });

      skillsTimeline.current.add(
        SlideInUp(skillsContainerRef.current.querySelectorAll(".slide-in-up")),
      );

      return () => skillsTimeline.current.kill();
    },
    {
      scope: skillsContainerRef, // Limits selector to children of container
      dependencies: [], // Run once after mount
    },
  );

  return (
    <section id="skills" className="section" ref={skillsContainerRef}>
      <div className="container mx-auto flex max-w-[var(--container-width)] flex-col gap-12">
        <div className="slide-in-up">
          <SectionHeading
            label="Skills"
            title="What I Know"
            title_text="Here are the tools I've used most over the past few years to build projects for my clients and myself."
            direction="col"
            text_m_width="max-w-120"
            title_m_width=""
          />
        </div>

        <div className="slide-in-up flex flex-col gap-8 md:gap-16">
          <div className="grid grid-cols-2 gap-2 md:grid-cols-5 md:gap-3">
            <SkillCard title="JavaScript" name="js" />
            <SkillCard title="TypeScript" name="ts" />
            <SkillCard title="React" name="react" />

            <div className="">
              <SkillCard title="Angular" name="angular" />
            </div>
            <div className="col-span-2 md:col-auto">
              <SkillCard title="CSS" name="css" />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <SkillCardMini name="html5" title="HTML" />
            <SkillCardMini name="bootstrap" title="Bootstrap" />
            <SkillCardMini name="sass" title="SASS" />
            <SkillCardMini name="tailwindcss" title="TailwindCSS" />
            <SkillCardMini name="git" title="Git" />
            <SkillCardMini
              customImgSrc="https://go-skill-icons.vercel.app/api/icons?i=gsap&theme=light"
              title="GSAP"
              name={false}
            />
            <SkillCardMini name="python" title="Python" />
            <SkillCardMini name="nodejs" title="Node.js" />
            <SkillCardMini name="mysql" title="MySQL" />
            <SkillCardMini name="express" title="Express.js" />
            <SkillCardMini name="mongodb" title="MongoDB" />

            <SkillCardMini name="wordpress" type="plain" title="WordPress" />
            <SkillCardMini
              customImgSrc="https://go-skill-icons.vercel.app/api/icons?i=webflow&theme=light"
              title="Webflow"
              name={false}
            />
            <SkillCardMini title="Framer" name="framermotion" />
            <SkillCardMini
              customImgSrc="https://go-skill-icons.vercel.app/api/icons?i=webstudio&theme=light"
              title="WebStudio.is"
              name={false}
            />
            <SkillCardMini name="photoshop" title="Photoshop" />
            <SkillCardMini name="php" title="PHP" />
            <SkillCardMini name="c" title="C" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

function SkillCard({ name = "js", title = "JavaScript", theme = "light" }) {
  return (
    <div className="skill-card flex w-full cursor-pointer flex-col gap-6 rounded-xl bg-white px-3 py-4 text-center hover:scale-95">
      <img
        className="h-16"
        src={`https://go-skill-icons.vercel.app/api/icons?i=${name}&theme=${theme}`}
        alt={title}
      />

      <p className="text-base font-medium tracking-tight text-[var(--primary-dark-blue)]">
        {title}
      </p>
    </div>
  );
}

function SkillCardMini({
  name = "html",
  title = "html",
  type = "original",
  customImgSrc,
}) {
  return (
    <div className="skill-card-mini relative flex cursor-pointer rounded-lg border-1 border-stone-100 bg-white p-3 transition-all duration-200 ease-in-out">
      <img
        className="h-11"
        src={
          name
            ? `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${type}.svg`
            : customImgSrc
        }
        alt={title}
      />

      <span className="tooltip">{title}</span>
    </div>
  );
}
