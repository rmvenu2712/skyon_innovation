'use client';

import FadeInSection from "@/components/FadeInSection";

export default function GalleryContent() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 technical-grid pointer-events-none z-0"></div>

      {/* Hero Header */}
      <FadeInSection>
        <header className="relative pt-32 pb-12 md:pt-48 md:pb-20 px-6 z-10 max-w-7xl mx-auto">
          <div className="max-w-3xl">

            <div className="inline-block px-3 py-1 bg-surface-container-high border border-outline-variant/15 rounded-full mb-6">
            <span className="text-primary font-label text-xs font-bold uppercase tracking-widest">Clinical Environment</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-headline font-extrabold text-white leading-tight tracking-tighter">
            Innovation  <span className="text-primary-container text-glow">Gallery</span>
          </h1>

          <p className="text-[16px] md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
             Explore our precision-engineered medical ecosystems. From robotic surgery suites to sterile ICU environments, witness the future of patient care.
          </p>

           
          </div>
        </header>
      </FadeInSection>

      {/* Gallery Grid */}
      <FadeInSection>
        <main className="relative z-10 px-4 md:px-8 pb-32 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Featured Wide Item (Mobile/Tablet 1 col, Desktop spans 2) */}
            <div className="lg:col-span-2 group relative overflow-hidden rounded-xl bg-surface-container-low transition-premium gallery-item-hover">
              <div className="aspect-video sm:aspect-[16/10] overflow-hidden">
                <img
                  alt="Cybernetic Theatre"
                  className="w-full h-full object-cover grayscale opacity-60 transition-premium duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT0Xny78EWmOyI43NR55V3R-3Kd4RKYx_MAh9wg6E5pFSLFR8pI7xOksQdLDrwAY3f2IM6qTclLsF45q_k3YJI-Qivw69gRNAycTv7KJsyPSxNwHVTm_Z2_rUuWfI5LYrL_W6cTisFMdLfiyPo6XZve7LRIljJGWWQA_Jhm0ISL5o7rjXMmE0h5UlqpHHvuLM7LDZ6RqqEGIuwYPeLxEtZ97q5dm_Xrkr5R60ljQ1QbhPtc5nQ6J79BOdaAyrMyaaf8gmzN_6X4Rhb"
                />
              </div>
              <div className=" absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-60"></div>
              <div className="absolute bottom-4 left-4 right-4 p-6 glass-card rounded-lg transition-premium group-hover:translate-y-[-4px]">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-primary-container font-label text-[10px] tracking-widest uppercase mb-1 block font-bold">Protocol 01</span>
                    <h3 className="font-headline text-xl md:text-2xl font-bold text-on-surface uppercase tracking-tight">Cybernetic Theatre</h3>
                  </div>
                 
                </div>
                <p className="text-xs hidden md:flex md:text-sm text-on-surface-variant font-body mt-3 leading-relaxed  transition-premium max-w-md">
                  Next-generation laparoscopic surgical units with integrated AI diagnostics and real-time biometric feedback loops.
                </p>
              </div>
            </div>

            {/* Standard Item 1 */}
            <div className="group relative overflow-hidden rounded-xl bg-surface-container-low transition-premium gallery-item-hover">
              <div className="aspect-square overflow-hidden">
                <img
                  alt="Precision Tools"
                  className="w-full h-full object-cover grayscale opacity-60 transition-premium duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIyjpFFnmsnwvLEM4z4dVQ4RYx153pXlKfyo1IvjCaYzZaJ-HtTgErIjIFrx7uqJpD32YzQcbzblfKTzAwDstT-1KdLW7Kr7Gijf3IkYycrGsy5avIPu58IzVEA8yGWfgODKjD3Uycs64AhLUANyM5U9akvG8q-aqmY1MrKwvgwMzlZzg3eIyx_gwt-oRlFj32RK_oD4hK6--m_YFN0MwSIBYDxkMTmOqkDcS8OgNyB-Y8-7oQl73EpuHjKIR77hZJl64E81TpKp_S"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-4 left-4 right-4 p-4 glass-card rounded-lg transition-premium">
                <h4 className="font-headline text-sm font-bold text-on-surface uppercase tracking-widest">Precision Tools</h4>
                <span className="text-[10px] text-primary-container font-label tracking-widest uppercase mt-1 block">Hardware V.4</span>
              </div>
            </div>

            {/* Standard Item 2 */}
            <div className="group relative overflow-hidden rounded-xl bg-surface-container-low transition-premium gallery-item-hover">
              <div className="aspect-square overflow-hidden">
                <img
                  alt="Corridor Alpha"
                  className="w-full h-full object-cover grayscale opacity-60 transition-premium duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPTdCs2MdwDytVQAKJKTAsht8sjdw2Bynsim6CFjfGIleQbgu7b0YfvUdBreMvbUHpWVcU4BOR3gWBSM_nOSu5vc_ypbp-Hu0g6o3IBnv58mBu0y9viIhoB-bVebXc5ZUtaxWT-GslFm9S-U5rfmgul_YklYucFCIyK9OPp07NdQyu9kLU6qfOPD3yJetWE7JO7PmGDth7z1daBOACkSn8sG1oKYxNoePnY95aBPUFenby0o8cwN7Ke29c6R08dSN2-Fb9HfFvqi0A"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-4 left-4 right-4 p-4 glass-card rounded-lg transition-premium">
                <h4 className="font-headline text-sm font-bold text-on-surface uppercase tracking-widest">Corridor Alpha</h4>
                <span className="text-[10px] text-primary-container font-label tracking-widest uppercase mt-1 block">Logistics hub</span>
              </div>
            </div>

            {/* Detail Focus (Tall on desktop) */}
            <div className="lg:row-span-1 group relative overflow-hidden rounded-xl bg-surface-container-low transition-premium gallery-item-hover">
              <div className="aspect-video sm:aspect-square lg:aspect-[4/5] overflow-hidden">
                <img
                  alt="Synthesis Lab"
                  className="w-full h-full object-cover grayscale opacity-60 transition-premium duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7sFdOY9All-jLiEKIm4pADfE3ykgsBgIPmOuQ7-vyrdJMY8l0AST5WpRhCexTEK25p4FD8S_ZoACZEGtYHjJGl-Hz1GOSmckQqAJegLpMlwxGMMC717tYqBNLl0OC7S6G-VgwFqMl32bzRB29CivdoPVil_ifArX4rzVHWYivQQo449802JE1AWolMLN5CA0SX-Zl_IVoVApBXwOGmPHAZK2NL34rDIv5KB9iaYyRUY6YYlTP1pT7VoxluhWtUlSil_LHo7HGP-pE"
                />
              </div>
              <div className="absolute top-4 right-4 bg-primary-container text-on-primary-container text-[8px] font-black px-3 py-1 tracking-widest rounded-full">ACTIVE RESEARCH</div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-4 left-4 right-4 p-5 glass-card rounded-lg">
                <h4 className="font-headline text-sm font-bold text-on-surface uppercase tracking-widest">Synthesis Lab</h4>
                <p className="text-[11px] text-on-surface-variant font-body mt-2 leading-tight">Genomic sequence optimization for advanced cellular repair.</p>
              </div>
            </div>

            {/* Wide Item 2 */}
            <div className="lg:col-span-2 group relative overflow-hidden rounded-xl bg-surface-container-low transition-premium gallery-item-hover">
              <div className="aspect-video overflow-hidden">
                <img
                  alt="Recovery Module"
                  className="w-full h-full object-cover grayscale opacity-60 transition-premium duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSwwekwf-IiQkjmqlZxuQrWl08ywWbPOqRSTCppub67k53_ef5cv_f23qwG5V8PJgdsEJx0CzEA_mwBfOrOYBoZGNtRhaZyKaj9ickivEFqJzba86OmE7Fn-mCkNAXRPV_7_Vu24bdsSJGh68L3wKum82PmL2l_akLptLbZ1Qa7QIvFwIyuPRSbB-oejV-dT00bYZnSmI5zk_XwPJ52yi4lLqmvRMMdM3NKUfM40IT9lR4RU-ruKnwpwNgHT0_F7D-oA81nZMC01e3"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-4 left-4 right-4 p-6 glass-card rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-headline text-xl font-bold text-on-surface uppercase tracking-tight">Recovery Module</h3>
                    <p className="text-xs text-on-surface-variant font-body mt-1">Circadian-optimized neural recovery environments.</p>
                  </div>
                  <button className="self-start md:self-center px-4 py-2 bg-primary-container/10 border border-primary-container/20 text-primary-container text-[10px] font-bold tracking-widest uppercase hover:bg-primary-container/20 transition-colors">
                    VIEW SCHEMATICS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </FadeInSection>
    </div>
  );
}
