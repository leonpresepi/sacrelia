# Progetto Sacrelia — Portale Presepi di Lusso

> Documento vivo. Raccoglie visione, requisiti e decisioni del progetto.
> Aggiornare a ogni nuova informazione rilevante.
> Ultimo aggiornamento: 2026-07-01

---

## 1. Visione

Realizzare un portale che metta in mostra **presepi natalizi in versione luxury**.
Non il presepe commerciale, ma un **prodotto artigianale d'autore**, ricercato in ogni
dettaglio, pensato per essere anche **elemento d'arredo** di immobili di pregio e
**hotel di lusso**.

Il posizionamento è quello di un bene di lusso / pezzo da collezione, non di un prodotto
a libero acquisto.

## 2. Pubblico di riferimento (ipotesi)

- Collezionisti e appassionati di alto profilo.
- Architetti / interior designer che arredano residenze e strutture ricettive di lusso.
- Hotel, resort, dimore storiche, boutique.
- Clientela internazionale (probabile necessità multilingua).

## 3. Principi di posizionamento

- **Nessun prezzo a listino.** Ogni prodotto ha un pulsante **"Richiedi informazioni"**
  per rafforzare l'idea di esclusività e accesso non immediato.
- Estetica editoriale, fotografia di altissima qualità, racconto della lavorazione
  artigianale (storytelling del "fatto a mano" e del dettaglio).
- Tono sobrio, elegante, curato.

## 4. Requisiti tecnici dichiarati

- **SEO ai massimi livelli.**
- **Velocità di caricamento elevata** (performance come priorità — influisce su scelta
  tecnologica e servizi di hosting).

## 5. Richieste fatte all'assistente

