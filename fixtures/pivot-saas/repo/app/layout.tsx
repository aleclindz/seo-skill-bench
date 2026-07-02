import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
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
      </body>
    </html>
  );
}
