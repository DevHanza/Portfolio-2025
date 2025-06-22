import HoverBtnWrapper from "./HoverBtnWrapper";
import LinkedinIcon from "../../assets/svg/linkedin";
import GithubIcon from "../../assets/svg/github";
import MediumIcon from "../../assets/svg/medium";

function SocialButtons({
  classes,
  size = "h-5 md:h-6",
  color = "fill-[var(--primary-dark-blue)]",
}) {
  return (
    <div className={`flex ${classes}`}>
      <HoverBtnWrapper>
        <a href="https://www.linkedin.com/in/devhanza/" target="_blank">
          <LinkedinIcon className={`${size} ${color}`} />
        </a>
      </HoverBtnWrapper>

      <HoverBtnWrapper>
        <a href="https://github.com/DevHanza" target="_blank">
          <GithubIcon className={`${size} ${color}`} />
        </a>
      </HoverBtnWrapper>

      <HoverBtnWrapper>
        <a href="https://medium.com/@devhanza" target="_blank">
          <MediumIcon className={`${size} ${color}`} />
        </a>
      </HoverBtnWrapper>
    </div>
  );
}

export default SocialButtons;
