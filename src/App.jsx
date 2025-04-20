
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
    <Header />
    <Hero />
      <Home />
    </>
  );
}
export default App;
