// components/layout/Navbar.tsx
import Link from "next/link";
import { cookies } from "next/headers";
import { getSection } from "@/libs/getSection";
import { LOCALE_COOKIE, defaultLocale, type Locale } from "@/libs/i18n";
import { LocaleSwitcher } from "@/components/ui/shared/navbar/LocaleSwitcher";
import type { NavPage } from "@/types/navbar.type";

export default async function Navbar() {
  const cookieLocale =
    ((await cookies()).get(LOCALE_COOKIE)?.value as Locale) || defaultLocale;

  const data = await getSection<NavPage>("navbar", cookieLocale);

  return (
    <header className="fixed inset-x-0 top-4 z-50">
      <div className="mx-auto w-full px-4">
        {/* Desktop: pill flotante, más redondeado */}
        <nav
          className="
            hidden md:block
            mx-auto max-w-4xl
            rounded-4xl border border-white/10 ring-1 ring-white/10
            bg-linear-to-b from-white/8 to-white/5
            px-6 py-3 backdrop-blur-xl supports-backdrop-filter:bg-white/7
            shadow-[0_10px_40px_rgba(0,0,0,0.35)]
          "
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between gap-5">
            {/* Brand */}
            <Link
              href={data.brand.href}
              className="shrink-0 text-sm font-semibold text-white/90 hover:text-white"
            >
              {data.brand.text}
            </Link>

            {/* Links */}
            <ul className="flex items-center gap-3">
              {data.items.map((it) => (
                <li key={it.id}>
                  <Link
                    href={it.href}
                    className="
                      inline-flex items-center rounded-full
                      px-3.5 py-2 text-xs text-zinc-200
                      transition hover:bg-white/10 hover:text-white
                    "
                  >
                    {it.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Idioma */}
            <div className="shrink-0">
              <LocaleSwitcher />
            </div>
          </div>
        </nav>

        {/* Mobile: pill interno (más redondeado) con solo brand + switcher */}
        <nav className="md:hidden" aria-label="Main navigation (mobile)">
          <div
            className="
              mx-1 rounded-[1.75rem] border border-white/10 ring-1 ring-white/10
              bg-linear-to-b from-white/10 to-white/6
              px-4 py-2.5 backdrop-blur-xl supports-backdrop-filter:bg-white/10
              shadow-[0_8px_30px_rgba(0,0,0,0.30)]
            "
          >
            <div className="flex items-center justify-between">
              <Link
                href={data.brand.href}
                className="text-sm font-semibold text-white/90"
              >
                {data.brand.text}
              </Link>
              <LocaleSwitcher />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
