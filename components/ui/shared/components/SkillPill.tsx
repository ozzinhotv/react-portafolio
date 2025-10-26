import { Icon } from "@iconify/react";
import { resolveIcon } from "@/icons/skill-icons";

type Accent = "sky" | "blue" | "emerald" | "teal" | "violet" | "fuchsia" | "rose" | "amber";
export type SkillItem = string | { label: string; icon?: string };

const cls: Record<Accent, string> = {
  sky: "hover:bg-sky-500/15 hover:text-sky-100 hover:border-sky-400/40",
  blue: "hover:bg-blue-500/15 hover:text-blue-100 hover:border-blue-400/40",
  emerald: "hover:bg-emerald-500/15 hover:text-emerald-100 hover:border-emerald-400/40",
  teal: "hover:bg-teal-500/15 hover:text-teal-100 hover:border-teal-400/40",
  violet: "hover:bg-violet-500/15 hover:text-violet-100 hover:border-violet-400/40",
  fuchsia: "hover:bg-fuchsia-500/15 hover:text-fuchsia-100 hover:border-fuchsia-400/40",
  rose: "hover:bg-rose-500/15 hover:text-rose-100 hover:border-rose-400/40",
  amber: "hover:bg-amber-500/15 hover:text-amber-900 hover:border-amber-400/40",
};

const hoverByAccent: Record<Accent, string> = {
  sky:     "hover:bg-sky-500/15 hover:text-sky-100 hover:border-sky-400/40",
  blue:    "hover:bg-blue-500/15 hover:text-blue-100 hover:border-blue-400/40",
  emerald: "hover:bg-emerald-500/15 hover:text-emerald-100 hover:border-emerald-400/40",
  teal:    "hover:bg-teal-500/15 hover:text-teal-100 hover:border-teal-400/40",
  violet:  "hover:bg-violet-500/15 hover:text-violet-100 hover:border-violet-400/40",
  fuchsia: "hover:bg-fuchsia-500/15 hover:text-fuchsia-100 hover:border-fuchsia-400/40",
  rose:    "hover:bg-rose-500/15 hover:text-rose-100 hover:border-rose-400/40",
  amber:   "hover:bg-amber-500/15 hover:text-amber-100 hover:border-amber-400/40",
};


function toParts(s: SkillItem) {
  if (typeof s === "string") return { label: s, icon: s };
  return { label: s.label, icon: s.icon ?? s.label };
}

export default function SkillPill({ skill, accent = "sky" }: { skill: SkillItem; accent?: Accent }) {
  const { label, icon } = toParts(skill);
  const iconObj = resolveIcon(icon);
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-zinc-200 transition ${hoverByAccent[accent]}`}
      title={label}
    >
      {iconObj ? <Icon icon={iconObj} className="h-3.5 w-3.5" aria-hidden="true" /> : null}
      <span className="truncate">{label}</span>
    </span>
  );
}
