import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://lumina.example'),
  title: 'InboxZap — Clean Your Inbox in Minutes',
  description:
    'InboxZap bulk-deletes old emails, unsubscribes you from newsletters, and gets you to inbox zero in minutes. Free for personal inboxes.',
  openGraph: {
    title: 'InboxZap — Clean Your Inbox in Minutes',
    description:
      'Bulk delete old emails, unsubscribe from newsletters, and reach inbox zero in minutes.',
    url: 'https://lumina.example/',
    images: ['/img/og-inboxzap.png'],
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'InboxZap',
  url: 'https://lumina.example/',
  logo: 'https://lumina.example/img/og-inboxzap.png',
};

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'InboxZap',
  applicationCategory: 'Utility',
  operatingSystem: 'Web',
  description:
    'InboxZap bulk-deletes old emails, unsubscribes you from newsletters, and gets you to inbox zero in minutes.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
        />
      </head>
      <body>
        <header>
          <nav>
            <a href="/">InboxZap</a>
            <a href="/features">Features</a>
            <a href="/pricing">Pricing</a>
            <a href="/blog">Blog</a>
            <a href="/faq">FAQ</a>
          </nav>
        </header>
        {children}
        <footer>
          <p>&copy; 2026 InboxZap, Inc.</p>
        </footer>
      </body>
    </html>
  );
}
