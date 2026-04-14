// ✅ NOTE: Homepage is a Server Component wrapper — move 'use client' into child components
// This allows Next.js to inject metadata properly from layout.tsx

import HeroSection from '@/components/HeroSection';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

// ✅ Homepage-specific metadata (overrides layout defaults for this page only)
export const metadata: Metadata = {
  title: 'Medical Equipment & Clean Room Systems Manufacturer in India',
  description:
    'SKYON Innovations — leading manufacturer of ISO-certified clean room systems, laminar flow cabinets, biosafety cabinets, HEPA filters & hospital medical equipment. Chennai, India. Serving 40+ countries.',
  alternates: {
    canonical: 'https://skyon-innovation.vercel.app',
  },
  openGraph: {
    title: 'SKYON Innovations – Medical Equipment & Clean Room Systems Manufacturer',
    description:
      'ISO-certified clean room systems, laminar flow units, biosafety cabinets, and hospital-grade medical equipment. Trusted across 40+ countries.',
    url: 'https://skyon-innovation.vercel.app',
  },
};

// ✅ Lazy-load heavy sections below the fold — improves Core Web Vitals & LCP score
const HighlightsSection = dynamic(() => import('@/components/HighlightsSection'), { ssr: true });
const AboutPreview = dynamic(() => import('@/components/AboutPreview'), { ssr: true });
const ProductShowcase = dynamic(() => import('@/components/ProductShowcase'), { ssr: true });
const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: true });
const CtaBanner = dynamic(() => import('@/components/CtaBanner'), { ssr: true });
const GallerySection = dynamic(() => import('@/components/GallerySection'), { ssr: true });

// ✅ JSON-LD: WebSite schema — enables Google Sitelinks Search Box
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'SKYON Innovations',
  url: 'https://skyon-innovation.vercel.app',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://skyon-innovation.vercel.app/products?search={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function Home() {
  return (
    <>
      {/* ✅ Page-level JSON-LD schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* ✅ Semantic HTML: use <main> with proper landmark */}
      <div className="flex flex-col technical-grid overflow-x-hidden">
        {/* ✅ HeroSection loads eagerly — it's above the fold */}
        <HeroSection />
        <HighlightsSection />
        <AboutPreview />
        <ProductShowcase />
        <CtaBanner />
        <GallerySection />
        <Testimonials />
      </div>
    </>
  );
}