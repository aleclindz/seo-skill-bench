import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { OG_IMAGE, SITE_URL } from '../lib/site';

export const metadata: Metadata = {
  title: 'Lumina — The AI Meeting Assistant for Teams',
  description:
    "Lumina records, transcribes, and summarizes your team's meetings, then turns them into action items automatically. Free for teams up to 5.",
  openGraph: {
    title: 'Lumina — The AI Meeting Assistant for Teams',
    description:
      'Records, transcribes, and summarizes your meetings. Action items, decisions, and recaps — automatically.',
    url: SITE_URL,
    images: [OG_IMAGE],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumina — The AI Meeting Assistant for Teams',
    description: 'Records, transcribes, and summarizes your meetings automatically.',
    images: [OG_IMAGE],
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Lumina',
  url: `${SITE_URL}/`,
  logo: OG_IMAGE,
  sameAs: ['https://twitter.com/luminahq'],
};

const softwareApplicationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Lumina',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description:
    'AI meeting assistant that records, transcribes, and summarizes team meetings.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationJsonLd) }}
        />
        <header>
          <nav>
            <a href="/">Lumina</a>
            <a href="/features">Features</a>
            <a href="/pricing">Pricing</a>
            <a href="/blog">Blog</a>
            <a href="/faq">FAQ</a>
          </nav>
        </header>
        {children}
        <footer>
          <p>&copy; 2026 Lumina Labs, Inc.</p>
        </footer>
      </body>
    </html>
  );
}
