import type { Metadata } from 'next';
import Link from 'next/link';
import { posts } from '../../lib/posts';

export const metadata: Metadata = {
  title: 'Blog — Lumina',
  description: 'Practical guides on running better meetings, AI meeting notes, and team communication.',
  openGraph: {
    title: 'Blog — Lumina',
    description: 'Practical guides on running better meetings, AI meeting notes, and team communication.',
    url: 'https://lumina.example/blog',
    images: ['/img/og-lumina.png'],
  },
};

export default function BlogIndexPage() {
  const sorted = [...posts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

  return (
    <main>
      <h1>Blog</h1>
      <div className="post-list">
        {sorted.map((post) => (
          <article key={post.slug}>
            <h2>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
