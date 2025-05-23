import { useState } from "react";

export default function AnnouncementBar() {
  const [showBanner, setShowBanner] = useState(true);

  if (!showBanner) return null;

  return (
    <div className="sticky top-0 left-0 flex w-full items-center justify-center bg-[var(--primary-dark-blue)] p-2 text-white">
      <p className="mx-auto min-w-2xs">
        This Site is currently under development! ♻️
      </p>
      <button
        onClick={() => setShowBanner(false)}
        className="absolute right-4 cursor-pointer text-white hover:text-gray-300"
        aria-label="Close Announcement Bar"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
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
