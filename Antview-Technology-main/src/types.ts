export interface Service {
  id: string;
  title: string;
  iconName: string;
  description: string;
  details: string[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  tech: string[];
  description: string;
  metrics: string;
  achievement: string;
}

export interface EvaluationCriterion {
  id: string;
  name: string;
  weight: number;
  description: string;
  keyAspects: string[];
}

export interface SectionContent {
  id: string;
  num: string;
  title: string;
  tagline: string;
}

export interface CandidateSubmission {
  id: string;
  fullName: string;
  email: string;
  repoUrl: string;
  liveUrl: string;
  docText: string;
  roadmapText: string;
  techStack: string[];
  timestamp: string;
  score: number;
  status: 'pending' | 'approved' | 'rejected';
}

export interface TimelinePhase {
  phase: number;
  name: string;
  description: string;
  tasks: string[];
}
