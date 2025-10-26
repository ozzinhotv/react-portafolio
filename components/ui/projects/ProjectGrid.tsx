"use client";
import ProjectCard from "./ProjectCard";
import type { ProjectCard as TProjectCard } from "@/types/project.type";

export default function ProjectGrid({ cards }: { cards: TProjectCard[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {cards.map(p => <ProjectCard key={p.id} p={p} />)}
    </div>
  );
}
