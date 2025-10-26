"use client";
import { useEffect, useState } from "react";

type Props = { current?: number; total?: number; className?: string };

export default function ProgressBar({ current, total, className }: Props) {
  const [s, setS] = useState({ i: current ?? 0, t: total ?? 0 });

  useEffect(() => {
    if (current != null && total != null) { setS({ i: current, t: total }); return; }
    const on = (e: Event) => {
      const d = (e as CustomEvent).detail as { index: number; total: number };
      setS({ i: d.index, t: d.total });
    };
    window.addEventListener("skills:progress", on as EventListener);
    return () => window.removeEventListener("skills:progress", on as EventListener);
  }, [current, total]);

  const pct = s.t > 1 ? (s.i / (s.t - 1)) * 100 : 0;

  return (
    <div className={className ?? ""}>
      <div className="mx-auto h-4 w-full max-w-5xl rounded-full bg-neutral-700/50" />
      <div
        className="relative -mt-4 h-4 max-w-5xl mx-auto rounded-full bg-linear-to-r from-blue-500 via-indigo-500 to-fuchsia-500 shadow-[0_0_10px_rgba(99,102,241,0.35)] transition-[width] duration-300"
        style={{ width: `${pct}%` }}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={s.t - 1}
        aria-valuenow={s.i}
      />
    </div>
  );
}
