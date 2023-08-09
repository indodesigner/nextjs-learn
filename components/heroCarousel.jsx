"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HeroCarousel = ({ slides }) => {
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        navigation={true}
      >
        {slides.map((slide) => (
          <SwiperSlide>
            <div className="relative bg-neutral-900">
              <Image
                src={slide.slideImage}
                width={3000}
                height={3000}
                className="min-w-screen max-h-[80vh] object-cover"
              ></Image>
              <AnimatePresence>
                <div className="absolute group flex justify-center items-center bottom-0 py-10 min-w-[100%] min-h-[100%] bg-neutral-900 bg-opacity-70 hover:bg-opacity-80 text-white px-24 transition duration-300">
                  <span className="flex flex-col items-center">
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ delay: 0.5 }}
                      className="text-3xl  sm:text-5xl lg:text-7xl font-bold drop-shadow-md gradient-text py-2"
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ delay: 0.75 }}
                      className="bg-white py-[1.5px] sm:py-[2px] px-4 rounded-2xl mb-2"
                    ></motion.span>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ delay: 1 }}
                      className="text-xs sm:text-sm md:text-md lg:text-lg font-light max-w-[100%] sm:max-w-[80%] md:max-w-[50%]"
                    >
                      {slide.caption}
                    </motion.p>
                  </span>
                </div>
              </AnimatePresence>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
