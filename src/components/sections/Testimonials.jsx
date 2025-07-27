import React, { useState } from 'react';
import PropTypes from 'prop-types';
import testimonialsData from '../../data/testimonials.json';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, fadeIn, staggerContainer, scaleIn } from '../../framer';

const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <motion.svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.3, 
            delay: i * 0.1,
            type: "spring",
            stiffness: 200
          }}
          whileHover={{ scale: 1.2, rotate: i < rating ? 5 : 0 }}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </motion.svg>
      ))}
    </div>
  );
};

const TestimonialCard = ({ name, text, rating, index }) => {
  return (
    <motion.div 
      className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-gold/30 flex flex-col justify-between transition-all duration-300 hover:shadow-gold/30 hover:border-gold/60"
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8, boxShadow: '0 16px 32px -8px rgba(212,175,55,0.10), 0 8px 16px -8px rgba(0,0,0,0.04)' }}
    >
      <motion.div 
        className="mb-4 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <StarRating rating={rating} />
      </motion.div>
      <motion.p 
        className="text-gray-800 mb-6 italic text-center text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        "{text}"
      </motion.p>
      <motion.div 
        className="flex items-center justify-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, type: "spring" }}
      >
        <motion.div className="flex items-center gap-2">
          <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
          <motion.h4 
            className="font-bold text-lg text-gold text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {name}
          </motion.h4>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Testimonials = () => {
  // Use imported testimonials data
  const testimonials = testimonialsData;

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <motion.section 
      id="testimonials" 
      className="py-20 bg-gradient-to-br from-white via-gold/10 to-gold/30 mt-10"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-serif font-bold text-center mb-6 text-black drop-shadow-lg"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <span className="inline-block align-middle mr-2">
            <svg className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
          </span>
          Testimonials
        </motion.h2>
        <motion.p 
          className="text-gray-700 text-center max-w-2xl mx-auto mb-12 text-lg"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          What our clients say about our services
        </motion.p>

        {/* Desktop View - Grid */}
        <motion.div 
          className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              text={testimonial.text}
              rating={testimonial.rating}
              index={index}
            />
          ))}
        </motion.div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden max-w-md mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <TestimonialCard
                  name={testimonials[currentIndex].name}
                  text={testimonials[currentIndex].text}
                  rating={testimonials[currentIndex].rating}
                  index={0}
                />
              </motion.div>
            </AnimatePresence>

            <motion.div 
              className="flex justify-between mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                onClick={prevTestimonial}
                className="p-2 bg-gold/20 rounded-full shadow-md"
                aria-label="Previous testimonial"
                whileHover={{ scale: 1.1, backgroundColor: "#D4AF37" }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.svg 
                  className="w-5 h-5 text-gold" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                  whileHover={{ x: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </motion.svg>
              </motion.button>
              
              {/* Dots navigation */}
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-gold' : 'bg-gray-300'} shadow-md`}
                    aria-label={`Go to testimonial ${index + 1}`}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      show: { opacity: 1, scale: 1 }
                    }}
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.9 }}
                    animate={currentIndex === index ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextTestimonial}
                className="p-2 bg-gold/20 rounded-full shadow-md"
                aria-label="Next testimonial"
                whileHover={{ scale: 1.1, backgroundColor: "#D4AF37" }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.svg 
                  className="w-5 h-5 text-gold" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </motion.svg>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

// PropTypes for TestimonialCard
TestimonialCard.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default Testimonials;