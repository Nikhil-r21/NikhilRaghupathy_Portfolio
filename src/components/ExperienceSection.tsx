import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { experienceData } from '../data/experienceData';

const formatPeriod = (period: string) => {
  if (period.includes('Present')) {
    const parts = period.split(' – ');
    return (
      <span className="flex items-center gap-2 flex-wrap">
        {parts[0]} – 
        <span className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Present
        </span>
      </span>
    );
  }
  return <span>{period}</span>;
};

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="section-padding bg-white">
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
            Work Experience
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-4 sm:mb-6" />
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto px-2">
            My journey in cloud computing and DevOps
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200" />

          {/* Experience Items */}
          <div className="space-y-8">
            {experienceData.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative lg:pl-20"
              >
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-6 top-6">
                  <div className="w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg" />
                </div>

                {/* Experience Card */}
                <div className="bg-white rounded-xl p-6 md:p-8 border-2 border-neutral-200 hover:border-primary-300 shadow-md hover:shadow-xl transition-all duration-300 card-hover group">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="mb-4 md:mb-0">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-primary-100 rounded-lg text-primary-600">
                          <Briefcase size={20} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                            {experience.role}
                          </h3>
                          <p className="text-primary-600 font-semibold">{experience.company}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span className="font-medium">{formatPeriod(experience.period)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span className="font-medium">{experience.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-3 mb-6">
                    {experience.responsibilities.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-3 text-neutral-700"
                      >
                        <ArrowRight size={16} className="text-primary-600 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-200">
                    {experience.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-primary-50 text-primary-700 rounded-lg text-sm font-semibold border border-primary-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
