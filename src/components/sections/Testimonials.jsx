import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, fadeIn, staggerContainer, scaleIn } from '../../framer';

const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <motion.svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-gold' : 'text-gray-300'}`}
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

const TestimonialCard = ({ name, role, quote, rating, index }) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-lg"
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
    >
      <motion.div 
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <StarRating rating={rating} />
      </motion.div>
      <motion.p 
        className="text-gray-700 mb-6 italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        "{quote}"
      </motion.p>
      <motion.div 
        className="flex items-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, type: "spring" }}
      >
        <motion.div 
          className="w-12 h-12 bg-gray-300 rounded-full mr-4 flex items-center justify-center"
          whileHover={{ scale: 1.1, backgroundColor: "#f3f4f6" }}
        >
          <motion.svg 
            className="w-6 h-6 text-gray-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
            whileHover={{ scale: 1.2, color: "#D4AF37" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </motion.svg>
        </motion.div>
        <motion.div>
          <motion.h4 
            className="font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {name}
          </motion.h4>
          {role && (
            <motion.p 
              className="text-gray-600 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {role}
            </motion.p>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Emily & John",
      quote: "SS Benchmark Events made our dream wedding come true. Their attention to detail and communication was top-notch.",
      rating: 5
    },
    {
      name: "Mark",
      role: "CEO at TechCorp",
      quote: "Our corporate retreat was a huge success thanks to the team at SS Benchmark Events. Highly recommended!",
      rating: 5
    },
    {
      name: "Sarah",
      quote: "The birthday party they organized for my daughter was fantastic. Every detail was perfect!",
      rating: 4
    },
  ];

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
      className="py-20 bg-gray-50"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-serif font-bold text-center mb-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          Testimonials
        </motion.h2>
        <motion.p 
          className="text-gray-700 text-center max-w-2xl mx-auto mb-12"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          What our clients say about our services
        </motion.p>

        {/* Desktop View - Grid */}
        <motion.div 
          className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              quote={testimonial.quote}
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
                  role={testimonials[currentIndex].role}
                  quote={testimonials[currentIndex].quote}
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
                className="p-2 bg-gray-200 rounded-full"
                aria-label="Previous testimonial"
                whileHover={{ scale: 1.1, backgroundColor: "#e5e7eb" }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.svg 
                  className="w-5 h-5" 
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

              <motion.div 
                className="flex space-x-2"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.3
                    }
                  }
                }}
                initial="hidden"
                animate="show"
              >
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-gold' : 'bg-gray-300'}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      show: { opacity: 1, scale: 1 }
                    }}
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.9 }}
                    animate={currentIndex === index ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                    transition={{ duration: 0.5 }}
                  ></motion.button>
                ))}
              </motion.div>

              <motion.button
                onClick={nextTestimonial}
                className="p-2 bg-gray-200 rounded-full"
                aria-label="Next testimonial"
                whileHover={{ scale: 1.1, backgroundColor: "#e5e7eb" }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.svg 
                  className="w-5 h-5" 
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

export default Testimonials;