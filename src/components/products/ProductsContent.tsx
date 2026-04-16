'use client';

import FadeInSection from "@/components/FadeInSection";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, ChevronUp, X } from "lucide-react";
import { DynamicProductsData } from "../../../public/assets/images/productdata/dynamicproducts";
import { StaticProductsData } from "../../../public/assets/images/productdata/staricproducts";

// ─── Expandable Card for static products (10–42) ────────────────────────────
function StaticProductCard({ product }: { product: (typeof StaticProductsData)[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`group relative bg-surface-container rounded-xl transition-all duration-500 overflow-hidden flex flex-col
        ${expanded ? "ring-1 ring-primary/40 bg-surface-container-high" : "hover:bg-surface-bright"}`}
    >
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden rounded-t-xl flex-shrink-0">
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100"
          alt={product.name}
          src={product.image}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface/70 to-transparent" />
        <span className="absolute top-3 left-3 px-2.5 py-1 bg-background/80 text-primary text-[9px] font-bold uppercase tracking-wider rounded-md backdrop-blur-md border border-primary/20">
          {product.badge}
        </span>
      </div>

      {/* Content */}
      <div className="px-5 pt-5 pb-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2 gap-2">
          <h3 className="text-base font-headline font-bold text-white leading-snug">{product.name}</h3>
          <span className="text-[9px] font-label text-outline uppercase tracking-widest whitespace-nowrap mt-0.5">
            {product.category}
          </span>
        </div>

        {/* Collapsed: 2 lines; Expanded: full + 3 extra descriptive lines */}
        <div
          className={`transition-all duration-500 overflow-hidden text-on-surface-variant text-sm font-light leading-relaxed
            ${expanded ? "max-h-96" : "max-h-[2.8rem]"}`}
        >
          <p>{product.description}</p>
          {expanded && (
            <p className="mt-3 text-on-surface-variant/80 text-[13px] leading-relaxed">
              Designed for critical environments where contamination control is non-negotiable, this product is
              engineered with high-grade materials and precision manufacturing. It integrates seamlessly into your
              existing cleanroom or healthcare infrastructure, providing long-term reliability and performance. Each
              unit is factory-tested and dispatched with a certificate of conformance, ensuring it meets the
              applicable ISO, GMP, and NABH standards relevant to your facility.
            </p>
          )}
        </div>

        {/* Footer */}
        <div className="mt-4 pt-4 border-t border-outline-variant/10 flex justify-between items-center gap-2">
          <span className="text-[10px] font-label text-outline uppercase tracking-widest">
            REF: {product.ref}
          </span>
          <button
            suppressHydrationWarning
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 text-primary text-xs font-medium hover:text-white transition-colors cursor-pointer"
          >
            {expanded ? (
              <>
                Close <ChevronUp className="w-3.5 h-3.5" />
              </>
            ) : (
              <>
                View Details <ChevronDown className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────
export default function ProductsContent() {
  return (
    <main className="pt-24 pb-20 technical-grid min-h-screen relative z-10 w-full overflow-hidden">

      {/* ── Hero ── */}
      <FadeInSection>
        <section className="max-w-7xl mx-auto px-6 md:px-8 my-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-l-2 border-primary/30 pl-6 md:pl-10">
            <div className="max-w-xl">
              <span className="text-primary font-label text-[10px] md:text-xs uppercase tracking-[0.3em] mb-2 block">
                Complete Cleanroom Solutions
              </span>
              <h1 className="text-4xl md:text-6xl font-headline font-bold text-white leading-tight mb-4">
                Our Products &amp; Services
              </h1>
              <p className="text-on-surface-variant text-base md:text-lg font-light leading-relaxed max-w-lg">
                Comprehensive cleanroom infrastructure, modular OT solutions, validation services, and annual
                maintenance for healthcare &amp; pharma.
              </p>
            </div>
            <div className="flex gap-3 font-label text-[10px] text-outline uppercase tracking-wider tabular-nums">
              <div className="px-3 py-1.5 bg-surface-container-high rounded-sm border border-outline-variant/20">
                PRODUCTS: {DynamicProductsData.length + StaticProductsData.length}
              </div>
              <div className="px-3 py-1.5 bg-surface-container-high rounded-sm border border-outline-variant/20 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                OPERATIONAL
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ── Section label: Major Products ── */}
      <FadeInSection>
        <section className="max-w-7xl mx-auto px-6 md:px-8 mb-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <h2 className="text-xl md:text-2xl font-headline font-bold text-white">
                Flagship Products
              </h2>
            </div>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-outline-variant/30 to-transparent" />
            <span className="text-[10px] font-label text-outline uppercase tracking-wider">
              Click card for full details
            </span>
          </div>
          <p className="text-on-surface-variant text-sm mt-2 pl-5 max-w-2xl">
            Our nine core products — each with complete technical specifications, validation documentation, and
            dedicated project engineering support.
          </p>
        </section>
      </FadeInSection>

      {/* ── Featured 9: Navigates to slug detail page ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-24">
        {DynamicProductsData.map((product) => (
          <FadeInSection key={product.id}>
            <Link
              href={`/products/${product.slug}`}
              className="group h-full relative bg-surface-container p-1 rounded-xl transition-all duration-500 hover:bg-surface-bright cyan-glow overflow-hidden flex flex-col cursor-pointer block"
            >
              {/* Featured badge glow border */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(165,222,255,0.25)' }} />

              <div className="relative h-60 md:h-64 w-full mb-0 overflow-hidden rounded-lg">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                  alt={product.name}
                  src={product.image1}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/70 to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-2.5 py-1 bg-background/80 text-primary text-[9px] font-bold uppercase tracking-wider rounded-md backdrop-blur-md border border-primary/20">
                    {product.badge}
                  </span>
                  <span className="px-2.5 py-1 bg-tertiary/10 text-tertiary text-[9px] font-bold uppercase tracking-wider rounded-md backdrop-blur-md border border-tertiary/20">
                    Featured
                  </span>
                </div>
              </div>

              <div className="px-4 pb-6 pt-5 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg md:text-xl font-headline font-bold text-white">{product.name}</h3>
                </div>
                <p className="text-on-surface-variant text-sm font-light leading-relaxed mb-6 line-clamp-2">
                  {product.shortDescription}
                </p>
                <div className="mt-auto flex justify-between items-center pt-4 border-t border-outline-variant/10">
                  <span className="text-[10px] font-label text-outline uppercase tracking-widest">
                    REF: {product.ref}
                  </span>
                  <span className="flex items-center gap-2 text-primary text-xs font-medium group-hover:gap-3 transition-all">
                    Full Details <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          </FadeInSection>
        ))}
      </section>

      {/* ── Divider: Additional Products ── */}
      <FadeInSection>
        <section className="max-w-7xl mx-auto px-6 md:px-8 mb-10">
          <div className="relative p-8 rounded-2xl bg-surface-container-low border border-outline-variant/10 overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
              <div>
                <span className="text-secondary font-label text-[10px] uppercase tracking-[0.3em] mb-1 block">
                  Additional Range
                </span>
                <h2 className="text-xl md:text-2xl font-headline font-bold text-white">
                  More Products &amp; Services
                </h2>
                <p className="text-on-surface-variant text-sm mt-1 max-w-lg">
                  Safety cabinets, access systems, doors, flooring, furniture, validation, and AMC services —
                  expand any card to read more.
                </p>
              </div>
              <div className="px-4 py-2 bg-surface-container-highest rounded-lg border border-outline-variant/15 text-center flex-shrink-0">
                <div className="text-2xl font-headline font-bold text-secondary">{StaticProductsData.length}</div>
                <div className="text-[10px] font-label text-outline uppercase tracking-wider">Products</div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ── Static products grid with expand/collapse ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
        {StaticProductsData.map((product) => (
          <FadeInSection key={product.id}>
            <StaticProductCard product={product} />
          </FadeInSection>
        ))}
      </section>

      {/* ── Bottom CTA ── */}
      <FadeInSection>
        <section className="max-w-7xl mx-auto px-6 md:px-8 mt-4 mb-10">
          <div className="relative p-10 md:p-12 rounded-2xl bg-surface-container-high border border-outline-variant/10 overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full pointer-events-none" />
            <h2 className="text-2xl md:text-3xl font-headline font-bold text-white mb-4 relative z-10">
              Need a Custom Cleanroom Solution?
            </h2>
            <p className="text-on-surface-variant max-w-lg mx-auto mb-8 relative z-10 text-sm md:text-base">
              Connect with our engineering team for customized cleanroom design, modular OT planning, and facility
              validation.
            </p>
            <Link href="/contact-us" className="relative z-10 inline-flex items-center gap-3 bg-primary text-on-primary px-8 py-3.5 rounded-lg font-bold uppercase tracking-widest text-xs shadow-[0_0_30px_rgba(0,227,253,0.3)] hover:brightness-110 transition-all duration-300">
              Request Quote
              <ArrowRight className="w-4 h-4" />
            </Link >
          </div>
        </section>
      </FadeInSection>
    </main>
  );
}