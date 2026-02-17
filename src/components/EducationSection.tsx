import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, MapPin, CalendarDays, Award, ExternalLink } from 'lucide-react';
import { educationData, certificationData } from '../data/educationData';

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="section-padding bg-neutral-50">
      <div className="container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-3 sm:mb-4">
            Education & Certifications
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-4 sm:mb-6" />
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto px-2">
            Education and certifications in cloud and DevOps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary-600 text-white rounded-xl">
                <BookOpen size={24} />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900">Education</h3>
            </div>

            <div className="space-y-6">
              {educationData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md border-l-4 border-primary-600 hover:shadow-lg transition-all duration-300 card-hover"
                >
                  <h4 className="font-bold text-xl text-neutral-900 mb-2">{item.degree}</h4>
                  <p className="text-primary-600 font-semibold mb-4">{item.institution}</p>
                  
                  <div className="space-y-2 text-neutral-600">
                    <div className="flex items-center gap-2 text-sm">
                      <CalendarDays size={16} className="text-primary-600" />
                      <span>{item.period}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin size={16} className="text-primary-600" />
                      <span>{item.location}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <Award size={16} className="text-primary-600" />
                      <span className="font-semibold">CGPA: {item.grade}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-accent-600 text-white rounded-xl">
                <Award size={24} />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900">Certifications</h3>
            </div>

            <div className="space-y-6">
              {certificationData.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 card-hover"
                >
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-gradient-to-br from-primary-100 to-accent-100 p-2">
                      <img 
                        src={cert.image} 
                        alt={cert.name} 
                        className="w-full h-full object-cover rounded-lg" 
                      />
                    </div>
         
                    <div className="flex-1 text-center sm:text-left">
                      <h4 className="font-bold text-lg text-neutral-900 mb-1">{cert.name}</h4>
                      <p className="text-primary-600 font-semibold mb-3">{cert.issuer}</p>

                      <div className="flex items-center justify-center sm:justify-start gap-2 text-neutral-600 text-sm mb-4">
                        <CalendarDays size={16} className="text-primary-600" />
                        <span>Issued: {cert.date}</span>
                      </div>

                      {cert.link && (
                        <a 
                          href={cert.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 font-semibold"
                        >
                          View Certificate
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
