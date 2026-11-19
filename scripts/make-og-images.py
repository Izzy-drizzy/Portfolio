"""Writes one 1200x630 JPEG per case study to public/og/, cropped from an image that case study already uses.
Run from the repo root: python scripts/make-og-images.py"""
from PIL import Image, ImageOps
SRC = {
  'hobpay': 'public/images/hobpay/case-study/new-dashboard.png',  # transparent phone render, set on the site's dark background
  'moolapay': 'public/images/moolapay/slide-1.webp',
  'healf': 'public/images/healf/slide-1.webp',
  'healf-zone-2': 'public/images/healf-zone2/slides/slide-1.webp',
  'leadtrader': 'public/images/leadtrader/slide-1.webp',
  'edusmart': 'public/images/edusmart/slide-1.webp',
  'urbannest': 'public/images/urbannest/slides/slide-1.webp',
  'freshroute': 'public/images/freshroute/slides/slide-1.webp',
  'nexora': 'public/images/nexora/slides/slide-1.webp',
  'spotify-sound-match': 'public/images/spotify-sound-match/slides/slide-1.webp',
  'monzo-left-to-spend': 'public/images/monzo-left-to-spend/hero.webp',
  'artbox-hq': 'public/images/artbox-hq/leads.webp',  # sample data; cropped from the top so the nav and first rows show
}
# Where to anchor the crop. Default is the middle of the image.
CENTERING = {'artbox-hq': (0.5, 0.0)}
Image.MAX_IMAGE_PIXELS = None
for name, p in SRC.items():
    im = Image.open(p)
    if name == 'hobpay':
        im = im.convert('RGBA'); im = im.crop(im.getchannel('A').point(lambda a: 255 if a > 8 else 0).getbbox())
        im.thumbnail((1200, 560), Image.LANCZOS)
        bg = Image.new('RGB', (1200, 630), '#141414'); bg.paste(im, ((1200 - im.width) // 2, (630 - im.height) // 2), im)
        bg.save('public/og/hobpay.jpg', 'JPEG', quality=86, optimize=True, progressive=True); print(name, im.size); continue
    im = im.convert('RGB')
    out = ImageOps.fit(im, (1200, 630), Image.LANCZOS, centering=CENTERING.get(name, (0.5, 0.5)))
    out.save(f'public/og/{name}.jpg', 'JPEG', quality=84, optimize=True, progressive=True)
    print(name, im.size)
