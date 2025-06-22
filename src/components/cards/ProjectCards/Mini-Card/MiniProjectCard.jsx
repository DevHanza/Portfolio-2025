import "./MiniProjectCard.css";

function MiniProjectsCard({
  title = "Calculator",
  ghLink = "https://github.com",
  imgSrc = "/Project-Card-Image.png",
  icon = "react",
}) {
  return (
    <div className="mini-project-card relative flex h-35 w-full flex-row overflow-hidden rounded-lg">
      <a href={ghLink} className="h-full w-full" target="_blank">
        {/* Mini-Projects-Card */}

        <div className="gradient-overlay"></div>
        <img
          src={imgSrc}
          alt={title}
          className="mini-project-card-image h-full w-full object-cover"
        />

        <div className="mini-project-card-title absolute bottom-0 left-0 z-20 mb-3 ml-3 flex gap-2">
          <span>
            <img
              className="h-6"
              src={`https://go-skill-icons.vercel.app/api/icons?i=${icon}&theme=dark`}
              alt={`Image of ${icon} ${title} project`}
            />
          </span>
          <h4 className="text-base font-medium text-white">{title}</h4>
        </div>
      </a>
    </div>
  );
}

export default MiniProjectsCard;
