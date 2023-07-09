"use client";

/* eslint-disable @next/next/no-img-element */
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const ImageSlider = ({ slides }) => {
  return (
    <Swiper
      className="swiper-container h-screen md:h-[94vh] mt-10"
      modules={[Navigation, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation={{
        nextEl: ".custom-swiper-button-next",
        prevEl: ".custom-swiper-button-prev",
      }}
      autoplay={true}
      loop={true}
    >
      <div className="absolute top-1/2 left-2 p-3 rounded-full bg-white -translate-y-1/2 z-30 custom-swiper-button-prev cursor-pointer">
        <FiArrowLeft />
      </div>
      <div className="absolute top-1/2 right-2 p-3 rounded-full bg-white -translate-y-1/2 z-30 custom-swiper-button-next cursor-pointer">
        <FiArrowRight />
      </div>
      {slides?.map((slide) => (
        <SwiperSlide key={slide._id}>
          <div className="relative">
            <div className="absolute right-0 top-0 h-full w-1/3 bg-black/70 transform -skew-x-12">
              <div className="h-full flex flex-col justify-center pl-6 pr-4 transform skew-x-12">
                <h2 className="text-white text-3xl mb-4">{slide.title}</h2>
                <p className="text-white text-lg">{slide.description}</p>
              </div>
            </div>
            <img className="w-full" src={slide.imageUrl} alt={slide.title} />
          </div>
        </SwiperSlide>
      ))}

      {/* <SwiperSlide>
        <div className="relative h-full">
          <div className="absolute right-0 top-0 h-full w-2/3 md:w-1/3 bg-black/70 transform -skew-x-12">
            <div className="h-full flex flex-col justify-center pl-6 pr-4 transform skew-x-12">
              <h2 className="text-white text-3xl mb-4">Slide 1 Title</h2>
              <p className="text-white text-lg">Slide 1 description</p>
            </div>
          </div>
          <img
            className="w-full h-full object-cover"
            src="/images/staff.jpg"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-full">
          <div className="absolute right-0 top-0 h-full w-1/3 bg-black/70 transform -skew-x-12">
            <div className="h-full flex flex-col justify-center pl-6 pr-4 transform skew-x-12">
              <h2 className="text-white text-3xl mb-4">Slide 2 Title</h2>
              <p className="text-white text-lg">Slide 2 description</p>
            </div>
          </div>
          <img
            className="w-full h-full object-cover"
            src="/images/students.jpg"
            alt=""
          />
        </div>
      </SwiperSlide> */}
      <div className="absolute hidden sm:block top-28 left-2 p-3 bg-green-600 text-white z-40">
        <h1 className="text-xl">Displine and Hardwork</h1>
      </div>
    </Swiper>
  );
};

export default ImageSlider;
