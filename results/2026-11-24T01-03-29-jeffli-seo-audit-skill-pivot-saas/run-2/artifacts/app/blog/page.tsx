import type { Metadata } from 'next';
import Link from 'next/link';
import { posts } from '../../lib/posts';
import { OG_IMAGE, SITE_URL } from '../../lib/site';

export const metadata: Metadata = {
  title: 'Blog — Lumina',
  description: 'The Lumina blog: articles on meetings, productivity, and teamwork.',
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: 'Blog — Lumina',
    description: 'Articles on meetings, productivity, and teamwork.',
    url: `${SITE_URL}/blog`,
    images: [OG_IMAGE],
  },
};

export default function BlogIndexPage() {
  const current = posts.filter((p) => !p.legacy);
  const legacy = posts.filter((p) => p.legacy);

  return (
    <main>
      <h1>Blog</h1>
      <div className="post-list">
        {current.map((p) => (
          <article key={p.slug}>
            <h2>
              <Link href={`/blog/${p.slug}`}>{p.title}</Link>
            </h2>
            <p>{p.excerpt}</p>
          </article>
        ))}
      </div>

      <h2>From the archive</h2>
      <p>Older posts from when Lumina was InboxZap, an email-cleanup tool.</p>
      <div className="post-list">
        {legacy.map((p) => (
          <article key={p.slug}>
            <h3>
              <Link href={`/blog/${p.slug}`}>{p.title}</Link>
            </h3>
            <p>{p.excerpt}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
