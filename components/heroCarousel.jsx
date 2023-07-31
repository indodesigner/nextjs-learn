"use client";
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { getSlides } from "../sanity/sanity-utils";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HeroCarousel = async () => {
  const slides = await getSlides();
  return (
    <div>
      <Swiper
        // direction={"vertical"}
        slidesPerView={1}
        spaceBetween={10}
        // mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        navigation={true}
      >
        {slides.map((slide) => (
          <SwiperSlide>
            <div className="group relative bg-neutral-900 bg-opacity-20 hover:bg-opacity-40">
              <Image
                src={slide.slideImage}
                width={3000}
                height={3000}
                className="min-w-screen max-h-[70vh] object-cover group-hover:blur-md transition duration-500"
              ></Image>
              <div className="absolute grid grid-cols-1 top-40 xl:top-60 min-w-[100%]  text-white px-24 text-center group-hover:scale-105 transition duration-300">
                <h1 className="text-3xl font-bold mb-2">{slide.title}</h1>
                <p>{slide.caption}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
