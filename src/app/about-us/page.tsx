import AboutUsContent from '@/components/AboutUsContent';
import type { Metadata } from 'next';

// ✅ ADVANCED SEO: About page metadata
export const metadata: Metadata = {
  title: 'About Us – ISO-Certified Medical Equipment Manufacturer | Chennai, India',
  description:
    'Learn how SKYON Innovations became a trusted ISO-certified manufacturer of clean room systems and medical equipment. 15+ years of engineering excellence, serving hospitals and pharma industries in 40+ countries.',
  alternates: {
    canonical: 'https://skyon-innovation.vercel.app/about-us',
  },
  openGraph: {
    title: 'About SKYON Innovations – Medical Equipment Manufacturer in Chennai',
    description:
      'ISO-certified manufacturer with 15+ years experience. Clean room systems, laminar flow, biosafety cabinets, and hospital equipment for healthcare & pharma sectors worldwide.',
    url: 'https://skyon-innovation.vercel.app/about-us',
    images: [
      {
        url: 'https://skyon-innovation.vercel.app/assets/images/about-og.jpg', // ✅ Add a real image
        width: 1200,
        height: 630,
        alt: 'SKYON Innovations team and manufacturing facility',
      },
    ],
  },
};

// ✅ JSON-LD: AboutPage schema
const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About SKYON Innovations',
  description:
    'SKYON Innovations is an ISO-certified manufacturer and supplier of clean room systems, laminar flow cabinets, and hospital-grade medical equipment based in Chennai, India.',
  url: 'https://skyon-innovation.vercel.app/about-us',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://skyon-innovation.vercel.app' },
      { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://skyon-innovation.vercel.app/about-us' },
    ],
  },
};

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <div className="w-full">
        <AboutUsContent />
      </div>
    </>
  );
}