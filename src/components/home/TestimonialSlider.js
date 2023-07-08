"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      image: "/images/hm.jpg",
      name: "KISAME MICHAEL",
      position: "Head Teacher",
      quote: "Quote from the Head Teacher",
    },
    {
      id: 2,
      image: "/images/hm1.jpg",
      name: "NABUZAALE CATHY",
      position: "Deputy HM 1",
      quote: "Quote from Ms. Deputy Headteacher 1",
    },
    {
      id: 3,
      image: "/images/hm2.jpg",
      name: "ISANGA FRED",
      position: "Deputy HM 2",
      quote: "Quote from Deputy Headteacher 2",
    },
    {
      id: 4,
      image: "/images/dosA.jpg",
      name: "MUBIRU STEPHEN",
      position: "DOS A'LEVEL",
      quote: "Welcome remarks from Mr. Mubiru Stephen",
    },
    {
      id: 5,
      image: "/images/dosO.jpg",
      name: "NKUMBO JAMES",
      position: "DOS O'LEVEL",
      quote: "Welcome remarks from Mr. Nkumbo James",
    },
  ];

  return (
    <div
      id="testimonials"
      className="parallax section db parallax-off !bg-cover !bg-no-repeat"
      style={{ background: `url('./images2/staff.jpg')` }}
    >
      <div className="container mx-auto py-16">
        <div className="section-title text-center">
          <h3 className="text-3xl font-bold">Administration</h3>
          <p className="text-lg">
            Kiira College Butiki has got well experienced, supportive, and
            incredibly qualified Administration
          </p>
        </div>

        <div className="mt-12">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".custom-swiper-button-next",
              prevEl: ".custom-swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            className="swiper-container"
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="text-center">
                <div className="testimonial p-6 bg-white rounded-lg shadow border">
                  <div className="testi-meta">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-32 h-32 rounded-full mx-auto object-contain"
                    />
                    <h4 className="text-xl font-bold mt-4">
                      {testimonial.name}
                    </h4>
                  </div>
                  <div className="desc mt-4">
                    <h3 className="text-lg font-bold">
                      <i className="fa fa-quote-left"></i>{" "}
                      {testimonial.position}
                    </h3>
                    <p className="text-gray-600 mt-2">{testimonial.quote}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="absolute top-1/2 left-2 p-3 rounded-full bg-white border text-green-600 border-green-600 shadow shadow-green-600/30 -translate-y-1/2 z-30 custom-swiper-button-prev cursor-pointer">
              <FiArrowLeft />
            </div>
            <div className="absolute top-1/2 right-2 p-3 rounded-full bg-white border text-green-600 border-green-600 shadow shadow-green-600/30 -translate-y-1/2 z-30 custom-swiper-button-next cursor-pointer">
              <FiArrowRight />
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
