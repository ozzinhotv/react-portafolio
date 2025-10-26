"use client";

import { useState } from "react";
import type { Experience } from "@/types/experience.type";
import ExperienceItem from "./ExperienceItem";

type Accent = "sky" | "blue" | "emerald" | "teal" | "violet" | "fuchsia" | "rose" | "amber";

const rail: Record<Accent, string> = {
  sky: "from-sky-500/80 via-sky-400/40 to-transparent",
  blue: "from-blue-500/80 via-blue-400/40 to-transparent",
  emerald: "from-emerald-500/80 via-emerald-400/40 to-transparent",
  teal: "from-teal-500/80 via-teal-400/40 to-transparent",
  violet: "from-violet-500/80 via-violet-400/40 to-transparent",
  fuchsia: "from-fuchsia-500/80 via-fuchsia-400/40 to-transparent",
  rose: "from-rose-500/80 via-rose-400/40 to-transparent",
  amber: "from-amber-500/80 via-amber-400/40 to-transparent",
};

export default function ExperienceTimeline({
  items,
  locale = "en",
  accent = "sky",
}: {
  items: Experience[];
  locale?: "en" | "es";
  accent?: Accent;
}) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="relative">
      <div
        className={`pointer-events-none absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 h-full w-0.5 md:w-1 rounded-full bg-linear-to-b ${rail[accent]}`}
      />
      <ul className="space-y-3 sm:space-y-4">
        {items.map((it, idx) => {
          const leftSide = idx % 2 === 0; // desktop alterna
          return (
            <li key={it.id} className="relative pl-12 md:pl-0">
              <span className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-white/70 ring-2 ring-zinc-900/80 dark:bg-zinc-200" />
              <div
                className={
                  leftSide
                    ? "md:w-1/2 md:pr-8 md:mr-auto md:text-left"
                    : "md:w-1/2 md:pl-8 md:ml-auto"
                }
              >
                <ExperienceItem
                  item={it}
                  locale={locale}
                  variant="timeline"
                  open={openId === it.id}
                  onToggle={() => setOpenId((p) => (p === it.id ? null : it.id))}
                  onHover={(v) => setOpenId(v ? it.id : null)}
                  accent={accent}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
