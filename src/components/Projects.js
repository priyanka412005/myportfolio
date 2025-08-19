import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaPython, FaReact, FaDatabase, FaServer } from 'react-icons/fa';
import { SiTailwindcss, SiFirebase, SiFastapi, SiMongodb } from 'react-icons/si';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      title: "Inventory Management System",
      description: "A comprehensive desktop application for managing inventory, sales, and customer data. Features include real-time stock tracking, sales analytics, and automated reporting.",
      technologies: ["Python", "Tkinter", "SQLite"],
      icons: [FaPython, FaDatabase],
      github: "https://github.com/Priyankapathak20/Inventory-management-system",
      live: null,
      image: "inventory"
    },
    {
      title: "Appointment Booking System – Dr. Chandra's Clinic",
      description: "A modern web application for managing patient appointments and clinic schedules. Includes user authentication, appointment scheduling, and admin dashboard.",
      technologies: ["React.js", "Tailwind CSS", "Firebase"],
      icons: [FaReact, SiTailwindcss, SiFirebase],
      github: "https://github.com/priyankapathak/appointment-booking",
      live: "https://drchandraclinic.netlify.app/",
      image: "appointment"
    },
    {
      title: "Smart Price Comparison Tool",
      description: "An intelligent web application that compares prices across multiple e-commerce platforms. Features include price tracking, alerts, and historical price analysis.",
      technologies: ["React.js", "FastAPI", "MongoDB"],
      icons: [FaReact, SiFastapi, SiMongodb],
      github: "https://github.com/vimalchilkoti01/PriceCompare",
      live: "https://smart-price-comparison.vercel.app",
      image: "price-comparison"
    }
   
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="projects">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent projects demonstrating full-stack development skills and problem-solving abilities
          </p>
        </motion.div>

        <motion.div 
          className="projects-grid"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <div className={`project-placeholder ${project.image}`}>
                  <div className="placeholder-content">
                    <div className="tech-icons">
                      {project.icons.map((Icon, i) => (
                        <Icon key={i} className="tech-icon" />
                      ))}
                    </div>
                    <h3>{project.title}</h3>
                  </div>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub />
                      <span>View Code</span>
                    </motion.a>
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link live"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaExternalLinkAlt />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="projects-cta"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p>Interested in seeing more of my work?</p>
          <motion.a
            href="https://github.com/priyanka412005"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
