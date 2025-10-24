import { NextResponse } from "next/server";
import { LOCALE_COOKIE, locales, defaultLocale, type Locale } from "@/libs/i18n";

export async function POST(req: Request) {
  const { locale } = await req.json().catch(() => ({}));
  const url = new URL(req.headers.get("referer") || "/");

  const desired = locales.includes(locale) ? (locale as Locale) : defaultLocale;

  const res = NextResponse.json({ ok: true });
  res.cookies.set(LOCALE_COOKIE, desired, {
    path: "/",
    httpOnly: false,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365
  });

  // Sugerencia: permite redirect opcional con ?redirect=/ruta
  const redirect = url.searchParams.get("redirect");
  if (redirect) {
    return NextResponse.redirect(new URL(redirect, url.origin), { headers: res.headers });
  }
  return res;
}
