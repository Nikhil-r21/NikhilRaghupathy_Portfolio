import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import { useModalStore } from '../store/useModalStore';

const FloatingHireMeButton: React.FC = () => {
  const { openFreelanceModal } = useModalStore();

  return (
    <motion.button
      className="fixed z-50 shadow-lg rounded-full overflow-hidden floating-hire-me-button"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.5,
        type: 'spring',
        stiffness: 200,
        damping: 10
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={openFreelanceModal}
      aria-label="Hire Me"
    >
      <div className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-5 flex items-center transition-colors duration-300">
        <span className="mr-2">Hire Me</span>
        <Rocket size={18} />
      </div>
    </motion.button>
  );
};

export default FloatingHireMeButton;