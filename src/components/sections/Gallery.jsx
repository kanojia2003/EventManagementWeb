import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn, staggerContainer, scaleIn } from '../../framer';
import galleryData from '../../data/gallery.json';

const GalleryItem = ({ image, category, index }) => (
  <motion.div 
    className="overflow-hidden rounded-2xl shadow-2xl border border-gold/30 backdrop-blur-lg bg-white/80 transition-all duration-300 hover:shadow-gold/30 hover:border-gold/60"
    variants={fadeInUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    transition={{ delay: index * 0.1 }}
  >
    <motion.div 
      className="relative group"
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.img
        src={image}
        alt={`${category} event`}
        className="w-full aspect-square object-cover"
        loading="lazy"
        initial={{ filter: "grayscale(0.5)" }}
        whileHover={{ filter: "grayscale(0)" }}
        transition={{ duration: 0.3 }}
      />
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-black/60 via-gold/10 to-gold/30 flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.button 
          className="px-4 py-2 bg-gold text-black font-bold rounded-full shadow-lg"
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
      <span className="absolute top-3 left-3 bg-gold/80 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">{category}</span>
    </motion.div>
  </motion.div>
);

const Gallery = () => {
  // Get all categories from galleryData
  const categories = ['All', ...galleryData.map(item => item.category)];
  const [activeCategory, setActiveCategory] = useState('All');

  // Get images to display based on activeCategory
  const imagesToShow = activeCategory === 'All'
    ? galleryData.flatMap(item => item.images.map(img => ({ image: img, category: item.category })))
    : galleryData.filter(item => item.category === activeCategory)
        .flatMap(item => item.images.map(img => ({ image: img, category: item.category })));

  return (
    <motion.section 
      id="gallery" 
      className="py-20 bg-gradient-to-br from-white via-gold/10 to-gold/30 mt-10"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-black drop-shadow-lg"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <span className="inline-block align-middle mr-2">
            <svg className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c2.54 0 4.71 1.61 5.5 4.09C13.79 4.61 15.96 3 18.5 3 21.58 3 24 5.42 24 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          </span>
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
              className={`px-6 py-2 rounded-full font-medium shadow-md transition-all duration-300 ${activeCategory === category ? 'bg-gold text-black border border-gold/80' : 'bg-white/80 text-gray-800 border border-gray-200'}`}
              whileHover={{ 
                scale: 1.08, 
                backgroundColor: activeCategory === category ? '#D4AF37' : '#fffbe6',
                color: activeCategory === category ? '#000' : '#D4AF37',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17, delay: index * 0.1 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          {imagesToShow.map((imgObj, idx) => (
            <GalleryItem key={idx} image={imgObj.image} category={imgObj.category} index={idx} />
          ))}
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
            className="text-2xl font-bold text-center mb-8 text-gold"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            Event Highlights
          </motion.h3>
          <motion.div 
            className="max-w-4xl mx-auto bg-white/80 border border-gold/30 aspect-video rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-lg"
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.svg 
              className="w-16 h-16 text-gold" 
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