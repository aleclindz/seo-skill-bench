import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '../../lib/site';
import { getAllPosts } from '../../lib/content';

export const metadata: Metadata = {
  title: 'Blog — Lumina',
  description:
    'Practical answers on running better meetings: minutes templates, action items, and AI note-taking, from the team behind Lumina.',
  alternates: { canonical: `${SITE.url}/blog` },
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
            <p>{p.answer}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
