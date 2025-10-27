"use client";

import type { Education } from "@/types/education.type";
import EducationItemCard from "./EducationItemCard";

type Props = {
  items: Array<Education & { range: string }>;
};

export default function EducationList({ items }: Props) {
  return (
    <ul className="space-y-4">
      {items.map((e) => (
        <li key={e.id}>
          <EducationItemCard item={e} />
        </li>
      ))}
    </ul>
  );
}
