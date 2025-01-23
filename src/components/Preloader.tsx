import { motion } from 'framer-motion';

export function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      id="preloader"
      className="fixed inset-0 bg-dark flex items-center justify-center z-50"
    >
      <div className="relative">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
        />
        <motion.div
          animate={{
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-4 text-primary font-medium"
        >
          Loading...
        </motion.div>
      </div>
    </motion.div>
  );
}