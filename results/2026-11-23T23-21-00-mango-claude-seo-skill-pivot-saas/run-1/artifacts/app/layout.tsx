import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://lumina.example'),
  title: {
    default: 'Lumina — The AI Meeting Assistant for Teams',
    template: '%s — Lumina',
  },
  description:
    'Lumina joins your Zoom, Meet, and Teams calls, records and transcribes them, and delivers a summary with decisions and action items before you are back at your desk.',
  openGraph: {
    title: 'Lumina — The AI Meeting Assistant for Teams',
    description:
      'Automatic recording, transcription, and AI summaries with decisions and action items for every meeting.',
    url: 'https://lumina.example/',
    siteName: 'Lumina',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumina — The AI Meeting Assistant for Teams',
    description:
      'Automatic recording, transcription, and AI summaries with decisions and action items for every meeting.',
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
