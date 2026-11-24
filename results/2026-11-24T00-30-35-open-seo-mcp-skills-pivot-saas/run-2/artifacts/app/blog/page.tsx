import type { Metadata } from 'next';
import Link from 'next/link';
import { posts } from './posts';

export const metadata: Metadata = {
  title: 'Blog — Meeting Notes, Transcription & Running Better Meetings',
  description:
    'Practical guides on meeting notes, action items, and running fewer, better meetings — from the team behind Lumina.',
  alternates: { canonical: '/blog' },
};

export default function BlogIndexPage() {
  return (
    <main>
      <h1>Blog</h1>
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
