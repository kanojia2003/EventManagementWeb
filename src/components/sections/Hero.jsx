

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn, staggerContainer } from '../../framer';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 1.2 }}
          className="w-full h-full bg-gradient-to-br from-black via-gray-900 to-black"
        ></motion.div>
        {/* Gold Glow Circles */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-gold/20 blur-3xl"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-gold/10 blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 3,
            ease: "easeInOut" 
          }}
          className="absolute top-10 right-10 w-24 h-24 border-2 border-gold/30 rounded-full opacity-40 hidden md:block"
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 4,
            ease: "easeInOut" 
          }}
          className="absolute bottom-10 left-10 w-32 h-32 border-2 border-gold/20 rounded-full opacity-30 hidden md:block"
        ></motion.div>
        {/* Overlay gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 z-5"></div>
      </div>

      {/* Main Content */}
      <motion.div 
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto h-full"
      >
        <motion.div variants={fadeInUp} className="mb-8 w-full">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gold/40 mx-auto mb-8 rounded-full"
          ></motion.div>
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-8xl font-serif font-bold text-gold mb-6 tracking-tight drop-shadow-lg" 
            style={{textShadow: '0 2px 16px #000, 0 0 2px #D4AF37'}}
          >
            SSBenchmark
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="block mt-2 md:mt-0 md:inline text-white text-4xl md:text-6xl font-light"
            >   Events</motion.span>
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="h-1 bg-gold/40 mx-auto mt-8 rounded-full"
          ></motion.div>
        </motion.div>

        <motion.p 
          variants={fadeInUp}
          className="text-xl md:text-2xl text-white/90 mb-10 font-light max-w-2xl mx-auto"
        >
          Make any occasion
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="text-gold font-semibold"
          >&nbsp;Unforgettable.</motion.span>
        </motion.p>

        <motion.div 
          variants={fadeInUp}
          className="flex flex-col sm:flex-row justify-center gap-6 mt-6 w-full"
        >
          <motion.a
            whileHover={{ scale: 1.1, boxShadow: '0 8px 40px #D4AF37' }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-12 py-5 bg-gradient-to-r from-gold to-yellow-500 text-white font-bold rounded-full border-2 border-gold shadow-xl shadow-gold/30 hover:from-yellow-400 hover:to-gold hover:text-white transition-all duration-300 text-2xl"
            style={{boxShadow: '0 4px 32px #D4AF37'}}
          >
            Book Now
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.3)', borderColor: '#D4AF37' }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-12 py-5 bg-transparent text-white border-2 border-gold/50 font-bold rounded-full shadow-xl shadow-black/30 text-2xl"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;