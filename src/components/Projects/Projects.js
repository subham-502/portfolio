import React, { useEffect, useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';
import web from './web.jpg'; 
import hostel from './hostel.jpg'; 
import portfolio from './portfolio.jpg'; 

const projects = [
  {
    title: 'Portfolio',
    description: 'My Personal Portfolio Website.',
    imageUrl: portfolio,
    link: 'https://github.com/subham-502/portfolio',
  },
  {
    title: 'Web-Technology Assignments',
    description: 'Linked all my web technology assignments in one place.',
    imageUrl: web,
    link: 'https://github.com/subham-502/Web-tech',
  },
  {
    title: 'Seat Allocation System',
    description: 'Developed a hostel seat allocation system using Python and Flask.',
    imageUrl: hostel,
    link: 'https://github.com/subham-502/WT-hostel_seat_allocation',
  },
  {
    title: 'Capstone Project',
    description: 'Created a comprehensive capstone project that integrates multiple technologies.',
    imageUrl: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg',
    link: 'https://github.com/PGI-Devs/Factory-Management-System/tree/himangshu',
  },
];


const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

const ProjectCard = memo(({ project }) => (
  <motion.div
    className="modern2025-projects-card"
    variants={cardVariants}
    whileHover={{
      scale: 1.04,
      rotate: 1,
      boxShadow: '0 0 0 3px #00e0ff, 0 0 18px #00e0ff',
      transition: { duration: 0.2 },
    }}
    tabIndex={0}
  >
    <div className="modern2025-projects-card-imgwrap">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="modern2025-projects-card-img"
        loading="lazy"
      />
    </div>
    <div className="modern2025-projects-card-content">
      <h3 className="modern2025-projects-card-title">{project.title}</h3>
      <p className="modern2025-projects-card-desc">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="modern2025-projects-card-link"
      >
        View Project
      </a>
    </div>
  </motion.div>
));

export default function Projects() {
  const [bgLogos, setBgLogos] = useState([]);

  

  return (
    <section className="modern2025-projects-section">
      {/* Floating Background Logos */}
      <AnimatePresence>
        {bgLogos.map((logo) => (
          <motion.img
            key={logo.id}
            src={logo.url}
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.07 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="modern2025-projects-bg-logo"
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

      {/* Neon Animated Heading */}
      <motion.h2
        className="modern2025-projects-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {'Dive into My Universe'.split('').map((letter, i) => (
          <motion.span
            key={i}
            variants={cardVariants}
            className="modern2025-projects-title-letter"
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.h2>

      {/* Projects Grid */}
      <motion.div
        className="modern2025-projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </motion.div>
    </section>
  );
}
