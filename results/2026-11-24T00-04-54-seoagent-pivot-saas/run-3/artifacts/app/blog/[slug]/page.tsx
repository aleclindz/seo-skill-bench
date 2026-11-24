import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '../../../content/blog';
import { renderBlocks } from '../../../content/blog/render';

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  const url = `https://lumina.example/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      images: ['/img/og-lumina.png'],
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const faqItems = post.body
    .map((block, i) => ({ block, next: post.body[i + 1] }))
    .filter((pair) => pair.block.type === 'heading' && pair.block.level === 3 && pair.next?.type === 'paragraph');

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    image: 'https://lumina.example/img/og-lumina.png',
    publisher: {
      '@type': 'Organization',
      name: 'Lumina',
      logo: { '@type': 'ImageObject', url: 'https://lumina.example/img/og-lumina.png' },
    },
  };

  return (
    <main>
      <article>
        <h1>{post.title}</h1>
        {renderBlocks(post.body)}
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqItems.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqItems.map(({ block, next }) => ({
                '@type': 'Question',
                name: (block as { text: string }).text,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: (next as { text: string }).text,
                },
              })),
            }),
          }}
        />
      )}
    </main>
  );
}
