import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { posts } from '../posts';

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://lumina.example/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://lumina.example/blog/${post.slug}`,
      images: ['/img/og-lumina.png'],
      type: 'article',
      publishedTime: post.publishedAt,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <main>
      <article>
        <h1>{post.title}</h1>
        {post.paragraphs.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
        <p>
          <a href="/pricing">Try Lumina free</a>
        </p>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.description,
            datePublished: post.publishedAt,
            author: { '@type': 'Organization', name: 'Lumina' },
          }),
        }}
      />
    </main>
  );
}
