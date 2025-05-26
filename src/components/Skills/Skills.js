import React, { useEffect } from 'react';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs,
  FaPython, FaJava, FaGithub,
} from 'react-icons/fa';
import { SiCplusplus, SiDjango, SiMongodb, SiMysql } from 'react-icons/si';
import VanillaTilt from 'vanilla-tilt';
import { motion } from 'framer-motion';
import './Skills.css';

const skills = [
  { name: 'HTML5', icon: FaHtml5, color: '#e34c26', tooltip: 'Markup Language' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#264de4', tooltip: 'Styling Web Pages' },
  { name: 'JavaScript', icon: FaJsSquare, color: '#f0db4f', tooltip: 'Dynamic Logic' },
  { name: 'React', icon: FaReact, color: '#61DBFB', tooltip: 'UI Library' },
  { name: 'Node.js', icon: FaNodeJs, color: '#3C873A', tooltip: 'Backend Runtime' },
  { name: 'GitHub', icon: FaGithub, color: '#181717', tooltip: 'Version Control' },
  { name: 'Python', icon: FaPython, color: '#306998', tooltip: 'General-purpose Language' },
  { name: 'C', icon: SiCplusplus, color: '#A8B9CC', tooltip: 'System Programming' },
  { name: 'C++', icon: SiCplusplus, color: '#00599C', tooltip: 'Object-Oriented Language' },
  { name: 'Java', icon: FaJava, color: '#007396', tooltip: 'Enterprise Language' },
  { name: 'Django', icon: SiDjango, color: '#2cdd8f', tooltip: 'Python Framework' },
  { name: 'MongoDB', icon: SiMongodb, color: '#4DB33D', tooltip: 'NoSQL Database' },
  { name: 'SQL', icon: SiMysql, color: '#4479A1', tooltip: 'Relational Database' },
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
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll('.tilt-card'), {
      max: 12,
      speed: 400,
      glare: true,
      'max-glare': 0.13,
    });
  }, []);

  return (
    <section id="skills" className="skills-section">
      <motion.h2
        className="skills-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        aria-label="Skills"
      >
        {'Skills'.split('').map((letter, index) => (
          <motion.span
            key={index}
            variants={itemVariants}
            className="skills-title-letter"
            aria-hidden="true"
          >
            {letter}
          </motion.span>
        ))}
      </motion.h2>

      <motion.div
        className="skills-grid"
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
              className="skills-card tilt-card"
              variants={itemVariants}
              whileHover={{ scale: 1.07, boxShadow: '0 0 24px #00e0ff, 0 0 8px #fff' }}
              tabIndex={0}
              aria-label={skill.name + ' - ' + skill.tooltip}
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
                className="skills-icon"
              >
                <IconComponent size={54} color={skill.color} aria-hidden="true" />
              </motion.div>
              <p className="skills-name">{skill.name}</p>
              <span className="skills-tooltip">{skill.tooltip}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Skills;
