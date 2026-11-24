import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://lumina.example'),
  title: 'Lumina — AI Meeting Notes & Summaries for Teams',
  description:
    "Lumina joins your Zoom, Meet, and Teams calls, transcribes them, and delivers a summary with decisions and action items before you're back at your desk. Free for teams up to 5.",
  openGraph: {
    title: 'Lumina — AI Meeting Notes & Summaries for Teams',
    description:
      'Never take meeting notes again. Lumina records, transcribes, and summarizes every call with decisions and action items.',
    url: 'https://lumina.example/',
    images: ['/img/og-lumina.png'],
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Lumina',
  alternateName: 'InboxZap',
  url: 'https://lumina.example/',
  description:
    'Lumina (formerly InboxZap) is an AI meeting assistant that records, transcribes, and summarizes meetings for teams.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
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
          <p>&copy; 2026 Lumina Labs, Inc. Formerly InboxZap.</p>
        </footer>
      </body>
    </html>
  );
}
