'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const heroImages = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCB50fRIZ-2vlEABC9qoCc81LMV7y-Umb4eOU5giiLKLF-jWa6fZObsks_x2EjB7i3CmCJCPIzUkawFEZAF_XZo7XDbTRMMrLblBLupoxj5TUs3g1UWp2VlbueyWi7YY4YxastkfqwANrk49PeU48SBSABZyTzVToOEJAT_MhXFSP1vv5uhBprYPQRZwuQIlhNzEaddyefTh_1mjjV5CmRHmzxLbUqzYtqMGCWqvq0KHFXUu39SksAI7AIzsm-5F0I8EEmNRXhEQ13v',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDf_R33REU0OwFu7awj8QFMFodzn6gaFD0TBXrRVh-3iO-Kt5C9VwRDLIgro3pBU1XFhfozbCaOpqkFzIgvQDSkXZpPoiuHLBRUYln5oOzJ1kfYHdIwQggu9iT9fHvULAi29Q2HNwad3R0iO35Csnxt7IIRstly7XOQPCPrTRgqnMOoR4E9HrpPK_7OkDWAtJJVCicR9hxCHFrrcTeR7bhyTl2kqLkrPUWHexvOXuWsKwPMpUteVt70EaJUEaCOG7bkeF2G9b_Jza_a',
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        setFadeOut(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Fade Animation */}
      <div className="absolute inset-0 z-0">
        <div
          className={cn(
            'absolute inset-0 transition-opacity duration-500',
            fadeOut ? 'opacity-0' : 'opacity-40'
          )}
        >
          <img
            src={heroImages[currentImageIndex]}
            alt="Medical equipment"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 blur-[80px] rounded-full animate-pulse"
          style={{
            animation: 'float 5s ease-in-out infinite',
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-tertiary/5 blur-[100px] rounded-full"
          style={{
            animation: 'float 7s ease-in-out infinite reverse',
          }}
        />
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
        {/* Left Content */}
        <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="inline-block px-3 py-1 bg-surface-container-high border border-outline-variant/15 rounded-full mb-6">
            <span className="text-primary font-label text-xs font-bold uppercase tracking-widest">Precision Engineering</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-extrabold text-white leading-tight tracking-tighter">
            Redefining Healthcare Through <span className="text-primary text-glow">Precision</span>
          </h1>

          <p className="text-[16px] md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
            Premium hospital beds and ICU solutions engineered for the demands of modern medical facilities. Where safety
            meets surgical precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/contact-us"
              className="bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-10 py-4 rounded-full font-bold text-lg hover:shadow-[0px_0px_25px_rgba(74,199,255,0.4)] active:scale-95 transition-all flex items-center justify-center gap-3 group"
            >
              Contact Us Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/products"
              className="border border-outline-variant/60 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/5 transition-all flex items-center justify-center"
            >
              View Catalogue
            </Link>
          </div>
        </div>

        {/* Right Image - Animated */}
        <div className="hidden lg:flex justify-end animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
          <div className="relative">
            <div className="absolute -inset-10 bg-primary/10 blur-[100px] rounded-full"></div>
            <div
              className={cn(
                'relative z-10 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-outline-variant/15 overflow-hidden w-96 h-96 transition-opacity duration-500',
                fadeOut ? 'opacity-0' : 'opacity-100'
              )}
            >
              <img
                src={heroImages[currentImageIndex]}
                alt="Medical equipment showcase"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Info Card */}
            <div className="absolute -bottom-6 -left-6 z-20 glass-card p-6 rounded-2xl shadow-2xl border border-primary/20 max-w-[200px] animate-in fade-in slide-in-from-bottom-2 duration-700 delay-500">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
                <span className="text-[10px] font-bold text-tertiary uppercase tracking-tighter">Live Monitoring</span>
              </div>
              <p className="text-white font-bold text-sm">99.9% Latency Accuracy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
