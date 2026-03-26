import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import CursorGlow from "./components/CursorGlow.jsx";
import Navbar from "./components/Navbar.jsx";
import ParticleBackground from "./components/ParticleBackground.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Skills from "./pages/Skills.jsx";

const App = () => {
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-hero bg-cover bg-fixed text-slate-100">
      <CursorGlow />
      <ParticleBackground />
      <ScrollProgress />
      <Navbar />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;
