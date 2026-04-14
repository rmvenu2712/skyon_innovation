'use client';

import FadeInSection from "@/components/FadeInSection";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  BarChart3,
  BadgeCheck,
  Clock3,
  FileCheck2,
  ScanSearch,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function useInView<T extends HTMLElement>(threshold = 0.25) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function CountUp({
  value,
  suffix = "",
  duration = 1600,
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  duration?: number;
  decimals?: number;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.35);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const startTime = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = value * eased;
      setCount(next);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}

function AnimatedBars() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const bars = [30, 45, 60, 40, 75, 90, 65, 85, 70, 100, 95];

  return (
    <div ref={ref} className="h-48 w-full flex items-end gap-1 overflow-hidden">
      {bars.map((h, i) => (
        <div
          key={i}
          className={`flex-1 rounded-t-sm origin-bottom transition-all duration-700 ease-out ${
            inView ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
          } ${
            i < 3
              ? "bg-tertiary/20"
              : i < 5
              ? "bg-tertiary/40"
              : i < 8
              ? "bg-tertiary/70"
              : "bg-tertiary"
          }`}
          style={{
            height: `${h}%`,
            transitionDelay: `${i * 70}ms`,
          }}
        />
      ))}
    </div>
  );
}

const directivesContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const directiveItem = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.96,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function AboutUsContent() {
  return (
    <main className="pt-24 pb-32 technical-grid min-h-screen">
      <FadeInSection>
        <section className="relative px-6 md:px-12 py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 z-10">
              <div className="inline-block px-3 py-1 bg-surface-container-high border border-outline-variant/15 rounded-full mb-6">
                <span className="text-primary font-label text-xs font-bold uppercase tracking-widest">
                  Established 2009
                </span>
              </div>

              <h2 className="text-[36px] sm:text-3xl md:text-4xl lg:text-7xl font-extrabold font-headline leading-tight tracking-tighter text-on-surface mb-8">
                The Future of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
                  Precision Care
                </span>
              </h2>

              <p className="text-[16px] md:text-xl text-on-surface-variant max-w-xl leading-relaxed mb-10">
                SKYON Innovations represents the zenith of cleanroom &amp; OT engineering. We integrate cutting-edge design with precision manufacturing to redefine controlled environments for healthcare and pharma.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/products"
                  className="bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-10 py-4 rounded-full font-bold text-lg hover:shadow-[0px_0px_25px_rgba(74,199,255,0.4)] active:scale-95 transition-all flex items-center justify-center gap-3 group"
                >
                  Our Products
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/why-choose-us"
                  className="border border-outline-variant/60 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/5 transition-all flex items-center justify-center"
                >
                  Why Choose Us
                </Link>
              </div>
            </div>

            <div className="md:col-span-5 relative">
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />

              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl rotate-3 transform hover:rotate-0 transition-transform duration-700 bg-surface-container-low p-2">
                <img
                  alt="Cleanroom facility"
                  className="rounded-xl w-full aspect-[4/5] object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-srPOv1rc-ba4nd3-iOfMCA-zs1cg5QO5CvlnkIPH6ldzq8rHgfKMyvnY8Vzmj-j358M405myTL-FoL8b2zY5hFDj3D2oXabiIIbJnXwpt9Gc2eSMuq3waJEO6amlwaS_THy-5Jaz_k-PTmn_9EocRmRMfUT63fuO2xOod8hscHWJEGRuJ0JuClKaQ-l6Xz9A781vxlUzygf-aopC8R8jt7wNOgazZ6oswEMYgpC4bnJm2hRXWq4DEzsLtI0_LyXyTGH_jszd4cZX"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="absolute -bottom-8 -left-8 glass-card p-6 rounded-xl border border-primary/10 shadow-2xl max-w-[220px] z-20">
                <p className="text-tertiary font-bold text-3xl mb-1">
                  <CountUp value={99.9} suffix="%" decimals={1} />
                </p>
                <p className="text-xs text-on-surface-variant leading-tight uppercase font-label">
                  Precision Diagnostic Accuracy Standard
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="bg-surface-container-low py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="space-y-2">
                <p className="text-5xl font-extrabold font-headline text-primary tracking-tighter">
                  <CountUp value={500} suffix="+" />
                </p>
                <p className="text-sm uppercase tracking-widest text-on-surface-variant font-label font-medium">
                  Projects Delivered
                </p>
                <div className="h-1 w-12 bg-primary/20" />
              </div>

              <div className="space-y-2">
                <p className="text-5xl font-extrabold font-headline text-primary tracking-tighter">
                  <CountUp value={15} suffix="+" />
                </p>
                <p className="text-sm uppercase tracking-widest text-on-surface-variant font-label font-medium">
                  Years Experience
                </p>
                <div className="h-1 w-12 bg-primary/20" />
              </div>

              <div className="space-y-2">
                <p className="text-5xl font-extrabold font-headline text-primary tracking-tighter">
                  <CountUp value={42} suffix="+" />
                </p>
                <p className="text-sm uppercase tracking-widest text-on-surface-variant font-label font-medium">
                  Product Range
                </p>
                <div className="h-1 w-12 bg-primary/20" />
              </div>

              <div className="space-y-2">
                <p className="text-5xl font-extrabold font-headline text-primary tracking-tighter">
                  <CountUp value={24} suffix="/7" />
                </p>
                <p className="text-sm uppercase tracking-widest text-on-surface-variant font-label font-medium">
                  AMC Support
                </p>
                <div className="h-1 w-12 bg-primary/20" />
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16"
          >
            <h3 className="text-xs font-bold text-tertiary uppercase tracking-[0.4em] mb-4">
              Foundation
            </h3>
            <h2 className="text-4xl font-extrabold font-headline tracking-tight">
              Core Directives
            </h2>
          </motion.div>

          <motion.div
            variants={directivesContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div
              variants={directiveItem}
              whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
              transition={{ duration: 0.35 }}
              className="md:col-span-2 group relative overflow-hidden rounded-xl bg-surface-container-highest p-10 flex flex-col justify-between min-h-[400px] will-change-transform"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
                whileInView={{ opacity: 0.12, scale: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.1, delay: 0.2 }}
                className="absolute top-0 right-0 p-4"
              >
                <Image width={100} height={100}
                              src="/assets/images/logo.png"
                              alt="SKYON Logo"
                              className="object-contain w-[200px] scale-110 z-10 animate-shadow-blink animate-logo-entrance"
                            />
              </motion.div>

              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  <ShieldCheck className="w-10 h-10 text-primary mb-6" />
                </motion.div>

                <motion.h4
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="text-3xl font-bold font-headline mb-4"
                >
                  Engineered Excellence
                </motion.h4>

                <motion.p
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.38 }}
                  className="text-on-surface-variant text-lg max-w-md leading-relaxed"
                >
                  We don&apos;t just build cleanrooms; we architect controlled environments. Our systems deliver uncompromising sterility through precision engineering and turnkey execution.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="mt-8 flex items-center gap-4 text-primary font-bold uppercase text-xs tracking-widest cursor-pointer"
              >
                <span className="group-hover:tracking-[0.2em] transition-all duration-300">
                  Explore Methodology
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </motion.div>
            </motion.div>

            <motion.div
              variants={directiveItem}
              whileHover={{ y: -8, rotateX: 2, rotateY: 2 }}
              transition={{ duration: 0.35 }}
              className="rounded-xl bg-surface-container-high p-8 flex flex-col border border-outline-variant/10 will-change-transform"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.2 }}
              >
                <FileCheck2 className="w-10 h-10 text-tertiary mb-6" />
              </motion.div>

              <motion.h4
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.28 }}
                className="text-2xl font-bold font-headline mb-4"
              >
                Quality Verification
              </motion.h4>

              <motion.p
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.36 }}
                className="text-on-surface-variant leading-relaxed mb-auto"
              >
                Every installation is validated through NABL-accredited IQ/OQ/PQ protocols, ensuring 100% compliance with ISO 14644 and GMP standards.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="mt-8 p-4 rounded-lg bg-surface-dim/50 border border-outline-variant/10"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">
                    Verification Status
                  </span>
                  <motion.span
                    animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-tertiary shadow-[0_0_8px_#50d190]"
                  />
                </div>
                <p className="font-mono text-xs text-tertiary">SKY-QC-ACTIVE</p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={directiveItem}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.35 }}
              className="rounded-xl bg-gradient-to-br from-surface-container-high to-surface-container-low p-8 border border-outline-variant/10 group will-change-transform"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.65 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.22 }}
              >
                <BadgeCheck className="w-10 h-10 text-primary-container mb-6" />
              </motion.div>

              <motion.h4
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-2xl font-bold font-headline mb-4"
              >
                Smart Design
              </motion.h4>

              <motion.p
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.38 }}
                className="text-on-surface-variant leading-relaxed"
              >
                3D visualization and virtual prototyping before construction begins. Our design team delivers layout drafting compliant with GMP, ISO, and NABH standards.
              </motion.p>
            </motion.div>

            <motion.div
              variants={directiveItem}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.35 }}
              className="md:col-span-2 rounded-xl bg-surface-container-high p-8 grid md:grid-cols-2 gap-8 items-center border border-outline-variant/10 will-change-transform"
            >
              <motion.div
                initial={{ opacity: 0, x: -40, scale: 0.96 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="aspect-video rounded-lg overflow-hidden bg-surface-dim"
              >
                <img
                  alt="Cleanroom visualization"
                  className="w-full h-full object-cover mix-blend-lighten"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuABPsoXhI0sNEakNw04YyS6DKzUMuVXPpu8_EaObmsspb3sGIA0Fr6up8jX7timpFsRad7ZcgmVGT_-qmDdFs-9a2zu3emb2IhkHeTNC1pRS-Kwwu7SgFFfDY6FPiTOOVL3LtDdoF4_vfkK1TDv1HX2V8ZVUmYeT2s2OBM-0HDD5Nx5y_9bVrKZbuYIopxFyKx23zBYUwtTgjUSgOznCE2PRIybqCa2Dpa6mIZ9jKe897JejWaATpDkKaJzWWfAc0Dbx1SIfZDXbcCT"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.25 }}
                >
                  <ScanSearch className="w-9 h-9 text-primary mb-4" />
                </motion.div>

                <motion.h4
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="text-2xl font-bold font-headline mb-3"
                >
                  Seamless Integration
                </motion.h4>

                <motion.p
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.38 }}
                  className="text-on-surface-variant text-sm leading-relaxed mb-6"
                >
                  SKYON systems integrate with existing hospital infrastructure — from HVAC tie-ins to BMS connectivity — upgrading facilities with minimal disruption.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.46 }}
                >
                  <Link
                    href="/products"
                    className="text-primary font-bold text-xs uppercase tracking-tighter hover:underline underline-offset-4 transition-all inline-flex items-center gap-2"
                  >
                    View Products
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="py-24 bg-surface-dim relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extrabold font-headline tracking-tight mb-6">
                Operational Excellence
              </h2>

              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                Experience our commitment to quality through every project phase. From design validation to ongoing AMC, our systems maintain certified performance round the clock.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-bold text-sm tracking-wide">
                    ISO 14644 &amp; GMP Compliant
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center">
                    <FileCheck2 className="w-5 h-5 text-tertiary" />
                  </div>
                  <p className="font-bold text-sm tracking-wide">
                    NABL Accredited Validation
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock3 className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-bold text-sm tracking-wide">
                    24/7 AMC &amp; Support Services
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-panel bg-surface-container-low/40 rounded-2xl border border-outline-variant/15 p-8 relative">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-1">
                    Project Success Rate
                  </p>
                  <h5 className="text-2xl font-black font-headline">
                    <CountUp value={99.8} suffix="%" decimals={1} />
                  </h5>
                </div>

                <div className="px-3 py-1 rounded bg-tertiary/10 text-tertiary text-[10px] font-bold tracking-tighter uppercase">
                  Operational
                </div>
              </div>

              <AnimatedBars />

              <div className="mt-6 flex items-center gap-3 text-sm text-on-surface-variant">
                <BarChart3 className="w-4 h-4 text-tertiary" />
                Live system trend, updated as you scroll
              </div>

              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
            </div>
          </div>
        </section>
      </FadeInSection>
    </main>
  );
}