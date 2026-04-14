'use client';

import Link from 'next/link';
import FadeInSection from './FadeInSection';

export default function AboutPreview() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <FadeInSection direction="left">
            <div className="relative">
              <div className="aspect-square rounded-xl overflow-hidden shadow-2xl border border-outline-variant/20">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUShDs0MQPovV0SawFboN3IqLvuzLBG7Ll8l8CJAcANiHuRLO0BbjYtCmR-kb6mPlz5fQBD1QpXGweI69rKtjOiveia--ObS8BY4JNCU3BVfpWX5xn2jmTrbJB2CfZZ76Lzb3QjqueC_YXpQTf4re7wd9mBxOGo2xHMUZNstEriRICRj1RI4URFBpqEJxBlosg57VxsLmtku_IKQB5dcIhdIy3eydN6plmQttV4MXHu9Mh2wWLWPWjFGcdU6F6hF9IlCAOLs_GbJ1-"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 hidden md:block w-64 h-64 glass-card p-8 rounded-xl">
                <span className="text-4xl font-headline font-black text-primary">25+</span>
                <p className="mt-4 font-body font-semibold text-white leading-tight">Years of Clinical Excellence</p>
                <p className="mt-2 text-xs text-on-surface-variant">Setting global benchmarks for ICU furniture since 1999.</p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection direction="right">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-white leading-tight">
                Precision in Every <span className="text-tertiary">Fiber</span>
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed italic">
                "At SKYON Innovations, we believe the bed is the most critical piece of equipment in the ICU. It&apos;s not just furniture;
                it&apos;s a life-support platform."
              </p>
              <div className="space-y-4 text-on-surface-variant">
                <p>
                  Our engineering philosophy stems from decades of direct feedback from healthcare professionals. Every curve,
                  every joint, every material selection is data-driven.
                </p>
                <p>
                  With SKYON Innovations beds installed in 65+ countries, we&apos;ve proven that design excellence and clinical outcomes go
                  hand in hand.
                </p>
              </div>
              <Link
                href="/about-us"
                className="inline-block px-10 py-4 rounded-full border border-primary/30 text-primary font-bold hover:bg-primary/10 transition-all"
              >
                Read Full Story
              </Link>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
