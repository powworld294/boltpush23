import './globals.css';
import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import ExitIntentModal from '@/components/ExitIntentModal';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://powpropertyasbestos.co.uk'),
  title: {
    default: 'Pow Property Asbestos - Preferred Asbestos Removal Company South England | 25+ Years Experience',
    template: '%s | Pow Property Asbestos',
  },
  description: 'Professional asbestos removal, abatement & management services. Commercial & residential projects across BH, SO, DT, BA, PO postcodes. Over 25 years experience, 2500+ successful jobs. ISO certified. Call 01202 001771 for free consultation.',
  keywords: ['asbestos removal', 'asbestos survey', 'asbestos management', 'asbestos abatement', 'commercial asbestos removal', 'residential asbestos removal', 'South England asbestos', 'Bournemouth asbestos', 'Southampton asbestos', 'Dorchester asbestos', 'Bath asbestos', 'Portsmouth asbestos', 'ISO 9001', 'ISO 14001', 'ISO 45001', 'Peninsula protected', 'HSE licensed'],
  authors: [{ name: 'Pow Property Asbestos' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://powpropertyasbestos.co.uk',
    title: 'Pow Property Asbestos - The Number 1 Choice for Asbestos Removals in the South',
    description: 'Over 25 years experience in asbestos removal & management. Commercial & residential services. Small one-off removals to large complex contracts. Free consultation.',
    siteName: 'Pow Property Asbestos',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pow Property Asbestos - Expert Asbestos Removal Services',
    description: '25+ years experience, 2500+ successful jobs. Commercial & residential asbestos removal across South England.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: 'Pow Property Asbestos',
  image: 'https://powpropertyasbestos.co.uk/pow_asbestos.jpg',
  '@id': 'https://powpropertyasbestos.co.uk',
  url: 'https://powpropertyasbestos.co.uk',
  telephone: '+441202001771',
  email: 'Info@powpropertyasbestos.co.uk',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'South England',
    addressCountry: 'GB',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Bournemouth',
    },
    {
      '@type': 'City',
      name: 'Southampton',
    },
    {
      '@type': 'City',
      name: 'Dorchester',
    },
    {
      '@type': 'City',
      name: 'Bath',
    },
    {
      '@type': 'City',
      name: 'Portsmouth',
    },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '13:00',
    },
  ],
  sameAs: [
    'https://www.facebook.com/powasbestos',
    'https://www.linkedin.com/company/powasbestos',
    'https://www.instagram.com/powasbestos',
  ],
  priceRange: '££',
  description: 'Professional asbestos removal, abatement and management services. Over 25 years experience serving commercial and residential clients. Small one-off removals to large complex ongoing management contracts. The number 1 choice for asbestos removals in the South.',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '2500',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <ExitIntentModal />
      </body>
    </html>
  );
}
