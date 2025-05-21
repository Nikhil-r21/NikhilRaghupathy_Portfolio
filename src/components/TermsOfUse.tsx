import React from 'react';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer'; // Import the Footer component

const TermsOfUse: React.FC = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  
  return (
    <div className="flex flex-col min-h-screen">
      <motion.div 
        className="flex-grow bg-gray-50 py-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto max-w-3xl">
          <div className="mb-6">
            <motion.button
              onClick={() => navigate('/')}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Home size={20} className="mr-2" />
              Back to Home
            </motion.button>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Terms of Use</h1>
          <div className="bg-white rounded-lg shadow-md p-8">
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Use License</h2>
              <p className="text-gray-600 mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on this website for personal, non-commercial transitory viewing only.
              </p>
              <p className="text-gray-600">
                This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-600 ml-4 mt-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Disclaimer</h2>
              <p className="text-gray-600">
                The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Limitations</h2>
              <p className="text-gray-600">
                In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Contact Information</h2>
              <p className="text-gray-600">
                If you have any questions about these Terms of Use, please contact us at terms@example.com.
              </p>
            </section>
          </div>
        </div>
      </motion.div>
      
      {/* Add the Footer component at the bottom */}
      <Footer />
    </div>
  );
};

export default TermsOfUse;