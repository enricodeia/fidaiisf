# Fedaiisf — Newsletter Design System

Sistema di design ufficiale per la newsletter settimanale Fedaiisf.
Versione 1.0 — Aprile 2026

---

## 1. Brand foundations

### Mission
Fedaiisf — Federazione delle Associazioni Italiane degli Informatori Scientifici del Farmaco e del Parafarmaco. Promuovere la coesione tra ISF e fornire una visione univoca dei problemi professionali.

### Tono di voce
- **Formale ma accessibile**. Niente gergo gratuito, niente colloquialismi.
- **Editoriale**. Frasi compiute, dati verificati, fonti sempre citate.
- **Sintetico**. Le sintesi degli articoli stanno in 2-3 frasi (40-60 parole).
- **Professionale-istituzionale**. Stile da rivista scientifica/sindacale.

---

## 2. Colori

Tutti i valori tratti dal logo (sigillo + scritta blu).

| Token              | HEX        | Uso                                              |
|--------------------|------------|--------------------------------------------------|
| `--brand`          | `#0B4FA0`  | Blu istituzionale (scritta logo). Primario.      |
| `--brand-deep`     | `#073973`  | Hover, accenti pesanti                            |
| `--brand-soft`     | `#E8EFF9`  | Sfondi tenui, blocchi informativi                 |
| `--accent-red`     | `#B7202E`  | Croce sabauda nel crest. Categoria politica.      |
| `--accent-green`   | `#1B7A4C`  | Anello verde nel crest. Categoria territorio.     |
| `--ink`            | `#1A1B1F`  | Testo principale, bottoni neri                    |
| `--ink-2`          | `#3A3D44`  | Testo secondario                                  |
| `--ink-3`          | `#6B6F78`  | Metadata, didascalie                              |
| `--line`           | `#E4E4E0`  | Bordi, divisori                                   |
| `--paper`          | `#FBFAF6`  | Sfondo pagina (warm off-white)                    |
| `--paper-2`        | `#F4F1E9`  | Sfondo footer/blocchi card                        |

### Regole d'uso colore
- **Mai** saturazioni alte. Il blu è istituzionale, non decorativo.
- Accenti rosso/verde **solo** per categorizzare (politica/territorio). Mai decorativi.
- Sfondo carta caldo, **mai** bianco puro per la pagina (solo per modali/preview).
- Tricolore (verde-bianco-rosso) come fascia divisoria sotto il masthead — uso istituzionale unico.

---

## 3. Tipografia

3 famiglie, caricate da Google Fonts.

```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
```

### Fraunces (Serif editoriale)
- **Quando**: titoli, masthead, citazioni, headline articoli
- **Pesi**: 300 (mast em), 400 (titoli), 500 (medie)
- **Optical sizing**: attivo

### Inter (Sans-serif)
- **Quando**: corpo testo, sintesi, UI, footer, bottoni
- **Pesi**: 400 (corpo), 500 (bottoni), 600/700 (rari)

### JetBrains Mono
- **Quando**: metadata, kicker, numeri articolo, etichette
- **Pesi**: 400, 500
- **Sempre uppercase con `letter-spacing: 0.04-0.18em`**

### Scala tipografica
| Uso                | Family    | Size   | Weight | LH    | LS       |
|--------------------|-----------|--------|--------|-------|----------|
| Masthead title     | Fraunces  | 56px   | 400    | 0.96  | -0.02em  |
| Hero title         | Fraunces  | 36px   | 400    | 1.06  | -0.018em |
| Section title      | Fraunces  | 22px   | 500    | 1.10  | -0.01em  |
| Article title      | Fraunces  | 19px   | 500    | 1.18  | -0.01em  |
| Pull quote         | Fraunces  | 22px   | 400    | 1.25  | -0.01em  |
| Body / deck        | Inter     | 13.5-15px | 400 | 1.55-1.6 | normal |
| Small body         | Inter     | 12-13px| 400    | 1.55  | normal   |
| Kicker / mono      | JBM       | 10-11px| 500    | 1.0   | 0.06-0.18em |

