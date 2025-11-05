"use client";
import React from "react";
import { Icon } from "@iconify/react";
import type { AboutCardProps } from "@/types/aboutMe.type";
import clsx from "clsx";

export default function AboutCard({
  title,
  icon,
  open,
  compactSiblings,
  onHover,
  onClick,         // ← click handler (móvil)
  children,
  accentClass,
  tone,
}: AboutCardProps) {
  const headerPad = open ? "py-5" : compactSiblings ? "py-3.5" : "py-5";
  const iconBox = "size-12 rounded-2xl";
  const iconSize = "h-7 w-7";
  const titleCls = "text-[18px] md:text-[19px]";

  const borderBase = "border border-white/10";
  const borderTone = open ? tone?.border : undefined;    // activo (móvil)
  const borderHover = tone?.borderHover;                 // hover (desktop)

  return (
    <article
      onMouseEnter={onHover}  // desktop: abre al hover
      onClick={onClick}       // móvil: abre/cierra al tap
      aria-expanded={open}
      className={clsx(
        "group grid min-h-0 cursor-pointer rounded-3xl bg-white/5 backdrop-blur",
        "transition-colors duration-200 hover:bg-white/10",
        borderBase,
        borderHover,           // hover pinta borde en desktop
        borderTone             // open pinta borde en móvil/desktop
      )}
      style={{ gridTemplateRows: open ? "auto 1fr" : "auto" }}
    >
      <div className={clsx("flex items-center gap-4 px-5", headerPad)}>
        <span
          className={clsx(
            "inline-flex items-center justify-center ring-1 ring-white/10 bg-linear-to-br",
            iconBox,
            accentClass ?? "from-zinc-800/70 to-zinc-700/50",
            "transition group-hover:brightness-110"
          )}
        >
          {icon ? (
            <Icon
              icon={icon}
              className={clsx(
                iconSize,
                "transition-colors text-white/90",
                tone && open && tone.icon,        // activo (móvil)
                tone && `group-hover:${tone.icon}`// hover (desktop)
              )}
              aria-hidden="true"
            />
          ) : (
            <span className="h-4 w-4 rounded-full bg-white/70" />
          )}
        </span>

        <h3
          className={clsx(
            titleCls,
            "truncate font-semibold text-zinc-100 transition-colors",
            tone && open && tone.text,           // activo (móvil)
            tone && `group-hover:${tone.text}`   // hover (desktop)
          )}
        >
          {title || "Untitled"}
        </h3>
      </div>

      {open && (
        <div className="min-h-0 overflow-auto px-5 pb-5">
          <div className="pr-1 text-[16px] leading-relaxed text-zinc-200/90">
            {children ?? "Add content here…"}
          </div>
        </div>
      )}
    </article>
  );
}
