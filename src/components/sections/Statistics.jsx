import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../framer';
import statsData from '../../data/stats.json';

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          startCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const startCounters = () => {
    statsData.forEach((stat) => {
      // Special handling for "24/7" - don't animate it
      if (stat.number === "24/7") {
        setCounters(prev => ({
          ...prev,
          [stat.id]: "24/7"
        }));
        return;
      }
      
      const targetNumber = parseInt(stat.number.replace(/\D/g, ''));
      const suffix = stat.number.replace(/\d/g, '');
      
      let current = 0;
      const increment = targetNumber / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= targetNumber) {
          current = targetNumber;
          clearInterval(timer);
        }
        setCounters(prev => ({
          ...prev,
          [stat.id]: Math.floor(current) + suffix
        }));
      }, 30);
    });
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'calendar':
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        );
      case 'users':
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z"
          />
        );
      case 'award':
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        );
      case 'clock':
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        );
      default:
        return null;
    }
  };

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5"></div>
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut"
        }}
        className="absolute top-10 right-10 w-32 h-32 border border-gold/20 rounded-full hidden lg:block"
      />
      
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {statsData.map((stat) => (
            <motion.div
              key={stat.id}
              variants={fadeInUp}
              className="flex flex-col items-center text-center group"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Icon Container */}
              <motion.div
                className="w-16 h-16 mb-4 relative flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-gold to-yellow-500 rounded-full flex items-center justify-center shadow-lg shadow-gold/30">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {getIcon(stat.icon)}
                  </svg>
                </div>
                <motion.div
                  className="absolute -inset-2 bg-gold/20 rounded-full -z-10"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
              
              {/* Number - Perfectly centered below icon */}
              <motion.h3
                className="text-3xl lg:text-4xl font-bold text-gold mb-2 text-center w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ delay: stat.id * 0.1 }}
              >
                {counters[stat.id] || (stat.number === "24/7" ? "24/7" : "0")}
              </motion.h3>
              
              {/* Label - Centered */}
              <motion.p
                className="text-white font-semibold text-lg mb-2 text-center w-full"
                variants={fadeInUp}
              >
                {stat.label}
              </motion.p>
              
              {/* Description - Centered */}
              <motion.p
                className="text-gray-300 text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300 text-center w-full"
                variants={fadeInUp}
              >
                {stat.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
