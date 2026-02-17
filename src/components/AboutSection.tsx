import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Calendar, Briefcase, Award, Code, Cloud, Zap } from 'lucide-react';

const AboutSection: React.FC = () => {
  const socialLinks = [
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/nikhilraghupathy/', label: 'LinkedIn' },
    { icon: <Github size={20} />, url: 'https://github.com/Nikhil-r21', label: 'GitHub' },
    { icon: <Mail size={20} />, url: 'mailto:rnikhilvignesh21@gmail.com', label: 'Email' },
  ];

  const stats = [
    {
      icon: <Calendar className="w-6 h-6" />,
      value: "3+",
      label: "Years Experience",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      value: "6+",
      label: "Projects Completed",
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: "AWS",
      label: "Certified Cloud Practitioner",
    }
  ];

  const highlights = [
    { icon: <Cloud size={24} />, text: "Cloud Infrastructure" },
    { icon: <Code size={24} />, text: "CI/CD Automation" },
    { icon: <Zap size={24} />, text: "DevOps Best Practices" },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-3 sm:mb-4">
            About Me
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-4 sm:mb-6" />
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto px-2">
            Passionate DevOps Engineer building scalable, efficient cloud solutions
          </p>
        </motion.div>
        
        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* About Text */}
          <motion.div 
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-100">
              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                Hello! I'm <span className="font-bold text-primary-600">Nikhil Raghupathy</span>, a DevOps Engineer with{' '}
                <span className="font-bold text-primary-600">3 years</span> of experience specializing in cloud infrastructure, 
                automation, and containerization technologies.
              </p>
              
              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                Currently working at <span className="font-semibold text-neutral-900">CrashPlan</span>, 
                I design and implement scalable cloud solutions on <span className="font-semibold">Azure</span> and{' '}
                <span className="font-semibold">AWS</span> platforms, helping organizations optimize their infrastructure 
                for performance and cost-efficiency.
              </p>
              
              <p className="text-lg text-neutral-700 leading-relaxed">
                My expertise includes building CI/CD pipelines that <span className="font-semibold text-primary-600">reduced deployment times by 40%</span>, 
                implementing Infrastructure as Code with Terraform, and managing containerized applications with Docker. 
                I'm passionate about automating workflows and building resilient systems that scale seamlessly.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid md:grid-cols-3 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="bg-white rounded-xl p-6 border border-neutral-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 card-hover"
                >
                  <div className="text-primary-600 mb-3">{highlight.icon}</div>
                  <p className="font-semibold text-neutral-800">{highlight.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats & Social */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {/* Stats Cards - filled, unified look */}
            <div className="space-y-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="bg-gradient-to-br from-primary-50 to-primary-100/80 rounded-xl p-6 border border-primary-200/60 shadow-md hover:shadow-lg hover:from-primary-100 hover:to-primary-200/60 transition-all duration-300 card-hover"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-3 bg-primary-600 text-white rounded-xl shadow-sm">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-neutral-900 mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-primary-800/90">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-4">Connect With Me</h3>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white hover:bg-primary-600 text-neutral-700 hover:text-white p-3 rounded-lg border border-neutral-200 hover:border-primary-600 transition-all duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
