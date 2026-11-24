import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '../posts';

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

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
        {post.sections.map((section, i) => (
          <section key={i}>
            {section.heading ? <h2>{section.heading}</h2> : null}
            {section.paragraphs.map((p, j) => (
              <p key={j} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </section>
        ))}
      </article>
      <p>
        <a href="/blog">&larr; Back to the blog</a> &middot; <a href="/pricing">Try Lumina free</a>
      </p>
    </main>
  );
}
