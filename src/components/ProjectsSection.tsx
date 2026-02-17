import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight, X, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { IProject } from '../types';

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;
  
  const totalPages = Math.ceil(projectsData.length / projectsPerPage);
  const currentProjects = projectsData.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  const openProjectModal = (project: IProject) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const nextProject = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const prevProject = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  return (
    <section id="projects" className="section-padding bg-neutral-50">
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
            Featured Projects
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-4 sm:mb-6" />
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto px-2">
            Cloud infrastructure, automation, and DevOps solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border border-neutral-200"
              onClick={() => openProjectModal(project)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-100 to-accent-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                    <ArrowUpRight size={20} className="text-primary-600" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-600 mb-4 line-clamp-2 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-semibold rounded-full border border-primary-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-semibold rounded-full">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 sm:gap-4">
            <motion.button
              onClick={prevProject}
              className="min-w-[44px] min-h-[44px] p-3 bg-white border-2 border-neutral-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous projects"
            >
              <ChevronLeft size={20} className="text-neutral-700" />
            </motion.button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`min-w-[10px] min-h-[10px] rounded-full transition-all duration-300 ${
                    index === currentPage ? 'bg-primary-600 w-8' : 'bg-neutral-300'
                  }`}
                  aria-label={`Page ${index + 1}`}
                />
              ))}
            </div>
            <motion.button
              onClick={nextProject}
              className="min-w-[44px] min-h-[44px] p-3 bg-white border-2 border-neutral-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next projects"
            >
              <ChevronRight size={20} className="text-neutral-700" />
            </motion.button>
          </div>
        )}

        {/* Project Modal - full screen on mobile, centered on desktop */}
        <AnimatePresence>
          {selectedProject && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeProjectModal}
                aria-hidden
              />
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-white w-full h-full sm:h-auto sm:max-h-[90vh] sm:max-w-4xl sm:rounded-2xl sm:w-full overflow-y-auto shadow-2xl">
                  {/* Image */}
                  <div className="relative h-48 sm:h-64 bg-gradient-to-br from-primary-100 to-accent-100 shrink-0">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={closeProjectModal}
                      className="absolute top-3 right-3 sm:top-4 sm:right-4 min-w-[44px] min-h-[44px] flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-lg hover:bg-white transition-colors shadow"
                      aria-label="Close"
                    >
                      <X size={22} />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-8 pb-8 sm:pb-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-3 sm:mb-4">
                      {selectedProject.title}
                    </h3>
                    <p className="text-base sm:text-lg text-neutral-600 mb-5 sm:mb-6 leading-relaxed">
                      {selectedProject.description}
                    </p>

                    {selectedProject.keyFeatures && selectedProject.keyFeatures.length > 0 && (
                      <div className="mb-5 sm:mb-6">
                        <h4 className="text-lg sm:text-xl font-bold text-neutral-900 mb-3 sm:mb-4">Key Features</h4>
                        <ul className="space-y-2">
                          {selectedProject.keyFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3 text-neutral-700 text-sm sm:text-base">
                              <span className="text-primary-600 mt-1 shrink-0">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mb-6 sm:mb-8">
                      <h4 className="text-lg sm:text-xl font-bold text-neutral-900 mb-3 sm:mb-4">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 sm:px-4 sm:py-2 bg-primary-50 text-primary-700 rounded-lg text-xs sm:text-sm font-semibold border border-primary-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 border-t border-neutral-200">
                      {selectedProject.demoLink && (
                        <motion.a
                          href={selectedProject.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors min-h-[48px]"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <ExternalLink size={20} aria-hidden />
                          View Demo
                        </motion.a>
                      )}
                      {selectedProject.githubLink && (
                        <motion.a
                          href={selectedProject.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3 bg-neutral-800 text-white rounded-lg font-semibold hover:bg-neutral-900 transition-colors min-h-[48px]"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Github size={20} aria-hidden />
                          View Code
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
