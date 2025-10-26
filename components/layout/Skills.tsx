import { cookies } from "next/headers";
import { getSection } from "@/libs/getSection";
import { LOCALE_COOKIE, defaultLocale, type Locale } from "@/libs/i18n";
import type { SkillsPage } from "@/types/skills.type";
import SkillsCarouselClient from "@/components/ui/skills/SkillsCarouselClient";
import ProgressBar from "@/components/ui/skills/ProgressBar";

export default async function Skills() {
  const locale = ((await cookies()).get(LOCALE_COOKIE)?.value as Locale) || defaultLocale;
  const data = await getSection<SkillsPage>("skills", locale);

  const accentById: Record<string, string> = {
    "programming-web": "from-sky-600/25 to-sky-500/15",
    "dev-tools-frameworks": "from-emerald-600/25 to-emerald-500/15",
    "office-productivity": "from-amber-600/25 to-amber-500/15",
    "design-pm-tools": "from-pink-600/25 to-pink-500/15",
    languages: "from-violet-600/25 to-violet-500/15",
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      {data.intro && (
        <header className="mb-6">
          <h2 className="text-balance text-3xl font-bold leading-tight">
            {data.intro.title} {data.intro.highlight && <span className="text-blue-500">{data.intro.highlight}</span>}
          </h2>
          {data.intro.subtitle && <p className="mt-2 text-pretty text-zinc-400">{data.intro.subtitle}</p>}
        </header>
      )}

      <SkillsCarouselClient items={data.cards} accentById={accentById} className="mx-auto md:mt-12" />
      <ProgressBar className="mt-4 md:mt-12" />
    </section>
  );
}
