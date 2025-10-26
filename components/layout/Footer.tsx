// components/layout/Footer.tsx
import Link from "next/link";
import { cookies } from "next/headers";
import { getSection } from "@/libs/getSection";
import { LOCALE_COOKIE, defaultLocale, type Locale } from "@/libs/i18n";
import { Icon } from "@iconify/react";
import { getHeaderIcon } from "@/icons/header-icons";
import type { FooterPage } from "@/types/footer.type";

export default async function Footer() {
  const locale =
    ((await cookies()).get(LOCALE_COOKIE)?.value as Locale) || defaultLocale;

  const data = await getSection<FooterPage>("footer", locale);

  const year = new Date().getFullYear();
  const socials = data.social ?? [];
  const copyright = data.copyright.replace("{year}", String(year));

  return (
    <footer
      className="
        mt-16 w-full
        rounded-t-2xl border-t-2 border-white/20 ring-1 ring-white/10
        bg-linear-to-b from-black/70 to-black/55
        backdrop-blur-xl supports-backdrop-filter:bg-black/50
      "
    >
      {/* Contenido centrado, pero fondo ocupa todo el ancho */}
      <div className="mx-auto w-full max-w-6xl px-4 py-5">
        {/* Social icons (solo icono) */}
        {socials.length > 0 && (
          <ul className="mb-3 flex items-center justify-center gap-4 sm:gap-5">
            {socials.map((s) => {
              const icon = s.icon ? getHeaderIcon(s.icon) : undefined;
              if (!icon) return null;
              return (
                <li key={s.id}>
                  <Link
                    href={s.href}
                    aria-label={s.label ?? s.id}
                    className="
                      inline-flex items-center justify-center
                      rounded-full border border-white/10 bg-white/5
                      p-2.5 text-white/90 transition hover:bg-white/10
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40
                    "
                  >
                    <Icon className="h-7 w-7 sm:h-8 sm:w-8" icon={icon} aria-hidden="true" />
                  </Link>
                </li>
              );
            })}
          </ul>
        )}

        {/* Línea de crédito — SIEMPRE visible en mobile y desktop */}
        <p className="text-center text-xs text-zinc-400">
          <span className="text-zinc-300">{data.ownerName}</span>
          <span className="mx-1 text-zinc-600">•</span>
          <span>{copyright}</span>
        </p>
      </div>
    </footer>
  );
}
