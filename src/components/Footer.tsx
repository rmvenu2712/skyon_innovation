'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Activity, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [toast, setToast] = useState('');

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value.trim());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmed = email.trim();

    if (!trimmed) {
      setError('Email is required.');
      return;
    }

    if (!validateEmail(trimmed)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    console.log('Newsletter email:', trimmed);
    setToast('Thanks for subscribing!');

    setEmail('');

    window.setTimeout(() => {
      setToast('');
    }, 2500);
  };

  return (
    <footer className="bg-surface-container-lowest py-16 px-6 md:px-10 border-t border-outline-variant/10 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-16 h-16 shrink-0">
              <Image
                src="/assets/images/logo.png"
                alt="SKYON Logo"
                fill
                className="object-contain drop-shadow-[0_0_10px_rgba(121,248,179,0.2)]"
              />
            </div>

            <div className="text-xl font-bold text-white font-headline uppercase tracking-tight leading-tight">
              SKYON
              <br />
              <span className="text-[10px] text-on-surface-variant leading-relaxed">
                Innovations
              </span>
            </div>
          </div>

          <p className="text-sm text-on-surface-variant leading-relaxed">
            Setting the global gold standard for medical furniture engineering.
            Trusted by luminaries in 40+ countries.
          </p>

          
        </div>

      
        <div>
          <h4 className="text-white font-bold mb-6 font-headline">Contact</h4>
          <div className="mt-6 space-y-3 text-sm text-on-surface-variant">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
              <p>
                24, Sterling Avenue, T. Nagar,
                <br />
                Chennai, Tamil Nadu 600017, India
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <p>+91 98765 43210</p>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <p>hello@skyoninnovations.com</p>
            </div>
          </div>
        </div>

  <div>
          <h4 className="text-white font-bold mb-6 font-headline">Navigation</h4>
          <ul className="space-y-4 text-sm text-on-surface-variant">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:text-primary transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-primary transition-colors">
                Products
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-primary transition-colors">
                Gallery
              </Link>
            </li>
          </ul>
        </div>


        <div>
          <h4 className="text-white font-bold mb-6 font-headline">Newsletter</h4>
          <p className="text-on-surface-variant text-sm mb-4">
            Stay updated with surgical engineering advancements.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex">
              <input
                className="bg-surface-container border border-outline-variant/30 rounded-l-lg p-3 text-white text-sm w-full focus:outline-none focus:border-primary"
                placeholder="Your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
              />
              <button
                type="submit"
                className="bg-primary text-on-primary px-4 rounded-r-lg hover:bg-primary-container transition-all flex items-center justify-center min-w-[56px]"
                aria-label="Subscribe"
              >
                <Activity className="w-4 h-4" />
              </button>
            </div>

            {error ? (
              <p className="text-xs text-red-400">{error}</p>
            ) : null}
          </form>

          <div className="mt-6">
            <p className="text-sm text-on-surface-variant mb-3">Follow us</p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-outline-variant/20 text-on-surface-variant hover:text-primary hover:border-primary flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-outline-variant/20 text-on-surface-variant hover:text-primary hover:border-primary flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-outline-variant/20 text-on-surface-variant hover:text-primary hover:border-primary flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full border border-outline-variant/20 text-on-surface-variant hover:text-primary hover:border-primary flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-outline-variant/10 text-center">
        <p className="text-xs text-on-surface-variant uppercase tracking-widest">
          © 2026 SKYON Innovations. Precision Engineering for Life.
        </p>
      </div>

      {toast ? (
  <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 rounded-xl border border-outline-variant/20 bg-surface-container px-4 py-3 text-sm text-white shadow-lg">
    {toast}
  </div>
) : null}

    </footer>
  );
}