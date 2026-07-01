import { defineType, defineField } from 'sanity';

// Impostazioni globali del sito (documento singolo).
export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Impostazioni sito',
  type: 'document',
  fields: [
    defineField({
      name: 'brandName',
      title: 'Nome brand',
      type: 'string',
      initialValue: 'Sacrelia',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'localeString',
    }),
    defineField({
      name: 'heroImage',
      title: 'Foto di apertura (home)',
      type: 'image',
      description: 'Immagine a tutto schermo della home. Se assente, viene usato lo sfondo notturno.',
      options: { hotspot: true },
    }),
    defineField({
      name: 'contactEmail',
      title: 'Email di contatto',
      type: 'string',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'contactPhone',
      title: 'Telefono',
      type: 'string',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram (URL)',
      type: 'url',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Impostazioni sito' }),
  },
});
