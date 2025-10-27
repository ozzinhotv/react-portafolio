"use client";

import Image from "next/image";
import type { Education } from "@/types/education.type";

type Props = {
  item: Education & { range: string };
};

export default function EducationItemCard({ item }: Props) {
  return (
    <article
      className="group relative overflow-hidden rounded-2xl bg-white/5 p-6
                 backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/7 hover:shadow-lg"
    >
      {/* barra superior (sin bordes) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-sky-400/60 via-cyan-400/70 to-teal-400/60" />

      <header className="flex items-center gap-5 pt-1">
        {/* Contenedor del logo SIN ring/border/shadow */}
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
          {item.logo ? (
            <Image
              src={item.logo}
              alt={`${item.institution} logo`}
              fill
              sizes="64px"
              className="object-contain"
              priority={false}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center rounded-xl bg-white/10 text-sm font-semibold text-zinc-500">
              {item.institution?.slice(0, 2).toUpperCase() ?? "ED"}
            </div>
          )}
        </div>

        {/* Contenido más grande */}
        <div className="min-w-0">
          <h3 className="truncate text-lg font-semibold leading-snug">
            {item.degree}
          </h3>
          <p className="mt-0.5 line-clamp-2 text-base text-zinc-300">
            {item.institution}
            {item.location ? ` · ${item.location}` : ""}
          </p>
          <p className="mt-1 text-sm text-zinc-500">{item.range}</p>
        </div>
      </header>

      {item.highlights?.length ? (
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-zinc-300">
          {item.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      ) : null}

      {item.skills?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {item.skills.map((s) => (
            <span
              key={s}
              className="rounded-full bg-white/5 px-2.5 py-0.5 text-xs text-zinc-200"
            >
              {s}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
}
