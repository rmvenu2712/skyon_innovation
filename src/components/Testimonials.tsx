'use client';

import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import FadeInSection from './FadeInSection';
import { useCallback, useRef } from 'react';

export default function Testimonials() {
  const autoplay = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      containScroll: 'trimSnaps',
      dragFree: false,
      duration: 32,
    },
    [autoplay.current]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const testimonials = [
    {
      quote:
        'The Aero-V3 has transformed our patient rotation protocols. The precision of the lateral tilt is unmatched.',
      name: 'Dr. Sarah Jensen',
      title: 'Head of Critical Care, Metro General',
    },
    {
      quote:
        'Reliability is everything. SKYON Innovations beds are the only ones that survived our 5-year rigorous stress test without a single failure.',
      name: 'Marcus Thorne',
      title: 'Director of Procurement, Global Health Group',
    },
    {
      quote:
        'The modularity of the OT systems allowed us to optimize our theater turnover times by 15%. Engineering excellence at its peak.',
      name: 'Dr. Aris Thorne',
      title: 'Chief of Surgery, St. Jude Medical',
    },
    {
      quote:
        "Their beds aren't just furniture; they're data-driven care platforms. The durability is unmatched in high-traffic environments.",
      name: 'Elena Rodriguez',
      title: 'Clinical Ops Director, Metro Health',
    },
  ];

  return (
    <section className="py-24 overflow-hidden bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <FadeInSection direction="up" delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 py-8">
              <h2 className="text-[24px] md:text-4xl font-headline font-bold text-white leading-tight">
                Trusted by Leading Institutions
              </h2>

              <p className="mt-6 text-on-surface-variant italic leading-relaxed">
                Our clinical luminaries share their experiences with SKYON Innovations engineering.
              </p>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={scrollPrev}
                  aria-label="Previous testimonial"
                  className="p-3 rounded-full border border-outline-variant/30 text-white hover:bg-surface-variant transition-colors hover:text-primary hover:border-primary"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={scrollNext}
                  aria-label="Next testimonial"
                  className="p-3 rounded-full border border-outline-variant/30 text-white hover:bg-surface-variant transition-colors hover:text-primary hover:border-primary"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-2 min-w-0">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {testimonials.map((t, idx) => (
                    <div
                      key={idx}
                      className="min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] pl-0 md:pl-6"
                    >
                      <div className="glass-card bg-surface-container/40 p-10 rounded-xl border border-outline-variant/10 space-y-6 h-full flex flex-col justify-between">
                        <div>
                          <div className="flex text-tertiary mb-6">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <Star
                                key={s}
                                className="w-5 h-5 fill-tertiary text-tertiary"
                              />
                            ))}
                          </div>

                          <p className="text-on-surface italic text-lg leading-relaxed">
                            "{t.quote}"
                          </p>
                        </div>

                        <div className="pt-6 mt-6 border-t border-outline-variant/10">
                          <p className="font-bold text-white">{t.name}</p>
                          <p className="text-xs text-on-surface-variant mt-1">
                            {t.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}