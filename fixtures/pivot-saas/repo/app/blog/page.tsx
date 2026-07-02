'use client';

import { useEffect, useState } from 'react';

type Post = { slug: string; title: string; excerpt: string };

export default function BlogIndexPage() {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/posts')
      .then((r) => r.json())
      .then((data: Post[]) => setPosts(data))
      .catch(() => setError(true));
  }, []);

  if (error) {
    return <main>Could not load posts.</main>;
  }

  if (!posts) {
    return (
      <main>
        <h1>Blog</h1>
        <div className="loading-spinner">Loading posts…</div>
      </main>
    );
  }

  return (
    <main>
      <h1>Blog</h1>
      <div className="post-list">
        {posts.map((p) => (
          <article key={p.slug}>
            <h2>{p.title}</h2>
            <p>{p.excerpt}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
