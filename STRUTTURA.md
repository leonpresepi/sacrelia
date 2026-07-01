# Sacrelia — Mappa delle pagine (Site Map)

> Documento vivo. Struttura informativa del portale vetrina multilingua.
> Ultimo aggiornamento: 2026-06-28

---

## 1. Strategia multilingua (URL)

- **Pattern:** sottocartella per lingua. **Inglese = default sulla root (nessun prefisso)**;
  le altre lingue con prefisso.
- **Lingue core (lancio):** EN (default), IT, DE, FR, ES.
- **Fase 2 (valutare):** PT, eventualmente AR per il canale hospitality del Golfo.

```
sacrelia.com/        →  English (default, root)
sacrelia.com/it/
sacrelia.com/de/
sacrelia.com/fr/
sacrelia.com/es/
```

- Ogni pagina espone `hreflang` reciproci per tutte le lingue + `x-default` → root (EN).
- **Slug localizzati** per lingua dove sensato (es. `/collection/` vs `/it/collezione/`):
  più lavoro, ma migliore per la SEO locale di ciascun mercato.

## 2. Albero delle pagine

Naming editoriale (non "shop/prodotti") per rafforzare il posizionamento luxury e
lasciare aperta l'integrazione e-commerce futura senza ridisegnare gli URL.

```
/                         Home — editoriale, hero fotografico, manifesto del brand
│
├── /collection/          Catalogo — griglia di opere, filtri sobri
│   └── /collection/[slug]   Scheda opera — gallery, storytelling, "Request information"
│
├── /craftsmanship/       Storytelling del "fatto a mano", processo artigianale
│
├── /atelier/             Chi siamo / il maestro artigiano / la storia del brand
│
├── /hospitality/         Landing B2B — hotel, dimore, interior designer (funnel dedicato)
│
├── /contact/             Form "Request information" + recapiti
│
└── /journal/   (COSTRUITO) Magazine/blog — leva SEO forte (long-tail, link interni)
    └── /journal/[slug]     Vedi PROGETTO.md §11-bis
```

### Pagine di servizio (priorità di indicizzazione bassa)
`/privacy/`, `/cookie/`, `/legal/`, pagina `404`.

## 3. Razionale delle scelte

- **`/collection/` + `/collection/[slug]`** è il cuore: gallery fotografica, racconto del
  pezzo, dati strutturati `Schema.org/Product` (senza prezzo; `offers` opzionale in futuro),
  CTA "Request information". Nessun prezzo a listino (principio di posizionamento).
- **`/hospitality/`** risolve la domanda aperta sul B2B: **sì**, come landing dedicata con
  proprio funnel di contatto (progetti su misura), non come listino.
- **`/journal/`** è rimandato alla **fase 2**: massimo potenziale SEO ma richiede impegno
  editoriale costante; non lanciarlo vuoto.
- **Naming editoriale** (`collection`, `atelier`, `craftsmanship`, `journal`) coerente col
  tono sobrio/luxury.

## 4. Elementi trasversali (tutte le pagine)

- Header minimale: logo, navigazione essenziale, selettore lingua.
- Footer: contatti, lingue, link legali, social.
- CTA ricorrente "Request information" coerente in tutto il sito.
- SEO tecnico per pagina: title/description localizzati, Open Graph, `hreflang`,
  dati strutturati (`Organization` globale, `Product` sulle schede), sitemap multilingua.
- Immagini ottimizzate (AVIF/WebP) servite via CDN; attenzione ai Core Web Vitals.

## 5. Aperti / da definire (eredità da PROGETTO.md)

- Confermare set lingue core e priorità di traduzione iniziale.
- Slug localizzati: tradurre tutti i path o solo i principali?
- Tassonomia del catalogo: servono categorie/filtri? (per stile, dimensione, materiale?)
- Chi gestisce i contenuti → impatta la scelta del CMS headless (prossimo passo).
