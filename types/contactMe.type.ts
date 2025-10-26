// types/contactMe.type.ts

export type ContactCard = {
  id: string;
  title: string;
  icon?: string;
  value: string;
  href?: string;
};

export type ContactCTA = {
  label: string;
  icon?: string;
  href: string;
};

export type ContactSocial = {
  id: string;
  icon?: string;
  href: string;
};

export type ContactIntro = {
  title?: string;
  highlight?: string;
  subtitle?: string;
};

export type ContactPage = {
  page: "contact";
  version: number;
  locale?: string;
  intro?: ContactIntro;
  cards: ContactCard[];
  cta?: ContactCTA;
  social?: ContactSocial[];
};
