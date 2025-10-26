import Image from "next/image";
import { cookies } from "next/headers";
import { getSection } from "@/libs/getSection";
import { LOCALE_COOKIE, defaultLocale, type Locale } from "@/libs/i18n";
import { compareByEndOrStartDesc, formatRangeMMYYYY } from "@/libs/date";
import type { EducationPage } from "@/types/education.type";

export default async function Education() {
  const locale =
    ((await cookies()).get(LOCALE_COOKIE)?.value as Locale) || defaultLocale;

  const page = await getSection<EducationPage>("education", locale);

  const items = [...page.items].sort(compareByEndOrStartDesc).map((e) => ({
    ...e,
    range: formatRangeMMYYYY(e.start, e.end, e.current, locale as "en" | "es"),
  }));

  return (
    <section className="mx-auto max-w-6xl p-6">
      {page.intro && (
        <header className="mb-6">
          <h2 className="text-balance text-3xl font-bold leading-tight">
            {page.intro.title}{" "}
            {page.intro.highlight && (
              <span className="text-blue-500">{page.intro.highlight}</span>
            )}
          </h2>
          {page.intro.subtitle && (
            <p className="mt-2 text-pretty text-zinc-400">{page.intro.subtitle}</p>
          )}
        </header>
      )}

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((e) => (
          <article
            key={e.id}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/3 p-5 shadow-sm backdrop-blur
                       transition-all hover:-translate-y-0.5 hover:border-white/20 hover:shadow-lg"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-sky-400/60 via-cyan-400/70 to-teal-400/60" />
            <header className="flex items-center gap-4 pt-1">
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
                <p className="mt-1 text-xs text-zinc-500">{e.range}</p>
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
      </div>
    </section>
  );
}
