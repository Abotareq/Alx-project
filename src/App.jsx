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
import VoiceInput from "./components/VoiceInput";
import { VoiceProvider } from "./context/voiceContext";
import LearningPage from "./pages/LearningPage/LearningPage";
import "./index.css";

// Admin Components
import AdminLayout from "./components/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Users from "./pages/admin/Users";
import Settings from "./pages/admin/Settings";

// import ImageAi from "./pages/imageGeneration/ImageAi";

function App() {
  
  return (
    <>
      <VoiceProvider>
        <Router>
          <Header />
          {/* <VoiceInput />
          <LearningPage /> */}
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/blog" element={<BlogSection />} />

            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="users" element={<Users />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
          <Footer />
        </Router>
      </VoiceProvider>
    </>
  );
}
export default App;
