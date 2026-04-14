'use client';

import FadeInSection from "@/components/FadeInSection";
import { useState } from "react";
import {
  Building2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  User,
  BriefcaseBusiness,
} from "lucide-react";

export default function ContactContent() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    facilityName: "",
    requirementType: "Surgical Equipment Integration",
    overview: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [toast, setToast] = useState("");

  const validate = () => {
    const nextErrors: Record<string, string> = {};

    if (!form.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!form.phone.trim()) nextErrors.phone = "Phone number is required.";
    if (!form.facilityName.trim()) nextErrors.facilityName = "Facility name is required.";
    if (!form.overview.trim()) nextErrors.overview = "Please share your project overview.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    console.log("Contact form submission:", form);
    setToast("Your enquiry has been sent successfully.");

    setForm({
      fullName: "",
      email: "",
      phone: "",
      facilityName: "",
      requirementType: "Surgical Equipment Integration",
      overview: "",
    });

    window.setTimeout(() => {
      setToast("");
    }, 2500);
  };

  return (
    <main className="pt-24 md:pt-32 pb-24 technical-grid min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <FadeInSection direction="up">
          <div className="inline-flex px-3 py-1 bg-surface-container-high border border-outline-variant/15 rounded-full mb-6">
            <span className="text-primary font-label text-xs font-bold uppercase tracking-widest">
              Precision Partnership
            </span>
          </div>

          <h1 className="font-headline text-[28px] sm:text-4xl md:text-5xl lg:text-7xl font-bold text-on-background leading-tight mb-6 max-w-4xl">
            Let&apos;s <span className="text-primary">Equip</span> Your Facility
          </h1>

          <p className="text-on-surface-variant mb-12 md:mb-16 text-sm sm:text-base md:text-xl font-light max-w-2xl">
            Connecting leading healthcare providers with world-class medical engineering.
            Our technical advisors are ready to assist with your next precision laboratory
            or surgical suite integration.
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7">
            <FadeInSection>
              <div className="glass-panel p-6 sm:p-8 md:p-12 rounded-xl glow-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16" />

                <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 font-label text-xs uppercase tracking-widest text-outline">
                        <User className="w-4 h-4 text-primary" />
                        Full Name
                      </label>
                      <input
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        className="w-full bg-surface-container-lowest border border-outline-variant/15 rounded-lg p-4 text-on-surface focus:ring-1 focus:ring-primary focus:bg-surface-bright transition-all placeholder:text-outline/40"
                        placeholder="Dr. Julian Vane"
                        type="text"
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-400">{errors.fullName}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-center gap-2 font-label text-xs uppercase tracking-widest text-outline">
                        <Mail className="w-4 h-4 text-primary" />
                        Professional Email
                      </label>
                      <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full bg-surface-container-lowest border border-outline-variant/15 rounded-lg p-4 text-on-surface focus:ring-1 focus:ring-primary focus:bg-surface-bright transition-all placeholder:text-outline/40"
                        placeholder="vane.j@medical.org"
                        type="email"
                      />
                      {errors.email && <p className="text-xs text-red-400">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 font-label text-xs uppercase tracking-widest text-outline">
                        <Phone className="w-4 h-4 text-primary" />
                        Phone Number
                      </label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full bg-surface-container-lowest border border-outline-variant/15 rounded-lg p-4 text-on-surface focus:ring-1 focus:ring-primary focus:bg-surface-bright transition-all placeholder:text-outline/40"
                        placeholder="+1 (555) 000-0000"
                        type="tel"
                      />
                      {errors.phone && <p className="text-xs text-red-400">{errors.phone}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-center gap-2 font-label text-xs uppercase tracking-widest text-outline">
                        <Building2 className="w-4 h-4 text-primary" />
                        Facility Name
                      </label>
                      <input
                        name="facilityName"
                        value={form.facilityName}
                        onChange={handleChange}
                        className="w-full bg-surface-container-lowest border border-outline-variant/15 rounded-lg p-4 text-on-surface focus:ring-1 focus:ring-primary focus:bg-surface-bright transition-all placeholder:text-outline/40"
                        placeholder="Central Surgical Center"
                        type="text"
                      />
                      {errors.facilityName && (
                        <p className="text-xs text-red-400">{errors.facilityName}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-2 font-label text-xs uppercase tracking-widest text-outline">
                      <BriefcaseBusiness className="w-4 h-4 text-primary" />
                      Requirement Type
                    </label>
                    <select
                      name="requirementType"
                      value={form.requirementType}
                      onChange={handleChange}
                      className="w-full bg-surface-container-lowest border border-outline-variant/15 rounded-lg p-4 text-on-surface focus:ring-1 focus:ring-primary focus:bg-surface-bright transition-all appearance-none cursor-pointer"
                    >
                      <option>Surgical Equipment Integration</option>
                      <option>Laboratory Diagnostic Systems</option>
                      <option>High-Precision Maintenance Contract</option>
                      <option>General Consultation</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-2 font-label text-xs uppercase tracking-widest text-outline">
                      <MessageCircle className="w-4 h-4 text-primary" />
                      Project Overview
                    </label>
                    <textarea
                      name="overview"
                      value={form.overview}
                      onChange={handleChange}
                      className="w-full bg-surface-container-lowest border border-outline-variant/15 rounded-lg p-4 text-on-surface focus:ring-1 focus:ring-primary focus:bg-surface-bright transition-all placeholder:text-outline/40 min-h-[120px]"
                      placeholder="Detail your facility requirements here..."
                      rows={4}
                    />
                    {errors.overview && <p className="text-xs text-red-400">{errors.overview}</p>}
                  </div>

                  <button
                    className="w-full py-4 sm:py-5 rounded-lg bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-headline font-bold text-base sm:text-lg uppercase tracking-widest shadow-[0_10px_30px_rgba(121,248,179,0.14)] hover:shadow-[0_10px_40px_rgba(121,248,179,0.22)] hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-3"
                    type="submit"
                  >
                    <Send className="w-4 h-4" />
                    Send Enquiry
                  </button>
                </form>
              </div>
            </FadeInSection>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            <FadeInSection>
              <div className="p-6 sm:p-8 rounded-xl bg-surface-container-low transition-colors hover:bg-surface-bright group h-full">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-label text-xs uppercase tracking-[0.2em] text-outline mb-2">
                      Technical Support
                    </h3>
                    <p className="font-headline text-xl sm:text-2xl font-medium text-on-background break-words">
                      +1 (800) LUM-PRO-0
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="p-6 sm:p-8 rounded-xl bg-surface-container-low transition-colors hover:bg-surface-bright group h-full">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-label text-xs uppercase tracking-[0.2em] text-outline mb-2">
                      Corporate Inquiries
                    </h3>
                    <p className="font-headline text-xl sm:text-2xl font-medium text-on-background break-words">
                      logistics@skyon.eng
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="p-6 sm:p-8 rounded-xl bg-surface-container-low transition-colors hover:bg-surface-bright group h-full">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-label text-xs uppercase tracking-[0.2em] text-outline mb-2">
                      Global Headquarters
                    </h3>
                    <p className="font-headline text-xl sm:text-2xl font-medium text-on-background">
                      Silicon District, 402 Tech Park
                    </p>
                    <p className="text-on-surface-variant mt-1">Palo Alto, CA 94304</p>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="p-6 sm:p-8 rounded-xl bg-surface-container-low transition-colors hover:bg-surface-bright group h-full">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary shrink-0">
                    <Clock3 className="w-5 h-5" />
                  </div>
                  <div className="w-full">
                    <h3 className="font-label text-xs uppercase tracking-[0.2em] text-outline mb-2">
                      Operation Hours
                    </h3>
                    <div className="space-y-2">
                      <p className="font-headline text-base sm:text-lg text-on-background flex justify-between gap-4">
                        <span className="text-on-surface-variant font-light">Mon — Fri:</span>
                        <span>08:00 - 18:00</span>
                      </p>
                      <p className="font-headline text-base sm:text-lg text-on-background flex justify-between gap-4">
                        <span className="text-on-surface-variant font-light">Saturday:</span>
                        <span>10:00 - 14:00</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>

      <FadeInSection>
        <div className="bg-surface-container-high py-10 md:py-12 px-4 sm:px-6 md:px-8 border-t border-outline-variant/15 mt-20 md:mt-24">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-5 sm:gap-6 flex-wrap">
              <div className="flex -space-x-4">
                <img
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-surface-container-high object-cover"
                  alt="Support agent 1"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR4be2x4Zo7EpWppTiogMxOQ5f7quyShC2aax_ILRAL5bB1gRsuWTFsUI9TOq7UwXwHBRattnG02qR6Hqu2H-Xw7VBsZRTMtwI6Po5NpZmZat7ERUEzj4kyNe7rATq2-YY80tAZty8aA2O8NMwPuCLgnRXMZCp-ADbwO8IqLVLOdS5gbl0zYCufzgRkEaxsb00Ob2pDBMx-XuNza4QTW6zGNr6kuZzG3vKBgURnYcXyxy0NF4ku1uNpFo_-eDvWBbVkiA22vzam-44"
                />
                <img
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-surface-container-high object-cover"
                  alt="Support agent 2"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA-HkOiHNlRMcOMKyGLLfkFb9OgB10G_dSMYpdc63goAhYC7ct7cyIj1eNejItkhYKoj2HJclCIDuqPXMjEH0eMXcYySnncfY_zAGZJQISuWf2N5_OGu5X_Qx549Et0-W3V9KJ4RJrp_POkiyoCjEuTnIuoV-CvlEesgtGyZh4XDHEj70Zv02B8gFrjJC4aYHa6yZmh0-DSkLbZ15Ln-VoouU-nPDIL7yfFGZLtXjOgOfsOSTPAbj0jB6bh98fRfYaL6jOK-3fEDwm"
                />
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-surface-container-high bg-primary-container flex items-center justify-center text-on-primary-container text-xs font-bold">
                  +12
                </div>
              </div>

              <div>
                <h4 className="font-headline font-bold text-lg sm:text-xl">Call us directly</h4>
                <p className="text-on-surface-variant text-sm font-light">
                  Connect with our engineering desk instantly
                </p>
              </div>
            </div>

            <a
              className="inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg bg-[#1f9f5a] text-white font-headline font-bold hover:brightness-110 transition-all shadow-[0_10px_20px_rgba(31,159,90,0.18)] active:scale-95 w-full md:w-auto justify-center"
              href="https://wa.me/918765432100"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              Chat via WhatsApp
            </a>
          </div>
        </div>
      </FadeInSection>

      {toast ? (
        <div className="fixed top-4 right-4 z-50 rounded-xl border border-outline-variant/20 bg-surface-container px-4 py-3 text-sm text-white shadow-lg">
          {toast}
        </div>
      ) : null}
    </main>
  );
}