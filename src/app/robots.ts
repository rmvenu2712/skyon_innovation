import type { MetadataRoute } from 'next';
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // ✅ Block pages that shouldn't be indexed
        disallow: [
          '/api/',        // Block API routes
          '/_next/',      // Block Next.js internals
          '/admin/',      // Block any admin pages if they exist
        ],
      },
    ],
    sitemap: 'https://skyon-innovation.vercel.app/sitemap.xml',
    host: 'https://skyon-innovation.vercel.app',
  };
}