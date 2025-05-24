import HoverBtnWrapper from "./HoverBtnWrapper";
import LinkedinIcon from "../assets/svg/linkedin";
import GithubIcon from "../assets/svg/github";
import StackOverflowIcon from "../assets/svg/stack-overflow";
import MediumIcon from "../assets/svg/medium";
import DevToIcon from "../assets/svg/dev-to";

function SocialButtons({ classes, size = "h-5 md:h-6" }) {
  return (
    <div className={`flex ${classes}`}>
      <HoverBtnWrapper>
        <a href="https://www.linkedin.com/in/devhanza/">
          <LinkedinIcon className={size} />
        </a>
      </HoverBtnWrapper>

      <HoverBtnWrapper>
        <a href="https://github.com/DevHanza">
          <GithubIcon className={size} />
        </a>
      </HoverBtnWrapper>

      <HoverBtnWrapper>
        <a href="https://stackoverflow.com/users/16218477/hansana-prabath">
          <StackOverflowIcon className={size} />
        </a>
      </HoverBtnWrapper>

      <HoverBtnWrapper>
        <a href="https://medium.com/@devhanza">
          <MediumIcon className={size} />
        </a>
      </HoverBtnWrapper>

      <HoverBtnWrapper>
        <a href="https://dev.to/devhanza">
          <DevToIcon className={size} />
        </a>
      </HoverBtnWrapper>
    </div>
  );
}

export default SocialButtons;
