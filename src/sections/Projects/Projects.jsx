import SectionHeading from "../../components/SectionHeading";
import ProjectCard from "../../components/ProjectCards/Card/ProjectCard";
import { Button } from "../../components/Buttons";
import MiniProjectsCardSlider from "../../components/ProjectCards/MiniProjectsCardSlider";

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container mx-auto flex max-w-[66rem] flex-col gap-12">
        <SectionHeading
          label="Projects"
          title="Work I'm Proud Of"
          title_text="Here's a peek at some of the projects I've built with love, curiosity,
        and a lot of coffee."
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

        <div className="flex h-20 justify-center bg-linear-to-t from-white to-white/80 py-1 text-gray-950 hover:text-gray-950/70 dark:from-gray-950 dark:to-gray-950/40 dark:text-white dark:hover:text-white/70"></div>

        <div className="inline-flex flex-wrap justify-center gap-2">
          <Button type="secondary">See More</Button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
