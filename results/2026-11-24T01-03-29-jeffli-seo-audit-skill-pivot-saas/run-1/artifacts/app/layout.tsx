import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://lumina.example'),
  title: 'Lumina — AI Meeting Notes That Write Themselves',
  description:
    'Lumina joins your Zoom, Meet, or Teams calls, transcribes them, and delivers a summary with decisions and action items before you are back at your desk.',
  alternates: { canonical: 'https://lumina.example/' },
  openGraph: {
    title: 'Lumina — AI Meeting Notes That Write Themselves',
    description:
      'Record, transcribe, and summarize every meeting automatically — decisions and action items included.',
    url: 'https://lumina.example/',
    type: 'website',
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
          <p>&copy; 2026 Lumina Labs, Inc.</p>
        </footer>
      </body>
    </html>
  );
}
