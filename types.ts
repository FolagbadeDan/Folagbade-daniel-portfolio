
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

export interface Skill {
  category: string;
  icon?: string;
  items: string[];
}
