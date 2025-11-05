// types/aboutMe.type.ts
import React from "react"; // asegúrate de tener esto para React.ReactNode

export type AboutIntro = {
  title?: string;
  highlight?: string;
  subtitle?: string;
};

// ⬇️ NUEVO: tipo para los tonos (clases tailwind)
export type Tone = {
  text: string;        // ej: "text-sky-300"
  icon: string;        // ej: "text-sky-300"
  border: string;      // ej: "border-sky-400/40"
  borderHover: string; // ej: "hover:border-sky-400/40"
};

export type TextCard = {
  id: string;
  title: string;
  icon?: string;
  type: "text";
  content: string[];
};

export type ListItem = {
  label: string;
  icon?: string;
};

export type ListCard = {
  id: string;
  title: string;
  icon?: string;
  type: "list";
  items: ListItem[];
  note?: string;
};

export type TagsGroup = {
  label: string;
  tags: string[];
};

export type TagsGroupCard = {
  id: string;
  title: string;
  icon?: string;
  type: "tags-group";
  groups: TagsGroup[];
};

export type AboutContentCard = TextCard | ListCard | TagsGroupCard;

export type AboutPage = {
  page: "about";
  version: number;
  intro?: AboutIntro;
  cards: AboutContentCard[];
};

export type AboutItem = {
  id: string;
  title: string;
  icon?: string;
  content?: React.ReactNode;
  accentClass?: string;
  tone?: Tone;            // ⬅️ NUEVO (opcional)
};

export type AboutCardProps = {
  title: string;
  icon?: string;
  open: boolean;
  compactSiblings: boolean;
  onHover: () => void;
  onClick?: () => void;      // ← NUEVO: click/tap en móvil
  children?: React.ReactNode;
  accentClass?: string;
  tone?: Tone;
};