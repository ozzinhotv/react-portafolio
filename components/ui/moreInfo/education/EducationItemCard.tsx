"use client";

import Image from "next/image";
import type { Education } from "@/types/education.type";

type Props = { item: Education & { range: string } };

const CARD = "group relative h-full overflow-hidden rounded-2xl bg-white/5 p-6 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/7 hover:shadow-lg";
const TOP_BAR = "pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-sky-400/60 via-cyan-400/70 to-teal-400/60";
const ICON_BOX = "relative h-16 w-16 shrink-0 overflow-hidden rounded-xl";
const TITLE = "truncate text-lg font-semibold leading-snug";
const SUB = "mt-0.5 text-base text-zinc-300";
const META = "mt-1 text-sm text-zinc-500";

export default function EducationItemCard({ item }: Props) {
  return (
    <article className={CARD}>
      <div className={TOP_BAR} />

      <header className="flex items-center gap-5 pt-1">
        <div className={ICON_BOX}>
          {item.logo ? (
            <Image src={item.logo} alt={`${item.institution} logo`} fill sizes="64px" className="object-contain" priority={false} />
          ) : (
            <div className="flex h-full w-full items-center justify-center rounded-xl bg-white/10 text-sm font-semibold text-zinc-500">
              {(item.institution?.slice(0, 2) ?? "ED").toUpperCase()}
            </div>
          )}
        </div>

        <div className="min-w-0">
          <h3 className={TITLE}>{item.degree}</h3>
          <p className={SUB}>
            {item.institution}
            {item.location ? ` · ${item.location}` : ""}
          </p>
          <p className={META}>{item.range}</p>
        </div>
      </header>

      {item.highlights?.length ? (
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-zinc-300">
          {item.highlights.map((h, i) => <li key={i}>{h}</li>)}
        </ul>
      ) : null}

      {item.skills?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {item.skills.map((s) => (
            <span key={s} className="rounded-full bg-white/5 px-2.5 py-0.5 text-xs text-zinc-200">
              {s}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
}
