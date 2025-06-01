import HoverBtnWrapper from "./Buttons/HoverBtnWrapper";
import LinkedinIcon from "../assets/svg/linkedin";
import GithubIcon from "../assets/svg/github";
import StackOverflowIcon from "../assets/svg/stack-overflow";
import MediumIcon from "../assets/svg/medium";
import DevToIcon from "../assets/svg/dev-to";

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

      {/* <HoverBtnWrapper>
        <a href="https://stackoverflow.com/users/16218477/hansana-prabath" target="_blank">
          <StackOverflowIcon className={`${size} ${color}`} />
        </a>
      </HoverBtnWrapper> */}

      <HoverBtnWrapper>
        <a href="https://medium.com/@devhanza" target="_blank">
          <MediumIcon className={`${size} ${color}`} />
        </a>
      </HoverBtnWrapper>

      {/* <HoverBtnWrapper>
        <a href="https://dev.to/devhanza" target="_blank">
          <DevToIcon className={`${size} ${color}`} />
        </a>
      </HoverBtnWrapper> */}
    </div>
  );
}

export default SocialButtons;
