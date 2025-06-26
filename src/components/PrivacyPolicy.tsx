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
      title: "Information I Collect",
      content:
        "I collect information you provide directly when you use this site — typically through the contact form or project inquiries:",
      items: [
        "Personal identifiers (name, email address)",
        "Project requirements and specifications",
        "Communication preferences",
        "Professional information relevant to your inquiry",
      ],
    },
    {
      id: 2,
      icon: Users,
      title: "How I Use Your Information",
      content: "I process your information for the following purposes:",
      items: [
        "To respond to your inquiries and service requests",
        "To provide and deliver the services you request",
        "To send important service-related communications",
        "To improve the quality and usability of this site",
      ],
    },
    {
      id: 3,
      icon: Shield,
      title: "Information Sharing and Disclosure",
      content:
        "Your personal information is never sold, rented, or shared with third parties, except when required by law or with your explicit consent.",
      items: [],
    },
    {
      id: 4,
      icon: Lock,
      title: "Data Security and Protection",
      content:
        "I use reasonable security measures to protect your information, including encryption, secure transmission, and routine security reviews. However, no online system is 100% secure.",
      items: [],
    },
    {
      id: 5,
      icon: FileText,
      title: "Data Retention",
      content:
        "I retain your personal data only as long as needed to fulfill the purposes mentioned above or to meet legal obligations.",
      items: [],
    },
    {
      id: 6,
      icon: Mail,
      title: "Contact Information",
      content:
        "If you have any questions about this Privacy Policy or how your data is handled, feel free to reach out via email at rnikhilvignesh21@gmail.com.",
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
            <Shield className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl">
            This Privacy Policy explains how I collect, use, and safeguard your information when you use my portfolio website.
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
              id={`#section-${section.id}`}
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

export default PrivacyPolicy;
