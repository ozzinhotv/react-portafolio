// types/hero.type.ts

export type HeroAction = {
  id: string;
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  icon?: string; // slug Iconify (ej: "github", "arrow-right")
};

export type HeroName = {
  first: string;
  last: string;
  highlight?: boolean;
  highlightColor?: string; // ej: "text-blue-500"
};

export type HeroHeading = {
  greeting: string;
  name: HeroName;
};

export type HeroAvatar = {
  src: string;
  alt: string;
  shape?: "circle" | "square";
};

export type HeroSection = {
  page: "home";
  version: number;
  hero: {
    avatar?: HeroAvatar;
    heading: HeroHeading;
    role?: string;
    description?: string;
    actions?: HeroAction[];
  };
};
