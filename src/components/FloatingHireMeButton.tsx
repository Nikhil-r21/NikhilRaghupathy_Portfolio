import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import { useModalStore } from '../store/useModalStore';

const FloatingHireMeButton: React.FC = () => {
  const { openFreelanceModal } = useModalStore();

  return (
    <motion.button
      type="button"
      className="fixed z-40 shadow-xl rounded-full overflow-hidden floating-hire-me-button min-h-[48px] min-w-[48px] sm:min-h-[52px] sm:min-w-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        type: 'spring',
        stiffness: 200,
        damping: 10,
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={openFreelanceModal}
      aria-label="Hire Me - Get in touch"
    >
      <div className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-4 sm:px-5 flex items-center justify-center gap-2 transition-colors duration-300 text-sm sm:text-base">
        <span>Hire Me</span>
        <Rocket size={18} aria-hidden />
      </div>
    </motion.button>
  );
};

export default FloatingHireMeButton;