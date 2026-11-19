// Builds public/Bukunmi-Isijola-CV.pdf from the master CV, using the Job Hunt Hub app's own PDF exporter.
// Needs the Job Hunt Hub API on http://localhost:3001 (GET /api/master-cv). Run: node scripts/build-cv-pdf.mjs
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
import fs from 'node:fs';
import path from 'node:path';

const HUB = 'C:/Work/Job Hunt Hub';
const require = createRequire(HUB + '/package.json');
const { chromium } = require('playwright');
const { renderTextPdf } = await import(pathToFileURL(HUB + '/server/ai/pdfExport.js').href);

const res = await fetch('http://localhost:3001/api/master-cv');
if (!res.ok) throw new Error('master-cv request failed: ' + res.status);
const { content: full } = await res.json();
// The public copy leaves the phone number out; applications sent directly carry it.
const content = full.replace(/\s*[·|]\s*0\d{4}\s?\d{6}(?=\s*[·|]|\s*$)/m, '');
if (/0\d{4}\s?\d{6}/.test(content)) throw new Error('phone number still present in the public CV text');

// The exporter only turns a fixed list of titles into headings (Profile, Experience, Other Work, Skills,
// Education...). The master CV also uses "Professional Summary" and "Selected Independent Projects", which it
// would print as plain text. Promote those two to headings after the exporter has built the HTML.
const EXTRA = ['Professional Summary', 'Selected Independent Projects'];
const fix = (html) => EXTRA.reduce((h, t) => h.replace(new RegExp(`<p class="(?:role-line)?">${t}</p>`, 'i'), `<h2>${t.toUpperCase()}</h2>`), html);

const browser = await chromium.launch({ channel: 'msedge', headless: true }).catch(() => chromium.launch({ headless: true }));
try {
  const context = await browser.newContext();
  const origNewPage = context.newPage.bind(context);
  context.newPage = async () => {
    const page = await origNewPage();
    const set = page.setContent.bind(page);
    page.setContent = (html, o) => set(fix(html), o);
    return page;
  };
  const pdf = await renderTextPdf(content, context);
  const out = path.resolve('public/Bukunmi-Isijola-CV.pdf');
  fs.writeFileSync(out, pdf);
  console.log('wrote', out, pdf.length, 'bytes');
} finally {
  await browser.close();
}
