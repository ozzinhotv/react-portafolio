import Image from "next/image";
import { fmtRange } from "@/libs/getExperience";
import type { Experience } from "@/types/experience.type";

export default function ExperienceCard({ item }: { item: Experience }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <header className="flex items-center gap-4">
        {item.logo && (
          <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-white/10">
            <Image src={item.logo} alt={`${item.company} logo`} fill sizes="48px" className="object-contain p-1" />
          </div>
        )}
        <div>
          <h3 className="text-base font-semibold leading-tight">{item.role}</h3>
          <p className="text-sm text-zinc-400">{item.company}{item.location ? ` · ${item.location}` : ""}</p>
          <p className="text-xs text-zinc-500">{fmtRange(item.start, item.end, item.current)}</p>
        </div>
      </header>

      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-zinc-300">
        {item.tasks.map((t, i) => <li key={i}>{t}</li>)}
      </ul>

      {item.skills?.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {item.skills.map((s) => (
            <span key={s} className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-zinc-200">
              {s}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}