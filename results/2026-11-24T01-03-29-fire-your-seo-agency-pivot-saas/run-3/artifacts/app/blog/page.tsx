import type { Metadata } from 'next';
import Link from 'next/link';
import { posts } from '../../lib/posts';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'InboxZap\'s answers to the most common questions about cleaning up Gmail, Outlook, and your inbox in general.',
  alternates: { canonical: '/blog' },
};

export default function BlogIndexPage() {
  return (
    <main>
      <h1>Blog</h1>
      <p>Direct answers to the inbox-cleanup questions people actually search for.</p>
      <div className="post-list">
        {posts.map((p) => (
          <article key={p.slug}>
            <h2>
              <Link href={`/blog/${p.slug}`}>{p.title}</Link>
            </h2>
            <p>{p.answer}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
