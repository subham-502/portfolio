import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const navLinks = [
  { name: 'Home', href: '#hero', id: 'hero' },
  { name: 'About', href: '#about', id: 'about' },
   { name: 'Roadmap', href: '#roadmap', id: 'roadmap' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

const Navbar = () => {
  const [hovered, setHovered] = useState(null);
  const [active, setActive] = useState('Home');

  // Update active nav link based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      let found = false;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80) {
            setActive(navLinks[i].name);
            found = true;
            break;
          }
        }
      }
      if (!found) setActive('Home');
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar90s-root">
      <ul className="navbar90s-list">
        {navLinks.map((link) => (
          <li key={link.name} className="navbar90s-item">
            <a
              href={link.href}
              className={`navbar90s-link${active === link.name ? ' active' : ''}`}
              onClick={() => setActive(link.name)}
              onMouseEnter={() => setHovered(link.name)}
              onMouseLeave={() => setHovered(null)}
              tabIndex={0}
            >
              <span>{link.name}</span>
              {active === link.name && (
                <motion.div
                  className="navbar90s-underline"
                  layoutId="navbar-underline"
                  aria-hidden="true"
                  transition={{
                    type: "spring",
                    bounce: 0.32,
                    stiffness: 150,
                    damping: 12,
                    duration: 0.32,
                  }}
                />
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
