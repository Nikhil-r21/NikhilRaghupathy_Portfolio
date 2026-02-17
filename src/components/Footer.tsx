import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../data/navData';
import { ChevronUp, Mail, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-neutral-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container-padding py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-12">
          {/* Brand & Description */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Nikhil Raghupathy
              </span>
            </h3>
            <p className="text-neutral-400 mb-6 max-w-md leading-relaxed">
              DevOps Engineer with 3 years of experience building scalable cloud infrastructure 
              and automating workflows. Currently at CrashPlan, specializing in Azure and AWS platforms.
            </p>
            <div className="flex gap-3">
              <motion.a
                href="https://www.linkedin.com/in/nikhilraghupathy/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-neutral-800 hover:bg-primary-600 rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="https://github.com/Nikhil-r21"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-neutral-800 hover:bg-primary-600 rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="mailto:rnikhilvignesh21@gmail.com"
                className="p-3 bg-neutral-800 hover:bg-primary-600 rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Email"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.id);
                    }}
                    className="text-neutral-400 hover:text-primary-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-neutral-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-400 mt-1 flex-shrink-0" />
                <span>Bengaluru, Karnataka, India</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-primary-400 mt-1 flex-shrink-0" />
                <a
                  href="mailto:rnikhilvignesh21@gmail.com"
                  className="hover:text-primary-400 transition-colors"
                >
                  rnikhilvignesh21@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 my-8"></div>

        {/* Copyright */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} <span className="text-primary-400 font-semibold">Nikhil Raghupathy</span>. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="/privacy-policy"
              className="text-neutral-400 hover:text-primary-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-use"
              className="text-neutral-400 hover:text-primary-400 transition-colors"
            >
              Terms of Use
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button - appears after scrolling */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            type="button"
            onClick={handleScrollToTop}
            className="fixed right-5 sm:right-6 bottom-5 sm:bottom-6 z-40 flex items-center gap-2 pl-2 pr-4 sm:pl-3 sm:pr-5 py-2.5 sm:py-3 min-h-[48px] bg-white text-neutral-800 font-semibold rounded-full shadow-lg hover:shadow-xl border border-neutral-200 hover:border-primary-300 transition-all duration-300 group"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            aria-label="Scroll to top"
          >
            <span className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-inner group-hover:from-primary-700 group-hover:to-primary-800 transition-colors">
              <ChevronUp size={20} className="sm:w-5 sm:h-5" aria-hidden />
            </span>
            <span className="hidden sm:inline text-sm">Back to top</span>
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
