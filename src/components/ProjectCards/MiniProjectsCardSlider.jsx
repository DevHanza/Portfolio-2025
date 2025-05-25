import ChevronLeftIcon from "../../assets/svg/chevron-left";
import ChevronRightIcon from "../../assets/svg/chevron-right";
import MiniProjectsCard from "./Mini-Card/MiniProjectCard";

function MiniProjectsCardSlider() {
  return (
    <div className="relative select-none">
      <div className="absolute top-1/2 left-0 z-100 inline-block -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-gray-50 p-1 shadow-sm transition-all duration-150 ease-in-out hover:bg-gray-50 active:bg-gray-100">
        <ChevronLeftIcon
          height="28"
          width="28"
          className="fill-[var(--primary-dark-blue)]"
        />
      </div>

      <div className="flex flex-nowrap gap-1 overflow-x-auto lg:gap-2">
        <div className="flex shrink-0 basis-full flex-nowrap gap-1 overflow-x-auto md:flex-row lg:gap-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <MiniProjectsCard />
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 right-0 inline-block translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-gray-50 p-1 shadow-sm transition-all duration-150 ease-in-out hover:bg-gray-50 active:bg-gray-100">
        <ChevronRightIcon
          height="28"
          width="28"
          className="fill-[var(--primary-dark-blue)]"
        />
      </div>
    </div>
  );
}

export default MiniProjectsCardSlider;
