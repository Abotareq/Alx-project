import React from "react";
import TrainerCard from "../../../components/TrainerCard.jsx";
import Slider from "../../../components/Slider.jsx";
import { SwiperSlide } from "swiper/react";
import { trainers } from "../../../constants/index.js";
import HomeHeadings from "../../../components/HomeHeadings.jsx";
import {useEffect ,useState } from "react";
export default function SliderTrainers() {
  const [screenState, setScreenState] = useState(1);

  const updateScreenState = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setScreenState(1); // Small screens
    } else if (width < 1024) {
      setScreenState(2); // Medium screens
    } else {
      setScreenState(3); // Large screens
    }
  };
  useEffect(() => {
    updateScreenState(); // Set initial state
    window.addEventListener("resize", updateScreenState);
    return () => window.removeEventListener("resize", updateScreenState);
  }, []);
  return (
    <div className="p-20">
      <HomeHeadings subtitle={"Meet our trainers"} title="Our Trainers" />
      <div className="container mx-auto p-5 bg-white rounded">
        <div className="border-2 border-[#fc80a2] border-dotted pt-10 md:px-10">
          <Slider
            spaceBetween={20}
            slidesPerView={screenState}
            
          >
            {trainers.map((trainer, i) => (
              <SwiperSlide key={i}>
                <TrainerCard data={trainer} />
              </SwiperSlide>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}