- Salvare in `.md` tutto ciò che riguarda il progetto, per recupero nelle prossime sessioni.
- Considerazioni critiche sul progetto.
- Riferimenti a siti con missione simile (anche fuori dall'ambito religioso).
- Feedback sull'idea e dettagli implementativi.

## 6. Decisioni prese

- **Catalogo:** decine di prodotti (non centinaia).
- **Multilingua:** sì, obbligatorio fin dall'inizio.
- **Foto:** disponibili e professionali — il committente è fotografo (nessun problema sugli asset visivi).
- **Brand:** nome definitivo = **Sacrelia**. Logo / identità visiva: ancora da realizzare.
- **E-commerce:** non prima di **1 anno** dal lancio. Priorità immediata = **vetrina/showcase**
  che pubblicizza il prodotto. Eventuali vendite **B2B** gestite con **trattativa offline**.
  La scelta tecnica deve comunque restare aperta a un'integrazione commerce futura.

- **Lingua di default / root (DECISIONE PRESA):** **Inglese sulla root** (`sacrelia.com/`,
  nessun prefisso), le altre lingue con prefisso (`/it/`, `/de/`, `/fr/`, `/es/`).
  Motivazione: target internazionale e canale hospitality. `x-default` → root EN.

- **Mappa delle pagine (DEFINITA):** vedi `STRUTTURA.md`. Sezioni: Home, `/collection/`
  (+ scheda opera), `/craftsmanship/`, `/atelier/`, `/hospitality/` (B2B), `/contact/`;
  `/journal/` rimandato alla fase 2. Sezione B2B = **sì**, come landing dedicata.

- **CMS headless (DECISIONE PRESA):** **Sanity**. Motivazione: progetto foto-centrico
  (committente fotografo) e Sanity ha la migliore pipeline immagini (crop, punto focale,
  AVIF/WebP e resize on-the-fly via CDN), free tier generoso, multilingua tramite plugin.
  L'editing avviene da pannello a campi (Sanity Studio): il committente compila i campi,
  Astro genera l'HTML — nessuna scrittura di codice lato contenuti.

- **Stack tecnologico (DECISIONE PRESA):** **Opzione A — Astro + CMS headless ora**,
  e-commerce headless (es. Shopify) integrato in seguito quando servirà.
  Motivazione: l'e-commerce è lontano (1+ anno), catalogo ristretto e a basso volume,
  quindi conviene massimizzare *subito* velocità e SEO (priorità n.1) con Astro, senza
  compromessi. Next.js sarebbe stato preferibile solo con e-commerce imminente e centrale.

### Lingue consigliate (proposta assistente)
- **Core (lancio):** Italiano, Inglese, Tedesco, Francese, Spagnolo.
- **Seconda fase (valutare):** Portoghese, eventualmente Arabo per il canale hospitality del Golfo.
- Razionale: vedi sezione "Lingue" nelle note.

## 7. Domande aperte / da definire

- Logo e identità visiva (palette, font, tono).
- Gestione contenuti: chi inserisce/aggiorna i prodotti?
- Budget per hosting/servizi.
- Lingue: confermare il set core proposto (IT/EN/DE core, poi FR/ES).
- Canale B2B (hotel / interior designer): pagina o sezione dedicata sì/no?
- Mappa delle pagine del sito (struttura multilingua) — prossimo passo proposto.

---

## 6-bis. Tono di voce (DECISIONE PRESA)

- **Mai dichiarare "lusso/luxury".** Il prestigio si fa *percepire* attraverso lavorazione
  ricercata, fatto a mano, personalizzazione, pezzo unico, materiali scelti, emozione, "su richiesta".
  Rimosso "luxury/lusso" da tutti i testi visibili (tagline, lead, meta).
- **Descrizione brand (versione A)** applicata come manifesto della home, nelle 5 lingue.
- **Meta description SEO** (breve) impostata come descrizione della home (`home.hero.lead`),
  nelle 5 lingue: termini "ricchi ma sobri" (presepe d'autore, fatto a mano, pezzo unico,
  da collezione, su richiesta) senza keyword stuffing.
- Tagline aggiornata: EN "Signature handmade nativity scenes", IT "Presepi d'autore fatti a mano", ecc.
- **Aperto/da chiedere:** esiste una tradizione/luogo dietro la lavorazione (es. scuola napoletana)?
  Se sì, va inserito — forte valore SEO e di prestigio.

## 7-bis. Stato sviluppo (aggiornato 2026-06-28)

- **Progetto Astro creato** nella root (Astro 7, TypeScript strict, Tailwind 4, sharp attivo).
- **i18n configurato**: EN su root, IT/DE/FR/ES con prefisso. Stringhe UI in `src/i18n/`.
- **Layout + componenti base**: `BaseLayout` (SEO completo: title localizzato, canonical,
  hreflang + x-default, Open Graph), `Header`, `Footer`, `LanguagePicker`.
- **Home "prova di vita"** funzionante in tutte e 5 le lingue (testi segnaposto in `src/i18n/ui.ts`).
- **Build OK**: 5 pagine statiche generate. Dev server su `http://localhost:4321/`.
- Tema visivo provvisorio (palette avorio/carbone/bronzo) in `src/styles/global.css`.
- **Sanity collegato.** Project ID: `nvhc1tge`, dataset `production`. Config sito in `.env`
  (client di lettura in `src/lib/sanity.ts`, immagini via `@sanity/image-url`).
- **Architettura CMS:** Studio **separato** in `studio/` (ospitato su `sacrelia.sanity.studio`),
  perché `@sanity/astro` non supporta ancora Astro 7. Il sito legge i dati via `@sanity/client`.
- **Sanity Studio creato e buildato** (`studio/`, Sanity v6 / React 19). Schemi:
  - tipi localizzati `localeString` / `localeText` / `localeBlock` (traduzione **campo per campo**,
    EN base + IT/DE/FR/ES in fieldset richiudibile);
  - documento **`artwork`** (Opera): titolo, slug, descrizioni, immagine principale + galleria,
    materiali, dimensioni, anno, in-evidenza, ordine;
  - documento **`page`** (Lavorazione/Atelier/Hospitality);
  - singleton **`siteSettings`** (brand, tagline, contatti, Instagram).
- **Studio PUBBLICATO e online:** **https://sacrelia.sanity.studio/** (deploy via token,
  `appId: h7o0tebgnc4gppuf8f6unj1g` salvato in `sanity.cli.ts`). Il login via browser del CLI
  dava errori (404 callback / state) → usato deploy con token API. Per ri-pubblicare in futuro:
  serve un'autenticazione (browser `sanity login`, oppure token `SANITY_AUTH_TOKEN`).
- **Pagine catalogo COSTRUITE** (build OK, 10 pagine):
  - `/collection` (+ `/it|de|fr|es/collection`): griglia opere da Sanity, con stato "vuoto"
    elegante quando non ci sono contenuti;
  - `/collection/[slug]` (+ varianti lingua): scheda opera con galleria, dettagli
    (materiali/dimensioni/anno), descrizione rich-text (Portable Text) e **`Schema.org/Product`**;
  - routing i18n unificato: root EN + cartella dinamica `[lang]` per IT/DE/FR/ES.
- **Home ridisegnata — hero "editoriale" (DECISIONE PRESA, variante B):** apertura a tutto
  schermo immagine-prima, con testo ancorato **in basso a sinistra** (micro-etichetta con
  stella + titolo-concept serif grande + "View the collection →"), poi manifesto e opere in
  evidenza. Motivazione: brand foto-centrico → la fotografia guida; linguaggio da maison.
  Confronto fatto fra 3 varianti (A serif centrato, B editoriale, C cornice) → scelta **B**.
  Campo CMS `siteSettings.heroImage` per la foto di apertura; fallback = cielo notturno.
