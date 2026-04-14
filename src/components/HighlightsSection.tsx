'use client';

import { ShieldCheck, Dumbbell, Settings } from 'lucide-react';
import FadeInSection from './FadeInSection';
import { cn } from '@/lib/utils';

export default function HighlightsSection() {
  const highlights = [
    {
      icon: ShieldCheck,
      title: 'Quality Assurance',
      desc: 'Surgical grade standards in every weld.',
      color: 'text-tertiary',
    },
    {
      icon: Dumbbell,
      title: 'Extreme Durability',
      desc: 'Built for 24/7 high-traffic environments.',
      color: 'text-primary',
    },
    {
      icon: Settings,
      title: 'Customization',
      desc: 'Tailored layouts for specific needs.',
      color: 'text-secondary',
    },
  ];

  return (
    <section className="py-20 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <FadeInSection key={i} direction="up" delay={i * 100}>
              <div className="glass-card p-8 rounded-xl flex items-center gap-6 group hover:bg-surface-container-high transition-all h-full">
                <div className={cn('w-16 h-16 rounded-full bg-surface-container/40 flex items-center justify-center flex-shrink-0', item.color)}>
                  <item.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-white text-lg">{item.title}</h3>
                  <p className="text-on-surface-variant text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
