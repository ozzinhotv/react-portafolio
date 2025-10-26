type Dated = { start: string; end?: string; current?: boolean };

export function compareByEndOrStartDesc<T extends Dated>(a: T, b: T) {
  // Ordena por (end ?? start) DESC y desempata por start DESC
  const aKey = `${a.current ? "9999-99" : (a.end ?? a.start)}-${a.start}`;
  const bKey = `${b.current ? "9999-99" : (b.end ?? b.start)}-${b.start}`;
  return bKey.localeCompare(aKey);
}

export function formatRangeMMYYYY(
  start: string,
  end?: string,
  current?: boolean,
  locale: "en" | "es" = "en"
) {
  const toMMYYYY = (iso: string) => {
    const [y, m = "01"] = iso.split("-");
    return `${m}/${y}`;
  };
  const s = toMMYYYY(start);
  if (current) return locale === "es" ? `${s} — Presente` : `${s} — Present`;
  if (!end) return s;
  return `${s} — ${toMMYYYY(end)}`;
}
