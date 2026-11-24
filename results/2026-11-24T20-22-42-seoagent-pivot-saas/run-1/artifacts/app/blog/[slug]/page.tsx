import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, listPostSlugs } from '../../../lib/posts';

export function generateStaticParams() {
  return listPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  try {
    const post = getPostBySlug(params.slug);
    return {
      title: `${post.title} — Lumina Blog`,
      description: post.description,
      alternates: { canonical: `https://lumina.example/blog/${post.slug}` },
      openGraph: {
        title: post.title,
        description: post.description,
        url: `https://lumina.example/blog/${post.slug}`,
        images: ['/img/og-lumina.png'],
      },
    };
  } catch {
    return {};
  }
}

function renderBody(body: string) {
  return body.split('\n\n').map((block, i) => {
    if (block.startsWith('## ')) {
      return <h2 key={i}>{block.replace(/^## /, '')}</h2>;
    }
    if (block.startsWith('### ')) {
      return <h3 key={i}>{block.replace(/^### /, '')}</h3>;
    }
    return <p key={i}>{block}</p>;
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  if (!listPostSlugs().includes(params.slug)) {
    notFound();
  }
  const post = getPostBySlug(params.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'Lumina Labs, Inc.' },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <h1>{post.title}</h1>
        {renderBody(post.body)}
      </article>
    </main>
  );
}
