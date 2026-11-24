import type { Metadata } from 'next';
import { getAllPosts } from '../../lib/posts';

export const metadata: Metadata = {
  title: 'Blog — Lumina',
  description: 'The Lumina blog: articles on meetings, productivity, and teamwork.',
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main>
      <h1>Blog</h1>
      {posts.length === 0 ? (
        <p>New articles are on the way. Check back soon.</p>
      ) : (
        <div className="post-list">
          {posts.map((post) => (
            <article key={post.slug}>
              <h2>
                <a href={`/blog/${post.slug}`}>{post.title}</a>
              </h2>
              <p>{post.description}</p>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
