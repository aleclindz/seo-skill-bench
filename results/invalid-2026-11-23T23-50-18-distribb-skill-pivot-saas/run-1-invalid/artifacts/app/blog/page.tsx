import type { Metadata } from 'next';
import Link from 'next/link';
import { posts } from './posts';

export const metadata: Metadata = {
  title: 'The InboxZap Blog — Inbox Cleanup, Gmail & Outlook Tips',
  description:
    'Practical guides on reaching inbox zero, bulk deleting old email, mass-unsubscribing from newsletters, freeing up Gmail storage, and automating Gmail and Outlook with filters.',
  alternates: { canonical: 'https://lumina.example/blog' },
  openGraph: {
    title: 'The InboxZap Blog',
    description: 'Guides on inbox cleanup, bulk delete, unsubscribing, and email automation.',
    url: 'https://lumina.example/blog',
    images: ['/img/og-inboxzap.png'],
  },
};

export default function BlogIndexPage() {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <main>
      <h1>Blog</h1>
      <p>Guides for a calmer inbox: bulk deleting, unsubscribing, storage, and automation.</p>
      <div className="post-list">
        {sorted.map((p) => (
          <article key={p.slug}>
            <h2>
              <Link href={`/blog/${p.slug}`}>{p.title}</Link>
            </h2>
            <p>{p.excerpt}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
