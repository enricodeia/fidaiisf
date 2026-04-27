# Fedaiisf Newsletter — Pacchetto Design System

Tutto il necessario per generare ogni settimana la newsletter Fedaiisf con uno stile coerente.

## File inclusi

| File                          | Cosa contiene                                                |
|-------------------------------|--------------------------------------------------------------|
| `DESIGN_SYSTEM.md`            | Specifiche di design (colori, tipografia, componenti, regole)|
| `CLAUDE.md`                   | Istruzioni per l'agente AI che genera le newsletter          |
| `newsletter-template.html`    | Template HTML — non modificare senza versionare il design    |
| `content.example.json`        | Schema dati di esempio per una edizione                      |
| `build.js`                    | Script Node.js che combina template + content                |
| `assets/logo-fedaiisf.png`    | Logo ufficiale                                               |

## Quick start (workflow settimanale)

1. **Scrape** dei contenuti da `fedaiisf.it`
2. **Compila** `editions/YYYY-MM-DD/content.json` (struttura come `content.example.json`)
3. **Build**: `node build.js editions/YYYY-MM-DD`
4. **Pubblica** la cartella su hosting → ottieni URL pubblico
5. **Distribuisci**: apri il link, click "Copia per WhatsApp", incolla nel canale

## Funzionalità della newsletter generata

- **Toolbar sticky**: Stampa / Condividi / Copia per WhatsApp
- **Modal condivisione**: pulsanti diretti WhatsApp / Telegram / Email
- **Print-ready**: `Cmd+P` produce un PDF pulito senza UI
- **Responsive**: mobile e desktop ottimizzati
- **Accessibile**: WCAG AA, focus state, alt text

## Come pubblicare online

### Più veloce — Netlify Drop
Drag & drop della cartella `editions/2026-04-25/` su https://app.netlify.com/drop → URL pronto in 5 secondi.

### Più stabile — GitHub Pages
Repo `fedaiisf/newsletter` con branch `gh-pages`. Ogni edizione è una sottocartella.

### Più integrato — Server WordPress Fedaiisf esistente
Carica `editions/2026-04-25/index.html` in `/wp-content/newsletter/2026-04-25/` via FTP.

## Versioning del design system

Versione corrente: **1.0** (aprile 2026)

Cambiamenti al design = bump della versione. Aggiorna `DESIGN_SYSTEM.md` con changelog.
