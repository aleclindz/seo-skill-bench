import type { Metadata } from 'next';
import Link from 'next/link';
import { posts } from './posts';

export const metadata: Metadata = {
  title: 'Blog — InboxZap',
  description:
    'Guides on reaching inbox zero, bulk deleting email, freeing up Gmail storage, and killing newsletter overload for good.',
  alternates: { canonical: 'https://lumina.example/blog' },
  openGraph: {
    title: 'Blog — InboxZap',
    description:
      'Guides on reaching inbox zero, bulk deleting email, freeing up Gmail storage, and killing newsletter overload for good.',
    url: 'https://lumina.example/blog',
    images: ['/img/og-inboxzap.png'],
  },
};

export default function BlogIndexPage() {
  const sorted = [...posts].sort(
    (a, b) => +new Date(b.datePublished) - +new Date(a.datePublished)
  );

  return (
    <main>
      <h1>Blog</h1>
      <p>Practical guides for getting your inbox under control and keeping it there.</p>
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
