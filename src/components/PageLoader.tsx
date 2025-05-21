import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const PageLoader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5 
      }
    },
    exit: { 
      opacity: 0,
      transition: { 
        duration: 0.5 
      }
    }
  };

  const ringVariants = {
    hidden: { opacity: 0, rotate: 0 },
    visible: { 
      opacity: 1,
      rotate: 360,
      transition: { 
        duration: 1.5,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        delay: 0.3
      }
    }
  };

  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-white flex items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="flex flex-col items-center">
        <div className="relative">
          <motion.div
            className="w-20 h-20 border-4 border-blue-100 rounded-full"
            variants={ringVariants}
            initial="hidden"
            animate="visible"
          ></motion.div>
          <motion.div
            className="w-20 h-20 border-t-4 border-blue-600 rounded-full absolute top-0 left-0"
            variants={ringVariants}
            initial="hidden"
            animate="visible"
          ></motion.div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-blue-600">
            NR
          </div>
        </div>
        <motion.p
          className="mt-4 text-gray-600"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Loading Portfolio...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default PageLoader;