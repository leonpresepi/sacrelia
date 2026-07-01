import { defineType, defineField } from 'sanity';

// Pagina editoriale flessibile (es. Lavorazione, Atelier, Hospitality).
// Lo "slug" determina a quale sezione corrisponde lato sito.
export const page = defineType({
  name: 'page',
  title: 'Pagina',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titolo',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Sezione',
      type: 'string',
      description: 'Sezione del sito a cui appartiene questa pagina.',
      options: {
        list: [
          { title: 'Lavorazione (craftsmanship)', value: 'craftsmanship' },
          { title: 'Atelier', value: 'atelier' },
          { title: 'Hospitality', value: 'hospitality' },
          { title: 'Privacy', value: 'privacy' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Immagine di apertura',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'lead',
      title: 'Introduzione',
      type: 'localeText',
    }),
    defineField({
      name: 'body',
      title: 'Contenuto',
      type: 'localeBlock',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Descrizione SEO',
      type: 'localeText',
    }),
  ],
  preview: {
    select: { title: 'title.en', subtitle: 'slug' },
  },
});
