'use client';

import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import FadeInSection from './FadeInSection';

export default function ProductShowcase() {
  const products = [
    {
      badge: 'Advanced ICU',
      title: 'ICU Electric Bed',
      desc: '5-function motorized system with integrated patient weighing and pulmonary therapy mode.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5Zbu2XMowxCahZCvQiD-YBInclIx_mLk1dlOxkJG4YGopnFPwWPuycjcS53ZXFe0nkZImjwyb8So8D8s9zj_7-gn3CO7XUoJxHe90BcAeNgGoOcLl45EdHHIRdIPxDlD9Wl4qa6l5Rs2PtfCAPSdl7ZIlIskmfQIJIH5_dhkvbCI4BvNeqZK-s-1oKDY6KrigrQQwxqbGkA4VDEVkjxUNlRj_45go6ZBJMdJx_SQgh2SJ3VJnT9sAtrSzurx7d8HucrfaUruIFTsQ',     
      alt: 'High-tech ICU electric bed in a sterile modern hospital room with advanced monitoring screens'
    },
    {
      badge: 'Ergonomic Series',
      title: 'Semi-Fowler Manual Bed',
      desc: 'Dual crank system with corrosion-resistant coating and high-grade stainless steel rails.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5Nd4oUOXQJKgfWGy_9GGqcZlYdthSou2YZOHTV-Zn_Cf3gDwp96j9IpmSMUpb_Qh9zhlobaDdrc_OdcWTX2HRawRllXTychf-dGGd9k6m-OZ2OXDnITeP7V7PKrforex4jwSeTjMIJ-TXdS0XTZeU4G16-Azf00Qrkax6bPL9HH-cChRq5o9H7QFv31BPF1ks_EAp1NiGZULS5cvFIFzqkl9QMV10I75gvFJzhajcDgjxspmtFCL6Sr31yMIIfo_o0LcQSBG5_Mym',
      alt: 'Surgical manual hospital bed with precise mechanical controls in a clinical ward setting'
    },
    {
      badge: 'Modular OT',
      title: 'OT Modular Table',
      desc: 'Precision-engineered hydraulic table with 360-degree rotation and radiolucent tabletop.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLPiU3oV7my25lNl7crm6M_5gUZfFgy_Q709l-msckCDaYZ8jRQ1MyvwUWblZgL2ePn7Q48UCX3oTvajvc9o1zpvTmaqJMmuLDhiild2tVVcQ0IinQELaMllBiuZ_Q3LzI8H_GpvO70Ot5g0F9Caj2Kj6i-ARqLOObCabN1_LexQDiW2Zz41Onp0YJq7aIFa_qoLwxOveXLQhKgOuIpG8aAT6F8IV0wOUl6vS2qCXnQRH2JOiaMKlJvo_UwoyTBD9phF1x4q2XcqOW',
      alt: 'Advanced modular surgical operating table under bright surgical lights in a sterile theater'
    }
  ];

  return (
    <section className="py-32 px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <FadeInSection direction="up" delay={100}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4 block">
                Product Showcase
              </span>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-white">
                Elite Medical Systems
              </h2>
            </div>
            <Link
              href="/products"
              className="text-primary font-bold text-sm flex items-center gap-2 group hover:text-primary-container transition-colors"
            >
              Explore Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((product, idx) => (
            <FadeInSection key={idx} direction="up" delay={200 + idx * 100}>
              <div className="group cursor-pointer">
                <div className="relative aspect-[4/5] bg-surface-container rounded-xl overflow-hidden mb-6">
                  <img
                    className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    alt={product.alt}
                    src={product.img}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 text-on-primary-container px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-wider">
                      {product.badge}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-headline font-bold text-white mb-2">
                  {product.title}
                </h3>
                <p className="text-on-surface-variant font-light text-sm mb-4">
                  {product.desc}
                </p>
                <Link
                  href="/products"
                  className="inline-flex items-center text-primary text-xs font-bold uppercase tracking-widest hover:gap-3 transition-all"
                >
                  View Details <ArrowUpRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