- **Header avanzato (FATTO):** sticky/fisso che resta sempre visibile; sulle pagine con hero
  scuro parte **trasparente** e allo scroll diventa **solido (avorio smerigliato/blur), compatto,
  con filo sottile**; voce di menu attiva evidenziata; transizioni morbide.
  **Menu mobile** a tutto schermo (hamburger → overlay con nav serif + selettore lingua,
  scroll-lock, chiusura X/Esc/tap, attributi aria). Logica trasparente/solido via prop
  `overlayHeader`. `LanguagePicker` inglobato nell'header (componente separato rimosso).
- **Identità visiva "presepe" (DECISIONE PRESA):** motivo **Stella/Cometa di Betlemme**
  (linee dorate), fascia **cielo notturno** blu mezzanotte come accento del catalogo, su base
  avorio caldo. Componenti: `StarMotif`, `Comet`, `Divider`. Tono sobrio/luxury, non folklorico.
- **Form contatti COSTRUITO** (`/contact` + varianti lingua, 15 pagine totali):
  - servizio **Web3Forms** (statico, host-agnostic, gratuito), chiave in `.env`
    (`PUBLIC_WEB3FORMS_KEY`); finché vuota il form esiste ma l'invio fallisce con messaggio d'errore;
  - campi nome/email/telefono(opz.)/messaggio + **consenso privacy** (GDPR), **honeypot** anti-spam;
  - invio via `fetch` con messaggi di successo/errore inline, localizzati nelle 5 lingue;
  - **pre-compilazione** dall'opera: il CTA "Richiedi informazioni" passa `?opera=<titolo>`,
    il form mostra "Richiesta su <opera>" e imposta l'oggetto;
  - accanto al form, **contatti diretti** (email/telefono/Instagram) da `siteSettings`.
- **Da fare (utente):** ottenere la **Access Key** gratuita su https://web3forms.com (registrandosi
  con l'email a cui ricevere i lead) e incollarla in `.env` → `PUBLIC_WEB3FORMS_KEY`.
- **Pagine editoriali COSTRUITE** (`/craftsmanship`, `/atelier`, `/hospitality` + lingue → 30
  pagine totali): componente unico `PageView` guidato dal documento `page` di Sanity
  (hero foto o cielo notturno, intro `lead`, corpo rich-text Portable Text, CTA ai contatti);
  header trasparente sull'hero scuro; stato "in scrittura" elegante (`page.empty`) finché vuote.
- **Blocco SEO/igiene COSTRUITO:**
  - **Sitemap multilingua** via `@astrojs/sitemap` con `hreflang` per tutte le lingue
    (default EN su root gestito correttamente); `sitemap-index.xml` generato in build.
  - **`robots.txt`** in `public/` con riferimento alla sitemap.
  - **Pagina Privacy** (`/privacy` + lingue, 35 pagine totali): CMS-driven (`page`, slug `privacy`)
    con `LegalView`, stato "in pubblicazione" elegante finché vuota; link nel **footer** e nel
    **consenso del form**. Testo legale definitivo da inserire in Sanity (a cura utente/consulente).
- **Flusso contenuti VALIDATO end-to-end (2026-06-29):** prima opera ("Sacrelia") inserita in
  Sanity con testo + foto → ricostruzione → visibile in collezione e scheda. Il committente
  gestisce i contenuti in autonomia dallo Studio online.
  - Fix applicato: `useCdn: false` nel client Sanity (sito statico → letture sempre fresche al build).
  - Nota appresa: pubblicare in Sanity **dopo** che l'upload immagine è completato (un upload
    interrotto lascia `mainImage._upload` senza `asset` → foto non renderizzata).
  - Per il lancio servono **foto professionali ad alta risoluzione** (quella di test era 452px).
- **Font self-hosted (FATTO):** **Cormorant Garamond** via `@fontsource` (pesi 400 e 500,
  importati in `BaseLayout`). Niente richieste a Google Fonts (più veloce, GDPR-friendly),
  woff2 serviti dal sito. `--font-serif` in `global.css` già lo referenziava.
