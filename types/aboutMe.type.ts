// types/aboutMe.type.ts

export type CardText = {
  id: string;
  title: string;
  icon?: string;
  type: "text";
  content: string[];
};

export type CardList = {
  id: string;
  title: string;
  icon?: string;
  type: "list";
  items: { label: string; icon?: string }[];
  note?: string;
};

export type CardTagsGroup = {
  id: string;
  title: string;
  icon?: string;
  type: "tags-group";
  groups: { label: string; tags: string[] }[];
};

export type AboutIntro = {
  title: string;
  highlight?: string;
  subtitle?: string;
};

export type AboutPage = {
  page: "about";
  version: number;
  intro: AboutIntro;
  cards: Array<CardText | CardList | CardTagsGroup>;
};
