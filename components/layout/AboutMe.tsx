import { cookies } from "next/headers";
import { getSection } from "@/libs/getSection";
import { LOCALE_COOKIE, defaultLocale, type Locale } from "@/libs/i18n";
import { getHeaderIcon } from "@/icons/header-icons";
import { Icon } from "@iconify/react";

// ⬇️ Usa los tipos externos
import type { AboutPage } from "@/types/aboutMe.type";

export default async function AboutMe() {
  const locale =
    ((await cookies()).get(LOCALE_COOKIE)?.value as Locale) || defaultLocale;

  // Trae el objeto de página (con intro + cards)
  const data = await getSection<AboutPage>("about", locale);

  // Acentos sutiles por tarjeta (opcional)
  const accentById: Record<string, string> = {
    "my-story": "from-sky-600/25 to-sky-500/15",
    "technical-interests": "from-emerald-600/25 to-emerald-500/15",
    "what-drives-me": "from-amber-600/25 to-amber-500/15",
    "beyond-coding": "from-fuchsia-600/25 to-fuchsia-500/15",
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      {/* Header / Intro */}
      {data.intro && (
        <header className="mb-8">
          <h2 className="text-balance text-3xl font-bold leading-tight">
            {data.intro.title}{" "}
            {data.intro.highlight && (
              <span className="text-blue-500">{data.intro.highlight}</span>
            )}
          </h2>
          {data.intro.subtitle && (
            <p className="mt-2 text-pretty text-zinc-400">
              {data.intro.subtitle}
            </p>
          )}
        </header>
      )}

      {/* Cards */}
      <div className="grid gap-5 md:grid-cols-2">
        {data.cards.map((card) => {
          // Prioriza el icono declarado en JSON; si no, usa el de id
          const titleIcon = getHeaderIcon(card.icon ?? card.id);

          return (
            <article
              key={card.id}
              className="group rounded-2xl border border-white/10 bg-white/4 p-5
                         shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] backdrop-blur
                         transition hover:bg-white/6 hover:shadow-lg"
            >
              <h3 className="mb-4 flex items-center gap-2 text-base font-semibold tracking-wide text-zinc-100">
                <span
                  className={[
                    "inline-flex size-8 items-center justify-center rounded-xl ring-1 ring-white/10 transition bg-linear-to-br",
                    accentById[card.id] ?? "from-zinc-800/70 to-zinc-700/50",
                    "group-hover:brightness-110",
                  ].join(" ")}
                >
                  <Icon icon={titleIcon} className="h-4 w-4 text-white/85" aria-hidden="true" />
                </span>
                {card.title}
              </h3>

              {/* TEXT */}
              {"type" in card && card.type === "text" && (
                <div className="space-y-3 text-zinc-300">
                  {card.content.map((p, i) => (
                    <p key={i} className="leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              )}

              {/* LIST */}
              {"type" in card && card.type === "list" && (
                <>
                  <ul className="space-y-2.5 text-zinc-300">
                    {card.items.map((it) => {
                      const itemIcon = it.icon ? getHeaderIcon(it.icon) : undefined;
                      return (
                        <li key={it.label} className="flex items-start gap-2 leading-relaxed">
                          {itemIcon ? (
                            <Icon
                              icon={itemIcon}
                              className="mt-0.5 h-4 w-4 shrink-0 text-white/80"
                              aria-hidden="true"
                            />
                          ) : (
                            <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                          )}
                          <span>{it.label}</span>
                        </li>
                      );
                    })}
                  </ul>
                  {"note" in card && card.note && (
                    <p className="mt-3 text-sm italic text-zinc-400">{card.note}</p>
                  )}
                </>
              )}

              {/* TAGS-GROUP */}
              {"type" in card && card.type === "tags-group" && (
                <div className="space-y-4">
                  {card.groups.map((g) => (
                    <div key={g.label}>
                      <p className="mb-2 text-sm font-medium text-zinc-400">{g.label}</p>
                      <div className="flex flex-wrap gap-2">
                        {g.tags.map((t) => (
                          <span
                            key={t}
                            className="inline-flex items-center gap-1.5 rounded-full
                                       border border-white/10 bg-white/3
                                       px-2.5 py-1 text-[11px] font-medium text-zinc-200
                                       transition hover:bg-white/6"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
