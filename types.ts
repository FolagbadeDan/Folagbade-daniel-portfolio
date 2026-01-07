
export interface Project {
  title: string;
  description: string;
  url: string;
  tags: string[];
  icon: string;
  color: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Skill {
  category: string;
  items: string[];
}
