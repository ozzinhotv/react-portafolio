"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import type { SkillsCardBadges, SkillsCardLanguages } from "@/types/skills.type";
import SkillCard from "./SkillCard";
import CarouselNav from "./CarouselNav";

type T = SkillsCardBadges | SkillsCardLanguages;
type Props = { items: T[]; accentById?: Record<string, string>; className?: string };

const cx = (...a: (string | false | null | undefined)[]) => a.filter(Boolean).join(" ");
const TONES: Record<string, { text: string; tag: string }> = {
  "programming-web": { text: "hover:text-sky-400", tag: "hover:bg-sky-500/15 hover:text-sky-100 hover:border-sky-400/40" },
  "dev-tools-frameworks": { text: "hover:text-emerald-400", tag: "hover:bg-emerald-500/15 hover:text-emerald-100 hover:border-emerald-400/40" },
  "office-productivity": { text: "hover:text-amber-400", tag: "hover:bg-amber-500/15 hover:text-amber-900 hover:border-amber-400/40" },
  "design-pm-tools": { text: "hover:text-pink-400", tag: "hover:bg-pink-500/15 hover:text-pink-100 hover:border-pink-400/40" },
  languages: { text: "hover:text-violet-400", tag: "hover:bg-violet-500/15 hover:text-violet-100 hover:border-violet-400/40" },
};
const tone = (id?: string) => (id && TONES[id]) || { text: "hover:text-indigo-400", tag: "hover:bg-indigo-500/15 hover:text-indigo-100 hover:border-indigo-400/40" };
const useReduce = () => {
  const [v, s] = useState(false);
  useEffect(() => {
    const q = matchMedia("(prefers-reduced-motion: reduce)"), f = () => s(q.matches);
    f(); q.addEventListener("change", f); return () => q.removeEventListener("change", f);
  }, []);
  return v;
};

export default function SkillsCarouselClient({ items, accentById, className }: Props) {
  const [i, setI] = useState(0);
  const [ex, setEx] = useState<number | null>(null);
  const total = items.length || 1;
  const reduce = useReduce();
  const trans = reduce ? "" : "transform-gpu transition-all duration-300 ease-out";
  const acc = (id?: string) => (id ? `bg-gradient-to-br ${accentById?.[id] ?? "from-zinc-800/70 to-zinc-700/50"}` : "");

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("skills:progress", { detail: { index: i, total } }));
  }, [i, total]);

  const go = useCallback(
    (n: number) => {
      if (n === i || n < 0 || n > total - 1) return;
      setEx(i); setI(n); setTimeout(() => setEx(null), reduce ? 0 : 320);
    },
    [i, total, reduce]
  );
  const prev = () => go(i - 1);
  const next = () => go(i + 1);

  useEffect(() => {
    const h = (e: KeyboardEvent) => (e.key === "ArrowLeft" ? prev() : e.key === "ArrowRight" ? next() : null);
    addEventListener("keydown", h); return () => removeEventListener("keydown", h);
  }, [i]);

  const startX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => (startX.current = e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    const s = startX.current; if (s == null) return;
    const dx = e.changedTouches[0].clientX - s; if (Math.abs(dx) > 40) (dx > 0 ? prev() : next());
    startX.current = null;
  };

  const cur = items[i];
  const out = ex != null ? items[ex] : null;
  const movingRight = ex != null && i > ex;
  const movingLeft = ex != null && i < ex;

  return (
    <div className={className}>
      <div className="relative mx-auto w-full max-w-6xl select-none" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div className="relative min-h-40 md:min-h-48">
          {out && (
            <div
              className={cx(
                "hidden min-[1080px]:block min-[1080px]:absolute min-[1080px]:inset-0",
                trans,
                "min-[1080px]:opacity-100 min-[1080px]:translate-x-0",
                movingRight && "min-[1080px]:opacity-0 min-[1080px]:-translate-x-6",
                movingLeft && "min-[1080px]:opacity-0 min-[1080px]:translate-x-6"
              )}
            >
              <SkillCard card={out} accentClass={acc(out.id)} accentTextClass={tone(out.id).text} tagHoverClass={tone(out.id).tag} />
            </div>
          )}

          <div
            className={cx(
              trans,
              out && movingRight && "min-[1080px]:opacity-0 min-[1080px]:translate-x-6",
              out && movingLeft && "min-[1080px]:opacity-0 min-[1080px]:-translate-x-6",
              "min-[1080px]:opacity-100 min-[1080px]:translate-x-0"
            )}
          >
            <SkillCard card={cur} accentClass={acc(cur.id)} accentTextClass={tone(cur.id).text} tagHoverClass={tone(cur.id).tag} />
          </div>

          <div className="hidden min-[1080px]:flex absolute inset-y-0 left-0 right-0 z-30 pointer-events-none items-center justify-between">
            <div className="-ml-10 pointer-events-auto"><CarouselNav side="left" onPrev={prev} disablePrev={i === 0} /></div>
            <div className="-mr-10 pointer-events-auto"><CarouselNav side="right" onNext={next} disableNext={i === total - 1} /></div>
          </div>
        </div>
      </div>
    </div>
  );
}
