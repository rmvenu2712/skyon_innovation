export interface DynamicProduct {
  id: number;
  slug: string;
  name: string;
  category: string;
  badge: string;
  shortDescription: string;
  longDescription: string;
  heading1: string;
  heading2: string;
  ref: string;
  image1: string;
  image2: string;
  specs: { label: string; value: string }[];
}

export const DynamicProductsData: DynamicProduct[] = [
  {
    id: 1,
    slug: "modular-operation-theatre",
    name: "Modular Operation Theatre",
    category: "Clean Room Systems",
    badge: "MOT",
    ref: "SK-MOT-01",
    shortDescription:
      "Fully integrated modular OT with HEPA filtration, seamless wall panels, and controlled air flow for sterile surgical environments.",
    longDescription:
      "Our Modular Operation Theatre is a complete turnkey surgical environment engineered to the highest standards of sterility and functionality. Built with pre-fabricated modular panels featuring seamless joints and anti-microbial coating, the MOT eliminates particle-harboring crevices that conventional construction cannot avoid. The integrated ceiling-suspended LAF unit maintains ISO Class 5 air quality directly over the surgical field, while a multi-zone HVAC system maintains precise positive pressure differentials between the OT core, scrub zone, and exit corridors. Electrical systems include isolated power supply panels, dedicated medical gas outlets (O₂, N₂O, vacuum, air), and a UPS-backed surgical lighting circuit. The surgeon control panel centralises environment monitoring — temperature, humidity, air changes per hour, gas alarms, and intercom — on a single touchscreen interface. Every MOT is delivered with a complete IQ/OQ/PQ validation dossier compliant with NABH, CGMP, and ISO 14644 standards, enabling immediate regulatory-ready commissioning.",
    heading1: "Precision-Engineered Sterile Core",
    heading2: "Validated, Regulation-Ready from Day One",
    image1:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLPiU3oV7my25lNl7crm6M_5gUZfFgy_Q709l-msckCDaYZ8jRQ1MyvwUWblZgL2ePn7Q48UCX3oTvajvc9o1zpvTmaqJMmuLDhiild2tVVcQ0IinQELaMllBiuZ_Q3LzI8H_GpvO70Ot5g0F9Caj2Kj6i-ARqLOObCabN1_LexQDiW2Zz41Onp0YJq7aIFa_qoLwxOveXLQhKgOuIpG8aAT6F8IV0wOUl6vS2qCXnQRH2JOiaMKlJvo_UwoyTBD9phF1x4q2XcqOW",
    image2:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCYkCNWLt4tAKS5p0_9TFI7Fc5KjqR2qmSnOhP3FFKvqPK9PVmQ5M3o55ZvsNgM56AZGoJJrlX9jS4Pm2goy4S5JCFn-4sk3kytLLr6q62CLKRfy5021xLdBCbny5qgOiukFTVCZDfB1wSGTIofct1-fm70uOh0hSYEdzMDj1d_YpcUMm4iSpLMzU2mzHHLqeafjVCnMPRenfkj5XvKKsWM1-_JkjzNP4NE9jdj_vqLsruY5toPGCgkUCySOgcp5fQzBaDDBUNjjzaW",
    specs: [
      { label: "Air Classification", value: "ISO Class 5 (Over Table)" },
      { label: "Air Changes/hr", value: "25–35 ACH (Recirculated)" },
      { label: "Pressure Differential", value: "+15 Pa OT vs Corridor" },
      { label: "Wall System", value: "Modular Aluminium Frame Panels" },
      { label: "Compliance", value: "NABH, CGMP, ISO 14644-1" },
    ],
  },
  {
    id: 2,
    slug: "clean-room",
    name: "Clean Room",
    category: "Clean Room Systems",
    badge: "ISO Certified",
    ref: "SK-CR-01",
    shortDescription:
      "Turnkey cleanroom solutions with ISO Class 5-8 compliance, modular wall systems, and integrated environmental controls.",
    longDescription:
      "Skyon's turnkey cleanrooms are designed and built from the ground up for pharmaceutical manufacturing, semiconductor processing, medical device assembly, and biotechnology research. The modular wall system uses double-skin GI or aluminium panels filled with rock wool insulation, offering thermal stability and acoustic dampening while maintaining perfectly flush, cleanable interior surfaces. Ceiling grids accommodate HEPA or ULPA terminal filter units with adjustable airflow velocities. Each cleanroom is sized and classified per ISO 14644-1 requirements from Class 5 through Class 8, with full documentation of unidirectional or turbulent flow design, particle count sampling plans, and pressure cascade maps. Our in-house HVAC engineering team integrates dedicated air handling units with chilled water cooling coils, electric or steam humidification, and multi-stage pre-filtration. Post-installation, Skyon provides comprehensive DQ/IQ/OQ/PQ qualification services using NIST-traceable instruments, producing a validation package accepted by FDA, CDSCO, and EU GMP auditors.",
    heading1: "Modular Construction, Uncompromising Cleanliness",
    heading2: "End-to-End Qualification & Compliance",
    image1:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD-srPOv1rc-ba4nd3-iOfMCA-zs1cg5QO5CvlnkIPH6ldzq8rHgfKMyvnY8Vzmj-j358M405myTL-FoL8b2zY5hFDj3D2oXabiIIbJnXwpt9Gc2eSMuq3waJEO6amlwaS_THy-5Jaz_k-PTmn_9EocRmRMfUT63fuO2xOod8hscHWJEGRuJ0JuClKaQ-l6Xz9A781vxlUzygf-aopC8R8jt7wNOgazZ6oswEMYgpC4bnJm2hRXWq4DEzsLtI0_LyXyTGH_jszd4cZX",
    image2:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuABPsoXhI0sNEakNw04YyS6DKzUMuVXPpu8_EaObmsspb3sGIA0Fr6up8jX7timpFsRad7ZcgmVGT_-qmDdFs-9a2zu3emb2IhkHeTNC1pRS-Kwwu7SgFFfDY6FPiTOOVL3LtDdoF4_vfkK1TDv1HX2V8ZVUmYeT2s2OBM-0HDD5Nx5y_9bVrKZbuYIopxFyKx23zBYUwtTgjUSgOznCE2PRIybqCa2Dpa6mIZ9jKe897JejWaATpDkKaJzWWfAc0Dbx1SIfZDXbcCT",
    specs: [
      { label: "ISO Classification", value: "Class 5–8 (ISO 14644-1)" },
      { label: "Wall System", value: "Double-Skin GI / Aluminium" },
      { label: "Filter Options", value: "HEPA H14 / ULPA U15" },
      { label: "Humidity Control", value: "40–60% RH ± 5%" },
      { label: "Regulatory Acceptance", value: "FDA, CDSCO, EU GMP" },
    ],
  },
  {
    id: 3,
    slug: "ivf-clean-room",
    name: "IVF Clean Room",
    category: "Clean Room Systems",
    badge: "Specialized",
    ref: "SK-IVF-01",
    shortDescription:
      "Purpose-built IVF lab cleanroom with precise temperature, humidity, and VOC control for embryology applications.",
    longDescription:
      "The IVF Cleanroom is a highly specialised environment where every environmental parameter has direct consequences for embryo viability and patient outcomes. Skyon's IVF lab cleanrooms go beyond standard ISO classification to address the unique sensitivity of gametes and embryos to volatile organic compounds (VOCs), airborne particulates, and temperature fluctuations. We deploy activated carbon pre-filtration stages in addition to HEPA terminal units to achieve VOC levels below 0.5 ppm within the culture zone. Temperature uniformity across the work surface is maintained within ±0.5°C through precision-controlled radiant ceiling panels supplementing the HVAC system. The design incorporates dedicated zones for oocyte retrieval, fertilisation, culture, and cryopreservation, each with appropriate pressure relationships and air change rates. Construction materials are selected for zero off-gassing, and all sealants, paints, and adhesives are embryo-toxicity tested before use. Full environmental monitoring with data logging of temperature, humidity, CO₂, and particle counts is integrated, with alarm escalation to mobile devices.",
    heading1: "Ultra-Low VOC Environment for Embryo Culture",
    heading2: "Zone-Specific Design for IVF Workflow",
    image1:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuABPsoXhI0sNEakNw04YyS6DKzUMuVXPpu8_EaObmsspb3sGIA0Fr6up8jX7timpFsRad7ZcgmVGT_-qmDdFs-9a2zu3emb2IhkHeTNC1pRS-Kwwu7SgFFfDY6FPiTOOVL3LtDdoF4_vfkK1TDv1HX2V8ZVUmYeT2s2OBM-0HDD5Nx5y_9bVrKZbuYIopxFyKx23zBYUwtTgjUSgOznCE2PRIybqCa2Dpa6mIZ9jKe897JejWaATpDkKaJzWWfAc0Dbx1SIfZDXbcCT",
    image2:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGNbdpL7_OweMHmvsPTKtGhY1nYlxDYfvfbqbMe821zs7g8nTMAJTUtMZaN2vQ_coghmpdZlOFdM7F0IWzT8EO0ds9VkPufaVLhXnX9Px1cq75RacU9a3PkGMASYI2OM01psHqpB9JwK7r5gZiFTGgJ1tm2kljd6U2RUgMsjQgIy4WY4tMS4GxhIqUfM6jPhNf9SdiboUr1VFOfT9qWspEMHNIfJFKdKDjrCjsZTFGDtZWZ3cGZVhRvcBJavIi_NetVIO7nOHYd7hD",
    specs: [
      { label: "VOC Level", value: "< 0.5 ppm (Culture Zone)" },
      { label: "Temperature Uniformity", value: "±0.5°C" },
      { label: "Filtration", value: "Activated Carbon + HEPA H14" },
      { label: "Monitoring", value: "Continuous EMS with Mobile Alarms" },
      { label: "Material Standard", value: "Embryo-Toxicity Tested" },
    ],
  },
  {
    id: 4,
    slug: "inoculation-chamber",
    name: "Inoculation Chamber",
    category: "Clean Room Systems",
    badge: "Micro Lab",
    ref: "SK-IC-01",
    shortDescription:
      "Sterile inoculation chamber with UV sterilization, HEPA filtration, and ergonomic access ports for microbiology work.",
    longDescription:
      "The Inoculation Chamber is a compact, self-contained sterile workstation designed for microbiological transfer, plating, and culture work that demands an ISO Class 5 environment without the footprint of a full cleanroom. Constructed from 18-gauge SS 304 with radius corners and electropolished interior surfaces, the chamber is easy to wipe down with standard disinfectants. HEPA filtered unidirectional airflow sweeps the work surface from rear to front, maintaining a positive air curtain that prevents ambient contamination from entering. A germicidal UV-C lamp (254 nm) provides supplementary surface decontamination when the chamber is unoccupied, with interlocked safety controls preventing UV exposure during operation. Ergonomic access ports with optional sleeves allow hands-on work while maintaining the integrity of the clean zone. The chamber is available in bench-top and floor-standing configurations, with options for integrated electrical outlets, internal LED lighting, and a removable stainless work tray for easy autoclaving.",
    heading1: "ISO Class 5 Sterility in a Compact Footprint",
    heading2: "Ergonomic Access Without Compromise",
    image1:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGNbdpL7_OweMHmvsPTKtGhY1nYlxDYfvfbqbMe821zs7g8nTMAJTUtMZaN2vQ_coghmpdZlOFdM7F0IWzT8EO0ds9VkPufaVLhXnX9Px1cq75RacU9a3PkGMASYI2OM01psHqpB9JwK7r5gZiFTGgJ1tm2kljd6U2RUgMsjQgIy4WY4tMS4GxhIqUfM6jPhNf9SdiboUr1VFOfT9qWspEMHNIfJFKdKDjrCjsZTFGDtZWZ3cGZVhRvcBJavIi_NetVIO7nOHYd7hD",
    image2:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1oBA32bpVWUYrcKeU9Su9hpfu1Zdom1JLEhbNfuXWRfma-1jXzbdW2TmoSoHbEYU1tIUo1dkWW9tZivOGlt8gnBbx44iR4e-rGHfImud_UzmESkgzo-gEDJQTskMJy6QCOef5IFXhHcgQ1EyWps0tNRPKr2tIEdYmGP3eZt8OAOBFZE4cNPzIS0kSBK44f6rRmn6nFW4QmaYJYzP6_HFFnyGcPAEKX6FxOi0cmQi_42Du5VOQYZQQt2aK6SlK0PQJ1EEj0Qb-4j0d",
    specs: [
      { label: "Air Classification", value: "ISO Class 5" },
      { label: "Construction", value: "SS 304, Electropolished Interior" },
      { label: "UV Decontamination", value: "254 nm Germicidal UV-C" },
      { label: "Airflow", value: "Unidirectional Rear-to-Front" },
      { label: "Options", value: "Bench-Top / Floor-Standing" },
    ],
  },
  {
    id: 5,
    slug: "vertical-laminar-flow-cabinet",
    name: "Vertical Laminar Flow Cabinet",
    category: "Laminar Flow",
    badge: "VLFC",
    ref: "SK-VLFC-01",
    shortDescription:
      "Vertical laminar air flow cabinet providing ISO Class 5 clean air for sensitive sample handling and pharmaceutical work.",
    longDescription:
      "The Vertical Laminar Flow Cabinet (VLFC) delivers a continuous curtain of ultra-clean air vertically downward across the work surface, creating an ISO Class 5 environment ideal for non-hazardous pharmaceutical compounding, electronic component assembly, and sensitive biological sample handling. Air is drawn through a plenum chamber housing a pre-filter and an H14 HEPA filter, then discharged at a uniform velocity of 0.45 m/s ±20% across the full work area. The cabinet's powder-coated steel outer shell encloses an electropolished SS 304 interior chamber. A magnehelic gauge provides continuous HEPA filter differential pressure indication, alerting users to filter loading before clean room integrity is compromised. VLFCs are available in widths from 900 mm to 2400 mm, all featuring an energy-efficient EC fan motor with variable speed control to compensate for filter loading over its service life. Optional UV sterilisation lamps and internal power sockets are available.",
    heading1: "Downflow Air Curtain for Product Protection",
    heading2: "Built for Long-Term Reliability",
    image1:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1oBA32bpVWUYrcKeU9Su9hpfu1Zdom1JLEhbNfuXWRfma-1jXzbdW2TmoSoHbEYU1tIUo1dkWW9tZivOGlt8gnBbx44iR4e-rGHfImud_UzmESkgzo-gEDJQTskMJy6QCOef5IFXhHcgQ1EyWps0tNRPKr2tIEdYmGP3eZt8OAOBFZE4cNPzIS0kSBK44f6rRmn6nFW4QmaYJYzP6_HFFnyGcPAEKX6FxOi0cmQi_42Du5VOQYZQQt2aK6SlK0PQJ1EEj0Qb-4j0d",
    image2:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAa1ijZ_QeRAa4AAd0x_tKDqoaTGNyU5LxibESbFI0Sz7WR5Q7gr8JdUJ8lEEbLfuL8u5DpTzhst48B4KK92Dq0naSA00SWlxG40l4o-RQ5nLXUPzxONbx6LjHZsJoR-VNf6HIZLb_3LS5eBFRbV5SltqUtLAC_zQGSceDNIXu01dv970KgYWfgyyX36AMseB3z6053S50lE7d7caQiYLoepo2repvlK7jBDm6bgPPEzVoT2vromRkI1E2cxZ_V7qn-xXHRVoxQMw8W",
    specs: [
      { label: "Air Classification", value: "ISO Class 5" },
      { label: "HEPA Filter Grade", value: "H14 (99.995% @ 0.3 µm)" },
      { label: "Face Velocity", value: "0.45 m/s ± 20%" },
      { label: "Available Widths", value: "900 – 2400 mm" },
      { label: "Fan Motor", value: "EC Variable Speed" },
    ],
  },
  {
    id: 6,
    slug: "horizontal-laminar-flow-cabinet",
    name: "Horizontal Laminar Flow Cabinet",
    category: "Laminar Flow",
    badge: "HLFC",
    ref: "SK-HLFC-01",
    shortDescription:
      "Horizontal laminar flow workstation with uniform air curtain across the work surface for contamination-free processing.",
    longDescription:
      "The Horizontal Laminar Flow Cabinet directs HEPA-filtered clean air horizontally across the work surface towards the operator, creating a positive pressure environment that sweeps particles away from the product. This airflow direction makes the HLFC particularly suited to ophthalmic preparations, sterile media plate pouring, microelectronics assembly, and any process where product protection is paramount and operator exposure to the material is not a concern. The rear-mounted plenum contains a pre-filter for coarse particle removal and an H14 HEPA panel for final filtration. The work surface is a solid 316L stainless steel platform with perforated rear discharge face and side perforated panels to ensure uniform cross-flow. Digital microprocessor control displays fan speed, filter pressure differential, and alarm status on a front-panel LCD. Optional integrated UV lamp, fluorescent or LED work lighting, and side glass panels are available for configurations requiring visibility into the work zone from all angles.",
    heading1: "Cross-Flow Protection for Sensitive Products",
    heading2: "Digital Control & Continuous Monitoring",
    image1:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAa1ijZ_QeRAa4AAd0x_tKDqoaTGNyU5LxibESbFI0Sz7WR5Q7gr8JdUJ8lEEbLfuL8u5DpTzhst48B4KK92Dq0naSA00SWlxG40l4o-RQ5nLXUPzxONbx6LjHZsJoR-VNf6HIZLb_3LS5eBFRbV5SltqUtLAC_zQGSceDNIXu01dv970KgYWfgyyX36AMseB3z6053S50lE7d7caQiYLoepo2repvlK7jBDm6bgPPEzVoT2vromRkI1E2cxZ_V7qn-xXHRVoxQMw8W",
    image2:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCYkCNWLt4tAKS5p0_9TFI7Fc5KjqR2qmSnOhP3FFKvqPK9PVmQ5M3o55ZvsNgM56AZGoJJrlX9jS4Pm2goy4S5JCFn-4sk3kytLLr6q62CLKRfy5021xLdBCbny5qgOiukFTVCZDfB1wSGTIofct1-fm70uOh0hSYEdzMDj1d_YpcUMm4iSpLMzU2mzHHLqeafjVCnMPRenfkj5XvKKsWM1-_JkjzNP4NE9jdj_vqLsruY5toPGCgkUCySOgcp5fQzBaDDBUNjjzaW",
    specs: [
      { label: "Airflow Direction", value: "Horizontal (Rear to Front)" },
      { label: "HEPA Filter Grade", value: "H14" },
      { label: "Work Surface", value: "316L SS Perforated Platform" },
      { label: "Control", value: "Digital Microprocessor LCD" },
      { label: "Available Widths", value: "900 – 1800 mm" },
    ],
  },
  {
    id: 7,
    slug: "ceiling-suspended-laf-unit",
    name: "Ceiling Suspended LAF Unit",
    category: "Laminar Flow",
    badge: "Ceiling Mount",
    ref: "SK-CLAF-01",
    shortDescription:
      "Ceiling-mounted LAF unit delivering ultra-clean downflow air for OT and critical process areas with minimal footprint.",
    longDescription:
      "The Ceiling Suspended Laminar Air Flow (LAF) Unit is designed to deliver a column of ISO Class 5 unidirectional downflow air over critical work zones — operating tables, filling lines, or aseptic staging areas — without consuming any floor or wall space. Suspended from the structural ceiling or a dedicated support frame, the unit houses a bank of H14 HEPA filters in a plenum fed by a remote AHU or an integral EC fan module. The clean canopy dimensions are customisable from 1.2 m × 1.2 m to 3.0 m × 3.0 m, and units can be daisy-chained for larger coverage areas. The downflow velocity is factory-set and field-adjustable within a range of 0.25–0.50 m/s to suit the specific application. A stainless steel perforated face provides uniform air distribution without turbulence-inducing obstacles. Integration with building management systems is possible via 0–10V analogue or Modbus RTU interfaces. Optional motorised lift systems allow the unit to be raised for maintenance access without disturbing the sterile environment.",
    heading1: "Column of Sterility Over Critical Zones",
    heading2: "Scalable Coverage, Minimal Intrusion",
    image1:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCYkCNWLt4tAKS5p0_9TFI7Fc5KjqR2qmSnOhP3FFKvqPK9PVmQ5M3o55ZvsNgM56AZGoJJrlX9jS4Pm2goy4S5JCFn-4sk3kytLLr6q62CLKRfy5021xLdBCbny5qgOiukFTVCZDfB1wSGTIofct1-fm70uOh0hSYEdzMDj1d_YpcUMm4iSpLMzU2mzHHLqeafjVCnMPRenfkj5XvKKsWM1-_JkjzNP4NE9jdj_vqLsruY5toPGCgkUCySOgcp5fQzBaDDBUNjjzaW",
    image2:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1oBA32bpVWUYrcKeU9Su9hpfu1Zdom1JLEhbNfuXWRfma-1jXzbdW2TmoSoHbEYU1tIUo1dkWW9tZivOGlt8gnBbx44iR4e-rGHfImud_UzmESkgzo-gEDJQTskMJy6QCOef5IFXhHcgQ1EyWps0tNRPKr2tIEdYmGP3eZt8OAOBFZE4cNPzIS0kSBK44f6rRmn6nFW4QmaYJYzP6_HFFnyGcPAEKX6FxOi0cmQi_42Du5VOQYZQQt2aK6SlK0PQJ1EEj0Qb-4j0d",
    specs: [
      { label: "Air Classification", value: "ISO Class 5" },
      { label: "Canopy Sizes", value: "1.2×1.2 m to 3.0×3.0 m" },
      { label: "Downflow Velocity", value: "0.25–0.50 m/s (Adjustable)" },
      { label: "Filter", value: "H14 HEPA Bank" },
      { label: "BMS Integration", value: "0–10V / Modbus RTU" },
    ],
  },
  {
    id: 8,
    slug: "biological-safety-cabinet-class-1",
    name: "Biological Safety Cabinet - Class 1",
    category: "Safety Cabinets",
    badge: "BSC-I",
    ref: "SK-BSC1-01",
    shortDescription:
      "Personnel protection cabinet with inward airflow and HEPA-filtered exhaust for low-to-moderate risk biological agents.",
    longDescription:
      "The Class 1 Biological Safety Cabinet provides personnel and environmental protection when working with Risk Group 1 and 2 microorganisms, toxic chemicals, and radioactive materials that do not require product protection. Unfiltered room air is drawn inward through the open front by a negative pressure plenum, sweeping any generated aerosols away from the operator. Exhaust air passes through a high-efficiency H14 HEPA filter before discharge to room or external ductwork, ensuring that biological agents are captured before leaving the work environment. The 316L SS interior is seam-welded with coved corners for easy decontamination. An alarm system monitors sash position and filter differential pressure, alerting the user to unsafe conditions. NSF/ANSI 49 and EN 12469 compliant, the Class 1 BSC is widely used in microbiology, TB testing, cytotoxic drug preparation, and radioisotope handling laboratories. Cabinets are available in 600 mm, 900 mm, 1200 mm, and 1500 mm nominal widths with recirculating or total exhaust configurations.",
    heading1: "Negative Pressure Personnel Protection",
    heading2: "NSF/ANSI 49 & EN 12469 Compliant",
    image1:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAy2QGP28YJGSW8-jjfCIM2jpD4BUw-SY8cb3oI8JWEZuBB1Kmy57f_bmT4XkM7H1ZfVyiMfvwjSy4PfbcrHnGeIGkyzgTjY0tgZtwTUyscetLxt7G53IILLJD4r4DVcg2kyLeJHp99tNg7-zCo67OPbFFxDymt-uIjFpWHt2_AkIKGn9RwI7uZo3xBP5sVYDeGVEYssdrGue30Kvwjx4-50kPQFyC02tJcqqKzA3IvUV1VXkq5SzU1dyRUbyT572WoMLsNWMKGNANI",
    image2:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBKQnnEYpoP5JLeCC6Xji5hy17JwNe_NXZPgZVjcXFVjc-YDWDfij3rKrO7Wy3cfPxKA7U9xWFrFQExQyJ3Nk-YI8OF32YZqhGaI8tKP1e5kJ7vRP58udcmLvg8-1u5dMwewXItttTVTROD1mwEAf7nliTR7ED3j7cnMv39nlwRr40GRPUBv0TLEL7ePCNvZhUhd_trwj_bFxBkochFnjGmbNa1ZvinOtfe7ZYzhIezYe8CixMNtk1bp6h8sQyO0973nJio_19bhc6D",
    specs: [
      { label: "Protection", value: "Personnel & Environment" },
      { label: "Airflow", value: "Inward (Negative Pressure)" },
      { label: "Exhaust Filter", value: "H14 HEPA" },
      { label: "Interior", value: "316L SS, Seam-Welded, Coved" },
      { label: "Standards", value: "NSF/ANSI 49, EN 12469" },
    ],
  },
  {
    id: 9,
    slug: "biological-safety-cabinet-class-2",
    name: "Biological Safety Cabinet - Class 2",
    category: "Safety Cabinets",
    badge: "BSC-II",
    ref: "SK-BSC2-01",
    shortDescription:
      "Dual-protection cabinet providing both personnel and product protection with HEPA-filtered downflow and exhaust.",
    longDescription:
      "The Class 2 Biological Safety Cabinet is the most widely used containment device in clinical and research laboratories, providing simultaneous protection for the operator, the product, and the environment. A portion of the recirculated air is passed through a supply HEPA filter and discharged downward over the work surface as an ISO Class 5 clean air curtain, protecting cultures and preparations from environmental contamination. Simultaneously, the inward air barrier at the open front protects the operator from generated aerosols. Exhaust air is filtered through a second H14 HEPA before release. Skyon offers Type A2 cabinets (70% recirculation, 30% exhaust) and Type B2 cabinets (100% exhaust for volatile chemical use). Microprocessor controls display airflow velocities, filter status, UV timer, and alarm conditions. The optional ergonomic sloped front panel and anti-fatigue mat configurations are available for labs with intensive daily use. Cabinets are NSF/ANSI 49 certified and EN 12469 compliant.",
    heading1: "Triple Protection: Operator, Product, Environment",
    heading2: "Type A2 & B2 Configurations Available",
    image1:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBKQnnEYpoP5JLeCC6Xji5hy17JwNe_NXZPgZVjcXFVjc-YDWDfij3rKrO7Wy3cfPxKA7U9xWFrFQExQyJ3Nk-YI8OF32YZqhGaI8tKP1e5kJ7vRP58udcmLvg8-1u5dMwewXItttTVTROD1mwEAf7nliTR7ED3j7cnMv39nlwRr40GRPUBv0TLEL7ePCNvZhUhd_trwj_bFxBkochFnjGmbNa1ZvinOtfe7ZYzhIezYe8CixMNtk1bp6h8sQyO0973nJio_19bhc6D",
    image2:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAy2QGP28YJGSW8-jjfCIM2jpD4BUw-SY8cb3oI8JWEZuBB1Kmy57f_bmT4XkM7H1ZfVyiMfvwjSy4PfbcrHnGeIGkyzgTjY0tgZtwTUyscetLxt7G53IILLJD4r4DVcg2kyLeJHp99tNg7-zCo67OPbFFxDymt-uIjFpWHt2_AkIKGn9RwI7uZo3xBP5sVYDeGVEYssdrGue30Kvwjx4-50kPQFyC02tJcqqKzA3IvUV1VXkq5SzU1dyRUbyT572WoMLsNWMKGNANI",
    specs: [
      { label: "Protection", value: "Operator + Product + Environment" },
      { label: "Supply Filter", value: "H14 HEPA (ISO Class 5 Downflow)" },
      { label: "Cabinet Types", value: "A2 (70% Recirc) / B2 (100% Exhaust)" },
      { label: "Controls", value: "Microprocessor LCD, Airflow Display" },
      { label: "Standards", value: "NSF/ANSI 49, EN 12469" },
    ],
  },
];