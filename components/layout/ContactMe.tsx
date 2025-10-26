import Link from "next/link";
import { cookies } from "next/headers";
import { getSection } from "@/libs/getSection";
import { LOCALE_COOKIE, defaultLocale, type Locale } from "@/libs/i18n";
import { Icon } from "@iconify/react";
import { getHeaderIcon } from "@/icons/header-icons";

// ⬇️ Usa los tipos desde /types
import type { ContactPage } from "@/types/contactMe.type";

export default async function Contact() {
  const locale =
    ((await cookies()).get(LOCALE_COOKIE)?.value as Locale) || defaultLocale;

  // Asegúrate de tener: src/data/en/contact.en.json y src/data/es/contact.es.json
  const data = await getSection<ContactPage>("contact", locale);

  // Acentos sutiles por card (opcional)
  const accentByCardId: Record<string, string> = {
    email: "from-sky-600/25 to-sky-500/15",
    linkedin: "from-blue-600/25 to-blue-500/15",
    location: "from-emerald-600/25 to-emerald-500/15",
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
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
      <div className="grid gap-5 md:grid-cols-3">
        {data.cards.map((c) => {
          const titleIcon = getHeaderIcon(c.icon ?? c.id);

          return (
            <article
              key={c.id}
              className="group rounded-2xl border border-white/10 bg-white/4 p-5
                         shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] backdrop-blur
                         transition hover:bg-white/6 hover:shadow-lg"
            >
              {/* Header: icono alto = (título + valor) */}
              <div className="flex items-start justify-between">
                <div className="flex items-stretch gap-3">
                  <span
                    className={[
                      "self-stretch inline-flex w-10 items-center justify-center rounded-xl",
                      "ring-1 ring-white/10 transition bg-linear-to-br",
                      accentByCardId[c.id] ?? "from-zinc-800/70 to-zinc-700/50",
                      "group-hover:brightness-110",
                    ].join(" ")}
                    aria-hidden="true"
                  >
                    <Icon icon={titleIcon} className="h-5 w-5 text-white/85" />
                  </span>

                  {/* Bloque de texto: título + valor (link o texto) */}
                  <div className="flex min-w-0 flex-col">
                    <h3 className="text-base font-semibold tracking-wide text-zinc-100">
                      {c.title}
                    </h3>

                    {c.href ? (
                      <Link
                        href={c.href}
                        className="mt-1 inline-flex items-center gap-2 text-sm text-blue-400 hover:underline"
                      >
                        {c.value}
                      </Link>
                    ) : (
                      <p className="mt-1 text-sm text-zinc-300">{c.value}</p>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* CTA */}
      {data.cta && (
        <div className="mt-8">
          <Link
            href={data.cta.href}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm text-white transition hover:bg-blue-500"
          >
            {data.cta.icon && (
              <Icon
                icon={getHeaderIcon(data.cta.icon)}
                className="h-4 w-4"
                aria-hidden="true"
              />
            )}
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
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-1.5 text-xs text-zinc-100 transition hover:bg-white/5"
            >
              {s.icon && (
                <Icon
                  icon={getHeaderIcon(s.icon)}
                  className="h-3.5 w-3.5 text-white/85"
                  aria-hidden="true"
                />
              )}
              <span className="capitalize">{s.id}</span>
            </Link>
          ))}
        </div>
      ) : null}
    </section>
  );
}
