import type { Metadata } from 'next';
import Link from 'next/link';
import { posts } from './posts';

export const metadata: Metadata = {
  title: 'Blog — Lumina',
  description:
    'Practical guides on running better meetings: notes, action items, async standups, and where AI actually helps.',
  alternates: { canonical: 'https://lumina.example/blog' },
  openGraph: {
    title: 'Blog — Lumina',
    description: 'Articles on meetings, productivity, and teamwork.',
    url: 'https://lumina.example/blog',
    images: ['/img/og-lumina.png'],
  },
};

export default function BlogIndexPage() {
  return (
    <main>
      <h1>Blog</h1>
      <div className="post-list">
        {posts.map((post) => (
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
