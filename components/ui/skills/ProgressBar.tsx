"use client";
import { useEffect, useState } from "react";

type Props = { current?: number; total?: number; className?: string };

export default function ProgressBar({ current, total, className }: Props) {
  const [s, setS] = useState({ i: current ?? 0, t: total ?? 0 });

  useEffect(() => {
    if (current != null && total != null) {
      setS({ i: current, t: total });
      return;
    }
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
      {/* Track */}
      <div className="mx-auto h-3 w-full max-w-5xl rounded-full bg-white/10" />
      {/* Bar (brand azul) */}
      <div
        className="relative -mt-3 mx-auto h-3 max-w-5xl rounded-full bg-linear-to-r from-sky-400 via-cyan-400 to-teal-400 shadow-md transition-all duration-300"
        style={{ width: `${pct}%` }}
        role="progressbar"
        aria-label="Skills progress"
        aria-valuemin={0}
        aria-valuemax={Math.max(s.t - 1, 0)}
        aria-valuenow={s.i}
      />
    </div>
  );
}
