import { formatRangeMMYYYY } from "@/libs/date";
import type { Experience } from "@/types/experience.type";
import Logo from "@/components/ui/shared/components/Logo";

type Accent = "sky" | "blue" | "emerald" | "teal" | "violet" | "fuchsia" | "rose" | "amber";

const titleCls: Record<Accent, string> = {
  sky: "text-sky-400",
  blue: "text-blue-400",
  emerald: "text-emerald-400",
  teal: "text-teal-400",
  violet: "text-violet-400",
  fuchsia: "text-fuchsia-400",
  rose: "text-rose-400",
  amber: "text-amber-400",
};

export default function ExperienceHeader({
  item,
  locale = "en",
  open = false,
  accent = "sky",
}: {
  item: Experience;
  locale?: "en" | "es";
  open?: boolean;
  accent?: Accent;
}) {
  return (
    <div className="flex items-start sm:items-center gap-3 sm:gap-4 p-4">
      <Logo src={item.logo} label={item.company} size="md" />
      <div className="min-w-0">
        <h3 className={`truncate text-base font-semibold transition ${open ? titleCls[accent] : "text-white"}`}>
          {item.role}
        </h3>
        <p className="mt-0.5 text-sm text-zinc-400">
          {item.company}
          {item.location ? ` · ${item.location}` : ""}
        </p>
        <p className="mt-1 text-xs text-zinc-500">
          {formatRangeMMYYYY(item.start, item.end, item.current, locale)}
        </p>
      </div>
    </div>
  );
}
