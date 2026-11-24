import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from './posts';

export const metadata: Metadata = {
  title: 'Inbox Cleanup Guides & Tips — InboxZap Blog',
  description:
    'Practical guides on reaching inbox zero, bulk deleting old email, mass unsubscribing from newsletters, and freeing up Gmail and Outlook storage.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Inbox Cleanup Guides & Tips — InboxZap Blog',
    description:
      'Practical guides on inbox zero, bulk deleting email, unsubscribing from newsletters, and freeing up storage.',
    url: '/blog',
    type: 'website',
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main>
      <h1>Inbox Cleanup Guides &amp; Tips</h1>
      <p>
        Everything we know about taming an overflowing inbox: bulk deleting old email,
        unsubscribing from newsletters for good, and freeing up Gmail or Outlook storage.
      </p>
      <div className="post-list">
        {posts.map((post) => (
          <article key={post.slug}>
            <h2>
              <Link href={`/blog/${post.slug}`}>{post.h1}</Link>
            </h2>
            <p>{post.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
