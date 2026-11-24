import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts } from '../posts';

const BASE = 'https://lumina.example';

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};

  const url = `${BASE}/blog/${post.slug}`;
  return {
    title: `${post.title} — Lumina`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      images: ['/img/og-lumina.png'],
    },
    twitter: { card: 'summary_large_image' },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post!.title,
    description: post!.description,
    datePublished: post!.publishedAt,
    author: { '@type': 'Organization', name: 'Lumina' },
    publisher: { '@type': 'Organization', name: 'Lumina' },
    mainEntityOfPage: `${BASE}/blog/${post!.slug}`,
  };

  return (
    <main>
      <article>
        <h1>{post!.title}</h1>
        {post!.content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </article>
      <p>
        <Link href="/blog">&larr; Back to all posts</Link>
      </p>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
