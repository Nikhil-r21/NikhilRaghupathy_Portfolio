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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto max-w-6xl px-4 py-6">
          <button
            onClick={handleBackClick}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors duration-200"
          >
            <Home size={16} className="mr-2" />
            Back to Home
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-4xl px-4 py-12">
        {/* Page Title */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <BookOpenCheck className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Terms of Use</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl">
            These Terms of Use govern your use of this portfolio website. By accessing or using the site, you agree to these terms.
          </p>
          <p className="text-sm text-gray-500 mt-2">Last updated: June 2025</p>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Contents</h2>
          <nav className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#section-${section.id}`}
                className="text-blue-600 hover:text-blue-700 hover:underline text-sm py-1"
              >
                {section.id}. {section.title}
              </a>
            ))}
          </nav>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {sections.map((section) => (
            <section
              key={section.id}
              id={`section-${section.id}`}
              className="scroll-mt-8"
            >
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <section.icon className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {section.id}. {section.title}
                  </h2>
                </div>
              </div>

              <div className="ml-14">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {section.content}
                </p>

                {section.items.length > 0 && (
                  <ul className="space-y-2 text-gray-700">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-blue-600 mr-3 mt-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfUse;
