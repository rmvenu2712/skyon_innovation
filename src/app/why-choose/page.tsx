
import type { Metadata } from 'next';


import WhyChooseContent from '@/components/WhyChooseContent';

export const metadata: Metadata = {
  title: 'Why Choose Us – ISO Certified, 15+ Years, OEM Pricing | SKYON',
  description:
    'Why leading hospitals and pharma companies choose SKYON Innovations: ISO certification, 15+ years of engineering expertise, competitive OEM pricing, and AMC support across India and globally.',
  alternates: {
    canonical: 'https://skyon-innovation.vercel.app/why-choose',
  },
  openGraph: {
    title: 'Why Choose SKYON Innovations – ISO Certified Medical Equipment Manufacturer',
    description:
      'ISO-certified with 15+ years experience. Competitive OEM pricing, end-to-end support, and AMC services for clean room systems and hospital equipment.',
    url: 'https://skyon-innovation.vercel.app/why-choose',
  },
};

const whyChooseSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Why Choose SKYON Innovations',
  url: 'https://skyon-innovation.vercel.app/why-choose',
  description:
    'Reasons to choose SKYON Innovations: ISO certification, competitive OEM pricing, 15+ years expertise, and global service network for clean room and medical equipment.',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://skyon-innovation.vercel.app' },
      { '@type': 'ListItem', position: 2, name: 'Why Choose Us', item: 'https://skyon-innovation.vercel.app/why-choose' },
    ],
  },
};

export default function WhyChoosePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(whyChooseSchema) }}
      />
      <div className="w-full">
        <WhyChooseContent />
      </div>
    </>
  );
}