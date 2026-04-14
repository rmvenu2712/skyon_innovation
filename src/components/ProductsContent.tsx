'use client';

import FadeInSection from "@/components/FadeInSection";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { AlignRightIcon, ArrowRight, ArrowRightLeftIcon, ChevronLeftIcon, ChevronRightIcon, MoveRight } from "lucide-react";

const products = [
  // --- Clean Room Systems ---
  {
    id: 1,
    name: "Modular Operation Theatre",
    category: "Clean Room Systems",
    badge: "MOT",
    description: "Fully integrated modular OT with HEPA filtration, seamless wall panels, and controlled air flow for sterile surgical environments.",
    ref: "SK-MOT-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLPiU3oV7my25lNl7crm6M_5gUZfFgy_Q709l-msckCDaYZ8jRQ1MyvwUWblZgL2ePn7Q48UCX3oTvajvc9o1zpvTmaqJMmuLDhiild2tVVcQ0IinQELaMllBiuZ_Q3LzI8H_GpvO70Ot5g0F9Caj2Kj6i-ARqLOObCabN1_LexQDiW2Zz41Onp0YJq7aIFa_qoLwxOveXLQhKgOuIpG8aAT6F8IV0wOUl6vS2qCXnQRH2JOiaMKlJvo_UwoyTBD9phF1x4q2XcqOW",
  },
  {
    id: 2,
    name: "Clean Room",
    category: "Clean Room Systems",
    badge: "ISO Certified",
    description: "Turnkey cleanroom solutions with ISO Class 5-8 compliance, modular wall systems, and integrated environmental controls.",
    ref: "SK-CR-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-srPOv1rc-ba4nd3-iOfMCA-zs1cg5QO5CvlnkIPH6ldzq8rHgfKMyvnY8Vzmj-j358M405myTL-FoL8b2zY5hFDj3D2oXabiIIbJnXwpt9Gc2eSMuq3waJEO6amlwaS_THy-5Jaz_k-PTmn_9EocRmRMfUT63fuO2xOod8hscHWJEGRuJ0JuClKaQ-l6Xz9A781vxlUzygf-aopC8R8jt7wNOgazZ6oswEMYgpC4bnJm2hRXWq4DEzsLtI0_LyXyTGH_jszd4cZX",
  },
  {
    id: 3,
    name: "IVF Clean Room",
    category: "Clean Room Systems",
    badge: "Specialized",
    description: "Purpose-built IVF lab cleanroom with precise temperature, humidity, and VOC control for embryology applications.",
    ref: "SK-IVF-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuABPsoXhI0sNEakNw04YyS6DKzUMuVXPpu8_EaObmsspb3sGIA0Fr6up8jX7timpFsRad7ZcgmVGT_-qmDdFs-9a2zu3emb2IhkHeTNC1pRS-Kwwu7SgFFfDY6FPiTOOVL3LtDdoF4_vfkK1TDv1HX2V8ZVUmYeT2s2OBM-0HDD5Nx5y_9bVrKZbuYIopxFyKx23zBYUwtTgjUSgOznCE2PRIybqCa2Dpa6mIZ9jKe897JejWaATpDkKaJzWWfAc0Dbx1SIfZDXbcCT",
  },
  {
    id: 4,
    name: "Inoculation Chamber",
    category: "Clean Room Systems",
    badge: "Micro Lab",
    description: "Sterile inoculation chamber with UV sterilization, HEPA filtration, and ergonomic access ports for microbiology work.",
    ref: "SK-IC-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGNbdpL7_OweMHmvsPTKtGhY1nYlxDYfvfbqbMe821zs7g8nTMAJTUtMZaN2vQ_coghmpdZlOFdM7F0IWzT8EO0ds9VkPufaVLhXnX9Px1cq75RacU9a3PkGMASYI2OM01psHqpB9JwK7r5gZiFTGgJ1tm2kljd6U2RUgMsjQgIy4WY4tMS4GxhIqUfM6jPhNf9SdiboUr1VFOfT9qWspEMHNIfJFKdKDjrCjsZTFGDtZWZ3cGZVhRvcBJavIi_NetVIO7nOHYd7hD",
  },

  // --- Laminar Flow ---
  {
    id: 5,
    name: "Vertical Laminar Flow Cabinet",
    category: "Laminar Flow",
    badge: "VLFC",
    description: "Vertical laminar air flow cabinet providing ISO Class 5 clean air for sensitive sample handling and pharmaceutical work.",
    ref: "SK-VLFC-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1oBA32bpVWUYrcKeU9Su9hpfu1Zdom1JLEhbNfuXWRfma-1jXzbdW2TmoSoHbEYU1tIUo1dkWW9tZivOGlt8gnBbx44iR4e-rGHfImud_UzmESkgzo-gEDJQTskMJy6QCOef5IFXhHcgQ1EyWps0tNRPKr2tIEdYmGP3eZt8OAOBFZE4cNPzIS0kSBK44f6rRmn6nFW4QmaYJYzP6_HFFnyGcPAEKX6FxOi0cmQi_42Du5VOQYZQQt2aK6SlK0PQJ1EEj0Qb-4j0d",
  },
  {
    id: 6,
    name: "Horizontal Laminar Flow Cabinet",
    category: "Laminar Flow",
    badge: "HLFC",
    description: "Horizontal laminar flow workstation with uniform air curtain across the work surface for contamination-free processing.",
    ref: "SK-HLFC-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAa1ijZ_QeRAa4AAd0x_tKDqoaTGNyU5LxibESbFI0Sz7WR5Q7gr8JdUJ8lEEbLfuL8u5DpTzhst48B4KK92Dq0naSA00SWlxG40l4o-RQ5nLXUPzxONbx6LjHZsJoR-VNf6HIZLb_3LS5eBFRbV5SltqUtLAC_zQGSceDNIXu01dv970KgYWfgyyX36AMseB3z6053S50lE7d7caQiYLoepo2repvlK7jBDm6bgPPEzVoT2vromRkI1E2cxZ_V7qn-xXHRVoxQMw8W",
  },
  {
    id: 7,
    name: "Ceiling Suspended LAF Unit",
    category: "Laminar Flow",
    badge: "Ceiling Mount",
    description: "Ceiling-mounted LAF unit delivering ultra-clean downflow air for OT and critical process areas with minimal footprint.",
    ref: "SK-CLAF-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYkCNWLt4tAKS5p0_9TFI7Fc5KjqR2qmSnOhP3FFKvqPK9PVmQ5M3o55ZvsNgM56AZGoJJrlX9jS4Pm2goy4S5JCFn-4sk3kytLLr6q62CLKRfy5021xLdBCbny5qgOiukFTVCZDfB1wSGTIofct1-fm70uOh0hSYEdzMDj1d_YpcUMm4iSpLMzU2mzHHLqeafjVCnMPRenfkj5XvKKsWM1-_JkjzNP4NE9jdj_vqLsruY5toPGCgkUCySOgcp5fQzBaDDBUNjjzaW",
  },

  // --- Safety Cabinets ---
  {
    id: 8,
    name: "Biological Safety Cabinet - Class 1",
    category: "Safety Cabinets",
    badge: "BSC-I",
    description: "Personnel protection cabinet with inward airflow and HEPA-filtered exhaust for low-to-moderate risk biological agents.",
    ref: "SK-BSC1-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAy2QGP28YJGSW8-jjfCIM2jpD4BUw-SY8cb3oI8JWEZuBB1Kmy57f_bmT4XkM7H1ZfVyiMfvwjSy4PfbcrHnGeIGkyzgTjY0tgZtwTUyscetLxt7G53IILLJD4r4DVcg2kyLeJHp99tNg7-zCo67OPbFFxDymt-uIjFpWHt2_AkIKGn9RwI7uZo3xBP5sVYDeGVEYssdrGue30Kvwjx4-50kPQFyC02tJcqqKzA3IvUV1VXkq5SzU1dyRUbyT572WoMLsNWMKGNANI",
  },
  {
    id: 9,
    name: "Biological Safety Cabinet - Class 2",
    category: "Safety Cabinets",
    badge: "BSC-II",
    description: "Dual-protection cabinet providing both personnel and product protection with HEPA-filtered downflow and exhaust.",
    ref: "SK-BSC2-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKQnnEYpoP5JLeCC6Xji5hy17JwNe_NXZPgZVjcXFVjc-YDWDfij3rKrO7Wy3cfPxKA7U9xWFrFQExQyJ3Nk-YI8OF32YZqhGaI8tKP1e5kJ7vRP58udcmLvg8-1u5dMwewXItttTVTROD1mwEAf7nliTR7ED3j7cnMv39nlwRr40GRPUBv0TLEL7ePCNvZhUhd_trwj_bFxBkochFnjGmbNa1ZvinOtfe7ZYzhIezYe8CixMNtk1bp6h8sQyO0973nJio_19bhc6D",
  },
  {
    id: 10,
    name: "Biological Safety Cabinet - Class 3",
    category: "Safety Cabinets",
    badge: "BSC-III",
    description: "Totally enclosed gas-tight cabinet for maximum containment of high-risk biological agents with glove-port access.",
    ref: "SK-BSC3-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-srPOv1rc-ba4nd3-iOfMCA-zs1cg5QO5CvlnkIPH6ldzq8rHgfKMyvnY8Vzmj-j358M405myTL-FoL8b2zY5hFDj3D2oXabiIIbJnXwpt9Gc2eSMuq3waJEO6amlwaS_THy-5Jaz_k-PTmn_9EocRmRMfUT63fuO2xOod8hscHWJEGRuJ0JuClKaQ-l6Xz9A781vxlUzygf-aopC8R8jt7wNOgazZ6oswEMYgpC4bnJm2hRXWq4DEzsLtI0_LyXyTGH_jszd4cZX",
  },

  // --- Access & Containment ---
  {
    id: 11,
    name: "Air Shower",
    category: "Access & Containment",
    badge: "Decontamination",
    description: "High-velocity air shower with interlocked doors and programmable cycle for removing particulates before cleanroom entry.",
    ref: "SK-AS-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLPiU3oV7my25lNl7crm6M_5gUZfFgy_Q709l-msckCDaYZ8jRQ1MyvwUWblZgL2ePn7Q48UCX3oTvajvc9o1zpvTmaqJMmuLDhiild2tVVcQ0IinQELaMllBiuZ_Q3LzI8H_GpvO70Ot5g0F9Caj2Kj6i-ARqLOObCabN1_LexQDiW2Zz41Onp0YJq7aIFa_qoLwxOveXLQhKgOuIpG8aAT6F8IV0wOUl6vS2qCXnQRH2JOiaMKlJvo_UwoyTBD9phF1x4q2XcqOW",
  },
  {
    id: 12,
    name: "Dispensing Booth / Sampling Booth",
    category: "Access & Containment",
    badge: "Pharma",
    description: "Self-contained dispensing and sampling booth with reverse laminar flow for dust-free pharmaceutical powder handling.",
    ref: "SK-DB-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1oBA32bpVWUYrcKeU9Su9hpfu1Zdom1JLEhbNfuXWRfma-1jXzbdW2TmoSoHbEYU1tIUo1dkWW9tZivOGlt8gnBbx44iR4e-rGHfImud_UzmESkgzo-gEDJQTskMJy6QCOef5IFXhHcgQ1EyWps0tNRPKr2tIEdYmGP3eZt8OAOBFZE4cNPzIS0kSBK44f6rRmn6nFW4QmaYJYzP6_HFFnyGcPAEKX6FxOi0cmQi_42Du5VOQYZQQt2aK6SlK0PQJ1EEj0Qb-4j0d",
  },
  {
    id: 13,
    name: "Static & Dynamic Pass Box",
    category: "Access & Containment",
    badge: "Material Transfer",
    description: "Interlocked pass box for safe material transfer between classified areas, available in static and dynamic HEPA models.",
    ref: "SK-PB-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAa1ijZ_QeRAa4AAd0x_tKDqoaTGNyU5LxibESbFI0Sz7WR5Q7gr8JdUJ8lEEbLfuL8u5DpTzhst48B4KK92Dq0naSA00SWlxG40l4o-RQ5nLXUPzxONbx6LjHZsJoR-VNf6HIZLb_3LS5eBFRbV5SltqUtLAC_zQGSceDNIXu01dv970KgYWfgyyX36AMseB3z6053S50lE7d7caQiYLoepo2repvlK7jBDm6bgPPEzVoT2vromRkI1E2cxZ_V7qn-xXHRVoxQMw8W",
  },
  {
    id: 14,
    name: "Garment Cubicle",
    category: "Access & Containment",
    badge: "Gowning",
    description: "Dedicated gowning cubicle with step-over bench, mirror, and cleanroom-grade garment storage for personnel entry protocol.",
    ref: "SK-GC-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYkCNWLt4tAKS5p0_9TFI7Fc5KjqR2qmSnOhP3FFKvqPK9PVmQ5M3o55ZvsNgM56AZGoJJrlX9jS4Pm2goy4S5JCFn-4sk3kytLLr6q62CLKRfy5021xLdBCbny5qgOiukFTVCZDfB1wSGTIofct1-fm70uOh0hSYEdzMDj1d_YpcUMm4iSpLMzU2mzHHLqeafjVCnMPRenfkj5XvKKsWM1-_JkjzNP4NE9jdj_vqLsruY5toPGCgkUCySOgcp5fQzBaDDBUNjjzaW",
  },

  // --- Filters & Ventilation ---
  {
    id: 15,
    name: "Filters (HEPA, ULPA)",
    category: "Filters & Ventilation",
    badge: "Filtration",
    description: "High-efficiency HEPA (99.97%) and ULPA (99.999%) filters for cleanrooms, AHUs, and laminar flow equipment.",
    ref: "SK-FLT-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGNbdpL7_OweMHmvsPTKtGhY1nYlxDYfvfbqbMe821zs7g8nTMAJTUtMZaN2vQ_coghmpdZlOFdM7F0IWzT8EO0ds9VkPufaVLhXnX9Px1cq75RacU9a3PkGMASYI2OM01psHqpB9JwK7r5gZiFTGgJ1tm2kljd6U2RUgMsjQgIy4WY4tMS4GxhIqUfM6jPhNf9SdiboUr1VFOfT9qWspEMHNIfJFKdKDjrCjsZTFGDtZWZ3cGZVhRvcBJavIi_NetVIO7nOHYd7hD",
  },
  {
    id: 16,
    name: "Fume Hood",
    category: "Filters & Ventilation",
    badge: "Chemical Safety",
    description: "Chemical fume hood with variable air volume control, sash alarm, and acid-resistant interior for laboratory safety.",
    ref: "SK-FH-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAy2QGP28YJGSW8-jjfCIM2jpD4BUw-SY8cb3oI8JWEZuBB1Kmy57f_bmT4XkM7H1ZfVyiMfvwjSy4PfbcrHnGeIGkyzgTjY0tgZtwTUyscetLxt7G53IILLJD4r4DVcg2kyLeJHp99tNg7-zCo67OPbFFxDymt-uIjFpWHt2_AkIKGn9RwI7uZo3xBP5sVYDeGVEYssdrGue30Kvwjx4-50kPQFyC02tJcqqKzA3IvUV1VXkq5SzU1dyRUbyT572WoMLsNWMKGNANI",
  },
  {
    id: 17,
    name: "Air Handling Units",
    category: "Filters & Ventilation",
    badge: "HVAC",
    description: "Custom air handling units with multi-stage filtration, precise temperature and humidity control for cleanroom HVAC.",
    ref: "SK-AHU-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKQnnEYpoP5JLeCC6Xji5hy17JwNe_NXZPgZVjcXFVjc-YDWDfij3rKrO7Wy3cfPxKA7U9xWFrFQExQyJ3Nk-YI8OF32YZqhGaI8tKP1e5kJ7vRP58udcmLvg8-1u5dMwewXItttTVTROD1mwEAf7nliTR7ED3j7cnMv39nlwRr40GRPUBv0TLEL7ePCNvZhUhd_trwj_bFxBkochFnjGmbNa1ZvinOtfe7ZYzhIezYe8CixMNtk1bp6h8sQyO0973nJio_19bhc6D",
  },

  // --- Doors & Glass ---
  {
    id: 18,
    name: "Lead Door",
    category: "Doors & Glass",
    badge: "Radiation Shield",
    description: "Lead-lined radiation shielding door for X-ray rooms, CT suites, and nuclear medicine facilities.",
    ref: "SK-LD-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLPiU3oV7my25lNl7crm6M_5gUZfFgy_Q709l-msckCDaYZ8jRQ1MyvwUWblZgL2ePn7Q48UCX3oTvajvc9o1zpvTmaqJMmuLDhiild2tVVcQ0IinQELaMllBiuZ_Q3LzI8H_GpvO70Ot5g0F9Caj2Kj6i-ARqLOObCabN1_LexQDiW2Zz41Onp0YJq7aIFa_qoLwxOveXLQhKgOuIpG8aAT6F8IV0wOUl6vS2qCXnQRH2JOiaMKlJvo_UwoyTBD9phF1x4q2XcqOW",
  },
  {
    id: 19,
    name: "GI Powder Coated Doors",
    category: "Doors & Glass",
    badge: "GI Doors",
    description: "Galvanized iron powder-coated flush doors with anti-bacterial finish for cleanroom and hospital applications.",
    ref: "SK-GID-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1oBA32bpVWUYrcKeU9Su9hpfu1Zdom1JLEhbNfuXWRfma-1jXzbdW2TmoSoHbEYU1tIUo1dkWW9tZivOGlt8gnBbx44iR4e-rGHfImud_UzmESkgzo-gEDJQTskMJy6QCOef5IFXhHcgQ1EyWps0tNRPKr2tIEdYmGP3eZt8OAOBFZE4cNPzIS0kSBK44f6rRmn6nFW4QmaYJYzP6_HFFnyGcPAEKX6FxOi0cmQi_42Du5VOQYZQQt2aK6SlK0PQJ1EEj0Qb-4j0d",
  },
  {
    id: 20,
    name: "Stainless Steel Doors",
    category: "Doors & Glass",
    badge: "SS Doors",
    description: "Heavy-duty stainless steel doors with flush finish, vision panels, and multiple locking options for GMP areas.",
    ref: "SK-SSD-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAa1ijZ_QeRAa4AAd0x_tKDqoaTGNyU5LxibESbFI0Sz7WR5Q7gr8JdUJ8lEEbLfuL8u5DpTzhst48B4KK92Dq0naSA00SWlxG40l4o-RQ5nLXUPzxONbx6LjHZsJoR-VNf6HIZLb_3LS5eBFRbV5SltqUtLAC_zQGSceDNIXu01dv970KgYWfgyyX36AMseB3z6053S50lE7d7caQiYLoepo2repvlK7jBDm6bgPPEzVoT2vromRkI1E2cxZ_V7qn-xXHRVoxQMw8W",
  },
  {
    id: 21,
    name: "Lead Glass with Frames",
    category: "Doors & Glass",
    badge: "Radiation View",
    description: "Lead-equivalent viewing glass with precision frames for radiation protection in diagnostic and therapy rooms.",
    ref: "SK-LG-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYkCNWLt4tAKS5p0_9TFI7Fc5KjqR2qmSnOhP3FFKvqPK9PVmQ5M3o55ZvsNgM56AZGoJJrlX9jS4Pm2goy4S5JCFn-4sk3kytLLr6q62CLKRfy5021xLdBCbny5qgOiukFTVCZDfB1wSGTIofct1-fm70uOh0hSYEdzMDj1d_YpcUMm4iSpLMzU2mzHHLqeafjVCnMPRenfkj5XvKKsWM1-_JkjzNP4NE9jdj_vqLsruY5toPGCgkUCySOgcp5fQzBaDDBUNjjzaW",
  },
  {
    id: 22,
    name: "Emergency Exit Doors",
    category: "Doors & Glass",
    badge: "Safety Exit",
    description: "Fire-rated emergency exit doors with panic bar hardware, illuminated signage, and code-compliant design.",
    ref: "SK-EED-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGNbdpL7_OweMHmvsPTKtGhY1nYlxDYfvfbqbMe821zs7g8nTMAJTUtMZaN2vQ_coghmpdZlOFdM7F0IWzT8EO0ds9VkPufaVLhXnX9Px1cq75RacU9a3PkGMASYI2OM01psHqpB9JwK7r5gZiFTGgJ1tm2kljd6U2RUgMsjQgIy4WY4tMS4GxhIqUfM6jPhNf9SdiboUr1VFOfT9qWspEMHNIfJFKdKDjrCjsZTFGDtZWZ3cGZVhRvcBJavIi_NetVIO7nOHYd7hD",
  },
  {
    id: 23,
    name: "Industrial Doors",
    category: "Doors & Glass",
    badge: "Heavy Duty",
    description: "High-speed industrial doors including roller shutters and sliding doors for logistics and manufacturing cleanrooms.",
    ref: "SK-IND-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAy2QGP28YJGSW8-jjfCIM2jpD4BUw-SY8cb3oI8JWEZuBB1Kmy57f_bmT4XkM7H1ZfVyiMfvwjSy4PfbcrHnGeIGkyzgTjY0tgZtwTUyscetLxt7G53IILLJD4r4DVcg2kyLeJHp99tNg7-zCo67OPbFFxDymt-uIjFpWHt2_AkIKGn9RwI7uZo3xBP5sVYDeGVEYssdrGue30Kvwjx4-50kPQFyC02tJcqqKzA3IvUV1VXkq5SzU1dyRUbyT572WoMLsNWMKGNANI",
  },

  // --- Modules & Panels ---
  {
    id: 24,
    name: "Surgical Scrub Station",
    category: "Modules & Panels",
    badge: "Scrub Unit",
    description: "Sensor-operated surgical scrub station with knee/elbow activation, timer display, and antimicrobial basin.",
    ref: "SK-SSS-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKQnnEYpoP5JLeCC6Xji5hy17JwNe_NXZPgZVjcXFVjc-YDWDfij3rKrO7Wy3cfPxKA7U9xWFrFQExQyJ3Nk-YI8OF32YZqhGaI8tKP1e5kJ7vRP58udcmLvg8-1u5dMwewXItttTVTROD1mwEAf7nliTR7ED3j7cnMv39nlwRr40GRPUBv0TLEL7ePCNvZhUhd_trwj_bFxBkochFnjGmbNa1ZvinOtfe7ZYzhIezYe8CixMNtk1bp6h8sQyO0973nJio_19bhc6D",
  },
  {
    id: 25,
    name: "Positive Pressure Module",
    category: "Modules & Panels",
    badge: "Pressure Control",
    description: "Positive pressure isolation module maintaining higher air pressure to prevent contamination ingress into clean areas.",
    ref: "SK-PPM-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-srPOv1rc-ba4nd3-iOfMCA-zs1cg5QO5CvlnkIPH6ldzq8rHgfKMyvnY8Vzmj-j358M405myTL-FoL8b2zY5hFDj3D2oXabiIIbJnXwpt9Gc2eSMuq3waJEO6amlwaS_THy-5Jaz_k-PTmn_9EocRmRMfUT63fuO2xOod8hscHWJEGRuJ0JuClKaQ-l6Xz9A781vxlUzygf-aopC8R8jt7wNOgazZ6oswEMYgpC4bnJm2hRXWq4DEzsLtI0_LyXyTGH_jszd4cZX",
  },
  {
    id: 26,
    name: "Negative Pressure Module",
    category: "Modules & Panels",
    badge: "Isolation",
    description: "Negative pressure isolation module for infectious disease containment, preventing airborne pathogen escape.",
    ref: "SK-NPM-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuABPsoXhI0sNEakNw04YyS6DKzUMuVXPpu8_EaObmsspb3sGIA0Fr6up8jX7timpFsRad7ZcgmVGT_-qmDdFs-9a2zu3emb2IhkHeTNC1pRS-Kwwu7SgFFfDY6FPiTOOVL3LtDdoF4_vfkK1TDv1HX2V8ZVUmYeT2s2OBM-0HDD5Nx5y_9bVrKZbuYIopxFyKx23zBYUwtTgjUSgOznCE2PRIybqCa2Dpa6mIZ9jKe897JejWaATpDkKaJzWWfAc0Dbx1SIfZDXbcCT",
  },
  {
    id: 27,
    name: "Surgeon Control Panel",
    category: "Modules & Panels",
    badge: "OT Controls",
    description: "Centralized touchscreen surgeon control panel for OT lights, AHU, gas alarms, intercom, and environmental monitoring.",
    ref: "SK-SCP-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLPiU3oV7my25lNl7crm6M_5gUZfFgy_Q709l-msckCDaYZ8jRQ1MyvwUWblZgL2ePn7Q48UCX3oTvajvc9o1zpvTmaqJMmuLDhiild2tVVcQ0IinQELaMllBiuZ_Q3LzI8H_GpvO70Ot5g0F9Caj2Kj6i-ARqLOObCabN1_LexQDiW2Zz41Onp0YJq7aIFa_qoLwxOveXLQhKgOuIpG8aAT6F8IV0wOUl6vS2qCXnQRH2JOiaMKlJvo_UwoyTBD9phF1x4q2XcqOW",
  },

  // --- Flooring ---
  {
    id: 28,
    name: "Epoxy Flooring",
    category: "Flooring",
    badge: "Seamless",
    description: "Self-leveling epoxy flooring system with anti-static, chemical-resistant, and seamless cove finish for cleanrooms.",
    ref: "SK-EF-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1oBA32bpVWUYrcKeU9Su9hpfu1Zdom1JLEhbNfuXWRfma-1jXzbdW2TmoSoHbEYU1tIUo1dkWW9tZivOGlt8gnBbx44iR4e-rGHfImud_UzmESkgzo-gEDJQTskMJy6QCOef5IFXhHcgQ1EyWps0tNRPKr2tIEdYmGP3eZt8OAOBFZE4cNPzIS0kSBK44f6rRmn6nFW4QmaYJYzP6_HFFnyGcPAEKX6FxOi0cmQi_42Du5VOQYZQQt2aK6SlK0PQJ1EEj0Qb-4j0d",
  },
  {
    id: 29,
    name: "Vinyl Flooring",
    category: "Flooring",
    badge: "Hygienic",
    description: "Homogeneous vinyl sheet flooring with heat-welded seams, anti-microbial properties, and ESD options for clean areas.",
    ref: "SK-VF-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAa1ijZ_QeRAa4AAd0x_tKDqoaTGNyU5LxibESbFI0Sz7WR5Q7gr8JdUJ8lEEbLfuL8u5DpTzhst48B4KK92Dq0naSA00SWlxG40l4o-RQ5nLXUPzxONbx6LjHZsJoR-VNf6HIZLb_3LS5eBFRbV5SltqUtLAC_zQGSceDNIXu01dv970KgYWfgyyX36AMseB3z6053S50lE7d7caQiYLoepo2repvlK7jBDm6bgPPEzVoT2vromRkI1E2cxZ_V7qn-xXHRVoxQMw8W",
  },

  // --- Furniture & Accessories ---
  {
    id: 30,
    name: "SS Clean Room Furniture",
    category: "Furniture & Accessories",
    badge: "SS Furniture",
    description: "Full range of stainless steel furniture including tables, racks, stools, and trolleys for cleanroom and pharma use.",
    ref: "SK-SSF-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYkCNWLt4tAKS5p0_9TFI7Fc5KjqR2qmSnOhP3FFKvqPK9PVmQ5M3o55ZvsNgM56AZGoJJrlX9jS4Pm2goy4S5JCFn-4sk3kytLLr6q62CLKRfy5021xLdBCbny5qgOiukFTVCZDfB1wSGTIofct1-fm70uOh0hSYEdzMDj1d_YpcUMm4iSpLMzU2mzHHLqeafjVCnMPRenfkj5XvKKsWM1-_JkjzNP4NE9jdj_vqLsruY5toPGCgkUCySOgcp5fQzBaDDBUNjjzaW",
  },
  {
    id: 31,
    name: "Cross Over Bench",
    category: "Furniture & Accessories",
    badge: "Gowning Aid",
    description: "Step-over bench for cleanroom gowning areas with shoe storage below, separating dirty and clean zones.",
    ref: "SK-COB-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGNbdpL7_OweMHmvsPTKtGhY1nYlxDYfvfbqbMe821zs7g8nTMAJTUtMZaN2vQ_coghmpdZlOFdM7F0IWzT8EO0ds9VkPufaVLhXnX9Px1cq75RacU9a3PkGMASYI2OM01psHqpB9JwK7r5gZiFTGgJ1tm2kljd6U2RUgMsjQgIy4WY4tMS4GxhIqUfM6jPhNf9SdiboUr1VFOfT9qWspEMHNIfJFKdKDjrCjsZTFGDtZWZ3cGZVhRvcBJavIi_NetVIO7nOHYd7hD",
  },
  {
    id: 32,
    name: "Door Interlock Systems",
    category: "Furniture & Accessories",
    badge: "Access Control",
    description: "Electronic and pneumatic door interlock systems preventing simultaneous opening of adjacent cleanroom doors.",
    ref: "SK-DIL-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKQnnEYpoP5JLeCC6Xji5hy17JwNe_NXZPgZVjcXFVjc-YDWDfij3rKrO7Wy3cfPxKA7U9xWFrFQExQyJ3Nk-YI8OF32YZqhGaI8tKP1e5kJ7vRP58udcmLvg8-1u5dMwewXItttTVTROD1mwEAf7nliTR7ED3j7cnMv39nlwRr40GRPUBv0TLEL7ePCNvZhUhd_trwj_bFxBkochFnjGmbNa1ZvinOtfe7ZYzhIezYe8CixMNtk1bp6h8sQyO0973nJio_19bhc6D",
  },

  // --- Validation & Certification ---
  {
    id: 33,
    name: "Clean Room QC Certifications",
    category: "Validation & Certification",
    badge: "QC",
    description: "Comprehensive ISO 14644 cleanroom qualification including particle count, air velocity, and recovery testing.",
    ref: "SK-QC-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-srPOv1rc-ba4nd3-iOfMCA-zs1cg5QO5CvlnkIPH6ldzq8rHgfKMyvnY8Vzmj-j358M405myTL-FoL8b2zY5hFDj3D2oXabiIIbJnXwpt9Gc2eSMuq3waJEO6amlwaS_THy-5Jaz_k-PTmn_9EocRmRMfUT63fuO2xOod8hscHWJEGRuJ0JuClKaQ-l6Xz9A781vxlUzygf-aopC8R8jt7wNOgazZ6oswEMYgpC4bnJm2hRXWq4DEzsLtI0_LyXyTGH_jszd4cZX",
  },
  {
    id: 34,
    name: "Clean Room Validation",
    category: "Validation & Certification",
    badge: "Validation",
    description: "IQ/OQ/PQ validation protocols for cleanroom installations covering all critical parameters per regulatory standards.",
    ref: "SK-CRV-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuABPsoXhI0sNEakNw04YyS6DKzUMuVXPpu8_EaObmsspb3sGIA0Fr6up8jX7timpFsRad7ZcgmVGT_-qmDdFs-9a2zu3emb2IhkHeTNC1pRS-Kwwu7SgFFfDY6FPiTOOVL3LtDdoF4_vfkK1TDv1HX2V8ZVUmYeT2s2OBM-0HDD5Nx5y_9bVrKZbuYIopxFyKx23zBYUwtTgjUSgOznCE2PRIybqCa2Dpa6mIZ9jKe897JejWaATpDkKaJzWWfAc0Dbx1SIfZDXbcCT",
  },
  {
    id: 35,
    name: "Modular OT Validation",
    category: "Validation & Certification",
    badge: "MOT Validation",
    description: "Complete modular operation theatre validation including air quality, particulate analysis, and microbial assessment.",
    ref: "SK-MOTV-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLPiU3oV7my25lNl7crm6M_5gUZfFgy_Q709l-msckCDaYZ8jRQ1MyvwUWblZgL2ePn7Q48UCX3oTvajvc9o1zpvTmaqJMmuLDhiild2tVVcQ0IinQELaMllBiuZ_Q3LzI8H_GpvO70Ot5g0F9Caj2Kj6i-ARqLOObCabN1_LexQDiW2Zz41Onp0YJq7aIFa_qoLwxOveXLQhKgOuIpG8aAT6F8IV0wOUl6vS2qCXnQRH2JOiaMKlJvo_UwoyTBD9phF1x4q2XcqOW",
  },
  {
    id: 36,
    name: "Equipment Validation (NABL)",
    category: "Validation & Certification",
    badge: "NABL",
    description: "NABL-accredited equipment validation services for HEPA filters, LAF, BSC, and AHU with calibrated instruments.",
    ref: "SK-NABL-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1oBA32bpVWUYrcKeU9Su9hpfu1Zdom1JLEhbNfuXWRfma-1jXzbdW2TmoSoHbEYU1tIUo1dkWW9tZivOGlt8gnBbx44iR4e-rGHfImud_UzmESkgzo-gEDJQTskMJy6QCOef5IFXhHcgQ1EyWps0tNRPKr2tIEdYmGP3eZt8OAOBFZE4cNPzIS0kSBK44f6rRmn6nFW4QmaYJYzP6_HFFnyGcPAEKX6FxOi0cmQi_42Du5VOQYZQQt2aK6SlK0PQJ1EEj0Qb-4j0d",
  },

  // --- AMC & Services ---
  {
    id: 37,
    name: "Clean Room AMC",
    category: "AMC & Services",
    badge: "Maintenance",
    description: "Annual maintenance contracts for cleanroom facilities including filter replacement, calibration, and re-validation.",
    ref: "SK-CRAMC-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAa1ijZ_QeRAa4AAd0x_tKDqoaTGNyU5LxibESbFI0Sz7WR5Q7gr8JdUJ8lEEbLfuL8u5DpTzhst48B4KK92Dq0naSA00SWlxG40l4o-RQ5nLXUPzxONbx6LjHZsJoR-VNf6HIZLb_3LS5eBFRbV5SltqUtLAC_zQGSceDNIXu01dv970KgYWfgyyX36AMseB3z6053S50lE7d7caQiYLoepo2repvlK7jBDm6bgPPEzVoT2vromRkI1E2cxZ_V7qn-xXHRVoxQMw8W",
  },
  {
    id: 38,
    name: "Modular OT AMC",
    category: "AMC & Services",
    badge: "MOT Service",
    description: "Comprehensive AMC for modular OTs covering HVAC, electrical, panel maintenance, and periodic re-certification.",
    ref: "SK-MOTAMC-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYkCNWLt4tAKS5p0_9TFI7Fc5KjqR2qmSnOhP3FFKvqPK9PVmQ5M3o55ZvsNgM56AZGoJJrlX9jS4Pm2goy4S5JCFn-4sk3kytLLr6q62CLKRfy5021xLdBCbny5qgOiukFTVCZDfB1wSGTIofct1-fm70uOh0hSYEdzMDj1d_YpcUMm4iSpLMzU2mzHHLqeafjVCnMPRenfkj5XvKKsWM1-_JkjzNP4NE9jdj_vqLsruY5toPGCgkUCySOgcp5fQzBaDDBUNjjzaW",
  },
  {
    id: 39,
    name: "Clean Room Equipment Services",
    category: "AMC & Services",
    badge: "Equipment",
    description: "On-demand repair and servicing of all cleanroom equipment including LAF, BSC, pass boxes, and air showers.",
    ref: "SK-CRES-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGNbdpL7_OweMHmvsPTKtGhY1nYlxDYfvfbqbMe821zs7g8nTMAJTUtMZaN2vQ_coghmpdZlOFdM7F0IWzT8EO0ds9VkPufaVLhXnX9Px1cq75RacU9a3PkGMASYI2OM01psHqpB9JwK7r5gZiFTGgJ1tm2kljd6U2RUgMsjQgIy4WY4tMS4GxhIqUfM6jPhNf9SdiboUr1VFOfT9qWspEMHNIfJFKdKDjrCjsZTFGDtZWZ3cGZVhRvcBJavIi_NetVIO7nOHYd7hD",
  },
  {
    id: 40,
    name: "Air Handling Units Services",
    category: "AMC & Services",
    badge: "AHU Service",
    description: "Specialized AHU maintenance including coil cleaning, motor servicing, filter replacement, and balancing.",
    ref: "SK-AHUS-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAy2QGP28YJGSW8-jjfCIM2jpD4BUw-SY8cb3oI8JWEZuBB1Kmy57f_bmT4XkM7H1ZfVyiMfvwjSy4PfbcrHnGeIGkyzgTjY0tgZtwTUyscetLxt7G53IILLJD4r4DVcg2kyLeJHp99tNg7-zCo67OPbFFxDymt-uIjFpWHt2_AkIKGn9RwI7uZo3xBP5sVYDeGVEYssdrGue30Kvwjx4-50kPQFyC02tJcqqKzA3IvUV1VXkq5SzU1dyRUbyT572WoMLsNWMKGNANI",
  },

  // --- Design & Drafting ---
  {
    id: 41,
    name: "3D Visualization & Virtual Prototyping",
    category: "Design & Drafting",
    badge: "3D Design",
    description: "Integrated 3D visualization and virtual prototyping for cleanrooms and OTs before construction begins.",
    ref: "SK-3DV-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKQnnEYpoP5JLeCC6Xji5hy17JwNe_NXZPgZVjcXFVjc-YDWDfij3rKrO7Wy3cfPxKA7U9xWFrFQExQyJ3Nk-YI8OF32YZqhGaI8tKP1e5kJ7vRP58udcmLvg8-1u5dMwewXItttTVTROD1mwEAf7nliTR7ED3j7cnMv39nlwRr40GRPUBv0TLEL7ePCNvZhUhd_trwj_bFxBkochFnjGmbNa1ZvinOtfe7ZYzhIezYe8CixMNtk1bp6h8sQyO0973nJio_19bhc6D",
  },
  {
    id: 42,
    name: "Cleanroom & MOT Layout Drafting",
    category: "Design & Drafting",
    badge: "Drafting",
    description: "Professional layout drafting for cleanrooms and modular OTs with compliance to GMP, ISO, and NABH standards.",
    ref: "SK-DRF-01",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-srPOv1rc-ba4nd3-iOfMCA-zs1cg5QO5CvlnkIPH6ldzq8rHgfKMyvnY8Vzmj-j358M405myTL-FoL8b2zY5hFDj3D2oXabiIIbJnXwpt9Gc2eSMuq3waJEO6amlwaS_THy-5Jaz_k-PTmn_9EocRmRMfUT63fuO2xOod8hscHWJEGRuJ0JuClKaQ-l6Xz9A781vxlUzygf-aopC8R8jt7wNOgazZ6oswEMYgpC4bnJm2hRXWq4DEzsLtI0_LyXyTGH_jszd4cZX",
  },
];

