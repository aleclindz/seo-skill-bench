import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { posts } from '../../../lib/posts';

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) {
    return {};
  }
  return {
    title: `${post.title} — Lumina Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://lumina.example/blog/${post.slug}`,
      images: ['/img/og-lumina.png'],
      type: 'article',
    },
  };
}

export default function BlogPostPage({ params }: Params) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    author: { '@type': 'Organization', name: 'Lumina' },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article>
        <h1>{post.title}</h1>
        {post.content.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </article>
      <p className="related-links">
        See how this works in <Link href="/features">Lumina&apos;s features</Link>, or{' '}
        <Link href="/pricing">check pricing</Link>.
      </p>
      <p>
        <Link href="/blog">&larr; Back to the blog</Link>
      </p>
    </main>
  );
}
