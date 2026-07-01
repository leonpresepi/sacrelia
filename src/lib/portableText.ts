import { toHTML } from '@portabletext/to-html';
import { urlForImage } from './sanity';

// Rendering del testo ricco (Portable Text) → HTML.
// Oltre ai blocchi di testo (grassetto, corsivo, titoli, elenchi, link, citazioni),
// gestiamo le IMMAGINI inserite in mezzo al testo: nell'editor Sanity si aggiunge un
// blocco immagine (con testo alternativo e didascalia), qui lo trasformiamo in <figure>.

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const components = {
  types: {
    // Blocco immagine inline dentro il corpo (foto tra un paragrafo e l'altro).
    image: ({ value }: { value: { asset?: unknown; alt?: string; caption?: string } }) => {
      if (!value?.asset) return '';
      const src = urlForImage(value).width(1600).auto('format').url();
      const alt = value.alt ? escapeHtml(value.alt) : '';
      const caption = value.caption
        ? `<figcaption>${escapeHtml(value.caption)}</figcaption>`
        : '';
      return `<figure><img src="${src}" alt="${alt}" loading="lazy" decoding="async" />${caption}</figure>`;
    },
  },
};

/** Portable Text → HTML con supporto alle immagini inline. Stringa vuota se non c'è contenuto. */
export function renderBlocks(blocks: unknown[]): string {
  return blocks.length ? toHTML(blocks as never, { components: components as never }) : '';
}