- **SITO ONLINE (FATTO):** deploy su **Cloudflare Pages** → **https://sacrelia.pages.dev**
  (anteprima gratuita; dominio `sacrelia.com` da collegare in seguito).
  - Hosting: Cloudflare Pages, progetto `sacrelia`, account ID `98f8e6a9718ba04aafdeeadaa70dce3d`.
  - Metodo: **direct upload** della cartella `dist` via `wrangler pages deploy ./dist
    --project-name=sacrelia --branch=main` (no Git). Auth via token API (poi revocato).
  - **Aggiornare il sito = ricostruire (`npm run build`) e ri-caricare** (serve nuova auth Cloudflare).
  - **Migliorìa futura consigliata:** repo Git + Cloudflare Pages auto-deploy + webhook Sanity
    (così il sito si ri-genera da solo quando pubblichi contenuti).
  - **Nota indicizzazione:** `sacrelia.pages.dev` è pubblico; i canonical puntano già a
    `sacrelia.com`. Valutare `noindex` sull'anteprima finché non si collega il dominio vero.
- **Prossimo passo (sviluppo):** collegare il dominio `sacrelia.com`, eventuale pagina
  Cookie/Note legali, e (consigliato) auto-deploy via Git.
- **Prossimo passo (utente):** pubblicare lo Studio (`sanity login` + `sanity deploy`) e inserire
  la **prima opera** per vedere foto e schede dal vivo.
- File mappa pagine: `STRUTTURA.md`.
- **Analisi competitor:** `COMPETITOR.md` (2026-06-30). **Posizionamento/bussola:** `POSIZIONAMENTO.md`.
  Promemoria chiave emerso: **definire la storia d'origine** di Sacrelia (heritage = prova di valore).

---

## 8. Note implementative (analisi assistente)

Vedi la sezione "Feedback e dettagli implementativi" — sintesi:

- Stack consigliato per content/vetrina con massima performance: **Astro** (oppure
  **Next.js** se serve più interattività), con **immagini ottimizzate (AVIF/WebP)** e
  **CDN**.
- **Headless CMS** per gestire i prodotti senza toccare il codice (Sanity / Storyblok / Contentful).
- **Hosting su edge/CDN**: Vercel, Netlify o Cloudflare Pages.
- Lead generation: form "Richiedi informazioni" con anti-spam, tracciamento e CRM/email.
- SEO tecnico: SSG/SSR, dati strutturati (Schema.org Product/Organization), sitemap,
  metadati, Core Web Vitals.

---

## 9. Guida operativa: aggiungere un prodotto alla collezione

**Flusso in due momenti** (il sito è statico → non si aggiorna da solo).

