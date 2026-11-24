import type { Metadata } from 'next';
import Link from 'next/link';
import { posts } from '../../lib/posts';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Articles on running better meetings, writing notes people read, and cutting meeting overload.',
  alternates: { canonical: 'https://lumina.example/blog' },
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
