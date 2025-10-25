import Image from "next/image";
import { getEducation, eduRange } from "@/libs/getEducation";

export default async function Education() {
  const items = await getEducation();

  return (
    <section className="mx-auto grid max-w-6xl gap-5 p-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((e) => (
        <article
          key={e.id}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/3 p-5 shadow-sm backdrop-blur
                     transition-all hover:-translate-y-0.5 hover:border-white/20 hover:shadow-lg"
        >
          {/* accent bar */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-sky-400/60 via-cyan-400/70 to-teal-400/60" />

          <header className="flex items-center gap-4 pt-1">
            {/* LOGO más visible */}
            <div
              className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-white/90 p-1.5
                         ring-1 ring-black/10 shadow-sm dark:bg-zinc-900/90 dark:ring-white/10"
            >
              {e.logo ? (
                <Image
                  src={e.logo}
                  alt={`${e.institution} logo`}
                  fill
                  sizes="64px"
                  className="object-contain"
                  priority={false}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-zinc-500">
                  {e.institution?.slice(0, 2).toUpperCase() ?? "ED"}
                </div>
              )}
            </div>

            <div className="min-w-0">
              <h3 className="truncate text-base font-semibold leading-tight">
                {e.degree}
              </h3>
              <p className="mt-0.5 line-clamp-2 text-sm text-zinc-400">
                {e.institution}
                {e.location ? ` · ${e.location}` : ""}
              </p>
              <p className="mt-1 text-xs text-zinc-500">
                {eduRange(e.start, e.end, e.current)}
              </p>
            </div>
          </header>

          {e.highlights?.length ? (
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-zinc-300">
              {e.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          ) : null}

          {e.skills?.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {e.skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-zinc-200"
                >
                  {s}
                </span>
              ))}
            </div>
          ) : null}
        </article>
      ))}
    </section>
  );
}
