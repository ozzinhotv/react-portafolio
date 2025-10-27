"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { getHeaderIcon } from "@/icons/header-icons";
import type { ContactCard } from "@/types/contactMe.type";

type Props = { card: ContactCard };

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
    <article
      className="group relative overflow-hidden rounded-2xl bg-white/5 p-6
                 backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/7 hover:shadow-lg
                 focus-within:-translate-y-0.5 focus-within:shadow-lg"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-sky-400/60 via-cyan-400/70 to-teal-400/60" />

      <header className="flex items-center gap-5 pt-1">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
          <div
            className={[
              "flex h-full w-full items-center justify-center rounded-xl bg-linear-to-br",
              "transition-transform duration-200 ease-out group-hover:scale-105 group-hover:brightness-110",
              accent,
            ].join(" ")}
          >
            <Icon
              icon={iconSlug}
              className="h-10 w-10 text-white/85 transition-transform duration-200 ease-out group-hover:translate-y-px"
            />
          </div>
        </div>
        <div className="min-w-0">
          <h3 className="truncate text-lg font-semibold leading-snug transition-colors group-hover:text-zinc-50">
            {card.title}
          </h3>
          <ValueWrap
            {...valueProps}
            className={[
              "mt-1 inline-flex items-center gap-2 text-base transition-colors",
              card.href
                ? "text-blue-400 hover:underline focus-visible:underline"
                : "text-zinc-300 group-hover:text-zinc-200",
            ].join(" ")}
          >
            {card.value}
          </ValueWrap>
        </div>
      </header>
    </article>
  );
}
