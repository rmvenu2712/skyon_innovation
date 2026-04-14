'use client';

import FadeInSection from './FadeInSection';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Normally handle form submission here
  };

  return (
    <section className="py-24 relative overflow-hidden bg-surface">
      <div className="absolute inset-0 bg-primary/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <FadeInSection direction="up" delay={100}>
          <div className="glass-card bg-surface-container-high/60 rounded-3xl overflow-hidden border border-outline-variant/20 grid grid-cols-1 lg:grid-cols-5 shadow-2xl">
            {/* Contact Info Panel */}
            <div className="lg:col-span-2 p-12 bg-gradient-to-br from-primary-container/10 to-transparent flex flex-col justify-between border-r border-outline-variant/10">
              <div>
                <h2 className="text-[24px] md:text-4xl font-headline font-bold text-white">Contact Us Now</h2>
                <p className="mt-4 text-on-surface-variant leading-relaxed">
                  Let's discuss how our precision solutions can upgrade your clinical facility.
                </p>
              </div>

              <div className="space-y-8 mt-12">
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant font-label uppercase tracking-wider mb-1">Call Us</p>
                    <p className="font-bold text-white">+1 (800) 555-LUMI</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant font-label uppercase tracking-wider mb-1">Email</p>
                    <p className="font-bold text-white">precision@luminary-medical.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant font-label uppercase tracking-wider mb-1">Headquarters</p>
                    <p className="font-bold text-white">Innovation Drive, Zurich, CH</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Panel */}
            <div className="lg:col-span-3 p-12 bg-surface-container/30">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-label font-bold text-on-surface-variant uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-on-surface-variant/50"
                    placeholder="Dr. John Smith"
                    type="text"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-label font-bold text-on-surface-variant uppercase tracking-wider">
                    Institution
                  </label>
                  <input
                    className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-on-surface-variant/50"
                    placeholder="Medical Center Name"
                    type="text"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-label font-bold text-on-surface-variant uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-on-surface-variant/50"
                    placeholder="email@institution.org"
                    type="email"
                    required
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-label font-bold text-on-surface-variant uppercase tracking-wider">
                    Inquiry Details
                  </label>
                  <textarea
                    className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-on-surface-variant/50 resize-y"
                    placeholder="Briefly describe your requirements..."
                    rows={4}
                    required
                  ></textarea>
                </div>
                <div className="md:col-span-2 pt-4">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary-container p-4 rounded-xl font-bold text-lg hover:shadow-[0_0_25px_rgba(165,222,255,0.4)] active:scale-[0.98] transition-all"
                  >
                    Send Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
