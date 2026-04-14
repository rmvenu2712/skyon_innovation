'use client';

import { useState, useEffect, useCallback } from 'react';
import FadeInSection from './FadeInSection';
import { ZoomIn, X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images = [
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQI1tXzrhkSo1Ea7Vqqng6lAA7xUiZj5mW96PsBkpM9rOdhoF6AwR3991_V_2U3P7l6to5lw42R4oZYHgs83fDgmH1fcTGcZPY0sASkdsOIHmrHWzcI6U17Fzva-qidy-eabVxKgDeK-_3_g-TLrQFIRf8afU5aQzPPiumFwddmWr5FhlmpwxdYSRGpKLfyTC1vEwZ-mesmT3Z26-DRtfRMR4YKun9U_hFBc5LseeKB0XyzOYjt3pedjm4_TabxBt-LsjHCjQPy9BM",
      alt: "Interior of a ultra-modern hospital suite featuring SKYON Innovations medical beds and sleek furniture"
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4khPlzxhWIlmq4bMmHfZGAKwGuFgp59cn1H5Wqd6cNGSIDCTV95p1QmojIrdUUM1xIv08BLb3FZhe6TsqavTNdN2et6cPpca3y0q0rt_y6Ikav09HUt--dsgGYGNLa8EqzHI9_nMOobw9txUG7pZDmNnJU3MsD41Y_Rx6LienFNs81Us-zSWGpHjsgeuV8AJo1hOyR9eUCgY-ERdOHtez5pCZ1V7yg4qC6haQAPUiMm0aLwsPri__H55xq0Lni34SBp10kYN3DqlQ",
      alt: "Close-up detail of hospital bed wheels and braking system showcasing mechanical precision"
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSoC-RwUKkWaqeRjmRWS23y3ol-g1Ri3kP1QhRVd6sDNJRRlyYtThVuqCRhi2cl2CwCp5XUioBsq-OCf2U-kKcDDOfFiFffUSIbldWLhgmpmTZAw75O9j0NsJBXsV9LM692aWM3gC2Sz-kRcl0XN-v8VehPgBPdNe2tDOQeXdL7WaKTz6WOhjwQdevjCUAhaOIPUeNSnk9XbAuPFGkx9g9Fa6Ed8d0q-ReM-AEXnGmtfCQoPADGPMqBFNsobi1WIxb6dSQPhpSFnUg",
      alt: "Professional medical engineer working on a digital blueprint of a medical bed system"
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQCAQDgBCiwbm5elDfjbSMsDd_5GRjWe_2UFIqn8IJrjv528rc2npJplZ5E2zUfEU8K3vQF76hBuixrgexBrAw9ffUAXVpOhY7gwCl3rzxeZp1_l74gQdgr6BotbzRgIIG2WMQ9VWWMrzoZkbL1TdAVi9g_zSwfWb2JhazH-HVChIL3oFvYByncd9GhxzX3TtegBCj6_JHPPm52Vwt9pNK30PjFPZDQ4wWOCa1zF1kYJMM0gcdeJZOt6qOcChBYR08vUq2uEFVeYZk",
      alt: "Surgeons in an operating room with advanced SKYON Innovations medical equipment around the patient area"
    }
  ];

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = useCallback(() => {
    setLightboxIndex(prev =>
      prev === null ? null : (prev - 1 + images.length) % images.length
    );
  }, [images.length]);

  const goNext = useCallback(() => {
    setLightboxIndex(prev =>
      prev === null ? null : (prev + 1) % images.length
    );
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, goPrev, goNext]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIndex]);

  return (
    <>
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeInSection direction="up" delay={100}>
            {/* Header row: title left, link right */}
             <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4 block">
                Precision in Every Frame
              </span>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-white">
                 Innovation Gallery
              </h2>
            </div>
            <Link
              href="/gallery"
              className="text-primary font-bold text-sm flex items-center gap-2 group hover:text-primary-container transition-colors"
            >
             View Full Gallery
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          </FadeInSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((img, idx) => (
              <FadeInSection key={idx} direction="up" delay={200 + idx * 100}>
                <div
                  className="aspect-square overflow-hidden rounded-xl group relative border border-outline-variant/10 cursor-pointer"
                  onClick={() => openLightbox(idx)}
                >
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    alt={img.alt}
                    src={img.src}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <ZoomIn className="text-white w-10 h-10 drop-shadow-md" />
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            className="absolute top-5 right-5 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors z-10"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            className="absolute left-4 md:left-8 text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image */}
          <div
            className="relative max-w-4xl max-h-[85vh] w-full mx-16 md:mx-24"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              key={lightboxIndex}
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              className="w-full h-full object-contain rounded-xl max-h-[85vh] animate-fadeIn"
              referrerPolicy="no-referrer"
            />
            {/* Counter */}
            <p className="text-center text-white/50 text-sm mt-3">
              {lightboxIndex + 1} / {images.length}
            </p>
          </div>

          {/* Next button */}
          <button
            className="absolute right-4 md:right-8 text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </>
  );
}