### Momento 1 — Creare il prodotto nel pannello (utente, in autonomia)
1. Apri **https://sacrelia.sanity.studio/** e accedi.
2. Menu **Opere** → pulsante **+ / Create** (nuovo documento).
3. Compila i campi:
   - **Titolo** (almeno EN; le altre lingue nel riquadro *Translations* richiudibile);
   - **Slug** → clicca **Generate** (genera l'URL dal titolo EN);
   - **Descrizione breve** + **Descrizione completa**;
   - **Immagine principale** → carica la foto e ⏳ **aspetta che l'upload finisca** prima di pubblicare
     (un upload interrotto lascia la foto senza `asset` e non si vede);
   - **Galleria** (facoltativa), **Materiali / Dimensioni / Anno** (facoltativi);
   - **In evidenza** (mostra in home), **Ordine** (numero più basso = prima).
4. Clicca **Publish** (verde) — ⚠️ senza Publish resta bozza e non compare.

### Momento 2 — Pubblicare sul sito live
- Oggi è **manuale**: `npm run build` (ricostruisce pescando da Sanity) + ri-caricare su
  Cloudflare (`wrangler pages deploy ./dist --project-name=sacrelia --branch=main`, serve nuova
  auth Cloudflare). Per ora lo facciamo insieme.

---

## 10. Piano prossima sessione — 2026-06-30 (TODO)

**Obiettivo: AUTO-DEPLOY**, così l'utente diventa autonomo anche sugli aggiornamenti.
Target: *pubblica un'opera in Sanity → in ~1 minuto compare sul sito, da sola.*

Passi previsti:
1. **Repository Git (GitHub)** — serve un account GitHub gratuito dell'utente; push del progetto.
   (Ricordare: `.env`, `.deploy-token`, `.cf-token`, `node_modules`, `dist` in `.gitignore`.)
2. **Collegare GitHub a Cloudflare Pages** (build command `npm run build`, output `dist`),
   impostando le **variabili d'ambiente** su Cloudflare (`PUBLIC_SANITY_*`, `PUBLIC_WEB3FORMS_KEY`)
   — perché lì il build gira sul cloud, non sul PC.
3. **Webhook Sanity → Cloudflare Deploy Hook**: a ogni *publish* in Sanity, Cloudflare ri-builda.

Note/avvertenze per domani:
- Login social del browser dell'utente **non funzionano** (Google/social falliscono): preferire
  sempre **email+password** o **token**; per GitHub valutare login email+password.
- Dopo il setup, il deploy manuale via `wrangler` non servirà più (ci pensa Cloudflare da Git).

### Altri TODO aperti (non bloccanti)
- 🔐 Revocare il token Cloudflare "Pages Deploy" (era passato in chat).
- Collegare il **dominio `sacrelia.com`** quando acquistato.
- Eventuale **`noindex`** sull'anteprima `pages.dev` finché non c'è il dominio.
- Contenuti reali: **foto professionali alta risoluzione**, `siteSettings` (hero, contatti),
  testi pagine editoriali, **testo legale privacy**.
- Chiave **Web3Forms** per attivare il form contatti.

### 10-bis. AUTO-DEPLOY — IN CORSO (2026-07-01)

Avviato il setup dell'auto-deploy Git → Cloudflare Pages (vedi piano sez. 10). Stato:

- **Repo Git inizializzato** in locale (branch `main`). `.gitignore` rafforzato: esclude
  `.env`, `*.token`/`.cf-token`/`.sanity-token`, `.wrangler/`, `.playwright-mcp/`,
  `studio/node_modules|dist|.sanity`. Aggiunto **`.nvmrc`** per fissare la versione di Node in build.
- **GitHub (FATTO):** repo **privato** → **https://github.com/leonpresepi/sacrelia**
  (account `leonpresepi`, login email+password, non social). Push di `main` OK.
- **Cloudflare (FATTO — sito LIVE):** cancellato il vecchio progetto **Direct-Upload** (non convertibile
  a Git) e creato uno **nuovo collegato a Git** con lo stesso nome `sacrelia`. GitHub App "Cloudflare"
  installata sul repo. Build settings: framework **Astro**, build command **`npm run build`**,
  output **`dist`**, production branch **`main`**.
  - ⚠️ Cloudflare ora **unifica Pages dentro Workers**: il progetto Git è nato come **Worker**
    con asset statici, quindi l'URL di default NON è `sacrelia.pages.dev` ma
    **https://sacrelia.onoratomaurizio.workers.dev/** (sottodominio account = `onoratomaurizio`).
    Verificato online: **HTTP 200**, contenuti Sanity caricati. Il vecchio `sacrelia.pages.dev`
    è sparito con il progetto Direct-Upload cancellato.
- **Variabili d'ambiente su Cloudflare (Production):**
  - `NODE_VERSION = 24.18.0`
  - `PUBLIC_SANITY_PROJECT_ID = nvhc1tge`
  - `PUBLIC_SANITY_DATASET = production`
  - `PUBLIC_SANITY_API_VERSION = 2024-01-01`
  - `PUBLIC_WEB3FORMS_KEY` → **da aggiungere** quando l'utente avrà la chiave del form.
- **Fix build importante:** la prima build falliva con
  `node:module does not provide an export named 'registerHooks'`. Causa: **Node 22.12.0 troppo
  vecchio** (Astro 7/Vite richiedono `registerHooks`, disponibile da **Node ≥ 22.15**). Risolto
  allineando alla versione locale che funziona: **Node 24.18.0** (`.nvmrc` + var `NODE_VERSION`);
  aggiornato anche `engines` in `package.json` a `>=22.15.0`.
- **Come rilanciare un deploy:** basta un **push su `main`** (Cloudflare ribuilda in automatico) —
  non serve cercare "Retry" nel dashboard.
- **Scelta utente:** **nessun `noindex`** su `sacrelia.pages.dev` (anteprima resta indicizzabile).
- **Build Success (FATTO):** dopo il fix Node, la build torna Success con le 4 variabili;
  sito live e contenuti Sanity caricati (verificato HTTP 200).
- **Passo 3 — WEBHOOK SANITY (FATTO e COLLAUDATO 2026-07-01):** auto-deploy sui contenuti attivo.
  - Su Cloudflare (progetto Worker `sacrelia`) → **Settings → Deploy Hooks** creato hook
    **`sanity-publish`** su branch `main` (genera un URL `.../workers/builds/deploy_hooks/<id>` —
    **segreto**, NON salvato qui; rigenerabile dal dashboard).
  - Su **sanity.io/manage** (progetto `nvhc1tge`) → **API → Webhooks** creato webhook
    **"Cloudflare rebuild"**: URL = deploy hook, dataset `production`, trigger Create/Update/Delete,
    method POST, **Filter** = `!(_id in path('drafts.**')) && _type in ['artwork','page','article','siteSettings']`
    (parte solo su Publish di documenti reali, non sulle bozze), Projection vuota.
  - **Collaudo OK:** Publish in Studio ⇒ nuovo build "Deploy Hook" su Cloudflare ⇒ sito aggiornato.
- **Flusso finale (utente autonomo):** push su GitHub ⇒ sito ribuildato; Publish in Sanity ⇒ sito
  ribuildato. Nessun intervento manuale/assistente necessario per aggiornare.

**Ripresa prossima sessione — TODO aperti:**
  1. `PUBLIC_WEB3FORMS_KEY` → aggiungere su Cloudflare quando l'utente avrà la chiave (attiva il form);
  2. 🔐 **revocare i vecchi token** Cloudflare/Sanity passati in chat nelle sessioni precedenti
     (il deploy Studio di oggi è avvenuto con `sanity login`, senza token nuovi — CLI ora loggato);
  3. ~~collegare il dominio `sacrelia.com`~~ **FATTO 2026-07-02** → vedi sezione 13;
  4. contenuti reali: foto professionali alta risoluzione, `siteSettings`, testi pagine, testo legale privacy;
  5. (facoltativo) primo articolo del Journal con foto inline per collaudare la formattazione.

---

## 11. Journal / Blog — strategia editoriale (DECISIONE PRESA, Fase 2)

**Decisione:** aggiungere una sezione editoriale **"Journal"** (`/journal/`, già prevista in
`STRUTTURA.md`) per attrarre traffico organico. **Solo articoli per ora** (niente newsletter/RSS).

**Razionale (paradosso del lusso / Kapferer):** un bene di lusso deve essere *conosciuto da molti
ma posseduto da pochi*. La **diffusione del nome** è parte del valore ("dream value"): chi compra
ha status perché in tanti riconoscono/desiderano il brand. Quindi: andare **forte sull'awareness**,
ma mantenendo **espressione/tono elevati** (no clickbait, no contenuti poveri).

**Cadenza:** **1 articolo/settimana** (poi eventualmente 2). Costanza = fattore #1 di successo.

**Strategia a 2 strati:**
- *Awareness (volume)* → storia del presepe, tradizione napoletana, simbologia, presepi nel mondo.
- *Buyer-intent (nicchia)* → presepe d'autore da collezione, arredo natalizio di pregio,
  presepe per hotel di lusso, regalo esclusivo. Entrambi linkano internamente alle opere.

**Stagionalità (leva chiave):** picco ricerche ott–dic. Pubblicare evergreen tutto l'anno per
**arrivare già posizionati** al picco natalizio.

**Pillar editoriali:** Tradizione & cultura · Atelier & lavorazione · Interni & styling ·
Collezionismo · Hospitality.

**Metodo AI-assistito (scelta utente):** AI per struttura/lingua/keyword/traduzioni, ma
**sostanza reale dall'utente** (foto, dettagli lavorazione, storia maestro) = E-E-A-T/Experience.
Regole: **sempre rilettura umana** (accuratezza: l'AI può inventare fatti storici; + voce brand),
asticella alta. **Keyword:** l'AI idea/clusterizza per intento, ma **niente volumi live** → validare
con Google Keyword Planner / Trends / autocomplete / "People also ask".

**Flusso per articolo:** 1) AI → outline SEO (H1/H2, keyword, meta, link interni, suggerimenti foto)
→ 2) utente → sostanza + foto → 3) rifinitura tono brand + rilettura accuratezza → 4) publish in Sanity.
Traduzioni DE/FR/ES sui pezzi migliori.

