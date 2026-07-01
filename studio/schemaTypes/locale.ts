import { defineType, defineField } from 'sanity';
import { LANGUAGES } from './languages';

// Tipi "localizzati": un singolo campo che contiene tutte le traduzioni.
// La lingua di default (English) è sempre visibile; le altre sono raccolte
// in un riquadro "Translations" richiudibile per non appesantire l'editor.

const translationsFieldset = [
  {
    name: 'translations',
    title: 'Translations',
    options: { collapsible: true, collapsed: true },
  },
];

function localeFields(type: 'string' | 'text' | 'array') {
  return LANGUAGES.map((lang, index) =>
    defineField({
      name: lang.id,
      title: lang.title,
      type,
      ...(type === 'array' ? { of: [{ type: 'block' }] } : {}),
      ...(index === 0 ? {} : { fieldset: 'translations' }),
    }),
  );
}

export const localeString = defineType({
  name: 'localeString',
  title: 'Testo localizzato (breve)',
  type: 'object',
  fieldsets: translationsFieldset,
  fields: localeFields('string'),
});

export const localeText = defineType({
  name: 'localeText',
  title: 'Testo localizzato',
  type: 'object',
  fieldsets: translationsFieldset,
  fields: localeFields('text'),
});

export const localeBlock = defineType({
  name: 'localeBlock',
  title: 'Contenuto localizzato (ricco)',
  type: 'object',
  fieldsets: translationsFieldset,
  fields: localeFields('array'),
});
