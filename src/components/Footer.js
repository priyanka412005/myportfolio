import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  const socials = [
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/priyankapathak' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/priyankapathak' },
    { name: 'LeetCode', icon: SiLeetcode, url: 'https://leetcode.com/priyankapathak' },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <h3 className="brand-title gradient-text">Priyanka Pathak</h3>
          <p className="brand-tagline">Building elegant, performant, and user-focused software.</p>
          <div className="footer-socials">
            {socials.map((s) => (
              <motion.a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <s.icon />
                <span className="sr-only">{s.name}</span>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            {links.map((l) => (
              <li key={l.id}>
                <button className="footer-link" onClick={() => scrollTo(l.id)}>{l.label}</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-cta">
          <h4>Resume</h4>
          <p className="cta-text">Download my latest resume and get in touch for opportunities.</p>
          <a href="/resume.pdf" download className="btn btn-primary">Download Resume</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {year} Priyanka Pathak • Crafted with <FaHeart className="heart" /> using React
        </p>
      </div>
    </footer>
  );
};

export default Footer;
