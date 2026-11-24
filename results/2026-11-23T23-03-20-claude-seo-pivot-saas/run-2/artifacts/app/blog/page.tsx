import type { Metadata } from 'next';
import Link from 'next/link';
import { posts } from './posts';

export const metadata: Metadata = {
  title: 'Blog — Lumina',
  description: 'The Lumina blog: practical articles on meetings, async work, and team productivity.',
  alternates: { canonical: 'https://lumina.example/blog' },
  openGraph: {
    title: 'Blog — Lumina',
    description: 'Practical articles on meetings, async work, and team productivity.',
    url: 'https://lumina.example/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — Lumina',
    description: 'Practical articles on meetings, async work, and team productivity.',
  },
};

const sorted = [...posts].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
);

export default function BlogIndexPage() {
  return (
    <main>
      <h1>Blog</h1>
      <p>Practical articles on running better meetings, cutting meeting load, and keeping a team in sync.</p>
      <div className="post-list">
        {sorted.map((p) => (
          <article key={p.slug}>
            <h2>
              <Link href={`/blog/${p.slug}`}>{p.title}</Link>
            </h2>
            <p>{p.excerpt}</p>
            <time dateTime={p.publishedAt}>
              {new Date(p.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </article>
        ))}
      </div>
    </main>
  );
}
