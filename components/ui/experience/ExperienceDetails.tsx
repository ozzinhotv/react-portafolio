import type { Experience, SkillItem } from "@/types/experience.type";
import SkillPill from "@/components/ui/shared/components/SkillPill";

type Accent = "sky" | "blue" | "emerald" | "teal" | "violet" | "fuchsia" | "rose" | "amber";

export default function ExperienceDetails({ item, accent = "sky" }: { item: Experience; accent?: Accent }) {
  return (
    <div className="px-4 pb-4">
      {item.tasks?.length ? (
        <ul className="mt-2 space-y-2 text-sm text-zinc-300">
          {item.tasks.map((t, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-400/70" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {item.skills?.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {item.skills.map((s: SkillItem, i) => {
            const k = typeof s === "string" ? s : s.label;
            return <SkillPill key={`${k}-${i}`} skill={s} accent={accent} />;
          })}
        </div>
      ) : null}
    </div>
  );
}
