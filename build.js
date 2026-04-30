// build.js — Generatore newsletter Fedaiisf
// Uso: node build.js editions/2026-04-25

import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'fs';
import { join } from 'path';

const editionDir = process.argv[2];
if (!editionDir) {
  console.error('Uso: node build.js editions/YYYY-MM-DD');
  process.exit(1);
}

const escape = (s = '') =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const template = readFileSync('newsletter-template.html', 'utf8');
const contentRaw = readFileSync(join(editionDir, 'content.json'), 'utf8');
const data = JSON.parse(contentRaw);

const pageTitle = `Newsletter Fedaiisf — ${data.issue} · ${data.date}`;
const description = data.lead?.deck || `Newsletter settimanale Fedaiisf — ${data.issue}`;
const ogImage = data.lead?.image || '';
const url = data.publicUrl || '';

const meta = [
  `<title>${escape(pageTitle)}</title>`,
  `<meta name="description" content="${escape(description)}" />`,
  `<meta name="author" content="Fedaiisf" />`,
  `<link rel="icon" type="image/png" href="assets/logo-fedaiisf.png" />`,
  `<link rel="apple-touch-icon" href="assets/logo-fedaiisf.png" />`,
  `<meta property="og:type" content="article" />`,
  `<meta property="og:site_name" content="Fedaiisf — Newsletter settimanale" />`,
  `<meta property="og:title" content="${escape(pageTitle)}" />`,
  `<meta property="og:description" content="${escape(description)}" />`,
  url ? `<meta property="og:url" content="${escape(url)}" />` : '',
  ogImage ? `<meta property="og:image" content="${escape(ogImage)}" />` : '',
  ogImage ? `<meta property="og:image:alt" content="${escape(data.lead?.imageLabel || pageTitle)}" />` : '',
  `<meta property="og:locale" content="it_IT" />`,
  `<meta property="article:published_time" content="${escape(editionDir.split('/').pop())}" />`,
  `<meta name="twitter:card" content="${ogImage ? 'summary_large_image' : 'summary'}" />`,
  `<meta name="twitter:title" content="${escape(pageTitle)}" />`,
  `<meta name="twitter:description" content="${escape(description)}" />`,
  ogImage ? `<meta name="twitter:image" content="${escape(ogImage)}" />` : ''
].filter(Boolean).join('\n');

let out = template;

out = out.replace(
  /<!--META-->[\s\S]*?<link rel="apple-touch-icon" href="assets\/Logo\.png" \/>/,
  meta
);

out = out.replace(
  /<script type="application\/json" id="newsletter-data">[\s\S]*?<\/script>/,
  `<script type="application/json" id="newsletter-data">\n${contentRaw.trim()}\n  </script>`
);

mkdirSync(join(editionDir, 'assets'), { recursive: true });
copyFileSync('assets/logo-fedaiisf.png', join(editionDir, 'assets/logo-fedaiisf.png'));
writeFileSync(join(editionDir, 'index.html'), out);

console.log(`✓ Edizione generata: ${editionDir}/index.html`);
console.log(`  Titolo: ${pageTitle}`);
console.log(`  OG image: ${ogImage || '(none)'}`);
