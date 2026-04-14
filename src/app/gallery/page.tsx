import GalleryContent from '@/components/GalleryContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Innovation Gallery',
  description: 'Explore our precision-engineered medical ecosystems and clinical environments. Witness the future of patient care in our Cybernetic Theatre and Synthesis Labs.',
  openGraph: {
    title: 'Innovation Gallery | SKYON Innovations',
    description: 'Explore our precision-engineered medical ecosystems and clinical environments. Witness the future of patient care in our Cybernetic Theatre and Synthesis Labs.',
    url: 'https://SKYON Innovations.com/gallery',
  },
};

export default function GalleryPage() {
  return (
    <div className="w-full">
      <GalleryContent />
    </div>
  );
}
