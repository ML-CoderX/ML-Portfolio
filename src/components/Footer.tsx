import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cyber-darker py-12 relative overflow-hidden">
      {/* Decorative grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_#1a1a2f_1px,_transparent_1px),linear-gradient(to_bottom,_#1a1a2f_1px,_transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="text-2xl font-cyber text-neon-blue"
              animate={{
                textShadow: [
                  '0 0 10px #00f3ff, 0 0 20px #00f3ff',
                  '0 0 20px #7b00ff, 0 0 30px #7b00ff',
                  '0 0 10px #00f3ff, 0 0 20px #00f3ff',
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
          </motion.div>

          {/* Navigation */}
          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center space-x-6">
              {['Home', 'About', 'Portfolio', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-neon-blue transition-colors font-tech text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
            <p className="text-gray-500 font-tech text-sm">
              © {currentYear} SAAD. All rights reserved.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://github.com/ML-CoderX/ML-Portfolio.git"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-cyber-darker transition-colors"
              >
                GH
              </a>
              <a
                href="https://www.linkedin.com/in/saad-beary-017019301/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-cyber-darker transition-colors"
              >
                IN
              </a>
              <a
                href="https://www.instagram.com/_s_a_a_d_0/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-cyber-darker transition-colors"
              >
                IG
              </a>
              <a
                href="mailto:rsaadt3@gmail.com"
                className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-cyber-darker transition-colors"
              >
                @
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 