import SectionHeading from "../../components/SectionHeading/SectionHeading";
import ProjectCard from "../../components/ProjectCards/Card/ProjectCard";
import { Button } from "../../components/Buttons/Buttons";
import MiniProjectsCardSlider from "../../components/ProjectCards/MiniProjectsCardSlider";

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container mx-auto flex max-w-[var(--container-width)] flex-col gap-12">
        <SectionHeading
          label="Projects"
          title="Projects & Work I'm Proud Of"
          title_text="Here is some of the recent work I've done using my programming and problem-solving skills."
          direction="row"
          text_m_width=""
          title_m_width="max-w-70"
        />

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-8 md:flex-row md:gap-4 lg:gap-5">
            {/* <ProjectCard ghLink="" liveLink="" imgSrc="https://images.pexels.com/photos/1179225/pexels-photo-1179225.jpeg?auto=compress&cs=tinysrgb&w=600"/> */}
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>

          <MiniProjectsCardSlider />
        </div>
      </div>
    </section>
  );
}

export default Projects;
