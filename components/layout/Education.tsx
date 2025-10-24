import Image from "next/image";
import { getEducation, eduRange } from "@/libs/getEducation";

export default async function Education() {
  const items = await getEducation();

  return (
    <section className="mx-auto grid max-w-6xl gap-5 p-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((e) => (
        <article key={e.id} className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <header className="flex items-center gap-4">
            {e.logo && (
              <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-white/10">
                <Image src={e.logo} alt={`${e.institution} logo`} fill sizes="48px" className="object-contain p-1" />
              </div>
            )}
            <div>
              <h3 className="text-base font-semibold leading-tight">{e.degree}</h3>
              <p className="text-sm text-zinc-400">
                {e.institution}{e.location ? ` · ${e.location}` : ""}
              </p>
              <p className="text-xs text-zinc-500">{eduRange(e.start, e.end, e.current)}</p>
            </div>
          </header>

          {e.highlights?.length ? (
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-zinc-300">
              {e.highlights.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
          ) : null}

          {e.skills?.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {e.skills.map((s) => (
                <span key={s} className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-zinc-200">
                  {s}
                </span>
              ))}
            </div>
          ) : null}
        </article>
      ))}
    </section>
  );
}
