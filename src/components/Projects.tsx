import { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  details: string[];
  image?: string;
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const projects: Project[] = [
    {
      title: "Kliqmee Web Application",
      description: "Deployed and managed a scalable web application on AWS",
      technologies: ["AWS", "EC2", "S3", "Docker", "Nginx", "GitHub Actions"],
      details: [
        "Deployed the Kliqmee web application on AWS EC2, ensuring high availability and scalability",
        "Developed a CI/CD pipeline using GitHub Actions, automating build, test, and deployment processes",
        "Configured Nginx as a reverse proxy, optimizing performance for faster response times",
        "Managed SSL certificates to secure data transmission, enhancing application security",
        "Set up monitoring and logging solutions to track application performance"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
    },
    {
      title: "Verificarepro",
      description: "Monitored and optimized AWS deployment with automated data scraping",
      technologies: ["AWS", "CloudWatch", "S3", "Docker", "Nginx", "GitHub Actions"],
      details: [
        "Monitored AWS deployment to ensure scalable application performance",
        "Developed a CI/CD pipeline using GitHub Actions for seamless updates",
        "Created a data scraping tool using Python and Selenium for automated data extraction",
        "Optimized cloud resource usage, reducing deployment costs"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Server Build for Internal Compute Requirements",
      description: "Deployed and configured internal server infrastructure",
      technologies: ["Ubuntu Server", "Network Topology", "SSH", "Firewall"],
      details: [
        "Deployed a physical server running Ubuntu for internal computational needs",
        "Configured network topology, including VLANs and IP addressing",
        "Implemented security protocols including firewalls and SSH access",
        "Managed server operations with regular maintenance and monitoring"
      ],
      image: "https://img.freepik.com/premium-photo/modern-cloud-computing-server-setup-with-hybrid-technology-infrastructure-background-concept-concept-cloud-computing-server-setup-hybrid-technology-infrastructure-background-concept_918839-42208.jpg"
    },
    {
      title: "Private Cloud Creation using OpenStack",
      description: "Built a comprehensive IaC framework for cloud resources",
      technologies: ["Openstack", "Networking", "Cloud Computing", "Ubuntu Server", "Infrastructure"],
      details: [
        "Designed and implemented private cloud infrastructure using OpenStack",
        "Set up virtual machines, storage volumes, and network components",
        "Automated provisioning through Infrastructure as Code principles",
        "Monitored resource utilization and optimized cloud performance"
      ],
      image: "https://media.licdn.com/dms/image/v2/D5612AQExT5tFlJ6FDQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1734683319307?e=2147483647&v=beta&t=15acqgpesTIeVvupWujIaBfjGGmq3JUCDpYt8K46F-0"
    },
    {
      title: "Web Scraper Development",
      description: "Developed an automated tool to collect and process web data efficiently",
      technologies: ["Python", "Selenium"],
      details: [
        "Developed an automated web scraper using Python and Selenium",
        "Integrated the scraper with a database for organized storage",
        "Implemented multi-threading and scheduling to enhance performance",
        "Built custom parsers to handle various webpage structures"
      ],
      image: "https://blog.apify.com/content/images/2023/09/what-is-web-scraping-websites-web-scraper-structured-data-1.png"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              onClick={() => setSelectedProject(project)}
              className="card group cursor-pointer"
            >
              {project.image && (
                <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}
              
              <h3 className="text-xl font-semibold mb-4 gradient-text">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech, idx) => (
                  <span 
                    key={idx}
                    className="glass-effect px-3 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-gray-400 text-xs flex items-center">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-[#1a1a1a] rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-modal"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-semibold gradient-text">{selectedProject.title}</h3>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {selectedProject.image && (
                <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="glass-effect px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};