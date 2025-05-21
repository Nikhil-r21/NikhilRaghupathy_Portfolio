import { ISkill } from '../types';

// Categories
// - Cloud Technologies
// - DevOps Tools
// - Scripting & Coding
// - Other

export const skillsData: ISkill[] = [
  {
    id: '1',
    category: "Cloud Technologies",
    skills: ["AWS", "OpenStack", "Azure"],
    icon: "Cloud"
  },
  {
    id: '2',
    category: "CI/CD",
    skills: ["GitHub Actions", "Jenkins"],
    icon: "GitBranch"
  },
  {
    id: '3',
    category: "Containerization",
    skills: ["Docker"],
    icon: "Container"
  },
  {
    id: '4',
    category: "IaC",
    skills: ["Terraform"],
    icon: "FileCode"
  },
  {
    id: '5',
    category: "Monitoring",
    skills: ["Prometheus", "Grafana", "cAdvisor"],
    icon: "LineChart"
  },
  {
    id: '6',
    category: "Programming",
    skills: ["Python", "Shell Scripting"],
    icon: "Code"
  },
  {
    id: '7',
    category: "Version Control",
    skills: ["Git", "GitHub"],
    icon: "GitPullRequest"
  },
  {
    id: '8',
    category: "Web Server",
    skills: ["Nginx", "Load Balancing", "Reverse Proxy"],
    icon: "Server"
  },
  {
    id: '9',
    category: "Networking / Security",
    skills: ["SSH", "Networking Fundamentals"],
    icon: "Network"
  },
];

export const skillCategories = [
  'All',
  'Cloud Technologies',
  'CI/CD',
  'Containerization',
  'IaC',
  'Monitoring',
  'Programming',
  'Version Control',
  'Web Server',
  'Networking / Security',
];