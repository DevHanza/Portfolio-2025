import ChevronLeftIcon from "../../assets/svg/chevron-left";
import ChevronRightIcon from "../../assets/svg/chevron-right";
import MiniProjectsCard from "./Mini-Card/MiniProjectCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useRef } from "react";

function MiniProjectsCardSlider({ miniProjectsList }) {
  const swiperRef = useRef(null);

  function handleNextSlide() {
    swiperRef.current?.slideNext();
  }

  function handlePrevSlide() {
    swiperRef.current?.slidePrev();
  }

  return (
    <div className="relative select-none">
      <div
        className="absolute top-1/2 left-0 z-90 inline-block -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-white p-1 shadow-sm transition-all duration-150 ease-in-out hover:bg-gray-50 active:bg-gray-100"
        onClick={handlePrevSlide}
      >
        <ChevronLeftIcon
          height="28"
          width="28"
          className="fill-[var(--primary-dark-blue)]"
        />
      </div>

      <div
        className="absolute top-1/2 right-0 z-90 inline-block translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-white p-1 shadow-sm transition-all duration-150 ease-in-out hover:bg-gray-50 active:bg-gray-100"
        onClick={handleNextSlide}
      >
        <ChevronRightIcon
          height="28"
          width="28"
          className="fill-[var(--primary-dark-blue)]"
        />
      </div>

      <div className="flex flex-nowrap gap-1 overflow-x-auto lg:gap-2">
        <div className="flex shrink-0 basis-full flex-nowrap gap-1 overflow-x-auto md:flex-row lg:gap-2">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={4}
            slidesPerView={2}
            breakpoints={{
              768: {
                slidesPerView: 4,
                spaceBetween: 4,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 8,
              },
            }}
            modules={[Autoplay]}
          >
            {miniProjectsList.map((project, i) => (
              <SwiperSlide key={`${project.title}_${i}`}>
                <MiniProjectsCard
                  title={project.title}
                  ghLink={project.ghlink}
                  imgSrc={project.imgSrc}
                  icon={project.icon}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default MiniProjectsCardSlider;
