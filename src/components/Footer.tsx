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

  const MediumIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1043.63 592.71"
      className="h-5 w-5"
      fill="currentColor"
    >
      <g>
        <path d="M588.67 296.28c0 163.7-131.27 296.3-293.67 296.3S1.33 460 1.33 296.28 132.6 0 295 0s293.67 132.57 293.67 296.28" />
        <path d="M747.33 296.28c0 152.2-65.25 275.57-145.75 275.57s-145.75-123.37-145.75-275.57S521.08 20.72 601.58 20.72s145.75 123.36 145.75 275.56" />
        <path d="M1043.63 296.28c0 139.2-29.1 252.05-65 252.05s-65-112.85-65-252.05 29.1-252.05 65-252.05 65 112.86 65 252.05" />
      </g>
    </svg>
  );
  
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
      icon: <MediumIcon />,
      href: "https://medium.com/@rnikhilvignesh21",
      label: "Medium"
    },
    {
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/niktheenigma/",
      label: "Instagram"
    }
  ];

  const quickLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "https://medium.com/@rnikhilvignesh21", label: "Blog" }
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
              Bengaluru, Karnataka, India
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
