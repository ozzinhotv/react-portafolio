"use client";
import clsx from "clsx";
import type { ProjectCategory } from "@/types/project.type";

type Item = { key: ProjectCategory; label: string; count?: number };

export default function ProjectFilterBar({
  items,
  value,
  onChange,
}: {
  items: Item[];
  value: ProjectCategory | "all";
  onChange: (v: ProjectCategory | "all") => void;
}) {
  const total = items.reduce((n, i) => n + (i.count || 0), 0);
  return (
    <div className="mb-6 flex flex-wrap gap-2">
      <Btn active={value === "all"} onClick={() => onChange("all")} label="All" count={total} />
      {items.map(it => (
        <Btn
          key={it.key}
          active={value === it.key}
          onClick={() => onChange(it.key)}
          label={it.label}
          count={it.count}
        />
      ))}
    </div>
  );
}

function Btn({
  active, label, count, onClick,
}: {
  active: boolean; label: string; count?: number; onClick: () => void;
}) {
  const base = "rounded-full border px-3 py-1.5 text-sm transition";
  const act = "border-blue-500/50 bg-blue-500/10 text-blue-300";
  const idle = "border-white/10 bg-white/3 hover:bg-white/6 text-zinc-200";
  return (
    <button onClick={onClick} className={clsx(base, active ? act : idle)}>
      {label} {typeof count === "number" && <span className="opacity-70">({count})</span>}
    </button>
  );
}
