import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import enhancedGalleryData from "../data/enhancedGallery.json";
import { fadeInUp, staggerContainer, scaleIn } from "../framer";
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const GalleryCategoryRoute = () => {
  const { category } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'masonry'
  const [sortBy, setSortBy] = useState('date'); // 'date', 'guests', 'title'

  const categoryData = enhancedGalleryData.find(
    (item) =>
      item.category.toLowerCase().replace(/\s+/g, "") ===
      category.toLowerCase().replace(/\s+/g, "")
  );

  if (!categoryData) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
          <div className="text-center">
            <div className="text-6xl mb-4">🖼️</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Category Not Found</h2>
            <p className="text-gray-600 mb-8">The gallery category you're looking for doesn't exist.</p>
            <Link
              to="/gallery"
              className="bg-gradient-to-r from-gold to-yellow-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Back to Gallery
            </Link>
          </div>
        </div>
        <Footer />
      </motion.div>
    );
  }

  // Sort images
  const sortedImages = [...categoryData.images].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(b.date) - new Date(a.date);
      case 'guests':
        return b.guests - a.guests;
      case 'title':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const ImageModal = ({ image, isOpen, onClose }) => {
    if (!isOpen || !image) return null;

    return (
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-2xl overflow-hidden max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-96 object-cover"
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-4 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                <p className="text-gray-200">{image.description}</p>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">Event Details</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Venue:</span>
                      <span className="font-semibold">{image.venue}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date:</span>
                      <span className="font-semibold">{new Date(image.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Guests:</span>
                      <span className="font-semibold">{image.guests}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Type:</span>
                      <span className="font-semibold capitalize">{image.type}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {image.tags.map((tag) => (
                      <span key={tag} className="bg-gold/20 text-gold px-3 py-1 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
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
        className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={categoryData.images[0]?.src}
            alt={categoryData.category}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white"
              variants={fadeInUp}
            >
              {categoryData.category}
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8"
              variants={fadeInUp}
            >
              {categoryData.description}
            </motion.p>

            <motion.div
              className="flex justify-center items-center space-x-8 text-gray-300"
              variants={fadeInUp}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gold">{categoryData.images.length}</div>
                <div className="text-sm">Photos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold">
                  {categoryData.stats?.totalEvents || Math.floor(categoryData.images.length / 3)}
                </div>
                <div className="text-sm">Events</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold">
                  {categoryData.stats?.averageGuests || '200+'}
                </div>
                <div className="text-sm">Avg Guests</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Navigation & Controls */}
      <section className="py-8 bg-white shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4">
          {/* Category Navigation */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-6"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {enhancedGalleryData.map((cat) => (
              <motion.div
                key={cat.category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={`/gallery/${cat.category.toLowerCase().replace(/\s+/g, "")}`}
                  className={`px-4 py-2 rounded-full font-medium transition-all text-sm ${
                    cat.category === categoryData.category
                      ? "bg-gradient-to-r from-gold to-yellow-500 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat.category}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Controls */}
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold"
              >
                <option value="date">Sort by Date</option>
                <option value="guests">Sort by Guests</option>
                <option value="title">Sort by Title</option>
              </select>
              
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-gold text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('masonry')}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    viewMode === 'masonry'
                      ? 'bg-gold text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Masonry
                </button>
              </div>
            </div>

            <div className="text-sm text-gray-600">
              {sortedImages.length} {sortedImages.length === 1 ? 'image' : 'images'}
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <motion.section
        className="py-16 bg-gradient-to-br from-gray-50 to-white"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className={
              viewMode === 'masonry'
                ? 'columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6'
                : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
            }
            variants={staggerContainer}
          >
            {sortedImages.map((image, index) => (
              <motion.div
                key={`${image.src}-${index}`}
                className={`group cursor-pointer ${viewMode === 'masonry' ? 'break-inside-avoid mb-6' : ''}`}
                variants={scaleIn}
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() => setSelectedImage(image)}
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-bold text-lg mb-1 line-clamp-2">{image.title}</h3>
                        <p className="text-gray-200 text-sm line-clamp-2">{image.description}</p>
                      </div>
                    </div>

                    {/* Type Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="bg-gradient-to-r from-gold to-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold capitalize">
                        {image.type}
                      </span>
                    </div>

                    {/* View Details Button */}
                    <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold hover:bg-white transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <h3 className="font-bold text-gray-800 text-lg mb-2 line-clamp-1">{image.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{image.description}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">📍 {image.venue}</span>
                        <span className="text-gray-500">👥 {image.guests}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">📅 {new Date(image.date).toLocaleDateString()}</span>
                        <span className="text-gold font-semibold">View More →</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="mt-3 flex flex-wrap gap-1">
                      {image.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                      {image.tags.length > 3 && (
                        <span className="text-gray-400 text-xs px-2 py-1">
                          +{image.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Image Modal */}
      <ImageModal
        image={selectedImage}
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />

      <Footer />
    </motion.div>
  );
};

export default GalleryCategoryRoute;
