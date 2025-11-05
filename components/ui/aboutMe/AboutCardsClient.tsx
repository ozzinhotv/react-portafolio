// components/ui/aboutMe/AboutCardsClient.tsx
"use client";
import React from "react";
import { Icon } from "@iconify/react";
import AboutCardList from "./AboutCardList";
import { getHeaderIcon } from "@/icons/header-icons";
import type {
  AboutContentCard as AnyCard,
  TextCard,
  ListCard,
  TagsGroupCard,
  AboutItem,
} from "@/types/aboutMe.type";

const TONES: Record<
  string,
  { text: string; icon: string; border: string; borderHover: string }
> = {
  "my-story": {
    text: "text-sky-300",
    icon: "text-sky-300",
    border: "border-sky-400/40",
    borderHover: "hover:border-sky-400/40",
  },
  "technical-interests": {
    text: "text-emerald-300",
    icon: "text-emerald-300",
    border: "border-emerald-400/40",
    borderHover: "hover:border-emerald-400/40",
  },
  "what-drives-me": {
    text: "text-amber-300",
    icon: "text-amber-300",
    border: "border-amber-400/40",
    borderHover: "hover:border-amber-400/40",
  },
  "beyond-coding": {
    text: "text-fuchsia-300",
    icon: "text-fuchsia-300",
    border: "border-fuchsia-400/40",
    borderHover: "hover:border-fuchsia-400/40",
  },
};

const FALLBACK = {
  text: "text-cyan-300",
  icon: "text-cyan-300",
  border: "border-cyan-400/40",
  borderHover: "hover:border-cyan-400/40",
};

export default function AboutCardsClient({
  cards,
  accentById,
}: {
  cards: AnyCard[];
  accentById?: Record<string, string>;
}) {
  const items: AboutItem[] = cards.map((card) => {
    const headerIcon = getHeaderIcon(card.icon ?? card.id);
    const tone = TONES[card.id] ?? FALLBACK;

    let content: React.ReactNode = null;

    if (card.type === "text") {
      const c = card as TextCard;
      content = (
        <div className="space-y-3">
          {c.content.map((p, i) => (
            <p key={i} className="leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      );
    }

    if (card.type === "list") {
      const c = card as ListCard;
      content = (
        <div className="space-y-2.5">
          <ul className="space-y-2.5">
            {c.items.map((it) => {
              const itemIcon = it.icon ? getHeaderIcon(it.icon) : undefined;
              return (
                <li key={it.label} className="flex items-start gap-2 leading-relaxed">
                  {itemIcon ? (
                    <Icon icon={itemIcon} className="mt-0.5 h-4 w-4 shrink-0 text-white/80" aria-hidden="true" />
                  ) : (
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                  )}
                  <span>{it.label}</span>
                </li>
              );
            })}
          </ul>
          {"note" in c && c.note && <p className="text-sm italic text-zinc-400">{c.note}</p>}
        </div>
      );
    }

    if (card.type === "tags-group") {
      const c = card as TagsGroupCard;
      content = (
        <div className="space-y-4">
          {c.groups.map((g) => (
            <div key={g.label}>
              <p className="mb-2 text-sm font-medium text-zinc-400">{g.label}</p>
              <div className="flex flex-wrap gap-2">
                {g.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-zinc-200 transition hover:bg-white/10"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    }

    return {
      id: card.id,
      title: card.title,
      icon: headerIcon,
      content,
      accentClass: accentById?.[card.id],
      tone,
    };
  });

  return <AboutCardList items={items} />;
}
