import { useEffect, useState } from "react";

function BackToTopButton() {
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 150);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button
        onClick={scrollToTop}
        id="backToTop"
        className={`${isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"} fixed right-6 bottom-6 z-100 cursor-pointer rounded-xl bg-[var(--primary-dark-blue)] p-3 transition-all duration-300 ease-in-out`}
      >
        <svg
          className="h-7 text-white"
          xmlns="http://www.w3.org/2000/svg"
          width={"100%"}
          height={"100%"}
          fill={"currentColor"}
          viewBox="0 0 24 24"
        >
          {/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}
          <path d="m7.71 15.71 4.29-4.3 4.29 4.3 1.42-1.42L12 8.59l-5.71 5.7z"></path>
        </svg>
      </button>
    </div>
  );
}

export default BackToTopButton;
