import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPost, posts } from '../posts';

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) {
    return {};
  }
  return {
    title: `${post.title} — Lumina Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: 'article',
      images: ['/img/og-lumina.png'],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    datePublished: post.publishedAt,
    description: post.excerpt,
  };

  return (
    <main>
      <article>
        <h1>{post.title}</h1>
        {post.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    </main>
  );
}
