import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://lumina.example'),
  title: 'Lumina — The AI Meeting Assistant for Teams',
  description:
    "Lumina records, transcribes, and summarizes your team's meetings, then turns them into action items automatically. Free for teams up to 5.",
  alternates: { canonical: 'https://lumina.example/' },
  openGraph: {
    title: 'Lumina — The AI Meeting Assistant for Teams',
    description:
      'Records, transcribes, and summarizes your meetings. Action items, decisions, and recaps — automatically.',
    url: 'https://lumina.example/',
    images: ['/img/og-lumina.png'],
    type: 'website',
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
  // Preserves the InboxZap -> Lumina rebrand as an explicit entity link so
  // residual "inboxzap" brand searches resolve to the current product.
  alternateName: 'InboxZap',
  url: 'https://lumina.example/',
  logo: 'https://lumina.example/img/og-lumina.png',
  sameAs: ['https://twitter.com/luminahq'],
};

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Lumina',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
        />
      </body>
    </html>
  );
}
