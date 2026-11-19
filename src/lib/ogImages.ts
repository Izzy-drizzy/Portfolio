// One social preview image per case study (1200x630, in public/og/, made by scripts/make-og-images.py).
// SEO.tsx reads this by route; scripts/static-meta.mjs reads it too so link previews work without JavaScript.
export const OG_IMAGES: Record<string, string> = {
  '/work/Hobpay': '/og/hobpay.jpg',
  '/work/artbox-hq': '/og/artbox-hq.jpg',
  '/work/Moolapay': '/og/moolapay.jpg',
  '/work/healf': '/og/healf.jpg',
  '/work/healf-zone-2': '/og/healf-zone-2.jpg',
  '/work/LeadTrader': '/og/leadtrader.jpg',
  '/work/Edusmart': '/og/edusmart.jpg',
  '/work/UrbanNest': '/og/urbannest.jpg',
  '/work/FreshRoute': '/og/freshroute.jpg',
  '/work/Nexora': '/og/nexora.jpg',
  '/work/spotify-sound-match': '/og/spotify-sound-match.jpg',
  '/for/monzo': '/og/monzo-left-to-spend.jpg',
};
