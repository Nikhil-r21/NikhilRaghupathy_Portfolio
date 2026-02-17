import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import ResumeModal from './ResumeModal';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  
  const strings = [
    "DevOps Engineer",
    "Cloud Infrastructure & Platform Engineering",
    "AWS Certified Cloud Practitioner",
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const currentString = strings[currentStringIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentString.length) {
          setTypedText(currentString.slice(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(typedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentStringIndex((prev) => (prev + 1) % strings.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [typedText, currentStringIndex, isDeleting]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-br from-white via-primary-50/30 to-accent-50/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-100/10 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="container-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            className="text-center lg:text-left space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-primary-100 text-primary-700 rounded-full text-xs sm:text-sm font-semibold mb-4"
            >
              <Sparkles size={14} className="text-primary-600 sm:w-4 sm:h-4" />
              <span className="truncate max-w-[200px] sm:max-w-none">3 Years Experience • Open to DevOps Opportunities</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Hi, I'm{' '}
              <span className="text-primary-600">Nikhil</span>
              <br />
              <span className="text-neutral-800">Raghupathy</span>
            </motion.h1>
            
            {/* Typed Text */}
            <motion.div 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-neutral-700 mb-2 min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <span className="font-semibold">
                {typedText}
                <motion.span 
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                  className="inline-block ml-2 text-primary-600 font-bold"
                >
                  |
                </motion.span>
              </span>
            </motion.div>
            
            {/* Description */}
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-neutral-600 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Building scalable cloud infrastructure and automating workflows at{' '}
              <span className="font-semibold text-neutral-900">CrashPlan</span>. 
              Transforming complex systems into efficient, resilient solutions.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <motion.a 
                href="#projects"
                className="group inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>View Projects</span>
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.button
                type="button"
                onClick={() => setIsResumeModalOpen(true)}
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-neutral-900 font-semibold rounded-xl border-2 border-neutral-200 hover:border-primary-300 shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>View Resume</span>
              </motion.button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-neutral-900">3+</div>
                <div className="text-sm text-neutral-600">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-neutral-900">6+</div>
                <div className="text-sm text-neutral-600">Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-neutral-900">AWS</div>
                <div className="text-sm text-neutral-600">Certified</div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Profile Image */}
          <motion.div 
            className="flex justify-center lg:justify-end relative"
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={isVisible ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
          >
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary-200/30 rounded-full blur-2xl animate-pulse-slow" />
              <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-accent-200/30 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
              
              {/* Profile image container - tries /profile.jpg first, then LinkedIn, then avatar */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-primary-100 to-accent-100">
                <img 
                  src="/profile.jpg"
                  alt="Nikhil Raghupathy - DevOps Engineer" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.dataset.fallback) {
                      target.dataset.fallback = '1';
                      target.src = 'https://media.licdn.com/dms/image/v2/D5603AQHbq6G5DzE1iA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724775021779?e=1754524800&v=beta&t=cKP75sRP2Ly0UyW_G1kgxpJrZ_QSfIZE4VKWcnHIzw8';
                    } else {
                      target.src = 'https://ui-avatars.com/api/?name=Nikhil+Raghupathy&size=400&background=0284c7&color=fff&bold=true&font-size=0.5';
                      target.onerror = null;
                    }
                  }}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>
              
              {/* Status badge */}
              <motion.div 
                className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-3 h-3 bg-white rounded-full" />
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
      <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
    </section>
  );
};

export default HeroSection;