**Build tecnico (quando si farà):** tipo `article` in Sanity (copertina, estratto, corpo, data,
tag, SEO), pagine `/journal/` + `/journal/[slug]` multilingua, `Schema.org/Article`, link alle opere.
Stessi pattern di `page`/`artwork`.

**Da preparare (offerto, in attesa):** mappa keyword + calendario stagionale (~10-12 argomenti),
mini guida di stile articoli, bozza completa del primo articolo d'esempio.

### 11-bis. Journal — COSTRUITO (2026-07-01)

Decisione presa di **anticipare il Journal** (non più Fase 2): l'utente vuole partire subito con
1 articolo/settimana. Scelte confermate: **sezione completa**, **slug `/journal/` in tutte le
lingue**, **categorie = i 5 pillar**. Costruito lato codice (build sito OK 45 pagine, build Studio OK):

- **Schema Sanity `article`** (`studio/schemaTypes/article.ts`, registrato in `index.ts`, voce
  "Journal (Articoli)" nella `structure.ts`): titolo, slug, **pillar** (tradition/atelier/interiors/
  collecting/hospitality), estratto, corpo rich-text, copertina, **data pubblicazione**, **opere
  collegate** (reference→artwork), descrizione SEO — tutti multilingua campo-per-campo come artwork/page.
