export type ExperienceSkill = { label: string; icon?: string };

export type SkillItem = string | ExperienceSkill;

export type Experience = {
  id: string;
  role: string;
  company: string;
  location: string;
  start: string;      // "YYYY-MM"
  end?: string;
  current?: boolean;
  logo?: string;
  tasks?: string[];
  skills?: SkillItem[];
};

export type ExperiencePage = {
  page: "experience";
  version: number;
  intro: { title: string; highlight?: string; subtitle?: string };
  items: Experience[];
};
