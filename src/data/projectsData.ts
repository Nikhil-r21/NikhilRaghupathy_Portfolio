import { IProject } from '../types';

export const projectsData: IProject[] = [
  {
    id: '1',
    title: 'Kliqmee Web Application',
    description: 'Deployed and managed a scalable web application on AWS',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    detailedDescription: "Implemented and managed AWS infrastructure for Kliqmee's web platform, optimizing costs and improving reliability.",
    keyFeatures: [
      "Deployed the Kliqmee web application on AWS EC2, ensuring high availability and scalability",
      "Developed a CI/CD pipeline using GitHub Actions, automating build, test, and deployment processes",
      "Configured Nginx as a reverse proxy, optimizing performance for faster response times",
      "Managed SSL certificates to secure data transmission, enhancing application security",
      "Set up monitoring and logging solutions to track application performance"
    ],
    techStack: ["CI/CD", "EC2", "S3", "Route 53", "Docker", "Nginx", "GitHub Actions"],
    // demoLink: 'https://example.com/project1',
    // githubLink: 'https://github.com/username/project1',
  },
  {
    id: '2',
    title: 'Verificarepro',
    description: 'Monitored and optimized AWS deployment with automated data scraping',
    image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    detailedDescription: "Implemented and managed Azure infrastructure for Kliqmee's web platform, optimizing costs and improving reliability.",
    keyFeatures: [
      "Monitored AWS deployment to ensure scalable application performance",
      "Developed a CI/CD pipeline using GitHub Actions for seamless updates",
      "Created a data scraping tool using Python and Selenium for automated data extraction",
      "Optimized cloud resource usage, reducing deployment costs"
    ],
    techStack: ["CI/CD", "Automation", "AWS", "EC2", "Docker", "Nginx", "GitHub Actions"],
    // demoLink: 'https://example.com/project2',
    // githubLink: 'https://github.com/username/project2',
  },
  {
    id: '3',
    title: 'Server Build for Internal Compute Requirements',
    description: 'Deployed and configured internal server infrastructure',
    image: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    detailedDescription: "Implemented and managed Azure infrastructure for Kliqmee's web platform, optimizing costs and improving reliability.",
    keyFeatures: [
      "Deployed a physical server running Ubuntu for internal computational needs",
      "Configured network topology, including VLANs and IP addressing",
      "mplemented security protocols including firewalls and SSH access",
      "Managed server operations with regular maintenance and monitoring"
    ],
    techStack: ["Ubuntu Server", "Network Topology", "SSH", "Firewall"],
    // githubLink: 'https://github.com/username/project3',
  },
  {
    id: '4',
    title: 'Private Cloud Creation using OpenStack',
    description: 'Built a comprehensive IaC framework for cloud resources',
    image: 'https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    detailedDescription: "Implemented and managed Azure infrastructure for Kliqmee's web platform, optimizing costs and improving reliability.",
    keyFeatures: [
      "Designed and implemented private cloud infrastructure using OpenStack",
      "Set up virtual machines, storage volumes, and network components",
      "Automated provisioning through Infrastructure as Code principles",
      "Monitored resource utilization and optimized cloud performance"
    ],
    techStack: ["Openstack", "Networking", "Cloud Computing", "Ubuntu Server",  "Infrastructure"],
    // demoLink: 'https://example.com/project4',
  },
  {
    id: '5',
    title: 'Web Scraper Development',
    description: 'Developed an automated tool to collect and process web data efficiently',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    detailedDescription: "Implemented and managed Azure infrastructure for Kliqmee's web platform, optimizing costs and improving reliability.",
    keyFeatures: [
      "Developed an automated web scraper using Python and Selenium",
      "Built custom parsers to handle various webpage structures"
    ],
    techStack: ["Python", "Web Scraping", "Selenium"],
    // githubLink: 'https://github.com/username/project5',
  },
  {
    id: '6',
    title: 'DockerMate',
    description: 'A sleek, interactive, beginner-friendly CLI tool to manage all things Docker — now packaged for easy installation on Debian-based systems',
    image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    detailedDescription: "Implemented and managed Azure infrastructure for Kliqmee's web platform, optimizing costs and improving reliability.",
    keyFeatures: [
      "DockerMate v1.0 is a Bash-based interactive tool that simplifies Docker management with a color-coded, menu-driven terminal UI.",
      "It supports container, image, network, and volume operations, including batch actions and health checks.",
      "Set up S3 buckets for static content deliveryBuilt-in debugging tools and error handling provide safe, user-friendly system monitoring and troubleshooting.",
      "Easily installable via a custom APT repository, it's ideal for those who prefer managing Docker without complex CLI commands.",
      "Checkout: https://gist.github.com/Nikhil-r21/a6115e6beb6b74f0bcf48c51968eb5c0"
    ],
    techStack: ["Docker", "Shell Scripting", "Ubuntu", "Debian", "CLI"],
    demoLink: 'https://gist.github.com/Nikhil-r21/5e7082c5b726c2dc82fe99c7b6cc013b',
    githubLink: 'https://github.com/Nikhil-r21/dockermate',
  },
];