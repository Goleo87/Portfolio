import { useState, useEffect } from 'react';
import Home from "./components/Home";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import backgroundImage from "/g8.jpg";
import About from "./components/About";
import Intro from "./components/Intro";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
// ..
AOS.init();

function App() {
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const [showContent, setShowContent] = useState(false);
useEffect(() => {
    if (isIntroComplete) {
      const timer = setTimeout(() => setShowContent(true), 100); // delay for appearance
      return () => clearTimeout(timer);
    }
  }, [isIntroComplete]);
  return (
    <main className="text-gray-400 font-sans bg-fixed bg-cover body-font"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      {!isIntroComplete ? (
        <Intro onIntroComplete={() => setIsIntroComplete(true)} />
      ) : (
        <>
          <Navbar />
          <Home  />
          <Skills />
          <About />
          <Projects />
          <Contact />
        </>
      )}
    </main>
  );
}

export default App;