const categories = [
  "All Systems",
  "Clean Room Systems",
  "Laminar Flow",
  "Safety Cabinets",
  "Access & Containment",
  "Filters & Ventilation",
  "Doors & Glass",
  "Modules & Panels",
  "Flooring",
  "Furniture & Accessories",
  "Validation & Certification",
  "AMC & Services",
  "Design & Drafting",
];

export default function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [filterOpen, setFilterOpen] = useState(false);

  const [activeCategory, setActiveCategory] = useState("All Systems");

  useEffect(() => {
    if (categoryParam && categories.includes(categoryParam)) {
      setActiveCategory(categoryParam);
    } else if (!categoryParam) {
      setActiveCategory("All Systems");
    }
  }, [categoryParam]);

  useEffect(() => {
  const el = document.getElementById('category-scroll');
  const rightBtn = document.getElementById('cat-right');
  if (el && rightBtn) {
    const hasOverflow = el.scrollWidth > el.clientWidth;
    rightBtn.style.cssText = hasOverflow ? 'opacity:1;pointer-events:auto' : 'opacity:0;pointer-events:none';
  }
}, [activeCategory]);


  const filteredProducts = activeCategory === "All Systems"
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <main className="pt-24 pb-20 technical-grid min-h-screen relative z-10 w-full overflow-hidden">
      {/* Compact Hero Section */}
      <FadeInSection>
        <section className="max-w-7xl mx-auto px-6 md:px-8 my-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-l-2 border-primary/30 pl-6 md:pl-10">
            <div className="max-w-xl">
              <span className="text-primary font-label text-[10px] md:text-xs uppercase tracking-[0.3em] mb-2 block">Complete Cleanroom Solutions</span>
              <h1 className="text-4xl md:text-6xl font-headline font-bold text-white leading-tight mb-4">Our Products &amp; Services</h1>
              <p className="text-on-surface-variant text-base md:text-lg font-light leading-relaxed max-w-lg">Comprehensive cleanroom infrastructure, modular OT solutions, validation services, and annual maintenance for healthcare &amp; pharma.</p>
            </div>
            <div className="flex gap-3 font-label text-[10px] text-outline uppercase tracking-wider tabular-nums">
              <div className="px-3 py-1.5 bg-surface-container-high rounded-sm border border-outline-variant/20">PRODUCTS: {products.length}</div>
              <div className="px-3 py-1.5 bg-surface-container-high rounded-sm border border-outline-variant/20 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                OPERATIONAL
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

