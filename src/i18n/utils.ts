import { ui, defaultLang, type Lang } from './ui';

/** Ricava la lingua dall'URL. 'en' è su root, le altre hanno prefisso (/it/, /de/...). */
export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang in ui) return maybeLang as Lang;
  return defaultLang;
}

/** Restituisce una funzione t() per tradurre una chiave nella lingua data. */
export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/**
 * Costruisce un path localizzato.
 * localizePath('/collection', 'it') -> '/it/collection'
 * localizePath('/collection', 'en') -> '/collection'   (default su root)
 */
export function localizePath(path: string, lang: Lang): string {
  const clean = '/' + path.replace(/^\/+/, '');
  if (lang === defaultLang) return clean === '/' ? '/' : clean;
  return clean === '/' ? `/${lang}/` : `/${lang}${clean}`;
}

/**
 * Estrae il valore di un campo localizzato Sanity (es. {en, it, de...}) nella lingua data,
 * con fallback all'inglese. Funziona con localeString/localeText.
 */
export function pickLocale(
  field: Record<string, unknown> | null | undefined,
  lang: Lang,
): string {
  if (!field) return '';
  return (field[lang] as string) ?? (field[defaultLang] as string) ?? '';
}

/** Estrae l'array di blocchi (Portable Text) localizzato nella lingua data. */
export function pickLocaleBlocks(
  field: Record<string, unknown> | null | undefined,
  lang: Lang,
): unknown[] {
  if (!field) return [];
  return (field[lang] as unknown[]) ?? (field[defaultLang] as unknown[]) ?? [];
}

// Codici locale per la formattazione delle date (Intl).
const DATE_LOCALES: Record<Lang, string> = {
  en: 'en-GB',
  it: 'it-IT',
  de: 'de-DE',
  fr: 'fr-FR',
  es: 'es-ES',
};

/** Formatta una data ISO (es. publishedAt) in modo leggibile per la lingua data. */
export function formatDate(iso: string | undefined, lang: Lang): string {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return new Intl.DateTimeFormat(DATE_LOCALES[lang], {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(d);
}

/** Tutte le lingue supportate (per il selettore e gli hreflang). */
export { ui, defaultLang, type Lang };
export { languages } from './ui';
