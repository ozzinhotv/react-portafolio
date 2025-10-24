import type { Locale } from "@/libs/i18n";

export async function getSection<T>(section: string, locale: Locale): Promise<T> {
  try {
    return (await import(`@/data/${locale}/${section}.${locale}.json`)).default as T;
  } catch {
    return (await import(`@/data/en/${section}.en.json`)).default as T;
  }
}
