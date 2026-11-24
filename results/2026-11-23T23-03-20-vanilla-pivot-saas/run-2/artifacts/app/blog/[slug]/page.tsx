import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { posts, getPost } from '../posts';

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};

  const url = `https://lumina.example/blog/${post.slug}`;
  return {
    title: `${post.title} — Lumina`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      images: ['https://lumina.example/img/og-lumina.png'],
    },
    twitter: { card: 'summary_large_image' },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const url = `https://lumina.example/blog/${post.slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    url,
    author: { '@type': 'Organization', name: 'Lumina' },
    publisher: { '@type': 'Organization', name: 'Lumina' },
  };

  return (
    <main>
      <article>
        <h1>{post.title}</h1>
        {post.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </article>
      <p>
        <Link href="/blog">Back to the blog</Link>
      </p>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
