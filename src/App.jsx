
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./App.css";
import Home from "./pages/Home/Home";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <>
    <Header />
    <Hero />
    <Home />
    <Testimonials />
    </>
  );
}
export default App;
