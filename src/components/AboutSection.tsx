import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Calendar, Briefcase, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  const socialLinks = [
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/nikhilraghupathy/' },
    { icon: <Github size={20} />, url: 'https://github.com/Nikhil-r21' },
    { icon: <Mail size={20} />, url: 'mailto:rnikhilvignesh21@gmail.com' },
  ];

  const stats = [
    {
      icon: <Calendar className="w-6 h-6" />,
      value: "2 Years",
      label: "Experience"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      value: "Completed",
      label: "6 Projects"
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: "AWS Certified",
      label: "Cloud Practitioner"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>
        
        {/* Centered Content */}
        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="space-y-4 text-gray-600">
            <p>
              Hello! I'm Nikhil Raghupathy, a passionate DevOps Engineer with a strong foundation in AWS cloud services and containerization technologies. Having recently earned my AWS Cloud Practitioner certification, I'm dedicated to building scalable, resilient, and automated infrastructure solutions.
            </p>
            
            <p>
              My journey into the world of DevOps began during my computer science studies when I discovered the power of automation and infrastructure as code. Since then, I've been committed to mastering the tools and practices that enable continuous integration and delivery.
            </p>
            
            <p>
              I thrive in collaborative environments where I can contribute to improving deployment pipelines, containerizing applications, and implementing cloud-native architectures. My goal is to help organizations leverage cloud technologies to achieve greater efficiency, reliability, and security.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-4 mt-8">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-200 hover:bg-blue-600 hover:text-white p-3 rounded-full transition-colors"
                aria-label="Social media link"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </motion.div>
        
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-20"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                viewport={{ once: true }}
                className="relative overflow-hidden bg-white rounded-lg shadow-lg p-4 border-t-4 border-blue-600 hover:transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-blue-100 rounded-full mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{stat.value}</h3>
                  <p className="text-blue-600 font-medium mb-2">{stat.label}</p>
                </div>
                <div className="absolute -bottom-2 -right-2 h-16 w-16 bg-blue-50 rounded-full opacity-30"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;