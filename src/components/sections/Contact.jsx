import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  scaleIn,
} from "../../../framer.js";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      newErrors.email = "Enter a valid email.";
    if (!form.phone.trim()) newErrors.phone = "Phone is required.";
    else if (!/^\+?\d{7,15}$/.test(form.phone.replace(/\D/g, "")))
      newErrors.phone = "Enter a valid phone number.";
    if (!form.eventType) newErrors.eventType = "Please select an event type.";
    if (!form.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("");
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(
        "Thank you! Your message has been sent. We will contact you soon."
      );
      setForm({ name: "", email: "", phone: "", eventType: "", message: "" });
      setErrors({});
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 mt-10 bg-gradient-to-br from-white via-gold/10 to-gold/30">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-bold text-center mb-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          Contact{" "}
          <motion.span
            className="text-gold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Us
          </motion.span>
        </motion.h2>
        <motion.p
          className="text-gray-700 text-center max-w-2xl mx-auto mb-12"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          Get in touch with us to plan your next unforgettable event.
        </motion.p>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          {/* Contact Form */}
          <motion.div
            className="bg-gray-50 p-8 rounded-lg shadow-lg"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            whileHover={{
              y: -5,
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <form 
              action="https://formspree.io/f/xnnzvqqo" 
              method="POST"
              onSubmit={handleSubmit} 
              noValidate 
              aria-label="Contact form"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`w-full px-4 py-2 border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-gold`}
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <span
                      id="name-error"
                      className="text-red-500 text-sm"
                      role="alert"
                    >
                      {errors.name}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`w-full px-4 py-2 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-gold`}
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <span
                      id="email-error"
                      className="text-red-500 text-sm"
                      role="alert"
                    >
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className={`w-full px-4 py-2 border ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-gold`}
                    placeholder="Your Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                    aria-invalid={errors.phone ? "true" : "false"}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                  {errors.phone && (
                    <span
                      id="phone-error"
                      className="text-red-500 text-sm"
                      role="alert"
                    >
                      {errors.phone}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="eventType"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    className={`w-full px-4 py-2 border ${
                      errors.eventType ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-gold`}
                    value={form.eventType}
                    onChange={handleChange}
                    aria-invalid={errors.eventType ? "true" : "false"}
                    aria-describedby={
                      errors.eventType ? "eventType-error" : undefined
                    }
                  >
                    <option value="">Select Event Type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="concert">Concert</option>
                    <option value="social">Social Gathering</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.eventType && (
                    <span
                      id="eventType-error"
                      className="text-red-500 text-sm"
                      role="alert"
                    >
                      {errors.eventType}
                    </span>
                  )}
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className={`w-full px-4 py-2 border ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-gold`}
                  placeholder="Tell us about your event..."
                  value={form.message}
                  onChange={handleChange}
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                ></textarea>
                {errors.message && (
                  <span
                    id="message-error"
                    className="text-red-500 text-sm"
                    role="alert"
                  >
                    {errors.message}
                  </span>
                )}
              </div>
              <motion.button
                type="submit"
                className="w-full py-3 bg-black text-white font-bold rounded-lg disabled:opacity-60 relative flex items-center justify-center"
                disabled={submitting}
                aria-busy={submitting ? "true" : "false"}
                aria-label="Send Message"
                whileHover={{ backgroundColor: "#D4AF37", scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {submitting ? (
                  <>
                    <motion.span
                      className="mr-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      Sending...
                    </motion.span>
                    <motion.span
                      className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 1,
                        ease: "linear",
                      }}
                      aria-hidden="true"
                    />
                  </>
                ) : (
                  "Send Message"
                )}
              </motion.button>
              {success && (
                <motion.div
                  className="mt-4 text-green-600 font-semibold"
                  role="status"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  {success}
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            transition={{ delay: 0.2 }}
          >
            <div className="mb-8">
              <motion.h3
                className="text-xl font-bold mb-4"
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
              >
                Contact Information
              </motion.h3>
              <motion.div
                className="space-y-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
              >
                <motion.p
                  className="flex items-start"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.25 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.svg
                    className="w-5 h-5 mr-3 mt-1 text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </motion.svg>
                  <span>Rajghat, Varanashi, Near NK Pandey Petrol Pump</span>
                </motion.p>
                <motion.p
                  className="flex items-center"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.25 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                >
                  <motion.svg
                    className="w-5 h-5 mr-3 text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </motion.svg>
                  <motion.a
                    href="mailto:ssbenchmarkevents@gmail.com"
                    className="hover:text-gold"
                    whileHover={{ color: "#D4AF37", scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    ssbenchmarkevents@gmail.com
                  </motion.a>
                </motion.p>
                <motion.p
                  className="flex items-center"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.25 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                >
                  <motion.svg
                    className="w-5 h-5 mr-3 text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </motion.svg>
                  <motion.a
                    href="tel:+918004550986"
                    className="hover:text-gold"
                    whileHover={{ color: "#D4AF37", scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    +91 8004550986
                  </motion.a>
                </motion.p>
              </motion.div>
            </div>
            {/* Map */}
            <motion.div
              className="h-80 rounded-lg overflow-hidden shadow-lg relative"
              variants={scaleIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >

              <iframe
                title="Google Map - SS Benchmark Events"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Ganga Nagar Colony, Aalampura, Varanasi, Uttar Pradesh 221001&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="100%"
                className="border-0 w-full h-full"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={() => setMapLoaded(true)}
              ></iframe>
              {!mapLoaded && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-gray-200/80 z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                      ease: "linear",
                    }}
                    aria-label="Loading map"
                  />
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
        {/* WhatsApp Button */}
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15, delay: 1 }}
        >
          <motion.a
            href="https://wa.me/918004550986"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
            title="Chat with us on WhatsApp"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#25D366",
              boxShadow:
                "0 10px 25px -5px rgba(37, 211, 102, 0.5), 0 10px 10px -5px rgba(37, 211, 102, 0.3)",
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
