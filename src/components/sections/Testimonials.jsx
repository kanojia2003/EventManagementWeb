import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from '../../framer';
import testimonialsData from '../../data/testimonials.json';

const StarRating = ({ rating, size = 'w-5 h-5' }) => {
  return (
    <div className="flex justify-center">
      {[...Array(5)].map((_, i) => (
        <motion.svg
          key={i}
          className={`${size} ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.3, 
            delay: i * 0.1,
            type: "spring",
            stiffness: 200
          }}
          whileHover={{ scale: 1.2, rotate: i < rating ? 15 : 0 }}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </motion.svg>
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial, index, isActive = false }) => {
  const getCategoryColor = (category) => {
    switch (category) {
      case 'Wedding': return 'from-pink-500 to-rose-500';
      case 'Corporate': return 'from-blue-500 to-indigo-500';
      case 'Themed Party': return 'from-green-500 to-teal-500';
      case 'Anniversary': return 'from-purple-500 to-pink-500';
      case 'Engagement': return 'from-red-500 to-pink-500';
      case 'Celebration': return 'from-yellow-500 to-orange-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    });
  };

  return (
    <motion.div 
      layout
      className={`relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 ${
        isActive ? 'scale-105 z-10' : 'scale-100'
      }`}
      variants={scaleIn}
      whileHover={{ y: -8, scale: isActive ? 1.08 : 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={testimonial.image}
          alt={testimonial.event}
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(testimonial.category)} opacity-85`} />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 text-white h-full min-h-[400px] flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <motion.div
            className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${getCategoryColor(testimonial.category)} bg-white/20 backdrop-blur-sm`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            {testimonial.category}
          </motion.div>
          <div className="text-right text-sm">
            <div className="text-white/80">{formatDate(testimonial.date)}</div>
            <div className="text-white/60">{testimonial.location}</div>
          </div>
        </div>

        {/* Rating */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <StarRating rating={testimonial.rating} size="w-6 h-6" />
        </motion.div>

        {/* Quote */}
        <motion.div
          className="flex-1 flex flex-col justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-4xl text-white/30 mb-2 font-serif">"</div>
          <p className="text-white/95 text-lg leading-relaxed italic mb-4 line-clamp-4">
            {testimonial.text}
          </p>
          <div className="text-4xl text-white/30 text-right font-serif">"</div>
        </motion.div>

        {/* Client Info */}
        <motion.div
          className="mt-auto pt-4 border-t border-white/20"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h4 className="font-bold text-xl text-white mb-1">{testimonial.name}</h4>
          <p className="text-white/80 text-sm">{testimonial.event}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const TestimonialStats = () => {
  const totalReviews = testimonialsData.length;
  const averageRating = (
    testimonialsData.reduce((sum, testimonial) => sum + testimonial.rating, 0) / totalReviews
  ).toFixed(1);
  const fiveStarReviews = testimonialsData.filter(t => t.rating === 5).length;
  const satisfactionRate = Math.round((fiveStarReviews / totalReviews) * 100);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
    >
      <motion.div variants={fadeInUp} className="text-center">
        <div className="text-3xl font-bold text-gold mb-2">{averageRating}</div>
        <StarRating rating={Math.round(averageRating)} />
        <div className="text-sm text-gray-600 mt-1">Average Rating</div>
      </motion.div>
      
      <motion.div variants={fadeInUp} className="text-center">
        <div className="text-3xl font-bold text-gold mb-2">{totalReviews}+</div>
        <div className="text-sm text-gray-600">Happy Clients</div>
      </motion.div>
      
      <motion.div variants={fadeInUp} className="text-center">
        <div className="text-3xl font-bold text-gold mb-2">{satisfactionRate}%</div>
        <div className="text-sm text-gray-600">Satisfaction Rate</div>
      </motion.div>
      
      <motion.div variants={fadeInUp} className="text-center">
        <div className="text-3xl font-bold text-gold mb-2">{fiveStarReviews}</div>
        <div className="text-sm text-gray-600">5-Star Reviews</div>
      </motion.div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(testimonialsData.map(t => t.category))];
  
  const filteredTestimonials = selectedCategory === 'All' 
    ? testimonialsData 
    : testimonialsData.filter(t => t.category === selectedCategory);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPlaying, filteredTestimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5" />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-20 w-48 h-48 border border-gold/20 rounded-full hidden lg:block"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Stats */}
        <TestimonialStats />

        {/* Category Filter */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              variants={fadeInUp}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentIndex(0);
              }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-gold to-yellow-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gold/10 border border-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Desktop View - Featured Testimonial + Sidebar */}
        <div className="hidden lg:block">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Main Featured Testimonial */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`main-${currentIndex}`}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="h-[500px]"
                >
                  {filteredTestimonials[currentIndex] && (
                    <TestimonialCard 
                      testimonial={filteredTestimonials[currentIndex]} 
                      index={0}
                      isActive={true}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Sidebar with navigation and other testimonials */}
            <div className="space-y-4">
              {/* Controls */}
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-12 h-12 bg-gold hover:bg-yellow-500 rounded-full flex items-center justify-center text-white transition-colors"
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
                </button>

                <div className="flex space-x-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 bg-gray-200 hover:bg-gold hover:text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                    </svg>
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 bg-gray-200 hover:bg-gold hover:text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Thumbnail testimonials */}
              <div className="space-y-3 max-h-[400px] overflow-y-auto">
                {filteredTestimonials.map((testimonial, index) => (
                  index !== currentIndex && (
                    <motion.div
                      key={testimonial.id}
                      onClick={() => goToSlide(index)}
                      className="p-4 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow border-l-4 border-gold/30 hover:border-gold"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                          <p className="text-xs text-gray-600">{testimonial.event}</p>
                        </div>
                        <StarRating rating={testimonial.rating} size="w-3 h-3" />
                      </div>
                      <p className="text-xs text-gray-700 line-clamp-2">{testimonial.text}</p>
                    </motion.div>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet View - Carousel */}
        <div className="lg:hidden">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={`mobile-${currentIndex}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="h-[450px]"
              >
                {filteredTestimonials[currentIndex] && (
                  <TestimonialCard 
                    testimonial={filteredTestimonials[currentIndex]} 
                    index={0}
                    isActive={true}
                  />
                )}
              </motion.div>
            </AnimatePresence>

            {/* Mobile Controls */}
            <div className="flex items-center justify-center mt-6 space-x-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                </svg>
              </button>

              <div className="flex space-x-2">
                {filteredTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentIndex === index ? 'bg-gold' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
