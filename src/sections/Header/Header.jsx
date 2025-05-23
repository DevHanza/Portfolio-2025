import { useState } from "react";
import "./Header.css";
import { NavItems } from "../../App";
import HoverBtnWrapper from "../../components/HoverBtnWrapper";

function Header() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  const toggleMenu = () => {
    setIsHeaderVisible(!isHeaderVisible);
  };

  return (
    <header className="z-100 flex h-auto flex-col items-center justify-center bg-white md:h-22">
      <div className="container mx-auto">
        <div className="mobile-menu flex w-full justify-between px-4 py-2 md:hidden">
          <span className="menu-title content-center font-medium text-[var(--primary-dark-blue)]">
            <a href="/">HansanaPrabath</a>
          </span>

          <button
            className="menu-btn cursor-pointer rounded-md bg-stone-100 p-1 text-[var(--primary-dark-blue)] hover:bg-[var(--primary-dark-blue)]/10"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill={"currentColor"}
              viewBox="0 0 24 24"
            >
              {/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}
              <path d="M4 4.08H20V6.08H4z"></path>
              <path d="M4 11H20V13H4z"></path>
              <path d="M4 17.92H20V19.92H4z"></path>
            </svg>
          </button>
        </div>

        {/* Nav List */}
        <nav
          className={`${isHeaderVisible ? "nav-visible" : "nav-invisible"} nav-links w-full justify-center rounded-md bg-stone-100 md:flex md:max-h-25! md:w-auto md:bg-transparent`}
        >
          <ul className="flex flex-col justify-end gap-3 text-center text-sm font-medium text-gray-500 uppercase opacity-75 md:flex-row md:justify-center">
            {NavItems.map((item) => {
              return (
                <li key={item.linkName} className="hover:text-gray-700">
                  <HoverBtnWrapper px={0.75} py={0.25}>
                    <a href={item.url}>{item.linkName}</a>
                  </HoverBtnWrapper>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
