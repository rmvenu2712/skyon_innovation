'use client';

import Link from "next/link";
import { ArrowLeft, ArrowRight, Download, MessageSquare } from "lucide-react";
import { motion, useInView, useScroll, useTransform, useMotionValue, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import { DynamicProduct } from "../../../public/assets/images/productdata/dynamicproducts";

interface Props {
  product: DynamicProduct;
}

export default function ProductDetailView({ product }: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const ySpecs = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Numerical counter logic
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => latest.toFixed(1) + "%");
  const counterRef = useRef(null);
  const isCounterInView = useInView(counterRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isCounterInView) {
      animate(count, 99.8, { duration: 2.5, ease: "easeOut" });
    }
  }, [isCounterInView, count]);

  return (
    <main 
      ref={ref}
      className="pt-24 pb-32 px-4 md:px-8 max-w-7xl mx-auto technical-grid min-h-screen relative z-10"
    >
      {/* ── Breadcrumb ── */}
      <motion.div 
        className="mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-sm font-label"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </Link>
      </motion.div>

      {/* ── Hero Section: Image + Info ── */}
      <motion.section 
        style={{ y: yHero, opacity: opacityHero }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24"
      >
        {/* Asymmetric Image Layout */}
        <motion.div 
          className="relative space-y-6"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="relative rounded-xl overflow-hidden aspect-[4/3] bg-surface-container-low"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              className="w-full h-full object-cover"
              alt={product.name}
              src={product.image1}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/60 to-transparent" />
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            <motion.div
              className="rounded-xl overflow-hidden aspect-video bg-surface-container-low border border-outline-variant/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ opacity: 1 }}
            >
              <img
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                alt={`${product.name} - detail view`}
                src={product.image2}
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              className="flex flex-col justify-center p-6 bg-surface-container-high/70 backdrop-blur-sm rounded-xl border border-outline-variant/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="text-tertiary font-label text-[10px] uppercase tracking-widest mb-2 font-bold">
                {product.badge}
              </span>
              <p className="text-on-surface-variant text-sm leading-relaxed font-label">
                {product.heading1}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Product Info */}
        <motion.div 
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="px-3 py-1 bg-tertiary-container/20 text-tertiary text-[10px] font-bold uppercase tracking-tighter rounded-full border border-tertiary/20">
              {product.category}
            </span>
            <span className="text-on-surface-variant/60 font-label text-[10px]">
              REF: {product.ref}
            </span>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight mb-4 leading-tight text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {product.name}
          </motion.h1>

          <motion.p 
            className="text-on-surface-variant text-base mb-6 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {product.shortDescription}
          </motion.p>

          <motion.div
            className="mb-8 pl-4 border-l-2 border-primary/50"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-primary/90 text-sm font-label font-semibold">{product.heading2}</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4 mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {product.specs.slice(0, 2).map((spec, index) => (
              <motion.div
                key={spec.label}
                className="p-4 rounded-xl bg-surface-container-low border-l-2 border-primary"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-semibold mb-1">
                  {spec.label}
                </p>
                <p className="text-lg font-headline font-bold text-primary">{spec.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link 
              href="/contact-us" 
              className="flex-1 py-4 px-6 rounded-xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline font-bold text-sm transition-transform active:scale-95 flex items-center justify-center gap-2 hover:brightness-110 isolate"
              style={{ 
                boxShadow: '0 0 15px rgba(165,222,255,0.3)',
                WebkitBackdropFilter: 'blur(0px)',
                backgroundClip: 'padding-box'
              }}
            >
              <MessageSquare className="w-4 h-4" />
              Request Technical Quote
            </Link>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 py-4 px-6 rounded-xl bg-surface-container-high border border-outline-variant/15 text-on-surface font-headline font-bold text-sm hover:bg-surface-container-highest transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Data Sheet
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ── Long Description ── */}
      <motion.section
        className="mb-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="flex items-center gap-4 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-headline font-bold text-white">Product Overview</h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-outline-variant/30 to-transparent" />
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            className="lg:col-span-2 p-8 rounded-xl bg-surface-container-low border border-outline-variant/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-on-surface-variant leading-[1.9] font-label text-sm md:text-base">
              {product.longDescription}
            </p>
          </motion.div>
          
          {/* Reliability card */}
          <motion.div
            className="p-8 rounded-xl bg-surface-container-high/70 backdrop-blur-sm border border-outline-variant/15 flex flex-col justify-between"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <div>
              <h4 className="text-sm font-headline font-bold mb-4 flex items-center gap-2 text-white">
                <motion.span 
                  className="w-2 h-2 rounded-full bg-tertiary" 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                Quality Assurance
              </h4>
              <p className="text-[11px] text-on-surface-variant font-label mb-6">
                Factory tested before dispatch. Each unit ships with a Certificate of Conformance.
              </p>
            </div>
            <div className="flex-1 flex flex-col justify-end">
              <div className="h-20 w-full bg-gradient-to-t from-tertiary/10 to-transparent relative rounded-lg overflow-hidden mb-4">
                <svg className="absolute bottom-0 left-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 200 80">
                  <motion.path 
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                    d="M0,70 Q25,65 40,75 T80,60 T120,70 T160,30 T200,40 L200,80 L0,80 Z" 
                    fill="rgba(111,238,170,0.1)" 
                  />
                  <motion.path 
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
                    d="M0,70 Q25,65 40,75 T80,60 T120,70 T160,30 T200,40" 
                    fill="none" 
                    stroke="#6feeaa" 
                    strokeWidth="2" 
                  />
                </svg>
              </div>
              <div className="flex justify-between items-end" ref={counterRef}>
                <motion.span 
                  className="text-3xl font-headline font-bold text-tertiary min-w-[80px]"
                >
                  {rounded}
                </motion.span>
                <span className="text-[10px] font-label text-on-surface-variant/60 uppercase">Reliability Index</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ── Technical Specifications ── */}
      <motion.section
        style={{ y: ySpecs }}
        className="mb-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-headline font-bold text-white">Technical Specifications</h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-outline-variant/30 to-transparent" />
        </motion.div>
        <motion.div 
          className="overflow-hidden rounded-xl bg-surface-container-high/70 backdrop-blur-sm border border-outline-variant/10"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.01 }}
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-highest">
                <th className="p-5 md:p-6 text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                  Parameter
                </th>
                <th className="p-5 md:p-6 text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                  Specification
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              {product.specs.map((spec, index) => (
                <motion.tr 
                  key={spec.label} 
                  className="group hover:bg-white/5 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                >
                  <td className="p-5 md:p-6 font-label font-semibold text-on-surface">{spec.label}</td>
                  <td className="p-5 md:p-6 font-label text-on-surface-variant">{spec.value}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </motion.section>

      {/* ── Manufacturer & Badge row ── */}
      <motion.section
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="lg:col-span-2 p-8 rounded-xl bg-surface-container-low relative overflow-hidden flex flex-col justify-between min-h-[240px]"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
            <img
              className="w-full h-full object-cover"
              alt="Background"
              src={product.image2}
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <motion.div
              className="flex items-center gap-3 mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary-container/20 flex items-center justify-center border border-primary/20">
                <span className="text-primary text-xl font-headline font-black">S</span>
              </div>
              <div>
                <h3 className="text-xl font-headline font-bold text-white">Skyon Innovation</h3>
                <p className="text-xs text-tertiary font-label uppercase tracking-widest font-semibold">
                  Cleanroom Engineering Specialists
                </p>
              </div>
            </motion.div>
            <motion.p 
              className="text-on-surface-variant leading-relaxed max-w-lg font-label text-sm mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Skyon Innovation designs, manufactures, and validates cleanrooms, modular OTs, and containment systems
              across India. Every product is backed by our in-house engineering team and NABL-accredited validation
              services for regulatory peace of mind.
            </motion.p>
          </div>
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              { color: "bg-tertiary", text: "NABH Compliant" },
              { color: "bg-primary", text: "ISO 14644 Qualified" },
              { color: "bg-secondary", text: "NABL Validated" }
            ].map((badge, index) => (
              <motion.div
                key={badge.text}
                className={`px-4 py-2 bg-surface-container-highest rounded border border-outline-variant/10 flex items-center gap-2 ${badge.color === 'bg-tertiary' ? 'bg-tertiary/10 hover:bg-tertiary/20' : ''}`}
                whileHover={{ scale: 1.05, x: 5 }}
                transition={{ type: "spring", stiffness: 400, delay: 0.5 + index * 0.1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${badge.color}`} />
                <span className="text-[10px] font-bold text-on-surface font-label">{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Related navigation */}
        <motion.div
          className="p-8 rounded-xl bg-surface-container-high/70 backdrop-blur-sm border border-outline-variant/15 flex flex-col justify-between gap-4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.h4 
            className="text-sm font-headline font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Explore More Products
          </motion.h4>
          <div className="flex flex-col gap-3 flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link
                href="/products"
                className="flex items-center justify-between p-3 rounded-lg bg-surface-container border border-outline-variant/10 hover:bg-surface-bright hover:border-primary/20 transition-all group"
              >
                <span className="text-xs font-label text-on-surface-variant group-hover:text-white transition-colors">
                  View All Products
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-primary group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
          <motion.div 
            className="pt-4 border-t border-outline-variant/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-[11px] text-on-surface-variant font-label mb-3">
              Ready to discuss your project requirements?
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/contact-us"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-primary/10 border border-primary/20 text-primary text-xs font-bold font-label hover:bg-primary/20 transition-colors"
              >
                Contact Our Team <ArrowRight className="w-3 h-3" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </main>
  );
}