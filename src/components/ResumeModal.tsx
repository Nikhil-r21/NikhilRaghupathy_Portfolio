import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleDownload = () => {
    setIsDownloading(true);
    const link = document.createElement('a');
    link.href = '/Nikhil_Raghupathy_DevOps_Engineer.pdf';
    link.download = 'Nikhil_Raghupathy_DevOps_Engineer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsDownloading(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white w-full h-full sm:h-auto sm:max-h-[90vh] sm:max-w-4xl sm:rounded-2xl sm:w-full overflow-hidden shadow-2xl flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-neutral-200 bg-neutral-50">
                <h2 className="text-lg sm:text-xl font-bold text-neutral-900">Resume</h2>
                <div className="flex items-center gap-3">
                  <motion.button
                    type="button"
                    onClick={handleDownload}
                    disabled={isDownloading}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors min-h-[44px] disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download size={18} aria-hidden />
                    <span className="hidden sm:inline">{isDownloading ? 'Downloading...' : 'Download'}</span>
                    <span className="sm:hidden">Download</span>
                  </motion.button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="min-w-[44px] min-h-[44px] flex items-center justify-center text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100 rounded-lg transition-colors"
                    aria-label="Close"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="flex-1 overflow-auto bg-neutral-100">
                <iframe
                  src="/Nikhil_Raghupathy_DevOps_Engineer.pdf"
                  className="w-full h-full min-h-[600px] border-0"
                  title="Resume PDF Viewer"
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
