import type { Metadata } from 'next';
import Link from 'next/link';
import { posts } from './posts';

export const metadata: Metadata = {
  title: 'Blog — Lumina',
  description:
    'Practical guides on AI meeting notes, meeting transcription, and turning meetings into action items — from the team building Lumina.',
  alternates: { canonical: 'https://lumina.example/blog' },
  openGraph: {
    title: 'Blog — Lumina',
    description:
      'Practical guides on AI meeting notes, meeting transcription, and turning meetings into action items.',
    url: 'https://lumina.example/blog',
    images: ['/img/og-lumina.png'],
  },
};

export default function BlogIndexPage() {
  const sorted = [...posts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

  return (
    <main>
      <h1>Blog</h1>
      <p>Guides on AI meeting notes, meeting transcription, and running better meetings.</p>
      <div className="post-list">
        {sorted.map((p) => (
          <article key={p.slug}>
            <h2>
              <Link href={`/blog/${p.slug}`}>{p.title}</Link>
            </h2>
            <p>{p.excerpt}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
