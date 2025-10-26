// libs/getSection.ts
import type { Locale } from "@/libs/i18n";

const SECTION_ALIASES: Record<string, string[]> = {
  projects: ["projects", "project"],
  project: ["project", "projects"],

  experience: ["experience"],
  education: ["education"],
  skills: ["skills"],
  about: ["about"],
  contact: ["contact"],
};

export async function getSection<T>(section: string, locale: Locale): Promise<T> {
  const names = SECTION_ALIASES[section] ?? [section];
  const locales: Locale[] = [locale, "en" as Locale];

  for (const loc of locales) {
    for (const name of names) {
      try {
        const mod = await import(`@/data/${loc}/${name}.${loc}.json`);
        return mod.default as T;
      } catch {
        // prueba la siguiente combinación
      }
    }
  }

  const tried = locales
    .flatMap((loc) => names.map((name) => `/data/${loc}/${name}.${loc}.json`))
    .join("\n  - ");
  throw new Error(
    `getSection: no encontré JSON para "${section}". Probé:\n  - ${tried}`
  );
}
