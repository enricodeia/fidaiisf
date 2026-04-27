// build.js — Generatore newsletter Fedaiisf
// Uso: node build.js editions/2026-04-25

import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'fs';
import { join } from 'path';

const editionDir = process.argv[2];
if (!editionDir) {
  console.error('Uso: node build.js editions/YYYY-MM-DD');
  process.exit(1);
}

const template = readFileSync('newsletter-template.html', 'utf8');
const content  = readFileSync(join(editionDir, 'content.json'), 'utf8');

// Sostituisce il blocco <script id="newsletter-data"> con il content.json dell'edizione
const out = template.replace(
  /<script type="application\/json" id="newsletter-data">[\s\S]*?<\/script>/,
  `<script type="application/json" id="newsletter-data">\n${content.trim()}\n  </script>`
);

mkdirSync(join(editionDir, 'assets'), { recursive: true });
copyFileSync('assets/logo-fedaiisf.png', join(editionDir, 'assets/logo-fedaiisf.png'));
writeFileSync(join(editionDir, 'index.html'), out);

console.log(`✓ Edizione generata: ${editionDir}/index.html`);
