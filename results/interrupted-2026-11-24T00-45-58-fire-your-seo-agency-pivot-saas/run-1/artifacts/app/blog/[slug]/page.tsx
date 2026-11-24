import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPost, posts } from '../../../lib/posts';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  const url = `https://lumina.example/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: 'article',
      images: ['https://lumina.example/img/og-lumina.png'],
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
    description: post.excerpt,
    url: `https://lumina.example/blog/${post.slug}`,
    publisher: { '@type': 'Organization', name: 'Lumina', url: 'https://lumina.example/' },
  };

  return (
    <main>
      <article>
        <h1>{post.title}</h1>
        {post.legacyProduct === 'InboxZap' && (
          <p className="legacy-notice">
            This article was published when this product was InboxZap, an email cleanup tool.
            We&apos;ve since become <Link href="/">Lumina</Link>, an AI meeting assistant — see{' '}
            <Link href="/features">what Lumina does today</Link>.
          </p>
        )}
        {post.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
