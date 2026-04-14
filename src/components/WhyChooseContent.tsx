'use client';

import FadeInSection from "@/components/FadeInSection";
import Testimonials from "./Testimonials";
import Link from "next/link";

// Inline SVG icons to guarantee rendering
const icons = {
  certification: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
    </svg>
  ),
  experience: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
    </svg>
  ),
  delivery: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
    </svg>
  ),
  customOem: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
    </svg>
  ),
  support: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/>
    </svg>
  ),
  pricing: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
    </svg>
  ),
};

const features = [
  {
    icon: icons.certification,
    title: "ISO Certification",
    desc: "Adhering to the highest global standards for cleanroom and medical device quality management and safety protocols.",
    bgClass: "bg-surface-container-low",
  },
  {
    icon: icons.experience,
    title: "15+ Years Experience",
    desc: "A decade and a half of expertise in cleanroom engineering and modular OT installations across diverse facilities.",
    bgClass: "bg-surface-container",
  },
  {
    icon: icons.delivery,
    title: "Pan-India Delivery",
    desc: "Robust logistics network ensuring safe, on-time delivery and installation to any facility across the nation.",
    bgClass: "bg-surface-container-low",
  },
  {
    icon: icons.customOem,
    title: "Custom OEM Solutions",
    desc: "Tailored cleanroom and modular OT solutions designed specifically to meet your facility's unique requirements.",
    bgClass: "bg-surface-container",
  },
  {
    icon: icons.support,
    title: "After-Sales Support",
    desc: "24/7 technical support, AMC packages, and on-site maintenance by certified engineers for zero downtime.",
    bgClass: "bg-surface-container-low",
  },
  {
    icon: icons.pricing,
    title: "Competitive Pricing",
    desc: "Direct-from-manufacturer rates providing elite engineering and installation at highly competitive costs.",
    bgClass: "bg-surface-container",
  },
];

