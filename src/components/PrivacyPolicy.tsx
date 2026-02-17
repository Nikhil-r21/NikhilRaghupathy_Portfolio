import { motion } from 'framer-motion';
import { Home, Shield, Info, Users, Lock, Mail, FileText } from 'lucide-react';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  const sections = [
    {
      id: 1,
      icon: Info,
      title: 'Information I Collect',
      content:
        'I collect information you provide directly when you use this site — typically through the contact form or project inquiries:',
      items: [
        'Personal identifiers (name, email address)',
        'Project requirements and specifications',
        'Communication preferences',
        'Professional information relevant to your inquiry',
      ],
    },
    {
      id: 2,
      icon: Users,
      title: 'How I Use Your Information',
      content: 'I process your information for the following purposes:',
      items: [
        'To respond to your inquiries and service requests',
        'To provide and deliver the services you request',
        'To send important service-related communications',
        'To improve the quality and usability of this site',
      ],
    },
    {
      id: 3,
      icon: Shield,
      title: 'Information Sharing and Disclosure',
      content:
        'Your personal information is never sold, rented, or shared with third parties, except when required by law or with your explicit consent.',
      items: [],
    },
    {
      id: 4,
      icon: Lock,
      title: 'Data Security and Protection',
      content:
        'I use reasonable security measures to protect your information, including encryption, secure transmission, and routine security reviews. However, no online system is 100% secure.',
      items: [],
    },
    {
      id: 5,
      icon: FileText,
      title: 'Data Retention',
      content:
        'I retain your personal data only as long as needed to fulfill the purposes mentioned above or to meet legal obligations.',
      items: [],
    },
    {
      id: 6,
      icon: Mail,
      title: 'Contact Information',
      content:
        'If you have any questions about this Privacy Policy or how your data is handled, feel free to reach out via email at rnikhilvignesh21@gmail.com.',
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
                <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-primary-600" aria-hidden />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900">Privacy Policy</h1>
            </div>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full mb-4" />
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              This Privacy Policy explains how I collect, use, and safeguard your information when you use my portfolio website.
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

export default PrivacyPolicy;
