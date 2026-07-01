import { localeString, localeText, localeBlock } from './locale';
import { artwork } from './artwork';
import { page } from './page';
import { article } from './article';
import { siteSettings } from './siteSettings';

export const schemaTypes = [
  // tipi localizzati (riutilizzabili)
  localeString,
  localeText,
  localeBlock,
  // documenti
  artwork,
  page,
  article,
  siteSettings,
];
