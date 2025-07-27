import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn } from '../../framer';

const About = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.section 
      id="about" 
      className="py-20 bg-gradient-to-br from-white via-gold/10 to-gold/30 mt-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.h2 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-black"
        >
          About <span className="text-gold">Us</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          
          {/* Founder Card */}
          <motion.div 
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-black text-white rounded-2xl shadow-xl p-8 border border-gold"
          >
            <motion.h3 
              variants={fadeInUp}
              className="text-3xl font-bold mb-4 text-gold font-serif"
            >
              Meet Our Founder: Khusboo Singh
            </motion.h3>
            <motion.p variants={fadeInUp} className="text-lg mb-4 text-white/90">
              Khusboo Singh, the visionary behind SS Benchmark Events, founded the company in 2021 with a passion for crafting unforgettable experiences. With a background in hospitality and a keen eye for detail, Khusboo has led the company to become a trusted name in event management across India.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-base text-white/80">
              Her dedication to excellence, creativity, and client satisfaction drives every project, ensuring each event is unique and memorable.
            </motion.p>
          </motion.div>

          {/* Mission Card */}
          <motion.div 
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gold"
          >
            <motion.h4 className="text-2xl font-bold mb-4 text-black font-serif">Mission</motion.h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>Deliver seamless and innovative event experiences.</li>
              <li>Transform client visions into reality with precision.</li>
              <li>Uphold professionalism and integrity always.</li>
              <li>Continuously adapt and exceed expectations.</li>
              <li>Build lasting client relationships through trust.</li>
            </ul>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gold"
          >
            <motion.h4 className="text-2xl font-bold mb-4 text-black font-serif">Vision</motion.h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>Set new industry benchmarks for excellence.</li>
              <li>Be the go-to partner for diverse events.</li>
              <li>Inspire creativity and bold execution.</li>
              <li>Empower teams to excel and innovate.</li>
              <li>Expand impact and elevate experiences.</li>
            </ul>
          </motion.div>

          {/* Events Card */}
          <motion.div 
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gold"
          >
            <motion.h4 className="text-2xl font-bold mb-4 text-black font-serif">Events We Specialize In</motion.h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>Weddings & Receptions</li>
              <li>Corporate Conferences</li>
              <li>Birthday Celebrations</li>
              <li>Festivals & Cultural Events</li>
              <li>Community Gatherings</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
