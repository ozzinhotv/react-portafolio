import { cookies } from "next/headers";
import { getSection } from "@/libs/getSection";
import { LOCALE_COOKIE, defaultLocale, type Locale } from "@/libs/i18n";
import { compareByEndOrStartDesc, formatRangeMMYYYY } from "@/libs/date";
import type { EducationPage } from "@/types/education.type";
import EducationList from "@/components/ui/moreInfo/education/EducationList";
import HeaderInline from "@/components/ui/shared/components/HeaderInline";

export default async function Education() {
  const locale =
    ((await cookies()).get(LOCALE_COOKIE)?.value as Locale) || defaultLocale;

  const page = await getSection<EducationPage>("education", locale);

  const items = [...page.items]
    .sort(compareByEndOrStartDesc)
    .map((e) => ({
      ...e,
      range: formatRangeMMYYYY(e.start, e.end, e.current, locale as "en" | "es"),
    }));

  return (
    <section className="mx-auto max-w-6xl p-6">
      {page.intro && <HeaderInline intro={page.intro} />}

      <EducationList items={items} />
    </section>
  );
}
