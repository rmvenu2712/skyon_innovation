import AboutUsContent from '@/components/AboutUsContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about SKYON Innovations\'s engineering philosophy, our core directives of Innovation and Safety, and our global operational presence spanning 42 countries.',
  openGraph: {
    title: 'About Us | SKYON Innovations',
    description: 'Learn about SKYON Innovations\'s engineering philosophy, our core directives of Innovation and Safety, and our global operational presence spanning 42 countries.',
    url: 'https://SKYON Innovations.com/about-us',
  },
};

export default function About() {
  return (
    <div className="w-full">
      <AboutUsContent />
    </div>
  );
}
