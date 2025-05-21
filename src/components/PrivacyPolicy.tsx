import React from 'react';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer'; // Import the Footer component

const PrivacyPolicy: React.FC = () => {
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
          
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Privacy Policy</h1>
          <div className="bg-white rounded-lg shadow-md p-8">
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We collect information you provide directly to us when using the contact form or freelance inquiry form, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 ml-4">
                <li>Name</li>
                <li>Email address</li>
                <li>Project details</li>
                <li>Any other information you choose to provide</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-600 ml-4">
                <li>Respond to your inquiries</li>
                <li>Provide the services you request</li>
                <li>Send you technical notices and support messages</li>
                <li>Communicate with you about products, services, and events</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Information Sharing</h2>
              <p className="text-gray-600">
                We do not share your personal information with any third parties except as described in this privacy policy or with your explicit consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Data Security</h2>
              <p className="text-gray-600">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please contact us at privacy@example.com.
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

export default PrivacyPolicy;