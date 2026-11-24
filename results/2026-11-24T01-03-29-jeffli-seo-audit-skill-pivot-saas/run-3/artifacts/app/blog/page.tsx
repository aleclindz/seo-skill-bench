import type { Metadata } from 'next';
import Link from 'next/link';
import { posts } from '../../lib/blog-posts';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'The Lumina blog: guides on meetings, productivity, and inbox management.',
  alternates: { canonical: 'https://lumina.example/blog' },
};

export default function BlogIndexPage() {
  const sortedPosts = [...posts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

  return (
    <main>
      <h1>Blog</h1>
      <div className="post-list">
        {sortedPosts.map((post) => (
          <article key={post.slug}>
            <h2>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p>{post.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
