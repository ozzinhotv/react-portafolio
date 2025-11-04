import Link from "next/link";
import { cookies } from "next/headers";
import { getSection } from "@/libs/getSection";
import { LOCALE_COOKIE, defaultLocale, type Locale } from "@/libs/i18n";
import { getHeaderIcon } from "@/icons/header-icons";
import { Icon } from "@iconify/react";
import type { ProjectsPage } from "@/types/project.type";
import ProjectClient from "@/components/ui/projects/ProjectClient";
import HeaderInline from "@/components/ui/shared/components/HeaderInline";

export default async function Project() {
  const locale = ((await cookies()).get(LOCALE_COOKIE)?.value as Locale) || defaultLocale;
  const data = await getSection<ProjectsPage>("projects", locale);

  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      {data.intro && (
        <>
          <HeaderInline intro={data.intro} />
          {data.cta && (
            <div className="mt-4 flex justify-center">
              <Link
                href={data.cta.href}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-zinc-100 transition hover:bg-white/5"
              >
                {data.cta.icon && (
                  <Icon icon={getHeaderIcon(data.cta.icon)} className="h-4 w-4 text-white/85" aria-hidden />
                )}
                {data.cta.label}
              </Link>
            </div>
          )}
        </>
      )}

      <ProjectClient data={data} />
    </section>
  );
}
