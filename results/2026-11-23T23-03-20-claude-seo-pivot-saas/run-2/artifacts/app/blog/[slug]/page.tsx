import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts } from '../posts';

const BASE = 'https://lumina.example';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: `${post.title} — Lumina Blog`,
    description: post.description,
    alternates: { canonical: `${BASE}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${BASE}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    author: { '@type': 'Organization', name: 'Lumina' },
    publisher: { '@type': 'Organization', name: 'Lumina' },
    mainEntityOfPage: `${BASE}/blog/${post.slug}`,
  };

  return (
    <main>
      <nav aria-label="Breadcrumb">
        <Link href="/blog">Blog</Link> / <span>{post.title}</span>
      </nav>
      <article>
        <h1>{post.title}</h1>
        <time dateTime={post.publishedAt}>
          {new Date(post.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
        {post.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </article>
      <p className="post-cta">
        <Link href={post.relatedHref}>{post.relatedLabel} →</Link>
      </p>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
