// utils/hues.ts
export type Accent = "sky" | "blue" | "emerald" | "teal" | "violet" | "fuchsia" | "rose" | "amber";

/** Intenta inferir un "hue" a partir de la accentClass tipo: "from-indigo-600/25 to-indigo-500/15" */
export function hueFromAccentClass(accent?: string): Accent {
  const s = accent ?? "";
  if (/fuchsia|magenta/i.test(s)) return "fuchsia";
  if (/violet|purple|indigo/i.test(s)) return "violet";
  if (/teal/i.test(s)) return "teal";
  if (/emerald|green/i.test(s)) return "emerald";
  if (/rose|red/i.test(s)) return "rose";
  if (/amber|orange|yellow/i.test(s)) return "amber";
  if (/sky|cyan|lightblue/i.test(s)) return "sky";
  return "blue";
}

/** Clases de hover para título y borde del card según hue */
export function cardHoverClasses(h: Accent) {
  const map: Record<Accent, { title: string; border: string }> = {
    sky:      { title: "group-hover:text-sky-300",      border: "group-hover:border-sky-400/40" },
    blue:     { title: "group-hover:text-blue-300",     border: "group-hover:border-blue-400/40" },
    emerald:  { title: "group-hover:text-emerald-300",  border: "group-hover:border-emerald-400/40" },
    teal:     { title: "group-hover:text-teal-300",     border: "group-hover:border-teal-400/40" },
    violet:   { title: "group-hover:text-violet-300",   border: "group-hover:border-violet-400/40" },
    fuchsia:  { title: "group-hover:text-fuchsia-300",  border: "group-hover:border-fuchsia-400/40" },
    rose:     { title: "group-hover:text-rose-300",     border: "group-hover:border-rose-400/40" },
    amber:    { title: "group-hover:text-amber-300",    border: "group-hover:border-amber-400/40" },
  };
  return map[h];
}

/** Asigna un accent (para SkillPill) según el icono/label del tag */
export function pillAccentFromSkillIcon(key?: string): Accent {
  const k = (key ?? "").toLowerCase();
  if (/angular|html|jest|jwt|rest|css|bootstrap|react-router/.test(k)) return "rose";
  if (/react|tailwind|fetch|context|next/.test(k)) return "sky";
  if (/typescript|vercel|github|sql|node|nodedotjs|javascript/.test(k)) return "blue";
  if (/python|flask|notion|trello/.test(k)) return "emerald";
  if (/figma|canva|powerpoint/.test(k)) return "violet";
  if (/vscode|postman|docker/.test(k)) return "teal";
  if (/design|responsive/.test(k)) return "amber";
  return "blue";
}
