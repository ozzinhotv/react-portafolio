import { cookies } from "next/headers";
import { getSection } from "@/libs/getSection";
import { LOCALE_COOKIE, defaultLocale, type Locale } from "@/libs/i18n";
import { compareByEndOrStartDesc } from "@/libs/date";
import type { ExperiencePage } from "@/types/experience.type";
import ExperienceTimeline from "@/components/ui/experience/ExperienceTimeline";
import HeaderInline from "@/components/ui/shared/components/HeaderInline";

export default async function ExperienceList() {
  const locale =
    ((await cookies()).get(LOCALE_COOKIE)?.value as Locale) || defaultLocale;

  const page = await getSection<ExperiencePage>("experience", locale);
  const items = [...page.items].sort(compareByEndOrStartDesc);

  return (
    <section className="mx-auto max-w-6xl p-6">
      {page.intro && <HeaderInline intro={page.intro} />}

      <ExperienceTimeline
        items={items}
        locale={(locale as "en" | "es") ?? "en"}
        accent="sky"
      />
    </section>
  );
}
