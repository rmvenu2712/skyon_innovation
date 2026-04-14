import ContactContent from '@/components/ContactContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Connect with our engineering desk instantly. Discuss your facility requirements with SKYON Innovations\'s technical advisors.',
  openGraph: {
    title: 'Contact Us | SKYON Innovations',
    description: 'Connect with our engineering desk instantly. Discuss your facility requirements with SKYON Innovations\'s technical advisors.',
    url: 'https://SKYON Innovations.com/contact-us',
  },
};

export default function ContactUsPage() {
  return (
    <div className="w-full">
      <ContactContent />
    </div>
  );
}