{/* Category Filter */}
<FadeInSection>
  <section className="max-w-7xl mx-auto px-6 md:px-8 mb-12">

    {/* Desktop: horizontal scroll with smart arrows */}
    <div className="hidden md:block relative bg-surface-container-low rounded-md">
      <button
        type="button"
        id="cat-left"
        onClick={() => {
          const el = document.getElementById('category-scroll');
          if (el) el.scrollBy({ left: -260, behavior: 'smooth' });
        }}
        className="group cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-l-md bg-primary text-on-primary shadow-lg transition-all duration-300 hover:bg-surface-container-high hover:border-primary/40 opacity-0 pointer-events-none"
        aria-label="Scroll categories left"
      >
        <ChevronLeftIcon className="w-6 h-6 text-black group-hover:text-primary" />
      </button>

      <div
        id="category-scroll"
        className="overflow-x-auto no-scrollbar scroll-smooth mr-12"
        onScroll={(e) => {
          const el = e.currentTarget;
          const leftBtn = document.getElementById('cat-left');
          const rightBtn = document.getElementById('cat-right');
          if (leftBtn) leftBtn.style.cssText = el.scrollLeft <= 4 ? 'opacity:0;pointer-events:none' : 'opacity:1;pointer-events:auto';
          if (rightBtn) rightBtn.style.cssText = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 ? 'opacity:0;pointer-events:none' : 'opacity:1;pointer-events:auto';
        }}
      >
        <div className="flex gap-2 p-1.5 rounded-xl w-max border border-outline-variant/10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-lg cursor-pointer text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === category
                  ? "bg-primary text-on-primary shadow-lg shadow-primary/20"
                  : "text-on-surface-variant hover:bg-surface-bright hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <button
        type="button"
        id="cat-right"
        onClick={() => {
          const el = document.getElementById('category-scroll');
          if (el) el.scrollBy({ left: 260, behavior: 'smooth' });
        }}
        className="group cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-r-md border border-outline-variant/15 bg-primary text-on-primary shadow-lg transition-all duration-300 hover:bg-surface-container-high"
        aria-label="Scroll categories right"
      >
        <ChevronRightIcon className="w-6 h-6 text-black transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5" />
      </button>
    </div>

    {/* Mobile: filter dropdown button */}
   {/* Mobile: filter dropdown button */}
