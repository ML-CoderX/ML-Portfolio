import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: number;
  emoji: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  link?: string;
  demoLink?: string;
}

const projects: Project[] = [
  {
    id: 1,
    emoji: "🧠",
    title: "DocuAI – AI-Assisted Medical Tool",
    description: "An intelligent system that predicts possible diseases based on symptoms and provides actionable suggestions to doctors using LLMs.",
    longDescription: `DocuAI is a sophisticated medical assistance tool that combines traditional ML with modern LLM technology. 
    It analyzes patient symptoms to predict potential diseases and provides evidence-based suggestions to healthcare professionals.
    The system uses SMOTE for handling imbalanced medical data and integrates with Gemini AI for enhanced diagnostic capabilities.`,
    techStack: ["Python", "Scikit-learn", "SMOTE", "Pandas", "Gemini AI", "Streamlit", "LLMs"],
    demoLink: "https://github.com/subhankalgond/hackprix20.git"
  },
  {
    id: 2,
    emoji: "💻",
    title: "Laptop Price Predictor",
    description: "A regression-based ML model that predicts laptop prices using specifications like RAM, SSD, brand, etc.",
    longDescription: `This price prediction system uses advanced regression techniques to estimate laptop prices based on their specifications.
    The model considers multiple features including RAM, storage, processor, brand, and other specifications to provide accurate price estimates.
    Features include interactive price prediction, specification comparison, and visual insights into price-determining factors.`,
    techStack: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Streamlit"],
    demoLink: "https://laptop-price-predictor-v64x.onrender.com"
  },
  {
    id: 3,
    emoji: "🏏",
    title: "IPL Win Predictor",
    description: "A lightweight machine learning model that predicts the winner of an IPL match based on the last innings data.",
    longDescription: `The IPL Win Predictor analyzes historical cricket match data to predict match outcomes.
    It considers crucial factors like current score, wickets remaining, target, and historical team performance.
    The system provides real-time win probability updates and visualizes key factors influencing the prediction.`,
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit"],
    demoLink: "https://ipl-win-predictor-2tp0.onrender.com"
  }
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="section-container">
      <motion.h2
        className="text-4xl font-cyber text-center mb-12 text-neon-blue"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="grid-item cursor-pointer group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative overflow-hidden rounded-lg aspect-video mb-4">
              <div className="absolute inset-0 bg-cyber-light flex items-center justify-center">
                <span className="text-6xl">{project.emoji}</span>
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue via-neon-purple to-neon-pink opacity-20" />
              </div>
            </div>

            <h3 className="text-xl font-cyber text-neon-blue mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4 font-tech text-sm">{project.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {project.techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-cyber-light text-neon-blue text-xs font-tech rounded-full border border-neon-blue"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 3 && (
                <span className="px-2 py-1 bg-cyber-light text-neon-purple text-xs font-tech rounded-full border border-neon-purple">
                  +{project.techStack.length - 3} more
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-cyber-light p-8 rounded-lg max-w-2xl w-full neon-border relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink" />
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">{selectedProject.emoji}</span>
                <h3 className="text-2xl font-cyber text-neon-blue">{selectedProject.title}</h3>
              </div>

              <div className="space-y-4 mb-6">
                <p className="text-gray-300 font-tech">{selectedProject.longDescription}</p>
                
                <div className="mt-6">
                  <h4 className="text-neon-purple font-cyber text-lg mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-cyber-dark text-neon-blue text-sm font-tech rounded-full border border-neon-blue"
                        whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(0, 243, 255, 0.3)' }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end space-x-4">
                <motion.button
                  className="cyber-button"
                  onClick={() => setSelectedProject(null)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Close
                </motion.button>
                {selectedProject.demoLink && (
                  <motion.a
                    href={selectedProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyber-button bg-neon-purple hover:bg-neon-purple/80"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Demo
                  </motion.a>
                )}
                {selectedProject.link && (
                  <motion.a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyber-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio; 