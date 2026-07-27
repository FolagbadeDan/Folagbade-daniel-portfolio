
export interface Project {
  title: string;
  description: string;
  url: string;
  tags: string[];
  icon: string;
  color: string;
  featured?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  /** Hidden from the page until the details are confirmed. */
  draft?: boolean;
}

export interface Skill {
  category: string;
  icon?: string;
  items: string[];
}
