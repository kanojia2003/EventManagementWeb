import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn, scaleIn, staggerContainer } from '../../framer';

const About = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.section 
      id="about" 
      className="py-20 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif font-bold text-center mb-12"
        >
          About <span className="text-gold">Us</span>
        </motion.h2>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Founder Image */}
          <motion.div 
            variants={scaleIn}
            className="rounded-full overflow-hidden border-8 border-gold/20 shadow-xl max-w-md mx-auto"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              src="/src/assets/images/founder.jpg"
              alt="Khusboo Singh, Founder of SS Benchmark Events"
              className="w-full aspect-square object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* About Content */}
          <motion.div variants={fadeInUp}>
            <motion.h3 
              variants={fadeInUp}
              className="text-2xl font-bold mb-4"
            >
              Founded in 2021 by Khusboo Singh
            </motion.h3>
            <motion.p 
              variants={fadeInUp}
              className="text-gray-700 mb-4"
            >
              SS Benchmark Events has quickly established itself as a leader in the event planning industry. Our mission is to transform your vision into reality with creativity, precision, and dedication.
            </motion.p>
            <motion.p 
              variants={fadeInUp}
              className="text-gray-700 mb-6"
            >
              Our vision is to set new benchmarks in the event industry by delivering exceptional experiences that our clients cherish forever.
            </motion.p>

            {expanded && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="text-gray-700 mb-6"
              >
                <motion.p 
                  variants={fadeInUp}
                  className="mb-4"
                >
                  With a team of passionate professionals, we specialize in creating memorable events that exceed expectations. From intimate gatherings to grand celebrations, we handle every detail with meticulous care and attention.
                </motion.p>
                <motion.p variants={fadeInUp}>
                  Our approach combines innovative ideas with flawless execution, ensuring that each event reflects the unique personality and vision of our clients. We believe that every occasion deserves to be extraordinary, and we work tirelessly to make that belief a reality.
                </motion.p>
              </motion.div>
            )}

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#D4AF37' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setExpanded(!expanded)}
              className="px-6 py-2 bg-black text-white rounded-full transition-colors duration-300 flex items-center"
            >
              {expanded ? 'Read Less' : 'Read More'}
              <motion.svg
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </motion.svg>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;