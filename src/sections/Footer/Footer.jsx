import { NavItems } from "../../App";
import SocialButtons from "../../components/SocialButtons";
import PulseDot from "../../components/pulseDot/pulseDot";
import HoverBtnWrapper from "../../components/Buttons/HoverBtnWrapper";
import CTA from "../CTA/CTA";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div id="footer" className="p-4 md:p-8">
      <CTA />

      <footer className="mt-6 rounded-xl bg-white px-6 pt-12 md:pt-16">
        <div className="container mx-auto flex max-w-[var(--container-width)] flex-col">
          <div className="flex flex-row pb-10">
            <div className="flex basis-full flex-col gap-6 text-center md:basis-1/2 md:text-start">
              <h6 className="text-lg font-medium tracking-tight">
                Hansana Prabath
              </h6>

              <p className="mx-auto max-w-[90%] text-sm leading-5.5 tracking-tight text-[var(--primary-dark-blue)]/75 md:mx-0 md:max-w-70">
                A developer, engineer, and designer who’s been building projects
                since 2019.
              </p>

              <SocialButtons
                size="h-4.5 md:h-5"
                classes="justify-center md:justify-start md:-ml-3"
              />
            </div>
            <div className="hidden basis-1/2 flex-row justify-between md:flex">
              <nav className="min-w-25">
                <h6 className="mb-6 text-lg font-medium tracking-tight">
                  Quick Links
                </h6>

                <ul className="flex flex-col gap-3">
                  {NavItems.map((item) => {
                    return (
                      <li
                        key={item.linkName}
                        className="text-sm text-[var(--primary-dark-blue)]/75 hover:text-[var(--primary-dark-blue)]"
                      >
                        <a href={item.url}>{item.linkName}</a>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <nav className="min-w-25">
                <h6 className="mb-6 text-lg font-medium tracking-tight">
                  Social
                </h6>

                <ul className="flex flex-col gap-3">
                  <li className="text-sm text-[var(--primary-dark-blue)]/75 hover:text-[var(--primary-dark-blue)]">
                    <a href="">Github</a>
                  </li>
                  <li className="text-sm text-[var(--primary-dark-blue)]/75 hover:text-[var(--primary-dark-blue)]">
                    <a href="">LinkedIn</a>
                  </li>
                  <li className="text-sm text-[var(--primary-dark-blue)]/75 hover:text-[var(--primary-dark-blue)]">
                    <a href="">Medium</a>
                  </li>
                </ul>
              </nav>

              <nav className="min-w-25">
                <h6 className="mb-6 text-lg font-medium tracking-tight">
                  Other
                </h6>

                <ul className="flex flex-col gap-3">
                  <li className="text-sm text-[var(--primary-dark-blue)]/75 hover:text-[var(--primary-dark-blue)]">
                    <a href="">Blog</a>
                  </li>
                  <li className="text-sm text-[var(--primary-dark-blue)]/75 hover:text-[var(--primary-dark-blue)]">
                    <a href="">Newsletter</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <hr className="border-t-1 text-[var(--primary-dark-blue)]/20" />

          <div className="flex flex-col justify-between gap-4 py-6 md:flex-row md:gap-0">
            <div className="content-center">
              <p className="mx-auto max-w-[95%] text-center text-sm tracking-tight text-[var(--primary-dark-blue)]/75 md:mx-0 md:w-full md:max-w-none md:text-start">
                Copyright © {currentYear} - 2019 -{" "}
                <a href="/">Hansana Prabath</a>. All Rights Reserved.
              </p>
            </div>

            <div className="mx-auto content-center md:mx-0">
              <a
                href="https://contra.com/devhanza/"
                target="_blank"
                className="inline-flex cursor-pointer items-center gap-3 rounded-full bg-green-600/10 px-3 py-1 text-sm text-green-600 select-none md:flex"
              >
                <PulseDot />
                <span className="content-center">Available for work</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
