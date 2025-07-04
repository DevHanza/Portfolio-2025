import GithubIcon from "../../../../assets/svg/github";
import LinkIcon from "../../../../assets/svg/link";
import HoverBtnWrapper from "../../../buttons/HoverBtnWrapper";
import "./ProjectCard.css";

function ProjectCard({
  title = "Lorem ipsum, dolor sit amet consectetur",
  desc = "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  ghLink = "https://github.com/DevHanza/",
  liveLink = "https://devhanza.github.io/",
  imgSrc = "/Project-Card-Image.png",
}) {
  return (
    <div className="project-card flex flex-col gap-4.5">
      <a href={ghLink} target="_blank" className="overflow-hidden rounded-lg">
        <img
          className="project-card-img aspect-video w-full overflow-hidden object-cover object-center"
          src={imgSrc}
          alt="Project Image"
        />
      </a>

      <div className="px-2">
        <div className="flex items-start justify-between gap-5 md:gap-2 lg:gap-5">
          <a href={ghLink} target="_blank" className="w-full">
            <h4 className="fill-[var(--primary-dark-blue)] text-lg leading-tight font-medium tracking-tight">
              {title}
            </h4>
            <p className="mt-1 text-base tracking-tight text-[var(--primary-dark-blue)]/75 lg:mt-2">
              {desc}
            </p>
          </a>

          <ProjectCardLinks ghLink={ghLink} liveLink={liveLink} />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

function ProjectCardLinks({ ghLink, liveLink }) {
  return (
    <div className="flex gap-1 lg:flex">
      <HoverBtnWrapper px={0.25} py={0.25}>
        <a href={ghLink} target="_blank">
          <GithubIcon className="h-6 w-6 fill-[var(--primary-dark-blue)] lg:h-7 lg:w-7" />
        </a>
      </HoverBtnWrapper>

      <HoverBtnWrapper px={0.25} py={0.25}>
        <a href={liveLink} target="_blank">
          <LinkIcon className="h-6 w-6 fill-[var(--primary-dark-blue)] lg:h-7 lg:w-7" />
        </a>
      </HoverBtnWrapper>
    </div>
  );
}
