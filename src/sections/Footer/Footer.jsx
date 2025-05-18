import { NavItems } from "../../App";
import SocialButtons from "../../components/SocialButtons";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-200 px-5 pt-18 pb-12">
      <div className="container mx-auto">
        <div className="mb-3.5 text-center">
          <h1 className="text-xl font-semibold tracking-tight md:text-xl lg:text-2xl">
            Hansana Prabath
          </h1>
          <p className="text-sm tracking-tight text-[var(--primary-dark-blue)]/75 md:text-sm lg:text-base">
            Frontend Engineer 🇱🇰
          </p>
        </div>

        <nav className="nav-links w-full justify-center pb-12 md:flex md:max-h-25! md:w-auto md:bg-transparent">
          <ul className="hidden gap-2 text-sm font-medium text-[var(--primary-dark-blue)]/75 capitalize opacity-75 md:flex md:justify-center md:gap-6">
            {NavItems.map((item) => {
              return (
                <li
                  key={item.linkName}
                  className="hover:text-[var(--primary-dark-blue)]"
                >
                  <a href={item.url}>{item.linkName}</a>
                </li>
              );
            })}
          </ul>
        </nav>

        <hr className="border-t-1 text-[var(--primary-dark-blue)]/20" />

        <p className="mx-auto mb-4 w-[80%] pt-6 text-center text-sm text-[var(--primary-dark-blue)]/75 md:w-full">
          Copyright © {currentYear} <a href="/">Hansana Prabath</a>. All Rights
          Reserved.
        </p>

        <SocialButtons classes="gap-4 h-4.5 md:h-5 justify-center" />
      </div>
    </footer>
  );
}

export default Footer;
