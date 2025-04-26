import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation"; // ← Navigation styles

export default function TrainersSlider({
  slidesPerView,
  children,
}) {

  return (
    <Swiper
      modules={[FreeMode, Navigation, Autoplay]}
      slidesPerView={slidesPerView}
      spaceBetween={30}
      freeMode
      ///navigation // ← turn on built‑in arrows
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="mySwiper"
    >
      {children}
    </Swiper>
  );
}
