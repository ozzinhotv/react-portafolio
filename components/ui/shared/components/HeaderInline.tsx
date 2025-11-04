// components/ui/shared/components/HeaderInline.tsx
import { JSX } from "react";

type Intro = {
  title?: string;
  highlight?: string;
  subtitle?: string;
};

type Props = {
  intro?: Intro | null;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  highlightClassName?: string;
};

export default function HeaderInline({
  intro,
  as = "h1",
  className = "",
  // Base sólida + centrado
  titleClassName = [
    "text-balance text-4xl font-extrabold leading-tight text-center",
    "text-zinc-100",
    "motion-safe:transition-all motion-safe:duration-300",
    "group-hover:text-white",            // leve lift de brillo
  ].join(" "),
  subtitleClassName = [
    "mt-3 text-lg text-center",
    "text-zinc-400",
    "motion-safe:transition-colors motion-safe:duration-300",
    "group-hover:text-zinc-300",
  ].join(" "),
  // Gradiente animado en el highlight
  highlightClassName = [
    "bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400",
    "bg-[length:200%_100%] bg-clip-text text-transparent",
    "motion-safe:transition-[background-position,filter] motion-safe:duration-500",
    "group-hover:bg-[position:100%_0] group-hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.25)]",
  ].join(" "),
}: Props) {
  if (!intro?.title) return null;
  const Tag = as as any;

  return (
    <div
      className={[
        "mb-10 group select-none",
        "motion-safe:transition-transform motion-safe:duration-300",
        "hover:-translate-y-0.5", // sutil lift del bloque
        className,
      ].join(" ")}
    >
      <Tag className={titleClassName}>
        {intro.title}{" "}
        {intro.highlight && <span className={highlightClassName}>{intro.highlight}</span>}
      </Tag>

      {intro.subtitle && <p className={subtitleClassName}>{intro.subtitle}</p>}
    </div>
  );
}
