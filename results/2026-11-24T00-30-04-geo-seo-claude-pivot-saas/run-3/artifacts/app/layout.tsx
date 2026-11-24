import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const BASE = 'https://lumina.example';

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: 'Lumina — AI Meeting Notes That Write Themselves',
    template: '%s — Lumina',
  },
  description:
    'Lumina joins your Zoom, Google Meet, or Microsoft Teams calls, transcribes them, and delivers a summary with decisions and action items before you are back at your desk.',
  openGraph: {
    siteName: 'Lumina',
    title: 'Lumina — AI Meeting Notes That Write Themselves',
    description:
      'Lumina joins your calls, transcribes them, and delivers a summary with decisions and action items automatically.',
    url: BASE,
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Lumina',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: BASE,
  description:
    'Lumina joins your meetings, transcribes them, and writes the summary and action items automatically.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
