import { sanityClient } from './sanity';

// Tipi essenziali dei contenuti letti da Sanity.
export interface SanityImage {
  asset?: { _ref: string };
  hotspot?: { x: number; y: number };
}

export interface LocaleField {
  en?: string;
  it?: string;
  de?: string;
  fr?: string;
  es?: string;
}

export interface Artwork {
  _id: string;
  slug: string;
  title: LocaleField;
  shortDescription?: LocaleField;
  materials?: LocaleField;
  dimensions?: string;
  year?: number;
  mainImage?: SanityImage;
  gallery?: SanityImage[];
  description?: Record<string, unknown>; // localeBlock (Portable Text per lingua)
  featured?: boolean;
  order?: number;
}

const ARTWORK_FIELDS = `
  _id,
  "slug": slug.current,
  title,
  shortDescription,
  materials,
  dimensions,
  year,
  mainImage,
  featured,
  order
`;

async function safeFetch<T>(query: string, params: Record<string, unknown>, fallback: T): Promise<T> {
  if (!sanityClient) return fallback;
  try {
    return await sanityClient.fetch(query, params);
  } catch (err) {
    console.warn('[Sanity] query fallita, uso fallback:', (err as Error).message);
    return fallback;
  }
}

/** Tutte le opere, ordinate (order asc, poi più recenti). Array vuoto se Sanity non è configurato. */
export function getArtworks(): Promise<Artwork[]> {
  return safeFetch(
    `*[_type == "artwork" && defined(slug.current)] | order(order asc, _createdAt desc) { ${ARTWORK_FIELDS} }`,
    {},
    [],
  );
}

/** Opere in evidenza (per la home). */
export function getFeaturedArtworks(limit = 3): Promise<Artwork[]> {
  return safeFetch(
    `*[_type == "artwork" && featured == true && defined(slug.current)] | order(order asc)[0...${limit}] { ${ARTWORK_FIELDS} }`,
    {},
    [],
  );
}

/** Una singola opera con galleria e descrizione completa. */
export function getArtwork(slug: string): Promise<Artwork | null> {
  return safeFetch(
    `*[_type == "artwork" && slug.current == $slug][0] {
      ${ARTWORK_FIELDS},
      gallery,
      description
    }`,
    { slug },
    null,
  );
}

export interface Page {
  title: LocaleField;
  slug: string;
  heroImage?: SanityImage;
  lead?: LocaleField;
  body?: Record<string, unknown>; // localeBlock
  seoDescription?: LocaleField;
}

/** Pagina editoriale per sezione (craftsmanship | atelier | hospitality). */
export function getPage(slug: string): Promise<Page | null> {
  return safeFetch(
    `*[_type == "page" && slug == $slug][0]{ title, slug, heroImage, lead, body, seoDescription }`,
    { slug },
    null,
  );
}

export interface SiteSettings {
  brandName?: string;
  tagline?: LocaleField;
  heroImage?: SanityImage;
  contactEmail?: string;
  contactPhone?: string;
  instagram?: string;
}

/** Impostazioni globali del sito (documento singolo). */
export function getSiteSettings(): Promise<SiteSettings | null> {
  return safeFetch(
    `*[_type == "siteSettings"][0]{ brandName, tagline, heroImage, contactEmail, contactPhone, instagram }`,
    {},
    null,
  );
}

/** Solo gli slug (per getStaticPaths). */
export function getArtworkSlugs(): Promise<string[]> {
  return safeFetch(
    `*[_type == "artwork" && defined(slug.current)].slug.current`,
    {},
    [],
  );
}

// ---------------------------------------------------------------------------
// Journal (articoli editoriali)
// ---------------------------------------------------------------------------

export interface Article {
  _id: string;
  slug: string;
  title: LocaleField;
  excerpt?: LocaleField;
  category?: string;
  publishedAt?: string;
  coverImage?: SanityImage;
  body?: Record<string, unknown>; // localeBlock
  seoDescription?: LocaleField;
  relatedArtworks?: Pick<Artwork, 'slug' | 'title' | 'shortDescription' | 'mainImage'>[];
}

// Solo articoli pubblicati (data valorizzata e non nel futuro).
const PUBLISHED = `_type == "article" && defined(slug.current) && defined(publishedAt) && publishedAt <= now()`;

const ARTICLE_FIELDS = `
  _id,
  "slug": slug.current,
  title,
  excerpt,
  category,
  publishedAt,
  coverImage
`;

/** Tutti gli articoli pubblicati, dal più recente. Array vuoto se Sanity non è configurato. */
export function getArticles(): Promise<Article[]> {
  return safeFetch(
    `*[${PUBLISHED}] | order(publishedAt desc) { ${ARTICLE_FIELDS} }`,
    {},
    [],
  );
}

/** Un singolo articolo con corpo e opere collegate. */
export function getArticle(slug: string): Promise<Article | null> {
  return safeFetch(
    `*[${PUBLISHED} && slug.current == $slug][0] {
      ${ARTICLE_FIELDS},
      body,
      seoDescription,
      "relatedArtworks": relatedArtworks[]->{
        "slug": slug.current,
        title,
        shortDescription,
        mainImage
      }
    }`,
    { slug },
    null,
  );
}

/** Solo gli slug degli articoli pubblicati (per getStaticPaths). */
export function getArticleSlugs(): Promise<string[]> {
  return safeFetch(
    `*[${PUBLISHED}].slug.current`,
    {},
    [],
  );
}
