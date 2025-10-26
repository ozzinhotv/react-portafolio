export type BadgeItem = { label: string; icon?: string };
export type LanguageItem = { label: string; code: string; level: string; proficiency: number };

export type SkillsCardBadges = {
  id: string;
  title: string;
  type: "badges";
  items: BadgeItem[];
};

export type SkillsCardLanguages = {
  id: string;
  title: string;
  type: "languages";
  items: LanguageItem[];
};

export type SkillsIntro = {
  title?: string;
  highlight?: string;
  subtitle?: string;
};

export type SkillsPage = {
  page: "skills";
  version: number;
  intro?: SkillsIntro;
  cards: Array<SkillsCardBadges | SkillsCardLanguages>;
};
