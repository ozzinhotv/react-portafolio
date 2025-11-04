// components/ui/skills/SkillCard.tsx
"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import type { SkillsCardBadges, SkillsCardLanguages, BadgeItem } from "@/types/skills.type";
import { ICONS, ICON_ALIASES } from "@/icons/skill-icons";
import { getHeaderIcon } from "@/icons/header-icons";
import clsx from "clsx";

type Props = {
  card: SkillsCardBadges | SkillsCardLanguages;
  accentClass?: string;
  accentTextClass?: string;
  className?: string;
};

const r = (s?: string) =>
  s ? ICONS[s.toLowerCase()] ?? (ICONS[ICON_ALIASES[s.toLowerCase()] as string] as any) : undefined;

const TONES: Record<
  string,
  { text: string; icon: string; border: string; borderHover: string; tag: string }
> = {
  "programming-web": {
    text: "text-sky-300",
    icon: "text-sky-300",
    border: "border-sky-400/40",
    borderHover: "hover:border-sky-400/40",
    tag: "hover:bg-sky-500/15 hover:text-sky-100 hover:border-sky-400/40",
  },
  "dev-tools-frameworks": {
    text: "text-emerald-300",
    icon: "text-emerald-300",
    border: "border-emerald-400/40",
    borderHover: "hover:border-emerald-400/40",
    tag: "hover:bg-emerald-500/15 hover:text-emerald-100 hover:border-emerald-400/40",
  },
  "office-productivity": {
    text: "text-amber-300",
    icon: "text-amber-300",
    border: "border-amber-400/40",
    borderHover: "hover:border-amber-400/40",
    tag: "hover:bg-amber-500/15 hover:text-amber-900 hover:border-amber-400/40",
  },
  "design-pm-tools": {
    text: "text-pink-300",
    icon: "text-pink-300",
    border: "border-pink-400/40",
    borderHover: "hover:border-pink-400/40",
    tag: "hover:bg-pink-500/15 hover:text-pink-100 hover:border-pink-400/40",
  },
  languages: {
    text: "text-violet-300",
    icon: "text-violet-300",
    border: "border-violet-400/40",
    borderHover: "hover:border-violet-400/40",
    tag: "hover:bg-violet-500/15 hover:text-violet-100 hover:border-violet-400/40",
  },
};

const FALLBACK = {
  text: "text-cyan-300",
  icon: "text-cyan-300",
  border: "border-cyan-400/40",
  borderHover: "hover:border-cyan-400/40",
  tag: "hover:bg-cyan-500/15 hover:text-cyan-100 hover:border-cyan-400/40",
};

export default function SkillCard({ card, accentClass, accentTextClass, className }: Props) {
  const [active, setActive] = useState(false);
  const tone = TONES[card.id] ?? FALLBACK;

  return (
    <article
      className={clsx(
        "group mx-auto w-full max-w-5xl rounded-2xl border bg-white/5 backdrop-blur-md shadow-md transition hover:-translate-y-0.5 hover:shadow-lg",
        "border-white/10",
        tone.borderHover,
        active && tone.border,
        className
      )}
    >
      <div className="h-40 px-5 py-3 md:h-48 md:px-6">
        <div className="h-full overflow-y-auto pr-1">
          <h3 className="mb-3 flex items-center gap-3.5 text-xl font-semibold text-zinc-100 md:text-2xl">
            <span
              className={clsx(
                "inline-flex h-12 w-12 items-center justify-center rounded-xl ring-1 ring-white/10 bg-linear-to-br",
                accentClass ?? "from-zinc-800/70 to-zinc-700/50"
              )}
            >
              <Icon
                icon={getHeaderIcon(card.id)}
                className={clsx(
                  "h-7 w-7 transition-colors",
                  "group-hover:opacity-100",
                  active ? tone.icon : "text-white/90"
                )}
              />
            </span>
            <span
              className={clsx(
                "leading-tight transition-colors",
                "group-hover:text-zinc-100",
                active && tone.text,
                accentTextClass
              )}
            >
              {card.title}
            </span>
          </h3>

          {card.type === "badges" ? (
            <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2.5">
              {(card.items as BadgeItem[]).map((it) => (
                <span
                  key={it.label}
                  onMouseEnter={() => setActive(true)}
                  onMouseLeave={() => setActive(false)}
                  className={clsx(
                    "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-zinc-200 transition-colors md:text-base",
                    tone.tag
                  )}
                >
                  {r(it.icon) && <Icon icon={r(it.icon)!} className="h-5 w-5 text-white/90" />}
                  <span className="truncate max-w-48 md:max-w-none">{it.label}</span>
                </span>
              ))}
            </div>
          ) : (
            <ul className="space-y-2.5">
              {card.items.map((l) => (
                <li key={l.code}>
                  <div className="flex items-center justify-between text-[15px] md:text-base">
                    <span className="font-medium text-zinc-100">{l.label}</span>
                    <span className="text-zinc-400">{l.level}</span>
                  </div>
                  <div className="mt-1.5 h-2 w-full rounded-full bg-white/10">
                    <div
                      className="h-2 rounded-full bg-linear-to-r from-sky-400 via-cyan-400 to-teal-400 shadow-md"
                      style={{ width: `${l.proficiency}%` }}
                      role="progressbar"
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={l.proficiency}
                    />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </article>
  );
}
