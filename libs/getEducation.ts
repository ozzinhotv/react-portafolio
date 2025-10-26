// libs/getEducation.ts
import { cookies } from "next/headers";
import { getSection } from "@/libs/getSection";
import { LOCALE_COOKIE, defaultLocale, type Locale } from "@/libs/i18n";
import type { Education, EducationPage } from "@/types/education.type";
import { compareByEndOrStartDesc, formatRangeMMYYYY } from "@/libs/date";

export async function getEducation(): Promise<Education[]> {
  const locale =
    ((await cookies()).get(LOCALE_COOKIE)?.value as Locale) || defaultLocale;

  // ⬇️ AHORA pedimos el objeto de página, no un array
  const page = await getSection<EducationPage>("education", locale);

  // Devolvemos SOLO los items, ordenados DESC por (end ?? start)
  return [...page.items].sort(compareByEndOrStartDesc);
}

export function eduRange(
  start: string,
  end?: string,
  current?: boolean,
  locale: "en" | "es" = "en"
) {
  return formatRangeMMYYYY(start, end, current, locale);
}
