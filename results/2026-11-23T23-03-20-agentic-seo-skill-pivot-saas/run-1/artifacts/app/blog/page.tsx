import type { Metadata } from 'next';
import { posts } from './posts';

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
        {posts.map((post) => (
          <article key={post.slug}>
            <h2>
              <a href={`/blog/${post.slug}`}>{post.title}</a>
            </h2>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
