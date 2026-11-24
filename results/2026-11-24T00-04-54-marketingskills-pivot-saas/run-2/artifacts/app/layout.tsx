import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';

const BASE = 'https://lumina.example';

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: 'InboxZap — Clean Your Inbox in Minutes',
    template: '%s',
  },
  description:
    'InboxZap bulk-deletes old emails, unsubscribes you from newsletters, and gets you to inbox zero in minutes. Free for personal inboxes.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'InboxZap — Clean Your Inbox in Minutes',
    description:
      'Bulk delete old emails, unsubscribe from newsletters, and reach inbox zero in minutes.',
    url: '/',
    siteName: 'InboxZap',
    type: 'website',
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
            <Link href="/">InboxZap</Link>
            <Link href="/features">Features</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/faq">FAQ</Link>
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
