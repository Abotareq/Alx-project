import Header from "./components/Header/Header";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import Signup from "./components/SignUp/Signup";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogSection from "./pages/blog/BlogSection";
// import LearningPage from "./pages/LearningPage/LearningPage";
// import ImageAi from "./pages/imageGeneration/ImageAi";

function App() {
  return (
    <>
      <Router>
        <Header />

        {/* <LearningPage /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blog" element={<BlogSection />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;
