import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://YOUR_PRODUCTION_DOMAIN.com';
  return [
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date('2026-10-23'),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: baseUrl,
      lastModified: new Date('2026-10-23'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
