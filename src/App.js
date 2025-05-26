import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import CircularCursor from './CircularCursor';
import Skills from './components/Skills/Skills';
import Roadmap from './components/Roadmap/Roadmap';
import ContactMe from './components/Contact/SocialMediaHub';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'roadmap', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const id of sections) {
        const element = document.getElementById(id);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen relative">
      {/* Sidebar should be outside the scrollable area */}


      <CircularCursor />

      {/* Navbar animates in from top when not on Hero */}
      <AnimatePresence>
        {activeSection !== 'hero' && (
          <motion.div
            key="navbar"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 100 }}
          >
            <Navbar active={activeSection} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main scrollable content */}
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <section id="hero" className="snap-start">
          <Hero />
        </section>

        <section id="about" className="snap-start">
          <About />
        </section>

        <section id="roadmap" className="snap-start">
          <Roadmap />
        </section>

        <section id="skills" className="snap-start">
          <Skills />
        </section>

        <section id="projects" className="snap-start">
          <Projects />
        </section>

        <section id="contact" className="snap-start">
          <ContactMe />
        </section>
        <section id="footer" className="snap-start">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default App;
