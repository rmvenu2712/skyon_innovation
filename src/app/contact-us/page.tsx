import ContactContent from "@/components/ContactContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Us – Get a Quote for Medical Equipment in India',
  description:
    'Contact SKYON Innovations in Chennai for quotes on clean room systems, laminar flow cabinets, biosafety cabinets, and hospital medical equipment. Call, email, or WhatsApp us today.',
  alternates: {
    canonical: 'https://skyon-innovation.vercel.app/contact-us',
  },
  openGraph: {
    title: 'Contact SKYON Innovations – Medical Equipment Supplier Chennai',
    description:
      'Get a custom quote for clean room systems, laminar flow units, or hospital equipment. Reach our technical advisors by phone, email, or WhatsApp.',
    url: 'https://skyon-innovation.vercel.app/contact-us',
  },
};

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact SKYON Innovations',
  url: 'https://skyon-innovation.vercel.app/contact-us',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://skyon-innovation.vercel.app' },
      { '@type': 'ListItem', position: 2, name: 'Contact Us', item: 'https://skyon-innovation.vercel.app/contact-us' },
    ],
  },
};

export default function ContactUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <div className="w-full">
        <ContactContent />
      </div>
    </>
  );
}


