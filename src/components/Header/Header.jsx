import { useState } from "react";
import "./Header.css";

function Header() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  const toggleMenu = () => {
    setIsHeaderVisible(!isHeaderVisible);
  };

  return (
    <header className="flex h-auto flex-col items-center justify-center bg-white md:h-22">
      <div className="mobile-menu flex w-full justify-between p-4 md:hidden">
        <span className="menu-title content-center font-medium text-[var(--primary-dark-blue)]">
          HansanaPrabath
        </span>

        <button
          className="menu-btn cursor-pointer bg-blue-200 p-2"
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
        className={`${isHeaderVisible ? "nav-visible" : "nav-invisible"} nav-links w-full justify-center bg-[var(--primary-dark-blue)]/5 md:flex md:w-auto md:bg-transparent`}
      >
        <ul className="flex flex-col justify-end gap-6 text-center text-sm font-medium text-gray-500 uppercase opacity-75 md:flex-row md:justify-center">
          <li className="hover:text-gray-700">
            <a href="">Home</a>
          </li>
          <li className="hover:text-gray-700">
            <a href="">Projects</a>
          </li>
          <li className="hover:text-gray-700">
            <a href="">Skills</a>
          </li>
          <li className="hover:text-gray-700">
            <a href="">Experience</a>
          </li>
          <li className="hover:text-gray-700">
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
