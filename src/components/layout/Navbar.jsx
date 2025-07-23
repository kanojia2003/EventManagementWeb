import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];


const SOCIALS = [
  {
    href: "https://instagram.com",
    label: "Instagram",
    svg: (
      <svg className="w-5 h-5 hover:text-pink-500 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.425 3.678 1.406c-.98.98-1.274 2.092-1.334 3.374C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.612.06 1.282.354 2.394 1.334 3.374.98.98 2.092 1.274 3.374 1.334C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.282-.06 2.394-.354 3.374-1.334.98-.98 1.274-2.092 1.334-3.374.059-1.28.072-1.689.072-7.612 0-5.923-.013-6.332-.072-7.612-.06-1.282-.354-2.394-1.334-3.374-.98-.98-2.092-1.274-3.374-1.334C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
      </svg>
    ),
  },
  {
    href: "https://facebook.com",
    label: "Facebook",
    svg: (
      <svg className="w-5 h-5 hover:text-blue-600 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
      </svg>
    ),
  },
  {
    href: "https://youtube.com",
    label: "YouTube",
    svg: (
      <svg className="w-5 h-5 hover:text-red-600 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.498 6.186a2.994 2.994 0 00-2.107-2.117C19.612 3.5 12 3.5 12 3.5s-7.612 0-9.391.569A2.994 2.994 0 00.502 6.186C0 7.965 0 12 0 12s0 4.035.502 5.814a2.994 2.994 0 002.107 2.117C4.388 20.5 12 20.5 12 20.5s7.612 0 9.391-.569a2.994 2.994 0 002.107-2.117C24 16.035 24 12 24 12s0-4.035-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    svg: (
      <svg className="w-5 h-5 hover:text-blue-800 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" clipRule="evenodd" />
      </svg>
    ),
  },
];

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full z-50 top-0 ${isSticky ? 'fixed bg-white shadow-md' : 'absolute bg-transparent'}`}
    >
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl font-bold text-gray-800"
        >
          SSBenchmark
        </motion.div>

        {/* Nav Links (Desktop) */}
        <motion.ul 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden md:flex gap-8 text-gray-700 font-medium"
        >
          {NAV_LINKS.map((item, index) => (
            <motion.li 
              key={item.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index + 0.4 }}
            >
              <motion.a
                href={item.href}
                className="relative group transition-colors duration-300 hover:text-blue-600"
                whileHover={{ scale: 1.05 }}
              >
                <span className="group-hover:text-gold transition-transform duration-300 inline-block">
                  {item.label}
                </span>
                <motion.span 
                  className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-blue-400 to-gold rounded-full origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                ></motion.span>
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Social Icons (Desktop) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="hidden md:flex gap-4 text-gray-700 text-lg"
        >
          {SOCIALS.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="group relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 * index + 0.6 }}
              whileHover={{ scale: 1.2 }}
            >
              <span className="group-hover:text-gold transition-colors duration-300 inline-block">
                {item.svg}
              </span>
              <motion.span 
                className="absolute left-1/2 -bottom-2 w-4 h-1 bg-gradient-to-r from-pink-400 via-blue-400 to-gold rounded-full origin-center"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              ></motion.span>
            </motion.a>
          ))}
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden flex items-center justify-center text-gray-800 text-3xl focus:outline-none"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </motion.button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-black/60"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="h-full w-full"
            >
              {/* Close Button at Top Right with Padding */}
              <motion.button
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                whileHover={{ scale: 1.1, color: "#D4AF37" }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 text-white text-3xl focus:outline-none p-2"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Centered Content */}
              <div className="flex flex-col items-center justify-center min-h-screen pt-16 px-6">
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mb-8"
                >
                  <motion.div 
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.4,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="text-3xl font-bold text-white text-center tracking-wide drop-shadow-lg"
                  >
                    SSBenchmark
                  </motion.div>
                </motion.div>
                
                <motion.ul 
                  className="flex flex-col gap-8 text-white text-2xl font-semibold w-full items-center"
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.5
                      }
                    }
                  }}
                  initial="hidden"
                  animate="show"
                >
                  {NAV_LINKS.map((item, index) => (
                    <motion.li 
                      key={item.label} 
                      className="w-full"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0 }
                      }}
                    >
                      <motion.a
                        href={item.href}
                        className="relative group block py-2 px-6 w-full text-center"
                        onClick={() => setMenuOpen(false)}
                        whileHover={{ scale: 1.05, color: "#D4AF37" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="inline-block">
                          {item.label}
                        </span>
                        <motion.span 
                          className="absolute left-1/2 -bottom-1 w-2/3 h-0.5 bg-gradient-to-r from-gold via-yellow-400 to-gold rounded-full origin-center"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        ></motion.span>
                      </motion.a>
                    </motion.li>
                  ))}
                </motion.ul>
                
                <motion.div 
                  className="flex gap-8 mt-12 text-3xl"
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.8
                      }
                    }
                  }}
                  initial="hidden"
                  animate="show"
                >
                  {SOCIALS.map((item, index) => (
                    <motion.span 
                      key={item.label}
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        show: { opacity: 1, scale: 1 }
                      }}
                    >
                      <motion.a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                        className="group relative"
                        whileHover={{ scale: 1.2, color: "#D4AF37" }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <span className="inline-block">
                          {item.svg}
                        </span>
                        <motion.span 
                          className="absolute left-1/2 -bottom-2 w-6 h-1 bg-gradient-to-r from-pink-400 via-blue-400 to-gold rounded-full origin-center"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        ></motion.span>
                      </motion.a>
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  );
   
}

export default Navbar;
