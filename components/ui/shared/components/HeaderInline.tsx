import { JSX } from "react";

type Intro = {
  title: string;
  highlight?: string;
  subtitle?: string;
};

type Props = {
  intro: Intro;
  as?: keyof JSX.IntrinsicElements; // "h1" | "h2" | ...
  className?: string;               // estilos extra si los necesitas
};

export default function HeaderInline({ intro, as = "h2", className = "" }: Props) {
  const Tag = as as any;
  return (
    <div className={className}>
      <Tag className="text-balance text-3xl font-bold leading-tight">
        {intro.title}{" "}
        {intro.highlight && <span className="text-blue-500">{intro.highlight}</span>}
      </Tag>
      {intro.subtitle && (
        <p className="mt-2 text-pretty text-zinc-400">{intro.subtitle}</p>
      )}
    </div>
  );
}
