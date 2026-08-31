export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI / LLM' | 'Machine Learning' | 'Full Stack' | 'IoT / Systems';
  featured: boolean;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  bullets: string[];
  architectureSummary: string;
  accentColor: string;
  status: 'Production' | 'Featured' | 'Completed' | 'Research';
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient';
    iconName?: string;
    tags?: string[];
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  type: string;
  repoUrl?: string;
  skills: string[];
  achievements: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badgeType: 'championship' | 'certification' | 'course' | 'assessment';
  skillsLearned: string[];
  highlight?: string;
  credentialUrl?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreLabel: string;
  status: 'In Progress' | 'Completed';
  highlights: string[];
}
