import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs,
  FaCode, FaServer, FaLaptopCode, FaCogs, FaLayerGroup
} from 'react-icons/fa';
import { SiCplusplus, SiMysql, SiReact } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skills = [
    { name: 'Java', icon: FaJava, level: 90, color: '#f89820' },
    { name: 'C', icon: FaCode, level: 85, color: '#00599c' },
    { name: 'C++', icon: SiCplusplus, level: 85, color: '#00599c' },
    { name: 'Python', icon: FaPython, level: 88, color: '#3776ab' },
    { name: 'HTML', icon: FaHtml5, level: 95, color: '#e34f26' },
    { name: 'CSS', icon: FaCss3Alt, level: 90, color: '#1572b6' },
    { name: 'JavaScript', icon: FaJs, level: 85, color: '#f7df1e' },
    { name: 'React.js', icon: SiReact, level: 80, color: '#61dafb' },
    { name: 'MySQL', icon: SiMysql, level: 75, color: '#4479a1' },
    { name: 'Data Structures', icon: FaLayerGroup, level: 85, color: '#8b5cf6' },
    { name: 'Algorithms', icon: FaCogs, level: 85, color: '#10b981' },
    { name: 'Operating Systems', icon: FaServer, level: 80, color: '#3b82f6' },
    { name: 'OOPS', icon: FaLaptopCode, level: 90, color: '#ef4444' },
    { name: 'Frontend Development', icon: FaCode, level: 85, color: '#8b5cf6' }
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
    <div className="skills">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical skills and programming expertise
          </p>
        </motion.div>

        <motion.div 
          className="skills-grid"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="skill-header">
                <div className="skill-icon" style={{ color: skill.color }}>
                  <skill.icon />
                </div>
                <div className="skill-info">
                  <h3 className="skill-name">{skill.name}</h3>
                  <span className="skill-level">{skill.level}%</span>
                </div>
              </div>
              
              <div className="skill-bar">
                <motion.div
                  className="skill-progress"
                  style={{ backgroundColor: skill.color }}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="skills-summary"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="summary-card">
            <h3>Core Strengths</h3>
            <ul>
              <li>Strong foundation in Data Structures & Algorithms</li>
              <li>Full-stack development with modern frameworks</li>
              <li>Database design and management</li>
            
              <li>Problem-solving and analytical thinking</li>
            </ul>
          </div>
          
          <div className="summary-card">
            <h3>Learning Focus</h3>
            <ul>
              <li>Advanced React patterns and state management</li>
              <li>Backend development with Node.js/Express</li>
              <li>Cloud platforms (AWS, Azure)</li>
              
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
