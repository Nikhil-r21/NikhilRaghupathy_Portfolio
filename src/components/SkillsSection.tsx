import React from 'react';
import { motion } from 'framer-motion';
import { useSkillStore } from '../store/useSkillStore';
import * as LucideIcons from 'lucide-react';
import { CheckCircle } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const { filteredSkills } = useSkillStore();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  const getIcon = (iconName: string) => {
    // @ts-ignore - Dynamically access Lucide icons
    const Icon = LucideIcons[iconName] || LucideIcons.Code;
    return <Icon size={24} />;
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of technologies and tools I've worked with in cloud computing and DevOps.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.id}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col 
                        hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="text-blue-600 mr-3">
                  {getIcon(skill.icon)}
                </div>
                <h3 className="font-medium text-gray-800">{skill.category}</h3>
              </div>
              
              <div className="mt-2 space-y-1">
                {skill.skills.map((item, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-500 py-1">
                    <CheckCircle size={14} className="mr-2 text-blue-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;