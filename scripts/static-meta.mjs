// After `vite build`: writes dist/<route>/index.html for each case study with its own title, description and
// social image in the HTML. Link-preview bots (LinkedIn, Slack, WhatsApp, X) do not run JavaScript, so the tags
// React Helmet sets in the browser are invisible to them. Vercel serves these files before the SPA rewrite.
import fs from 'node:fs';
import path from 'node:path';

const SITE = 'https://www.bukunmi-isijola.com';
const dist = 'dist';
const base = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const ogSrc = fs.readFileSync('src/lib/ogImages.ts', 'utf8');
const routes = [...ogSrc.matchAll(/'(\/[^']+)': '(\/og\/[^']+)'/g)].map((m) => ({ route: m[1], image: m[2] }));

// Title and description are read from each page's <SEO ... /> tag so there is one source of truth.
const pages = fs.readdirSync('src/pages').filter((f) => f.endsWith('.tsx'));
const seo = {};
for (const f of pages) {
  const src = fs.readFileSync(path.join('src/pages', f), 'utf8');
  const m = src.match(/<SEO\s+title="([^"]*)"\s+description="([^"]*)"\s+path="([^"]*)"/);
  if (m) seo[m[3]] = { title: m[1], description: m[2] };
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
let n = 0;
for (const { route, image } of routes) {
  const info = seo[route];
  if (!info) { console.warn('static-meta: no SEO tag found for', route); continue; }
  const title = `${info.title} | Bukunmi Isijola`;
  const url = SITE + route;
  const robots = route === '/for/monzo' ? '<meta name="robots" content="noindex, nofollow" />' : '';
  let html = base
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(info.description)}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(title)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(info.description)}$2`)
    .replace(/(<meta property="og:image" content=")[^"]*(")/, `$1${SITE + image}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${esc(title)}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${esc(info.description)}$2`)
    .replace(/(<meta name="twitter:image" content=")[^"]*(")/, `$1${SITE + image}$2`)
    .replace('</head>', `<link rel="canonical" href="${url}" /><meta property="og:image:width" content="1200" /><meta property="og:image:height" content="630" />${robots}</head>`);
  const out = path.join(dist, route, 'index.html');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  n++;
}
console.log(`static-meta: wrote ${n} pages`);
