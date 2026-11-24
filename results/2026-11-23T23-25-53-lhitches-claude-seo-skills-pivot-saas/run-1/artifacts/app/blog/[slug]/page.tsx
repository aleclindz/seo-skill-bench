import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts } from '../posts';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
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
      publishedTime: post.publishedAt,
      images: ['/img/og-lumina.png'],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    author: { '@type': 'Organization', name: 'Lumina' },
    publisher: { '@type': 'Organization', name: 'Lumina' },
    mainEntityOfPage: `https://lumina.example/blog/${post.slug}`,
  };

  return (
    <main>
      <article>
        <nav aria-label="breadcrumb">
          <Link href="/blog">Blog</Link>
        </nav>
        <h1>{post.title}</h1>
        <p>
          <time dateTime={post.publishedAt}>{post.publishedAt}</time>
        </p>
        {post.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </article>
      <p>
        See how Lumina handles this in practice: <Link href="/features">Features</Link> ·{' '}
        <Link href="/pricing">Pricing</Link>
      </p>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
