import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const SITE_URL = 'https://lumina.example';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Lumina — The AI Meeting Assistant for Teams',
    template: '%s — Lumina',
  },
  description:
    "Lumina records, transcribes, and summarizes your team's meetings, then turns them into action items automatically. Free for teams up to 5.",
  openGraph: {
    title: 'Lumina — The AI Meeting Assistant for Teams',
    description:
      'Records, transcribes, and summarizes your meetings. Action items, decisions, and recaps — automatically.',
    url: SITE_URL,
    siteName: 'Lumina',
    type: 'website',
    images: ['/img/og-lumina.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumina — The AI Meeting Assistant for Teams',
    description: 'Records, transcribes, and summarizes your meetings automatically.',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Lumina',
  url: SITE_URL,
  logo: `${SITE_URL}/img/og-lumina.png`,
  sameAs: ['https://twitter.com/luminahq'],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
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
          <p>
            &copy; 2026 Lumina Labs, Inc. &middot; <a href="/blog">Blog</a> &middot;{' '}
            <a href="/faq">FAQ</a>
          </p>
        </footer>
      </body>
    </html>
  );
}
