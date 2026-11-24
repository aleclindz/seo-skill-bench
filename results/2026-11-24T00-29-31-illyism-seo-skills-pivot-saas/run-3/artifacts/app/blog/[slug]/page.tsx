import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPost, posts } from '../../../lib/posts';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: 'article',
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <main>
      <article>
        <h1>{post.title}</h1>
        {post.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </article>
    </main>
  );
}
