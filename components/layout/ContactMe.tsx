import Link from "next/link";
import { cookies } from "next/headers";
import { getSection } from "@/libs/getSection";
import { LOCALE_COOKIE, defaultLocale, type Locale } from "@/libs/i18n";

type ContactCard = {
  id: string;
  title: string;
  icon?: string;
  value: string;
  href?: string;
};

type ContactData = {
  page: "contact";
  version: number;
  locale?: string;
  intro?: { title?: string; highlight?: string; subtitle?: string };
  cards: ContactCard[];
  cta?: { label: string; icon?: string; href: string };
  social?: { id: string; icon?: string; href: string }[];
};

export default async function Contact() {
  const locale = ((await cookies()).get(LOCALE_COOKIE)?.value as Locale) || defaultLocale;
  // Asegúrate de tener: data/en/contact.en.json y data/es/contact.es.json
  const data = await getSection<ContactData>("contact", locale);

  return (
    <section className="mx-auto max-w-6xl p-6">
      {/* Intro */}
      {data.intro && (
        <header className="mb-6">
          <h1 className="text-3xl font-bold">
            {data.intro.title}{" "}
            {data.intro.highlight && (
              <span className="text-blue-500">{data.intro.highlight}</span>
            )}
          </h1>
          {data.intro.subtitle && (
            <p className="mt-1 text-zinc-400">{data.intro.subtitle}</p>
          )}
        </header>
      )}

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {data.cards.map((c) => (
          <article
            key={c.id}
            className="rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <h3 className="text-lg font-semibold">{c.title}</h3>
            {c.href ? (
              <Link
                href={c.href}
                className="mt-2 block text-sm text-blue-400 hover:underline"
              >
                {c.value}
              </Link>
            ) : (
              <p className="mt-2 text-sm text-zinc-300">{c.value}</p>
            )}
          </article>
        ))}
      </div>

      {/* CTA */}
      {data.cta && (
        <div className="mt-8">
          <Link
            href={data.cta.href}
            className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-500"
          >
            {data.cta.label}
          </Link>
        </div>
      )}

      {/* Social */}
      {data.social?.length ? (
        <div className="mt-8 flex flex-wrap gap-3">
          {data.social.map((s) => (
            <Link
              key={s.id}
              href={s.href}
              className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-zinc-100 hover:bg-white/5"
            >
              {s.id}
            </Link>
          ))}
        </div>
      ) : null}
    </section>
  );
}
