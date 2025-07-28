import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import testimonialsData from '../../data/testimonials.json';

const InfiniteScrollTestimonials = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonialsData, ...testimonialsData];

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    let animationId;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset position when we've scrolled through half the content
      if (scrollPosition >= scrollElement.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollElement.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    // Start animation
    animationId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    scrollElement.addEventListener('mouseenter', handleMouseEnter);
    scrollElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      scrollElement.removeEventListener('mouseenter', handleMouseEnter);
      scrollElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const StarRating = ({ rating }) => {
    return (
      <div className="flex justify-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  const TestimonialCard = ({ testimonial, index }) => {
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

    return (
      <motion.div
        className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-200"
        whileHover={{ 
          scale: 1.02,
          y: -8,
          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Header with image and category */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={testimonial.image}
            alt={testimonial.event}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(testimonial.category)} opacity-75`} />
          <div className="absolute top-4 left-4">
            <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
              {testimonial.category}
            </span>
          </div>
          <div className="absolute bottom-4 left-4 text-white">
            <h4 className="font-bold text-lg">{testimonial.name}</h4>
            <p className="text-sm opacity-90">{testimonial.event}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Rating */}
          <div className="mb-4">
            <StarRating rating={testimonial.rating} />
          </div>

          {/* Quote */}
          <div className="mb-4">
            <div className="text-3xl text-gray-300 mb-2 font-serif leading-none">"</div>
            <p className="text-gray-700 text-sm leading-relaxed line-clamp-3 italic">
              {testimonial.text}
            </p>
            <div className="text-3xl text-gray-300 text-right font-serif leading-none">"</div>
          </div>

          {/* Date and Location */}
          <div className="flex justify-between items-center text-xs text-gray-500 border-t pt-3">
            <span>{new Date(testimonial.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
            <span>{testimonial.location}</span>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Header */}
      <motion.div
        className="text-center mb-12 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Clients Say</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover the experiences of our satisfied clients through their heartfelt testimonials
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mt-4 rounded-full" />
      </motion.div>

      {/* Statistics Bar */}
      <motion.div
        className="max-w-4xl mx-auto px-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-2xl shadow-lg p-6">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-1">
              {testimonialsData.length}+
            </div>
            <div className="text-sm text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-yellow-500 mb-1">
              {(testimonialsData.reduce((sum, t) => sum + t.rating, 0) / testimonialsData.length).toFixed(1)}★
            </div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1">
              {Math.round((testimonialsData.filter(t => t.rating === 5).length / testimonialsData.length) * 100)}%
            </div>
            <div className="text-sm text-gray-600">Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-pink-600 mb-1">
              {testimonialsData.filter(t => t.rating === 5).length}
            </div>
            <div className="text-sm text-gray-600">5-Star Reviews</div>
          </div>
        </div>
      </motion.div>

      {/* Infinite Scroll Container */}
      <motion.div
        className="py-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-hidden px-6"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitScrollbar: { display: 'none' }
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.id}-${Math.floor(index / testimonialsData.length)}`}
              testimonial={testimonial}
              index={index % testimonialsData.length}
            />
          ))}
        </div>
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        className="text-center mt-12 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <motion.button
          onClick={() => navigate('/testimonials')}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          View All Testimonials
        </motion.button>
      </motion.div>
    </section>
  );
};

export default InfiniteScrollTestimonials;
