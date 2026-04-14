import ProductsContent from '@/components/ProductsContent';
import type { Metadata } from 'next';
import { Suspense } from 'react';

// ✅ ADVANCED SEO: Products page targets high-value product keywords
export const metadata: Metadata = {
  title: 'Clean Room Systems, Laminar Flow & Medical Equipment – Products',
  description:
    'Browse SKYON Innovations\'s full product range: ISO-certified clean room systems, laminar flow cabinets, biosafety cabinets, HEPA filters, doors & glass, and validation services. Competitive OEM pricing.',
  alternates: {
    canonical: 'https://skyon-innovation.vercel.app/products',
  },
  openGraph: {
    title: 'Products – Clean Room Systems, Laminar Flow & Medical Equipment | SKYON',
    description:
      'ISO-certified clean room systems, laminar flow units, biosafety cabinets, HEPA filtration, and validation services from SKYON Innovations. Serving hospitals and pharma worldwide.',
    url: 'https://skyon-innovation.vercel.app/products',
    images: [
      {
        url: 'https://skyon-innovation.vercel.app/assets/images/products-og.jpg', // ✅ Replace with real product image
        width: 1200,
        height: 630,
        alt: 'SKYON Innovations clean room and medical equipment product range',
      },
    ],
  },
  // ✅ This page is filterable — prevent duplicate indexing of filtered URLs
  robots: {
    index: true,
    follow: true,
  },
};

// ✅ JSON-LD: ItemList schema — helps Google show your products in rich results
const productsPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Medical Equipment & Clean Room Systems Products',
  description:
    'Full product catalogue of SKYON Innovations including clean room systems, laminar flow cabinets, biosafety cabinets, HEPA filters, and validation services.',
  url: 'https://skyon-innovation.vercel.app/products',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://skyon-innovation.vercel.app' },
      { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://skyon-innovation.vercel.app/products' },
    ],
  },
  // ✅ List your main product categories as ItemList
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Clean Room Systems', url: 'https://skyon-innovation.vercel.app/products?category=Clean+Room+Systems' },
      { '@type': 'ListItem', position: 2, name: 'Laminar Flow Cabinets', url: 'https://skyon-innovation.vercel.app/products?category=Laminar+Flow' },
      { '@type': 'ListItem', position: 3, name: 'Biosafety Cabinets', url: 'https://skyon-innovation.vercel.app/products?category=Safety+Cabinets' },
      { '@type': 'ListItem', position: 4, name: 'Doors & Glass Systems', url: 'https://skyon-innovation.vercel.app/products?category=Doors+%26+Glass' },
      { '@type': 'ListItem', position: 5, name: 'HEPA Filters & Ventilation', url: 'https://skyon-innovation.vercel.app/products?category=Filters+%26+Ventilation' },
      { '@type': 'ListItem', position: 6, name: 'Validation & Certification', url: 'https://skyon-innovation.vercel.app/products?category=Validation+%26+Certification' },
      { '@type': 'ListItem', position: 7, name: 'AMC & Services', url: 'https://skyon-innovation.vercel.app/products?category=AMC+%26+Services' },
    ],
  },
};

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsPageSchema) }}
      />
      <div className="w-full">
        {/* ✅ Suspense with meaningful fallback for better UX & CLS score */}
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center text-primary" aria-busy="true">
              Loading Products...
            </div>
          }
        >
          <ProductsContent />
        </Suspense>
      </div>
    </>
  );
}