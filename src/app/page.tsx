'use client';

import HeroSection from '@/components/HeroSection';
import dynamic from 'next/dynamic';

// const HeroSection = dynamic(() => import('@/components/HeroSection'), { ssr: false });
const HighlightsSection = dynamic(() => import('@/components/HighlightsSection'), { ssr: false });
const AboutPreview = dynamic(() => import('@/components/AboutPreview'), { ssr: false });
const ProductShowcase = dynamic(() => import('@/components/ProductShowcase'), { ssr: false });
const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: false });
const CtaBanner = dynamic(() => import('@/components/CtaBanner'), { ssr: false });
const GallerySection = dynamic(() => import('@/components/GallerySection'), { ssr: false });
const ContactSection = dynamic(() => import('@/components/ContactSection'), { ssr: false });

export default function Home() {
  return (
    <div className="flex flex-col technical-grid overflow-x-hidden ">
      <HeroSection />
      <HighlightsSection />
      <AboutPreview />
      <ProductShowcase />
      <CtaBanner />
      <GallerySection />
      <Testimonials />
      {/* <ContactSection /> */}
    </div>
  );
}
