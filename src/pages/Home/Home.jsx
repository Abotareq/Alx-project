import React from "react";
import Banner from "./components/Banner";
import SpeechPathologyServices from "./components/SpeechPathologyServices";
import TrainerCard from "../../components/TrainerCard";
import TrainersSlider from "./components/TrainersSlider";

export default function Home() {
  return (
    <>
      <Banner />
      <SpeechPathologyServices />
      <TrainerCard />
      <TrainersSlider />
    </>
  );
}
