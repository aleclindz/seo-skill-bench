import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: {
    default: 'Lumina — The AI Meeting Assistant for Teams',
    template: '%s | Lumina',
  },
  description:
    'Lumina joins your Zoom, Meet, and Teams calls, transcribes them, and delivers an AI summary with decisions and action items before you\'re back at your desk.',
  openGraph: {
    title: 'Lumina — The AI Meeting Assistant for Teams',
    description:
      'AI meeting recording, transcription, and summaries with decisions and action items — automatically.',
    url: 'https://lumina.example/',
    siteName: 'Lumina',
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
