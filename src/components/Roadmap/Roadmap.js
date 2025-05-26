import React from 'react';
import { motion } from 'framer-motion';
import './Roadmap.css';

const roadmapItems = [
  {
    title: 'HTML, CSS & JavaScript',
    description: 'Built foundational knowledge of web development and UI design.',
    date: '2021',
  },
  {
    title: 'React & Tailwind CSS',
    description: 'Started building responsive and dynamic UIs with modern frameworks.',
    date: '2022',
  },
  {
    title: 'Backend & Databases',
    description: 'Learned Node.js, Express, and SQL to build full-stack applications.',
    date: '2023',
  },
  {
    title: 'Projects & Freelance',
    description: 'Worked on real-world projects, improving performance and UX.',
    date: '2024',
  },
  {
    title: 'Next.js & Animations',
    description: 'Exploring advanced frameworks and smooth UI animations.',
    date: '2025',
  },
];

const programmingItems = [
  {
    title: 'C Programming',
    description: 'Started learning C for understanding low-level memory management and system programming.',
    date: '2020',
  },
  {
    title: 'C++ Programming',
    description: 'Built upon C skills, learning object-oriented programming and advanced concepts.',
    date: '2021',
  },
  {
    title: 'Python Programming',
    description: 'Explored Python for versatility, data analysis, and backend development.',
    date: '2022',
  },
  {
    title: 'JavaScript Programming',
    description: 'Deepened knowledge in JavaScript for full-stack development and modern frameworks.',
    date: '2023',
  },
];

const timelineVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.33 }
  }
};
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const RoadmapTimeline = ({ items }) => (
  <div className="modern2025-roadmap-timeline">
    {/* Animated vertical line */}
    <motion.div
      className="modern2025-roadmap-animated-line"
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.33 * items.length + 0.5, ease: "easeInOut" }}
    />
    <motion.div
      className="modern2025-roadmap-timeline-items"
      variants={timelineVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="modern2025-roadmap-item"
          variants={itemVariants}
        >
          <div className="modern2025-roadmap-dot" />
          <div className="modern2025-roadmap-content">
            <p className="modern2025-roadmap-date">{item.date}</p>
            <h3 className="modern2025-roadmap-step">{item.title}</h3>
            <p className="modern2025-roadmap-desc">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

const Roadmap = () => (
  <section className="modern2025-roadmap-section">
    <h2 className="modern2025-roadmap-title">
      Learning <span className="modern2025-roadmap-highlight">Roadmap</span>
    </h2>
    <div className="modern2025-roadmap-timelines">
      <RoadmapTimeline items={roadmapItems} />
      <RoadmapTimeline items={programmingItems} />
    </div>
  </section>
);

export default Roadmap;
