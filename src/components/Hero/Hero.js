import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaProjectDiagram, FaTools, FaEnvelope } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import './Hero.css';
import portfolio from './assets/portfolio.png';
import bee from './assets/bee.png';


const words = ["Welcome", "to", "My", "Portfolio"];

const navItems = [
  { label: 'About', target: '#about', icon: <FaUser /> },
  { label: 'Projects', target: '#projects', icon: <FaProjectDiagram /> },
  { label: 'Skills', target: '#skills', icon: <FaTools /> },
  { label: 'Contact', target: '#contact', icon: <FaEnvelope /> },
];

// This component renders the animated squares on the whole page
function AnimatedPageSquares() {
  const [borderSquares, setBorderSquares] = useState([]);

  useEffect(() => {
    function randomSquare() {
      const size = 30 + Math.random() * 80; // 30-110px
      return {
        id: Math.random().toString(36).substr(2, 9),
        top: Math.random() * 90 + '%',    // 0% to 90% of viewport height
        left: Math.random() * 90 + '%',   // 0% to 90% of viewport width
        size,
        duration: 4 + Math.random() * 4,  // 4-8s
        borderRadius: '12px',
      };
    }

    let running = true;

    async function spawnSquares() {
      while (running) {
        const newSquare = randomSquare();
        setBorderSquares([newSquare]);
        await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 700));
      }
    }

    spawnSquares();
    return () => { running = false; };
  }, []);

  return (
    <div className="modern2025-page-border-squares">
      {borderSquares.map(square => (
        <motion.div
          key={square.id}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: square.duration, ease: "easeInOut" }}
          style={{
            position: 'absolute',
            top: square.top,
            left: square.left,
            width: square.size,
            height: square.size,
            border: '2px solid rgba(255,255,255,0.22)',
            borderRadius: square.borderRadius,
            pointerEvents: 'none',
            zIndex: 10,
            boxShadow: '0 0 16px 2px rgba(120,180,255,0.13)',
            background: 'transparent',
            mixBlendMode: 'screen',
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const [spinningLetters, setSpinningLetters] = useState([]);

  // Spinning letters effect
  useEffect(() => {
    const spinInterval = setInterval(() => {
      const randomLetters = [];
      while (randomLetters.length < 7) {
        const randomWordIndex = Math.floor(Math.random() * words.length);
        const randomCharIndex = Math.floor(Math.random() * words[randomWordIndex].length);
        const letter = { wordIndex: randomWordIndex, charIndex: randomCharIndex };
        if (!randomLetters.some(l => l.wordIndex === letter.wordIndex && l.charIndex === letter.charIndex)) {
          randomLetters.push(letter);
        }
      }
      setSpinningLetters(randomLetters);
      setTimeout(() => setSpinningLetters([]), 1200);
    }, 3500);
    return () => clearInterval(spinInterval);
  }, []);

  return (
    <>
      {/* Animated Squares Overlay (covers the whole page) */}
      <AnimatedPageSquares />

      <section className="modern2025-hero-section">
        {/* LOGO */}
        <div className="modern2025-hero-logo-container">
          <motion.img
            src={portfolio}
            alt="Logo"
            className="modern2025-hero-logo"
            animate={{ rotateY: 360 }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 4,
              ease: "linear"
            }}
            style={{ display: 'block', transformStyle: 'preserve-3d' }}
          />
        </div>

        {/* 3D Animated Grid */}
        <div className="modern2025-hero-3d-grid"></div>

        {/* 3D Rotating Cubes */}
        <div className="modern2025-hero-cube3d cube3d-big">
          <div className="cube">
            <div className="face front"></div>
            <div className="face back"></div>
            <div className="face right"></div>
            <div className="face left"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
          </div>
        </div>
        <div className="modern2025-hero-cube3d cube3d-small">
          <div className="cube">
            <div className="face front"></div>
            <div className="face back"></div>
            <div className="face right"></div>
            <div className="face left"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
          </div>
        </div>

        {/* 3D Glass Spheres */}
        <div className="modern2025-hero-sphere sphere1"></div>
        <div className="modern2025-hero-sphere sphere2"></div>

        {/* Metamorphix Shape */}
        <div className="modern2025-hero-metamorphix-container">
          <div className="modern2025-hero-metamorphix-shape">
            <div className="face face-front"></div>
            <div className="face face-back"></div>
            <div className="face face-right"></div>
            <div className="face face-left"></div>
            <div className="face face-top"></div>
            <div className="face face-bottom"></div>
          </div>
        </div>

        {/* Main Content Row: heading, bee image, sidebar */}
        <div className="modern2025-hero-main">
          {/* Heading */}
          <div className="modern2025-hero-text">
            <motion.h1
              className="modern2025-hero-title"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.04 } },
              }}
            >
              {words.map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className="modern2025-hero-inline-flex"
                  style={{ display: 'block', width: '100%' }}
                >
                  {word.split("").map((char, charIndex) => {
                    const isSpinning = spinningLetters.some(
                      (l) => l.wordIndex === wordIndex && l.charIndex === charIndex
                    );
                    return (
                      <motion.span
                        key={charIndex}
                        className="modern2025-hero-inline-block"
                        variants={{
                          hidden: { opacity: 0, y: 30 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        whileHover={{ scale: 1.2, rotate: 2 }}
                        animate={{
                          rotate: isSpinning ? [0, 360] : 0,
                          opacity: isSpinning ? 0.5 : 1,
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {char}
                      </motion.span>
                    );
                  })}
                </span>
              ))}
            </motion.h1>
          </div>

         <div className="modern2025-hero-image-between">
  <div className="animated-blue-border">
    <Tilt
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
      glareEnable={true}
      glareMaxOpacity={0.45}
      glareColor="#ffd700"
      glarePosition="all"
      glareBorderRadius="16px"
    >
      <div className="gold-metallic-effect">
        <img
          src={bee}
          alt="Bee"
          style={{
            width: '300px',
            height: '300px',
            borderRadius: '16px',
            objectFit: 'contain',
            display: 'block',
          }}
        />
        <div className="gold-gradient-overlay" />
      </div>
    </Tilt>
  </div>
</div>

          {/* Sidebar */}
          <nav className="modern2025-hero-sidebar">
            {navItems.map(({ label, target, icon }, i) => (
              <motion.a
                key={label}
                href={target}
                className="modern2025-hero-sidebar-link"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + i * 0.16, duration: 0.5 }}
              >
                <span className="modern2025-hero-sidebar-icon">{icon}</span>
                <span className="modern2025-hero-sidebar-label">{label}</span>
              </motion.a>
            ))}
          </nav>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="modern2025-hero-scroll-indicator"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="modern2025-hero-scroll-arrow">▼</span>
          <span className="modern2025-hero-scroll-text">Scroll Down</span>
        </motion.div>
      </section>
    </>
  );
}
