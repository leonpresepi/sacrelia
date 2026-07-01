import { createClient, type SanityClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

// Configurazione letta da variabili d'ambiente (.env).
// Compilare dopo aver creato il progetto Sanity (vedi .env.example).
const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET ?? 'production';
const apiVersion = import.meta.env.PUBLIC_SANITY_API_VERSION ?? '2024-01-01';

/** True quando Sanity è configurato; finché è false il sito usa i testi segnaposto. */
export const sanityConfigured = Boolean(projectId);

export const sanityClient: SanityClient | null = sanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      // Sito statico: le query girano solo al build → leggiamo sempre dati freschi
      // (la CDN poteva restituire contenuti/immagini non ancora propagati).
      useCdn: false,
    })
  : null;

const builder = sanityClient ? createImageUrlBuilder(sanityClient) : null;

/** Genera URL ottimizzati per le immagini Sanity (resize/format on-the-fly via CDN). */
export function urlForImage(source: unknown) {
  if (!builder) throw new Error('Sanity non configurato: manca PUBLIC_SANITY_PROJECT_ID.');
  return builder.image(source as never);
}
