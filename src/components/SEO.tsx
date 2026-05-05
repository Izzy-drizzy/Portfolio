import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://www.bukunmi-isijola.com';
const DEFAULT_TITLE = 'Bukunmi Isijola — Product Designer';
const DEFAULT_DESCRIPTION = 'Product designer with a CS background, building 0-to-1 products across fintech, health tech, and edtech.';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
}

export default function SEO({ title, description, path = '', ogImage }: SEOProps) {
  const pageTitle = title ? `${title} — Bukunmi Isijola` : DEFAULT_TITLE;
  const pageDescription = description || DEFAULT_DESCRIPTION;
  const canonicalUrl = `${SITE_URL}${path}`;
  const ogImg = ogImage || DEFAULT_OG_IMAGE;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonicalUrl} />

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
