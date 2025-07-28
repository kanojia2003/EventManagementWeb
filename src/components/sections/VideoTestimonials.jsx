import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from '../../framer';
import videoTestimonialsData from '../../data/videoTestimonials.json';

const VideoTestimonials = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(videoTestimonialsData.map(v => v.category))];
  
  const filteredVideos = activeCategory === 'All' 
    ? videoTestimonialsData 
    : videoTestimonialsData.filter(v => v.category === activeCategory);

  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-1">
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

  const VideoModal = ({ video, isOpen, onClose }) => {
    if (!isOpen || !video) return null;

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
            className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Video Player */}
            <div className="relative aspect-video">
              <iframe
                src={video.videoUrl}
                title={video.event}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Video Details */}
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-gradient-to-r from-gold to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {video.category}
                    </span>
                    <StarRating rating={video.rating} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{video.event}</h3>
                  <p className="text-lg text-gray-600 mb-3">by {video.name}</p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="text-gray-700 italic">"{video.quote}"</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                    <div>
                      <span className="font-semibold">Date:</span> {new Date(video.date).toLocaleDateString()}
                    </div>
                    <div>
                      <span className="font-semibold">Location:</span> {video.location}
                    </div>
                    <div>
                      <span className="font-semibold">Duration:</span> {video.duration}
                    </div>
                    <div>
                      <span className="font-semibold">Rating:</span> {video.rating}/5 ⭐
                    </div>
                  </div>
                </div>

                <div className="md:w-80">
                  <h4 className="font-semibold text-gray-800 mb-3">Event Highlights</h4>
                  <ul className="space-y-2">
                    {video.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-gold mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <motion.section
      className="py-16 bg-gradient-to-br from-gray-50 to-white"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div className="text-center mb-12" variants={fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            <span className="text-gray-800">Video </span>
            <span className="text-gold">Testimonials</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
            Hear directly from our clients about their experiences. Real stories, real emotions, real satisfaction.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-yellow-500 mx-auto rounded-full" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          variants={fadeInUp}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-gold to-yellow-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Video Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {filteredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              variants={scaleIn}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedVideo(video)}
            >
              {/* Video Thumbnail */}
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.event}
                  className="w-full h-48 object-cover"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    className="bg-white/90 rounded-full p-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-8 h-8 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-gradient-to-r from-gold to-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {video.category}
                  </span>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <StarRating rating={video.rating} />
                  <span className="text-sm text-gray-500">{new Date(video.date).toLocaleDateString()}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">{video.event}</h3>
                <p className="text-gray-600 mb-3">{video.name}</p>
                <p className="text-gray-700 text-sm italic mb-4 line-clamp-2">"{video.quote}"</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">📍 {video.location.split(',')[0]}</span>
                  <motion.button
                    className="text-gold hover:text-yellow-600 font-semibold text-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    Watch Video →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-gold/10 to-yellow-500/10 rounded-2xl p-8"
          variants={fadeInUp}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-gold mb-2">{videoTestimonialsData.length}+</div>
              <div className="text-gray-600">Video Stories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold mb-2">
                {(videoTestimonialsData.reduce((sum, v) => sum + v.rating, 0) / videoTestimonialsData.length).toFixed(1)}
              </div>
              <div className="text-gray-600">Avg Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold mb-2">98%</div>
              <div className="text-gray-600">Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <VideoModal
        video={selectedVideo}
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </motion.section>
  );
};

export default VideoTestimonials;
