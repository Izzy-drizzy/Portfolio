"""Converts public/images PNG/JPG (outside public/images/hobpay) to WebP, max 1600px wide, aiming for <=400 KB.
Originals are moved to the backup folder given as argv[1] (same relative paths). Prints a JSON map old->new.
Run from the repo root: python scripts/optimize-images.py <backup_dir>"""
import os, sys, json, shutil
from PIL import Image
Image.MAX_IMAGE_PIXELS = None
ROOT = 'public/images'
BACKUP = sys.argv[1]
LIMIT = 400 * 1024
mapping, before, after = {}, 0, 0
for dp, dn, fn in os.walk(ROOT):
    if os.path.normpath(dp).startswith(os.path.normpath(os.path.join(ROOT, 'hobpay'))):
        continue
    for f in fn:
        ext = f.lower().rsplit('.', 1)[-1]
        p = os.path.join(dp, f)
        size = os.path.getsize(p)
        if ext not in ('png', 'jpg', 'jpeg', 'webp'):
            continue
        if ext == 'webp' and size <= LIMIT:
            continue
        im = Image.open(p); im.load()
        if im.mode not in ('RGB', 'RGBA'):
            im = im.convert('RGBA' if 'A' in im.getbands() or im.mode == 'P' and 'transparency' in im.info else 'RGB')
        out = os.path.splitext(p)[0] + '.webp'
        best = None
        for width in (1600, 1400, 1200, 1000):
            w = min(width, im.width)
            r = im if w == im.width else im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
            for q in (82, 74, 66):
                r.save(out + '.tmp', 'WEBP', quality=q, method=6)
                s = os.path.getsize(out + '.tmp')
                if best is None or s < best[0]:
                    best = (s, w, q); shutil.copyfile(out + '.tmp', out + '.best')
                if s <= LIMIT: break
            if best[0] <= LIMIT: break
        os.remove(out + '.tmp')
        if ext == 'webp':  # recompressing a webp in place
            bk = os.path.join(BACKUP, os.path.relpath(p, '.')); os.makedirs(os.path.dirname(bk), exist_ok=True); shutil.copyfile(p, bk)
        else:
            bk = os.path.join(BACKUP, os.path.relpath(p, '.')); os.makedirs(os.path.dirname(bk), exist_ok=True); shutil.move(p, bk)
        os.replace(out + '.best', out)
        before += size; after += os.path.getsize(out)
        if ext != 'webp': mapping['/' + p.replace(os.sep, '/')[len('public/'):]] = '/' + out.replace(os.sep, '/')[len('public/'):]
        if best[0] > LIMIT: print('STILL OVER', out, best, file=sys.stderr)
print(json.dumps({'before': before, 'after': after, 'map': mapping}))
