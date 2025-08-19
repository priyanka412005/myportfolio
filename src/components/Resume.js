import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaDownload, FaTrophy, FaGraduationCap, FaCode, FaAward } from 'react-icons/fa';
import './Resume.css';

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const achievements = [
    {
      icon: FaCode,
      title: "250+ LeetCode Problems",
      description: "Solved complex Data Structures & Algorithms problems",
      color: "#8b5cf6"
    },
    {
      icon: FaGraduationCap,
      title: "9.0 CGPA",
      description: "Maintained excellent academic performance at Graphic Era Hill University",
      color: "#10b981"
    },
    {
      icon: FaTrophy,
      title: "4+ Projects Completed",
      description: "Built full-stack applications and desktop software",
      color: "#f59e0b"
    },
    {
      icon: FaAward,
      title: "Technical Excellence",
      description: "Strong foundation in modern development technologies",
      color: "#ef4444"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Graphic Era Hill University",
      duration: "2022 - 2026",
      details: "Focus on Data Structures, Algorithms, and Software Engineering"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="resume">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Resume & Achievements</h2>
          <p className="section-subtitle">
            My academic journey, achievements, and professional milestones
          </p>
        </motion.div>

        <motion.div 
          className="resume-content"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="resume-left">
            <motion.div className="achievements-section" variants={itemVariants}>
              <h3 className="section-subtitle">Key Achievements</h3>
              <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    className="achievement-card"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="achievement-icon" style={{ color: achievement.color }}>
                      <achievement.icon />
                    </div>
                    <div className="achievement-content">
                      <h4 className="achievement-title">{achievement.title}</h4>
                      <p className="achievement-description">{achievement.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="education-section" variants={itemVariants}>
              <h3 className="section-subtitle">Education</h3>
              <div className="education-timeline">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="education-item"
                    whileHover={{ x: 10 }}
                  >
                    <div className="education-marker"></div>
                    <div className="education-content">
                      <h4 className="education-degree">{edu.degree}</h4>
                      <p className="education-institution">{edu.institution}</p>
                      <p className="education-duration">{edu.duration}</p>
                      <p className="education-details">{edu.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="resume-right">
            <motion.div className="resume-download" variants={itemVariants}>
              <div className="download-card">
                <div className="download-icon">
                  <FaDownload />
                </div>
                <h3>Download Resume</h3>
                <p>Get a detailed view of my skills, experience, and qualifications</p>
                <motion.a
                  href="/resume.pdf"
                  download
                  className="btn btn-primary download-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDownload />
                  Download PDF
                </motion.a>
              </div>
            </motion.div>

            <motion.div className="skills-highlight" variants={itemVariants}>
              <h3>Technical Highlights</h3>
              <div className="skills-list">
                <div className="skill-category">
                  <h4>Programming Languages</h4>
                  <p>Java, C, C++, Python, JavaScript</p>
                </div>
                <div className="skill-category">
                  <h4>Web Technologies</h4>
                  <p>HTML, CSS, React.js, Tailwind CSS</p>
                </div>
                <div className="skill-category">
                  <h4>Databases</h4>
                  <p>MySQL, SQLite, MongoDB</p>
                </div>
                <div className="skill-category">
                  <h4>Tools & Frameworks</h4>
                  <p>Git, Firebase, FastAPI, Tkinter</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
