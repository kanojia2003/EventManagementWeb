import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn, staggerContainer, scaleIn } from "../../framer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    budget: "",
    message: "",
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const eventTypes = [
    "Wedding & Reception",
    "Corporate Event",
    "Birthday Celebration", 
    "Theme Party",
    "Venue Booking",
    "Tour & Travel",
    "Honeymoon Package",
    "Educational Trip",
    "Other"
  ];

  const contactInfo = [
    {
      icon: "📍",
      title: "Visit Our Office",
      details: ["SS Benchmark Events", "Near Business District", "Varanasi, Uttar Pradesh"],
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: "📞",
      title: "Call Us",
      details: ["+91 8004550986","Mon-Sat: 9AM-8PM"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: "✉️",
      title: "Email Us",
      details: ["info@ssbenchmarkevents.com", "events@ssbenchmarkevents.com", "Quick Response Guaranteed"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "🌐",
      title: "Follow Us",
      details: ["@SSBenchmarkEvents", "Facebook • Instagram • LinkedIn", "Stay Updated"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const faqs = [
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking 2-3 months in advance for small events and 6-12 months for weddings and large celebrations."
    },
    {
      question: "Do you provide decoration services?",
      answer: "Yes, we offer complete decoration services including themes, lighting, flowers, and custom setups."
    },
    {
      question: "What's included in your event packages?",
      answer: "Our packages include planning, coordination, vendor management, setup, and on-day execution. Details vary by package."
    },
    {
      question: "Do you handle destination events?",
      answer: "Absolutely! We specialize in destination weddings, corporate retreats, and travel packages across India and abroad."
    }
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.eventType) newErrors.eventType = "Please select an event type";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // For now, we'll simulate a successful submission until Formspree is set up
    // Replace this with actual Formspree integration once you have the form ID
    
    const FORMSPREE_ID = 'https://formspree.io/f/xnnzvqqo'; // Replace with your actual Formspree form ID

    if (FORMSPREE_ID === 'https://formspree.io/f/xnnzvqqo') {
      // Simulate successful submission for demo purposes
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: "", email: "", phone: "", eventType: "", 
          eventDate: "", guestCount: "", budget: "", message: ""
        });
        
        // Reset success message after 8 seconds
        setTimeout(() => setSubmitSuccess(false), 8000);
      }, 2000);
      return;
    }

    try {
      // Actual Formspree submission (when form ID is configured)
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          eventType: formData.eventType,
          eventDate: formData.eventDate,
          guestCount: formData.guestCount,
          budget: formData.budget,
          message: formData.message,
          subject: `New Event Inquiry from ${formData.name} - ${formData.eventType}`,
          _replyto: formData.email
        })
      });

      if (response.ok) {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: "", email: "", phone: "", eventType: "", 
          eventDate: "", guestCount: "", budget: "", message: ""
        });
        
        // Reset success message after 8 seconds
        setTimeout(() => setSubmitSuccess(false), 8000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setIsSubmitting(false);
      setErrors({ submit: 'Failed to send message. Please try again or contact us directly.' });
      console.error('Form submission error:', error);
    }
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-gray-50 to-white"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Contact Information Cards */}
      <motion.section className="py-20" variants={fadeInUp}>
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Get in <span className="text-gold">Touch</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Ready to create something extraordinary? Multiple ways to reach us for your convenience.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-yellow-500 mx-auto rounded-full mt-8" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gold/20 text-center hover:shadow-xl transition-all duration-300"
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="text-4xl mb-4">{info.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className={`text-gray-600 ${idx === 0 ? 'font-semibold text-gold' : ''}`}>
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Form & Map Section */}
      <motion.section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-black" variants={fadeInUp}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-3xl font-serif font-bold mb-6 text-gray-800">
                  Tell Us About Your <span className="text-gold">Event</span>
                </h3>
                
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 text-green-800 px-6 py-4 rounded-xl mb-6 shadow-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="bg-green-500 text-white rounded-full p-1">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">🎉 Message Sent Successfully!</h4>
                        <p className="text-green-700 mt-1">
                          Thank you <strong>{formData.name || 'for your inquiry'}</strong>! We've received your event details and our team will contact you within 2 hours. 
                          Check your email for a confirmation with next steps.
                        </p>
                        <div className="mt-2 text-sm text-green-600 flex items-center space-x-4">
                          <span>📧 Confirmation sent to your email</span>
                          <span>⏰ Response within 2 hours</span>
                          <span>💬 Free consultation included</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {errors.submit && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6"
                  >
                    <div className="flex items-center space-x-2">
                      <span>⚠️</span>
                      <span>{errors.submit}</span>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Hidden fields for better email formatting */}
                  <input type="hidden" name="_subject" value={`New Event Inquiry from ${formData.name} - ${formData.eventType}`} />
                  <input type="hidden" name="_replyto" value={formData.email} />
                  <input type="hidden" name="_next" value="thanks.html" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="+91 8004550986"
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Event Type *</label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all ${errors.eventType ? 'border-red-500' : 'border-gray-300'}`}
                      >
                        <option value="">Select event type</option>
                        {eventTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                      {errors.eventType && <p className="text-red-500 text-sm mt-1">{errors.eventType}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Event Date</label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Guest Count</label>
                      <select
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                      >
                        <option value="">Select range</option>
                        <option value="1-50">1-50 guests</option>
                        <option value="51-100">51-100 guests</option>
                        <option value="101-200">101-200 guests</option>
                        <option value="201-500">201-500 guests</option>
                        <option value="500+">500+ guests</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Budget Range</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                      >
                        <option value="">Select budget</option>
                        <option value="25-50k">₹25,000 - ₹50,000</option>
                        <option value="50-100k">₹50,000 - ₹1,00,000</option>
                        <option value="100-250k">₹1,00,000 - ₹2,50,000</option>
                        <option value="250-500k">₹2,50,000 - ₹5,00,000</option>
                        <option value="500k+">₹5,00,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Tell Us About Your Event *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Describe your event vision, special requirements, or any questions you have..."
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-gold to-yellow-500 hover:from-yellow-500 hover:to-gold text-white transform hover:scale-[1.02]'
                    }`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </span>
                    ) : (
                      'Send Message & Get Free Consultation'
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div variants={fadeInUp} className="space-y-8">
              {/* Interactive Google Map */}
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Visit Our Office</h3>
                <div className="rounded-lg overflow-hidden mb-4 shadow-lg">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3606.313674224554!2d83.02754587538604!3d25.327253277627495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE5JzM4LjEiTiA4M8KwMDEnNDguNCJF!5e0!3m2!1sen!2sin!4v1753701139842!5m2!1sen!2sin" 
                    width="100%" 
                    height="300" 
                    style={{border: 0}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SS Benchmark Events Office Location"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-gold/10 rounded-lg">
                    <div className="text-gold font-bold">Office Hours</div>
                    <div className="text-sm text-gray-600">Mon-Sat: 9AM-8PM</div>
                  </div>
                  <div className="text-center p-3 bg-gold/10 rounded-lg">
                    <div className="text-gold font-bold">Quick Response</div>
                    <div className="text-sm text-gray-600">Within 2 Hours</div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center space-x-2 text-blue-800">
                    <span>📍</span>
                    <span className="font-semibold">Exact Address:</span>
                  </div>
                  <p className="text-blue-700 mt-1">
                    25°19'38.1"N 83°01'48.4"E<br/>
                    Near Business District, Varanasi, Uttar Pradesh
                  </p>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose SS Benchmark Events?</h3>
                <div className="space-y-3">
                  {[
                    { icon: "⭐", text: "500+ Successful Events" },
                    { icon: "🏆", text: "Award-Winning Team" },
                    { icon: "💎", text: "Premium Service Quality" },
                    { icon: "🎯", text: "100% Client Satisfaction" },
                    { icon: "⚡", text: "Quick Turnaround Time" },
                    { icon: "💰", text: "Competitive Pricing" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section className="py-20" variants={fadeInUp}>
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Frequently Asked <span className="text-gold">Questions</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Get quick answers to common questions about our services and process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gold/20"
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                  <span className="text-gold mr-2">Q:</span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  <span className="text-gold font-semibold">A:</span> {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section className="py-20 bg-gradient-to-br from-gold/5 to-yellow-500/5" variants={fadeInUp}>
        <div className="container mx-auto px-4 text-center">
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to Create Something <span className="text-gold">Amazing</span>?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
              Don't wait! Our calendar fills up quickly. Contact us today for a free consultation 
              and let's start planning your perfect event.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gold to-yellow-500 text-white font-bold rounded-full hover:from-yellow-500 hover:to-gold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                📞 Call Now: +91 8004550986
              </a>
              <a
                href="mailto:info@ssbenchmarkevents.com"
                className="inline-flex items-center px-8 py-4 bg-white text-gold font-bold rounded-full border-2 border-gold hover:bg-gold hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                ✉️ Email Us Directly
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Contact;
