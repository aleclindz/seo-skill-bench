import type { Metadata } from 'next';
import Link from 'next/link';
import { POSTS } from '../lib/posts';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'The Lumina blog: how teams run better meetings with AI transcription, summaries, and action items.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog — Lumina',
    description: 'Articles on meetings, productivity, and teamwork.',
    url: 'https://lumina.example/blog',
  },
};

export default function BlogIndexPage() {
  const posts = [...POSTS].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

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
