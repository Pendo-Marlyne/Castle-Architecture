import { Helmet } from 'react-helmet-async';
import { site } from '../config/site.js';

export default function SEO({ title, description, path = '/', image, type = 'website', noindex = false }) {
  const fullTitle = title ? `${title} | ${site.name}` : site.name;
  const desc = description || site.description;
  const url = `${site.url}${path}`;
  const img = image ? (image.startsWith('http') ? image : `${site.url}${image}`) : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex" />}
      <meta property="og:site_name" content={site.name} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      {img && <meta property="og:image" content={img} />}
      <meta name="twitter:card" content={img ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      {img && <meta name="twitter:image" content={img} />}
    </Helmet>
  );
}