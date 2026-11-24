import type { Metadata } from 'next';
import Link from 'next/link';
import { posts } from './posts';

export const metadata: Metadata = {
  title: 'Inbox Cleanup Guides & Gmail/Outlook Tips — InboxZap Blog',
  description:
    'Practical guides on reaching inbox zero, bulk deleting old email, unsubscribing from newsletters, and freeing up Gmail or Outlook storage.',
  alternates: { canonical: 'https://lumina.example/blog' },
  openGraph: {
    title: 'InboxZap Blog — Inbox Cleanup Guides',
    description:
      'Practical guides on reaching inbox zero, bulk deleting old email, and freeing up Gmail or Outlook storage.',
    url: 'https://lumina.example/blog',
    images: ['/img/og-inboxzap.png'],
  },
};

export default function BlogIndexPage() {
  return (
    <main>
      <h1>Inbox Cleanup Guides</h1>
      <p>
        Everything we know about reaching inbox zero, bulk deleting old email, and keeping it
        that way — from the team building InboxZap.
      </p>
      <div className="post-list">
        {posts.map((p) => (
          <article key={p.slug}>
            <h2>
              <Link href={`/blog/${p.slug}`}>{p.title}</Link>
            </h2>
            <p>{p.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
