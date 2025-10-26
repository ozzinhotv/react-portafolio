import Link from "next/link";
import { cookies } from "next/headers";
import { getSection } from "@/libs/getSection";
import { LOCALE_COOKIE, defaultLocale, type Locale } from "@/libs/i18n";
import { Icon } from "@iconify/react";
import { getHeaderIcon } from "@/icons/header-icons";
import type { HeroSection } from "@/types/hero.type";

export default async function Hero() {
  const locale =
    ((await cookies()).get(LOCALE_COOKIE)?.value as Locale) || defaultLocale;

  // Asegúrate de tener: data/en/intro.en.json y data/es/intro.es.json
  const data = await getSection<HeroSection>("intro", locale);
  const h = data.hero;


  // Permite setear el color desde JSON (ej: "text-blue-500"); fallback azul
  const highlightClass =
    (h.heading.name.highlight ?? true)
      ? h.heading.name.highlightColor ?? "text-blue-500"
      : "";

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <p className="text-sm uppercase tracking-wide text-zinc-300/90">
            {h.heading.greeting}
          </p>

          <h1 className="mt-1 text-4xl font-bold leading-tight md:text-5xl">
            {h.heading.name.first}{" "}
            <span className={highlightClass}>{h.heading.name.last}</span>
          </h1>

          {h.role && <p className="mt-2 text-lg text-zinc-200/90">{h.role}</p>}

          {h.description && (
            <p className="mt-3 max-w-xl text-zinc-300/90">{h.description}</p>
          )}

          {h.actions?.length ? (
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {h.actions.map((a) => {
                const base =
                  "inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition";
                const cls =
                  a.variant === "secondary"
                    ? `${base} border border-white/10 text-zinc-100 hover:bg-white/5`
                    : a.variant === "outline"
                    ? `${base} border text-zinc-100 hover:bg-white/5`
                    : a.variant === "ghost"
                    ? `${base} text-zinc-200 hover:text-white`
                    : `${base} bg-blue-600 text-white hover:bg-blue-500`;

                const icon = a.icon ? getHeaderIcon(a.icon) : undefined;

                return (
                  <Link key={a.id} href={a.href} className={cls}>
                    {icon && <Icon icon={icon} className="h-4 w-4" aria-hidden="true" />}
                    {a.label}
                  </Link>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
