import Link from "next/link";
import { cookies } from "next/headers";
import { getSection } from "@/libs/getSection";
import { LOCALE_COOKIE, defaultLocale, type Locale } from "@/libs/i18n";

type FooterLink = { id: string; label: string; href: string };
type FooterSocial = { id: string; label?: string; href: string; icon?: string };

type FooterData = {
  page: "footer";
  version: number;
  locale?: string;
  ownerName: string;
  copyright: string; // e.g. "© {year} Oscar Thielen. All rights reserved."
  links?: FooterLink[];
  social?: FooterSocial[];
};

export default async function Footer() {
  const locale = ((await cookies()).get(LOCALE_COOKIE)?.value as Locale) || defaultLocale;

  // Asegúrate de tener:
  // data/en/footer.en.json  y  data/es/footer.es.json
  const data = await getSection<FooterData>("footer", locale);

  const year = new Date().getFullYear();
  const copyright = data.copyright.replace("{year}", String(year));

  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 md:flex-row md:items-center md:justify-between">
        {/* Brand / Owner */}
        <div className="text-sm text-zinc-300">
          <span className="font-medium text-white">{data.ownerName}</span>
          <span className="mx-2 text-zinc-600">•</span>
          <span className="text-zinc-400">{copyright}</span>
        </div>

        {/* Links */}
        {data.links?.length ? (
          <nav aria-label="Footer links">
            <ul className="flex flex-wrap gap-4 text-sm">
              {data.links.map((l) => (
                <li key={l.id}>
                  <Link
                    href={l.href}
                    className="text-zinc-300 hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}

        {/* Social */}
        {data.social?.length ? (
          <div className="flex flex-wrap gap-3">
            {data.social.map((s) => (
              <Link
                key={s.id}
                href={s.href}
                aria-label={s.label ?? s.id}
                className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-zinc-100 hover:bg-white/5"
              >
                {s.label ?? s.id}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </footer>
  );
}
