import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://lumina.example'),
  title: {
    default: 'Lumina — The AI Meeting Assistant for Teams',
    template: '%s — Lumina',
  },
  description:
    "Lumina records, transcribes, and summarizes your team's meetings, then turns them into action items automatically. Free for teams up to 5.",
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
          <p>Lumina was formerly known as InboxZap.</p>
          <p>&copy; 2026 Lumina Labs, Inc.</p>
        </footer>
      </body>
    </html>
  );
}
