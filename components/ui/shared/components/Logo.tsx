import Image from "next/image";

type Size = "sm" | "md" | "lg";
const S: Record<Size, string> = { sm: "h-12 w-12", md: "h-14 w-14", lg: "h-16 w-16" };

export default function Logo({
  src,
  label,
  size = "md",
}: {
  src?: string;
  label: string;
  size?: Size;
}) {
  const box = `${S[size]} shrink-0 overflow-hidden rounded-xl`;
  if (!src) {
    return (
      <div className={`flex items-center justify-center bg-white/5 ring-1 ring-white/10 ${box}`}>
        <span className="text-sm font-semibold text-zinc-400">
          {(label || "NA").slice(0, 2).toUpperCase()}
        </span>
      </div>
    );
  }
  return (
    <div className={`relative bg-white/90 p-1.5 ring-1 ring-black/10 dark:bg-zinc-900/90 dark:ring-white/10 ${box}`}>
      <Image src={src} alt={`${label} logo`} fill sizes="64px" className="object-contain" />
    </div>
  );
}
