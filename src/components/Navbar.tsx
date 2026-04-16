'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { DynamicProductsData } from '../../public/assets/images/productdata/dynamicproducts';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  const [logoMounted, setLogoMounted] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const [logoKey, setLogoKey] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 10) {
        setLogoKey(prev => prev + 1);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productSubLinks = [
    { name: 'All Products', path: '/products' },
    ...DynamicProductsData.map(product => ({
      name: product.name,
      path: `/products/${product.slug}`
    }))
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    {
      name: 'Products',
      path: '/products',
      subLinks: productSubLinks,
    },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Why Choose', path: '/why-choose' },
  ];

  return (
    <>
      {/* Zoom entrance animation injected once */}
      <style>{`
        @keyframes navbarEntrance {
          0%   { transform: scaleY(0.7) scaleX(0.95); opacity: 0; }
          55%  { transform: scaleY(1.04) scaleX(1.01); opacity: 1; }
          75%  { transform: scaleY(0.97) scaleX(0.998); }
          100% { transform: scale(1); opacity: 1; }
        }
        .navbar-entrance {
          animation: navbarEntrance 0.65s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          transform-origin: top center;
        }
      `}</style>

      <nav
        className={cn(
          'navbar-entrance fixed top-0 w-full z-50 transition-all duration-500',
          scrolled || isOpen
            ? 'bg-surface/95 backdrop-blur-xl py-2 shadow-lg'
            : 'bg-transparent py-2'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-16 h-16">
              <Image
                key={logoKey}
                src="/assets/images/logo.png"
                alt="SKYON Logo"
                fill
                className="object-contain md:group-hover:scale-110 z-10 animate-shadow-blink animate-logo-entrance"
              />
            </div>
            <span className="text-xl flex items-start flex-col m-0 p-0 font-black text-white tracking-tighter uppercase font-headline">
              SKYON <span className="text-[10px]  text-on-surface-variant leading-relaxed">
                Innovations
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.path}
                className="relative group/navItem h-full py-4 flex items-center"
              >
                <Link
                  href={link.path}
                  className={cn(
                    'text-xs font-bold tracking-widest uppercase transition-all duration-300 relative group/link',
                    pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path))
                      ? 'text-primary'
                      : 'text-on-surface-variant hover:text-white'
                  )}
                >
                  {link.name}
                  <span
                    className={cn(
                      'absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300',
                      pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path)) ? 'w-full' : 'w-0 group-hover/link:w-full'
                    )}
                  />
                </Link>

                {/* Desktop Dropdown */}
                {link.subLinks && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 pointer-events-none group-hover/navItem:opacity-100 group-hover/navItem:pointer-events-auto transition-all duration-300 z-50">
                    <div className="bg-surface-container border border-outline-variant/10 rounded-xl shadow-2xl py-2 min-w-[280px] flex flex-col">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.path}
                          className="px-6 py-3 whitespace-nowrap text-sm font-medium text-on-surface-variant hover:bg-surface-bright hover:text-primary transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact-us"
              className="hidden sm:block bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-8 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest hover:shadow-[0px_0px_20px_rgba(74,199,255,0.4)] active:scale-95 transition-all"
            >
              Contact Us
            </Link>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'md:hidden grid transition-all duration-300 ease-in-out',
            isOpen
              ? 'grid-rows-[1fr] opacity-100'
              : 'grid-rows-[0fr] opacity-0 pointer-events-none'
          )}
        >
          <div className="overflow-y-auto max-h-[calc(100vh-72px)] bg-surface-container border-b border-outline-variant/10 shadow-2xl">
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <div
                  key={link.path}
                  className={cn(
                    'transition-all duration-300 transform',
                    isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                  )}
                  style={{
                    transitionDelay: isOpen ? `${navLinks.indexOf(link) * 50}ms` : '0ms',
                  }}
                >
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.path}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'text-lg font-headline font-bold block transition-all duration-300',
                        pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path))
                          ? 'text-primary'
                          : 'text-on-surface-variant hover:text-white hover:translate-x-2'
                      )}
                    >
                      {link.name}
                    </Link>
                    {link.subLinks && (
                      <button
                        onClick={() =>
                          setOpenSubmenu(openSubmenu === link.path ? null : link.path)
                        }
                        className="p-2 text-on-surface-variant hover:text-primary transition-colors"
                        aria-label="Toggle submenu"
                      >
                        <ChevronDown
                          className={cn(
                            'w-5 h-5 transition-transform duration-300',
                            openSubmenu === link.path ? 'rotate-180 text-primary' : ''
                          )}
                        />
                      </button>
                    )}
                  </div>

                  {/* Mobile Submenu */}
                  {link.subLinks && (
                    <div
                      className={cn(
                        'grid transition-all duration-300 ease-in-out',
                        openSubmenu === link.path
                          ? 'grid-rows-[1fr] opacity-100 mt-3'
                          : 'grid-rows-[0fr] opacity-0'
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="flex flex-col gap-3 pb-2 pl-4 border-l-2 border-primary/30">
                          {link.subLinks.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.path}
                              onClick={() => {
                                setIsOpen(false);
                                setOpenSubmenu(null);
                              }}
                              className="text-on-surface-variant text-md font-medium hover:text-primary transition-colors block py-0.5"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Contact Button */}
              <Link
                href="/contact-us"
                onClick={() => setIsOpen(false)}
                className={cn(
                  'w-full bg-gradient-to-br from-primary to-primary-container text-on-primary-container py-4 rounded-xl font-bold text-lg shadow-xl text-center transition-all duration-300 transform mt-2',
                  isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                )}
                style={{
                  transitionDelay: isOpen ? `${navLinks.length * 50}ms` : '0ms',
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}