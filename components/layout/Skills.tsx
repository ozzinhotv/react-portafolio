import { cookies } from "next/headers";
import { getSection } from "@/libs/getSection";
import { LOCALE_COOKIE, defaultLocale, type Locale } from "@/libs/i18n";

type BadgeItem = { label: string; icon?: string };
type LanguageItem = { label: string; code: string; level: string; proficiency: number };

type SkillsCardBadges = {
  id: string;
  title: string;
  type: "badges";
  items: BadgeItem[];
};

type SkillsCardLanguages = {
  id: string;
  title: string;
  type: "languages";
  items: LanguageItem[];
};

type SkillsData = {
  page: "skills";
  version: number;
  cards: Array<SkillsCardBadges | SkillsCardLanguages>;
};

export default async function Skills() {
    const cookieLocale =
        ((await cookies()).get(LOCALE_COOKIE)?.value as Locale) || defaultLocale;

    const data = await getSection<SkillsData>("skills", cookieLocale);
    const cards = data.cards;

    return (
    <section className="mx-auto max-w-6xl p-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <article
            key={card.id}
            className="rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <h3 className="mb-3 text-lg font-semibold">{card.title}</h3>

            {/* Badges */}
            {card.type === "badges" && (
              <div className="flex flex-wrap gap-2">
                {card.items.map((it) => (
                  <span
                    key={it.label}
                    className="inline-flex items-center gap-1 rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-zinc-200"
                  >
                    {/* Si ya tienes un mapa de íconos, colócalo aquí */}
                    {/* {ICONS[it.icon ?? ""] && <Icon className="h-4 w-4" />} */}
                    {it.label}
                  </span>
                ))}
              </div>
            )}

            {/* Languages */}
            {card.type === "languages" && (
              <ul className="space-y-3">
                {card.items.map((lang) => (
                  <li key={lang.code}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{lang.label}</span>
                      <span className="text-zinc-400">{lang.level}</span>
                    </div>
                    <div className="mt-1 h-2 w-full rounded-full bg-white/10">
                      <div
                        className="h-2 rounded-full bg-blue-600"
                        style={{ width: `${lang.proficiency}%` }}
                        aria-valuenow={lang.proficiency}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        role="progressbar"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}