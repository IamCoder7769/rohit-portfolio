export interface SocialLink {
  label: string;
  url: string;
  iconName: 'github' | 'linkedin' | 'mail' | 'phone' | 'map-pin';
  displayValue: string;
}

export interface SkillCategory {
  title: string;
  categoryKey: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  badge?: string;
  responsibilities: string[];
  techStack: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  liveUrl?: string;
  category: string;
  tags: string[];
  description: string[];
  previewTheme: {
    accentColor: string;
    bgPattern: string;
    badgeText: string;
    primaryIcon: string;
  };
  metrics?: { label: string; value: string }[];
  architecturalHighlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  score: string;
  year?: string;
}

export interface AchievementItem {
  title: string;
  organization: string;
  year?: string;
  description: string;
}
