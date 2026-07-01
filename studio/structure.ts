import type { StructureResolver } from 'sanity/structure';

// Organizza il menu del pannello: "Impostazioni sito" come documento singolo,
// poi Opere e Pagine come elenchi.
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Sacrelia')
    .items([
      S.listItem()
        .title('Impostazioni sito')
        .id('siteSettings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      S.documentTypeListItem('artwork').title('Opere'),
      S.documentTypeListItem('article').title('Journal (Articoli)'),
      S.documentTypeListItem('page').title('Pagine'),
    ]);
