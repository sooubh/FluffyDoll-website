import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/privacy-policy'],
    },
    sitemap: 'https://YOUR_PRODUCTION_DOMAIN.com/sitemap.xml',
  };
}
