import { Icon } from "@iconify/react";
import { resolveIcon } from "@/icons/skill-icons";

export type SkillItem = string | { label: string; icon?: string };

function toParts(s: SkillItem) {
  if (typeof s === "string") return { label: s, icon: s };
  return { label: s.label, icon: s.icon ?? s.label };
}

export default function SkillPill({ skill }: { skill: SkillItem }) {
  const { label, icon } = toParts(skill);
  const iconObj = resolveIcon(icon);

  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-zinc-200"
      title={label}
    >
      {iconObj ? <Icon icon={iconObj} className="h-3.5 w-3.5" aria-hidden="true" /> : null}
      <span className="truncate">{label}</span>
    </span>
  );
}
