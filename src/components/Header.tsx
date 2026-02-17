import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavStore } from '../store/useNavStore';
import { useModalStore } from '../store/useModalStore';
import { navLinks } from '../data/navData';

const Header: React.FC = () => {
  const { activeSection, isMenuOpen, toggleMenu, closeMenu, setActiveSection } = useNavStore();
  const { openFreelanceModal } = useModalStore();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    closeMenu();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-padding">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a 
            href="#home"
            className="text-2xl md:text-3xl font-bold flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              NR
            </span>
          </motion.a>

          {/* Desktop Navigation + Hire Me CTA */}
          <div className="hidden md:flex items-center gap-3">
            <nav className="flex items-center gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    activeSection === link.id
                      ? 'text-primary-600'
                      : 'text-neutral-700 hover:text-primary-600'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.id);
                  }}
                >
                  {link.title}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </nav>
            <motion.button
              type="button"
              onClick={() => {
                closeMenu();
                openFreelanceModal();
              }}
              className="ml-2 inline-flex items-center gap-2 px-4 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Hire Me - Get in touch"
            >
              <MessageCircle size={18} aria-hidden />
              Hire Me
            </motion.button>
          </div>

          {/* Mobile Menu Button - 44px touch target */}
          <button
            type="button"
            className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-white border-t border-neutral-200 shadow-lg"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="py-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`block px-6 py-3 text-base font-medium transition-colors ${
                    activeSection === link.id
                      ? 'text-primary-600 bg-primary-50 border-l-4 border-primary-600'
                      : 'text-neutral-700 hover:text-primary-600 hover:bg-neutral-50'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.id);
                  }}
                >
                  {link.title}
                </a>
              ))}
              <div className="px-6 py-4 border-t border-neutral-100">
                <button
                  type="button"
                  onClick={() => {
                    closeMenu();
                    openFreelanceModal();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                  aria-label="Hire Me"
                >
                  <MessageCircle size={20} aria-hidden />
                  Hire Me
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
