export type SkillItem = string | { label: string; icon?: string };

export type Experience = {
  id: string;
  role: string;
  company: string;
  location?: string;
  start: string;   
  end?: string;    
  current?: boolean;
  logo?: string;
  tasks: string[];
  skills: SkillItem[];
};