import { cookies } from "next/headers";
import { getSection } from "@/libs/getSection";
import { LOCALE_COOKIE, defaultLocale, type Locale } from "@/libs/i18n";

type CardText = {
  id: string;
  title: string;
  icon?: string;
  type: "text";
  content: string[];
};

type CardList = {
  id: string;
  title: string;
  icon?: string;
  type: "list";
  items: { label: string; icon?: string }[];
  note?: string;
};

type CardTagsGroup = {
  id: string;
  title: string;
  icon?: string;
  type: "tags-group";
  groups: { label: string; tags: string[] }[];
};

type AboutData = {
  page: "about";
  version: number;
  cards: Array<CardText | CardList | CardTagsGroup>;
};

export default async function AboutMe() {
  const locale = ((await cookies()).get(LOCALE_COOKIE)?.value as Locale) || defaultLocale;
  const data = await getSection<AboutData>("about", locale);

  return (
    <section className="mx-auto grid max-w-6xl gap-6 p-6 md:grid-cols-2">
      {data.cards.map((card) => (
        <article
          key={card.id}
          className="rounded-2xl border border-white/10 bg-white/5 p-5"
        >
          <h3 className="mb-3 text-lg font-semibold">{card.title}</h3>

          {/* TEXT */}
          {card.type === "text" && (
            <div className="space-y-3 text-zinc-300">
              {card.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}

          {/* LIST */}
          {card.type === "list" && (
            <>
              <ul className="space-y-2 text-zinc-300">
                {card.items.map((it) => (
                  <li key={it.label} className="leading-relaxed">
                    • {it.label}
                  </li>
                ))}
              </ul>
              {card.note && (
                <p className="mt-3 text-sm text-zinc-400 italic">{card.note}</p>
              )}
            </>
          )}

          {/* TAGS-GROUP */}
          {card.type === "tags-group" && (
            <div className="space-y-4">
              {card.groups.map((g) => (
                <div key={g.label}>
                  <p className="mb-2 text-sm font-medium text-zinc-400">{g.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {g.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-zinc-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </article>
      ))}
    </section>
  );
}