- **Pagine** `/journal/` (indice) + `/journal/[slug]` (articolo) in EN root + `[lang]` IT/DE/FR/ES,
  con `Schema.org/Article` e data localizzata.
- **Componenti** `JournalView`, `ArticleCard`, `ArticleView`; helper `formatDate` in `i18n/utils.ts`;
  stringhe `nav.journal` + `journal.*` (intro, vuoto, categorie) nelle 5 lingue in `i18n/ui.ts`.
- **Menu:** voce **Journal** aggiunta in Header (fra Atelier e Hospitality) e Footer.
- **Filtro pubblicazione:** un articolo compare solo con `publishedAt` valorizzata e non nel futuro
  (`publishedAt <= now()`) — permette bozze e programmazione (serve comunque rebuild per andare live).

**DEPLOY FATTO (2026-07-01):**
- **Studio Sanity ripubblicato** via token → tipo "Journal (Articoli)" ora visibile su
  https://sacrelia.sanity.studio/ (token passato in chat → **da revocare**).
- **Sito ripubblicato** su Cloudflare Pages (`wrangler pages deploy ./dist`, branch main) →
  https://sacrelia.pages.dev con la sezione Journal (stato "vuoto" elegante finché non c'è il 1° articolo).
  Token Cloudflare passato in chat → **da revocare**. File `.sanity-token`/`.cf-token` creati e già eliminati.

**Da fare (utente):** 1) **revocare i due token** (Sanity + Cloudflare); 2) scrivere e **pubblicare il
primo articolo** nello Studio; 3) avvisarmi per rebuild+deploy così va live (finché non c'è auto-deploy Git).

**Piano editoriale (calendario 12 settimane + guida di stile):** vedi **`JOURNAL.md`** (creato 2026-07-01).
**Nota:** il flusso contenuti→build→deploy è lo stesso delle opere (sezioni 9-10).

### 11-ter. Immagini inline nel testo ricco (FATTO 2026-07-01)

Abilitate le **foto in mezzo al testo** (articoli, pagine, descrizioni opere), oltre a grassetto/
corsivo/titoli/elenchi/link/citazioni già disponibili di default:
- **Studio:** aggiunto blocco `image` (con campi **alt** + **caption**) all'editor `localeBlock`
  (`studio/schemaTypes/locale.ts`) → vale per `article`, `page`, `artwork`.
- **Sito:** nuovo renderer condiviso `src/lib/portableText.ts` (`renderBlocks`) che serializza le
  immagini in `<figure>` ottimizzate via CDN Sanity (`urlForImage`, width 1600, `loading=lazy`);
  usato da ArticleView/ArtworkView/PageView/LegalView. Stile `.rich figure/img/figcaption` in `global.css`.
- **Nota d'uso:** i corpi sono localizzati **campo-per-campo**, quindi la foto va inserita nella lingua
  in cui scrivi (per averla in tutte le 5 lingue, si inserisce in ciascun corpo).
- **Studio ripubblicato (FATTO 2026-07-01):** `sanity deploy` eseguito dopo `sanity login` (browser,
  login E-mail/GitHub — NON Google che dà errore) → pulsante **Image** ora attivo nell'editor su
  https://sacrelia.sanity.studio/. Sito già in grado di renderizzare le foto inline (push su GitHub).

## 12. Logo / identità visiva (proposte + scelta 2026-07-02)

Prodotte **3 proposte di logo** coerenti con l'identità già decisa (Stella di Betlemme a 4 punte,
oro `#CBAC6A`/bronzo `#A9885F` su avorio, serif Cormorant Garamond): **I La Stella** (lockup verticale),
**II La Cometa** (orizzontale), **III Il Sigillo** (monogramma S+stella). Mostrate in una brand board.
- **DECISIONE UTENTE:** **II Cometa** come logo header + **III Sigillo/stella** come favicon.
- **Implementato (FATTO, build OK):**
  - nuovo componente **`src/components/Logo.astro`** (cometa con scia + wordmark "Sacrelia"; la
    cometa usa `currentColor` via prop `markClass`, scia con `non-scaling-stroke` per restare nitida
    a dimensioni piccole);
  - **`Header.astro`** aggiornato: brand desktop `<Logo markClass="accent" />` (oro su hero scuro,
    bronzo su header solido, come prima); brand del menu mobile `<Logo markClass="text-bronze" .../>`.
    Rimosso il vecchio `StarMotif`+testo dal brand (StarMotif resta usato altrove);
  - **`public/favicon.svg`** rifatta: stella oro su quadrato carbone arrotondato (leggibile a 16px;
    la "S+cerchio" del Sigillo non regge a quelle dimensioni → si usa la stella, cuore del sigillo).
