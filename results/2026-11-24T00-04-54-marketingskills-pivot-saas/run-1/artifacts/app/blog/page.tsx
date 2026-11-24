import type { Metadata } from 'next';
import { posts } from './posts';

export const metadata: Metadata = {
  title: 'Blog — Lumina',
  description: 'The Lumina blog: meeting notes, action items, and async work for teams.',
  alternates: { canonical: 'https://lumina.example/blog' },
  openGraph: {
    title: 'Blog — Lumina',
    description: 'The Lumina blog: meeting notes, action items, and async work for teams.',
    url: 'https://lumina.example/blog',
    images: ['/img/og-lumina.png'],
  },
};

export default function BlogIndexPage() {
  return (
    <main>
      <h1>Blog</h1>
      <div className="post-list">
        {posts.map((post) => (
          <article key={post.slug}>
            <h2>
              <a href={`/blog/${post.slug}`}>{post.title}</a>
            </h2>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
