import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from '../../framer';
import { Link } from 'react-router-dom';
import featuredEvents from '../../data/featuredEvents.json';

const FeaturedEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollRef = useRef(null);

  const categories = ['All', 'Wedding', 'Corporate', 'Themed Party', 'Venue Booking', 'Tour & Travel', 'Honeymoon'];

  const filteredEvents = activeCategory === 'All' 
    ? featuredEvents 
    : featuredEvents.filter(event => event.category === activeCategory);

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Wedding': return 'from-pink-500 to-rose-500';
      case 'Corporate': return 'from-blue-500 to-indigo-500';
      case 'Themed Party': return 'from-green-500 to-teal-500';
      case 'Venue Booking': return 'from-orange-500 to-red-500';
      case 'Tour & Travel': return 'from-yellow-500 to-orange-500';
      case 'Honeymoon': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const EventCard = ({ event, index }) => (
    <motion.div
      layout
      variants={scaleIn}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative overflow-hidden rounded-2xl shadow-xl cursor-pointer group"
      onClick={() => setSelectedEvent(event)}
    >
      {/* Event Image */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          whileHover={{ scale: 1.1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Category Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${getCategoryColor(event.category)}`}
        >
          {event.category}
        </motion.div>

        {/* Hover Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/40 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Event Info */}
      <div className="p-6 bg-white">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500">{formatDate(event.date)}</span>
          <span className="text-sm text-gold font-medium">{event.location}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-gold transition-colors">
          {event.title}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
          {event.description}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-1 mb-4">
          {event.highlights.slice(0, 2).map((highlight, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-gold/10 text-gold text-xs rounded-full"
            >
              {highlight}
            </span>
          ))}
          {event.highlights.length > 2 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              +{event.highlights.length - 2} more
            </span>
          )}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-2 bg-gradient-to-r from-gold to-yellow-500 text-white font-semibold rounded-lg hover:from-yellow-500 hover:to-gold transition-all duration-300"
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );

  const EventModal = ({ event }) => {
    if (!event) return null;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={() => setSelectedEvent(null)}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative">
            <img
              src={event.gallery[currentImageIndex]}
              alt={event.title}
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-t-2xl" />
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>

            {/* Event Title Overlay */}
            <div className="absolute bottom-4 left-6 text-white">
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-2 bg-gradient-to-r ${getCategoryColor(event.category)}`}>
                {event.category}
              </div>
              <h2 className="text-2xl font-bold">{event.title}</h2>
              <p className="text-white/90">{formatDate(event.date)} • {event.location}</p>
            </div>

            {/* Gallery Navigation */}
            {event.gallery.length > 1 && (
              <div className="absolute bottom-4 right-6 flex space-x-2">
                {event.gallery.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentImageIndex === idx ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Event Details</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {event.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    {formatDate(event.date)}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    {event.location}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Event Highlights</h3>
                <div className="space-y-2">
                  {event.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <Link
                    to={`/gallery/${event.category.toLowerCase().replace(' ', '')}`}
                    className="flex-1 py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-lg text-center transition-colors"
                  >
                    View Gallery
                  </Link>
                  <Link
                    to="/contact"
                    className="flex-1 py-2 px-4 bg-gradient-to-r from-gold to-yellow-500 text-white font-semibold rounded-lg text-center hover:from-yellow-500 hover:to-gold transition-all"
                  >
                    Book Similar
                  </Link>
                </div>
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {event.gallery.length > 1 && (
              <div className="mt-6">
                <h4 className="font-semibold mb-3">Photo Gallery</h4>
                <div className="grid grid-cols-4 gap-2">
                  {event.gallery.map((image, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`relative h-16 rounded-lg overflow-hidden ${
                        currentImageIndex === idx ? 'ring-2 ring-gold' : ''
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${event.title} ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    );
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
          duration: 8,
          ease: "easeInOut"
        }}
        className="absolute top-40 left-20 w-32 h-32 border border-gold/20 rounded-full hidden lg:block"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
          >
            Featured <span className="text-gold">Events</span>
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-gray-600 text-lg max-w-3xl mx-auto mb-8"
          >
            Explore our recent successful events and get inspired for your next celebration. 
            Each event tells a unique story of excellence and attention to detail.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 bg-gradient-to-r from-gold to-yellow-500 mx-auto rounded-full"
          />
        </motion.div>

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
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
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

        {/* Events Grid */}
        <motion.div
          layout
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          <AnimatePresence>
            {filteredEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            to="/gallery"
            className="inline-block px-8 py-4 bg-gradient-to-r from-gold to-yellow-500 text-white font-bold rounded-full hover:from-yellow-500 hover:to-gold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View All Events
          </Link>
        </motion.div>
      </div>

      {/* Event Modal */}
      <AnimatePresence>
        {selectedEvent && <EventModal event={selectedEvent} />}
      </AnimatePresence>
    </section>
  );
};

export default FeaturedEvents;
