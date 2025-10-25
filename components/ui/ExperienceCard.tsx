import Image from "next/image";
import { fmtRange } from "@/libs/getExperience";
import type { Experience, SkillItem } from "@/types/experience.type";
import SkillPill from "@/components/ui/SkillPill";

export default function ExperienceCard({ item }: { item: Experience }) {
  return (
    <article
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/3 p-5 shadow-sm backdrop-blur
                 transition-all hover:-translate-y-0.5 hover:border-white/20 hover:shadow-lg"
    >
      <header className="flex items-center gap-4 pt-1">
        {item.logo ? (
          <div
            className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-white/90 p-1.5
                       ring-1 ring-black/10 shadow-sm dark:bg-zinc-900/90 dark:ring-white/10
                       sm:h-16 sm:w-16"
            aria-label={`${item.company} logo`}
          >
            <Image
              src={item.logo}
              alt={`${item.company} logo`}
              fill
              sizes="(min-width:1024px) 64px, 56px"
              className="object-contain"
              priority={false}
            />
          </div>
        ) : (
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 sm:h-16 sm:w-16">
            <span className="text-sm font-semibold text-zinc-400">{item.company?.slice(0,2).toUpperCase() ?? "EX"}</span>
          </div>
        )}

        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold leading-tight">{item.role}</h3>
          <p className="mt-0.5 line-clamp-2 text-sm text-zinc-400">
            {item.company}{item.location ? ` · ${item.location}` : ""}
          </p>
          <p className="mt-1 text-xs text-zinc-500">{fmtRange(item.start, item.end, item.current)}</p>
        </div>
      </header>

      {!!item.tasks?.length && (
        <ul className="mt-4 space-y-2 text-[0.925rem] leading-5 text-zinc-300">
          {item.tasks.map((t, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400/70" />
              <span className="text-sm">{t}</span>
            </li>
          ))}
        </ul>
      )}

      {!!item.skills?.length && (
        <div className="mt-4 flex flex-wrap gap-2">
          {item.skills!.map((s: SkillItem, i) => {
            const label = typeof s === "string" ? s : s.label;
            return <SkillPill key={`${label}-${i}`} skill={s} />;
          })}
        </div>
      )}
    </article>
  );
}