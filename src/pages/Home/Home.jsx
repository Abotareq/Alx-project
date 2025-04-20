import React from "react";
import Banner from "./components/Banner";
import SpeechPathologyServices from "./components/SpeechPathologyServices";
import SliderTrainers from "./components/sliderTrainers";
import BlogCard from "../../components/BlogCard";
import Blogs from "./components/Blogs";

export default function Home() {
  return (
    <>
      <Banner />
      <SpeechPathologyServices />
      <SliderTrainers />
      <Blogs />
    </>
  );
}
