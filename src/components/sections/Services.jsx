import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, scaleIn } from '../../framer';

const ServiceCard = ({ title, description, icon, index }) => {
  return (
    <motion.div 
      variants={fadeInUp}
      custom={index}
      whileHover={{ y: -10 }}
      className="bg-gray-100 p-8 rounded-lg shadow-lg"
    >
      <motion.div 
        className="flex justify-center mb-6"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
      >
        <motion.div 
          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-gold"
        >
          {icon}
        </motion.div>
      </motion.div>
      <motion.h3 
        variants={fadeInUp}
        className="text-xl font-bold text-center mb-4"
      >
        {title}
      </motion.h3>
      <motion.p 
        variants={fadeInUp}
        className="text-gray-700 text-center mb-6"
      >
        {description}
      </motion.p>
      <motion.div 
        variants={fadeInUp}
        className="text-center"
      >
        <motion.button 
          whileHover={{ scale: 1.05, backgroundColor: '#D4AF37' }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-black text-white rounded-full transition-colors duration-300"
        >
          Know More
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <motion.section 
      id="services" 
      className="py-20 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif font-bold text-center mb-4"
        >
          Our <span className="text-gold">Services</span>
        </motion.h2>
        <motion.p 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-gray-700 text-center max-w-2xl mx-auto mb-12"
        >
          We offer comprehensive event management services tailored to your specific needs and vision.
        </motion.p>
        
        <motion.div 
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          <ServiceCard 
            index={0}
            title="Artist Management" 
            description="We provide comprehensive artist management services, ensuring your talents are nurtured and represented professionally."
            icon={
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
              </svg>
            }
          />
          
          <ServiceCard 
            index={1}
            title="Live Event Planning" 
            description="Our expert team crafts unforgettable live events, taking care of all logistics and creative elements for a seamless experience."
            icon={
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
              </svg>
            }
          />
          
          <ServiceCard 
            index={2}
            title="Wedding Planning" 
            description="From intimate ceremonies to grand celebrations, we create magical wedding experiences tailored to your unique love story."
            icon={
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
              </svg>
            }
          />
          
          <ServiceCard 
            index={3}
            title="Corporate Events" 
            description="Elevate your brand with our professional corporate event planning services, from conferences to team-building activities."
            icon={
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
              </svg>
            }
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;