- **Nota:** il monogramma lettera "S" va usato solo in-pagina (dove il font è caricato), non come
  file SVG isolato (i social rasterizzano senza web-font → la S userebbe un ripiego). Per l'avatar
  social conviene esportare un PNG dal monogramma renderizzato.
- **Da valutare (utente):** rifinitura da graphic designer + registrazione del marchio (vedi sez. 7);
  eventuale `apple-touch-icon.png` per iOS (la favicon SVG copre i browser moderni).

## 13. Dominio sacrelia.com — COLLEGATO E ONLINE (2026-07-02)

- **Dominio registrato su Cloudflare Registrar** (a prezzo di costo, ~€10/anno). Nameserver Cloudflare
  automatici: `keaton.ns.cloudflare.com` + `sydney.ns.cloudflare.com`.
- **Nota:** la registrazione ci ha messo **~2-3 ore** a comparire nel registro .com (più lenta del
  solito → nel frattempo la pagina di stato mostrava "invalid nameserver", che è **transitorio**:
  non toccare i nameserver, si sistema da solo quando il registro pubblica il dominio).
- **Attenzione grafia:** il brand è **sacrelia** (con la E). `sacralia.com` (con la A) è un dominio
  di terzi, già registrato (IONOS) — non è nostro.
- **Custom domain aggiunto al Worker `sacrelia`** → `https://sacrelia.com` **HTTP 200**, certificato
  SSL valido (Google Trust Services, auto-emesso da Cloudflare in ~9 min), canonical già = apex.
- **"Always Use HTTPS" (FATTO 2026-07-03):** `http://` → `301` → `https://` (path preservato).
- **`www.sacrelia.com` (FATTO 2026-07-03):** redirect **301 → apex**. Metodo: la via "custom domain
  del Worker" dava *"No zones match www.sacrelia.com"* → usato invece **record DNS CNAME `www`→`sacrelia.com`
  (Proxied 🟠) + Page Rule** `www.sacrelia.com/*` → `https://sacrelia.com/$1` (301). Path preservato.
- **Routing canonicalizzato:** ogni variante (http/https, con/senza www) finisce su `https://sacrelia.com`.
- **Da fare (utente, non bloccante):**
  1. 🔐 **revocare i vecchi token** Cloudflare/Sanity (vedi 10-bis).
  2. Valutare `noindex` sull'anteprima `*.workers.dev` (ora che l'apex è live, per evitare duplicati;
     i canonical puntano già a sacrelia.com, quindi rischio basso).

## 14. Rifiniture tecniche SEO/social (FATTO 2026-07-03)

Chiusi i "quick-win" tecnici emersi dall'audit di completezza (il sito è forte tecnicamente, il
grosso che manca sono i **contenuti reali** — vedi lista sotto):
- **`og:image` (anteprima social):** prima **mancava del tutto**. Aggiunto in `BaseLayout` (prop
  `image`, con `og:image`/`twitter:image` + width/height + `twitter:title/description`).
  - Default di brand generato: **`public/og-default.png`** (1200×630, cielo notturno + stella +
    wordmark "SACRELIA", font Cormorant embedded via sharp).
  - **Schede opera e articolo** passano la **foto reale** (copertina Sanity 1200×630 jpg) come og:image
    (4 pagine slug: collection/journal, root + `[lang]`).
- **Pagina 404** brand-consistent: `src/pages/404.astro`.
- **Dati strutturati `Organization`** (nome, url, logo `icon-512.png`) in `BaseLayout` su tutte le pagine.
- **Icone:** generate `apple-touch-icon.png` (180, iOS), `icon-512.png`, `favicon-32.png` (via sharp
  dalla stella-sigillo); **rimossa** la vecchia `favicon.ico` nera. Link aggiunti in `BaseLayout`.
- Script di generazione asset: eseguito una tantum con sharp (non versionato); PNG in `public/`.

**Ancora da fare (dall'audit):**
- **Analytics** — consigliato **Cloudflare Web Analytics** (gratis, cookieless → niente banner):
  va abilitato dal dashboard (Analytics → Web Analytics → Add a site → token beacon) poi si aggiunge
  lo snippet in `BaseLayout`. **Passo utente.**
- **Contenuti reali** (foto HD, `siteSettings`, testi pagine, **testo legale privacy/cookie**), form
  Web3Forms attivo, **storia d'origine del brand** (heritage), primo articolo Journal.
- Email professionale (Google Workspace) — setup in corso.
