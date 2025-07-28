import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from '../../framer';
import advancedStatsData from '../../data/advancedStats.json';

const AdvancedStatistics = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [counters, setCounters] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  // Animated counter hook
  useEffect(() => {
    if (!isVisible) return;

    const animateCounter = (key, targetValue, suffix = '') => {
      let currentValue = 0;
      const increment = targetValue / 100;
      const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
          currentValue = targetValue;
          clearInterval(timer);
        }
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(currentValue) + suffix
        }));
      }, 20);
    };

    // Animate different counters
    animateCounter('events', advancedStatsData.overview.totalEvents);
    animateCounter('clients', advancedStatsData.overview.happyClients);
    animateCounter('years', advancedStatsData.overview.yearsInBusiness);
    animateCounter('team', advancedStatsData.overview.teamMembers);
    animateCounter('rating', advancedStatsData.overview.averageRating * 10, '');
    
  }, [isVisible]);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'performance', label: 'Performance', icon: '📈' },
    { id: 'geographic', label: 'Geographic', icon: '🌍' },
    { id: 'team', label: 'Team Stats', icon: '👥' },
  ];

  const ProgressBar = ({ percentage, label, color = 'from-gold to-yellow-500' }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm text-gray-600">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          className={`h-2 bg-gradient-to-r ${color} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );

  const StatCard = ({ title, value, subtitle, icon, trend }) => (
    <motion.div
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
      variants={scaleIn}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="text-3xl">{icon}</div>
        {trend && (
          <div className={`text-sm font-semibold px-2 py-1 rounded-full ${
            trend.startsWith('+') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {trend}
          </div>
        )}
      </div>
      <div className="text-3xl font-bold text-gray-800 mb-2">{value}</div>
      <div className="text-sm text-gray-600">{title}</div>
      {subtitle && <div className="text-xs text-gray-500 mt-1">{subtitle}</div>}
    </motion.div>
  );

  const renderOverview = () => (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      <StatCard
        title="Total Events"
        value={counters.events || 0}
        subtitle="Since inception"
        icon="🎉"
        trend="+35%"
      />
      <StatCard
        title="Happy Clients"
        value={counters.clients || 0}
        subtitle="Satisfied customers"
        icon="😊"
        trend="+25%"
      />
      <StatCard
        title="Years Experience"
        value={counters.years || 0}
        subtitle="In the industry"
        icon="🏆"
      />
      <StatCard
        title="Team Members"
        value={counters.team || 0}
        subtitle="Expert professionals"
        icon="👥"
        trend="+25%"
      />
      <StatCard
        title="Average Rating"
        value={(counters.rating / 10 || 0).toFixed(1)}
        subtitle="Out of 5.0 stars"
        icon="⭐"
      />
      <StatCard
        title="Revenue Generated"
        value={advancedStatsData.overview.totalRevenue}
        subtitle="Total business value"
        icon="💰"
        trend="+40%"
      />
      <StatCard
        title="Repeat Clients"
        value={advancedStatsData.overview.repeatClients}
        subtitle="Customer loyalty"
        icon="🔄"
      />
      <StatCard
        title="Market Growth"
        value={advancedStatsData.growthMetrics.yearOverYear}
        subtitle="Year over year"
        icon="📈"
        trend="Strong"
      />
    </motion.div>
  );

  const renderPerformance = () => (
    <div className="space-y-8">
      {/* Event Types Breakdown */}
      <motion.div className="bg-white rounded-xl p-6 shadow-lg" variants={fadeInUp}>
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Event Types Performance</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            {advancedStatsData.eventTypeBreakdown.map((type, index) => (
              <div key={type.type} className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-700">{type.type}</span>
                  <div className="text-right">
                    <div className="text-sm text-gold font-bold">{type.count} events</div>
                    <div className="text-xs text-gray-500">{type.revenue}</div>
                  </div>
                </div>
                <ProgressBar percentage={type.percentage} label="" />
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {advancedStatsData.eventTypeBreakdown.slice(0, 3).map((type) => (
              <motion.div
                key={type.type}
                className="bg-gradient-to-r from-gold/10 to-yellow-500/10 rounded-lg p-4"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-gray-800">{type.type}</div>
                    <div className="text-sm text-gray-600">Avg Budget: {type.avgBudget}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gold">{type.percentage}%</div>
                    <div className="text-sm text-gray-600">of total events</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Monthly Performance Chart */}
      <motion.div className="bg-white rounded-xl p-6 shadow-lg" variants={fadeInUp}>
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Monthly Performance Trends</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {advancedStatsData.monthlyStats.slice(-3).map((month) => (
            <motion.div
              key={month.month}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-lg font-bold text-gray-800 mb-3">{month.month}</div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Events:</span>
                  <span className="font-semibold">{month.events}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Revenue:</span>
                  <span className="font-semibold text-green-600">{month.revenue}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Satisfaction:</span>
                  <span className="font-semibold text-gold">{month.satisfaction} ⭐</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );

  const renderGeographic = () => (
    <motion.div className="bg-white rounded-xl p-6 shadow-lg" variants={fadeInUp}>
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Geographic Distribution</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          {advancedStatsData.geographicData.map((location, index) => (
            <motion.div
              key={location.location}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex-1">
                <div className="font-semibold text-gray-800">{location.location}</div>
                <div className="text-sm text-gray-600">{location.events} events</div>
              </div>
              <div className="text-right mr-4">
                <div className="text-lg font-bold text-gold">{location.percentage}%</div>
                <div className={`text-sm font-semibold ${
                  location.growth.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {location.growth}
                </div>
              </div>
              <div className="w-24">
                <ProgressBar percentage={location.percentage} label="" />
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="bg-gradient-to-br from-gold/10 to-yellow-500/10 rounded-lg p-6">
          <h4 className="text-xl font-bold text-gray-800 mb-4">Market Insights</h4>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              <span className="text-gray-700">Expanding to 3 new cities this year</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
              <span className="text-gray-700">Strongest growth in Tier-2 cities</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
              <span className="text-gray-700">Delhi NCR remains our largest market</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gold rounded-full mr-3"></div>
              <span className="text-gray-700">Average 20% growth across all regions</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderTeamStats = () => (
    <motion.div className="space-y-6" variants={staggerContainer}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {advancedStatsData.teamPerformance.map((member, index) => (
          <motion.div
            key={member.memberName}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
            variants={scaleIn}
            whileHover={{ y: -5 }}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-gold to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">
                  {member.memberName.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h4 className="font-bold text-gray-800 mb-1">{member.memberName}</h4>
              <p className="text-sm text-gray-600 mb-3">{member.role}</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Events:</span>
                  <span className="font-semibold">{member.eventsHandled}</span>
                </div>
                <div className="flex justify-between">
                  <span>Rating:</span>
                  <span className="font-semibold text-gold">{member.clientSatisfaction} ⭐</span>
                </div>
                <div className="flex justify-between">
                  <span>Experience:</span>
                  <span className="font-semibold">{member.experience}</span>
                </div>
              </div>
              <div className="mt-3 px-3 py-1 bg-gold/20 rounded-full text-xs font-medium text-gold">
                {member.specialty}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Client Satisfaction Breakdown */}
      <motion.div className="bg-white rounded-xl p-6 shadow-lg" variants={fadeInUp}>
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Client Satisfaction Analysis</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {advancedStatsData.clientSatisfactionDetails.categories.map((category) => (
              <div key={category.aspect}>
                <ProgressBar
                  percentage={(category.rating / 5) * 100}
                  label={`${category.aspect} (${category.rating}/5)`}
                  color="from-blue-500 to-blue-600"
                />
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {advancedStatsData.clientSatisfactionDetails.overall}
              </div>
              <div className="text-gray-600">Overall Satisfaction Rating</div>
            </div>
            <div className="space-y-3 text-sm">
              {advancedStatsData.clientSatisfactionDetails.categories.slice(0, 3).map((category) => (
                <div key={category.aspect} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">{category.feedback}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <motion.section
      className="py-16 bg-gradient-to-br from-gray-50 to-white"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      onViewportEnter={() => setIsVisible(true)}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div className="text-center mb-12" variants={fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            <span className="text-gray-800">Performance </span>
            <span className="text-gold">Analytics</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
            Data-driven insights into our event management excellence and client satisfaction metrics.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-yellow-500 mx-auto rounded-full" />
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          variants={fadeInUp}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-gold to-yellow-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'performance' && renderPerformance()}
            {activeTab === 'geographic' && renderGeographic()}
            {activeTab === 'team' && renderTeamStats()}
          </motion.div>
        </AnimatePresence>

        {/* Awards Section */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-gold/10 to-yellow-500/10 rounded-2xl p-8"
          variants={fadeInUp}
        >
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Awards & Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advancedStatsData.awards.map((award, index) => (
              <motion.div
                key={`${award.year}-${index}`}
                className="text-center p-4 bg-white rounded-lg shadow-md"
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-3">🏆</div>
                <div className="font-bold text-gray-800 mb-2">{award.award}</div>
                <div className="text-sm text-gray-600 mb-1">{award.organization}</div>
                <div className="text-xs text-gold font-semibold">{award.year}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AdvancedStatistics;
