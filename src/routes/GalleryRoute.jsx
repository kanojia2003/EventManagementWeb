import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import enhancedGalleryData from "../data/enhancedGallery.json";
import { Link } from "react-router-dom";
import { fadeInUp, staggerContainer, scaleIn } from "../framer";
import { InteractiveGalleryViewer, GalleryFilterBar } from "../components/sections/InteractiveGallery";

const GalleryRoute = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [galleryViewer, setGalleryViewer] = useState({ isOpen: false, images: [], initialIndex: 0 });

  // Get all categories
  const categories = ['All', ...enhancedGalleryData.map(cat => cat.category)];

  // Filter data based on selected category and search
  const filteredData = enhancedGalleryData.filter(cat => {
    if (selectedCategory !== 'All' && cat.category !== selectedCategory) return false;
    if (searchTerm) {
      return cat.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
             cat.description.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return true;
  });

  const openGalleryViewer = (categoryImages, index = 0) => {
    setGalleryViewer({
      isOpen: true,
      images: categoryImages,
      initialIndex: index
    });
  };

  const closeGalleryViewer = () => {
    setGalleryViewer({ isOpen: false, images: [], initialIndex: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Navbar />
      
      {/* Hero Section */}
      <motion.section
        className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-transparent to-gold/10" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut"
            }}
            className="absolute top-20 right-20 w-64 h-64 border border-gold/20 rounded-full"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              repeat: Infinity,
              duration: 12,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 left-20 w-48 h-48 border border-gold/20 rounded-full"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-serif font-bold mb-6"
              variants={fadeInUp}
            >
              <span className="text-white">Our </span>
              <span className="bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent">
                Gallery
              </span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
              variants={fadeInUp}
            >
              Explore our portfolio of extraordinary events and celebrations. 
              Each image tells a story of perfection and unforgettable moments.
            </motion.p>
            <motion.div
              className="flex flex-col md:flex-row gap-4 justify-center items-center"
              variants={fadeInUp}
            >
              <div className="flex items-center space-x-6 text-gray-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold">500+</div>
                  <div className="text-sm">Events Captured</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold">10K+</div>
                  <div className="text-sm">Happy Memories</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold">98%</div>
                  <div className="text-sm">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Filter Bar */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <GalleryFilterBar
            categories={categories}
            activeCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
          />
        </div>
      </section>

      {/* Main Gallery Grid */}
      <motion.section
        className="py-16 bg-gray-50"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'columns-1 md:columns-2 lg:columns-3'
            }`}
            variants={staggerContainer}
          >
            {filteredData.map((cat, idx) => (
              <motion.div
                key={cat.category}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                  viewMode === 'masonry' ? 'break-inside-avoid mb-8' : ''
                }`}
                variants={scaleIn}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
              >
                {/* Category Preview Images */}
                <div className="relative h-64 overflow-hidden">
                  <div className="grid grid-cols-2 h-full gap-1">
                    {cat.images.slice(0, 4).map((image, imageIndex) => (
                      <motion.div
                        key={imageIndex}
                        className={`relative overflow-hidden cursor-pointer ${
                          imageIndex === 0 ? 'col-span-2' : ''
                        }`}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => openGalleryViewer(cat.images, imageIndex)}
                      >
                        <img
                          src={image.src}
                          alt={image.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300" />
                        {imageIndex === 3 && cat.images.length > 4 && (
                          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                            <span className="text-white text-lg font-bold">
                              +{cat.images.length - 4} more
                            </span>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-gold to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {cat.category}
                    </span>
                  </div>

                  {/* Quick Stats */}
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-white text-sm">{cat.images.length} photos</span>
                  </div>
                </div>

                {/* Category Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{cat.category}</h3>
                  <p className="text-gray-600 mb-4">{cat.description}</p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gold">{cat.stats.totalEvents}</div>
                      <div className="text-xs text-gray-500">Events</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gold">{cat.stats.averageGuests}</div>
                      <div className="text-xs text-gray-500">Avg Guests</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gold">{cat.stats.satisfactionRate}%</div>
                      <div className="text-xs text-gray-500">Satisfaction</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      onClick={() => openGalleryViewer(cat.images, 0)}
                      className="flex-1 bg-gradient-to-r from-gold to-yellow-500 text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Gallery
                    </motion.button>
                    <Link
                      to={`/gallery/${cat.category.toLowerCase().replace(/\s+/g, "")}`}
                      className="px-6 py-2 border-2 border-gold text-gold rounded-lg font-medium hover:bg-gold hover:text-white transition-colors duration-300 text-center"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results Message */}
          {filteredData.length === 0 && (
            <motion.div
              className="text-center py-16"
              variants={fadeInUp}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No Results Found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Interactive Gallery Viewer */}
      <InteractiveGalleryViewer
        images={galleryViewer.images}
        isOpen={galleryViewer.isOpen}
        onClose={closeGalleryViewer}
        initialIndex={galleryViewer.initialIndex}
      />

      <Footer />
    </motion.div>
  );
};

export default GalleryRoute;
