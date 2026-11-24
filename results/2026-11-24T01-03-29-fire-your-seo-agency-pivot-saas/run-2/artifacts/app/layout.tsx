import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { SITE } from '../lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: 'Lumina — The AI Meeting Assistant for Teams',
  description: SITE.description,
  openGraph: {
    title: 'Lumina — The AI Meeting Assistant for Teams',
    description:
      'Records, transcribes, and summarizes your meetings. Action items, decisions, and recaps — automatically.',
    url: SITE.url,
    siteName: SITE.name,
    images: [SITE.ogImage],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumina — The AI Meeting Assistant for Teams',
    description: 'Records, transcribes, and summarizes your meetings automatically.',
  },
};

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': SITE.orgId,
  name: 'Lumina Labs, Inc.',
  url: SITE.url,
  logo: `${SITE.url}${SITE.ogImage}`,
  sameAs: [`https://twitter.com/${SITE.twitter.replace('@', '')}`],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          // Declared once, globally — every other page references this @id instead of
          // re-declaring the Organization entity.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
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
          <p>&copy; 2026 Lumina Labs, Inc. · <a href="/blog">Blog</a> · <a href="/faq">FAQ</a></p>
        </footer>
      </body>
    </html>
  );
}