export default function WhyChooseContent() {
  return (
    <main className="pt-24 technical-grid min-h-screen pb-10">
      {/* Hero Section */}
      <FadeInSection direction="up">
        <section className="px-8 py-5 md:py-20 max-w-7xl mx-auto text-left relative">
          <div className="inline-block px-3 py-1 bg-surface-container-high border border-outline-variant/15 rounded-full mb-6">
            <span className="text-primary font-label text-xs font-bold uppercase tracking-widest">Precision Standards</span>
          </div>
          <h1 className="font-headline text-[28px] md:text-5xl lg:text-7xl font-bold text-on-background leading-tight mb-6 max-w-4xl">
            Engineered for <span className="text-primary">Clinical Excellence</span>
          </h1>
          <p className="text-on-surface-variant text-[14px] md:text-xl font-light max-w-2xl ">
            SKYON Innovations combines rigorous ISO-certified manufacturing with deep cleanroom expertise to deliver infrastructure that never compromises on safety or performance.
          </p>
          <div className="absolute right-0 top-20 hidden lg:block opacity-40 mix-blend-screen overflow-hidden rounded-full w-96 h-96">
            <img 
              alt="Medical precision" 
              className="w-full h-full object-cover rounded-full" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDntvCIpzmazvVKyBloKSynRPiS5-itRu4FD4p2uPnfdrEtdLC0MJBp-LPvt9gomRsMox1cHPOnO9vy6m2mGWaSgign96Hw7HJyiNs3RpntXS93U2jIZ1aOhIcoJ3IRe0dwnxfKrvVZypyw6G0kXTLTFRT7G3M-o-klnV935j2fTzusiDhpUHH8bo3ydeYj8oeDGAFobGypZzNez4S9bK2X7vkI7BA1EOQND68M5AnFgCC3rBu-90T6p7IrnoXsMsFbCk0obvQe2efH"
            />
          </div>
        </section>
      </FadeInSection>

      {/* 6-Point Icon Grid */}
      <FadeInSection>
        <section className="px-8 py-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 outline-variant/10 border border-outline-variant/10 rounded-xl overflow-hidden">
            {features.map((feature, idx) => (
              <div key={idx} className={`p-10 ${feature.bgClass} border-b border-r border-outline-variant/15 hover:bg-surface-bright transition-all duration-300 group`}>
                <div className="text-primary-dim mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="font-headline text-xl font-bold mb-4 text-on-background">{feature.title}</h3>
                <p className="text-on-surface-variant font-light leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* Comparison Table Section */}
      <FadeInSection>
        <section className="px-8 py-24 bg-surface-container-low">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline text-4xl font-bold text-on-background mb-4">Precision Benchmarking</h2>
              <p className="text-on-surface-variant font-light">Why SKYON Innovations stands alone in cleanroom engineering.</p>
            </div>
            <div className="overflow-hidden glass-panel border border-outline-variant/10 rounded-xl glow-shadow">
              <div className="overflow-x-auto">
                <table className="w-full text-left min-w-[600px]">
                  <thead>
                    <tr className="bg-surface-container-high/50 border-b border-outline-variant/15">
                      <th className="p-6 font-headline font-bold text-on-background tracking-wide">Feature</th>
                      <th className="p-6 font-headline font-bold text-primary tracking-wide">SKYON</th>
                      <th className="p-6 font-headline font-bold text-outline tracking-wide">Generic Supplier</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm font-light">
                    <tr className="border-b border-outline-variant/5">
                      <td className="p-6 text-on-surface/80">Cleanroom Classification</td>
                      <td className="p-6 text-primary font-medium">ISO Class 5–8 Compliant</td>
                      <td className="p-6 text-on-surface-variant">Basic ISO Class 7–8</td>
                    </tr>
                    <tr className="border-b border-outline-variant/5">
                      <td className="p-6 text-on-surface/80">Response Protocol</td>
                      <td className="p-6 text-primary font-medium">Under 4 Hours On-site</td>
                      <td className="p-6 text-on-surface-variant">2-3 Business Days</td>
                    </tr>
                    <tr className="border-b border-outline-variant/5">
                      <td className="p-6 text-on-surface/80">Validation Services</td>
                      <td className="p-6 text-primary font-medium">NABL-Accredited IQ/OQ/PQ</td>
                      <td className="p-6 text-on-surface-variant">Basic Documentation</td>
                    </tr>
                    <tr>
                      <td className="p-6 text-on-surface/80">Warranty Coverage</td>
                      <td className="p-6 text-primary font-medium">5-Year Full Replacement</td>
                      <td className="p-6 text-on-surface-variant">1-Year Limited</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Testimonials */}
      <FadeInSection>
        <section className=" py-24 max-w-7xl mx-auto">

         <Testimonials/>
        </section>
      </FadeInSection>

      {/* CTA Section */}
      <FadeInSection>
        <section className="px-4 md:px-8 py-20 mb-8">
          <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-container/20 to-surface-container-high opacity-60"></div>
            <div className="relative z-10 p-4 md:p-12 md:p-20 text-center glass-panel border border-primary/10">
              <h2 className="font-headline text-[28px]  md:text-4xl font-bold text-on-background mb-6">Ready to build your cleanroom?</h2>
              <p className="text-on-surface-variant text-sm md:text-lg max-w-2xl mx-auto mb-10 font-light">
                Speak with our cleanroom engineering team today to discuss your project requirements and get a technical quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact-us" className="bg-primary text-on-primary-container px-10 py-4 rounded-lg font-bold hover:brightness-110 active:scale-95 transition-all glow-shadow">
                  Consult An Expert
                </Link>
                <Link href="/products" className="border border-primary/30 text-primary px-10 py-4 rounded-lg font-bold hover:bg-primary/5 active:scale-95 transition-all">
                  View Products
                </Link>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>
    </main>
  );
}
