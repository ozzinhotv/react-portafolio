import Link from "next/link";
import { cookies } from "next/headers";
import { getSection } from "@/libs/getSection";
import { LOCALE_COOKIE, defaultLocale, type Locale } from "@/libs/i18n";
import type { ContactPage } from "@/types/contactMe.type";
import ContactList from "@/components/ui/moreInfo/contactMe/ContactList";
import HeaderInline from "@/components/ui/shared/components/HeaderInline";

export default async function Contact() {
  const locale =
    ((await cookies()).get(LOCALE_COOKIE)?.value as Locale) || defaultLocale;

  const data = await getSection<ContactPage>("contact", locale);

  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      {data.intro && <HeaderInline intro={data.intro} />}

      <ContactList cards={data.cards} />

      {data.cta && (
        <div className="mt-8 text-center">
          <Link
            href={data.cta.href}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm text-white transition hover:bg-blue-500"
          >
            {data.cta.label}
          </Link>
        </div>
      )}
    </section>
  );
}
