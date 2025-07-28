import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, fadeIn, staggerContainer } from '../../framer';
import { Link } from 'react-router-dom';
import heroSlides from '../../data/heroSlides.json';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${heroSlides[currentSlide].image})`,
              }}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
          </motion.div>
        </AnimatePresence>

        {/* Animated Background Elements */}
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
          className="absolute top-10 right-10 w-24 h-24 border-2 border-gold/30 rounded-full opacity-40 hidden md:block z-10"
        />
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
          className="absolute bottom-10 left-10 w-32 h-32 border-2 border-gold/20 rounded-full opacity-30 hidden md:block z-10"
        />
      </div>

      {/* Main Content */}
      <motion.div 
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto h-full"
      >
        <motion.div variants={fadeInUp} className="mb-8 w-full">
          {/* Brand Title */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gold/40 mx-auto mb-8 rounded-full"
          />
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-extrabold drop-shadow-lg flex flex-wrap justify-center items-center mb-4"
          >
            <span
              className="bg-gradient-to-r from-[#FFD700] via-[#FFC300] to-[#D4AF37] bg-clip-text text-transparent"
              style={{
                WebkitTextStroke: '2px white',
                textStroke: '2px white',
                textShadow: '0 2px 16px'
              }}
            >
              SSBenchmark
            </span>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="block mt-2 md:mt-0 md:inline text-white text-4xl md:text-6xl font-light ml-2"
            >
              Events
            </motion.span>
          </motion.h1>
          
          {/* Dynamic Slide Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`slide-content-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mt-6"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gold mb-3">
                {heroSlides[currentSlide].title}
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-2 font-medium">
                {heroSlides[currentSlide].subtitle}
              </p>
              <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto">
                {heroSlides[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="h-1 bg-gold/40 mx-auto mt-8 rounded-full"
          />
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          variants={fadeInUp}
          className="flex flex-col sm:flex-row justify-center gap-6 mt-6 w-full"
        >
          <Link
            to="/contact"
            className="px-12 py-5 bg-gradient-to-r from-gold to-yellow-500 text-white font-bold rounded-full border-2 border-gold shadow-xl shadow-gold/30 hover:from-yellow-400 hover:to-gold hover:text-white transition-all duration-300 text-2xl"
            style={{boxShadow: '0 4px 32px #D4AF37'}}
          >
            Book Now
          </Link>
          <Link
            to="/contact"
            className="px-12 py-5 bg-transparent text-white border-2 border-gold/50 font-bold rounded-full shadow-xl shadow-black/30 text-2xl hover:bg-gold/10 transition-all duration-300"
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>

      {/* Slideshow Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          {/* Play/Pause Button */}
          <motion.button
            onClick={togglePlayPause}
            className="w-12 h-12 bg-black/50 backdrop-blur-sm border border-gold/30 rounded-full flex items-center justify-center text-gold hover:bg-gold/20 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isPlaying ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </motion.button>

          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {heroSlides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-gold scale-125'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <motion.button
        onClick={() => goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length)}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm border border-gold/30 rounded-full items-center justify-center text-gold hover:bg-gold/20 transition-all duration-300 z-20 hidden lg:flex"
        whileHover={{ scale: 1.1, x: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
        </svg>
      </motion.button>

      <motion.button
        onClick={() => goToSlide((currentSlide + 1) % heroSlides.length)}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm border border-gold/30 rounded-full items-center justify-center text-gold hover:bg-gold/20 transition-all duration-300 z-20 hidden lg:flex"
        whileHover={{ scale: 1.1, x: 2 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
        </svg>
      </motion.button>
    </section>
  );
};

export default Hero;