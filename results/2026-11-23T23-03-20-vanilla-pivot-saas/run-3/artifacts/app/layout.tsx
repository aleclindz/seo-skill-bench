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
    siteName: 'Lumina',
    type: 'website',
    url: SITE_URL,
    images: ['/img/og-lumina.png'],
  },
  twitter: {
    card: 'summary_large_image',
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
          <p>
            &copy; 2026 Lumina Labs, Inc. &middot; <a href="/blog">Blog</a> &middot;{' '}
            <a href="/faq">FAQ</a>
          </p>
        </footer>
      </body>
    </html>
  );
}
