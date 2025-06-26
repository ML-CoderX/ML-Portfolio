import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    // If portfolio is clicked, scroll to about section
    const targetId = id === 'portfolio' ? 'about' : id;
    const element = document.getElementById(targetId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-cyber-darker/80 backdrop-blur-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="text-neon-blue font-cyber text-2xl"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
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

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {['home', 'about', 'portfolio', 'contact'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="text-white hover:text-neon-blue font-tech uppercase tracking-wider"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation; 