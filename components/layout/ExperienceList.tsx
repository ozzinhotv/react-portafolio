import { cookies } from "next/headers";
import { getSection } from "@/libs/getSection";
import { LOCALE_COOKIE, defaultLocale, type Locale } from "@/libs/i18n";
import { compareByEndOrStartDesc } from "@/libs/date";
import ExperienceCard from "@/components/ui/ExperienceCard";
import type { ExperiencePage } from "@/types/experience.type";

export default async function ExperienceList() {
  const locale =
    ((await cookies()).get(LOCALE_COOKIE)?.value as Locale) || defaultLocale;

  const page = await getSection<ExperiencePage>("experience", locale);
  const items = [...page.items].sort(compareByEndOrStartDesc);

  return (
    <section className="mx-auto max-w-6xl p-6">
      {/* Header */}
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

      {/* Grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <ExperienceCard key={it.id} item={it} locale={locale as "en" | "es"} />
        ))}
      </div>
    </section>
  );
}