<div className="md:hidden relative z-50 mb-6">
  <button
    onClick={() => setFilterOpen(!filterOpen)}
    className="flex items-center gap-3 w-full px-4 py-3 bg-surface-container-low border border-outline-variant/20 rounded-lg text-sm font-medium text-white"
  >
    <AlignRightIcon className="w-4 h-4 text-primary" />
    <span>{activeCategory}</span>
    <ChevronRightIcon
      className={`w-4 h-4 ml-auto text-on-surface-variant transition-transform duration-200 ${
        filterOpen ? 'rotate-90' : ''
      }`}
    />
  </button>

  {filterOpen && (
    <div className="mt-2 bg-surface-container-high border border-outline-variant/20 rounded-lg overflow-hidden shadow-xl max-h-72 overflow-y-auto">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => {
            setActiveCategory(category);
            setFilterOpen(false);
          }}
          className={`w-full text-left px-4 py-3 text-sm transition-colors flex items-center justify-between ${
            activeCategory === category
              ? 'text-primary font-medium bg-surface-bright'
              : 'text-on-surface-variant hover:bg-surface-bright hover:text-white'
          }`}
        >
          {category}
          {activeCategory === category && <span className="text-primary text-xs">✓</span>}
        </button>
      ))}
    </div>
  )}
