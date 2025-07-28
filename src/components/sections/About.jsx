import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn, staggerContainer, scaleIn } from '../../framer';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');

  const tabVariants = {
    inactive: { scale: 1, opacity: 0.7 },
    active: { scale: 1.05, opacity: 1 }
  };

  const teamMembers = [
    {
      name: "Khusboo Singh",
      role: "Founder & CEO",
      image: "/public/assets/images/logo/logo.png",
      description: "Visionary leader with 5+ years in event management, transforming dreams into reality.",
      expertise: ["Strategic Planning", "Client Relations", "Creative Direction"]
    }
  ];

  const companyStats = [
    { number: "500+", label: "Events Completed", icon: "🎉" },
    { number: "500+", label: "Happy Clients", icon: "😊" },
    { number: "7", label: "Service Categories", icon: "🎯" },
    { number: "15+", label: "Cities Covered", icon: "🌍" },
    { number: "98%", label: "Client Retention", icon: "❤️" },
    { number: "24/7", label: "Support Available", icon: "📞" }
  ];

  const milestones = [
    { year: "2021", title: "Company Founded", description: "SS Benchmark Events was established with a vision to redefine event management." },
    { year: "2022", title: "100+ Events", description: "Successfully completed our first 100 events, building a strong reputation." },
    { year: "2023", title: "Service Expansion", description: "Expanded services to include destination weddings and corporate events." },
    { year: "2024", title: "Digital Innovation", description: "Integrated cutting-edge technology for enhanced event planning and execution." },
    { year: "2025", title: "Market Leadership", description: "Recognized as a leading event management company with 500+ successful events." }
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for perfection in every detail, ensuring each event exceeds expectations.",
      icon: "⭐"
    },
    {
      title: "Innovation",
      description: "Constantly evolving with the latest trends and technologies in event management.",
      icon: "💡"
    },
    {
      title: "Integrity",
      description: "Building trust through transparent communication and honest business practices.",
      icon: "🤝"
    },
    {
      title: "Passion",
      description: "Every team member brings genuine enthusiasm to creating memorable experiences.",
      icon: "❤️"
    }
  ];

  return (
    <motion.div
      className="bg-gradient-to-br from-gray-50 to-white"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Story Section */}
      <motion.section className="py-20" variants={fadeInUp}>
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Our <span className="text-gold">Story</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-yellow-500 mx-auto rounded-full mb-8" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gold/20">
                <h3 className="text-3xl font-serif font-bold mb-6 text-gray-800">
                  From Vision to <span className="text-gold">Reality</span>
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Founded in 2021 by <strong className="text-gold">Khusboo Singh</strong>, SS Benchmark Events began with a simple yet powerful vision: to transform ordinary moments into extraordinary memories. What started as a passion project has evolved into one of India's most trusted event management companies.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Our journey has been marked by countless celebrations, from intimate gatherings to grand spectacles. Each event we plan is a testament to our commitment to excellence, creativity, and attention to detail.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-gold to-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                    KS
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Khusboo Singh</p>
                    <p className="text-gold text-sm">Founder & CEO</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="grid grid-cols-2 gap-6">
                {companyStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
                    variants={scaleIn}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-gold mb-1">{stat.number}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-black" variants={fadeInUp}>
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
              Our <span className="text-gold">Journey</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Milestones that define our growth and commitment to excellence
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-gold to-yellow-500 hidden lg:block" />
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                variants={fadeInUp}
              >
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-xl border border-gold/20">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-r from-gold to-yellow-500 text-white px-4 py-2 rounded-full font-bold">
                        {milestone.year}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="hidden lg:block relative">
                  <div className="w-4 h-4 bg-gradient-to-r from-gold to-yellow-500 rounded-full border-4 border-white shadow-lg" />
                </div>
                
                <div className="lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section className="py-20" variants={fadeInUp}>
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Our <span className="text-gold">Values</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gold/20 text-center hover:shadow-xl transition-all duration-300"
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision Section */}
      <motion.section className="py-20 bg-gradient-to-br from-gold/5 to-yellow-500/5" variants={fadeInUp}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-xl border border-gold/20"
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-gold to-yellow-500 rounded-full flex items-center justify-center text-white text-xl">
                  🎯
                </div>
                <h3 className="text-3xl font-serif font-bold ml-4 text-gray-800">Our Mission</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                To deliver exceptional event experiences that exceed expectations through innovative planning, 
                meticulous execution, and unwavering commitment to our clients' vision.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                  Transform visions into memorable realities
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                  Deliver seamless and innovative experiences
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                  Build lasting relationships through trust
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 shadow-xl text-white"
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-gold to-yellow-500 rounded-full flex items-center justify-center text-white text-xl">
                  🌟
                </div>
                <h3 className="text-3xl font-serif font-bold ml-4">Our Vision</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                To be India's most trusted and innovative event management company, setting new benchmarks 
                for excellence and creativity in the industry.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                  Set new industry standards for excellence
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                  Expand our impact across India and beyond
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                  Pioneer innovative event solutions
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Preview Section */}
      <motion.section className="py-20" variants={fadeInUp}>
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              What We <span className="text-gold">Specialize In</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              From intimate celebrations to grand corporate events, we bring expertise to every occasion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Weddings & Receptions", icon: "💍", desc: "Creating magical moments for your special day" },
              { title: "Corporate Events", icon: "🏢", desc: "Professional conferences and company celebrations" },
              { title: "Birthday Celebrations", icon: "🎂", desc: "Memorable parties for all ages" },
              { title: "Cultural Festivals", icon: "🎭", desc: "Traditional and contemporary cultural events" },
              { title: "Destination Events", icon: "✈️", desc: "Exotic locations for unforgettable experiences" },
              { title: "Theme Parties", icon: "🎪", desc: "Creative and immersive themed celebrations" }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gold/20 text-center hover:shadow-xl transition-all duration-300"
                variants={scaleIn}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default About;
