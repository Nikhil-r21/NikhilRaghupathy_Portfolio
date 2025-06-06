import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experienceData } from '../data/experienceData';

const formatPeriod = (period: string) => {
  if (period.includes('Present')) {
    const parts = period.split(' – ');
    return (
      <span className="flex items-center gap-2 flex-wrap">
        {parts[0]} – 
        <span className="flex items-center gap-1 text-emerald-700 bg-emerald-100 px-3 py-0.5 rounded-full font-medium shadow-sm animate-pulse">
          Present
        </span>
      </span>
    );
  }
  return <span>{period}</span>;
};

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey in cloud computing and DevOps engineering.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

          {/* Experience Items */}
          {experienceData.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`mb-12 md:mb-0 flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className="md:w-1/2 p-4 md:p-8">
                <div className={`bg-white rounded-lg shadow-md p-6 mx-4 ${
                  index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                }`}>
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-2 rounded-full text-blue-600 mr-4">
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-800">{experience.role}</h3>
                      <p className="text-blue-600">{experience.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4 text-gray-500 gap-6">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      <span>{formatPeriod(experience.period)}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                  
                  <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                    {experience.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {experience.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Timeline Point - Mobile */}
              <div className="md:hidden flex items-center mb-4">
                <div className="bg-blue-600 rounded-full w-4 h-4"></div>
                <div className="flex-1 h-0.5 bg-blue-200 ml-2"></div>
              </div>
              
              {/* Timeline Point - Desktop */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full">
                <div className="w-3 h-3 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
              
              {/* Empty Space for Alternate Layout */}
              <div className="hidden md:block md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;