import { IExperience } from '../types';

export const experienceData: IExperience[] = [
  {
    id: '1',
    role: 'DevOps Engineer',
    company: 'e-Cosmos India Pvt. Ltd.',
    location: "Bengaluru, India",
    period: 'Sept 2023 – Present',
    responsibilities: [
      "Led cloud infrastructure development using AWS services",
      "Built CI/CD pipelines reducing deployment time by 60%",
      "Dockerized applications and optimized cloud costs",
      "Implemented monitoring solutions using Prometheus and Grafana",
      "Led cloud infrastructure development using AWS services"
    ],
    technologies: ['AWS', 'CI/CD', 'Docker','Nginx', 'Python', 'Shell Scripting'],
  },
  {
    id: '2',
    role: 'AWS Re/Start Intern',
    company: 'Magic Bus India Foundation',
    location: "Chennai, India",
    period: 'Jan 2023 – May 2023',
    responsibilities: [
      "Completed AWS Re/Start program with hands-on experience in AWS cloud fundamentals",
      "Achieved AWS Certified Cloud Practitioner certification",
      "Worked on cloud infrastructure and deployment projects",
      "Developed foundational knowledge in AWS services and best practices for cloud security and scalability"
    ],
    technologies: ['AWS', 'Linux', 'Cloud Computing'],
  },
];