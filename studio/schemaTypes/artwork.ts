import { defineType, defineField } from 'sanity';

// "Opera": il singolo presepe/pezzo da collezione.
// Un solo documento per opera, con i testi tradotti nelle 5 lingue (campi localizzati).
export const artwork = defineType({
  name: 'artwork',
  title: 'Opera',
  type: 'document',
  groups: [
    { name: 'content', title: 'Contenuti', default: true },
    { name: 'media', title: 'Foto' },
    { name: 'details', title: 'Dettagli' },
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
      name: 'shortDescription',
      title: 'Descrizione breve',
      type: 'localeText',
      group: 'content',
      description: 'Una o due frasi, usate nelle anteprime del catalogo e per la SEO.',
    }),
    defineField({
      name: 'description',
      title: 'Descrizione completa',
      type: 'localeBlock',
      group: 'content',
      description: 'Il racconto dell’opera, mostrato nella scheda.',
    }),

    defineField({
      name: 'mainImage',
      title: 'Immagine principale',
      type: 'image',
      group: 'media',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Galleria',
      type: 'array',
      group: 'media',
      of: [{ type: 'image', options: { hotspot: true } }],
      options: { layout: 'grid' },
    }),

    defineField({
      name: 'materials',
      title: 'Materiali',
      type: 'localeString',
      group: 'details',
    }),
    defineField({
      name: 'dimensions',
      title: 'Dimensioni',
      type: 'string',
      group: 'details',
      description: 'Es. "60 × 40 × 35 cm".',
    }),
    defineField({
      name: 'year',
      title: 'Anno',
      type: 'number',
      group: 'details',
      validation: (Rule) => Rule.min(1900).max(2100),
    }),
    defineField({
      name: 'featured',
      title: 'In evidenza (home)',
      type: 'boolean',
      group: 'details',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Ordine di visualizzazione',
      type: 'number',
      group: 'details',
      description: 'Numero più basso = mostrato prima.',
    }),
  ],
  orderings: [
    {
      title: 'Ordine manuale',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'title.en', subtitle: 'title.it', media: 'mainImage' },
  },
});
