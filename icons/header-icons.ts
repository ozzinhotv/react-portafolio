// icons/header-icons.ts

// ——— TIPOS ———
export type HeaderIconId =
  | "home" | "about" | "skills"
  | "programming-web" | "dev-tools-frameworks" | "office-productivity" | "design-pm-tools" | "languages"
  | "projects" | "experience" | "education"
  | "archivo" | "obra" | "vida" | "contact"
  // About
  | "my-story" | "technical-interests" | "what-drives-me" | "beyond-coding";

// ——— MAPA POR ID (secciones/cards) ———
// ⚠️ Nota: ahora TODO son NOMBRES string "lucide:*"
export const HEADER_ICONS: Record<HeaderIconId, string> = {
  home: "lucide:layout-dashboard",
  about: "lucide:book-open",
  projects: "lucide:folder",
  experience: "lucide:briefcase",
  education: "lucide:graduation-cap",
  contact: "lucide:mail",

  skills: "lucide:layout-dashboard",
  "programming-web": "lucide:square-dashed-bottom-code",
  "dev-tools-frameworks": "lucide:wrench",
  "office-productivity": "lucide:briefcase",
  "design-pm-tools": "lucide:pen-tool",
  languages: "lucide:languages",

  archivo: "lucide:folder",
  obra: "lucide:image",
  vida: "lucide:calendar",

  "my-story": "lucide:sparkles",
  "technical-interests": "lucide:cpu",
  "what-drives-me": "lucide:target",
  "beyond-coding": "lucide:heart",
};

// ——— SLUGS reutilizables (About, Projects, Contact) ———
const ICON_SLUGS: Record<string, string> = {
  // about
  sparkles: "lucide:sparkles",
  cpu: "lucide:cpu",
  bot: "lucide:bot",
  shield: "lucide:shield",
  gamepad: "lucide:gamepad",
  target: "lucide:target",
  heart: "lucide:heart",

  // projects (header por tarjeta) + CTA
  globe: "lucide:globe",
  "app-window": "lucide:app-window",
  server: "lucide:server",
  database: "lucide:database",
  rocket: "lucide:rocket",
  code: "lucide:code",
  folder: "lucide:folder",
  github: "lucide:github",

  // contact (cards, cta, social)
  mail: "lucide:mail",
  linkedin: "lucide:linkedin",
  "map-pin": "lucide:map-pin",
  "arrow-right": "lucide:arrow-right",
  instagram: "lucide:instagram",
};

// ——— RESOLVER ———
export function getHeaderIcon(idOrSlug: string): string {
  const key = (idOrSlug ?? "").toLowerCase().trim();

  // 1) por ID de sección/card
  if (key in HEADER_ICONS) return HEADER_ICONS[key as keyof typeof HEADER_ICONS];

  // 2) por slug explícito (contact/projects/about)
  if (key in ICON_SLUGS) return ICON_SLUGS[key];

  // 3) fallback
  return "lucide:layout-dashboard";
}
