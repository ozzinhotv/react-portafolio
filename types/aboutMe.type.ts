export type AboutIntro = {
  title?: string;
  highlight?: string;
  subtitle?: string;
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
};

export type AboutCardProps = {
  title: string;
  icon?: string;
  open: boolean;
  compactSiblings: boolean;
  onHover: () => void;
  children?: React.ReactNode;
  accentClass?: string;
};
