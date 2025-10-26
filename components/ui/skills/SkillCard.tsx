"use client";
import { Icon } from "@iconify/react";
import type { SkillsCardBadges, SkillsCardLanguages, BadgeItem } from "@/types/skills.type";
import { ICONS, ICON_ALIASES } from "@/icons/skill-icons";
import { getHeaderIcon } from "@/icons/header-icons";
import clsx from "clsx";

type Props = {
  card: SkillsCardBadges | SkillsCardLanguages;
  accentClass?: string;
  accentTextClass?: string;
  tagHoverClass?: string;
  className?: string;
};

const r = (s?: string) =>
  s ? ICONS[s.toLowerCase()] ?? (ICON_ALIASES[s.toLowerCase()] && ICONS[ICON_ALIASES[s.toLowerCase()]]) : undefined;

export default function SkillCard({ card, accentClass, accentTextClass, tagHoverClass, className }: Props) {
  return (
    <article
      className={clsx(
        "mx-auto w-full max-w-5xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-md",
        "transition hover:-translate-y-0.5 hover:shadow-lg",
        className
      )}
    >
      <div className="h-40 md:h-48 px-5 md:px-6 py-3">
        <div className="h-full overflow-y-auto pr-1">
          <h3 className="mb-3 flex items-center gap-3.5 text-xl md:text-2xl font-semibold text-zinc-100">
            <span
              className={clsx(
                "inline-flex h-12 w-12 md:h-13 md:w-13 items-center justify-center rounded-xl ring-1 ring-white/10",
                "bg-linear-to-br",
                accentClass ?? "from-zinc-800/70 to-zinc-700/50"
              )}
            >
              <Icon icon={getHeaderIcon(card.id)} className="h-7 w-7 md:h-8 md:w-8 text-white/90" />
            </span>
            <span className={clsx("leading-tight transition-colors", accentTextClass)}>{card.title}</span>
          </h3>

          {card.type === "badges" ? (
            <div className="mx-auto max-w-4xl flex flex-wrap justify-center gap-2.5">
              {(card.items as BadgeItem[]).map((it) => (
                <span
                  key={it.label}
                  className={clsx(
                    "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm md:text-base text-zinc-200 transition-colors",
                    tagHoverClass
                  )}
                >
                  {r(it.icon) && <Icon icon={r(it.icon)!} className="h-5 w-5 md:h-5.5 md:w-5.5 text-white/90" />}
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
                      className="h-2 rounded-full bg-linear-to-r from-blue-500 via-indigo-500 to-fuchsia-500 shadow-[0_0_10px_rgba(99,102,241,0.35)]"
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
