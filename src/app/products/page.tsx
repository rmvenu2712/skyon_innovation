import ProductsContent from '@/components/ProductsContent';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Products & Systems',
  description: 'Explore SKYON Innovations\'s surgical grade hardware, ICU equipment, and imaging diagnostics. Supplying mission-critical infrastructure for leading hospitals.',
  openGraph: {
    title: 'Products & Systems | SKYON Innovations',
    description: 'Explore SKYON Innovations\'s surgical grade hardware, ICU equipment, and imaging diagnostics. Supplying mission-critical infrastructure for leading hospitals.',
    url: 'https://SKYON Innovations.com/products',
  },
};

export default function ProductsPage() {
  return (
    <div className="w-full">
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-primary">Loading Inventory...</div>}>
        <ProductsContent />
      </Suspense>
    </div>
  );
}
