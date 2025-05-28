import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const socialLinks = [
  {
    icon: <FaFacebook />,
    href: 'https://www.facebook.com/share/19BP8gP2wp/?mibextid=qi2Omg',
    color: '#1877F2',
    label: 'Facebook'
  },
  {
    icon: <FaTwitter />,
    href: 'https://twitter.com',
    color: '#1DA1F2',
    label: 'Twitter'
  },
  {
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com',
    color: '#0077B5',
    label: 'LinkedIn'
  },
  {
    icon: <FaGithub />,
    href: 'https://github.com',
    color: '#f3f4f6',
    label: 'GitHub'
  },
  {
    icon: <FaInstagram />,
    href: 'https://www.instagram.com/subham_5o?igsh=bThjbzgxNHpzaDM2',
    color: '#E4405F',
    label: 'Instagram'
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 }
  }
};
const iconVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    }, 1500);
  };

  // Close modal when clicking outside the form
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modern2025-contact-modal')) {
      setShowForm(false);
      setStatus(null);
    }
  };

  // Close modal with ESC key
  React.useEffect(() => {
    if (!showForm) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowForm(false);
        setStatus(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showForm]);

  return (
    <section className="modern2025-contact-social-section">
      <motion.h1
        className="modern2025-contact-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {"Let's Connect".split('').map((letter, i) => (
          <motion.span
            key={i}
            variants={iconVariants}
            className="modern2025-contact-title-letter"
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.h1>
      <motion.p
        className="modern2025-contact-desc"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        I'm a passionate developer eager to collaborate and share ideas.<br />
        Feel free to reach out through any of the platforms below.
      </motion.p>
      <motion.div
        className="modern2025-contact-icons"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {socialLinks.map((link, i) => (
          <motion.a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="modern2025-contact-icon-link"
            style={{ color: link.color }}
            variants={iconVariants}
            whileHover={{
              scale: 1.22,
              rotate: [0, 7, -7, 0],
              boxShadow: `0 0 20px ${link.color}, 0 0 8px #00e0ff`
            }}
            aria-label={link.label}
          >
            {link.icon}
          </motion.a>
        ))}
      </motion.div>
      <motion.button
        className="modern2025-contact-btn"
        onClick={() => {
          setShowForm(true);
          setStatus(null);
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Contact Me
      </motion.button>

      {/* Modal Popup */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            className="modern2025-contact-modal"
            onClick={handleOverlayClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modern2025-contact-form-popup"
              initial={{ scale: 0.92, y: -40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 40, opacity: 0 }}
              transition={{ duration: 0.38, ease: "easeOut" }}
            >
              <button
                className="modern2025-contact-modal-close"
                onClick={() => {
                  setShowForm(false);
                  setStatus(null);
                }}
                aria-label="Close contact form"
                type="button"
              >
                &times;
              </button>
              <h3>Contact Form</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleInput}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleInput}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  value={form.message}
                  onChange={handleInput}
                  required
                ></textarea>
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
                {status && (
                  <div className={`modern2025-contact-status ${status === "success" ? "success" : "error"}`}>
                    {status === "success"
                      ? "Your message has been sent!"
                      : "There was an error sending your message."}
                  </div>
                )}
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
