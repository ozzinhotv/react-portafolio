"use client";

import clsx from "clsx";
import type { Experience } from "@/types/experience.type";
import ExperienceHeader from "./ExperienceHeader";
import ExperienceDetails from "./ExperienceDetails";

type Variant = "grid" | "timeline";
type Accent = "sky" | "blue" | "emerald" | "teal" | "violet" | "fuchsia" | "rose" | "amber";

const borderHover: Record<Accent, string> = {
  sky: "hover:border-sky-400/40",
  blue: "hover:border-blue-400/40",
  emerald: "hover:border-emerald-400/40",
  teal: "hover:border-teal-400/40",
  violet: "hover:border-violet-400/40",
  fuchsia: "hover:border-fuchsia-400/40",
  rose: "hover:border-rose-400/40",
  amber: "hover:border-amber-400/40",
};

export default function ExperienceItem({
  item,
  locale = "en",
  variant,
  open = false,
  onToggle,
  onHover,
  accent = "sky",
}: {
  item: Experience;
  locale?: "en" | "es";
  variant: Variant;
  open?: boolean;
  onToggle?: () => void;
  onHover?: (hovered: boolean) => void;
  accent?: Accent;
}) {
  if (variant === "grid") {
    return (
      <article className="rounded-2xl border border-white/10 bg-white/3 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-white/20 hover:shadow-lg">
        <ExperienceHeader item={item} locale={locale} open accent={accent} />
        <ExperienceDetails item={item} accent={accent} />
      </article>
    );
  }

  return (
    <article
      className={clsx(
        "rounded-2xl border border-white/10 bg-white/3 shadow-sm backdrop-blur transition",
        borderHover[accent],
        open ? "border-white/25 shadow-lg" : "hover:-translate-y-0.5 hover:border-white/20"
      )}
      onMouseEnter={() => onHover?.(true)}
      onMouseLeave={() => onHover?.(false)}
    >
      <button type="button" aria-expanded={open} onClick={onToggle} className="w-full text-left">
        <ExperienceHeader item={item} locale={locale} open={open} accent={accent} />
      </button>
      <div className={clsx("px-4 pb-4 transition", open ? "block" : "hidden")}>
        <ExperienceDetails item={item} accent={accent} />
      </div>
    </article>
  );
}
