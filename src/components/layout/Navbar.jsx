import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
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
      className={`w-full z-50 top-0 ${isSticky ? 'fixed bg-white mb-16 shadow-md' : 'absolute bg-transparent'}`}
    >
      <nav className="flex items-center justify-between px-8 py-4 mb-5 max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center"
        >
          <Link to="/">
            <img
              src="/assets/images/logo/logo.png"
              alt="SSBenchmark Logo"
              className="h-12 md:h-16 lg:h-20 w-auto object-contain drop-shadow-lg"
            />
          </Link>
        </motion.div>

        {/* Nav Links (Desktop) */}
        <motion.ul 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`hidden md:flex gap-10 font-bold text-2xl ${isSticky ? 'text-gray-700' : 'text-white'}`}
        >
          {NAV_LINKS.map((item, index) => (
            <motion.li 
              key={item.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index + 0.4 }}
            >
              <motion.span whileHover={{ scale: 1.05 }} className="relative group transition-colors duration-300 hover:text-blue-600">
                <Link to={item.to} className="group-hover:text-gold transition-transform duration-300 inline-block">
                  {item.label}
                </Link>
                <motion.span 
                  className="absolute left-0 -bottom-1 w-full h-1 bg-gradient-to-r from-blue-400 to-gold rounded-full origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                ></motion.span>
              </motion.span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          whileTap={{ scale: 0.9 }}
          className={`md:hidden flex items-center justify-center text-3xl focus:outline-none ${isSticky ? 'text-gray-800' : 'text-white'}`}
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
                      <motion.span whileHover={{ scale: 1.05, color: "#D4AF37" }} whileTap={{ scale: 0.95 }} className="relative group block py-2 px-6 w-full text-center">
                        <Link to={item.to} className="inline-block" onClick={() => setMenuOpen(false)}>
                          {item.label}
                        </Link>
                        <motion.span 
                          className="absolute left-1/2 -bottom-1 w-2/3 h-0.5 bg-gradient-to-r from-gold via-yellow-400 to-gold rounded-full origin-center"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        ></motion.span>
                      </motion.span>
                    </motion.li>
                  ))}
                </motion.ul>
                
                {/* Removed Social Icons from Mobile Menu */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  );
   
}

export default Navbar;
