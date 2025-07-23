import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn, staggerContainer, scaleIn } from '../../framer';

const GalleryItem = ({ category, className, index }) => {
  // Example image mapping by category
  const images = {
    weddings: '/src/assets/images/wedding1.avif',
    concerts: '/src/assets/images/concert1.avif',
    corporate: '/src/assets/images/corporate1.avif',
  };
  return (
    <motion.div 
      className={`overflow-hidden rounded-lg shadow-lg ${className}`}
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      transition={{ delay: index * 0.1 }}
    >
      <motion.div 
        className="relative group"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.img
          src={images[category] || images['weddings']}
          alt={`${category.charAt(0).toUpperCase() + category.slice(1)} event`}
          className="w-full aspect-square object-cover"
          loading="lazy"
          initial={{ filter: "grayscale(0.5)" }}
          whileHover={{ filter: "grayscale(0)" }}
          transition={{ duration: 0.3 }}
        />
        <motion.div 
          className="absolute inset-0 bg-black/50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button 
            className="px-4 py-2 bg-gold text-black font-bold rounded-full"
            initial={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: 10,
              delay: 0.1 
            }}
          >
            View Details
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'weddings', 'concerts', 'corporate'];

  return (
    <motion.section 
      id="gallery" 
      className="py-20 bg-white"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-serif font-bold text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          Gallery
        </motion.h2>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium ${activeCategory === category ? 'bg-black text-white' : 'bg-gray-200 text-gray-800'}`}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: activeCategory === category ? '#000000' : '#e5e7eb',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17, delay: index * 0.1 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <GalleryItem category="weddings" className={activeCategory !== 'all' && activeCategory !== 'weddings' ? 'hidden' : ''} index={0} />
          <GalleryItem category="concerts" className={activeCategory !== 'all' && activeCategory !== 'concerts' ? 'hidden' : ''} index={1} />
          <GalleryItem category="corporate" className={activeCategory !== 'all' && activeCategory !== 'corporate' ? 'hidden' : ''} index={2} />

          <GalleryItem category="weddings" className={activeCategory !== 'all' && activeCategory !== 'weddings' ? 'hidden' : ''} index={3} />
          <GalleryItem category="concerts" className={activeCategory !== 'all' && activeCategory !== 'concerts' ? 'hidden' : ''} index={4} />
          <GalleryItem category="corporate" className={activeCategory !== 'all' && activeCategory !== 'corporate' ? 'hidden' : ''} index={5} />
        </motion.div>

        {/* Video Section */}
        <motion.div 
          className="mt-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.h3 
            className="text-2xl font-bold text-center mb-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            Event Highlights
          </motion.h3>
          <motion.div 
            className="max-w-4xl mx-auto bg-gray-200 aspect-video rounded-lg flex items-center justify-center"
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.svg 
              className="w-16 h-16 text-gray-500" 
              fill="currentColor" 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg"
              whileHover={{ scale: 1.2, color: "#D4AF37" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
            </motion.svg>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Gallery;