import React from 'react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-cyber-darker">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_var(--tw-gradient-stops))] from-neon-blue/10 via-neon-purple/10 to-neon-pink/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-40%,_var(--tw-gradient-stops))] from-neon-blue/20 to-transparent" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-cyber mb-6 text-white">
            Let's Create Something
            <span className="text-neon-blue"> Extraordinary</span>
          </h2>

          <p className="text-xl font-tech text-gray-300 mb-12">
            Whether you're looking to collaborate on a project, need ML expertise,
            or want to discuss innovative ideas, I'm here to help bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a
              href="#contact"
              className="cyber-button w-full sm:w-auto text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Conversation
            </motion.a>

            <motion.a
              href="#portfolio"
              className="cyber-button w-full sm:w-auto text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-neon-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-neon-purple/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default CallToAction; 