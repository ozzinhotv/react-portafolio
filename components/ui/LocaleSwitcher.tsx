"use client";

import { usePathname, useRouter } from "next/navigation";

export function LocaleSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  async function setLocale(locale: "en" | "es") {
    await fetch("/api/locale", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ locale }),
    });
    router.refresh(); // vuelve a renderizar el server component (Navbar)
  }

  return (
    <div className="flex items-center gap-2 text-sm">
      <button onClick={() => setLocale("en")} className="text-zinc-300 hover:text-white">
        EN
      </button>
      <span className="text-zinc-600">/</span>
      <button onClick={() => setLocale("es")} className="text-zinc-300 hover:text-white">
        ES
      </button>
    </div>
  );
}
