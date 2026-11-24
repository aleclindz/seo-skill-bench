import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { posts } from '../posts';

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
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
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    url: `https://lumina.example/blog/${post.slug}`,
    author: { '@type': 'Organization', name: 'Lumina' },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article>
        <h1>{post.title}</h1>
        {post.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
        <p>
          <a href="/pricing">Start free with Lumina</a> and stop writing meeting notes
          yourself.
        </p>
      </article>
    </main>
  );
}
