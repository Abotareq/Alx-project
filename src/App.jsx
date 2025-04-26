import Header from "./components/Header/Header";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import Signup from "./components/SignUp/Signup";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import BlogSection from "./pages/blog/BlogSection";
import { VoiceProvider } from "./context/voiceContext";
import LearningPage from "./pages/LearningPage/LearningPage";
import Categories from "./pages/LearningPage/Categories";
import { AuthProvider, useAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function AppRoutes() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={user ? <Navigate to="/" /> : <SignIn />} />
      <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} />
      <Route path="/blog" element={<BlogSection />} />
      <Route path="/learning" element={<ProtectedRoute><Categories /></ProtectedRoute>} />
      <Route path="/learningPage/:title" element={<ProtectedRoute><LearningPage /></ProtectedRoute>} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <VoiceProvider>
        <Router>
          <Header />
          <AppRoutes />
          <Footer />
        </Router>
      </VoiceProvider>
    </AuthProvider>
  );
}

export default App;
