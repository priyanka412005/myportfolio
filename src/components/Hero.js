import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const containerClassName = `image-container ${imageLoaded && !imageError ? 'has-image' : ''}`;

  return (
    <div className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 className="hero-title" variants={itemVariants}>
              Hi, I'm <span className="gradient-text">Priyanka Pathak</span>
            </motion.h1>
            
            <motion.h2 className="hero-subtitle" variants={itemVariants}>
              Computer Science Student & Aspiring Developer
            </motion.h2>
            
            <motion.p className="hero-description" variants={itemVariants}>
              Passionate about creating innovative solutions and building modern web applications. 
              Skilled in full-stack development with expertise in React, Python, and modern technologies. 
              Currently pursuing Computer Science at Graphic Era Hill University with a strong focus on 
              Data Structures & Algorithms.
            </motion.p>
            
            <motion.div className="hero-stats" variants={itemVariants}>
              <div className="stat">
                <span className="stat-number">250+</span>
                <span className="stat-label">LeetCode Problems</span>
              </div>
              <div className="stat">
                <span className="stat-number">9.0</span>
                <span className="stat-label">CGPA</span>
              </div>
              <div className="stat">
                <span className="stat-number">4+</span>
                <span className="stat-label">Projects</span>
              </div>
            </motion.div>
            
            <motion.div className="hero-actions" variants={itemVariants}>
              <motion.a
                href="#projects"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaCode />
                View Projects
              </motion.a>
              
              <motion.a
                href="#contact"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
            
            <motion.div className="hero-social" variants={itemVariants}>
              <motion.a
                href="https://github.com/priyankapathak"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/priyankapathak"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className={containerClassName}>
              <img
                src="/profile.jpg"
                alt="Priyanka Pathak"
                className={`profile-img ${imageLoaded && !imageError ? 'visible' : ''}`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
              />
              <div className="image-placeholder">
                <div className="placeholder-text">
                  <FaCode />
                  <span>Professional Photo</span>
                </div>
              </div>
              <div className="image-glow"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
