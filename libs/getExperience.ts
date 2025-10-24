import { getSection } from "@/libs/getSection";
import { cookies } from "next/headers";
import { LOCALE_COOKIE, defaultLocale, type Locale } from "@/libs/i18n";
import type { Experience } from "@/types/experience.type";

export async function getExperience(): Promise<Experience[]> {
  const locale = ((await cookies()).get(LOCALE_COOKIE)?.value as Locale) || defaultLocale;
  const data = await getSection<Experience[]>("experience", locale); 
  return data.sort((a, b) => {
    const aKey = (a.current ? "9999-99" : a.end ?? a.start) + "-" + a.start;
    const bKey = (b.current ? "9999-99" : b.end ?? b.start) + "-" + b.start;
    return aKey < bKey ? 1 : -1;
  });
}

export function fmtRange(start: string, end?: string, current?: boolean) {
  const [sy, sm = "01"] = start.split("-");
  const s = `${sm}/${sy}`;
  if (current) return `${s} — Presente`;
  if (!end) return s;
  const [ey, em = "01"] = end.split("-");
  return `${s} — ${em}/${ey}`;
}