import WhyChooseContent from '@/components/WhyChooseContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Choose Us',
  description: 'Engineered for Clinical Excellence. Discover why leading practitioners trust SKYON Innovations: ISO Certification, 15+ years experience, and competitive OEM pricing.',
  openGraph: {
    title: 'Why Choose Us | SKYON Innovations',
    description: 'Engineered for Clinical Excellence. Discover why leading practitioners trust SKYON Innovations: ISO Certification, 15+ years experience, and competitive OEM pricing.',
    url: 'https://skyon.com/why-choose',
  },
};

export default function WhyChoosePage() {
  return (
    <div className="w-full">
      <WhyChooseContent />
    </div>
  );
}
