import baby from "./baby.png";
import other from "./other.png";
import teen from "./teen.png";
import image from "./90.png";


import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBirthdayCake,
  FaSchool,
  FaUserGraduate,
  FaUniversity,
  FaBookOpen,
  FaStar
} from "react-icons/fa";
import "./Journey.css";

// Replace with your actual image paths
const milestones = [
  {
    title: "Born",
    date: "13 Feb 2002",
    description: "Born in 2002/02/13.",
    image:baby,
    icon: <FaBirthdayCake />,
    accent: "#ffb347"
  },
  {
    title: "Started Schooling",
    date: "2006",
    description: "Started schooling in 2006.",
    image: teen,
    icon: <FaSchool />,
    accent: "#6ec1e4"
  },
  {
    title: "Passed 10th",
    date: "2018",
    description: "Passed 10th grade in 2018.",
    image: teen,
    icon: <FaBookOpen />,
    accent: "#b388ff"
  },
  {
    title: "Joined 11th",
    date: "2018",
    description: "Joined 11th grade in 2018.",
    image: other,
    icon: <FaBookOpen />,
    accent: "#b388ff"
  },
  {
    title: "Passed 12th",
    date: "2020",
    description: "Passed 12th grade in 2020.",
    image: other,
    icon: <FaBookOpen />,
    accent: "#ff6e6e"
  },
  {
    title: "Joined College",
    date: "2021 - 2024",
    description: 'Joined "College Name" in 2021 and graduated in 2024.',
    image: image,
    icon: <FaUniversity />,
    accent: "#ffd700"
  },
  {
    title: "Currently at Tezpur University",
    date: "2024 - 2026",
    description: "Currently studying at Tezpur University (Batch 2024-26).",
    image: image,
    icon: <FaStar />,
    accent: "#00e676"
  }
];

// Animated border squares for background
function useBorderSquares() {
  const [borderSquares, setBorderSquares] = useState([]);
  useEffect(() => {
    function randomSquare() {
      const size = 40 + Math.random() * 80;
      return {
        id: Math.random().toString(36).substr(2, 9),
        top: Math.random() * 80 + '%',
        left: Math.random() * 80 + '%',
        size,
        duration: 2.5 + Math.random() * 1.5,
        borderRadius: '12px'
      };
    }
    let running = true;
    async function spawnSquares() {
      while (running) {
        const newSquare = randomSquare();
        setBorderSquares([newSquare]);
        await new Promise(resolve =>
          setTimeout(resolve, 2000 + Math.random() * 1200)
        );
      }
    }
    spawnSquares();
    return () => {
      running = false;
    };
  }, []);
  return borderSquares;
}

export default function Journey() {
  const borderSquares = useBorderSquares();

  return (
    <section className="journey-section">
      {/* Animated Transparent Border Squares */}
      <div className="journey-border-squares">
        <AnimatePresence>
          {borderSquares.map(square => (
            <motion.div
              key={square.id}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: square.duration, ease: "easeInOut" }}
              style={{
                position: "absolute",
                top: square.top,
                left: square.left,
                width: square.size,
                height: square.size,
                border: "2px solid rgba(110,193,228,0.22)",
                borderRadius: square.borderRadius,
                pointerEvents: "none",
                zIndex: 1,
                boxShadow: "0 0 16px 2px rgba(110,193,228,0.13)",
                background: "transparent",
                mixBlendMode: "screen"
              }}
            />
          ))}
        </AnimatePresence>
      </div>

      <motion.h1
        className="journey-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Journey
      </motion.h1>

      <div className="journey-timeline">
        <div className="journey-timeline-line" />
        {milestones.map((milestone, idx) => (
          <motion.div
            className={`journey-timeline-item ${idx % 2 ? "right" : "left"}`}
            key={milestone.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.18 }}
          >
            <div
              className="journey-dot-glow"
              style={{
                background: milestone.accent,
                boxShadow: `0 0 32px 8px ${milestone.accent}88, 0 0 0 6px #181a20`
              }}
            >
              <span className="journey-dot-icon">{milestone.icon}</span>
            </div>
            <div className="journey-card-outer" style={{ borderColor: milestone.accent }}>
              <div className="journey-photo">
                <img
                  src={milestone.image}
                  alt={milestone.title}
                  onError={e => {
                    e.target.src =
                      "https://placehold.co/120x120/222/6ec1e4?text=Photo";
                  }}
                />
              </div>
              <div className="journey-info">
                <div className="journey-date">{milestone.date}</div>
                <div className="journey-milestone">{milestone.title}</div>
                <div className="journey-desc">{milestone.description}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
