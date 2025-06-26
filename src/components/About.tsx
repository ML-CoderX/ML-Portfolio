import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    {
      category: "ML Algorithms",
      items: ["Classification", "Regression"]
    },
    {
      category: "Data Engineering",
      items: ["Data Preprocessing", "Feature Engineering"]
    },
    {
      category: "Core Libraries",
      items: ["Scikit-learn", "Pandas", "NumPy"]
    },
    {
      category: "Model Optimization",
      items: ["SMOTE", "Model Tuning", "Performance Metrics"]
    },
    {
      category: "Advanced AI",
      items: ["LLM Integration", "Intelligent Systems"]
    }
  ];

  return (
    <section id="about" className="section-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Avatar Container */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-64 h-64 mx-auto relative">
            {/* Animated background elements */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                background: [
                  'radial-gradient(circle at 30% 30%, rgba(0, 243, 255, 0.2) 0%, transparent 70%)',
                  'radial-gradient(circle at 70% 70%, rgba(123, 0, 255, 0.2) 0%, transparent 70%)',
                  'radial-gradient(circle at 30% 30%, rgba(0, 243, 255, 0.2) 0%, transparent 70%)',
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />
            
            {/* Rotating borders */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-neon-blue"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-neon-purple"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            />
            
            {/* Avatar placeholder */}
            <motion.div
              className="absolute inset-4 rounded-full bg-cyber-light overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-neon-blue via-neon-purple to-neon-pink opacity-50" />
              <motion.div
                className="absolute inset-0 bg-cyber-grid opacity-30"
                animate={{
                  backgroundPosition: ['0px 0px', '100px 100px'],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Bio Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Background circuit pattern */}
          <motion.div
            className="absolute inset-0 bg-cyber-grid opacity-10"
            animate={{
              backgroundPosition: ['0px 0px', '50px 50px'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-cyber mb-6">
              <span className="text-neon-blue">About</span>{' '}
              <motion.span
                className="text-neon-purple"
                animate={{
                  textShadow: [
                    '0 0 10px #7b00ff, 0 0 20px #7b00ff',
                    '0 0 20px #ff00f7, 0 0 30px #ff00f7',
                    '0 0 10px #7b00ff, 0 0 20px #7b00ff',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                SAAD
              </motion.span>
            </h2>
            
            <div className="space-y-4 font-tech text-gray-300">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Greetings! I'm SAAD, a Machine Learning Engineer passionate about pushing the boundaries
                of artificial intelligence and creating innovative solutions.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                With expertise in advanced ML algorithms, data preprocessing, and model optimization,
                I transform complex data challenges into efficient, production-ready solutions.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                My work focuses on developing intelligent systems that leverage cutting-edge LLM technologies,
                ensuring robust performance through careful model tuning and evaluation.
              </motion.p>
            </div>

            {/* Skills */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <h3 className="text-xl font-cyber text-neon-purple mb-6">Skills & Technologies</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skills.map((skillGroup, groupIndex) => (
                  <motion.div
                    key={skillGroup.category}
                    className="bg-cyber-light/30 p-4 rounded-lg border border-neon-blue/30"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * groupIndex }}
                  >
                    <h4 className="text-neon-blue font-cyber text-sm mb-3">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, index) => (
                        <motion.span
                          key={skill}
                          className="px-3 py-1 bg-cyber-light text-neon-blue text-sm font-tech rounded-full border border-neon-blue/50"
                          whileHover={{
                            scale: 1.05,
                            boxShadow: '0 0 15px rgba(0, 243, 255, 0.3)',
                          }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * index }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="mt-8 space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            >
              <motion.button
                className="cyber-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Resume
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 