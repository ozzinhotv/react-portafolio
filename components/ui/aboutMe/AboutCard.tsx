"use client";
import React from "react";
import { Icon } from "@iconify/react";
import type { AboutCardProps } from "@/types/aboutMe.type";

export default function AboutCard({
  title,
  icon,
  open,
  compactSiblings,
  onHover,
  children,
  accentClass,
}: AboutCardProps) {
  const headerPad = open ? "py-5" : compactSiblings ? "py-3.5" : "py-5";
  const iconBox = "size-12 rounded-2xl";
  const iconSize = "h-7 w-7";
  const titleCls = "text-[18px] md:text-[19px]";

  return (
    <article
      onMouseEnter={onHover}
      className={[
        "group rounded-3xl cursor-pointer",
        "border border-white/10 bg-white/4.5 backdrop-blur",
        "transition-colors duration-200 hover:border-white/15 hover:bg-white/[0.07]",
        "grid min-h-0",
      ].join(" ")}
      style={{ gridTemplateRows: open ? "auto 1fr" : "auto" }}
    >
      <div className={`flex items-center gap-4 px-5 ${headerPad}`}>
        <span
          className={[
            `inline-flex ${iconBox} items-center justify-center ring-1 ring-white/10`,
            "bg-linear-to-br",
            accentClass || "from-zinc-800/70 to-zinc-700/50",
            "transition group-hover:brightness-110",
          ].join(" ")}
        >
          {icon ? <Icon icon={icon} className={`${iconSize} text-white/90`} aria-hidden="true" /> : <span className="h-4 w-4 rounded-full bg-white/70" />}
        </span>
        <h3 className={`${titleCls} font-semibold truncate text-zinc-100`}>{title || "Untitled"}</h3>
      </div>

      {open && (
        <div className="px-5 pb-5 min-h-0 overflow-auto">
          <div className="pr-1 text-[16px] md:text-[17px] text-zinc-200/90 leading-relaxed">{children ?? "Add content here…"}</div>
        </div>
      )}
    </article>
  );
}
