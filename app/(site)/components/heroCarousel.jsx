"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import LottieArrow from "/public/lottie/down-arrow.json";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "/contexts/languageContext";
import IndiaFlagIcon from "/public/images/india-flag-icon.svg";
import JapanFlagIcon from "/public/images/japan-flag-icon.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const HeroCarousel = ({ slides }) => {
  const path = usePathname();
  const { language } = useLanguage();

  const links = [
    { href: "india", name: "India", namejp: "インド", icon: "IndiaFlagIcon" },
    { href: "japan", name: "Japan", namejp: "日本", icon: "JapanFlagIcon" },
  ];

  return (
    <div>
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        effect={"fade"}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Autoplay, EffectFade]}
        // className="mySwiper rounded-xl md:rounded-3xl shadow-xl shadow-neutral-300 dark:shadow-neutral-900"
        className="mySwiper rounded-xl md:rounded-3xl"
        // navigation={true}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide._id}>
            <div className="relative bg-neutral-900">
              <Image
                src={slide.slideImage}
                width={3000}
                height={3000}
                alt={slide.alt}
                className="min-w-screen max-h-[70vh] md:max-h-screen object-cover rounded-xl md:rounded-3xl"
              ></Image>
              <AnimatePresence>
                <div className="absolute group flex justify-center items-center bottom-0 py-10 min-w-[100%] min-h-[100%] bg-neutral-900 bg-opacity-60 hover:bg-opacity-70 text-white px-3 transition duration-300">
                  <span className="flex flex-col items-center">
                    <motion.h1
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ delay: 0.5 }}
                      className="text-2xl  sm:text-5xl lg:text-7xl font-extrabold drop-shadow-md gradient-text py-3 mb-2"
                    >
                      {language === "english" ? slide.title : slide.titlejp}
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ delay: 1 }}
                      className="mb-4 text-xs sm:text-sm md:text-md lg:text-lg font-light w-[100%] sm:max-w-[80%] md:max-w-[60%] md:block hidden"
                    >
                      {language === "english" ? slide.caption : slide.captionjp}
                    </motion.p>
                    {/* <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ delay: 0.75 }}
                      className="bg-white py-[1px] sm:py-[1.5px] px-4 rounded-2xl mb-6 md:block hidden"
                    ></motion.span> */}
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ delay: 1.25 }}
                    >
                      <div className="grid grid-cols-2 gap-3">
                        {path == "/"
                          ? links.map((link, index) => (
                              <Link
                                key={index}
                                href={`/${link.href}`}
                                className="flex flex-col items-center py-2 px-4 sm:px-8 bg-neutral-300 border-2 border-neutral-100 border-opacity-10 bg-opacity-20 backdrop-blur-xl rounded-xl shadow-md hover:shadow-neutral-900 hover:-translate-y-1 transition"
                              >
                                {link.icon === "IndiaFlagIcon" ? (
                                  <Image
                                    src={IndiaFlagIcon}
                                    width={48}
                                    height={48}
                                    className="w-8 sm:w-12 md:w-16 h-auto"
                                    alt="Indian flag button icon"
                                  ></Image>
                                ) : (
                                  <Image
                                    src={JapanFlagIcon}
                                    width={48}
                                    height={48}
                                    className="w-8 sm:w-12 md:w-16 h-auto"
                                    alt="Japanese flag button icon"
                                  ></Image>
                                )}
                                <h5 className="text-sm font-light sm:text-xl">
                                  {language === "english"
                                    ? link.name
                                    : link.namejp}
                                </h5>
                              </Link>
                            ))
                          : null}
                      </div>
                    </motion.span>

                    <a href="#packages" className="lg:block hidden">
                      <Player
                        autoplay
                        loop
                        src={LottieArrow}
                        style={{ height: "64px", width: "64px" }}
                      ></Player>
                    </a>
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
