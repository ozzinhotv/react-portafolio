// types/navbar.type.ts
export type NavItem = { id: string; label: string; href: string };

export type NavPage = {
  page: "navbar";
  version: number;
  brand: { text: string; href: string };
  items: NavItem[];
};
