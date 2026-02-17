import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSkillStore } from '../store/useSkillStore';
import * as LucideIcons from 'lucide-react';
import { CheckCircle2 } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const { filteredSkills } = useSkillStore();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    // @ts-ignore - Dynamically access Lucide icons
    const Icon = LucideIcons[iconName] || LucideIcons.Code;
    return <Icon size={24} />;
  };

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-white via-neutral-50 to-white">
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
            Skills & Technologies
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-4 sm:mb-6" />
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto px-2">
            Technologies and tools for scalable cloud infrastructure
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
              onHoverStart={() => setHoveredSkill(skill.id)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="group relative bg-white rounded-xl p-6 border-2 border-neutral-200 hover:border-primary-300 shadow-sm hover:shadow-xl transition-all duration-300 card-hover"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-5">
                <motion.div
                  className={`p-3 rounded-lg ${
                    hoveredSkill === skill.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-primary-100 text-primary-600'
                  } transition-all duration-300`}
                  animate={{
                    rotate: hoveredSkill === skill.id ? [0, -10, 10, -10, 0] : 0,
                    scale: hoveredSkill === skill.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {getIcon(skill.icon)}
                </motion.div>
                <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                  {skill.category}
                </h3>
              </div>
              
              {/* Skills List */}
              <div className="space-y-2">
                {skill.skills.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: itemIndex * 0.05 }}
                    className="flex items-center gap-2 text-sm text-neutral-700"
                  >
                    <CheckCircle2 
                      size={16} 
                      className={`flex-shrink-0 transition-colors ${
                        hoveredSkill === skill.id ? 'text-primary-600' : 'text-emerald-500'
                      }`}
                    />
                    <span className="font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* Hover effect indicator */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-b-xl"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredSkill === skill.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
