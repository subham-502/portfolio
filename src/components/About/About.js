import React from 'react';
import { motion } from 'framer-motion';
import TypingText from './TypingText'; // Replace with <p> if you don't use TypingText
import image from './90.jpg';
import {
  FaUser,
  FaProjectDiagram,
  FaTools,
  FaEnvelope,
  FaFileDownload,
} from 'react-icons/fa';
import './About.css';

const buttons = [
  { icon: <FaUser />, text: 'About', link: '#about' },
  { icon: <FaProjectDiagram />, text: 'Projects', link: '#projects' },
  { icon: <FaTools />, text: 'Skills', link: '#skills' },
  { icon: <FaEnvelope />, text: 'Contact', link: '#contact' },
  {
    icon: <FaFileDownload />,
    text: 'Resume',
    link: '/resume.pdf',
    download: true,
  },
];

const description = `I'm a developer and lifelong learner, passionate about creating efficient, scalable solutions. 
I thrive on exploring new technologies, improving my skills, 
and building impactful projects. For me, development is as much about continuous growth as it 
is about writing clean, purposeful code.`;

const photoVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
};

const contentVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", delay: 0.1 } }
};

const buttonsVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", delay: 0.2 } }
};

const About = () => (
  <section id="about" className="modern2025-about-section">
    <div className="modern2025-grid">
      <motion.div
        className="modern2025-photo-block"
        variants={photoVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
      >
        <img src={image} alt="Profile" className="modern2025-photo" />
      </motion.div>
      <motion.div
        className="modern2025-content"
        variants={contentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
      >
        <h1>
          <span className="modern2025-bold">ABOUT</span> <span className="modern2025-accent">ME</span>
        </h1>
        <div className="modern2025-desc">
          <TypingText text={description} speed={18} />
        </div>
        <motion.div
          className="modern2025-buttons"
          variants={buttonsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
        >
          {buttons.map((btn) => (
            <a
              key={btn.text}
              href={btn.link}
              className={`modern2025-btn${btn.text === 'Resume' ? ' modern2025-btn-resume' : ''}`}
              {...(btn.download ? { download: true, target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {btn.icon} {btn.text}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default About;
