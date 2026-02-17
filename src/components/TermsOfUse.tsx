import { motion } from 'framer-motion';
import { Home, BookOpenCheck, ClipboardEdit, Ban, AlertTriangle, FileWarning, Mail } from 'lucide-react';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const TermsOfUse = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  const sections = [
    {
      id: 1,
      icon: BookOpenCheck,
      title: 'Acceptance of Terms',
      content:
        'By accessing and using this website, you accept and agree to be bound by these Terms of Use. If you do not agree, please do not use the site.',
      items: [],
    },
    {
      id: 2,
      icon: ClipboardEdit,
      title: 'Use License',
      content:
        'You are granted a limited license to access and make personal use of this site. You may not:',
      items: [
        'Modify or copy the materials',
        'Use the materials for commercial purposes',
        'Attempt to decompile or reverse engineer any software contained on the site',
        'Transfer the materials to another person or "mirror" them on any other server',
        'Remove any copyright or other proprietary notations',
      ],
    },
    {
      id: 3,
      icon: Ban,
      title: 'Prohibited Conduct',
      content:
        'You agree not to use the site in any way that:',
      items: [
        'Violates any applicable laws or regulations',
        'Infringes on the rights of others',
        'Attempts to gain unauthorized access to the site or server',
        'Interferes with or disrupts the operation of the site',
      ],
    },
    {
      id: 4,
      icon: AlertTriangle,
      title: 'Disclaimer',
      content:
        'The materials on this website are provided on an "as is" basis. No warranties, expressed or implied, are made. We disclaim all warranties, including merchantability and fitness for a particular purpose.',
      items: [],
    },
    {
      id: 5,
      icon: FileWarning,
      title: 'Limitation of Liability',
      content:
        'We are not liable for any damages arising out of the use or inability to use the materials on the site, including but not limited to loss of data or profit.',
      items: [],
    },
    {
      id: 6,
      icon: Mail,
      title: 'Contact Information',
      content:
        'If you have any questions about these Terms of Use, feel free to reach out via email at rnikhilvignesh21@gmail.com.',
      items: [],
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header - matches main site feel */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-lg border-b border-neutral-200 shadow-sm">
        <div className="container-padding py-4">
          <motion.button
            type="button"
            onClick={handleBackClick}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-primary-600 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors duration-200 min-h-[44px]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Home size={18} aria-hidden />
            Back to Home
          </motion.button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-padding py-12 sm:py-16">
        <div className="max-w-3xl mx-auto">
          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10 sm:mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-primary-100 rounded-xl">
                <BookOpenCheck className="w-7 h-7 sm:w-8 sm:h-8 text-primary-600" aria-hidden />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900">Terms of Use</h1>
            </div>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full mb-4" />
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              These Terms of Use govern your use of this portfolio website. By accessing or using the site, you agree to these terms.
            </p>
            <p className="text-sm text-neutral-500 mt-2">Last updated: February 2026</p>
          </motion.div>

          {/* Table of Contents */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white rounded-xl border border-neutral-200 shadow-sm p-5 sm:p-6 mb-10"
          >
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">Contents</h2>
            <nav className="grid grid-cols-1 sm:grid-cols-2 gap-2" aria-label="Page contents">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#section-${section.id}`}
                  className="text-primary-600 hover:text-primary-700 hover:bg-primary-50 rounded-lg px-3 py-2 text-sm font-medium transition-colors"
                >
                  {section.id}. {section.title}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-10 sm:space-y-12">
            {sections.map((section, index) => (
              <motion.section
                key={section.id}
                id={`section-${section.id}`}
                className="scroll-mt-24 bg-white rounded-xl border border-neutral-200 shadow-sm p-5 sm:p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 bg-primary-100 rounded-lg flex items-center justify-center">
                    <section.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" aria-hidden />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3">
                      {section.id}. {section.title}
                    </h2>
                    <p className="text-neutral-600 mb-4 leading-relaxed">
                      {section.content}
                    </p>
                    {section.items.length > 0 && (
                      <ul className="space-y-2 text-neutral-600">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <span className="text-primary-600 mt-1.5 shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfUse;
