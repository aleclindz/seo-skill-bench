import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://lumina.example'),
  title: 'InboxZap — Clean Your Inbox in Minutes',
  description:
    'InboxZap bulk-deletes old emails, unsubscribes you from newsletters, and gets you to inbox zero in minutes. Free for personal inboxes.',
  alternates: { canonical: 'https://lumina.example/' },
  openGraph: {
    title: 'InboxZap — Clean Your Inbox in Minutes',
    description:
      'Bulk delete old emails, unsubscribe from newsletters, and reach inbox zero in minutes.',
    url: 'https://lumina.example/',
    images: ['/img/og-inboxzap.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InboxZap — Clean Your Inbox in Minutes',
    description:
      'Bulk delete old emails, unsubscribe from newsletters, and reach inbox zero in minutes.',
  },
};

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'InboxZap',
  url: 'https://lumina.example/',
  logo: 'https://lumina.example/img/og-inboxzap.png',
};

const softwareLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'InboxZap',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description:
    'InboxZap bulk-deletes old emails, unsubscribes you from newsletters, and frees up inbox storage in minutes.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
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
          <p>&copy; 2026 InboxZap &middot; <a href="/blog">Blog</a> &middot; <a href="/faq">FAQ</a></p>
        </footer>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareLd) }}
        />
      </body>
    </html>
  );
}
