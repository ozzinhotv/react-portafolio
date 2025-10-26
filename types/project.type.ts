export type ProjectCategory = "web" | "game" | "design";

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
  category: ProjectCategory;
  accentClass?: string;
};

export type ProjectsIntro = { title?: string; highlight?: string; subtitle?: string };
export type ProjectsCTA = { label: string; href: string; icon?: string };

export type ProjectsMeta = {
  categories?: {
    order?: ProjectCategory[];
    labels?: Partial<Record<ProjectCategory, string>>;
  };
};

export type ProjectsPage = {
  page: "projects";
  version: number;
  intro?: ProjectsIntro;
  cta?: ProjectsCTA;
  meta?: ProjectsMeta;
  cards: ProjectCard[];
};
