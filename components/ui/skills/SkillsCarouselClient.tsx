"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import type { SkillsCardBadges, SkillsCardLanguages } from "@/types/skills.type";
import SkillCard from "./SkillCard";
import CarouselNav from "./CarouselNav";

type T = SkillsCardBadges | SkillsCardLanguages;
type Props = { items: T[]; accentById?: Record<string, string>; className?: string };

const cx = (...a: (string | false | null | undefined)[]) => a.filter(Boolean).join(" ");
const toneText: Record<string, string> = {
  "programming-web": "hover:text-sky-400",
  "dev-tools-frameworks": "hover:text-emerald-400",
  "office-productivity": "hover:text-amber-400",
  "design-pm-tools": "hover:text-pink-400",
  languages: "hover:text-violet-400",
};
const fallbackText = "hover:text-cyan-400";

export default function SkillsCarouselClient({ items, accentById, className }: Props) {
  const [i, setI] = useState(0);
  const total = items.length || 1;

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("skills:progress", { detail: { index: i, total } }));
  }, [i, total]);

  const go = useCallback(
    (n: number) => {
      if (n === i || n < 0 || n >= total) return;
      setI(n);
    },
    [i, total]
  );
  const prev = () => go(i - 1);
  const next = () => go(i + 1);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    addEventListener("keydown", h);
    return () => removeEventListener("keydown", h);
  }, [i]);

  const startX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => (startX.current = e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    const s = startX.current;
    if (s == null) return;
    const dx = e.changedTouches[0].clientX - s;
    if (Math.abs(dx) > 40) (dx > 0 ? prev() : next());
    startX.current = null;
  };
  const cur = items[i];
  const acc = cur?.id ? `bg-gradient-to-br ${accentById?.[cur.id] ?? "from-zinc-800/70 to-zinc-700/50"}` : "";
  const titleTone = cur?.id ? toneText[cur.id] ?? fallbackText : fallbackText;

  return (
    <div className={className}>
      <div
        className="relative mx-auto w-full max-w-6xl select-none"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      > {/* Card actual con transición simple */}
        <div className="relative min-h-40 md:min-h-48 transition-all duration-300 ease-out">
          <SkillCard
            card={cur}
            accentClass={acc}
            accentTextClass={titleTone}
          />
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-30 hidden min-[1080px]:flex items-center justify-between">
          <div className="-ml-10 pointer-events-auto">
            <CarouselNav side="left" onPrev={prev} disablePrev={i === 0} />
          </div>
          <div className="-mr-10 pointer-events-auto">
            <CarouselNav side="right" onNext={next} disableNext={i === total - 1} />
          </div>
        </div>
      </div>
    </div>
  );
}