---

## 4. Spaziature & raggi

### Spacing scale (px)
`4 · 6 · 8 · 12 · 16 · 18 · 22 · 28 · 32 · 36 · 48`

### Border-radius (ispirati al sigillo circolare del logo)
| Token       | Valore  | Uso                                |
|-------------|---------|------------------------------------|
| `--r-xs`    | 6px     | Tag piccoli                        |
| `--r-sm`    | 10px    | Input, controlli                   |
| `--r-md`    | 16px    | Card secondarie, preview           |
| `--r-lg`    | 24px    | Hero image, pull quote, modali     |
| `--r-xl`    | 32px    | Pagina principale                  |
| `--r-pill`  | 999px   | Bottoni, badge, etichette          |

### Layout
- Larghezza newsletter: **720px max** (`.page`)
- Padding orizzontale interno: **48px** desktop, **22px** mobile
- Margine verticale tra sezioni: **32-48px**

---

## 5. Componenti

### `.toolbar` — Barra utilità (sticky in alto)
Contiene: indicatore edizione + 3 azioni (Stampa / Condividi / Copia).
**NON è parte della newsletter stampabile** (`@media print { display:none }`).

### `.masthead` — Testata
- Logo a sinistra (38px alt)
- Numero edizione + data + frequenza a destra (mono, uppercase)
- Titolo grande Fraunces con parola in italico/colorata
- Sottotitolo descrittivo

### `.rule.tri` — Fascia tricolore
Verde-bianco-rosso, altezza 4px. Solo sotto il masthead.

### `.sec-head` — Header di sezione
- Kicker mono uppercase + numero (es. "IN PRIMO PIANO · 01")
- Titolo Fraunces 22px
- Counter / data a destra in mono

### `.hero` — Articolo principale
- Visual 16:9 con `border-radius: var(--r-lg)`
- Label pill rossa "Primo piano"
- Titolo Fraunces 36px
- Deck con drop-cap blu sulla prima lettera
- Meta-row: fonte · data · "Leggi l'articolo →"

### `.article-row` — Riga lista articoli
Grid 3 colonne: `[80px num] [1fr corpo] [auto freccia]`.
- N° + categoria colorata a sinistra
- Titolo + sintesi + meta-line al centro
- Cerchio-freccia a destra (hover: nero)

### `.pull` — Citazione blu
- Sfondo `--brand`, testo bianco, raggio `--r-lg`
- Cerchi decorativi in basso a destra (eco del crest)
- Virgolette grandi semi-trasparenti

### `.footer`
- CTA "Vuoi condividere?" + bottone "Copia il testo"
- 3 colonne info: Fedaiisf / Sezioni / Contatti
- Colophon: copyright + social links

---

## 6. Iconografia

**Niente icone decorative**. Solo funzionali, sempre stroke-based, 1.5-2px:
- `copy` — duplicazione documenti
- `share` — quadrato con freccia su
- `print` — stampante
- `arrow` — freccia destra
- `check` — verde, conferma toast

Stile: `lucide` / `feather` (open source).

---

## 7. Immagini

### Trattamento
- **Aspect ratio**: 16:9 per hero, 4:3 ammesso per articoli interni
- **Border-radius**: `var(--r-lg)` (24px)
- **Object-fit**: `cover`, mai distorta
- **Overlay testuale**: solo se necessario, fondo `--paper` con bordo blu sottile

### Placeholder
Quando l'immagine non c'è:
- Pattern striato 45° in blu trasparente (vedi `.hero .visual` no-img)
- Etichetta pill mono al centro che descrive cosa va lì

### Fonti immagini consigliate
1. Immagini originali da fedaiisf.it (URL diretto in produzione online)
2. Foto eventi/convegni (qualità minimo 1200×675)
3. **Mai** stock generici. **Mai** AI-generate. **Mai** screenshot social.

---

## 8. Categorie articoli (tassonomia)

