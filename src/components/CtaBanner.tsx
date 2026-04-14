'use client';

import FadeInSection from './FadeInSection';
import Link from 'next/link';

export default function CtaBanner() {
  return (
    <section className="pt-0 md:pt-20 py-20 px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <FadeInSection direction="up" delay={200}>
          <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl p-6 md:p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute inset-0 technical-grid opacity-20 pointer-events-none"></div>
            <div className="relative z-10 max-w-2xl text-center md:text-left">
              <h2 className="text-[24px] md:text-5xl font-headline font-bold text-white leading-tight">
                Ready to Upgrade Your Clinical Infrastructure?
              </h2>
              <p className="mt-4 text-on-surface-variant text-[16px] md:text-lg">
                Partner with SKYON Innovations for engineering solutions that redefine patient care standards.
              </p>
            </div>
            <Link
              href="/contact-us"
              className="relative z-10 bg-primary text-on-primary px-12 py-5 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-transform shadow-[0_0_30px_rgba(165,222,255,0.3)] whitespace-nowrap"
            >
              Contact Us Now
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
