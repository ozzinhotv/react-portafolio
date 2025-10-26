"use client";

import { useMemo, useState } from "react";
import type { ProjectsPage, ProjectCategory } from "@/types/project.type";
import ProjectGrid from "@/components/ui/projects/ProjectGrid";
import ProjectFilterBar from "@/components/ui/projects/ProjectFilterBar";

export default function ProjectClient({ data }: { data: ProjectsPage }) {
  const order: ProjectCategory[] = data.meta?.categories?.order ?? ["web", "game", "design"];
  const labels = {
    web: data.meta?.categories?.labels?.web ?? "Web Dev",
    game: data.meta?.categories?.labels?.game ?? "Games",
    design: data.meta?.categories?.labels?.design ?? "Design",
  };

  const counts = useMemo(() => {
    const m: Record<ProjectCategory, number> = { web: 0, game: 0, design: 0 };
    for (const c of data.cards) m[c.category] = (m[c.category] || 0) + 1;
    return m;
  }, [data.cards]);

  const [tab, setTab] = useState<ProjectCategory | "all">("web");
  const items = order.map(k => ({ key: k, label: labels[k], count: counts[k] }));

  const visible = useMemo(
    () => data.cards.filter(c => (tab === "all" ? true : c.category === tab)),
    [data.cards, tab]
  );

  return (
    <>
      <ProjectFilterBar items={items} value={tab} onChange={setTab} />
      <ProjectGrid cards={visible} />
    </>
  );
}
