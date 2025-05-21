import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { IProject } from '../types';

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;
  
  // Calculate total number of pages
  const totalPages = Math.ceil(projectsData.length / projectsPerPage);
  
  // Get current projects to display
  const currentProjects = projectsData.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );
  
  // Handle the case where the last page might have fewer than 3 projects
  const visibleProjects = [...currentProjects];
  if (visibleProjects.length < projectsPerPage) {
    const remaining = projectsPerPage - visibleProjects.length;
    visibleProjects.push(...projectsData.slice(0, remaining));
  }

  const openProjectModal = (project: IProject) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  const nextProject = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const prevProject = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Latest Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of my recent work in cloud infrastructure, containerization, and DevOps automation.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300
                           transform hover:scale-105 cursor-pointer"
                onClick={() => openProjectModal(project)}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center mt-8 space-x-4 items-center">
            <button
              onClick={prevProject}
              className="bg-white p-3 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-colors"
              aria-label="Previous projects"
            >
              <ChevronLeft size={20} />
            </button>
            
            {/* Page indicator */}
            <span className="text-gray-600 mx-2">
              {currentPage + 1} / {totalPages}
            </span>
            
            <button
              onClick={nextProject}
              className="bg-white p-3 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-colors"
              aria-label="Next projects"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                <div className="h-64 md:h-80 overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  onClick={closeProjectModal}
                  className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-red-600 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-8">
                <h3 className="font-bold text-2xl text-gray-800 mb-4">{selectedProject.title}</h3>
                <p className="text-gray-600 mb-6">{selectedProject.description}</p>
                {/* {selectedProject.detailedDescription && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-lg text-gray-800 mb-2">Detailed Description</h4>
                    <p className="text-gray-600 whitespace-pre-line">{selectedProject.detailedDescription}</p>
                  </div>
                )} */}

                {selectedProject.keyFeatures && selectedProject.keyFeatures.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-lg text-gray-800 mb-2">Key Features</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {selectedProject.keyFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mb-6">
                  <h4 className="font-semibold text-lg text-gray-800 mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  {selectedProject.demoLink && (
                    <a
                      href={selectedProject.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      View Demo
                    </a>
                  )}
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition-colors flex items-center"
                    >
                      <Github size={18} className="mr-2" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;