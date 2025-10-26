"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { getHeaderIcon } from "@/icons/header-icons";
import SkillPill from "@/components/ui/shared/components/SkillPill";
import type { ProjectCard as TProjectCard } from "@/types/project.type";
import { hueFromAccentClass, cardHoverClasses, pillAccentFromSkillIcon } from "@/utils/hues";

const box="group rounded-2xl border border-white/10 bg-white/4 p-5 backdrop-blur transition hover:bg-white/6 hover:shadow-lg";
const chip="shrink-0 inline-flex size-12 items-center justify-center rounded-xl ring-2 ring-white/20 p-2.5";
const subtitle="text-sm text-zinc-400";
const body="mt-3 text-sm text-zinc-300";
const TWEAK:Record<string,string>={rocket:"scale-95 -translate-y-0.5"};

export default function ProjectCard({ p }: { p: TProjectCard }) {
  const icon=getHeaderIcon(p.icon??p.id??"projects");
  const accent=p.accentClass??"from-zinc-800/70 to-zinc-700/50";
  const hue=hueFromAccentClass(accent);
  const hover=cardHoverClasses(hue);
  const iconHover={sky:"group-hover:text-sky-200",blue:"group-hover:text-blue-200",emerald:"group-hover:text-emerald-200",teal:"group-hover:text-teal-200",violet:"group-hover:text-violet-200",fuchsia:"group-hover:text-fuchsia-200",rose:"group-hover:text-rose-200",amber:"group-hover:text-amber-200"}[hue];
  const iconKey=(p.icon??p.id??"projects").toLowerCase();
  const tweak=TWEAK[iconKey]??"";

  return(
    <article className={`${box} ${hover.border}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-start gap-3">
          <span className={`${chip} bg-linear-to-br ${accent}`} aria-hidden>
            <Icon icon={icon} className={`block h-7 w-7 leading-none text-white drop-shadow ${iconHover} ${tweak}`} />
          </span>
          <div className="min-w-0">
            <h3 className={`text-lg font-semibold text-zinc-100 ${hover.title}`}>{p.title}</h3>
            {p.subtitle&&<p className={subtitle}>{p.subtitle}</p>}
          </div>
        </div>
        {p.year&&<span className="text-xs text-zinc-500">{p.year}</span>}
      </div>

      {p.description&&<p className={body}>{p.description}</p>}

      {!!p.tags?.length&&(
        <div className="mt-4 flex flex-wrap gap-2.5">
          {p.tags.filter(Boolean).map(t=>(
            <SkillPill key={`${p.id}-${t.label}`} skill={t} accent={pillAccentFromSkillIcon(t.icon??t.label)} />
          ))}
        </div>
      )}

      {(p.links?.repo||p.links?.demo)&&(
        <div className="mt-5 flex flex-wrap gap-3">
          {p.links?.repo&&<Link href={p.links.repo} className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-zinc-100 hover:bg-white/5">Repository</Link>}
          {p.links?.demo&&<Link href={p.links.demo} className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs text-white hover:bg-blue-500">Live Demo</Link>}
        </div>
      )}
    </article>
  );
}
