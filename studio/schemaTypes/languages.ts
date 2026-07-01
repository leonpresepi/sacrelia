// Lingue supportate dal sito. 'en' è la lingua di default (prima nell'elenco).
// Per aggiungere una lingua in futuro (es. 'pt', 'ar') basta aggiungerla qui.
export const LANGUAGES = [
  { id: 'en', title: 'English' },
  { id: 'it', title: 'Italiano' },
  { id: 'de', title: 'Deutsch' },
  { id: 'fr', title: 'Français' },
  { id: 'es', title: 'Español' },
] as const;

export const BASE_LANGUAGE = LANGUAGES[0].id; // 'en'
