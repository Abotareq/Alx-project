import React from "react";
import TrainerCard from "../../../components/TrainerCard.jsx";
import Slider from "../../../components/Slider.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { trainers } from "../../../constants/index.js";
import HomeHeadings from "../../../components/HomeHeadings.jsx";
export default function SliderTrainers() {
  return (
    <div className="p-20">
      <HomeHeadings subtitle={"Meet our trainers"} title="Our Trainers" />
      <div className="container mx-auto p-5 bg-white rounded">
        <div className="border-2 border-[#fc80a2] border-dotted pt-10 px-10">
          <Slider slidesPerView={3}>
            {trainers.map((trainer, i) => (
              <SwiperSlide>
                <TrainerCard key={i} data={trainer} />
              </SwiperSlide>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