| Categoria         | Colore           | Quando usarla                          |
|-------------------|------------------|----------------------------------------|
| Industria         | `--brand` blu    | Aziende farma, M&A, accordi commerciali|
| Politica sanitaria| `--accent-red`   | AIFA, Ministero, normative             |
| Professione       | `--accent-green` | ISF, formazione, codice deontologico   |
| Norme             | `--brand` blu    | Leggi, decreti, sentenze               |
| AIFA              | `--accent-red`   | Comunicati e rapporti AIFA             |
| Territorio        | `--accent-green` | Sezioni locali, eventi regionali       |
| Ricerca           | `--brand` blu    | Studi clinici, scoperte                |
| Internazionale    | `--ink-2`        | Notizie da estero                      |

---

## 9. Struttura editoriale standard

Una newsletter contiene **sempre**:

1. **Toolbar** (utilità — non stampata)
2. **Masthead** (logo + numero edizione + titolo)
3. **Fascia tricolore**
4. **Hero / In primo piano** — 1 articolo lungo (60-80 parole sintesi)
5. **Notizie della settimana** — 5-7 articoli (30-50 parole sintesi)
6. **Pull quote** — 1 citazione di forte impatto da uno degli articoli
7. **Footer** — CTA condivisione + 3 colonne info + colophon

Lunghezza ottimale: 6-8 articoli totali. Mai meno di 5, mai più di 10.

---

## 10. Funzionalità di condivisione

### Pulsante "Copia per WhatsApp"
Genera testo plain pulito così formattato:

```
📰 *NEWSLETTER FEDAIISF* — DD.MM.YYYY
Federazione Associazioni Italiane Informatori Scientifici del Farmaco

━━━━━━━━━━━━━━━━━━━━
*IN PRIMO PIANO*

▸ [Titolo]
[Sintesi]
🔗 [URL]

━━━━━━━━━━━━━━━━━━━━
*LE NOTIZIE DELLA SETTIMANA*

01. [CATEGORIA] [Titolo]
[Sintesi]
🔗 [URL]

(...altri articoli)

━━━━━━━━━━━━━━━━━━━━
💬 «[Citazione]»
— [Fonte]

━━━━━━━━━━━━━━━━━━━━
Tutte le notizie su https://www.fedaiisf.it
Iscriviti alla newsletter: https://www.fedaiisf.it/contatti/
```

### Modal condivisione
Tre pulsanti: WhatsApp (`wa.me`), Telegram (`t.me/share`), Email (`mailto:`).

### Stampa / PDF
`window.print()` — il CSS `@media print` nasconde toolbar e modali.

---

## 11. Pubblicazione online (per condividere via link)

### Opzione A — Netlify Drop (più semplice)
1. Vai su `https://app.netlify.com/drop`
2. Trascina la cartella della newsletter
3. Ottieni URL tipo `https://random-name.netlify.app`
4. Personalizza con dominio custom: `newsletter.fedaiisf.it`

### Opzione B — GitHub Pages
1. Repo GitHub `fedaiisf/newsletter`
2. Branch `gh-pages` con i file
3. URL: `https://fedaiisf.github.io/newsletter/2026-04-25.html`

### Opzione C — Hosting Fedaiisf esistente
Caricare il file in `wp-content/newsletter/2026-04-25/index.html` sul WordPress esistente.

---

## 12. Accessibilità

- Contrasto minimo **WCAG AA** rispettato per tutti gli abbinamenti
- Tutti i link hanno `target="_blank" rel="noopener"`
- Immagini con `alt` descrittivo
- Bottoni con `aria-label` quando solo iconici
- Focus state visibile su tutti gli elementi interattivi
- Testo ridimensionabile fino a 200% senza rotture

---

## 13. Print stylesheet

```css
@media print {
  body { background: white; }
  .toolbar, .modal-back, .toast { display: none !important; }
  .page { margin: 0; box-shadow: none; border: none; max-width: none; }
}
```
