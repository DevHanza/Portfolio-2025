import { useEffect, useRef, useState } from "react";
import "./Header.css";
import { NavItems } from "../../App";
import HoverBtnWrapper from "../../components/Buttons/HoverBtnWrapper";
import { Button } from "../../components/Buttons/Buttons";
import ArrowUpRightStrokeIcon from "../../assets/svg/arrow-up-right-stroke";
import MenuWiderIcon from "../../assets/svg/menu";

import { FadeIn } from "../../transitions/Fade";

// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

function Header() {
  // Navigation Animation on Load
  const headerRef = useRef();
  const headerTimeline = useRef();

  useGSAP(
    () => {
      headerTimeline.current = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          // markers: true,
          start: "top 10%",
          toggleActions: "play none none none",
        },
      });

      headerTimeline.current.add(
        FadeIn(headerRef.current.querySelectorAll(".fade-in")),
      );

      return () => headerTimeline.current.kill();
    },
    {
      scope: headerRef,
      dependencies: [],
      revertOnUpdate: false,
    },
  );

  // Mobile Header Button Toggle
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  const toggleMenu = () => {
    setIsHeaderVisible(!isHeaderVisible);
  };

  // Change Nav Styles on Scroll
  const [headerScrolled, setHeaderScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollHeader);

    return () => window.removeEventListener("scroll", handleScrollHeader);
  }, []);

  const handleScrollHeader = () => {
    setHeaderScrolled(window.scrollY > 50);
  };

  return (
    <header
      ref={headerRef}
      className={`z-100 flex h-auto flex-col items-center justify-center ${headerScrolled ? "scrolled bg-white/80 backdrop-blur-[5px]" : "bg-white"}`}
    >
      <div className="fade-in container mx-auto max-w-[var(--container-width)]">
        <div className="flex w-full flex-wrap justify-between px-4 py-2 md:px-8 lg:px-0 lg:py-3">
          <span className="menu-title basis-1/2 content-center text-base font-semibold tracking-tighter text-[var(--primary-dark-blue)] md:text-lg lg:basis-auto">
            <a href="/">DevHanza</a>
          </span>

          <div className="basis-1/2 text-end lg:basis-auto">
            <button
              className="menu-btn cursor-pointer rounded-md bg-stone-100 p-1 text-[var(--primary-dark-blue)] hover:bg-[var(--primary-dark-blue)]/10 lg:hidden"
              onClick={toggleMenu}
            >
              <MenuWiderIcon className="fill-[var(--primary-dark-blue)]" />
            </button>
          </div>

          {/* Nav List */}
          <nav
            className={`${isHeaderVisible ? "nav-visible" : "nav-invisible"} nav-links w-full basis-full justify-center rounded-md bg-stone-100 lg:m-0! lg:flex lg:max-h-25! lg:w-auto lg:basis-auto lg:rounded-none lg:bg-transparent lg:p-0!`}
          >
            <ul className="flex flex-col justify-end gap-3 text-sm font-medium text-gray-500 uppercase lg:flex-row lg:justify-center lg:gap-2">
              {NavItems.map((item) => {
                return (
                  <a
                    href={item.url}
                    className="align-center flex"
                    key={item.linkName}
                  >
                    <li className="flex w-full items-center justify-between hover:text-gray-700">
                      <HoverBtnWrapper px={0.75} py={0.25}>
                        {item.linkName}
                      </HoverBtnWrapper>

                      <ArrowUpRightStrokeIcon className="h-9 w-9 fill-[var(--primary-dark-blue)] md:h-6 lg:hidden" />
                    </li>
                  </a>
                );
              })}

              <div className="mt-4 hidden lg:mt-0 lg:ml-3 lg:block">
                <Button
                  type="primary"
                  href="https://linkedin.com/in/devhanza"
                  newtab="true"
                >
                  Hire Me
                </Button>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
