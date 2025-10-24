import Link from "next/link";
import { cookies } from "next/headers";
import { getSection } from "@/libs/getSection";
import { LOCALE_COOKIE, defaultLocale, type Locale } from "@/libs/i18n";

type ProjectCard = {
  id: string;
  title: string;
  subtitle?: string;
  year?: number;
  description?: string;
  tags?: string[];
  links?: { repo?: string; demo?: string };
};

type ProjectsData = {
  page: "projects";
  version: number;
  intro?: { title?: string; highlight?: string; subtitle?: string };
  cta?: { label: string; href: string; icon?: string };
  cards: ProjectCard[];
};

export default async function Projects() {
  const locale = ((await cookies()).get(LOCALE_COOKIE)?.value as Locale) || defaultLocale;
  // Asegúrate de tener: data/en/projects.en.json y data/es/projects.es.json
  const data = await getSection<ProjectsData>("project", locale);

  return (
    <section className="mx-auto max-w-6xl p-6">
      {/* Intro */}
      {data.intro && (
        <header className="mb-6">
          <h2 className="text-3xl font-bold">
            {data.intro.title}{" "}
            {data.intro.highlight && (
              <span className="text-blue-500">{data.intro.highlight}</span>
            )}
          </h2>
          {data.intro.subtitle && (
            <p className="mt-1 text-zinc-400">{data.intro.subtitle}</p>
          )}
          {data.cta && (
            <div className="mt-4">
              <Link
                href={data.cta.href}
                className="inline-block rounded-lg border border-white/10 px-4 py-2 text-sm text-zinc-100 hover:bg-white/5"
              >
                {data.cta.label}
              </Link>
            </div>
          )}
        </header>
      )}

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {data.cards.map((p) => (
          <article
            key={p.id}
            className="rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                {p.subtitle && (
                  <p className="text-sm text-zinc-400">{p.subtitle}</p>
                )}
              </div>
              {p.year && (
                <span className="text-xs text-zinc-500">{p.year}</span>
              )}
            </div>

            {p.description && (
              <p className="mt-3 text-sm text-zinc-300">{p.description}</p>
            )}

            {p.tags?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-zinc-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : null}

            {(p.links?.repo || p.links?.demo) && (
              <div className="mt-5 flex gap-3">
                {p.links?.repo && (
                  <Link
                    href={p.links.repo}
                    className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-zinc-100 hover:bg-white/5"
                  >
                    Repository
                  </Link>
                )}
                {p.links?.demo && p.links.demo.length > 0 && (
                  <Link
                    href={p.links.demo}
                    className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs text-white hover:bg-blue-500"
                  >
                    Live Demo
                  </Link>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
