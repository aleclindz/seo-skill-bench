import type { Metadata } from 'next';
import Link from 'next/link';
import { posts } from './posts';

const BASE = 'https://lumina.example';

export const metadata: Metadata = {
  title: { absolute: 'Blog — Lumina' },
  description:
    'Practical guides on email, inboxes, and where teams actually lose time — from the team behind Lumina.',
  alternates: { canonical: `${BASE}/blog` },
  openGraph: {
    title: 'Blog — Lumina',
    description: 'Practical guides on email, inboxes, and where teams actually lose time.',
    url: `${BASE}/blog`,
  },
};

export default function BlogIndexPage() {
  const sorted = [...posts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

  return (
    <main>
      <h1>Blog</h1>
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
