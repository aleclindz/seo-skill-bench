import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPost, posts } from '../posts';

const BASE = 'https://lumina.example';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} — InboxZap Blog`,
    description: post.description,
    alternates: { canonical: `${BASE}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${BASE}/blog/${post.slug}`,
      type: 'article',
      images: ['/img/og-inboxzap.png'],
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
    url: `${BASE}/blog/${post.slug}`,
    publisher: { '@type': 'Organization', name: 'InboxZap' },
  };

  return (
    <main>
      <article>
        <h1>{post.title}</h1>
        {post.paragraphs.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </article>
      <p>
        <Link href="/blog">&larr; More inbox cleanup guides</Link> &middot;{' '}
        <Link href="/pricing">Try InboxZap free</Link>
      </p>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
