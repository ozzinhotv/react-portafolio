import { cookies } from "next/headers";
import { getSection } from "@/libs/getSection";
import { LOCALE_COOKIE, defaultLocale, type Locale } from "@/libs/i18n";
import HoverGallery from "@/components/ui/aboutMe/HoverGallery";
import AboutCardsClient from "@/components/ui/aboutMe/AboutCardsClient";
import type { AboutPage } from "@/types/aboutMe.type";

export default async function AboutMe() {
  const locale =
    ((await cookies()).get(LOCALE_COOKIE)?.value as Locale) || defaultLocale;

  const data = await getSection<AboutPage>("about", locale);

  const accentById: Record<string, string> = {
    "my-story": "from-sky-600/25 to-sky-500/15",
    "technical-interests": "from-emerald-600/25 to-emerald-500/15",
    "what-drives-me": "from-amber-600/25 to-amber-500/15",
    "beyond-coding": "from-fuchsia-600/25 to-fuchsia-500/15",
  };
  return (
    <section
      className="mx-auto max-w-6xl px-6 py-10"
      style={
        {
          
          ["--aboutBoxW" as any]: "22rem",
          ["--aboutBoxH" as any]: "30rem",
        } as React.CSSProperties
      }
    >
      {data.intro && (
        <header className="mb-9">
          <h2 className="text-4xl font-extrabold leading-tight">
            {data.intro.title}{" "}
            {data.intro.highlight && <span className="text-sky-500">{data.intro.highlight}</span>}
          </h2>
          {data.intro.subtitle && (
            <p className="mt-2 text-lg text-zinc-400">{data.intro.subtitle}</p>
          )}
        </header>
      )}
      <div
        className={[
          "grid grid-cols-1 gap-8 justify-items-center", 
          "md:grid-cols-2 md:gap-14 md:justify-items-center", 
        ].join(" ")}
        style={
          {
            ["--aboutBoxW" as any]: "30rem",
            ["--aboutBoxH" as any]: "36rem",
          } as React.CSSProperties
        }
      >
        <div className="w-full flex justify-center">
          <HoverGallery />
        </div>

        <div className="w-full flex justify-center">
          <AboutCardsClient cards={data.cards as any} accentById={accentById} />
        </div>
      </div>
    </section>
  );
}
