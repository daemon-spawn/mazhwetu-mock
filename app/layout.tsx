import type { Metadata } from 'next';
import './globals.css';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Mazhwetu General Works | Construction, Landscaping & Maintenance',
  description: 'Mazhwetu General Works creates and maintains places and spaces across construction, renovation, landscaping, outdoor spaces and maintenance.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.mazhwetu.com'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Mazhwetu General Works',
    description: 'We create places & spaces that work, inspire & last.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-ZA">
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
