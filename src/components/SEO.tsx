import { Helmet } from 'react-helmet-async';
import { OG_IMAGES } from '../lib/ogImages';

const SITE_URL = 'https://www.bukunmi-isijola.com';
const DEFAULT_TITLE = 'Bukunmi Isijola | Product Designer';
const DEFAULT_DESCRIPTION = 'Product designer working in Figma and building in React and TypeScript, with a BSc and MSc in Computer Science. Owned design for a live consumer fintech product.';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noindex?: boolean;
}

export default function SEO({ title, description, path = '', ogImage, noindex = false }: SEOProps) {
  const pageTitle = title ? `${title} | Bukunmi Isijola` : DEFAULT_TITLE;
  const pageDescription = description || DEFAULT_DESCRIPTION;
  const canonicalUrl = `${SITE_URL}${path}`;
  const ogImg = ogImage || (OG_IMAGES[path] ? `${SITE_URL}${OG_IMAGES[path]}` : DEFAULT_OG_IMAGE);

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImg} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Bukunmi Isijola" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={ogImg} />
    </Helmet>
  );
}
