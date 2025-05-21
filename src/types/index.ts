export interface INavLink {
  id: string;
  title: string;
}

export interface ISkill {
  id: string;
  skills: string[];
  icon: string;
  category: string;
}

export interface IProject {
  id: string;
  title: string;
  description: string;
  image: string;
  detailedDescription: string;
  keyFeatures: string[];
  techStack: string[];
  demoLink?: string;
  githubLink?: string;
}

export interface IExperience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
}

export interface IEducation {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  grade: string;
}

export interface ICertification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  image: string;
  link?: string;
}

export interface IBlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  slug: string;
  externalUrl?: string;
}