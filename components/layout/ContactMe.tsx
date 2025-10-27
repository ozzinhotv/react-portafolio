import Link from "next/link";
import { cookies } from "next/headers";
import { getSection } from "@/libs/getSection";
import { LOCALE_COOKIE, defaultLocale, type Locale } from "@/libs/i18n";
import type { ContactPage } from "@/types/contactMe.type";
import ContactList from "@/components/ui/moreInfo/contactMe/ContactList";

export default async function Contact() {
  const locale =
    ((await cookies()).get(LOCALE_COOKIE)?.value as Locale) || defaultLocale;

  const data = await getSection<ContactPage>("contact", locale);

  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      {data.intro && (
        <header className="mb-6">
          <h2 className="text-balance text-3xl font-bold leading-tight">
            {data.intro.title}{" "}
            {data.intro.highlight && (
              <span className="text-blue-500">{data.intro.highlight}</span>
            )}
          </h2>
          {data.intro.subtitle && (
            <p className="mt-2 text-pretty text-zinc-400">{data.intro.subtitle}</p>
          )}
        </header>
      )}
      <ContactList cards={data.cards} />
      {data.cta && (
        <div className="mt-8">
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
