
import GalleryContent from '@/components/GalleryContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery – Clean Room & Medical Equipment Installation Projects',
  description:
    'View SKYON Innovations\'s project gallery: clean room installations, laminar flow setups, biosafety cabinet deployments, and hospital equipment projects across India and internationally.',
  alternates: {
    canonical: 'https://skyon-innovation.vercel.app/gallery',
  },
  openGraph: {
    title: 'Project Gallery – SKYON Innovations Clean Room & Medical Equipment',
    description:
      'Explore completed clean room systems, laminar flow, and hospital equipment projects by SKYON Innovations across India and 40+ countries.',
    url: 'https://skyon-innovation.vercel.app/gallery',
    images: [
      {
        url: 'https://skyon-innovation.vercel.app/assets/images/gallery-og.jpg',
        width: 1200,
        height: 630,
        alt: 'SKYON Innovations clean room and medical equipment installation gallery',
      },
    ],
  },
};

const gallerySchema = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'SKYON Innovations Project Gallery',
  description:
    'Photo gallery of clean room systems, laminar flow cabinets, biosafety cabinets, and hospital medical equipment projects by SKYON Innovations.',
  url: 'https://skyon-innovation.vercel.app/gallery',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://skyon-innovation.vercel.app' },
      { '@type': 'ListItem', position: 2, name: 'Gallery', item: 'https://skyon-innovation.vercel.app/gallery' },
    ],
  },
};

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />
      <div className="w-full">
        <GalleryContent />
      </div>
    </>
  );
}