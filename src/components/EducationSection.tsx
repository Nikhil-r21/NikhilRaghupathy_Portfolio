import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, MapPin, CalendarDays, Award } from 'lucide-react';
import { educationData, certificationData } from '../data/educationData';

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Education & Certifications</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My educational background and professional certifications in cloud and DevOps technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-center mb-8">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                <BookOpen size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Education</h3>
            </div>

            <div className="space-y-8">
              {educationData.map((item) => (
                <div 
                key={item.id} 
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-shadow"
              >
                <h4 className="font-bold text-lg text-gray-800 mb-2">{item.degree}</h4>
                <p className="text-blue-600 mb-2">{item.institution}</p>
                
                <div className="flex items-center text-gray-500 text-sm mb-1">
                  <CalendarDays size={14} className="mr-2" />
                  <span>{item.period}</span>
                </div>
                
                <div className="flex items-center text-gray-500 text-sm mb-1">
                  <MapPin size={14} className="mr-2" />
                  <span>{item.location}</span>
                </div>
                
                <div className="flex items-center text-gray-500 text-sm">
                  <Award size={14} className="mr-2" />
                  <span>CGPA: {item.grade}</span>
                </div>
              </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-center mb-8">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                <Award size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Certifications</h3>
            </div>

            <div className="space-y-6">
              {certificationData.map((cert) => (
                <motion.div 
                  key={cert.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center"
                >
                  <div className="w-32 h-32 flex-shrink-0 rounded-full overflow-hidden mb-4 sm:mb-0 sm:mr-6">
                    <img 
                      src={cert.image} 
                      alt={cert.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
         
                  <div className="flex-1 text-center sm:text-left">
                    <h4 className="font-bold text-lg text-gray-800 mb-1">{cert.name}</h4>
                    <p className="text-blue-600 mb-1">{cert.issuer}</p>

                    <div className="flex items-center justify-center sm:justify-start text-gray-500 text-sm mb-3">
                      <CalendarDays size={14} className="mr-2" />
                      <span>Issued: {cert.date}</span>
                    </div>

                    {cert.link && (
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-800 underline"
                      >
                        View Certificate
                      </a>
                    )}
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