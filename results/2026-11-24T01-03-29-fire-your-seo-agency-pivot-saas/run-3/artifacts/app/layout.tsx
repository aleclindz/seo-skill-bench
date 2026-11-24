import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { SITE_URL } from '../lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'InboxZap — Clean Your Inbox in Minutes',
    template: '%s — InboxZap',
  },
  description:
    'InboxZap bulk-deletes old emails, unsubscribes you from newsletters, and gets you to inbox zero in minutes. Free for personal inboxes.',
  openGraph: {
    siteName: 'InboxZap',
    type: 'website',
    images: ['/img/og-inboxzap.png'],
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
            <a href="/">InboxZap</a>
            <a href="/features">Features</a>
            <a href="/pricing">Pricing</a>
            <a href="/blog">Blog</a>
            <a href="/faq">FAQ</a>
          </nav>
        </header>
        {children}
        <footer>
          <p>&copy; 2026 Lumina Labs, Inc. &middot; <a href="/blog">Blog</a> &middot; <a href="/faq">FAQ</a></p>
        </footer>
      </body>
    </html>
  );
}
