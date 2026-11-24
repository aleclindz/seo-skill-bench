import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '../../content/blog';

export const metadata: Metadata = {
  title: 'Blog — Lumina',
  description: "The Lumina blog: articles on meetings, productivity, and teamwork.",
  alternates: {
    canonical: 'https://lumina.example/blog',
  },
  openGraph: {
    title: 'Blog — Lumina',
    description: 'Articles on meetings, productivity, and teamwork.',
    url: 'https://lumina.example/blog',
    images: ['/img/og-lumina.png'],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main>
      <h1>Blog</h1>
      <div className="post-list">
        {posts.map((p) => (
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
