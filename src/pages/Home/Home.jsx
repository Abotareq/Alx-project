import React from "react";
import Banner from "./components/Banner";
import SpeechPathologyServices from "./components/SpeechPathologyServices";
import SliderTrainers from "./components/sliderTrainers";
import Blogs from "./components/Blogs";
import Testimonials from "./components/Testimonials/Testimonials";
import Hero from "./components/Hero/Hero";


export default function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <SpeechPathologyServices />
      <SliderTrainers />
      <Blogs />
      <Testimonials />
    </>
  );
}
