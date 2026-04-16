export interface StaticProduct {
  id: number;
  name: string;
  category: string;
  badge: string;
  description: string;
  ref: string;
  image: string;
}

export const StaticProductsData: StaticProduct[] = [
  // --- Safety Cabinets ---
  {
    id: 10,
    name: "Biological Safety Cabinet - Class 3",
    category: "Safety Cabinets",
    badge: "BSC-III",
    description:
      "Totally enclosed gas-tight cabinet for maximum containment of high-risk biological agents with glove-port access.",
    ref: "SK-BSC3-01",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD-srPOv1rc-ba4nd3-iOfMCA-zs1cg5QO5CvlnkIPH6ldzq8rHgfKMyvnY8Vzmj-j358M405myTL-FoL8b2zY5hFDj3D2oXabiIIbJnXwpt9Gc2eSMuq3waJEO6amlwaS_THy-5Jaz_k-PTmn_9EocRmRMfUT63fuO2xOod8hscHWJEGRuJ0JuClKaQ-l6Xz9A781vxlUzygf-aopC8R8jt7wNOgazZ6oswEMYgpC4bnJm2hRXWq4DEzsLtI0_LyXyTGH_jszd4cZX",
  },
  // --- Access & Containment ---
  {
    id: 11,
    name: "Air Shower",
    category: "Access & Containment",
    badge: "Decontamination",
    description:
      "High-velocity air shower with interlocked doors and programmable cycle for removing particulates before cleanroom entry.",
    ref: "SK-AS-01",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLPiU3oV7my25lNl7crm6M_5gUZfFgy_Q709l-msckCDaYZ8jRQ1MyvwUWblZgL2ePn7Q48UCX3oTvajvc9o1zpvTmaqJMmuLDhiild2tVVcQ0IinQELaMllBiuZ_Q3LzI8H_GpvO70Ot5g0F9Caj2Kj6i-ARqLOObCabN1_LexQDiW2Zz41Onp0YJq7aIFa_qoLwxOveXLQhKgOuIpG8aAT6F8IV0wOUl6vS2qCXnQRH2JOiaMKlJvo_UwoyTBD9phF1x4q2XcqOW",
  },
  {
    id: 12,
    name: "Dispensing Booth / Sampling Booth",
    category: "Access & Containment",
    badge: "Pharma",
    description:
      "Self-contained dispensing and sampling booth with reverse laminar flow for dust-free pharmaceutical powder handling.",
    ref: "SK-DB-01",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1oBA32bpVWUYrcKeU9Su9hpfu1Zdom1JLEhbNfuXWRfma-1jXzbdW2TmoSoHbEYU1tIUo1dkWW9tZivOGlt8gnBbx44iR4e-rGHfImud_UzmESkgzo-gEDJQTskMJy6QCOef5IFXhHcgQ1EyWps0tNRPKr2tIEdYmGP3eZt8OAOBFZE4cNPzIS0kSBK44f6rRmn6nFW4QmaYJYzP6_HFFnyGcPAEKX6FxOi0cmQi_42Du5VOQYZQQt2aK6SlK0PQJ1EEj0Qb-4j0d",
  },
  {
    id: 13,
    name: "Static & Dynamic Pass Box",
    category: "Access & Containment",
    badge: "Material Transfer",
    description:
      "Interlocked pass box for safe material transfer between classified areas, available in static and dynamic HEPA models.",
    ref: "SK-PB-01",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAa1ijZ_QeRAa4AAd0x_tKDqoaTGNyU5LxibESbFI0Sz7WR5Q7gr8JdUJ8lEEbLfuL8u5DpTzhst48B4KK92Dq0naSA00SWlxG40l4o-RQ5nLXUPzxONbx6LjHZsJoR-VNf6HIZLb_3LS5eBFRbV5SltqUtLAC_zQGSceDNIXu01dv970KgYWfgyyX36AMseB3z6053S50lE7d7caQiYLoepo2repvlK7jBDm6bgPPEzVoT2vromRkI1E2cxZ_V7qn-xXHRVoxQMw8W",
  },
  {
    id: 14,
    name: "Garment Cubicle",
    category: "Access & Containment",
    badge: "Gowning",
    description:
      "Dedicated gowning cubicle with step-over bench, mirror, and cleanroom-grade garment storage for personnel entry protocol.",
    ref: "SK-GC-01",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCYkCNWLt4tAKS5p0_9TFI7Fc5KjqR2qmSnOhP3FFKvqPK9PVmQ5M3o55ZvsNgM56AZGoJJrlX9jS4Pm2goy4S5JCFn-4sk3kytLLr6q62CLKRfy5021xLdBCbny5qgOiukFTVCZDfB1wSGTIofct1-fm70uOh0hSYEdzMDj1d_YpcUMm4iSpLMzU2mzHHLqeafjVCnMPRenfkj5XvKKsWM1-_JkjzNP4NE9jdj_vqLsruY5toPGCgkUCySOgcp5fQzBaDDBUNjjzaW",
  },
  // --- Filters & Ventilation ---
  {
    id: 15,
    name: "Filters (HEPA, ULPA)",
    category: "Filters & Ventilation",
    badge: "Filtration",
    description:
      "High-efficiency HEPA (99.97%) and ULPA (99.999%) filters for cleanrooms, AHUs, and laminar flow equipment.",
    ref: "SK-FLT-01",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGNbdpL7_OweMHmvsPTKtGhY1nYlxDYfvfbqbMe821zs7g8nTMAJTUtMZaN2vQ_coghmpdZlOFdM7F0IWzT8EO0ds9VkPufaVLhXnX9Px1cq75RacU9a3PkGMASYI2OM01psHqpB9JwK7r5gZiFTGgJ1tm2kljd6U2RUgMsjQgIy4WY4tMS4GxhIqUfM6jPhNf9SdiboUr1VFOfT9qWspEMHNIfJFKdKDjrCjsZTFGDtZWZ3cGZVhRvcBJavIi_NetVIO7nOHYd7hD",
  },
  {
    id: 16,
    name: "Fume Hood",
    category: "Filters & Ventilation",
    badge: "Chemical Safety",
    description:
      "Chemical fume hood with variable air volume control, sash alarm, and acid-resistant interior for laboratory safety.",
    ref: "SK-FH-01",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAy2QGP28YJGSW8-jjfCIM2jpD4BUw-SY8cb3oI8JWEZuBB1Kmy57f_bmT4XkM7H1ZfVyiMfvwjSy4PfbcrHnGeIGkyzgTjY0tgZtwTUyscetLxt7G53IILLJD4r4DVcg2kyLeJHp99tNg7-zCo67OPbFFxDymt-uIjFpWHt2_AkIKGn9RwI7uZo3xBP5sVYDeGVEYssdrGue30Kvwjx4-50kPQFyC02tJcqqKzA3IvUV1VXkq5SzU1dyRUbyT572WoMLsNWMKGNANI",
  },
  {
    id: 17,
    name: "Air Handling Units",
    category: "Filters & Ventilation",
    badge: "HVAC",
    description:
      "Custom air handling units with multi-stage filtration, precise temperature and humidity control for cleanroom HVAC.",
    ref: "SK-AHU-01",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBKQnnEYpoP5JLeCC6Xji5hy17JwNe_NXZPgZVjcXFVjc-YDWDfij3rKrO7Wy3cfPxKA7U9xWFrFQExQyJ3Nk-YI8OF32YZqhGaI8tKP1e5kJ7vRP58udcmLvg8-1u5dMwewXItttTVTROD1mwEAf7nliTR7ED3j7cnMv39nlwRr40GRPUBv0TLEL7ePCNvZhUhd_trwj_bFxBkochFnjGmbNa1ZvinOtfe7ZYzhIezYe8CixMNtk1bp6h8sQyO0973nJio_19bhc6D",
  },
  // --- Doors & Glass ---
  {
    id: 18,
    name: "Lead Door",
    category: "Doors & Glass",
    badge: "Radiation Shield",
    description:
      "Lead-lined radiation shielding door for X-ray rooms, CT suites, and nuclear medicine facilities.",
    ref: "SK-LD-01",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLPiU3oV7my25lNl7crm6M_5gUZfFgy_Q709l-msckCDaYZ8jRQ1MyvwUWblZgL2ePn7Q48UCX3oTvajvc9o1zpvTmaqJMmuLDhiild2tVVcQ0IinQELaMllBiuZ_Q3LzI8H_GpvO70Ot5g0F9Caj2Kj6i-ARqLOObCabN1_LexQDiW2Zz41Onp0YJq7aIFa_qoLwxOveXLQhKgOuIpG8aAT6F8IV0wOUl6vS2qCXnQRH2JOiaMKlJvo_UwoyTBD9phF1x4q2XcqOW",
  },
  {
    id: 19,
    name: "GI Powder Coated Doors",
    category: "Doors & Glass",
    badge: "GI Doors",
    description:
      "Galvanized iron powder-coated flush doors with anti-bacterial finish for cleanroom and hospital applications.",
    ref: "SK-GID-01",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1oBA32bpVWUYrcKeU9Su9hpfu1Zdom1JLEhbNfuXWRfma-1jXzbdW2TmoSoHbEYU1tIUo1dkWW9tZivOGlt8gnBbx44iR4e-rGHfImud_UzmESkgzo-gEDJQTskMJy6QCOef5IFXhHcgQ1EyWps0tNRPKr2tIEdYmGP3eZt8OAOBFZE4cNPzIS0kSBK44f6rRmn6nFW4QmaYJYzP6_HFFnyGcPAEKX6FxOi0cmQi_42Du5VOQYZQQt2aK6SlK0PQJ1EEj0Qb-4j0d",
  },
  {
    id: 20,
    name: "Stainless Steel Doors",
    category: "Doors & Glass",
    badge: "SS Doors",
    description:
      "Heavy-duty stainless steel doors with flush finish, vision panels, and multiple locking options for GMP areas.",
    ref: "SK-SSD-01",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAa1ijZ_QeRAa4AAd0x_tKDqoaTGNyU5LxibESbFI0Sz7WR5Q7gr8JdUJ8lEEbLfuL8u5DpTzhst48B4KK92Dq0naSA00SWlxG40l4o-RQ5nLXUPzxONbx6LjHZsJoR-VNf6HIZLb_3LS5eBFRbV5SltqUtLAC_zQGSceDNIXu01dv970KgYWfgyyX36AMseB3z6053S50lE7d7caQiYLoepo2repvlK7jBDm6bgPPEzVoT2vromRkI1E2cxZ_V7qn-xXHRVoxQMw8W",
  },
  {
    id: 21,
    name: "Lead Glass with Frames",
    category: "Doors & Glass",
    badge: "Radiation View",
    description:
      "Lead-equivalent viewing glass with precision frames for radiation protection in diagnostic and therapy rooms.",
    ref: "SK-LG-01",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCYkCNWLt4tAKS5p0_9TFI7Fc5KjqR2qmSnOhP3FFKvqPK9PVmQ5M3o55ZvsNgM56AZGoJJrlX9jS4Pm2goy4S5JCFn-4sk3kytLLr6q62CLKRfy5021xLdBCbny5qgOiukFTVCZDfB1wSGTIofct1-fm70uOh0hSYEdzMDj1d_YpcUMm4iSpLMzU2mzHHLqeafjVCnMPRenfkj5XvKKsWM1-_JkjzNP4NE9jdj_vqLsruY5toPGCgkUCySOgcp5fQzBaDDBUNjjzaW",
  },
  {
    id: 22,
    name: "Emergency Exit Doors",
    category: "Doors & Glass",
    badge: "Safety Exit",
    description:
      "Fire-rated emergency exit doors with panic bar hardware, illuminated signage, and code-compliant design.",
    ref: "SK-EED-01",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGNbdpL7_OweMHmvsPTKtGhY1nYlxDYfvfbqbMe821zs7g8nTMAJTUtMZaN2vQ_coghmpdZlOFdM7F0IWzT8EO0ds9VkPufaVLhXnX9Px1cq75RacU9a3PkGMASYI2OM01psHqpB9JwK7r5gZiFTGgJ1tm2kljd6U2RUgMsjQgIy4WY4tMS4GxhIqUfM6jPhNf9SdiboUr1VFOfT9qWspEMHNIfJFKdKDjrCjsZTFGDtZWZ3cGZVhRvcBJavIi_NetVIO7nOHYd7hD",
  },
  {
    id: 23,
    name: "Industrial Doors",
    category: "Doors & Glass",
    badge: "Heavy Duty",
    description:
      "High-speed industrial doors including roller shutters and sliding doors for logistics and manufacturing cleanrooms.",
    ref: "SK-IND-01",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAy2QGP28YJGSW8-jjfCIM2jpD4BUw-SY8cb3oI8JWEZuBB1Kmy57f_bmT4XkM7H1ZfVyiMfvwjSy4PfbcrHnGeIGkyzgTjY0tgZtwTUyscetLxt7G53IILLJD4r4DVcg2kyLeJHp99tNg7-zCo67OPbFFxDymt-uIjFpWHt2_AkIKGn9RwI7uZo3xBP5sVYDeGVEYssdrGue30Kvwjx4-50kPQFyC02tJcqqKzA3IvUV1VXkq5SzU1dyRUbyT572WoMLsNWMKGNANI",
  },
  // --- Modules & Panels ---
  {
    id: 24,
    name: "Surgical Scrub Station",
    category: "Modules & Panels",
    badge: "Scrub Unit",
    description:
      "Sensor-operated surgical scrub station with knee/elbow activation, timer display, and antimicrobial basin.",
    ref: "SK-SSS-01",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBKQnnEYpoP5JLeCC6Xji5hy17JwNe_NXZPgZVjcXFVjc-YDWDfij3rKrO7Wy3cfPxKA7U9xWFrFQExQyJ3Nk-YI8OF32YZqhGaI8tKP1e5kJ7vRP58udcmLvg8-1u5dMwewXItttTVTROD1mwEAf7nliTR7ED3j7cnMv39nlwRr40GRPUBv0TLEL7ePCNvZhUhd_trwj_bFxBkochFnjGmbNa1ZvinOtfe7ZYzhIezYe8CixMNtk1bp6h8sQyO0973nJio_19bhc6D",
  },
  {
    id: 25,
    name: "Positive Pressure Module",
    category: "Modules & Panels",
    badge: "Pressure Control",
    description:
      "Positive pressure isolation module maintaining higher air pressure to prevent contamination ingress into clean areas.",
    ref: "SK-PPM-01",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD-srPOv1rc-ba4nd3-iOfMCA-zs1cg5QO5CvlnkIPH6ldzq8rHgfKMyvnY8Vzmj-j358M405myTL-FoL8b2zY5hFDj3D2oXabiIIbJnXwpt9Gc2eSMuq3waJEO6amlwaS_THy-5Jaz_k-PTmn_9EocRmRMfUT63fuO2xOod8hscHWJEGRuJ0JuClKaQ-l6Xz9A781vxlUzygf-aopC8R8jt7wNOgazZ6oswEMYgpC4bnJm2hRXWq4DEzsLtI0_LyXyTGH_jszd4cZX",
  },
  {
    id: 26,
    name: "Negative Pressure Module",
    category: "Modules & Panels",
    badge: "Isolation",
    description:
      "Negative pressure isolation module for infectious disease containment, preventing airborne pathogen escape.",
    ref: "SK-NPM-01",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuABPsoXhI0sNEakNw04YyS6DKzUMuVXPpu8_EaObmsspb3sGIA0Fr6up8jX7timpFsRad7ZcgmVGT_-qmDdFs-9a2zu3emb2IhkHeTNC1pRS-Kwwu7SgFFfDY6FPiTOOVL3LtDdoF4_vfkK1TDv1HX2V8ZVUmYeT2s2OBM-0HDD5Nx5y_9bVrKZbuYIopxFyKx23zBYUwtTgjUSgOznCE2PRIybqCa2Dpa6mIZ9jKe897JejWaATpDkKaJzWWfAc0Dbx1SIfZDXbcCT",
  },
  {
    id: 27,
    name: "Surgeon Control Panel",
    category: "Modules & Panels",
    badge: "OT Controls",
    description:
      "Centralized touchscreen surgeon control panel for OT lights, AHU, gas alarms, intercom, and environmental monitoring.",
    ref: "SK-SCP-01",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLPiU3oV7my25lNl7crm6M_5gUZfFgy_Q709l-msckCDaYZ8jRQ1MyvwUWblZgL2ePn7Q48UCX3oTvajvc9o1zpvTmaqJMmuLDhiild2tVVcQ0IinQELaMllBiuZ_Q3LzI8H_GpvO70Ot5g0F9Caj2Kj6i-ARqLOObCabN1_LexQDiW2Zz41Onp0YJq7aIFa_qoLwxOveXLQhKgOuIpG8aAT6F8IV0wOUl6vS2qCXnQRH2JOiaMKlJvo_UwoyTBD9phF1x4q2XcqOW",
  },
  // --- Flooring ---
  {
    id: 28,
    name: "Epoxy Flooring",
    category: "Flooring",
    badge: "Seamless",
    description:
      "Self-leveling epoxy flooring system with anti-static, chemical-resistant, and seamless cove finish for cleanrooms.",
    ref: "SK-EF-01",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1oBA32bpVWUYrcKeU9Su9hpfu1Zdom1JLEhbNfuXWRfma-1jXzbdW2TmoSoHbEYU1tIUo1dkWW9tZivOGlt8gnBbx44iR4e-rGHfImud_UzmESkgzo-gEDJQTskMJy6QCOef5IFXhHcgQ1EyWps0tNRPKr2tIEdYmGP3eZt8OAOBFZE4cNPzIS0kSBK44f6rRmn6nFW4QmaYJYzP6_HFFnyGcPAEKX6FxOi0cmQi_42Du5VOQYZQQt2aK6SlK0PQJ1EEj0Qb-4j0d",
  },
  {
    id: 29,
    name: "Vinyl Flooring",
    category: "Flooring",
    badge: "Hygienic",
    description:
      "Homogeneous vinyl sheet flooring with heat-welded seams, anti-microbial properties, and ESD options for clean areas.",
    ref: "SK-VF-01",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAa1ijZ_QeRAa4AAd0x_tKDqoaTGNyU5LxibESbFI0Sz7WR5Q7gr8JdUJ8lEEbLfuL8u5DpTzhst48B4KK92Dq0naSA00SWlxG40l4o-RQ5nLXUPzxONbx6LjHZsJoR-VNf6HIZLb_3LS5eBFRbV5SltqUtLAC_zQGSceDNIXu01dv970KgYWfgyyX36AMseB3z6053S50lE7d7caQiYLoepo2repvlK7jBDm6bgPPEzVoT2vromRkI1E2cxZ_V7qn-xXHRVoxQMw8W",
  },
  // --- Furniture & Accessories ---
  {
    id: 30,
    name: "SS Clean Room Furniture",
    category: "Furniture & Accessories",
    badge: "SS Furniture",
    description:
      "Full range of stainless steel furniture including tables, racks, stools, and trolleys for cleanroom and pharma use.",
    ref: "SK-SSF-01",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCYkCNWLt4tAKS5p0_9TFI7Fc5KjqR2qmSnOhP3FFKvqPK9PVmQ5M3o55ZvsNgM56AZGoJJrlX9jS4Pm2goy4S5JCFn-4sk3kytLLr6q62CLKRfy5021xLdBCbny5qgOiukFTVCZDfB1wSGTIofct1-fm70uOh0hSYEdzMDj1d_YpcUMm4iSpLMzU2mzHHLqeafjVCnMPRenfkj5XvKKsWM1-_JkjzNP4NE9jdj_vqLsruY5toPGCgkUCySOgcp5fQzBaDDBUNjjzaW",
  },
  {
    id: 31,
    name: "Cross Over Bench",
    category: "Furniture & Accessories",
    badge: "Gowning Aid",
    description:
      "Step-over bench for cleanroom gowning areas with shoe storage below, separating dirty and clean zones.",
    ref: "SK-COB-01",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGNbdpL7_OweMHmvsPTKtGhY1nYlxDYfvfbqbMe821zs7g8nTMAJTUtMZaN2vQ_coghmpdZlOFdM7F0IWzT8EO0ds9VkPufaVLhXnX9Px1cq75RacU9a3PkGMASYI2OM01psHqpB9JwK7r5gZiFTGgJ1tm2kljd6U2RUgMsjQgIy4WY4tMS4GxhIqUfM6jPhNf9SdiboUr1VFOfT9qWspEMHNIfJFKdKDjrCjsZTFGDtZWZ3cGZVhRvcBJavIi_NetVIO7nOHYd7hD",
  },
  {
    id: 32,
    name: "Door Interlock Systems",
    category: "Furniture & Accessories",
    badge: "Access Control",
    description:
      "Electronic and pneumatic door interlock systems preventing simultaneous opening of adjacent cleanroom doors.",
    ref: "SK-DIL-01",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBKQnnEYpoP5JLeCC6Xji5hy17JwNe_NXZPgZVjcXFVjc-YDWDfij3rKrO7Wy3cfPxKA7U9xWFrFQExQyJ3Nk-YI8OF32YZqhGaI8tKP1e5kJ7vRP58udcmLvg8-1u5dMwewXItttTVTROD1mwEAf7nliTR7ED3j7cnMv39nlwRr40GRPUBv0TLEL7ePCNvZhUhd_trwj_bFxBkochFnjGmbNa1ZvinOtfe7ZYzhIezYe8CixMNtk1bp6h8sQyO0973nJio_19bhc6D",
  },
  // --- Validation & Certification ---
  {
    id: 33,
    name: "Clean Room QC Certifications",
    category: "Validation & Certification",
    badge: "QC",
    description:
      "Comprehensive ISO 14644 cleanroom qualification including particle count, air velocity, and recovery testing.",
    ref: "SK-QC-01",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD-srPOv1rc-ba4nd3-iOfMCA-zs1cg5QO5CvlnkIPH6ldzq8rHgfKMyvnY8Vzmj-j358M405myTL-FoL8b2zY5hFDj3D2oXabiIIbJnXwpt9Gc2eSMuq3waJEO6amlwaS_THy-5Jaz_k-PTmn_9EocRmRMfUT63fuO2xOod8hscHWJEGRuJ0JuClKaQ-l6Xz9A781vxlUzygf-aopC8R8jt7wNOgazZ6oswEMYgpC4bnJm2hRXWq4DEzsLtI0_LyXyTGH_jszd4cZX",
  },
  {
    id: 34,
    name: "Clean Room Validation",
    category: "Validation & Certification",
    badge: "Validation",
    description:
      "IQ/OQ/PQ validation protocols for cleanroom installations covering all critical parameters per regulatory standards.",
    ref: "SK-CRV-01",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuABPsoXhI0sNEakNw04YyS6DKzUMuVXPpu8_EaObmsspb3sGIA0Fr6up8jX7timpFsRad7ZcgmVGT_-qmDdFs-9a2zu3emb2IhkHeTNC1pRS-Kwwu7SgFFfDY6FPiTOOVL3LtDdoF4_vfkK1TDv1HX2V8ZVUmYeT2s2OBM-0HDD5Nx5y_9bVrKZbuYIopxFyKx23zBYUwtTgjUSgOznCE2PRIybqCa2Dpa6mIZ9jKe897JejWaATpDkKaJzWWfAc0Dbx1SIfZDXbcCT",
  },
  {
    id: 35,
    name: "Modular OT Validation",
    category: "Validation & Certification",
    badge: "MOT Validation",
    description:
      "Complete modular operation theatre validation including air quality, particulate analysis, and microbial assessment.",
    ref: "SK-MOTV-01",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLPiU3oV7my25lNl7crm6M_5gUZfFgy_Q709l-msckCDaYZ8jRQ1MyvwUWblZgL2ePn7Q48UCX3oTvajvc9o1zpvTmaqJMmuLDhiild2tVVcQ0IinQELaMllBiuZ_Q3LzI8H_GpvO70Ot5g0F9Caj2Kj6i-ARqLOObCabN1_LexQDiW2Zz41Onp0YJq7aIFa_qoLwxOveXLQhKgOuIpG8aAT6F8IV0wOUl6vS2qCXnQRH2JOiaMKlJvo_UwoyTBD9phF1x4q2XcqOW",
  },
  {
    id: 36,
    name: "Equipment Validation (NABL)",
    category: "Validation & Certification",
    badge: "NABL",
    description:
      "NABL-accredited equipment validation services for HEPA filters, LAF, BSC, and AHU with calibrated instruments.",
    ref: "SK-NABL-01",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1oBA32bpVWUYrcKeU9Su9hpfu1Zdom1JLEhbNfuXWRfma-1jXzbdW2TmoSoHbEYU1tIUo1dkWW9tZivOGlt8gnBbx44iR4e-rGHfImud_UzmESkgzo-gEDJQTskMJy6QCOef5IFXhHcgQ1EyWps0tNRPKr2tIEdYmGP3eZt8OAOBFZE4cNPzIS0kSBK44f6rRmn6nFW4QmaYJYzP6_HFFnyGcPAEKX6FxOi0cmQi_42Du5VOQYZQQt2aK6SlK0PQJ1EEj0Qb-4j0d",
  },
  // --- AMC & Services ---
  {
    id: 37,
    name: "Clean Room AMC",
    category: "AMC & Services",
    badge: "Maintenance",
    description:
      "Annual maintenance contracts for cleanroom facilities including filter replacement, calibration, and re-validation.",
    ref: "SK-CRAMC-01",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAa1ijZ_QeRAa4AAd0x_tKDqoaTGNyU5LxibESbFI0Sz7WR5Q7gr8JdUJ8lEEbLfuL8u5DpTzhst48B4KK92Dq0naSA00SWlxG40l4o-RQ5nLXUPzxONbx6LjHZsJoR-VNf6HIZLb_3LS5eBFRbV5SltqUtLAC_zQGSceDNIXu01dv970KgYWfgyyX36AMseB3z6053S50lE7d7caQiYLoepo2repvlK7jBDm6bgPPEzVoT2vromRkI1E2cxZ_V7qn-xXHRVoxQMw8W",
  },
  {
    id: 38,
    name: "Modular OT AMC",
    category: "AMC & Services",
    badge: "MOT Service",
    description:
      "Comprehensive AMC for modular OTs covering HVAC, electrical, panel maintenance, and periodic re-certification.",
    ref: "SK-MOTAMC-01",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCYkCNWLt4tAKS5p0_9TFI7Fc5KjqR2qmSnOhP3FFKvqPK9PVmQ5M3o55ZvsNgM56AZGoJJrlX9jS4Pm2goy4S5JCFn-4sk3kytLLr6q62CLKRfy5021xLdBCbny5qgOiukFTVCZDfB1wSGTIofct1-fm70uOh0hSYEdzMDj1d_YpcUMm4iSpLMzU2mzHHLqeafjVCnMPRenfkj5XvKKsWM1-_JkjzNP4NE9jdj_vqLsruY5toPGCgkUCySOgcp5fQzBaDDBUNjjzaW",
  },
  {
    id: 39,
    name: "Clean Room Equipment Services",
    category: "AMC & Services",
    badge: "Equipment",
    description:
      "On-demand repair and servicing of all cleanroom equipment including LAF, BSC, pass boxes, and air showers.",
    ref: "SK-CRES-01",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGNbdpL7_OweMHmvsPTKtGhY1nYlxDYfvfbqbMe821zs7g8nTMAJTUtMZaN2vQ_coghmpdZlOFdM7F0IWzT8EO0ds9VkPufaVLhXnX9Px1cq75RacU9a3PkGMASYI2OM01psHqpB9JwK7r5gZiFTGgJ1tm2kljd6U2RUgMsjQgIy4WY4tMS4GxhIqUfM6jPhNf9SdiboUr1VFOfT9qWspEMHNIfJFKdKDjrCjsZTFGDtZWZ3cGZVhRvcBJavIi_NetVIO7nOHYd7hD",
  },
  {
    id: 40,
    name: "Air Handling Units Services",
    category: "AMC & Services",
    badge: "AHU Service",
    description:
      "Specialized AHU maintenance including coil cleaning, motor servicing, filter replacement, and balancing.",
    ref: "SK-AHUS-01",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAy2QGP28YJGSW8-jjfCIM2jpD4BUw-SY8cb3oI8JWEZuBB1Kmy57f_bmT4XkM7H1ZfVyiMfvwjSy4PfbcrHnGeIGkyzgTjY0tgZtwTUyscetLxt7G53IILLJD4r4DVcg2kyLeJHp99tNg7-zCo67OPbFFxDymt-uIjFpWHt2_AkIKGn9RwI7uZo3xBP5sVYDeGVEYssdrGue30Kvwjx4-50kPQFyC02tJcqqKzA3IvUV1VXkq5SzU1dyRUbyT572WoMLsNWMKGNANI",
  },
  // --- Design & Drafting ---
  {
    id: 41,
    name: "3D Visualization & Virtual Prototyping",
    category: "Design & Drafting",
    badge: "3D Design",
    description:
      "Integrated 3D visualization and virtual prototyping for cleanrooms and OTs before construction begins.",
    ref: "SK-3DV-01",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBKQnnEYpoP5JLeCC6Xji5hy17JwNe_NXZPgZVjcXFVjc-YDWDfij3rKrO7Wy3cfPxKA7U9xWFrFQExQyJ3Nk-YI8OF32YZqhGaI8tKP1e5kJ7vRP58udcmLvg8-1u5dMwewXItttTVTROD1mwEAf7nliTR7ED3j7cnMv39nlwRr40GRPUBv0TLEL7ePCNvZhUhd_trwj_bFxBkochFnjGmbNa1ZvinOtfe7ZYzhIezYe8CixMNtk1bp6h8sQyO0973nJio_19bhc6D",
  },
  {
    id: 42,
    name: "Cleanroom & MOT Layout Drafting",
    category: "Design & Drafting",
    badge: "Drafting",
    description:
      "Professional layout drafting for cleanrooms and modular OTs with compliance to GMP, ISO, and NABH standards.",
    ref: "SK-DRF-01",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD-srPOv1rc-ba4nd3-iOfMCA-zs1cg5QO5CvlnkIPH6ldzq8rHgfKMyvnY8Vzmj-j358M405myTL-FoL8b2zY5hFDj3D2oXabiIIbJnXwpt9Gc2eSMuq3waJEO6amlwaS_THy-5Jaz_k-PTmn_9EocRmRMfUT63fuO2xOod8hscHWJEGRuJ0JuClKaQ-l6Xz9A781vxlUzygf-aopC8R8jt7wNOgazZ6oswEMYgpC4bnJm2hRXWq4DEzsLtI0_LyXyTGH_jszd4cZX",
  },
];