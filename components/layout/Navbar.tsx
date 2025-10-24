import Link from "next/link";
import { cookies } from "next/headers";
import { getSection } from "@/libs/getSection";
import { LOCALE_COOKIE, defaultLocale, type Locale } from "@/libs/i18n";
import { LocaleSwitcher } from "@/components/ui/LocaleSwitcher";

type NavItem = { id: string; label: string; href: string };
type NavData = {
  page: "navbar";
  version: number;
  brand: { text: string; href: string };
  items: NavItem[];
};

export default async function Navbar() {
  const cookieLocale = ((await cookies()).get(LOCALE_COOKIE)?.value as Locale) || defaultLocale;
  const data = await getSection<NavData>("navbar", cookieLocale);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href={data.brand.href} className="font-bold text-blue-500">
          {data.brand.text}
        </Link>

        <ul className="hidden gap-6 md:flex">
          {data.items.map((it) => (
            <li key={it.id}>
              <Link className="text-sm text-zinc-200 hover:text-white" href={it.href}>
                {it.label}
              </Link>
            </li>
          ))}
        </ul>

        <LocaleSwitcher />
      </nav>
    </header>
  );
}
