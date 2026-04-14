import type { Metadata, Viewport } from 'next';
import { Sora } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import './globals.css';

const sora = Sora({ subsets: ['latin'], variable: '--font-sora' });

// ✅ ADVANCED SEO: Full metadata with schema, canonical, and all OG tags
export const metadata: Metadata = {
  // ✅ Title template — every page gets " | SKYON Innovations" automatically
  title: {
    template: '%s | SKYON Innovations',
    default: 'SKYON Innovations – Medical Equipment & Clean Room Systems in India',
  },

  // ✅ Description: 150–160 chars, includes primary keywords
  description:
    'SKYON Innovations supplies ISO-certified clean room systems, laminar flow units, biosafety cabinets, HEPA filters, and hospital-grade medical equipment across India and 40+ countries.',

  // ✅ Keywords: real product categories from your nav
  keywords: [
    'clean room systems India',
    'laminar flow cabinet manufacturer',
    'biosafety cabinet supplier Chennai',
    'HEPA filter ventilation systems',
    'hospital medical equipment India',
    'ICU equipment supplier',
    'modular clean room manufacturer',
    'validation certification services',
    'AMC medical equipment',
    'SKYON Innovations',
    'precision healthcare solutions',
  ],

  // ✅ Canonical URL — very important, prevents duplicate content penalty
  alternates: {
    canonical: 'https://skyon-innovation.vercel.app',
  },

  authors: [{ name: 'SKYON Innovations', url: 'https://skyon-innovation.vercel.app' }],
  creator: 'SKYON Innovations',
  publisher: 'SKYON Innovations',

  // ✅ Robots: allow Google to fully index and follow all links
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ✅ Open Graph — for WhatsApp, LinkedIn, Facebook link previews
  openGraph: {
    title: 'SKYON Innovations – Medical Equipment & Clean Room Systems',
    description:
      'ISO-certified clean room systems, laminar flow cabinets, biosafety cabinets and hospital medical equipment. Trusted across 40+ countries.',
    url: 'https://skyon-innovation.vercel.app',
    siteName: 'SKYON Innovations',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://skyon-innovation.vercel.app/assets/images/og-image.jpg', // ✅ Replace with your real OG image (1200x630px)
        width: 1200,
        height: 630,
        alt: 'SKYON Innovations – Precision Medical Equipment & Clean Room Systems',
      },
    ],
  },

  // ✅ Twitter/X card
  twitter: {
    card: 'summary_large_image',
    title: 'SKYON Innovations – Medical Equipment & Clean Room Systems',
    description:
      'ISO-certified clean room systems, laminar flow cabinets, and hospital-grade medical equipment across India & 40+ countries.',
    images: ['https://skyon-innovation.vercel.app/assets/images/og-image.jpg'],
  },

  // ✅ Verification tags — add these after verifying in Google/Bing
  // verification: {
  //   google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  //   other: { 'msvalidate.01': 'YOUR_BING_VERIFICATION_CODE' },
  // },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // ✅ Category helps Google understand what type of site this is
  category: 'healthcare',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#a5deff',
  userScalable: true,
};

// ✅ ADVANCED SEO: JSON-LD Structured Data (Schema.org)
// This makes Google show rich results — star ratings, address, contact info
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SKYON Innovations',
  url: 'https://skyon-innovation.vercel.app',
  logo: 'https://skyon-innovation.vercel.app/assets/images/logo.png',
  description:
    'ISO-certified manufacturer and supplier of clean room systems, laminar flow units, biosafety cabinets, HEPA filtration, and hospital medical equipment.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '24, Sterling Avenue, T. Nagar',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    postalCode: '600017',
    addressCountry: 'IN',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-98765-43210',
      contactType: 'sales',
      areaServed: ['IN', 'WORLDWIDE'],
      availableLanguage: ['English', 'Tamil', 'Hindi'],
    },
  ],
  sameAs: [
    // ✅ Add your real social media URLs here
    // 'https://www.linkedin.com/company/skyon-innovations',
    // 'https://twitter.com/skyoninnovations',
  ],
};

// ✅ Local Business Schema — helps rank in "near me" searches in Chennai
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'SKYON Innovations',
  image: 'https://skyon-innovation.vercel.app/assets/images/logo.png',
  url: 'https://skyon-innovation.vercel.app',
  telephone: '+91-98765-43210',
  email: 'hello@skyoninnovations.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '24, Sterling Avenue, T. Nagar',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    postalCode: '600017',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 13.0382,
    longitude: 80.2345,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '18:00',
  },
  priceRange: '$$',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sora.variable} suppressHydrationWarning>
      <head>
        {/* ✅ JSON-LD Schema — injected directly in <head> for Google to read */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <div className="flex flex-col min-h-screen relative">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <ScrollToTop />
          <a
            href="https://wa.me/919876543210" // ✅ Replace with real WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-3.5 rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] transition-all flex items-center justify-center cursor-pointer"
            aria-label="Chat with SKYON Innovations on WhatsApp"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.299-.018-.461.13-.611.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>
      </body>
    </html>
  );
}