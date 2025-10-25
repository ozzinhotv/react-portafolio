import Link from "next/link";
import { cookies } from "next/headers";
import { getSection } from "@/libs/getSection";
import { LOCALE_COOKIE, defaultLocale, type Locale } from "@/libs/i18n";
import { getHeaderIcon } from "@/icons/header-icons";
import { Icon } from "@iconify/react";
import { ICONS, ICON_ALIASES } from "@/icons/skill-icons";

type ProjectTag = { label: string; icon?: string };

type ProjectCard = {
  id: string;
  title: string;
  subtitle?: string;
  year?: number;
  description?: string;
  tags?: ProjectTag[];
  links?: { repo?: string; demo?: string };
  icon?: string;
};

type ProjectsData = {
  page: "projects";
  version: number;
  intro?: { title?: string; highlight?: string; subtitle?: string };
  cta?: { label: string; href: string; icon?: string };
  cards: ProjectCard[];
};

function resolveTagIcon(raw?: string): any | undefined {
  if (!raw) return undefined;
  const key = raw
    .toLowerCase()
    .trim()
    .replace(/\s*&\s*/g, "-and-")
    .replace(/\s*\+\s*/g, "-plus-")
    .replace(/\s*\/\s*/g, "-")
    .replace(/\./g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
  const alias = ICON_ALIASES[key];
  return ICONS[key] ?? (alias ? ICONS[alias] : undefined);
}

export default async function Projects() {
  const locale =
    ((await cookies()).get(LOCALE_COOKIE)?.value as Locale) || defaultLocale;

  const data = await getSection<ProjectsData>("project", locale);

  const accentByProjectId: Record<string, string> = {
    "maze-pathfinder": "from-sky-600/25 to-sky-500/15",
    "student-records-cli": "from-emerald-600/25 to-emerald-500/15",
    "ecommerce-exceptions": "from-amber-600/25 to-amber-500/15",
    "pet-adoption-site": "from-pink-600/25 to-pink-500/15",
    "portfolio-site": "from-indigo-600/25 to-indigo-500/15",
    "fundacion-villanueva": "from-violet-600/25 to-violet-500/15",
    "universidad-andromeda": "from-teal-600/25 to-teal-500/15",
    bacha: "from-fuchsia-600/25 to-fuchsia-500/15",
    reservalo: "from-rose-600/25 to-rose-500/15",
    cineverse: "from-cyan-600/25 to-cyan-500/15",
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      {/* Intro */}
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
          {data.cta && (
            <div className="mt-4">
              <Link
                href={data.cta.href}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-zinc-100 transition hover:bg-white/5"
              >
                {data.cta.icon && (
                  <Icon
                    icon={getHeaderIcon(data.cta.icon)}
                    className="h-4 w-4 text-white/85"
                    aria-hidden="true"
                  />
                )}
                {data.cta.label}
              </Link>
            </div>
          )}
        </header>
      )}

      {/* Cards */}
      <div className="grid gap-5 sm:grid-cols-2">
        {data.cards.map((p) => {
          const cardIcon = getHeaderIcon(p.icon ?? p.id ?? "projects");

          return (
            <article
              key={p.id}
              className="group rounded-2xl border border-white/10 bg-white/4 p-5
                         shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] backdrop-blur
                         transition hover:bg-white/6 hover:shadow-lg"
            >
              {/* Header limpio y robusto para títulos largos */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-start gap-3">
                  <span
                    className={[
                      "shrink-0 inline-flex size-10 items-center justify-center rounded-xl",
                      "ring-1 ring-white/10 bg-linear-to-br",
                      accentByProjectId[p.id] ?? "from-zinc-800/70 to-zinc-700/50",
                      "transition group-hover:brightness-110",
                    ].join(" ")}
                    aria-hidden="true"
                  >
                    <Icon icon={cardIcon} className="h-5 w-5 text-white/85" />
                  </span>

                  <div className="min-w-0 space-y-1">
                    <h3 className="text-pretty text-lg font-semibold leading-snug text-zinc-100">
                      {p.title}
                    </h3>
                    {p.subtitle && (
                      <p className="text-pretty text-sm leading-snug text-zinc-400">
                        {p.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                {p.year && (
                  <span className="ml-2 shrink-0 text-xs text-zinc-500">
                    {p.year}
                  </span>
                )}
              </div>

              {/* Descripción */}
              {p.description && (
                <p className="mt-3 text-pretty text-sm leading-relaxed text-zinc-300">
                  {p.description}
                </p>
              )}

              {/* Tags con icono */}
              {p.tags?.length ? (
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {p.tags.map((t) => {
                    const tagIcon = resolveTagIcon(t.icon ?? t.label);
                    return (
                      <span
                        key={`${p.id}-${t.label}`}
                        className="inline-flex items-center gap-1.5 rounded-full
                                   border border-white/10 bg-white/3
                                   px-2.5 py-1 text-[11px] font-medium text-zinc-200
                                   transition hover:bg-white/6"
                        title={t.label}
                      >
                        {tagIcon && (
                          <Icon
                            icon={tagIcon}
                            className="h-3.5 w-3.5 text-white/85"
                            aria-hidden="true"
                          />
                        )}
                        <span className="truncate max-w-36 sm:max-w-none">
                          {t.label}
                        </span>
                      </span>
                    );
                  })}
                </div>
              ) : null}

              {/* Acciones */}
              {(p.links?.repo || p.links?.demo) && (
                <div className="mt-5 flex flex-wrap gap-3">
                  {p.links?.repo && (
                    <Link
                      href={p.links.repo}
                      className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-zinc-100 transition hover:bg-white/5"
                    >
                      Repository
                    </Link>
                  )}
                  {p.links?.demo && p.links.demo.length > 0 && (
                    <Link
                      href={p.links.demo}
                      className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs text-white transition hover:bg-blue-500"
                    >
                      Live Demo
                    </Link>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
