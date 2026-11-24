import type { Metadata } from 'next';
import { posts } from '../../lib/posts';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'The Lumina blog: articles on meetings, productivity, and teamwork.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog — Lumina',
    description: 'Articles on meetings, productivity, and teamwork.',
    url: '/blog',
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
              <a href={`/blog/${p.slug}`}>{p.title}</a>
            </h2>
            <p>{p.excerpt}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
