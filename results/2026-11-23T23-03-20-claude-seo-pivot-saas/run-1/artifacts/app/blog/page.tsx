import type { Metadata } from 'next';
import Link from 'next/link';
import { posts } from '../../lib/posts';
import { pageMetadata } from '../../lib/seo';

export const metadata: Metadata = pageMetadata(
  'Blog — Lumina',
  'The Lumina blog: articles on meetings, productivity, and teamwork.',
  '/blog',
);

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
            <p>{post.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
