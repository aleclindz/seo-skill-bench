import type { Metadata } from 'next';
import Link from 'next/link';
import { posts } from '../lib/posts';
import { OG_IMAGE, SITE_URL } from '../lib/site';

export const metadata: Metadata = {
  title: 'Blog — Lumina',
  description:
    'Practical guides on inbox management, meeting workflows, and cutting the admin overhead that slows teams down.',
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: 'Blog — Lumina',
    description:
      'Practical guides on inbox management, meeting workflows, and cutting the admin overhead that slows teams down.',
    url: `${SITE_URL}/blog`,
    images: [OG_IMAGE],
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
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
