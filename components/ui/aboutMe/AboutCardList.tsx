"use client";
import React from "react";
import AboutCard from "./AboutCard";
import type { AboutItem } from "@/types/aboutMe.type";

type Props = {
  items: AboutItem[];
  className?: string;
};

export default function AboutCardList({ items, className }: Props) {
  const [active, setActive] = React.useState<string | null>(null);
  const hasOpen = Boolean(active);
  const rowWeights = !hasOpen ? items.map(() => 1) : items.map((it) => (it.id === active ? 2.6 : 0.75));
  const gridTemplateRows = rowWeights.map((w) => `${w}fr`).join(" ");

  return (
    <div
      className={[
        "w-full max-w-(--aboutBoxW) h-(--aboutBoxH)",
        "rounded-4xl p-3",
        "border border-white/10 bg-white/3 backdrop-blur",
        "min-h-0",
        className || "",
      ].join(" ")}
      onMouseLeave={() => setActive(null)}
    >
      <div className="grid gap-3 h-full min-h-0" style={{ gridTemplateRows }}>
        {items.map((it) => (
          <AboutCard
            key={it.id}
            title={it.title}
            icon={it.icon}
            open={active === it.id}
            compactSiblings={hasOpen && active !== it.id}
            onHover={() => setActive(it.id)}
            accentClass={it.accentClass}
          >
            {it.content}
          </AboutCard>
        ))}
      </div>
    </div>
  );
}
