export type ProjectTag = { label: string; icon?: string };

export type ProjectCard = {
  id: string;
  title: string;
  subtitle?: string;
  year?: number;
  description?: string;
  tags?: ProjectTag[];
  links?: { repo?: string; demo?: string };
  icon?: string;
};

export type ProjectsIntro = {
  title?: string;
  highlight?: string;
  subtitle?: string;
};

export type ProjectsCTA = {
  label: string;
  href: string;
  icon?: string;
};

export type ProjectsPage = {
  page: "projects";
  version: number;
  intro?: ProjectsIntro;
  cta?: ProjectsCTA;
  cards: ProjectCard[];
};
