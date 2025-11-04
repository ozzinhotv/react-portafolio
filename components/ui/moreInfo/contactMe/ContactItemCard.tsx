"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { getHeaderIcon } from "@/icons/header-icons";
import type { ContactCard } from "@/types/contactMe.type";

type Props = { card: ContactCard };

const CARD = "group relative h-full overflow-hidden rounded-2xl bg-white/5 p-6 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/7 hover:shadow-lg focus-within:-translate-y-0.5 focus-within:shadow-lg";
const TOP_BAR = "pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-sky-400/60 via-cyan-400/70 to-teal-400/60";
const ICON_BOX = "relative h-16 w-16 shrink-0 overflow-hidden rounded-xl";
const TITLE = "truncate text-lg font-semibold leading-snug";
const SUB = "mt-0.5 text-base text-zinc-300";

const accentByCardId: Record<string, string> = {
  email: "from-sky-600/25 to-sky-500/20",
  linkedin: "from-blue-600/25 to-blue-500/20",
  location: "from-emerald-600/25 to-emerald-500/20",
};

export default function ContactItemCard({ card }: Props) {
  const iconSlug = getHeaderIcon(card.icon ?? card.id);
  const accent = accentByCardId[card.id] ?? "from-zinc-800/60 to-zinc-700/40";

  const ValueWrap: React.ElementType = card.href ? Link : "span";
  const valueProps = card.href ? { href: card.href } : {};

  return (
    <article className={CARD}>
      <div className={TOP_BAR} />

      <header className="flex items-center gap-5 pt-1">
        <div className={ICON_BOX}>
          <div className={`flex h-full w-full items-center justify-center rounded-xl bg-linear-to-br ${accent} transition-transform duration-200 ease-out group-hover:scale-105 group-hover:brightness-110`}>
            <Icon icon={iconSlug} className="h-10 w-10 text-white/85 transition-transform duration-200 ease-out group-hover:translate-y-px" />
          </div>
        </div>

        <div className="min-w-0">
          <h3 className={TITLE}>{card.title}</h3>
          <ValueWrap
            {...valueProps}
            className={`${SUB} inline-flex items-center gap-2 transition-colors ${card.href ? "text-blue-400 hover:underline focus-visible:underline" : "group-hover:text-zinc-200"}`}
          >
            {card.value}
          </ValueWrap>
        </div>
      </header>
    </article>
  );
}
