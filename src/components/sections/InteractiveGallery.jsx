import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from '../../framer';

const InteractiveGalleryViewer = ({ images, isOpen, onClose, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isLoading, setIsLoading] = useState(true);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          previousImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        case 'Escape':
          onClose();
          break;
        case 'i':
        case 'I':
          setShowInfo(!showInfo);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, showInfo, currentIndex]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsLoading(true);
  };

  const previousImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsLoading(true);
  };

  const currentImage = images[currentIndex];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button */}
        <motion.button
          onClick={onClose}
          className="absolute top-6 right-6 text-white text-2xl hover:text-gold transition-colors z-10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ✕
        </motion.button>

        {/* Image Counter */}
        <div className="absolute top-6 left-6 text-white text-lg z-10">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Keyboard Shortcuts Info */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-white text-sm text-center z-10">
          <div className="bg-black/50 rounded-lg px-4 py-2 backdrop-blur-sm">
            <span className="opacity-75">← → Navigate | ESC Close | I Info</span>
          </div>
        </div>

        {/* Main Image */}
        <div className="relative w-full h-full flex items-center justify-center px-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-5xl max-h-[80vh] w-full"
            >
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gold"></div>
                </div>
              )}
              <img
                src={currentImage.src}
                alt={currentImage.title}
                className="w-full h-full object-contain rounded-lg shadow-2xl"
                onLoad={() => setIsLoading(false)}
                onError={() => setIsLoading(false)}
              />
              
              {/* Image Overlay Info */}
              <AnimatePresence>
                {showInfo && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-lg"
                  >
                    <h3 className="text-white text-2xl font-bold mb-2">{currentImage.title}</h3>
                    <p className="text-white/90 mb-3">{currentImage.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {currentImage.tags?.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gold/20 text-gold px-3 py-1 rounded-full text-sm"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    {currentImage.venue && (
                      <div className="text-white/80 text-sm">
                        📍 {currentImage.venue} | 👥 {currentImage.guests} guests
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <motion.button
            onClick={previousImage}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gold transition-colors bg-black/30 rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ‹
          </motion.button>

          <motion.button
            onClick={nextImage}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gold transition-colors bg-black/30 rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ›
          </motion.button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 max-w-4xl overflow-x-auto py-2 px-4">
          {images.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsLoading(true);
              }}
              className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                currentIndex === index ? 'border-gold' : 'border-white/30'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover"
              />
            </motion.button>
          ))}
        </div>

        {/* Info Toggle Button */}
        <motion.button
          onClick={() => setShowInfo(!showInfo)}
          className="absolute bottom-6 right-6 bg-black/50 text-white px-4 py-2 rounded-lg backdrop-blur-sm hover:bg-gold/20 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showInfo ? 'Hide Info' : 'Show Info'}
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
};

const BeforeAfterSlider = ({ beforeImage, afterImage, title }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const position = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  return (
    <motion.div
      className="relative overflow-hidden rounded-xl shadow-2xl cursor-pointer"
      variants={scaleIn}
      whileHover={{ scale: 1.02 }}
    >
      <div
        className="relative w-full h-80 select-none"
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* After Image (Background) */}
        <img
          src={afterImage}
          alt={`${title} - After`}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
        
        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0% 100%)` }}
        >
          <img
            src={beforeImage}
            alt={`${title} - Before`}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-gold rounded-full"></div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
          Before
        </div>
        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
          After
        </div>
      </div>
      
      <div className="p-4 bg-white">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">Drag to see the transformation</p>
      </div>
    </motion.div>
  );
};

const GalleryFilterBar = ({ categories, activeCategory, onCategoryChange, searchTerm, onSearchChange, viewMode, onViewModeChange }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-6 mb-8 sticky top-4 z-20"
      variants={fadeInUp}
      initial="hidden"
      animate="show"
    >
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search images..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
          />
          <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-gold to-yellow-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* View Mode Toggle */}
        <div className="flex bg-gray-100 rounded-lg p-1">
          <motion.button
            onClick={() => onViewModeChange('grid')}
            className={`px-3 py-2 rounded-md transition-all ${
              viewMode === 'grid' ? 'bg-white shadow-sm' : ''
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
            </svg>
          </motion.button>
          <motion.button
            onClick={() => onViewModeChange('masonry')}
            className={`px-3 py-2 rounded-md transition-all ${
              viewMode === 'masonry' ? 'bg-white shadow-sm' : ''
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 3h8v6H3V3zm10 0h8v8h-8V3zM3 11h8v10H3V11zm10 10h8v-8h-8v8z" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export { InteractiveGalleryViewer, BeforeAfterSlider, GalleryFilterBar };
