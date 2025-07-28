import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, scaleIn, staggerContainer } from '../../framer';
import { Link } from 'react-router-dom';
import enhancedServices from '../../data/enhancedServices.json';

const ServiceCard = ({ service, index, isExpanded, onToggle, onQuoteClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'wedding':
        return (
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
        );
      case 'corporate':
        return (
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 3a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"/>
        );
      case 'party':
        return (
          <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"/>
        );
      case 'venue':
        return (
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
        );
      case 'travel':
        return (
          <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z M16 8H4a1 1 0 00-1 1v5.5a.5.5 0 001 0V14h12v.5a.5.5 0 001 0V9a1 1 0 00-1-1z"/>
        );
      case 'honeymoon':
        return (
          <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z M13 10.5L10 13l-3-2.5"/>
        );
      default:
        return (
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
        );
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Premium': return 'from-purple-500 to-pink-500';
      case 'Business': return 'from-blue-500 to-indigo-500';
      case 'Creative': return 'from-green-500 to-teal-500';
      case 'Logistics': return 'from-orange-500 to-red-500';
      case 'Adventure': return 'from-yellow-500 to-orange-500';
      case 'Romance': return 'from-pink-500 to-rose-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <motion.div 
      layout
      variants={fadeInUp}
      custom={index}
      className={`relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 ${
        isExpanded ? 'md:col-span-2 lg:col-span-3' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <motion.div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${service.image})` }}
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(service.category)} opacity-90`} />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 text-white h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <motion.div 
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                {getIcon(service.icon)}
              </svg>
            </motion.div>
            <div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <motion.div
                className={`inline-block px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} opacity-80`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.8, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {service.category}
              </motion.div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm opacity-75">Starting from</div>
            <div className="text-lg font-bold text-yellow-300">{service.basePrice}</div>
          </div>
        </div>

        <p className="text-white/90 mb-4 leading-relaxed">
          {service.shortDescription}
        </p>

        {/* Expandable Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6"
            >
              <p className="text-white/80 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 text-yellow-300">Features Include:</h4>
                  <ul className="space-y-1 text-sm text-white/80">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <span className="w-1 h-1 bg-yellow-300 rounded-full"></span>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Buttons */}
        <div className="mt-auto flex flex-wrap gap-3">
          <motion.button
            onClick={() => onToggle(service.id)}
            className="flex-1 min-w-[120px] px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isExpanded ? 'Show Less' : 'Learn More'}
          </motion.button>
          
          <motion.button
            onClick={() => onQuoteClick(service)}
            className="flex-1 min-w-[120px] px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black rounded-full text-sm font-bold transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 193, 7, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            Get Quote
          </motion.button>
          
          <Link
            to={`/gallery/${service.gallery[0]}`}
            className="px-4 py-2 bg-transparent border border-white/50 rounded-full text-sm font-medium hover:bg-white/10 transition-all duration-300 text-center"
          >
            Gallery
          </Link>
        </div>
      </div>

      {/* Hover Effects */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-4 right-4 z-20"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 border-2 border-white/50 border-t-white rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const QuoteModal = ({ service, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
    budget: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Use the same Formspree endpoint as the contact form
      const response = await fetch('https://formspree.io/f/xnnzvqqo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          eventDate: formData.date,
          guestCount: formData.guests,
          budget: formData.budget,
          message: formData.message,
          serviceRequested: service?.title,
          basePrice: service?.basePrice,
          formType: 'Quote Request',
          subject: `Quote Request for ${service?.title} from ${formData.name}`,
          _replyto: formData.email
        })
      });

      if (response.ok) {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset form and close modal after 3 seconds
        setTimeout(() => {
          setFormData({ name: '', email: '', phone: '', date: '', guests: '', budget: '', message: '' });
          setSubmitSuccess(false);
          onClose();
        }, 3000);
      } else {
        throw new Error('Failed to submit quote request');
      }
    } catch (error) {
      setIsSubmitting(false);
      setSubmitError('Failed to send quote request. Please try again or contact us directly.');
      console.error('Quote submission error:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear any previous errors when user starts typing
    if (submitError) {
      setSubmitError('');
    }
  };

  // Reset form state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setFormData({ name: '', email: '', phone: '', date: '', guests: '', budget: '', message: '' });
      setSubmitSuccess(false);
      setSubmitError('');
      setIsSubmitting(false);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && service && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Get Quote</h3>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            <div className="mb-4 p-4 bg-gold/10 rounded-lg">
              <h4 className="font-semibold text-gold">{service.title}</h4>
              <p className="text-sm text-gray-600">{service.shortDescription}</p>
              <p className="text-lg font-bold text-gold mt-2">Starting from {service.basePrice}</p>
            </div>

            {/* Success Message */}
            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg"
              >
                <div className="flex items-center text-green-800">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-semibold">Quote Request Sent!</span>
                </div>
                <p className="text-green-700 text-sm mt-1">
                  We'll send you a detailed quote within 2 hours. Check your email for confirmation.
                </p>
              </motion.div>
            )}

            {/* Error Message */}
            {submitError && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg"
              >
                <div className="flex items-center text-red-800">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-red-700 text-sm">{submitError}</span>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Hidden fields for better email formatting */}
              <input type="hidden" name="_subject" value={`Quote Request for ${service?.title} from ${formData.name}`} />
              <input type="hidden" name="_replyto" value={formData.email} />
              <input type="hidden" name="serviceRequested" value={service?.title} />
              <input type="hidden" name="basePrice" value={service?.basePrice} />
              
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                  required
                />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                  required
                >
                  <option value="">Guest Count</option>
                  <option value="1-50">1-50 guests</option>
                  <option value="51-100">51-100 guests</option>
                  <option value="101-200">101-200 guests</option>
                  <option value="200+">200+ guests</option>
                </select>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                  required
                >
                  <option value="">Budget Range</option>
                  <option value="10-25k">₹10,000 - ₹25,000</option>
                  <option value="25-50k">₹25,000 - ₹50,000</option>
                  <option value="50-100k">₹50,000 - ₹1,00,000</option>
                  <option value="100k+">₹1,00,000+</option>
                </select>
              </div>

              <textarea
                name="message"
                placeholder="Additional requirements or special requests..."
                value={formData.message}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
              />

              <motion.button
                type="submit"
                disabled={isSubmitting || submitSuccess}
                className={`w-full py-3 font-bold rounded-lg transition-all duration-300 ${
                  isSubmitting || submitSuccess
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-gold to-yellow-500 text-white hover:from-yellow-500 hover:to-gold'
                }`}
                whileHover={!isSubmitting && !submitSuccess ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting && !submitSuccess ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Quote Request...
                  </span>
                ) : submitSuccess ? (
                  <span className="flex items-center justify-center text-green-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Quote Request Sent!
                  </span>
                ) : (
                  'Submit Quote Request'
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Services = ({ showHeader = false, headerTitle = "Our Premium Services", headerDescription = "We offer comprehensive event management services tailored to your specific needs and vision. From intimate gatherings to grand celebrations, we bring your dreams to life." }) => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [quoteModal, setQuoteModal] = useState({ isOpen: false, service: null });

  const handleToggleCard = (serviceId) => {
    setExpandedCard(expandedCard === serviceId ? null : serviceId);
  };

  const handleQuoteClick = (service) => {
    setQuoteModal({ isOpen: true, service });
  };

  const handleCloseModal = () => {
    setQuoteModal({ isOpen: false, service: null });
  };

  return (
    <>
      <motion.section 
        id="services" 
        className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5" />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-40 h-40 border border-gold/20 rounded-full hidden lg:block"
        />

        <div className="container mx-auto px-4 relative z-10">
          {/* Conditional Header Section */}
          {showHeader && (
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
                {headerTitle.split(' ').map((word, index) => (
                  <span key={index} className={word === 'Premium' || word === 'Services' ? 'text-gold' : ''}>
                    {word}{' '}
                  </span>
                ))}
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-gray-600 text-lg max-w-3xl mx-auto mb-8"
              >
                {headerDescription}
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="w-24 h-1 bg-gradient-to-r from-gold to-yellow-500 mx-auto rounded-full"
              />
            </motion.div>
          )}

          <motion.div 
            layout
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {enhancedServices.map((service, index) => (
              <ServiceCard 
                key={service.id}
                service={service}
                index={index}
                isExpanded={expandedCard === service.id}
                onToggle={handleToggleCard}
                onQuoteClick={handleQuoteClick}
              />
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mt-16"
          >
            <p className="text-gray-600 mb-6">Need something custom? We're here to help!</p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-gold to-yellow-500 text-white font-bold rounded-full hover:from-yellow-500 hover:to-gold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Discuss Your Event
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <QuoteModal 
        service={quoteModal.service}
        isOpen={quoteModal.isOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Services;