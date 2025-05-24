import HoverBtnWrapper from "../../HoverBtnWrapper";
import "./ProjectCard.css";

function ProjectCard({
  title = "Lorem ipsum, dolor sit amet consectetur",
  desc = "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  ghLink = "https://github.com/DevHanza/",
  liveLink = "https://devhanza.github.io/",
  imgSrc = "./Project-Card-Image.png",
}) {
  return (
    <div className="project-card flex flex-col gap-4.5">
      <a href={ghLink} target="_blank">
        <img
          className="aspect-video w-full overflow-hidden rounded-lg object-cover object-center"
          src={imgSrc}
          alt="Project Image"
        />
      </a>

      <div className="px-2">
        <div className="flex items-start justify-between gap-5 md:gap-2 lg:gap-5">
          <a href={ghLink} target="_blank">
            <h4 className="text-lg leading-tight font-medium tracking-tight">
              {title}
            </h4>
          </a>
          <div className="flex md:hidden lg:flex">
            <HoverBtnWrapper px={0.25} py={0.25}>
              <a href={ghLink} target="_blank">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width={"100%"}
                  height={"100%"}
                  fill={"currentColor"}
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}
                  <path
                    fillRule="evenodd"
                    d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.6 9.6 0 0 1 2.496-.336 9.6 9.6 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </HoverBtnWrapper>

            <HoverBtnWrapper px={0.25} py={0.25}>
              <a href={liveLink} target="_blank">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width={"100%"}
                  height={"100%"}
                  fill={"currentColor"}
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}
                  <path d="M9.88 18.36a3 3 0 0 1-4.24 0 3 3 0 0 1 0-4.24l2.83-2.83-1.41-1.41-2.83 2.83a5.003 5.003 0 0 0 0 7.07c.98.97 2.25 1.46 3.54 1.46s2.56-.49 3.54-1.46l2.83-2.83-1.41-1.41-2.83 2.83ZM12.71 4.22 9.88 7.05l1.41 1.41 2.83-2.83a3 3 0 0 1 4.24 0 3 3 0 0 1 0 4.24l-2.83 2.83 1.41 1.41 2.83-2.83a5.003 5.003 0 0 0 0-7.07 5.003 5.003 0 0 0-7.07 0Z"></path>
                  <path d="m16.95 8.46-.71-.7-.7-.71-4.25 4.24-4.24 4.25.71.7.7.71 4.25-4.24z"></path>
                </svg>
              </a>
            </HoverBtnWrapper>
          </div>
        </div>

        <p className="mt-2 text-base tracking-tight text-[var(--primary-dark-blue)]/75">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
