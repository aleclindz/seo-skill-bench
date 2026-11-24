import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPost, posts } from '../posts';

const SITE_URL = 'https://lumina.example';

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
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
      url: `${SITE_URL}/blog/${post.slug}`,
      type: 'article',
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    author: { '@type': 'Organization', name: 'Lumina' },
    publisher: { '@type': 'Organization', name: 'Lumina' },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article>
        <h1>{post.title}</h1>
        {post.blocks.map((block, i) =>
          block.type === 'h2' ? <h2 key={i}>{block.text}</h2> : <p key={i}>{block.text}</p>
        )}
      </article>
    </main>
  );
}
