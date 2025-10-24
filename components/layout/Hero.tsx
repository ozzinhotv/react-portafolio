import { cookies } from "next/headers";
import { getSection } from "@/libs/getSection";
import { LOCALE_COOKIE, defaultLocale, type Locale } from "@/libs/i18n";
import Link from "next/link";

type HeroData = {
  page: "home";
  version: number;
  hero: {
    avatar?: { src: string; alt: string; shape?: "circle" | "square" };
    heading: {
      greeting: string;
      name: {
        first: string;
        last: string;
        highlight?: boolean;
        highlightColor?: string;
      };
    };
    role?: string;
    description?: string;
    actions?: {
      id: string;
      label: string;
      href: string;
      variant?: "primary" | "secondary" | "ghost" | "outline";
      icon?: string;
    }[];
  };
};

export default async function Hero() {
  const cookieLocale =
    ((await cookies()).get(LOCALE_COOKIE)?.value as Locale) || defaultLocale;

  const data = await getSection<HeroData>("intro", cookieLocale);
  const h = data.hero;

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
          <div>
            <p className="text-sm uppercase tracking-wide text-zinc-400">
              {h.heading.greeting}
            </p>

            <h1 className="mt-1 text-4xl font-bold leading-tight md:text-5xl">
              {h.heading.name.first}{" "}
              <span className="text-blue-500">{h.heading.name.last}</span>
            </h1>

            {h.role && <p className="mt-2 text-lg text-zinc-300">{h.role}</p>}

            {h.description && (
              <p className="mt-3 max-w-xl text-zinc-400">{h.description}</p>
            )}

            {h.actions?.length ? (
              <div className="mt-6 flex flex-wrap gap-3">
                {h.actions.map((a) => (
                  <Link
                    key={a.id}
                    href={a.href}
                    className={
                      a.variant === "secondary"
                        ? "rounded-lg border border-white/10 px-4 py-2 text-sm text-zinc-100 hover:bg-white/5"
                        : a.variant === "outline"
                        ? "rounded-lg border px-4 py-2 text-sm text-zinc-100 hover:bg-white/5"
                        : a.variant === "ghost"
                        ? "rounded-lg px-4 py-2 text-sm text-zinc-200 hover:text-white"
                        : "rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-500"
                    }
                  >
                    {a.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