</div>

  </section>
</FadeInSection>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 min-h-[400px]">
        {filteredProducts.map((product) => (
          <FadeInSection key={product.id}>
            <div className="group h-full relative bg-surface-container p-1 rounded-xl transition-all duration-500 hover:bg-surface-bright cyan-glow overflow-hidden flex flex-col">
              <div className="relative h-60 md:h-64 w-full mb-6 overflow-hidden rounded-lg">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                  alt={product.name}
                  src={product.image}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-2.5 py-1 bg-background/80 text-primary text-[9px] font-bold uppercase tracking-wider rounded-md backdrop-blur-md border border-primary/20">
                    {product.badge}
                  </span>
                </div>
              </div>
              <div className="px-4 pb-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg md:text-xl font-headline font-bold text-white">{product.name}</h3>
                </div>
                <p className="text-on-surface-variant text-sm font-light leading-relaxed mb-6 h-10 overflow-hidden line-clamp-2">
                  {product.description}
                </p>
                <div className="mt-auto flex justify-between items-center pt-4 border-t border-outline-variant/10">
                  <span className="text-[10px] font-label text-outline uppercase tracking-widest">REF: {product.ref}</span>
                  <a className="flex items-center gap-2 text-primary text-xs font-medium hover:gap-3 transition-all cursor-pointer">
                    View Details <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </FadeInSection>
        ))}
      </section>

      {/* Bottom CTA */}
      <FadeInSection>
        <section className="max-w-7xl mx-auto px-6 md:px-8 mt-20 mb-10">
          <div className="relative p-10 md:p-12 rounded-2xl bg-surface-container-high border border-outline-variant/10 overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-headline font-bold text-white mb-4 relative z-10">Need a Custom Cleanroom Solution?</h2>
            <p className="text-on-surface-variant max-w-lg mx-auto mb-8 relative z-10 text-sm md:text-base">
              Connect with our engineering team for customized cleanroom design, modular OT planning, and facility validation.
            </p>
            <button className="relative z-10 inline-flex items-center gap-3 bg-primary text-on-primary px-8 py-3.5 rounded-lg font-bold uppercase tracking-widest text-xs shadow-[0_0_30px_rgba(0,227,253,0.3)] hover:brightness-110 transition-all duration-300">
              Request Quote
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </FadeInSection>
    </main>
  );
}
