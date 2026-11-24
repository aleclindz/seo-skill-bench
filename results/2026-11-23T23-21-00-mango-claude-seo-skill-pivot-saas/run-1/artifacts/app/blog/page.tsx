import type { Metadata } from 'next';
import Link from 'next/link';
import { posts } from './posts';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Guides on AI meeting notes, transcription, and running better meetings.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Lumina Blog',
    description: 'Guides on AI meeting notes, transcription, and running better meetings.',
    url: 'https://lumina.example/blog',
  },
};

export default function BlogIndexPage() {
  return (
    <main>
      <h1>Blog</h1>
      <div className="post-list">
        {posts.map((p) => (
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
