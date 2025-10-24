import { cookies } from "next/headers";
import { getSection } from "@/libs/getSection";
import { LOCALE_COOKIE, defaultLocale, type Locale } from "@/libs/i18n";
import type { Education } from "@/types/education.type";

export async function getEducation(): Promise<Education[]> {
  const locale = ((await cookies()).get(LOCALE_COOKIE)?.value as Locale) || defaultLocale;
  const data = await getSection<Education[]>("education", locale);
  return data.sort((a, b) => ((b.end ?? b.start) > (a.end ?? a.start) ? 1 : -1));
}

export function eduRange(start: string, end?: string, current?: boolean) {
  const [sy, sm = "01"] = start.split("-");
  const s = `${sm}/${sy}`;
  if (current) return `${s} — Present`;
  if (!end) return s;
  const [ey, em = "01"] = end.split("-");
  return `${s} — ${em}/${ey}`;
}
