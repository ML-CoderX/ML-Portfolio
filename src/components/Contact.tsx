import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-cyber mb-4 text-neon-blue">Get in Touch</h2>
          <p className="text-gray-300 font-tech">
            Let's connect and discuss how we can work together on exciting ML projects.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="max-w-2xl mx-auto bg-cyber-light/30 p-8 rounded-lg border-2 border-neon-blue/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-cyber text-neon-blue mb-6">Connect With Me</h3>
              <div className="space-y-4 font-tech text-gray-300">
                <p>Feel free to reach out through any of these channels:</p>
              </div>
            </div>

            <div className="space-y-6">
              <motion.a
                href="mailto:rsaadt3@gmail.com"
                className="flex items-center space-x-4 text-gray-300 hover:text-neon-blue transition-colors p-4 rounded-lg bg-cyber-light/20 border border-neon-blue/20"
                whileHover={{ scale: 1.02, borderColor: 'rgba(0, 243, 255, 0.5)' }}
              >
                <span className="w-10 h-10 flex items-center justify-center border-2 border-current rounded-full text-neon-blue">
                  @
                </span>
                <span className="font-tech">rsaadt3@gmail.com</span>
              </motion.a>

              <motion.a
                href="https://github.com/ML-CoderX/ML-Portfolio.git"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-gray-300 hover:text-neon-blue transition-colors p-4 rounded-lg bg-cyber-light/20 border border-neon-blue/20"
                whileHover={{ scale: 1.02, borderColor: 'rgba(0, 243, 255, 0.5)' }}
              >
                <span className="w-10 h-10 flex items-center justify-center border-2 border-current rounded-full text-neon-blue">
                  GH
                </span>
                <span className="font-tech">GitHub Profile</span>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/saad-beary-017019301/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-gray-300 hover:text-neon-blue transition-colors p-4 rounded-lg bg-cyber-light/20 border border-neon-blue/20"
                whileHover={{ scale: 1.02, borderColor: 'rgba(0, 243, 255, 0.5)' }}
              >
                <span className="w-10 h-10 flex items-center justify-center border-2 border-current rounded-full text-neon-blue">
                  IN
                </span>
                <span className="font-tech">LinkedIn Profile</span>
              </motion.a>

              <motion.a
                href="https://www.instagram.com/_s_a_a_d_0/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-gray-300 hover:text-neon-blue transition-colors p-4 rounded-lg bg-cyber-light/20 border border-neon-blue/20"
                whileHover={{ scale: 1.02, borderColor: 'rgba(0, 243, 255, 0.5)' }}
              >
                <span className="w-10 h-10 flex items-center justify-center border-2 border-current rounded-full text-neon-blue">
                  IG
                </span>
                <span className="font-tech">Instagram Profile</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 