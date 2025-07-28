import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeInUp, fadeIn, staggerContainer } from '../../framer';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-black text-white py-12 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="max-w-6xl mx-auto text-center"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Branding and Description */}
        <motion.div 
          className="mb-8"
          variants={fadeInUp}
        >
          <motion.h3 
            className="text-2xl font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            SS Benchmark Events
          </motion.h3>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
          >
            Transforming your vision into extraordinary experiences with elegance and precision.
          </motion.p>
        </motion.div>
        <motion.div 
          className="flex justify-center gap-6 mb-8 text-xl text-gray-400"
          variants={fadeInUp}
        >
          <motion.a 
            href="https://www.instagram.com/ss_benchmark_events_?utm_source=qr&igsh=MTg0Nzk2Y2RjY2RrNQ==" 
            whileHover={{ scale: 1.2, color: "#D4AF37" }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaInstagram />
          </motion.a>
          <motion.a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            whileHover={{ scale: 1.2, color: "#D4AF37" }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaFacebook />
          </motion.a>
         
          <motion.a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            whileHover={{ scale: 1.2, color: "#D4AF37" }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaTwitter />
          </motion.a>
          <motion.a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            whileHover={{ scale: 1.2, color: "#D4AF37" }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaLinkedin />
          </motion.a>
        </motion.div>

        {/* Quick Links - Desktop Only */}
        <motion.div 
          className="hidden md:flex justify-center flex-wrap gap-6 mb-8 text-gray-400 text-sm font-medium"
          variants={fadeInUp}
        >
          <Link to="/about">
            <motion.span whileHover={{ scale: 1.1, color: "#D4AF37" }} transition={{ type: "spring", stiffness: 300 }}>
              About Us
            </motion.span>
          </Link>
          <Link to="/services">
            <motion.span whileHover={{ scale: 1.1, color: "#D4AF37" }} transition={{ type: "spring", stiffness: 300 }}>
              Services
            </motion.span>
          </Link>
          <Link to="/gallery">
            <motion.span whileHover={{ scale: 1.1, color: "#D4AF37" }} transition={{ type: "spring", stiffness: 300 }}>
              Gallery
            </motion.span>
          </Link>
          <Link to="/testimonials">
            <motion.span whileHover={{ scale: 1.1, color: "#D4AF37" }} transition={{ type: "spring", stiffness: 300 }}>
              Testimonials
            </motion.span>
          </Link>
          <Link to="/contact">
            <motion.span whileHover={{ scale: 1.1, color: "#D4AF37" }} transition={{ type: "spring", stiffness: 300 }}>
              Contact
            </motion.span>
          </Link>
        </motion.div>

        {/* Contact Info */}
        <motion.div 
          className="text-sm text-gray-400 space-y-4 mb-8"
          variants={fadeInUp}
        >
          <motion.p 
            className="flex justify-center items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ x: 5 }}
          >
            <motion.svg 
              className="w-5 h-5" 
              fill="currentColor" 
              viewBox="0 0 20 20"
              whileHover={{ scale: 1.2, rotate: 5, color: "#D4AF37" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </motion.svg>
           Rajghat, Varanasi, Near NK Pandey Petrol Pump
          </motion.p>
          <motion.p 
            className="flex justify-center items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ x: 5 }}
          >
            <motion.svg 
              className="w-5 h-5" 
              fill="currentColor" 
              viewBox="0 0 20 20"
              whileHover={{ scale: 1.2, rotate: 5, color: "#D4AF37" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </motion.svg>
            <motion.a 
              href="mailto:info@ssbenchmarkevents.com" 
              whileHover={{ scale: 1.05, color: "#D4AF37" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              ssbenchmarkevents@gmail.com
            </motion.a>
          </motion.p>
          <motion.p 
            className="flex justify-center items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ x: 5 }}
          >
            <motion.svg 
              className="w-5 h-5" 
              fill="currentColor" 
              viewBox="0 0 20 20"
              whileHover={{ scale: 1.2, rotate: 5, color: "#D4AF37" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </motion.svg>
            <motion.a 
              href="tel:+91 8004550986" 
              whileHover={{ scale: 1.05, color: "#D4AF37" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              +91 8004550986
            </motion.a>
          </motion.p>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div 
          className="border-t border-gray-700 pt-6 text-gray-500 text-xs flex flex-col items-center gap-2"
          variants={fadeInUp}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            &copy; {new Date().getFullYear()} SS Benchmark Events. All rights reserved.
          </motion.p>
     
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
