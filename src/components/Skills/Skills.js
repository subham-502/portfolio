import React, { useEffect, useState } from 'react';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs,
  FaPython, FaJava, FaGithub,
} from 'react-icons/fa';
import { SiCplusplus, SiDjango, SiMongodb, SiMysql } from 'react-icons/si';
import VanillaTilt from 'vanilla-tilt';
import { motion, AnimatePresence } from 'framer-motion';
import './Skills.css';

const skills = [
  { name: 'HTML5', icon: FaHtml5, color: '#e34c26', tooltip: 'Markup Language' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#264de4', tooltip: 'Styling Web Pages' },
  { name: 'JavaScript', icon: FaJsSquare, color: '#f0db4f', tooltip: 'Dynamic Logic' },
  { name: 'React', icon: FaReact, color: '#61DBFB', tooltip: 'UI Library' },
  { name: 'Node.js', icon: FaNodeJs, color: '#3C873A', tooltip: 'Backend Runtime' },
  { name: 'GitHub', icon: FaGithub, color: '#f3f4f6', tooltip: 'Version Control' },
  { name: 'Python', icon: FaPython, color: '#306998', tooltip: 'General-purpose Language' },
  { name: 'C', icon: SiCplusplus, color: '#A8B9CC', tooltip: 'System Programming' },
  { name: 'C++', icon: SiCplusplus, color: '#00599C', tooltip: 'Object-Oriented Language' },
  { name: 'Java', icon: FaJava, color: '#007396', tooltip: 'Enterprise Language' },
  { name: 'Django', icon: SiDjango, color: '#2cdd8f', tooltip: 'Python Framework' },
  { name: 'MongoDB', icon: SiMongodb, color: '#4DB33D', tooltip: 'NoSQL Database' },
  { name: 'SQL', icon: SiMysql, color: '#4479A1', tooltip: 'Relational Database' },
];

const backgroundLogos = [
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const Skills = () => {
  const [bgLogos, setBgLogos] = useState([]);

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll('.tilt-card'), {
      max: 12,
      speed: 400,
      glare: true,
      'max-glare': 0.13,
    });
  }, []);

  // Limit the number of background logos to avoid clutter
  useEffect(() => {
    const addLogo = () => {
      if (bgLogos.length > 6) return; // limit to 6 floating logos
      const id = Date.now() + Math.random();
      const size = Math.floor(Math.random() * 40) + 60;
      const top = Math.floor(Math.random() * (window.innerHeight - size));
      const left = Math.floor(Math.random() * (window.innerWidth - size));
      const logo = {
        id,
        url: backgroundLogos[Math.floor(Math.random() * backgroundLogos.length)],
        size,
        top,
        left,
      };
      setBgLogos((prev) => [...prev, logo]);
      setTimeout(() => {
        setBgLogos((prev) => prev.filter((l) => l.id !== id));
      }, 3000);
    };

    const interval = setInterval(addLogo, 1200);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [bgLogos.length]);

  return (
    <section id="skills" className="modern2025-skills-section">
      {/* Floating Background Logos */}
      <AnimatePresence>
        {bgLogos.map((logo) => (
          <motion.img
            key={logo.id}
            src={logo.url}
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.06 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="modern2025-skills-bg-logo"
            style={{
              top: logo.top,
              left: logo.left,
              width: logo.size,
              height: logo.size,
            }}
            draggable={false}
          />
        ))}
      </AnimatePresence>

      {/* Animated Heading */}
      <motion.h2
        className="modern2025-skills-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {'Skills'.split('').map((letter, index) => (
          <motion.span
            key={index}
            variants={itemVariants}
            className="modern2025-skills-title-letter"
          >
            {letter}
          </motion.span>
        ))}
      </motion.h2>

      {/* Skills Grid */}
      <motion.div
        className="modern2025-skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <motion.div
              key={index}
              className="modern2025-skills-card tilt-card"
              variants={itemVariants}
              whileHover={{ scale: 1.07, boxShadow: '0 0 24px #00e0ff, 0 0 8px #fff' }}
            >
              <motion.div
                whileHover={{
                  rotate: 360,
                  transition: {
                    repeat: Infinity,
                    duration: 0.5,
                    ease: 'linear',
                  },
                }}
                className="modern2025-skills-icon"
              >
                <IconComponent size={54} color={skill.color} />
              </motion.div>
              <p className="modern2025-skills-name">{skill.name}</p>
              <span className="modern2025-skills-tooltip">{skill.tooltip}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Skills;
