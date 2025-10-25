import { cookies } from "next/headers";
import { getSection } from "@/libs/getSection";
import { LOCALE_COOKIE, defaultLocale, type Locale } from "@/libs/i18n";
import { Icon } from "@iconify/react";
import { ICONS, ICON_ALIASES } from "@/icons/skill-icons";
import { getHeaderIcon } from "@/icons/header-icons";

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

  // —— Acentos por tarjeta (mismos tonos que About) ——
  const accentById: Record<string, string> = {
    "programming-web": "from-sky-600/25 to-sky-500/15",
    "dev-tools-frameworks": "from-emerald-600/25 to-emerald-500/15",
    "office-productivity": "from-amber-600/25 to-amber-500/15",
    "design-pm-tools": "from-pink-600/25 to-pink-500/15",
    "languages": "from-violet-600/25 to-violet-500/15",
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <article
            key={card.id}
            className="group rounded-2xl border border-white/10 bg-white/4 p-5
                       shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] backdrop-blur
                       transition hover:bg-white/6 hover:shadow-lg"
          >
            <h3
              className="mb-4 flex items-center gap-2 text-base font-semibold tracking-wide
                         text-zinc-100"
            >
              <span
                className={[
                  "inline-flex size-8 items-center justify-center rounded-xl ring-1 ring-white/10 transition bg-linear-to-br",
                  accentById[card.id] ?? "from-zinc-800/70 to-zinc-700/50",
                  "group-hover:brightness-110",
                ].join(" ")}
              >
                <Icon
                  icon={getHeaderIcon(card.id)}
                  className="h-4 w-4 text-white/85"
                  aria-hidden="true"
                />
              </span>
              {card.title}
            </h3>

            {card.type === "badges" && (
              <div className="flex flex-wrap gap-2.5">
                {card.items.map((it) => {
                  const key = (it.icon ?? "").toLowerCase();
                  const resolved =
                    ICONS[key] ??
                    (ICON_ALIASES[key] ? ICONS[ICON_ALIASES[key]] : undefined);

                  return (
                    <span
                      key={it.label}
                      className="inline-flex items-center gap-1.5 rounded-full
                                 border border-white/10 bg-white/3
                                 px-2.5 py-1 text-[11px] font-medium text-zinc-200
                                 ring-1 ring-black/0 transition
                                 hover:bg-white/6 hover:shadow-sm
                                 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
                      tabIndex={0}
                    >
                      {resolved && (
                        <Icon
                          icon={resolved}
                          className="h-3.5 w-3.5 text-white/85"
                          aria-hidden="true"
                        />
                      )}
                      <span>{it.label}</span>
                    </span>
                  );
                })}
              </div>
            )}

            {card.type === "languages" && (
              <ul className="space-y-3.5">
                {card.items.map((lang) => (
                  <li key={lang.code}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-zinc-100">{lang.label}</span>
                      <span className="text-zinc-400">{lang.level}</span>
                    </div>
                    <div className="mt-1.5 h-2 w-full rounded-full bg-white/10">
                      <div
                        className="h-2 rounded-full bg-linear-to-r from-blue-500 via-indigo-500 to-fuchsia-500
                                   shadow-[0_0_10px_rgba(99,102,241,0.35)]"
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
