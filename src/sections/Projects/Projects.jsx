import SectionHeading from "../../components/SectionHeading/SectionHeading";
import ProjectCard from "../../components/ProjectCards/Card/ProjectCard";
import MiniProjectsCardSlider from "../../components/ProjectCards/MiniProjectsCardSlider";

import { useRef } from "react";
import { SlideInUp } from "../../transitions/Slide";

// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const projectsContainerRef = useRef();
  const projectsTimeline = useRef();

  useGSAP(
    () => {
      projectsTimeline.current = gsap.timeline({
        // paused: true,
        scrollTrigger: {
          trigger: projectsContainerRef.current,
          start: "top 50%",
          markers: true,
          toggleActions: "play none none none",
        },
      });
      projectsTimeline.current.pause();

      projectsTimeline.current.add(
        SlideInUp(
          projectsContainerRef.current.querySelectorAll(".slide-in-up"),
        ),
      );

      return () => {
        projectsTimeline.current.kill();
      };
    },
    {
      scope: projectsContainerRef, // Limits selector to children of container
      dependencies: [], // Run once after mount
      revertOnUpdate: false, // optional
    },
  );

  return (
    <section id="projects" className="section" ref={projectsContainerRef}>
      <div className="container mx-auto flex max-w-[var(--container-width)] flex-col gap-12">
        <div className="slide-in-up">
          <SectionHeading
            label="Projects"
            title="Projects & Work I'm Proud Of"
            title_text="Here is some of the recent work I've done using my programming and problem-solving skills."
            direction="row"
            text_m_width=""
            title_m_width="max-w-70"
          />
        </div>

        <div className="flex flex-col gap-10">
          <div className="slide-in-up flex flex-col gap-8 md:flex-row md:gap-4 lg:gap-5">
            {/* <ProjectCard ghLink="" liveLink="" imgSrc="https://images.pexels.com/photos/1179225/pexels-photo-1179225.jpeg?auto=compress&cs=tinysrgb&w=600"/> */}
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>

          <div className="slide-in-up">
            <MiniProjectsCardSlider />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
