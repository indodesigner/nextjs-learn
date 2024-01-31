"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const CommonCarousel = ({ slides }) => {
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        effect={"fade"}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Autoplay, EffectFade]}
        className="mySwiper"
        navigation={true}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide._id} className="dark:bg-neutral-900">
            <Image
              src={slide.asset.url}
              width={2000}
              height={2000}
              className="min-w-screen max-h-[40vh] md:max-h-[60vh] object-cover rounded-md"
              alt={slide.alt}
              priority
            ></Image>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CommonCarousel;
