import { defineType, defineField } from 'sanity';

// "Articolo" del Journal: contenuto editoriale per l'awareness organica (SEO).
// Un solo documento per articolo, testi tradotti nelle 5 lingue (campi localizzati).
export const article = defineType({
  name: 'article',
  title: 'Articolo (Journal)',
  type: 'document',
  groups: [
    { name: 'content', title: 'Contenuti', default: true },
    { name: 'media', title: 'Foto' },
    { name: 'meta', title: 'Pubblicazione & SEO' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Titolo',
      type: 'localeString',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      group: 'content',
      description: 'Identificativo nell’indirizzo della pagina. Generato dal titolo inglese.',
      options: { source: 'title.en', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Pillar editoriale',
      type: 'string',
      group: 'content',
      description: 'Il filone editoriale a cui appartiene l’articolo.',
      options: {
        list: [
          { title: 'Tradizione & cultura', value: 'tradition' },
          { title: 'Atelier & lavorazione', value: 'atelier' },
          { title: 'Interni & styling', value: 'interiors' },
          { title: 'Collezionismo', value: 'collecting' },
          { title: 'Hospitality', value: 'hospitality' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Estratto',
      type: 'localeText',
      group: 'content',
      description: 'Una o due frasi, usate nell’anteprima del Journal e per la SEO.',
    }),
    defineField({
      name: 'body',
      title: 'Corpo dell’articolo',
      type: 'localeBlock',
      group: 'content',
    }),

    defineField({
      name: 'coverImage',
      title: 'Immagine di copertina',
      type: 'image',
      group: 'media',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'publishedAt',
      title: 'Data di pubblicazione',
      type: 'datetime',
      group: 'meta',
      description: 'L’articolo compare sul sito solo con una data valorizzata (non nel futuro).',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'relatedArtworks',
      title: 'Opere collegate',
      type: 'array',
      group: 'meta',
      description: 'Opere della collezione da mostrare in fondo all’articolo (link interni).',
      of: [{ type: 'reference', to: [{ type: 'artwork' }] }],
    }),
    defineField({
      name: 'seoDescription',
      title: 'Descrizione SEO',
      type: 'localeText',
      group: 'meta',
      description: 'Se vuota, viene usato l’estratto.',
    }),
  ],
  orderings: [
    {
      title: 'Più recenti',
      name: 'publishedDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: { title: 'title.en', subtitle: 'category', media: 'coverImage' },
  },
});
