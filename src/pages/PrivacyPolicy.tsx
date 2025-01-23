import { motion } from 'framer-motion';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-dark py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 max-w-4xl"
      >
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2>1. Information We Collect</h2>
          <p>
            We collect information that you voluntarily provide to us when you use our contact form,
            including your name and email address.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul>
            <li>Respond to your inquiries</li>
            <li>Send you updates about our services (with your consent)</li>
            <li>Improve our website and services</li>
          </ul>

          <h2>3. Information Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal
            information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2>4. Third-Party Services</h2>
          <p>
            We may use third-party services to analyze website traffic and optimize your experience.
            These services may collect information about your use of our website.
          </p>

          <h2>5. Your Rights</h2>
          <p>
            You have the right to:
          </p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Withdraw your consent at any time</li>
          </ul>

          <h2>6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
            rnikhilvignesh21@gmail.com
          </p>
        </div>
      </motion.div>
    </div>
  );
}