# Bukunmi Isijola: portfolio

The source of [bukunmi-isijola.com](https://www.bukunmi-isijola.com), the portfolio of Bukunmi Isijola, a product designer who builds.

## What is in it

- A home page, a Work index, an About page and one page per case study (`src/pages/CaseStudy*.tsx`).
- A "Things I've built" section on the home page (`src/components/Built.tsx`), linking to live prototypes and public repositories.
- A PDF CV served from `public/Bukunmi-Isijola-CV.pdf`.

## Built with

React 19, TypeScript, Vite, Tailwind CSS 4, React Router, Motion and React Helmet. Hosted on Vercel (`vercel.json` rewrites every route to `index.html`).

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build into dist/
npm run preview  # serve the build locally
```

The contact form uses EmailJS. Set `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID` and `VITE_EMAILJS_PUBLIC_KEY` in a local `.env` file to make it send.

## Notes

- Each page except the home page is loaded on demand, so the home page does not download the case studies.
- `npm run build` also runs `scripts/static-meta.mjs`, which writes a per-case-study copy of `index.html` with its own title, description and social preview image, so link previews work without JavaScript. The images are in `public/og/` and are made by `scripts/make-og-images.py`.
- Images are WebP, at most 1600 px wide. `scripts/optimize-images.py` converts new PNG or JPG files.
- `scripts/build-cv-pdf.mjs` rebuilds the CV PDF from the master CV text. It needs the Job Hunt Hub app running locally, because it uses that app's PDF exporter.
