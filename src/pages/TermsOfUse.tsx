import { motion } from 'framer-motion';

export function TermsOfUse() {
  return (
    <div className="min-h-screen bg-dark py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 max-w-4xl"
      >
        <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
        
        <div className="prose prose-invert max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms and
            provision of this agreement.
          </p>

          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily view the materials (information or software) on this
            website for personal, non-commercial transitory viewing only.
          </p>

          <h2>3. Disclaimer</h2>
          <p>
            The materials on this website are provided on an 'as is' basis. We make no warranties,
            expressed or implied, and hereby disclaim and negate all other warranties including,
            without limitation, implied warranties or conditions of merchantability, fitness for a
            particular purpose, or non-infringement of intellectual property or other violation of
            rights.
          </p>

          <h2>4. Limitations</h2>
          <p>
            In no event shall we or our suppliers be liable for any damages (including, without
            limitation, damages for loss of data or profit, or due to business interruption) arising
            out of the use or inability to use the materials on this website.
          </p>

          <h2>5. Revisions</h2>
          <p>
            We may revise these terms of use at any time without notice. By using this website, you
            agree to be bound by the current version of these terms of service.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            If you have any questions about these Terms of Use, please contact us at:
            rnikhilvignesh21@gmail.com
          </p>
        </div>
      </motion.div>
    </div>
  );
}