export type Education = {
  id: string;
  degree: string;
  institution: string;
  location: string;
  start: string;     // "YYYY-MM"
  end?: string;      // "YYYY-MM"
  current?: boolean; // en curso
  logo?: string;
  highlights?: string[]; // ⬅️ usado por el componente
  skills?: string[];     // ⬅️ usado por el componente
};

export type EducationPage = {
  page: "education";
  version: number;
  intro: { title: string; highlight?: string; subtitle?: string };
  items: Education[];
};
