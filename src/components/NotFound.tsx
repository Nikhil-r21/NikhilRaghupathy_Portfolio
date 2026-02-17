import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-primary-50/20 to-accent-50/20 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* 404 Number with animation */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        >
          <h1 className="text-8xl sm:text-9xl font-bold bg-gradient-to-r from-primary-600 via-accent-600 to-primary-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient mb-4">
            404
          </h1>
        </motion.div>

        {/* Error Message */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-lg mx-auto">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.button
            onClick={handleGoHome}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl min-h-[48px]"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Home size={20} aria-hidden />
            Go to Homepage
          </motion.button>
          <motion.button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-neutral-700 font-semibold rounded-xl border-2 border-neutral-200 hover:border-primary-300 transition-colors shadow-md hover:shadow-lg min-h-[48px]"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <ArrowLeft size={20} aria-hidden />
            Go Back
          </motion.button>
        </motion.div>

        {/* Helpful Suggestions */}
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-xl border border-neutral-200 p-6 sm:p-8 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-2 mb-4 justify-center">
            <Search size={20} className="text-primary-600" />
            <h3 className="text-lg font-semibold text-neutral-900">What you can do:</h3>
          </div>
          <ul className="text-left max-w-md mx-auto space-y-2 text-neutral-600">
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span>Check the URL for typos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span>Use the navigation menu to explore</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span>Visit the homepage to start fresh</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 mt-1">•</span>
              <span>Contact me if you need assistance</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
