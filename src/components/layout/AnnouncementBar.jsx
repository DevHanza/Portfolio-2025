import { useState } from "react";

export default function AnnouncementBar() {
  const [showBanner, setShowBanner] = useState(true);

  if (!showBanner) return null;

  return (
    <div className="relative w-full bg-[var(--primary-dark-blue)] px-4 py-2 text-white md:px-0">
      <p className="max-w-85 text-sm sm:max-w-[90%] md:mx-auto md:max-w-[80%] md:text-center md:text-base">
        🚧 Under Construction —{" "}
        <span className="font-medium">A Fresh New Look is Coming!</span>
      </p>
      <button
        onClick={() => setShowBanner(false)}
        className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
        aria-label="Close Announcement Bar"
      >
        <svg
          className="h-5 w-5 md:h-6"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill={"currentColor"}
          viewBox="0 0 24 24"
        >
          {/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}
          <path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path>
        </svg>
      </button>
    </div>
  );
}
