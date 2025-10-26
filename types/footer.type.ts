// types/footer.type.ts

export type FooterLink = { id: string; label: string; href: string };

export type FooterSocial = {
  id: string;
  label?: string;
  href: string;
  icon?: string; // slug Iconify, ej: "linkedin", "github", "instagram"
};

export type FooterPage = {
  page: "footer";
  version: number;
  locale?: string;
  ownerName: string;
  // e.g. "© {year} Oscar Thielen. All rights reserved."
  copyright: string;
  links?: FooterLink[];
  social?: FooterSocial[];
};
