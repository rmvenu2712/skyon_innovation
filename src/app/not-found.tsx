'use client';

import Link from 'next/link';
import { Home, AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative min-h-[70vh] flex flex-col items-center justify-center py-20 overflow-hidden px-6 text-center">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 blur-[80px] rounded-full animate-pulse"
          style={{ animation: 'float 5s ease-in-out infinite' }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-error/5 blur-[100px] rounded-full"
          style={{ animation: 'float 7s ease-in-out infinite reverse' }}
        />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 animate-in zoom-in-95 duration-700 fade-in slide-in-from-bottom-8">
        <div className="flex justify-center mb-8">
          <div className="bg-error/10 w-24 h-24 rounded-full flex items-center justify-center border border-error/20 shadow-[0_0_30px_rgba(255,180,171,0.15)]">
            <AlertCircle className="w-12 h-12 text-error animate-pulse" />
          </div>
        </div>

        <h1 className="text-8xl md:text-9xl font-headline font-extrabold text-white tracking-tighter mb-4 text-glow opacity-90 drop-shadow-2xl">
          404
        </h1>

        <h2 className="text-3xl md:text-[24px] md:text-4xl font-headline font-bold text-white mb-6">
          Page <span className="text-primary text-glow">Not Found</span>
        </h2>

        <p className="text-on-surface-variant max-w-md mx-auto mb-12 leading-relaxed text-lg">
          The precision instrument you are looking for couldn't be located. The link might be broken or the page may have been removed.
        </p>

        <Link
          href="/"
          className="bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-10 py-4 rounded-full font-bold text-lg hover:shadow-[0px_0px_25px_rgba(74,199,255,0.4)] active:scale-95 transition-all inline-flex items-center gap-3 group"
        >
          <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
          Return to Hub
        </Link>
      </div>
    </div>
  );
}
