import { motion } from 'framer-motion';
import { 
  Linkedin, 
  Github, 
  Mail, 
  Instagram,
  Newspaper,
  ChevronRight,
  MapPin
} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/nikhilraghupathy",
      label: "LinkedIn"
    },
    {
      icon: <Github size={20} />,
      href: "https://github.com/Nikhil-r21",
      label: "GitHub"
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:rnikhilvignesh21@gmail.com",
      label: "Email"
    },
    {
      icon: <Newspaper size={20} />,
      href: "https://cloudtrailblazer.blogspot.com/",
      label: "Blog"
    },
    {
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/niktheenigma/",
      label: "Instagram"
    },
    {
      icon: <FontAwesomeIcon icon={faXTwitter} size="lg" />,
      href: "https://x.com/NikhilR31569448",
      label: "Twitter"
    }
  ];

  const quickLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "https://cloudtrailblazer.blogspot.com/", label: "Blog" }
  ];

  return (
    <footer className="bg-dark-lighter pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">About Me</h4>
            <p className="text-light-darker">
              Cloud enthusiast and Jr. DevOps Engineer passionate about creating innovative cloud solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 text-light-darker hover:text-primary transition-colors"
                  >
                    <ChevronRight size={16} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-light-darker">
            <p className="flex items-center gap-2">
              <Mail size={16} className="text-primary" />
              rnikhilvignesh21@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              Chennai, Tamil Nadu, India
            </p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Stay In Touch</h4>
            <div className="flex space-x-2">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="min-w-[40px] min-h-[40px] rounded-full bg-dark flex items-center justify-center text-light-darker hover:text-primary hover:bg-dark-lighter transition-colors"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-light-darker text-sm">
              © {currentYear} Nikhil Raghupathy. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="./pages/PrivacyPolicy"
                className="text-light-darker hover:text-primary transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <span className="text-light-darker">•</span>
              <a
                href="./pages/TermsOfUse"
                className="text-light-darker hover:text-primary transition-colors text-sm"
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}